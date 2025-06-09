// Pauline Saveliev
// CS5610 - Summer 1 2025

import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
        _id: String,
        course: { type: String, ref: "CourseModel" },
        user: { type: String, ref: "UserModel" },
        grade: Number,
        letterGrade: String,
        enrollmentDate: Date,
        status: {
            type: String,
            enum: ["ENROLLED", "DROPPED", "COMPLETED"],
            default: "ENROLLED",
        }
    },
    {collection: "enrollments"}
)
export default enrollmentSchema;