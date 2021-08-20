export default {
  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    // migrations,
  },
  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './database.sqlite',
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './migrations',
  //   },
  //   seeds: {
  //     directory: './seeds',
  //   },
  // },
  development: {
    client: 'pg',
    connection: {
      user: 'root',
      password: 'root',
      database: 'test_db2',
      host: 'localhost',
      port: '5438',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};
