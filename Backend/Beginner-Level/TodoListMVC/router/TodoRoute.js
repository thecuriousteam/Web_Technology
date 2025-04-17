const express = require("express");
const router = express.Router();

const todoController = require("../controller/TodoController");

router.get("/todos", todoController.getAllTodo);
router.post("/todobyid", todoController.getTodoById);
router.post("/add-todo", todoController.addTodo);
router.put("/update-todo/:id", todoController.updateTodo);
router.delete("/delete-todo/", todoController.deleteTodo);

module.exports = router;
