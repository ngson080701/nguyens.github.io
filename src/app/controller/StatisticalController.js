const Course = require("./model/Course");
class StatisticalController {
    // GET to /StatisticalController
    index(req, res) {
        res.render('statistical'); //nay la ejs StatisticalController
    }
   
    
}
module.exports = new StatisticalController();