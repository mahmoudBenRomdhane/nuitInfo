export {};
const express = require('express');
const controller = require('../controllers/comment.controller');

const router = express.Router();


router.route('/').post(controller.createComment);
router.route('/:id').get(controller.getCommentByPost)
// router.route('/').get(controller.)

module.exports = router;