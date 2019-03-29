const express = require('express');
const router = express.Router();

const dbHelper = require('../../data/dbHelpers/dbHelpers');

router.get('/', async (req, res) => {
	try {
		const projects = await dbHelper.getProjects();
		res.status(200).json(projects);
	} catch (error) {
		res.status(500).json({ error: 'error trying to get the data from database' });
	}
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const result = await dbHelper.getProjectByIdWithActions(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ error: 'error trying to get a specific action from database' });
	}
});

router.post('/', async (req, res) => {
	const body = req.body;
	try {
		const result = await dbHelper.addProject(body);
		res.status(201).json(result);
	} catch (error) {
		res.status(500).json({ error: 'error trying to save the project in database' });
	}
});

module.exports = router;
