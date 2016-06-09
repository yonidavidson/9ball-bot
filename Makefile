.PHONY:  shell run build deploy

default:shell

shell:
	docker-compose run --rm app /bin/bash

run:
	docker-compose up

build:
	docker-compose build

deploy:
	gcloud preview app deploy

test:
	docker-compose run --rm app npm test