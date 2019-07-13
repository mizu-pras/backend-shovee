'use strict'
const multer = require('multer')
const DataUri = require('datauri')
const path = require('path')

const storage = multer.memoryStorage()

const multerUploads = multer({ storage }).array('images')
const dUri = new DataUri()

const dataUri = req => (
    path.extname(req.originalname).toString()
)

exports.multerUploads = multerUploads
exports.dataUri = dataUri