// Pauline Saveliev
// CS5610 - Summer 1 2025

import Database from "../Database/index.js"
import { v4 as uuidv4 } from "uuid"
import model from "./model.js";

export function findAllCourses() {
    return model.find();
}

export function createCourse(course) {
    const newCourse = {...course, _id: uuidv4()};
    return model.create(newCourse);
}

export function deleteCourse(courseId) {
    const { courses, enrollments } = Database;
    const deletion = model.deleteOne({_id: courseId});
    for (let i = enrollments.length - 1; i >= 0; i--) {
        if (enrollments[i].course === courseId) {
            enrollments.splice(i, 1);
        }
    }
    return deletion;
}

export function updateCourse(courseId, courseUpdates) {
    return model.updateOne({_id: courseId}, {$set: courseUpdates});
}