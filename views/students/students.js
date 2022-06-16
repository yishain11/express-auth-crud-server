const getForm = document.getElementById("getForm");
const getBtn = document.getElementById("getForm");

getForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(fogetFormrm);
  const dataJson = {};
  for (const [key, val] of data.entries()) {
    dataJson[key] = val;
  }
  const studentId = dataJson.studentId;
  fetch(`localhost:3434/students/${studentId}`);
});
