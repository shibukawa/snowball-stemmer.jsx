#~/bin/sh
./node_modules/.bin/grunt build
cp -r dest snowball-stemmer
tar cvfz snowball-stemmer.tar.gz snowball-stemmer
