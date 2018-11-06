#!/bin/bash

curl --include --request PATCH "http://localhost:4741/uploads/${ID}" \
  --header "Content-Type: application/json" \
  --data '{
    "upload": {
      "name": "'"${NAME}"'",
      "url": "'"${URL}"'"
    }
    }
  }'

echo
