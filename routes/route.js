const router = require('express').Router();
const {postData} = require('../controller/appController')


// HTTP requests

router.post('/user', postData);



module.exports = router;