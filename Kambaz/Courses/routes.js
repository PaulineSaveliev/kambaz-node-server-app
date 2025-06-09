// Pauline Saveliev
// CS5610 - Summer 1 2025

import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js"
import * as assgnDao from "../Assignments/dao.js"
import * as enrDao from "../Enrollments/dao.js"

export default function CourseRoutes(app) {
    app.get("/api/courses", async (req, res) => {
        const courses = await dao.findAllCourses();
        res.send(courses);
    })
    app.delete("/api/courses/:courseId", async (req, res) => {
        const { courseId } = req.params;
        const status = await dao.deleteCourse(courseId);
        res.send(status);
    })
    app.put("/api/courses/:courseId", async (req, res) => {
        const { courseId } = req.params;
        const courseUpdates = req.body;
        const status = await dao.updateCourse(courseId, courseUpdates);
        res.send(status);
    })
    app.get("/api/courses/:courseId/modules", async (req, res) => {
        const { courseId } = req.params;
        const modules = await modulesDao.findModulesForCourse(courseId);
        res.json(modules);
    })
    // create module
    app.post("/api/courses/:courseId/modules", async (req, res) => {
        const { courseId } = req.params;
        const module = {
            ...req.body,
            course: courseId
        };
        const newModule = await modulesDao.createModule(module);
        res.send(newModule);
    })
    // retrieve all assignments
    app.get("/api/courses/:courseId/assignments", async (req, res) => {
            const { courseId } = req.params;
            const assignments = await assgnDao.findAssignmentsForCourse(courseId);
            res.json(assignments);
    })
    // create assignment
    app.post("/api/courses/:courseId/assignments", async (req, res) => {
        const { courseId } = req.params;
        const assignment = {
            ...req.body,
            course: courseId
        };
        const newAssignment = await assgnDao.createAssignment(assignment);
        res.send(newAssignment);
    })
    // find users enrolled in course
    app.get("/api/courses/:cid/users", async (req, res) => {
        const {cid} = req.params;
        const users = await enrDao.findUsersForCourse(cid);
        res.json(users);
    })
}
