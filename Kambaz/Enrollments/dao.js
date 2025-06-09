// Pauline Saveliev
// CS5610 - Summer 1 2025

import model from "./model.js"
import userModel from "../Users/model.js"

export async function enrollUserInCourse(user, course) {
    return model.create({ user, course, _id: `${user}-${course}` });
}

export function removeUserFromCourse(user, course) {
    return model.deleteOne({user, course});
}

export async function findUsersForCourse(course) {
    const enrollments = await model.find({course: course});
    const userIds = enrollments.map((e) => e.user);
    const users = userModel.find({_id: {$in: userIds}});
    console.log(users);
    return users;
}