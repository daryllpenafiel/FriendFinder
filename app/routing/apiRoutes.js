var friendsData = require("../data/friendsData");

module.exports = function(app) {
    //displays all friends in friends.js
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
            friendsData.push(req.body);
            res.json(true);
    });

    app.post("/api/clear", function() {
        // Empty out the arrays of data
        friendsData = [];
        console.log(tableData);
      });
};