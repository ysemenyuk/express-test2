exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('coordinates')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('coordinates').insert([
        {
          id: 1,
          latitude: 45.51622,
          longitude: 122.63633,
        },
        {
          id: 2,
          latitude: 46.51622,
          longitude: -123.63633,
        },
        {
          id: 3,
          latitude: 47.51622,
          longitude: 124.63633,
        },
        {
          id: 4,
          latitude: 48.51622,
          longitude: 124.63633,
        },
        {
          id: 5,
          latitude: 49.51622,
          longitude: 124.63633,
        },
      ]);
    });
};
