const express = require('express');
const { getTop100Song } = require('./song');

const router = express.Router();

router.get('/top-100/:type', getTop100Song);

module.exports = router;
