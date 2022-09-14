const pool = require('../config/db.config')

let subscriberdb = {}

subscriberdb.register = (body) =>{
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO subscribers (name, email, password) VALUES('${body.name}', '${body.email}', '${body.password}')`, (err, result) => {
            if(err){
                return reject(err)
            }
            else resolve(result)
        })
    })
}

subscriberdb.login = (body) =>{
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM subscribers WHERE email = '${body.email}' AND password = '${body.password}'`, (err, result) => {
            if(err){
                return reject(err)
            }
            else resolve(result)
        })
    })
}


subscriberdb.all = () =>{
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM subscribers`, (err, result) => {
            if(err){
                return reject(err)
            }
            else resolve(result)
        })
    })
}

subscriberdb.one = (id) =>{
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM subscribers WHERE id = ?`,[id], (err, result) => {
            if(err){
                return reject(err)
            }
            else resolve(result)
        })
    })
}

subscriberdb.delete = (id) =>{
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM subscribers WHERE id = ?`,[id], (err, result) => {
            if(err){
                return reject(err)
            }
            else resolve(result)
        })
    })
}

subscriberdb.profile = (image, id) =>{
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE subscribers image = ? WHERE id = ?`,[image],[id], (err, result) => {
            if(err){
                return reject(err)
            }
            else resolve(result)
        })
    })
}

module.exports = subscriberdb