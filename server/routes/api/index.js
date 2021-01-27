const express = require('express');
const mediaRouter = require('./media');
const router = express.Router();

router.use('/media', mediaRouter);
module.exports = router;
