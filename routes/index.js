// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

// import template from './template'

// export default app => {
// 	app.use('/template', template);
// }
// 

'use strict';

import template from './template';

export default app => {
	app.use('/template', template);
}