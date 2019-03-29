const knex = require('knex');

const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

//getting all the project from database
function getProjects() {
	return db('projects');
}

//get a project by id
// funtion getProjectById(id){
// 	return db.select('projects.id', 'projects.project_name', 'projects.project_description', 'projects.isCompleted','actions.action_name')
// 	from('projects')
// }

function getProjectByIdWithActions(id) {
	return db
		.select('id', 'project_name', 'project_description', 'isCompleted')
		.from('projects')
		.where('id', id)
		.first()
		.then((project) => {
			return db
				.select('id', 'action_description', 'action_notes', 'isCompleted')
				.from('actions')
				.where('project_id', id)
				.then((action) => {
					return action;
				});
			//return project;
		});
}

// function getProjectByIdWithActions(id) {
// 	return db('actions').join('projects', 'projects.id', '=', 'actions.project_id').where({ 'projects.id': id });
// }

//adding a project to database
function addProject(project) {
	return db('projects').insert(project);
}

//update a project
function updateProject(id, body) {
	return db('projects').where({ id }).update(body);
}

//delete a project
function deleteProject(id) {
	return db('projects').where({ id }).del();
}

//getting all action from database
function getActions() {
	return db('actions');
}
//adding a action to database
function addAction(action) {
	return db('actions').insert(action);
}

//function for udate a action
function updateAction(id, body) {
	return db('actions').where({ id }).update(body);
}

//function for deleting a action
function deleteAction(id) {
	return db('actions').where({ id }).del();
}

module.exports = {
	getProjects,
	addProject,
	getActions,
	addAction,
	getProjectByIdWithActions,
	updateProject,
	deleteProject,
	updateAction,
	deleteAction
};
