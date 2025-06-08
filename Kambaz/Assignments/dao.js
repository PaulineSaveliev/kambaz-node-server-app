// Pauline Saveliev
// CS5610 - Summer 1 2025

import Database from "../Database/index.js"
import { v4 as uuidv4 } from "uuid"

export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assgn) => assgn.course === courseId);
}
export function findAssignmentById(assignmentId) {
    const { assignments } = Database;
    const assgn =  assignments.find((assgn) => assgn._id === assignmentId);
    return assgn;
}
export function createAssignment(assignment) {
    const { assignments } = Database;
    const newAssgn = {...assignment, _id: uuidv4()};
    assignments.push(newAssgn);
    return newAssgn;
}
export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    const index = assignments.findIndex(a => a._id === assignmentId);
    if (index !== -1) {
        assignments.splice(index, 1);
    }
    return (204);
}
export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((a) => a._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}