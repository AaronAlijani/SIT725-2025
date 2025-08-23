const mongoose = require('mongoose');

// Define the schema for your projects
const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

// Function to get all projects from the database
const getAllProjects = async () => {
    return await Project.find({});
};

module.exports = {
    getAllProjects
};