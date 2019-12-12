#!/bin/sh

case "$NODE_ENV" in
    "prod")
        sed -i 's/3b1d34311a4b504d0fe9a68050b184a4b893076a5ff9df6366e5516d7da6bc64/57f8325e79137b3cf25b5b377316ad6d6302056bb591becc7747f40e210e1616/' /usr/share/nginx/html/admin/config.yml
        ;;
    "preprod")
        ;;
    "develop"|*)
	for i in `ls /usr/share/nginx/html/*.js`; do
		sed -i 's/cloud-api-service.prod.oxeva.cloud/102-review-master-z38y0t.lab.oxeva.cloud/' /usr/share/nginx/html/$i
	done
        ;;
esac

echo $NODE_ENV > /usr/share/nginx/html/.env

nginx
