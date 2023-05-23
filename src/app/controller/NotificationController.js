const Course = require("./model/Course");
class Notification {
    // GET to /notification
    index(req, res) {
        res.render('noti'); //nay la ejs noti
    }
   
    
}
module.exports = new Notification();