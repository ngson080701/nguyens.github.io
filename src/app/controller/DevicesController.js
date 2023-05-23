const Course = require('../controller/model/Course');
const mongoose = require('mongoose');

class DevicesController {
    // GET to /DevicesController
    index(req, res , next) {
        Course.findOne({ slug: req.params.slug })
            .then((courses) => res.render('device', {
                courses: courses ,
              
            }))
            .catch(next);
            
            // .then(courses => {
            //     //   res.json(courses)
            //       res.render('device');
            // })
            // .catch(next)
        // res.send(req.params.slug)
        // res.render('device'); // ejs DevicesController
        
    }
    create(req, res) {
        res.render('device-create')
    }
    store(req, res) {
        // res.json(req.body)
        const device = new Course(req.body);
        device.save(function (err) {
        if (err) return handleError(err);
        // saved!
        res.send('Da them thiet bi')
});
    }
    edit(req, res , next) {
        Course.findById(req.params.id)
            .then((courses) => res.render('device-edit', {
                device: courses
            }))
            .catch(next)
     

    }

}

module.exports = new DevicesController();
