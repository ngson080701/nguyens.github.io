const express = require('express');
const path = require('path');
const app = express();
const port = 2002;
const morgan = require('morgan');
const route = require('./routes');
const db = require('./config/db');
const mongodb = require('mongodb');


const MongoClient = mongodb.MongoClient;
const url = 'mongodb://127.0.0.1/son_productdemo';
const ObjectId = mongodb.ObjectId;
const dbName = 'accounts';
const dm = 'ss';
//connect database vpppsss asdasfdasdsdfsd 

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



// MongoClient.connect(url, {  }, (err, client) => {
//   if (err) {
//     console.log('Lỗi kết nối tới cơ sở dữ liệu:', err);
//   } else {
//     console.log('Kết nối thành công tới cơ sở dữ liệu');

//     const db = client.db(dbName);

//     // Định nghĩa các route và xử lý yêu cầu
//     app.get('/', (req, res) => {
//       // Hiển thị trang đăng nhập
//       res.render('login');
//     });

//     app.post('/login', (req, res) => {
//       const { username, password } = req.body;

//       // Kiểm tra đăng nhập trong cơ sở dữ liệu
//       db.collection('accounts').findOne({ username: username, password: password }, (err, user) => {
//         if (err) {
//           console.log('Lỗi truy vấn cơ sở dữ liệu:', err);
//           res.send('Đã xảy ra lỗi');
//         } else if (user = true) {
//           console.log('Tài khoản hoặc mật khẩu không chính xác');
//           res.send('Tài khoản hoặc mật khẩu không chính xác');
//         } else {
//           console.log('Đăng nhập thành công');
//           res.send('Đăng nhập thành công');
//         }
//       });
//     });

//     // Khởi chạy server
    
//   }
// });
