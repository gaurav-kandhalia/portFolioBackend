const multer = require('multer')
console.log("------------------------------------------------multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        console.log(file.originalname)
      cb(null, file.originalname )
    }
  })
  
   const upload = multer({ 
    storage,

   })

   module.exports = { upload };