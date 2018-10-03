const request = require('request');

const key = process.env.DARK_SKY_KEY;
const url = 'https://api.darksky.net/forecast/' + key + '/';

const appRouter = function (app) {
    app.get("/", function(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        
        if (req.query.lat && req.query.lng) {
            finalUrl = url + req.query.lat + ',' + req.query.lng;
            request(finalUrl, function(err, response, body) {
                if (!err) {
                    res.status(200).send(body);
                }
            });
        } else {
            res.status(200).send("Welcome to our restful API with no parameters");
        }
    });
}
  
module.exports = appRouter;