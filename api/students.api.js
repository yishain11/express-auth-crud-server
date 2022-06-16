const fs = require("fs");
const path = require("path");
const studentsPath = path.join(__dirname + "/../data/students.json");
function readStudents() {
  const students = JSON.parse(fs.readFileSync(studentsPath, "utf-8"));
  return students;
}

function getStudent(id) {
  const students = readStudents();
  const idToGet = parseInt(id);
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if (student.id === idToGet) {
      return student;
    }
  }
  return {};
}

module.exports = { readStudents, getStudent };
