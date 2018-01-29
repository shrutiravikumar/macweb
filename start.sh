#!/usr/bin/env bash
. /home/twang6/.nvm/nvm.sh
export MONGO_URL='mongodb://localhost:27017/myapp'
export ROOT_URL='http://macgregor.mit.edu'
export PORT=8080
node /home/twang6/macweb-prod/bundle/main.js
