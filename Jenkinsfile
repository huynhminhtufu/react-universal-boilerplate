#!/bin/sh
ssh root@ssh.server <<EOF
    cd /home/app
    git checkout .
    git pull
    yarn
    yarn build
    pm2 reload www.app
    exit
EOF
