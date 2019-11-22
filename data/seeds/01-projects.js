exports.seed = function(knex) {
      return knex('projects').insert([
        { name: 'Build a desk', description: 'Today we are building a desk.', completed: false },
        { name: 'Fix the rain gutter', description: 'Today we are fixing the rain gutter', completed: false  },
        { name: 'New shoe laces', description: 'Today we are getting new shoe laces', completed: false  }
      ]);
};
