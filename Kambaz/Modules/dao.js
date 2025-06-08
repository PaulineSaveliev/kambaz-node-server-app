// Pauline Saveliev
// CS5610 - Summer 1 2025

import Database from "../Database/index.js"
import { v4 as uuidv4 } from "uuid"

export function findModulesForCourse(courseId) {
    const { modules } = Database;
    return modules.filter((module) => module.course === courseId);
}
export function createModule(module) {
    const { modules } = Database;
    const newModule = {...module, _id: uuidv4()};
    modules.push(newModule);
    return newModule;
}
export function deleteModule(moduleId) {
    const { modules } = Database;
    const index = modules.findIndex(m => m._id === moduleId);
    if (index !== -1) {
        modules.splice(index, 1);
    }
    return (204);
}
export function updateModule(moduleId, moduleUpdates) {
    const { modules } = Database;
    const module = modules.find((module) => module._id === moduleId);
    Object.assign(module, moduleUpdates);
    return module;
}