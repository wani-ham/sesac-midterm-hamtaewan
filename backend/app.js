const express = require('express');
const app = express();
const PORT = 8080;
const router = require('./routes/todo.js');
const { sequelize } = require('./models');

// app.set('view engine', 'ejs');
// app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);


sequelize   
    // force: true = 서버 실행때마다 테이블을 재생성
    // force: false = 서버 실행때마다 테이블이 없으면 생성
    .sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database connected!');
            console.log(`Server running in PORT: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err)
    });





