// Pauline Saveliev
// CS5610 - Summer 1 2025

import mongoose from "mongoose";
import schema from "./schema.js"

const model = mongoose.model("UserModel", schema);
export default model;