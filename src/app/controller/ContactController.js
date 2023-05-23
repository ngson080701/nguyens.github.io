
class ContactController {
    // GET to /page contact
    async index(req, res) {
        var pool = await conn;
        var sqlString = 'SELECT * FROM CHUYENNGANH';
        return await pool.request().query(sqlString, function (err, data) {
            console.log(err,data)
        })
        res.render('contact'); // ejs contact
    }
}

module.exports = new ContactController();
