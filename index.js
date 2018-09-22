const express = require('express');
const routes = require('./routes/routes.js');
const app = express();
const port = process.env.PORT || 3000;

routes(app);

const server = app.listen(port, () => {
    console.log("app running on port", server.address().port);
});

