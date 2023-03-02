const { Router } = require('express');
const router = Router();
const { getAllToDo, gettingATaskById, gettingATaskByTitle } = require('../controllers/to_do.controller')
const { postingANewTask, editingATask, deletingTask } = require('../controllers/to_do.controller')


const ToDo = require('../models/to_do.models')

router.get('/api/v1/todos', getAllToDo
// , async (req, res) => {
//     try {
//         const result = await ToDo.findAll({
//             attributes: {
//                 exclude: ["createdAt", "updatedAt"]
//             }
//         });
//         res.status(200).json(result)
//     }
//     catch (error) {
//         res.status(400).json(error)
//     }
// }
)

router.get('/api/v1/todos/:idd', gettingATaskById

//     async (req, res) => {
//     try {
//         const { id } = req.params;
//         const aTask = await ToDo.findByPk( id, {
//             attributes: {
//                 exclude: ["createdAt", "updatedAt"]
//             }
//         });
//         res.status(200).json(aTask)
//     }
//     catch (error) {
//         res.status(400).json(error)
//     }
// }
)

router.get('/api/v1/todos/title/:title', gettingATaskByTitle
//     async (req, res) => {
//     try {
//         const { title } = req.params;
//         const aTask = await ToDo.findOne({
//             where: {title : title},
//             attributes: {
//                 exclude: ["createdAt", "updatedAt"]
//             }
//         });
//         res.status(200).json(aTask)
//     }
//     catch (error) {
//         res.status(400).json(error)
//     }
// }
)

router.post('/api/v1/todos', postingANewTask
//     async (req, res) => {
//     try {
//         const newTask = req.body;
//         const result = await ToDo.create(newTask);
//         res.status(201).send(result);
//     } catch (error) {
//         res.status(400).json(error);
//     }
// }
)

router.put('/api/v1/todos/:id', editingATask
//     async (req, res) => {
//     try {
//         const { id } = req.params;
//         const data = req.body;
//         const result = await ToDo.update(data, {
//             where: { id: id }
//         });
//         res.status(204).send(result)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }
)

router.delete('/api/v1/todos/:id', deletingTask
//     async (req, res) => {
//     try {
//         const { id } = req.params;
//         const result = await ToDo.destroy(
//             {
//                 where: { id: id }
//             }
//         );
//         res.status(204).json(result)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }
)

module.exports = router;