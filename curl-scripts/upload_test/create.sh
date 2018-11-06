#!/bin/bash

curl --include --request POST 'http://localhost:4741/uploads' \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "upload": {
      "name": "'"${NAME}"'",
      "url": "'"${URL}"'"
    }
  }'

echo
