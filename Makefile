run:
ifndef cmd
	$(error Please provide a command via cmd, e.g. make run cmd="php artisan")
endif
	docker compose -f compose.dev.yaml run --rm php-node-cli bash -lc "$(cmd)"

ini:
	make prepare-env
	make down
	make up-detached
	make prepare-running-containers

init:
	make prepare-env
	make down
	make build-pull
	make up-detached-build
	make prepare-running-containers

prepare-running-containers:
	make composer-i
	make create-test-db
	make migrate-fresh
	make seed app-key-gen
	make clear-cache

prepare-env:
	@if [ ! -f .env ]; then \
		echo "Copying .env.example to .env"; \
		cp .env.example .env; \
	else \
		echo ".env already exists. Skipping."; \
	fi
build-pull:
	docker compose -f compose.dev.yaml build --pull
up-detached-build:
	docker compose -f compose.dev.yaml up -d --build
up-detached:
	docker compose -f compose.dev.yaml up -d
up:
	docker compose -f compose.dev.yaml up
composer-i:
	make run cmd="composer install"
migrate-fresh:
	make run cmd="php artisan migrate:fresh"
seed:
	make run cmd="php artisan db:seed"
app-key-gen:
	make run cmd="php artisan key:generate"
npm-i:
	make run cmd="npm install"
npm-run-dev:
	make exec cmd="npm run dev"
down:
	docker compose -f compose.dev.yaml down --remove-orphans > /dev/null 2>&1 && echo "Контейнеры опущены"
create-test-db:
	make run cmd="php artisan app:recreate-test-database"
clear-cache:
	make run cmd="php artisan cache:clear"
	make run cmd="php artisan config:clear"
	make run cmd="php artisan route:clear"
	make run cmd="php artisan view:clear"
	make run cmd="php artisan event:clear"
check:
	make down
	make up-detached
	make test-backend
	make test-frontend
	make test-e2e
test-backend:
	make run cmd="php artisan test --parallel"
test-b:
	make test-backend
test-frontend:
	make run cmd="npm run test"
test-f:
	make test-frontend
test-e2e:
	make down
	#because vite server needs to be started with dusk envs to be accessible from selenium container
	docker compose --env-file .env.dusk.local -f compose.dev.yaml up -d
	docker compose --env-file .env.dusk.local -f selenium.dev.yaml up -d
	@sleep 3
	#becase dusk understands that it needs to use .env.dusk.local, we dont need to specify it here
	make run cmd="php artisan dusk"
	#becase currently running vite server will not respond on host machine, wrong VITE_DEV_SERVER_URL
	make down
# can use only if containers are already running with .env.dusk.local
test-e2e-light:
	make run cmd="php artisan dusk"


#======== PRODUCTION ==================================================================================================
build-and-push-prod-images:
	docker build --pull --no-cache \
		--file=docker/common/Dockerfile \
		--target=nginx-production \
		--tag=${REGISTRY}/application-nginx:latest \
		.

	docker --debug push ${REGISTRY}/application-nginx:latest

	docker build --pull --no-cache \
		--file=docker/common/Dockerfile \
		--target=php-fpm-production \
		--tag=${REGISTRY}/application-php-fpm:latest \
		.

	docker --debug push ${REGISTRY}/application-php-fpm:latest

	docker build --pull --no-cache \
		--file=docker/production/php-cli/Dockerfile \
		--target=php-cli-prod \
		--tag=${REGISTRY}/application-php-cli:latest \
		.

	docker --debug push ${REGISTRY}/application-php-cli:latest
