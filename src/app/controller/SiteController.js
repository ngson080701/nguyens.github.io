const Course = require('../controller/model/Course');

class SiteController {
    // GET to homepage
    home(req, res, next) {
        //SORT
        Course.find({})
            .then((courses) => res.render('home', {
                courses: courses ,
                title : 'Top sản phẩm bán chạy'
            }))
            .catch(next);

        //LONG
        // Course.find({}, function (err, courses, next) {
        //     if (!err) return res.json(courses);
        //     else {
        //         next(err);
        //         //  res.status(404).json({ Error: ('error') })
        //     }
        // })

        // res.render('home'); //   nay la ejs home
    }

    //Get to /search...
    show(req, res) {
        res.send('PAGE NULL!!! Vui long quay lai trang chu ');
    }
}
module.exports = new SiteController();
