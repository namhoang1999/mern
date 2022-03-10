const router = require('express').Router();
let Comment = require('../models/comment.model');

// GET Request
router.route('/get').get((req, res) => {
    Comment.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST Request
router.route('/post').post((req, res) => {
    const content = req.body.content;
    const username = req.body.username;

    const newComment = new Comment({
        content,
        username,
    });

    newComment.save()
        .then(() => res.json('Comment successfully added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE Request
router.route('/delete/:id').delete((req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Comment successfully deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;