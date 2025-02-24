const express = require('express')
const router = express.Router()
const {upload} = require('../middlewares/multer.middleware.js')


const Add = require('../controller/add');
const Update  = require('../controller/update')
const Login  = require('../controller/login')
const getProjects = require('../controller/Projects')
const Delete = require('../controller/delete')

router.post('/add', upload.single('fileUpload'), Add);

router.post('/update',Update);
router.post('/login',Login);
router.get('/getProjects',getProjects)
router.post('/delete',Delete)

module.exports = router;