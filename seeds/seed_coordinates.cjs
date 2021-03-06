exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('coordinates')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('coordinates').insert([
        {
          id: 1,
          userId: 1,
          time: '2010-04-30T16:51:00.000Z',
          latitude: 45.51622,
          longitude: -122.63633,
        },
        {
          id: 2,
          userId: 1,
          time: '2010-04-30T16:52:00.000Z',
          latitude: 45.51622,
          longitude: -122.63633,
        },
        {
          id: 3,
          userId: 1,
          time: '2010-04-30T16:53:00.000Z',
          latitude: 45.51622,
          longitude: -122.63633,
        },
        {
          id: 4,
          userId: 1,
          time: '2011-04-30T16:51:00.000Z',
          latitude: 45.51622,
          longitude: -122.63633,
        },
        {
          id: 5,
          userId: 2,
          time: '2010-04-30T16:51:00.000Z',
          latitude: 45.51622,
          longitude: -122.63633,
        },
        {
          id: 6,
          userId: 2,
          time: '2011-04-30T16:51:00.000Z',
          latitude: 45.51622,
          longitude: -122.63633,
        },
      ]);
    });
};
