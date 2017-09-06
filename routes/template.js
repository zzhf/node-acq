'use strict';

import express from 'express';
import TemplateModel from './../models/template';

const router = express.Router();

// router.use('/', (req, res) => {
// 	console.log('访问template' + new Date());
// })

// router.get('/add', (req, res, next) => {
// 	let date = new Date();
// 	console.log('访问了add服务' + new Date());
// 	const temp = {
// 		userName: 'aaa',
// 		password: '123456',
// 		id: 1,
// 		status: 2,
// 		createTime: date,
// 		modifyTime: date
// 	}
// 	const tem = new TemplateModel({
//         userName: 'aaa',
//         password: '123456',
//         id: 1,
//         status: 2,
//         createTime: date,
//         modifyTime: date
// 	})
// 	tem.save(function(err) {
// 		console.log('保存错误'+ err.message);
// 	})
// 	try {
//         TemplateModel.create(temp);
// 	} catch (err) {
// 		console.log('失败消息' + err.message);
// 		res.send({
// 			status: 0,
// 			success: false,
// 			message: '添加失败'
// 		})
// 	}
// })

router.post('/add', (req, res, next) => {
	let date = new Date();
	const temp = req.body;
	console.log(temp);
	if (temp) {
		try {
			TemplateModel.create(temp);
			res.send({
				status: 0,
				success: true,
				message: '添加成功'
			})
		} catch (err) {
			res.send({
				status: 0,
				success: true,
				message: '创建模板失败' + err.message
			})
		}
	} else {
		res.send({
			status: 0,
			success: false,
			message: '模板不能为空'
		})
	}
})

module.exports = router;