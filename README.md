# Faithmade

### Setup
This project pulls in the required dependencies using [Composer](https://getcomposer.org). Be sure to install that before continuing.

If you don't have it installed, here is a quick snipped to install it just for this project.

```
curl -sS https://getcomposer.org/installer | php
```

#### Install dependencies
Run `php composer.phar install` inside the project directory.

If you are going to be symlinking the Faithmade plugins and themes from elsewhere, add the `--no-dev` flag to install only the third party dependencies.

```
php composer.phar install --no-dev
```

#### Configure database settings
Open the provided .env file and insert your database connection details.

#### Start server
This is built to run on the built-in server in PHP 5.4 and greater.
```
php -S 0.0.0.0:8080
```

The `0.0.0.0` is so that your site can be accessed on any device on your local network, iPad, iPhone, etc. You can use whatever port number you would like as long as it is not being used by something else on your computer.

#### That's it!
Just point your browser to [0.0.0.0:8080](http://0.0.0.0:8080) and install WordPress. Note that the WordPress install directory is located at `/wordpress` so in order to login you will need to visit [0.0.0.0:8080/wordpress/wp-admin](http://0.0.0.0:8080/wordpress/wp-admin).
