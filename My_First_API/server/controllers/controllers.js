const mongoose = require('mongoose');
const People = require('./../models/people');

module.exports = {
    index:
        (req, res)=>{
            People.find({}, (err, peoples)=>{
                if(err){
                    console.log("Error Found:", err);
                    res.json({message: "Error", error: err});
                }else{
                    res.json({message: "Success", data: peoples});
                }
            })
        },
    new:
        (req, res)=>{
            People.create({name: req.params.name}, (err, newPerson)=>{
                if(err){
                    console.log("Error Found:", err);
                    res.json({message: "Error", error: err});
                }else{
                    res.json({message: "Success", data: newPerson});
                }
            })
        },
    remove:
        (req, res)=>{
            People.findOne({name: req.params.name}, (err, person)=>{
                if(!person){
                    res.json({error: "This person isn't in our database"});
                }else{
                    People.remove(person, (err)=>{
                        res.json({message: "Successfully removed."});
                    })
                }
            })
        },
    name:
        (req, res)=>{
            People.findOne({name: req.params.name}, (err, person)=>{
                if(!person){
                    res.json({error: "This person isn't in our database"});
                }else{
                    res.json({message: "Success", data: person});
                }
            })
        },
}