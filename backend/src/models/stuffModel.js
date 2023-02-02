const { db } = require("./db");

async function getAllStuff() {
  const [result] = await db.query(
    "SELECT stuff.* FROM stuff INNER JOIN user AS u ON stuff.user_id=u.id"
  );
  return result;
}

async function getAllLabel() {
  const [result] = await db.query("SELECT stuff.id, stuff.name FROM stuff");
  return result;
}

async function getStuffById(id) {
  const [rows] = await db.query(
    "SELECT stuff.* FROM stuff INNER JOIN user AS u ON stuff.user_id=u.id WHERE stuff.id = ?",
    [id]
  );
  return rows[0];
}

module.exports = {
  getAllStuff,
  getAllLabel,
  getStuffById,
};
