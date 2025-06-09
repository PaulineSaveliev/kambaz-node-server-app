// Pauline Saveliev
// CS5610 - Summer 1 2025

import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
        _id: String,
        title: String,
        course: { type: String, ref: "CourseModel" },
        description: String,
        points: Number,
        group: {
            type: String,
            enum: ["ASSIGNMENTS", "QUIZZES", "PROJECTS", "EXAMS"],
            default: "ASSIGNMENTS",
        },
        gradeDisplay: {
            type: String,
            enum: ["POINTS", "PERCENTAGE"],
            default: "POINTS",
        },
        submissionType: {
            type: String,
            enum: ["PHYSICAL", "PRESENTATION", "ONLINE"],
            default: "ONLINE",
        },
        onlineSubmitType: [String],
        assignTo: [String],
        dueDate: Date,
        availableOn: Date,
        availableUntil: Date,
    },
    {collection: "assignments"}
)
export default assignmentSchema;