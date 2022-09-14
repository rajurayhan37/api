const pool = require('../config/db.config')

const checkEmailExist = (req, res, next) => {
    const query = `SELECT email FROM subscribers WHERE email = '${req.body.email}'`
    pool.query(query, (err, results)=>{
        if(err){
            res.json({ message: 'Something wrong!'})
        }
        else{
            if(results.length > 0)
                res.status(400).json({message: 'Email already used!'})
            else{
                next()
            }
        }
    })
}

module.exports = {
    checkEmailExist
}

