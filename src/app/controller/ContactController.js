class ContactController {
    // GET to /page contact
    index(req, res) {
        res.render('contact'); // ejs contact
    }
}

module.exports = new ContactController();
