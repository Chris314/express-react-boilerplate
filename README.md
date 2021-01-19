# Express  React Boilerplate

This is a boilerplate to create a fullstack typescript application with Express and React. The package json compile and watch all files and regroup them in distribution folder.

This has the objective to simplify development for small personal website and avoid multiplications of micro-servers / cors / commands / *^*$%** during development.

Once done, you can upload the code to your server, start it with whatever you want.

## Installation / Startup

Install the packages and start nodemon to watch files

```bash
npm install
npm start
```

## Back End

Back-end use typescript Express. This may seems useless and/or frustrating to some users, but it become handy when creating DAOs, validation... It avoids making some mistakes and .

Right now there is no minification of the compiled server, but could be added. Just wanted to keep things simple.

```
npm run watch:server
```

## Front End

Front-end is a React typescript application. Same reasons as back-end. It's bundled by webpack. Could be changed to anything you like

```
npm run watch:client
```

## Environment

You can create a environment file, the server use *[dotenv](https://www.npmjs.com/package/dotenv)* to avoid commiting sensitive informations in a git repository.

## License
[GNU GPL](https://www.gnu.org/licenses/licenses.fr.html#GPL)
