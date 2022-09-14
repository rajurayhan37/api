const pool = require('../config/db.config')
function upload(req, res){
    if(req.file.filename){
        let query = `UPDATE subscribers SET image = '${req.file.filename}' WHERE id = '${req.params.id}'`;
        pool.query(query, function(err, result){
            if(err){
                console.log(query)
                res.json({message: 'Something Wrong!'})
            }
            else{
                res.status(200).json({ message: 'Successfully uploaded!'})
            }
        })
    }
    else{
        res.status(501).json({ message: 'Something Wrong!'})
    }
}

module.exports = {
    upload: upload
}