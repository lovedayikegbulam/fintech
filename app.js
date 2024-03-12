import express from "express";
import CONFIG from "./config/config.js";
import authRoute from "./routes/auth.route.js";
import connectToDb from "./database/connection.js";

const app = express();
app.use(express.json());

// Routes
app.use("/auth", authRoute);

// catch all route
app.all("*", (req, res) => {
  res.status(404);
  res.json({
    message: "Not found",
  });
});

// Connect to Mongodb Database
connectToDb().then(() => {
  console.log("Connected to MongoDB");
  app.listen(CONFIG.PORT, () => {
    console.log(
      `Server running at http://${CONFIG.LOCAL_HOST}:${CONFIG.PORT}/`
    );
  });
});
