export {};
const express = require('express');
import { OK } from 'http-status';
import { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.get('/status',(req:Request, res : Response, next:NextFunction) => {
    res.status(OK).json({status : "web Routes OK"})
  });
module.exports = router;