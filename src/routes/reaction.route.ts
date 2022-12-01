export {};
const express = require('express');
const controller = require('../controllers/reaction.controller');

const router = express.Router();


router.route('/').post(controller.updateReaction);
router.route('/:id').get(controller.getReactionByPost)

module.exports = router;