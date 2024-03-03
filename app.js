import express from "express";
import * as CONFIG from "./config/config.js";
import userRouter from "./routes/user.routes.js";

const app = express();


// middleware
app.use(express.json());
app.use("/user", userRouter);


app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to home route, server is running successfully" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(CONFIG.PORT, () => {
    console.log(`Server running at http://${CONFIG.LOCAL_HOST}:${CONFIG.PORT}/`);
})