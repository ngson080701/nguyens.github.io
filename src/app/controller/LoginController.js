class LoginController {
    // GET to /login
    index1(req, res) {
        res.render('login'); // ejs login
    }
}

module.exports = new LoginController();
