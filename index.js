// Pauline Saveliev
// CS5610 - Summer 1 2025

import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js"
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // after cors before routes!
Lab5(app);
Hello(app);
app.listen(process.env.ZPORT || 4000);