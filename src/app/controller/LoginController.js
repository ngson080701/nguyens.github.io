
const accountt = require('../controller/model/Account');
class LoginController {
    // GET to /login
    index1(req, res) {
        res.render('login'); // ejs login
    }
    index2(req, res) {
        accountt.find({})
            .then((accounts) => res.render('login', {
                accounts: accounts ,
                title : 'Chao mung cac ban toi trang dang nhap'
            }))
            .catch(next);; // ejs login
    }
    createAcc(req, res, next) {
        const CreateAccount = new accountt(req.body);
        CreateAccount.save(function (err) {
        if (err) return handleError(err);
        // saved!
            // res.sendStatus('DONE');
            res.redirect("/login") 
            
});
    }

}

module.exports = new LoginController();
