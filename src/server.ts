import "reflect-metadata";
import express from "express";
import cors from "cors";

import "./database";
import { routes } from "../routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001, () => console.log("🚀 Server is running on 3001"));