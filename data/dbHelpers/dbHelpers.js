const knex = require('knex');

const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

//getting all the project from database
function getProjects() {
	return db('projects');
}

//adding a project to database
function addProject(project) {
	return db('projects').insert(project);
}

//getting all action from database
function getActions() {
	return db('actions');
}
//adding a action to database
function addAction(action) {
	return db('actions').insert(action);
}

module.exports = {
	getProjects,
	addProject,
	getActions,
	addAction
};
