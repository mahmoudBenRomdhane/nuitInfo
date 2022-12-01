export {}
import { NextFunction, Response, Router, Request } from 'express';
import { CREATED, OK } from 'http-status';
const catchAsync = require('../utils/catchAsync');
const { pick, omit } = require('lodash');
const httpStatus = require('http-status');
const  Comment =  require('../models/comment.model')

exports.createComment = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    const postAceeptedFields = pick(req.body, ['userName','post','content',]);
    const comment = new Comment(postAceeptedFields);
    const result = await comment.save();
    res.status(CREATED).json({status :"comment Created", result})
  });
  exports.getCommentByPost = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    const response = await Comment.find({post : req.params.id})
    res.status(OK).json({response})
  });

