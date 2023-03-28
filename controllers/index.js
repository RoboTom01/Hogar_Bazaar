const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/category', categoryRoutes);

module.exports = router;
