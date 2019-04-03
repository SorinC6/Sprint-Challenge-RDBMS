exports.up = function(knex, Promise) {
	return knex.schema.createTable('projects', (table) => {
		table.increments();

		table.string('project_name', 128).notNullable().unique();
		table.text('project_description');
		table.boolean('isCompleted');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('projects');
};
