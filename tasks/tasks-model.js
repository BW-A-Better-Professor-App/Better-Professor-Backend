const db = require("../database/dbConfig");

module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  remove
};

function find() {
  const userInfo = {}
  return db("students as s")
  .select(
        "s.lastname as lastname",
        "s.firstname as firstname",
        "t.id as task_id",
        "t.task as task",
        "t.due_date as due_date")
    .leftJoin("tasks as t", "t.student_id", "=", "s.id")
    // .then(function(rows) {
    //   rows.map(row => {
    //     if (!userInfo[row.firstname]) {
    //       userInfo[row.firstname] = { firstname: row.firstname, tasks: [] };
    //     }
    //     userInfo[row.firstname].tasks.push(row.task);
    //   });
    //   return Object.values(userInfo);
    // });
  }

function findBy(filter) {
  return db("tasks")
  .where(filter);
}

function findById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

function add(task) {
  return db("tasks")
    .insert(task, "id")
    .then(([id]) => find(id));
}

function update(id, changes) {
  return db("tasks")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("tasks")
    .where({ id })
    .del();
}
