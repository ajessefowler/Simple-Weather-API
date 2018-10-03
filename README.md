# Simple Weather API

A simple API for accessing Dark Sky's weather data.

## Requirements

You must provide a Dark Sky API key to be able to use this application. To use this API locally, you must have Node.js installed. To deploy on Heroku, Git and the Heroku CLI must be installed as well.

## Running Locally

After cloning or downloading, you must first add your Dark Sky API. In routes/routes.js, set the key variable to your Dark Sky key. Then, run the following command in the Simple Weather API directory to start the server.

```
node index.js
```

The API will now be active at localhost:3000. You must provide a latitude and longitude to retrieve data, for example:

```
localhost:3000/?lat=40&lng=-90
```

## Deploying to Heroku

Be sure to remove your Dark Sky API key from the application and replace it with an environment variable.

```
heroku create
git push heroku master
```

