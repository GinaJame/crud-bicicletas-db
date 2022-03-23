// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_DEVELOPMENT_HOST || 'localhost',
      port: process.env.DB_DEVELOPMENT_PORT || '3306',
      database: process.env.DB_DEVELOPMENT_NAME || 'redbicicletas',
      user:  process.env.DB_DEVELOPMENT_USER || 'root',
      password: process.env.DB_DEVELOPMENT_PASSWORD || 'NoMeGusta#SQL80'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_PRODUCTION_HOST || 'localhost',
      port: process.env.DB_PRODUCTION_PORT || '3306',
      database: process.env.DB_PRODUCTION_NAME || 'redbicicletas',
      user:  process.env.DB_PRODUCTION_USER || 'root',
      password: process.env.DB_PRODUCTION_PASSWORD || 'NoMeGusta#SQL80'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};