//let {Tasks} = require("../models/tasks")
let db = require("../models")

module.exports = {

    findAll:async (req,res)=>{
        try{
            let tasks = await db.tasks.findAll({})
            res.json(tasks)
        }
        catch(error){
            sendStatus(400)
        }
    },
    create: async(req,res)=>{

        try{
            let tasks = await db.tasks.create(req.body)
            res.json(tasks)

        }catch(error){
            res.sendStatus(400)
        }

    },
    update: async(req,res)=>{
        try{
            let result = await db.tasks.update(req.body,{where: {id: req.params.id}})
            res.sendStatus(204)

        }catch(error){
            res.sendStatus(400)

        }
    },
    delete: async(req,res)=>{
        try{
            let result = await db.tasks.destroy({where: {id: req.params.id}})
            res.sendStatus(204)

        }catch(error){
            res.sendStatus(400)

        }
    },
    findByPk: async(req,res)=>{
        try{
            let result = await db.tasks.findByPk(req.params.id)
            res.json(result)

        }catch(error){
            res.sendStatus(400)

        }
    }

}


















// const Todo = require('../models').Todo;

// module.exports = {
//   create(req, res) {
//     return Todo
//       .create({
//         title: req.body.title,
//       })
//       .then(todo => res.status(201).send(todo))
//       .catch(error => res.status(400).send(error));
//   },
// };