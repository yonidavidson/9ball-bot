.PHONY:  shell run build deploy

default:shell

shell: build
	docker-compose run --rm app /bin/bash

run: build
	docker-compose up

build:
	docker-compose build

deploy:
	gcloud preview app deploy