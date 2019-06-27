import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Welcome, to Propertypro Lite!"));

app.all("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "The endpoint you have requested does not exist on this server"
  });
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(` Server is running on PORT: ${port}`);
});

export default app;
