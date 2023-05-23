const account = require('../controller/model/Account');
class AccMnController {
    // GET to /DevicesController
    index(req, res , next) {
        // account.findOne({ slug: req.params.slug })
        //     .then((accounts) => res.render('accMn', {
        //         accounts: accounts ,
        //         name: ' cc'
        //     }))
        //     .catch(next);
        account.find({})
            .then((accounts) => res.render('accMn', {
                accounts: accounts ,
                title: '--------------------',
                name: 'cc'
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
    
//     create(req, res) {
//         res.render('device-create')
//     }
//     store(req, res) {
//         // res.json(req.body)
//         const device = new Course(req.body);
//         device.save(function (err) {
//         if (err) return handleError(err);
//         // saved!
//         res.send('Da them thiet bi')
// });
//     }

}

module.exports = new AccMnController();
