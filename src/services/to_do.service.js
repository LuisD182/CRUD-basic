const ToDo = require("../models/to_do.models");

class ToDoServices {
    static async getAllToDos() {
        try {
            const allToDos = await ToDo.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            });
            return allToDos;
        } catch (error) {
            throw error;
        }
    }

    static async getATaskById(idd){
        try {
            const aTaskById = await ToDo.findByPk(idd, {
                attributes : ['id', 'title', 'description' ]
            });
            return aTaskById;
        } catch (error) {
            throw error
        }
    }

    static async getATaskByTitle( title) {
        try {
            const aTaskByTitle = await ToDo.findOne({
                where : { title : title}, 
                attributes : { exclude : ["createdAt", "updatedAt"] }
            });
            return aTaskByTitle;
        } catch (error) {
            throw error
        }
    }

    static async postANewTask (bodyNewTask) {
        try {
            const aNewTask = await ToDo.create(bodyNewTask);
            return aNewTask;
        } catch (error) {
            throw error 
        }
    }

    static async editATask (id, bodyForEdit) {
        try {
            const editTask = await ToDo.update(id, bodyForEdit);
            return editTask
        } catch (error) {
            throw error
        }
    }

    static async deleteTask (id) {
        try {
            const deletaATask = await ToDo.destroy(id)
            return deletaATask
        } catch (error) {
            throw error
        }
    }
}

module.exports = ToDoServices;