const express = require('express');
const path = require('path');
const app = express();
const port = 2002;
const morgan = require('morgan');
const route = require('./routes');
const db = require('./config/db');
//connect database
db.connect();
// app.use(morgan('combined'))
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/src/resoure/public/style',express.static(path.join(__dirname, 'resoure/public/style')));
// app.use(express.static(path.join(__dirname, 'resoure')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './resoure/views/component/'));
// app.set('views', path.join(__dirname, 'resoure','views','component'));
// route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
