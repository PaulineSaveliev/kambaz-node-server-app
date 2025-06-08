// Pauline Saveliev
// CS5610 - Summer 1 2025

import * as assgnDao from "./dao.js"

export default function AssignmentRoutes(app) {
    // delete
    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await assgnDao.deleteAssignment(assignmentId);
        res.send(status);
    })
    // update
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await assgnDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status)
    })
    // retrieve specific assignment
    app.get("/api/assignments/:assignmentId", (req, res) => {
            const { assignmentId } = req.params;
            const assignments = assgnDao.findAssignmentById(assignmentId);
            res.json(assignments);
    })
}