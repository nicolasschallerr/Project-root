const express = require("express");
const app = express();
const mocksRouter = require("./routes/mocks.router");

app.use(express.json());
app.use("/api/mocks", mocksRouter);
const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server running on port 8080");
});
