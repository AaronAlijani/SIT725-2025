const express = require("express");
const mongoose = require('mongoose');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
// This will automatically serve index.html from 'public' on a GET '/' request
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the project API routes
app.use('/', projectRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Start the server
app.listen(port, () => {
    console.log("App listening on port: " + port);
    console.log(`Server is running at http://localhost:${port}`);
});

