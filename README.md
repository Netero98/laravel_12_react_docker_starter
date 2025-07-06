## How to set up the project locally?

```
make init
```

## How to deploy in Coolify?
- rent VPS, link domain name to server IP, install Coolify
- git clone project in new folder locally to be sure that local envs will not be used in production during docker build
- prepare your own docker registry or use public docker hub registry. docker-login your local machine and server.
- In clean repo:
    ```
    REGISTRY=registry.example.com APP_URL=https://application.ru make build-and-push-prod-images
    ```
- In Coolify:
  - choose docker-compose without git deploy option
  - copy compose.prod.yaml there
  - link domain name to nginx container
  - fill your envs
  - deploy
