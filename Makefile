.PHONY:  shell 

default:shell

shell:
	docker-compose run --rm app /bin/bash