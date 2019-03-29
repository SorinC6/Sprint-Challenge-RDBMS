const knex = require('knex');

const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

function getProjects() {
	return db('projects');
}

function addProject(project) {
	return db('projects').insert(project);
}

module.exports = {
	getProjects,
	addProject
};
