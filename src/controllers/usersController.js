const db = require('../database/db');

async function createUser(data, res) {
  try {
    const { name, surname, age } = data;

    await db.query(
      'INSERT INTO users (name, surname, age) VALUES (?, ?, ?)',
      [name, surname, age]
    );

  } catch (error) {
    console.error(error);
  }
}

async function getUsers() {
  try {
    const users = await db.query('SELECT * FROM users');
    return users;
  } catch (error) {
    console.error(error);
  }
}

async function getUser(id) {
  try {
    const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return user;
  } catch (error) {
    console.error(error);
  }
}

async function updateUser(id, data) {
  try {
    const { name, surname, age } = data;
    await db.query(
      'UPDATE users SET name = ?, surname = ?, age = ? WHERE id = ?',
      [name, surname, age, id]
    );
  } catch (error) {
    console.error(error);
  }
}

async function deleteUser(id) {
  try {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};