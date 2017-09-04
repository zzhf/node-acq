'use strict';

import express from 'express';
import TemplateModel from './../models/template';

const router = express.Router();

router.use('/', (req, res) => {
	console.log('访问template' + new Date());
})

router.get('/add', (req, res) => {
	let date = new Date();
	const temp = {
		userName: 'aaa',
		password: '123456',
		id: 1,
		status: 2,
		createTime: date,
		modifyTime: date
	}
	TemplateModel.create(temp);
})

export default router;