const express = require('express')
const router = express.Router()
const imageController = require('../controllers/image.controller')
const db = require('../controllers/subscriber.controller')
const imageUploader = require('../helpers/image-uploader')

router.post('/upload/:id', imageUploader.single('image'), imageController.upload)

module.exports = router