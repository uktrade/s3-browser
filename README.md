# s3-browser

Browse files on S3, upload files to S3, and download files from S3.


## Installation

```shell
npm i @uktrade/s3-browser
```

Then import (s3-browser) from `s3-browser`


## Run locally

### Prerequisites

You will need the following technologies to develop this locally

- NodeJs
- Docker and docker-compose

### Check out the source code

```shell
# Run minio in the background
docker compose up -d
# (Time passes... containers are built)

npm install

npm start
# (This will open the html files in your default browser)
````


## Licenses

The code of s3-browser is released under the [MIT License](./LICENSE). However, bundled are several [Font Awesome Free](https://fontawesome.com/license/free) icons in SVG format, licensed under the [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/).
