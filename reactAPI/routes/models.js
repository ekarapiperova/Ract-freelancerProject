const controller = require('../controller/');
const isAuth = require('../utils/isAuth');
const router = require('express').Router();


router.get('/', controller.job.get);
router.get('/:id', controller.job.getOne);

router.post('/', isAuth(), controller.job.post);

router.put('/:id', controller.job.put);


module.exports=router;