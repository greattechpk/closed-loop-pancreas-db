const express = require('express')
const insulinModel = require('../models/insulin.js')
const foodModel = require('../models/food.js')

const insulinRouter = express.Router()

// GET ALL Route
insulinRouter.get('/', (req, res) => {
    insulinModel.getAllInsulin()
        .then((allInsulin) => {
            res.render('insulin/allInsulin', {allInsulin})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// CREATE NEW INSULIN FORM
insulinRouter.get('/new', async (req, res) => {
    try{
        const foodData = await foodModel.getAllFood()
        res.render('insulin/createInsulin', {foodData})
    }catch{

    }
    
})

// GET ONE
insulinRouter.get('/:id', (req, res) => {
    insulinModel.getOneInsulin(req.params.id)
        .then((singleInsulin) => {
            res.render('insulin/singleInsulin', {singleInsulin})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// EDIT INSULIN FORM
insulinRouter.get('/:id/edit', (req, res) => {
     insulinModel.getOneInsulin(req.params.id)
        .then((singleInsulin) => {
            res.render('insulin/editInsulin', {singleInsulin})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE
insulinRouter.post('/', (req, res) => {
    insulinModel.createInsulin(req.body)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// UPDATE
insulinRouter.put('/:id', (req, res) => {
    insulinModel.updateInsulin(req.params.id, req.body)
        .then(() => {
            res.redirect(`/`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// DELETE
insulinRouter.delete('/:id', (req, res) =>{
    insulinModel.deleteInsulin(req.params.id)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})



module.exports = insulinRouter