// Pauline Saveliev
// CS5610 - Summer 1 2025

import Database from "../Database/index.js"
import { v4 as uuidv4 } from "uuid"

export function findAllCourses() {
    return Database.courses;
}

export function createCourse(course) {
    const { courses } = Database;
    const newCourse = {...course, _id: uuidv4()};
    //Database.courses = [...Database.courses, newCourse];
    courses.push(newCourse)
    return newCourse;
}

export function deleteCourse(courseId) {
    const { courses, enrollments } = Database;
    const cIndx = courses.findIndex(course => course._id === courseId);
    if (cIndx !== -1) {
        courses.splice(cIndx, 1);
    }
    for (let i = enrollments.length - 1; i >= 0; i--) {
        if (enrollments[i].course === courseId) {
            enrollments.splice(i, 1);
        }
    }
    return (200);
}

export function updateCourse(courseId, courseUpdates) {
    const { courses } = Database;
    const course = courses.find((course) => course._id === courseId);
    Object.assign(course, courseUpdates);
    return course;
}