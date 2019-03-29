const express = require('express');
const router = express.Router();

const dbHelper = require('../../data/dbHelpers/dbHelpers');

router.get('/', async (req, res) => {
	try {
		const actions = await dbHelper.getActions();
		res.status(200).json(actions);
	} catch (error) {
		res.status(500).json({ error: 'there was a error trying to get the actions from database' });
	}
});

router.post('/', async (req, res) => {
	const body = req.body;
	try {
		const result = await dbHelper.addAction(body);
		res.status(201).json(result);
	} catch (error) {
		res.status(500).json({ error: 'error trying to save a action in database' });
	}
});

module.exports = router;
