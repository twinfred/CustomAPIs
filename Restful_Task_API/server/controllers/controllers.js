const mongoose = require('mongoose');
const Task = require('./../models/tasks');

module.exports = {
    // index: // Homepage
    //     (req, res)=>{
    //         res.render('index');
    //     },
    all: // Show All Tasks
        (req, res)=>{
            Task.find({}, (err, tasks)=>{
                if(err){
                    res.json({message: "Error.", error: err})
                }else{
                    res.json({message: "Success", data: tasks})
                }
            })
        },
    task: // Shows A Specific Task
        (req, res)=>{
            Task.findOne({_id: req.params.id}, (err, task)=>{
                if(!task){
                    res.json({message: "Error.", error: "This task isn't in our database"});
                }else{
                    People.remove(person, (err)=>{
                        res.json({message: "Success.", data: task});
                    })
                }
            })
        },
    new_task:
        (req, res)=>{
            Task.create({title: req.body.title, description: req.body.description, completed: req.body.completed}, (err, newTask)=>{
                if(err){
                    res.json({message: "Error.", error: err});
                }else{
                    res.json({message: "Success.", data: newTask});
                }
            })
        },
    update:
        (req, res)=>{
            Task.findOne({_id: req.params.id}, (err, task)=>{
                if(!task){
                    res.json({message: "Error.",error: "This task isn't in our database"});
                }else{
                    Task.update(task, {title: req.body.title, description: req.body.description, completed: req.body.completed}, (err, updatedTask)=>{
                        if(err){
                            res.json({message: "Error.", error: err})
                        }else{
                            res.json({message: "Success.", data: updatedTask});
                        }
                    })
                }
            })
        },
    del_task:
        (req, res)=>{
            Task.findOne({name: req.params.name}, (err, task)=>{
                if(!task){
                    res.json({message: "Error.", error: "This task isn't in our database"});
                }else{
                    Task.remove(task, (err)=>{
                        res.json({message: "Success."});
                    })
                }
            })
        },
}