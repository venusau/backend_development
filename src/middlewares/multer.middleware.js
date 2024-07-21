import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
     
      cb(null, file.originalname) // not a good practice, this is done because it works for very tiny amount of time 
    }
  })
  
export const upload = multer({ storage })