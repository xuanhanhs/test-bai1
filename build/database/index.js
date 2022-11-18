"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: path.join(__dirname + './data.sqlite3')
    },
    useNullAsDefault: true,
});
knex.schema
    .createTable('students', function (table) {
    table.increments('id').primary();
    table.string('fullname');
    table.float('point');
    table.dateTime('createdAt');
    table.dateTime('updatedAt');
})
    .then(function () { })
    .catch(function () { });
exports.default = knex;
