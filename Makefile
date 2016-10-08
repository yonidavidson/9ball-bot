.PHONY:  deploy dummy

default:dummy

deploy:
	gcloud preview app deploy ./node/app.yaml

dummy:
	echo " - empty action"