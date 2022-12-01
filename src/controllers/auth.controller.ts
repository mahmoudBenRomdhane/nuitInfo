export {}
import { NextFunction, Response, Router, Request } from 'express';
const catchAsync = require('../utils/catchAsync');

const register = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    
  });