import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
const app = express();

app.use(express.json());
app.use(cors());
// connectDB()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
