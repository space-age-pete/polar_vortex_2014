var path = require("path");

module.exports = function (app) {

    app.get("/cold", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/any.html"));
    })

}