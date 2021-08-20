export default {
  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  development: {
    // client: 'sqlite3',
    // connection: {
    //   filename: './database.sqlite',
    // },
    client: 'pg',
    connection: {
      user: 'root',
      password: 'root',
      database: 'db_test',
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
