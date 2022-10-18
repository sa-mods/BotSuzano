heroku login -i

sleep(7)
uederavelar02@gmail.com
sleep(5)
@SuzanoBot01

git init

heroku apps:create botsuzano

heroku buildpacks:add heroku/nodejs

heroku buildpacks:add https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest

heroku buildpacks:add https://github.com/clhuang/heroku-buildpack-webp-binaries.git

heroku buildpacks:add https://github.com/gaumire/heroku-buildpack-mysql

heroku git:remote -a botsuzano

git config --global user.email "uederavelar02@gmail.com"
git config --global user.name "SuzanoBot"

git add . 

git commit -am "add features"

git push heroku master 

echo "tudo pronto"
