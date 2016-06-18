.PHONY:  shell run build deploy

default:shell

shell:
	docker-compose run --rm app /bin/bash

run:
	docker-compose up

build:
	docker-compose build

deploy:
	gcloud preview app deploy --version 20160618t152105

test:
	docker-compose run --rm app npm test