import app from "./src/main.js";

const port = 3200;
app.listen(port, () => {
  console.log("API online at the port: http://localhost:3200");
});