const router = require('express').Router();
const api = require('./api/routestest');

router.use('/api', api);

module.exports = router;