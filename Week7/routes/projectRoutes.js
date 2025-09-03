const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Route for the projects API
router.get('/api/projects', projectController.getProjectsAPI);

module.exports = router;