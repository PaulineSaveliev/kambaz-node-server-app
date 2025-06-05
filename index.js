// Pauline Saveliev
// CS5610 - Summer 1 2025

import express from 'express'
import Hello from "./Hello.js"

const app = express()
Hello(app)
app.listen(4000)