'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const templateSchema = new Schema({
	userName: String,
	password: String,
	id: Number,
	status: {
		type: Number,
		default: 1
	},
	createTime: Date,
	modifyTime: Date
})

templateSchema.index({id: 1});

const Template = mongoose.model('Template', templateSchema);

export default Template;