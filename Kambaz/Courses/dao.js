// Pauline Saveliev
// CS5610 - Summer 1 2025

import { v4 as uuidv4 } from "uuid"
import model from "./model.js";
import enrModel from "../Enrollments/model.js"

export function findAllCourses() {
    return model.find();
}

export function createCourse(course) {
    const newCourse = {...course, _id: uuidv4()};
    return model.create(newCourse);
}

export async function deleteCourse(courseId) {
    const deletion = model.deleteOne({_id: courseId});
    const enrollments = await enrModel.find({course: courseId});
    const enrIds = enrollments.map((e) => e._id);
    enrModel.deleteMany({_id: {$in: enrIds}})
    return deletion;
}

export function updateCourse(courseId, courseUpdates) {
    return model.updateOne({_id: courseId}, {$set: courseUpdates});
}