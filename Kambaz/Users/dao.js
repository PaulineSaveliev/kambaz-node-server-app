// Pauline Saveliev
// CS5610 - Summer 1 2025

import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
import db from "../Database/index.js"


let { courses, enrollments } = db;
export const createUser = async (user) => {
    const newUser = {...user, _id:uuidv4()}
    return model.create(newUser);
}
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) => model.findOne({username: username});
export const findUserByCredentials = (username, password) => model.findOne({username, password});
export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
export const findUsersByRole = (role) => model.find({role: role});
export const findUsersByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // i = case insensitive
    return model.find({
        $or: [{firstName: {$regex: regex}}, {lastName: {$regex: regex}}],
    });
}

export const findCoursesForEnrolledUser = (userId) => {
    const result = courses.filter((course) => enrollments.some((enr) => (enr.user === userId && enr.course === course._id)))
    return result;
}