export {}
import { NextFunction, Response, Router, Request } from 'express';
import { CREATED, OK } from 'http-status';
const catchAsync = require('../utils/catchAsync');
const { pick, omit } = require('lodash');
const httpStatus = require('http-status');
const  Post =  require('../models/post.model')

exports.createPost = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    const postAceeptedFields = pick(req.body, ['userName','content','image',]);
    const post = new Post(postAceeptedFields);
    const result = await post.save();
    res.status(CREATED).json({status :"sent to Admin", result})
  });
exports.getposts = catchAsync(async (req : Request, res : Response, next : NextFunction) => { 
    const response = await Post.find()
    res.status(OK).json({response})
})