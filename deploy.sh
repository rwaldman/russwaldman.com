yarn build
find build -type f -exec gzip "{}" \; -exec mv "{}.gz" "{}" \;
aws s3 cp --recursive --acl public-read --content-encoding gzip --cache-control max-age=60 build s3://russellwaldman.com