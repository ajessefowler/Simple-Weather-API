# Simple Weather API

A simple API for accessing Dark Sky's weather data.

## Requirements

You must provide a Dark Sky API key to be able to use this application. To use this API locally, you must have Node.js installed. To deploy on Heroku, Git and the Heroku CLI must be installed as well.

## Running Locally

After cloning or downloading, change directory to the Simple-Weather-API directory.

```
node index.js
```

The API will now be active at localhost:3000. You must provide a latitude and longitude to retrieve data, for example:

```
localhost:3000/?lat=40&lng=-90
```

## Deploying to Heroku

```
heroku create
git push heroku master
```

Be sure to add your Dark Sky API key to the environment variables.

