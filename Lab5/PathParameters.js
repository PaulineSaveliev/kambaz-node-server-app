// Pauline Saveliev
// CS5610 - Summer 1 2025

export default function PathParameteres(app) {
    app.get("/lab5/add/:a/:b", (req, res) => {
        const {a, b} = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString());
    })
    app.get("/lab5/subtract/:a/:b", (req, res) => {
        const {a, b} = req.params;
        const sum = parseInt(a) - parseInt(b);
        res.send(sum.toString());
    })
    app.get("/lab5/multiply/:a/:b", (req, res) => {
        const {a, b} = req.params;
        const sum = parseInt(a) * parseInt(b);
        res.send(sum.toString());
    })
    app.get("/lab5/divide/:a/:b", (req, res) => {
        const {a, b} = req.params;
        const sum = parseInt(a) / parseInt(b);
        res.send(sum.toString());
    })
}