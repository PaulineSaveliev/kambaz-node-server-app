// Pauline Saveliev
// CS5610 - Summer 1 2025

export default function Hello(app) {
    app.get('/hello', (req, res) => {res.send('Life is good!')})
    app.get('/', (req, res) => res.send('Welcome to Full Stack Development!'))
}
