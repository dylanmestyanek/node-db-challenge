
exports.up = function(knex) {
    return knex.schema.createTable('projects', t => {
        t.increments();
        t.string('name', 128).notNullable();
        t.string('description', 256);
        t.boolean('completed').notNullable();
    })
    .createTable('resources', t => {
        t.increments();
        t.string('name', 128)
            .unique()
            .notNullable();
        t.string('description', 256);
    })
    .createTable('tasks', t => {
        t.increments();
        t.string('description', 256).notNullable();
        t.string('notes', 128);
        t.boolean('completed').notNullable();
        t.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
    .createTable('project_resources', t => {
        t.increments();
        t.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        t.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
