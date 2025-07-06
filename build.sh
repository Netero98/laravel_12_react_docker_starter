set -a
source .env.build
set +a
make build-and-push-prod-images
