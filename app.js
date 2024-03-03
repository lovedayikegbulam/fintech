import express from "express";

const app = express();

const localhost = "localhost"
const port = 3000

app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(port, () => {
    console.log(`Server running at http://${localhost}:${port}/`);
})