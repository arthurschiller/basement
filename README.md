# basement
Super simple scaffold for web projects with gulp, sass, webpack, …

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
  - compile your sass and js
  - refresh the browser the moment you refresh files

you can just use the default gulp task
```sh
$ gulp
```
or
```sh
$ gulp dev
```


And to:
  - build your project for distribution
  - copy over all your assets

use: 
```sh
$ gulp dist
```

### Development
Feedback, improvements, forks etc. are of course welcome! :)

   [Tutorial]: <https://css-tricks.com/gulp-for-beginners/>
