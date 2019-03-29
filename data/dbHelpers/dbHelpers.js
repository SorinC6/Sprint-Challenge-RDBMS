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
				.select('id', 'action_name', 'action_note', 'action_completed ')
				.from('actions')
				.where('project_id', id);
			//return project;
		});
}

function getProjectByIdWithActions(id) {
	return db('actions').join('projects', 'projects.id', '=', 'actions.project_id').where({ 'projects.id': id });
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
	addAction,
	getProjectByIdWithActions
};
