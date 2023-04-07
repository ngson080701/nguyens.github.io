const Course = require("./model/Course");
class RegisterController {
    // GET to /register
    index(req, res) {
        res.render('regis'); //nay la ejs regis
    }
    //register /detail...
    show(req, res) {
        res.send('<a> ERROR!!!  RETURN GET TO REGISTER  </a>');
    }
    veri(req, res) {
        res.render('regis-veri'); 
    }
    jsonveri(req, res, next) {
        //nay chỉ là tạo trang nghịch jsson thôi 
//         Course.find({}, function (err, courses) {
//         // docs.forEach
//         res.json(...ten doc)
// });
        
        // Course.find({})
        //     .then(courses => res.render('home'))
        //     .catch(error => next(error));
    }
}
module.exports = new RegisterController();