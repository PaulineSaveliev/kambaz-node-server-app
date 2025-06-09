// Pauline Saveliev
// CS5610 - Summer 1 2025

import model from "./model.js"
import { v4 as uuidv4 } from "uuid"

export function findAssignmentsForCourse(courseId) {
    return model.find({course: courseId});
}
export function findAssignmentById(assignmentId) {
    return model.findById(assignmentId)
}
export function createAssignment(assignment) {
    const newAssgn = {...assignment, _id:uuidv4()}
    return model.create(newAssgn);
}
export function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId })
}
export function updateAssignment(assignmentId, assignmentUpdates) {
    return model.updateOne({_id: assignmentId}, assignmentUpdates)
}