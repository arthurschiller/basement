# basement
Super simple web-scaffold with gulp, sass and other fine stuff.
The gulpfile is build around this sweet [Tutorial] by [Zell Liew]. So it's pretty easy to follow.

## Installation
First make sure you have nodeJS installed on your machine.
You can get it here: <https://nodejs.org>

Then install gulp globally:
```sh
$ sudo npm install gulp -g
```
*»sudo«* is only needed on a Mac.

And finally change to the directory of your basement project and install the needed components via:
```sh
$ npm install
```

### Tasks
To:
  - start a webserver
  - compile your sass
  - minify your your js and css
  - refresh the browser the moment you refresh files

you can just use the default gulp task
```sh
$ gulp
```


And to:
  - build your project for distribution
  - copy all your assets

use: 
```sh
$ gulp build
```

### Development
Feedback, improvements, forks etc. are of course welcome! :)

   [Tutorial]: <https://css-tricks.com/gulp-for-beginners/>
   [Zell Liew]: <http://www.zell-weekeat.com>
