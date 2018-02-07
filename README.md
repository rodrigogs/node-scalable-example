# node-scalable-example

Setup
-----
```bash
$ git clone git@github.com:rodrigogs/node-scalable-example.git
$ cd node-scalable-example
$ yarn install
```

Development
-----------
* nodemon
  ```bash
  $ yarn start
  ```
* debug
  ```bash
  $ node --inspect=${DEBUG_PORT} ./bin/www
  ```

Production
----------
* docker
  ```bash
    $ docker-compose up .
  ```
* pm2
  ```bash
    $ npm install pm2 -g
    $ pm2 start ./bin/www
  ```
