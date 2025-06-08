// Pauline Saveliev
// CS5610 - Summer 1 2025

import * as enrDao from "./dao.js"

export default function EnrollmentRoutes(app) {
    app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
        const { userId, courseId } = req.params;
        const status = await enrDao.removeUserFromCourse(userId, courseId);
        res.send(status);
    })
    app.post("/api/enrollments/:userId/:courseId", async (req, res) => {
        const { userId, courseId } = req.params;
        const status = await enrDao.enrollUserInCourse(userId, courseId);
        res.send(status)
    })
}