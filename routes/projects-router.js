const router = require('express').Router();

const Projects = require('../models/projects-model');

// GET - all projects
router.get("/", (req, res) => {
    Projects.get()
    .then(projects => {
        let projectList = projects.map(project => {
            return { ...project, completed: project.completed === 0 ? false : true  } 
        })
        res.json(projectList);
    })
    .catch(err => res.status(500).json({ error: "Failed to get all projects." }));
})

// GET - individual project
router.get("/:id", (req, res) => {
    Projects.get(req.params.id)
    .then(project => res.json({
        ...project,
        completed: project.completed === 0 ? false : true
    }))
    .catch(err => res.status(500).json({ error: "Failed to get project." }))
})

// GET - all tasks for a project
router.get("/:id/tasks", (req, res) => {
    Projects.getTasks(req.params.id)
    .then(tasks => {
        let taskList = tasks.map(task => {
            return { ...task, completed: task.completed === 0 ? false : true  } 
        })
        res.json(taskList)
    })
    .catch(err => res.status(500).json({ error: "Failed to get all project tasks." }))
})

// POST - add new project
router.post("/", (req, res) => {
    Projects.add(req.body)
    .then(newProject => res.status(201).json(newProject))
    .catch(err => res.status(500).json({ error: "Failed to add new project." }))
})

module.exports = router;