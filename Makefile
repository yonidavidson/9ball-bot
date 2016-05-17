.PHONY:  shell build

default:shell

shell: build
	docker-compose run --rm app /bin/bash

run: build
	docker-compose up


build:
	docker-compose build