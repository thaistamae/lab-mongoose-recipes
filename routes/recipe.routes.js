const mongoose = require('mongoose')
const express = require("express")

const router = express.Router()
const data = require('../data.json');

const Recipe = require('../models/Recipe.model')

// recipes/create-recipe
router.post('/create-recipe', async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body);

        return res.status(201).json(newRecipe).json(closeMongoose)
    } catch (err) {
        return res.status(500).json(err);
    }
})


router.post('/create-post', async (req, res) => {
    try {
        const newDocuments = await Recipe.insertMany(data)
        
        return res.status(200).json(newDocuments);
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.put('/update/:title/:duration', async (req, res) => {
    const {title, duration} = req.params
    try{
        const updateRecipe = await Recipe.findOneAndUpdate({title: title}, {duration: Number(duration)})
        
        return res.status(200).json(updateRecipe)
    } catch (error){
        return res.status(500).json(error);
    }
})

router.delete('/delete/:title', async (req,res) =>{
    const {title} = req.params
    try{
        const deleteRecipe = await Recipe.deleteOne({title: title})
        
        return res.status(200).json(deleteRecipe);
    } catch (error){
        return res.status(500).json(error);
    }
})

module.exports = router


