.PHONY:  shell build

default:shell

shell: build
	docker-compose run --rm app /bin/bash

build:
	docker-compose build