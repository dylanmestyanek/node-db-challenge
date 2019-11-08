exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'Wood', description: 'This is wood.' }, //1 
    { name: 'Hammer', description: 'This is a hammer.' }, // 2
    { name: 'Nails', description: 'These are nails.' }, // 3
    { name: 'Rain Gutters', description: 'These are rain gutters.' }, // 4
    { name: 'Glue Stuff', description: 'This is glue stuff.' }, // 5 
    { name: 'Shoe Laces', description: 'These are new shoe laces.' }, // 6
    { name: 'Scissors', description: 'These are scissors.' } // 7
  ]);
};
