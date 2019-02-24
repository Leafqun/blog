
cd $PROJ_PATH/blog
cnpm install
npm run build

pm2 reload 0
