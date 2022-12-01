export {};
import { NextFunction, Response, Router } from 'express';

import { OK } from 'http-status';
import express from 'express';
const  webRouters = require('./webRoutes/index') 
const boRouters = require('./boRoutes/index')
const multer = require('multer');

const diskStorage = multer.diskStorage({
  destination: (req:any, file:any, cb:any) => {
    cb(null, 'src/upload');
  },
  filename: (req:any, file:any, cb:any) => {
    const mimeType = file.mimetype.split('/');
    const fileType = mimeType[1]
    const fileName = Date.now().toString()+ '.' + fileType;
    cb(null, fileName);
  },
});



const storage = multer({ storage: diskStorage }).single(
  'file'
);




const router = express.Router();

router.post('/upload',storage, (req:any, res : Response, next:NextFunction) => {
  console.log(req.file.filename);
  
  res.status(OK).json({fileName : req.file.filename})
  return next();
});
router.get('/status', (_, res : Response, next:NextFunction) => {
  res.status(OK).json({status : "ok"})
  return next();
});
router.use('/web',webRouters)
router.use('/bo',boRouters)


module.exports = router;
