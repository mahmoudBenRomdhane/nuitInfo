export {}
import { NextFunction, Response, Router, Request } from 'express';
import { CREATED, OK } from 'http-status';
const catchAsync = require('../utils/catchAsync');
const { pick, omit } = require('lodash');
const httpStatus = require('http-status');
const  Reaction =  require('../models/reaction.model')

exports.updateReaction = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    const response = await Reaction.findOne({post : req.body.post , userName : req.body.userName})
    if(response){
        console.log("*-*-*-*-*-*-*-*-*-**-*-*-*-if")
        Reaction.findByIdAndUpdate(response._id,{
            reactionType : req.body.reactionType
        })
        res.status(CREATED).json({status :"reaction updated"})
    }else{
        console.log("-*-*-*-*-*-*-*-*-*-*-*else")
        const postAceeptedFields = pick(req.body, ['reactionType','post','userName',]);
        const reaction = new Reaction(postAceeptedFields);
        const result = await reaction.save();
        res.status(CREATED).json({status :"reaction Created", result})
    }

  });
  exports.getReactionByPost = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    const response = await Reaction.find({post : req.params.id})
    res.status(OK).json({response})
  })

