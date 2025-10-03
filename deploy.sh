
set -e
npm run build
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Seitola/Portfolio.git main:main

git push -u origin main

cd -
