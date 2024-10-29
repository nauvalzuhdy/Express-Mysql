
const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (username, email, kata_sandi, status_paket) VALUES ('${body.username}', '${body.email}', '${body.kata_sandi}', '${body.status_paket}')`;

    return dbPool.execute(SQLQuery);
}

const updateUser = (body, userId) => {
    const SQLQuery = `UPDATE users SET username = '${body.username}', email = '${body.email}', kata_sandi = 
                      '${body.kata_sandi}', status_paket = '${body.status_paket}' WHERE userId = ${userId}`;
    return dbPool.execute(SQLQuery);
}

const deleteUser = (userId) => {
    const SQLQuery = `DELETE FROM users WHERE userId = ${userId}`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}

// dbPool.execute('SELECT * FROM users', (err, rows) => {
//     if(err) {
//         res.json ({
//             message: 'connection failed'
//         })
//     }

//     res.json ({
//         message: 'connection success',
//         data: rows,
//     })
// })