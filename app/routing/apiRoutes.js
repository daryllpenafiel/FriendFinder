var friendsData = require("../data/friendsData");

module.exports = function(app) {


    app.post("/api/friends", function (req, res) {
            friendsData.push(req.body);
            res.json(true);
    });

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


};