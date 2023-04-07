const regisRoute = require('./register');
const loginRoute = require('./login');
const siteRoute = require('./site');
const siteDevice = require('./devices');
const conTact = require('./contact');
function route(app) {
    app.use('/login', loginRoute);
    app.use('/register', regisRoute);
    app.use('/devices', siteDevice);
    app.use('/contact', conTact)
    app.use('/', siteRoute);
}

module.exports = route;
