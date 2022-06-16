alert("SIGNIN");
const form = document.getElementById("f");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const dataJson = {};
  for (const [key, val] of data.entries()) {
    dataJson[key] = val;
  }
  fetch("http://localhost:3434/signin", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(dataJson),
  })
    .then((res) => res.json())
    .res((msg) => {
      console.log("msg", msg);
    });
});
