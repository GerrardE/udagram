aws s3 cp --recursive --acl public-read ./www s3://udagram-s3/udagram-frontend/
aws s3 mv s3://udagram-s3/udagram-frontend/ s3://udagram-s3 --recursive
aws s3 cp --acl public-read --cache-control="max-age=0, no-cache, no-store, must-revalidate" ./www/index.html s3://udagram-s3/