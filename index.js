const express = require('express');
const routes = require('./routes/routes.js');
const app = express();
let port = process.env.PORT;

if (port == null || port =='') {
    port = 8000;
}

routes(app);

const server = app.listen(port, () => {
    console.log("app running on port", server.address().port);
});

