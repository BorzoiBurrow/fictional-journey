const router = require('express').Router();
const Routes = require('./api');

router.use('/api', Routes);



module.exports = router;