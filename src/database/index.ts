import * as path from 'path';

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname + './data.sqlite3')
  },
  useNullAsDefault: true,
});

knex.schema
  .createTable('students', (table: any) => {
    table.increments('id').primary();
    table.string('fullname');
    table.float('point');
    table.dateTime('createdAt');
    table.dateTime('updatedAt');
  })
  .then(() => { })
  .catch(() => { });

export default knex;
