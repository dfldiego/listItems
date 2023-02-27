import "dotenv/config";
import express from "express";
import cors from "cors";
import { appRoutes } from "./routes";

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(appRoutes);

app.listen(PORT, () => {
  console.log(`Listening requests in the port ${PORT}`);
});
