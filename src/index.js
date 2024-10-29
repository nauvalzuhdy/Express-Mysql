require('dotenv').config()
const PORT = process.env.PORT || 5000 ;
const express = require('express');

const usersRoutes = require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs.js');

const app = express();

app.use(middlewareLogRequest);

app.use(express.json());
//middleware mengizinkan semua request body berupa json

app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
})


// app.get("/", (req, res) => {
//     res.json({
//         nama: "zuhdy",
//         email: "zuhdy.dev@gmail.com"
//     });
// })

// app.post("/", (req, res) => {
//     res.send('Hello POST Method');
// })

// app.use((req, res, next) => {
//     console.log('middleware ke dua');
//     next();
// });


//app.method(path, hendler);
// app.use("/", (req, res, next) => {
//     res.send('Hello World');
// })