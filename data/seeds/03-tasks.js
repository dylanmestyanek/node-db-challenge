exports.seed = function(knex) {
  return knex('tasks').insert([
    { description: 'Take the wood, and build it', completed: false, project_id: 1 },
    { description: 'Get the gutters, and fix it', completed: false, project_id: 2 },
    { description: 'Use the new shoe laces, and make them new again', completed: false, project_id: 3 }
  ]);
};
