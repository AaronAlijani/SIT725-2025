const projectService = require('../services/projectService');

// Controller function to respond to API requests with project data
const getProjectsAPI = async (req, res) => {
    try {
        const projects = await projectService.getAllProjects();
        res.json({ statusCode: 200, data: projects, message: "Success" });
    } catch (error) {
        console.error("Error fetching projects for API:", error);
        res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
    }
};

module.exports = {
    getProjectsAPI
};