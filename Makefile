.PHONY: all test clean

build:
	npm run build
	cp -R static/ dist/static/
	cp static/favicon.ico dist/favicon.ico

clean:
	rm -rf dist

start:
	npm run start

remove_mac_files:
	find ./ -name ".DS_Store" -exec rm {} \;

config.dev:
	cp src/config.template.ts src/config.ts

config.prod:
	cp src/config.prod.ts src/config.ts

# -------------------------------

publish: clean config.prod build remove_mac_files
	aws s3 sync --delete --cache-control max-age=604800 dist s3://hungrylegs.com
	aws cloudfront create-invalidation \
    --distribution-id EPC5U432PDE2N \
    --paths "/*"
