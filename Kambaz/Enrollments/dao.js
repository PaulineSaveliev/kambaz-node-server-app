// Pauline Saveliev
// CS5610 - Summer 1 2025

import Database from "../Database/index.js"
import { v4 as uuidv4 } from "uuid"

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const newEnr = {_id: uuidv4(), user: userId, course: courseId};
    enrollments.push(newEnr);
    return newEnr;
}

export function removeUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    const index = enrollments.findIndex((e) => e.course === courseId && e.user === userId)
    enrollments.splice(index, 1);
}