const express = require("express");
const app = express();

const mongoose = require('mongoose');
const projectRoutes = require('./routes/projectRoutes');
const catRoutes = require('./routes/catRoutes');
const http = require('http').createServer(app); // Create HTTP server from app
const io = require('socket.io')(http); // Pass http server to socket.io

const port = process.env.PORT || 3000;

// Middleware
// This will automatically serve index.html from 'public' on a GET '/' request
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cats', catRoutes);

// Use the project API routes
app.use('/', projectRoutes);

//Socket Setup
io.on('connection', (socket) => {
console.log('a user connected');
socket.on('disconnect', () => {
console.log('user disconnected');
});
setInterval(()=>{
socket.emit('number', parseInt(Math.random()*10));
}, 1000);
});

app.get('/add', (req, res) => {
const a = parseFloat(req.query.a);
const b = parseFloat(req.query.b);
if (isNaN(a) || isNaN(b)) {
return res.status(400).send("Invalid input");
}
const sum = a + b;
res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Start the server
http.listen(port, () => {
    console.log("App listening on port: " + port);
    console.log(`Server is running at http://localhost:${port}`);
});

// Export  the app
module.exports = app;

