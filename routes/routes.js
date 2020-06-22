const express = require('express');
const user 	  = require('../controller/NotificationController');

const router = express.Router();

router.post('/api/notification/push', user.push);

module.exports = router;