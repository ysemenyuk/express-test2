exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('coordinates')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('coordinates').insert([
        {
          id: 1,
          user_id: 1,
          created_at: '2010-04-30T16:51:00.000Z',
          latitude: 45.51622,
          longitude: -122.63633,
        },
        {
          id: 2,
          user_id: 1,
          created_at: '2010-04-30T16:52:00.000Z',
          latitude: 45.51622,
          longitude: -122.63633,
        },
        {
          id: 3,
          user_id: 1,
          created_at: '2010-04-30T16:53:00.000Z',
          latitude: 45.51622,
          longitude: -122.63633,
        },
        {
          id: 4,
          user_id: 1,
          created_at: '2011-04-30T16:51:00.000Z',
          latitude: 45.51622,
          longitude: -122.63633,
        },
        {
          id: 5,
          user_id: 2,
          created_at: '2010-04-30T16:51:00.000Z',
          latitude: 45.51622,
          longitude: -122.63633,
        },
        {
          id: 6,
          user_id: 2,
          created_at: '2011-04-30T16:51:00.000Z',
          latitude: 45.51622,
          longitude: -122.63633,
        },
      ]);
    });
};
