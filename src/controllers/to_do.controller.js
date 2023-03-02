const ToDoServices = require('../services/to_do.service')

const getAllToDo = async ( req, res )=>{
    try {
        const gotAllToDos = await ToDoServices.getAllToDos();
        res.status(200).json(gotAllToDos)
    } catch (error) {
        res.status(400).json(error)
    }
}

const gettingATaskById = async (req, res) =>{
    try {
        const {idd} = req.params;
        const taskById = await ToDoServices.getATaskById(idd);
        res.status(200).json(taskById); 
    } catch (error) {
        res.status(400).json(error)
    }
}

const gettingATaskByTitle = async (req, res)=>{
    try {
        const { title } = req.params;
        const aTaskByTitle = await ToDoServices.getATaskByTitle(title);
        res.status(200).json(aTaskByTitle);
    } catch (error) {
        res.status(400).json(error)
    }
}

const postingANewTask = async (req, res) => {
    try {
        const bodyNewTask = req.body
        const newTask = await ToDoServices.postANewTask(bodyNewTask);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json(error)
    }
}

const editingATask = async (req, res )=>{
    try {
        const {id} = req.params;
        const bodyEdited = req.body;
        const taskUpdated = await ToDoServices.editATask( bodyEdited, {
            where: { id : id }
        } )
        res.status(204).json(taskUpdated)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deletingTask = async (req, res)=>{
    try {
        const {id} = req.params;
        const taskDeleted = await ToDoServices.deleteTask({
            where : { id: id }
        });
        res.status(200).json(taskDeleted)
    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports = {
    getAllToDo,
    gettingATaskById,
    gettingATaskByTitle,
    postingANewTask,
    editingATask,
    deletingTask
}