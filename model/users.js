var sql = require('../config/db.js');

var usersModel = {

  name: 'John Doe',
  email: 'jdoe@example.com',
  age: 40,
  address: '123 Street Avenue, City, Province POSTCODE',
  phone: '1234567890',

  add: function(user, next) {
    sql.query(`INSERT INTO users (name, email, age, address, phone)
        VALUES ('${user.name}', '${user.email}', ${user.age}, '${user.address}', '${user.phone}');`, function(err, res) {
      if (err) next(err);
    });
    next(null);
  },

  addMany: function(users, next) {
    for (var user in users) {
      sql.query(`INSERT INTO users (name, email, age, address, phone)
      VALUES ('${user.name}', '${user.email}', ${user.age}, '${user.address}', '${user.phone}');`, function(err, res) {
        if (err) next(err);
      });
    }
    next(null);
  },

  get: function(id, next) {
    sql.query(`SELECT * FROM users WHERE userId = ${id};`, function(err, res) {
      next(err, res);
    });
  },

  getAll: function(next) {
    sql.query('SELECT * FROM users', function(err, res) {
      next(err, res);
    });
  },

  update: function(id, updatedUser, next) {
    sql.query(`UPDATE users
        SET name = ${updatedUser.name}, email = ${updatedUser.email}, age = ${updatedUser.age},
          address = ${updatedUser.address}, phone = ${updatedUser.phone}
        WHERE userId = ${id};`, function(err, res) {
      next(err);
    });
  },

  remove: function(id, next) {
    sql.query(`DELETE FROM users WHERE userId = ${id};`, function(err, res) {
      next(err);
    });
  },

  removeAll: function(next) {
    sql.query(`DELETE FROM users WHERE userId = *;`, function(err, res) {
      next(err);
    });
  }

}

module.exports = usersModel;
