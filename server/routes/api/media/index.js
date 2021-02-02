const express = require('express');
const { getTop100Song, getSong } = require('./song');

const router = express.Router();

router.get('/top-100/:type', getTop100Song);

router.get('/song', getSong);

module.exports = router;
