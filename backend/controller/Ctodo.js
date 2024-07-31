const { DataTypes } = require('sequelize');
const { sequelize, Recipe_Img, Likes } = require('../models/index');
const TodoModel = require('../models/Todo');
const Todos = TodoModel(sequelize, DataTypes);

exports.postTodos = async (req, res) => {
    try {
        const {title, done} = req.body;
        const todoAdd = await Todos.create({
            title,
            done
        });
        res.json(todoAdd);
    } catch (err) {
        res.json({message: "Internal Servor Error"});
    }
}

exports.getTodos = async (req, res) => {
    try {   
        const todoInfo = await Todos.findAll({})
        res.json(todoInfo)
    } catch (err) {
        console.error(err);
    }
}

exports.getTodoByID = async (req, res) => {
    try {
        const todoId = req.params.id;
        
        const todoOne = await Todos.findOne({
            where: {id: todoId}
        })
        if(todoOne == null) res.json({message: "Todo not found"})
        else res.json(todoOne);
    } catch (err) {
        console.error(err);
    }
}


exports.patchTodos = async (req, res) => {
    try {
        const todoId = req.params.id;
        const {done, title} = req.body;
        const todoPatch = await Todos.update(
            {
                done, title
            }, 
            {where: {
                id: todoId
            }}
        );
        const todoOne = await Todos.findOne({
            where: {id: todoId}
        })
        if(todoOne == null) res.json({message: "Todo not found"})
        else res.json(todoOne);
    } catch (err) {
        res.json({message: "Todo not found"})
    }
}


exports.deleteTodos = async (req, res) => {
    try {
        const todoId = req.params.id;
        const todoDelete = await Todos.destroy(
            {
                where: {id: todoId}
            }
        )
        if (todoDelete) {
            res.json({
                message: "Todo deleted successfully",
                deletedId: todoId
            })
        } else {
            res.json({
                "message": "Todo not found"
            })
        }
    } catch (err) {
        console.error(err);
    }
}

