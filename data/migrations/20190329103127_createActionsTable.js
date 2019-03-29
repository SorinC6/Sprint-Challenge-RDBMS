exports.up = function(knex, Promise) {
	return knex.schema.createTable('actions', (table) => {
		table.increments();

		table
			.integer('project_id')
			.unsigned()
			.references('id')
			.inTable('projects')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table.text('action_description');
		table.text('action_notes');
		table.boolean('isCompleted');
		//table.integer;
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('actions');
};
