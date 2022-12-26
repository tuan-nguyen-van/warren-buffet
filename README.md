<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## Setup

You need docker, nodejs version 16 and npm version 8 installed on your machine to compile the frontend assets.

To set up and running with the project follow the steps below

```bash
# copy the example .env file.
cp .env.example .env

# Run development stack with docker
./vendor/bin/sail up

# install php dependencies
./vendor/bin/sail composer install

# generate a local app encryption key
./vendor/bin/sail artisan key:generate

# run migrations
./vendor/bin/sail artisan migrate

# Install front-end depedencies
npm install

#Enable Git hooks
npx husky install

# Start vite development server for front-end
npm run dev
```

**You can now visit http://127.0.0.1/ in your browser to access the site.**

.
