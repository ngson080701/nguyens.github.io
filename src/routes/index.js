const regisRoute = require('./register');
const loginRoute = require('./login');
const siteRoute = require('./site');
const siteDevice = require('./devices');
const conTact = require('./contact');
const accMn = require('./accMn')
const notification = require('./noti')
const Statistical = require('./statistical')
function route(app) {
    app.use('/login', loginRoute);
    app.use('/register', regisRoute);
    app.use('/devices', siteDevice);
    app.use('/contact', conTact)
    app.use('/account-Manager', accMn)
    app.use('/notification', notification);
    app.use('/Statistical', Statistical);
    app.use('/', siteRoute);
}

module.exports = route;
