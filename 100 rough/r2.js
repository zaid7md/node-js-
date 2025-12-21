const exp = require("express");
const app = exp(); // ✅ Correct way to initialize Express
const user_data = require("./MOCK_DATA.json");

function get_id(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) return data[i]; // ✅ Return the user object, not just the id
  }
  return "id not found";
}

app.get("/user/:id", (req, res) => {
  const id = Number(req.params.id); // ✅ Correct property: req.params, not req.param
  const user = get_id(user_data, id);

  return res.json(user);
});

app.listen(8000, () => console.log("Server started on port 8000"));
