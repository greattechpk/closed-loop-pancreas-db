const express = require('express')
const foodModel = require('../models/food.js')
//const reviewModel = require('../models/review.js')

const foodRouter = express.Router()

// GET ALL Route
foodRouter.get('/', (req, res) => {
    foodModel.getAllFood()
        .then((allFood) => {
            res.render('food/allFood', {allFood})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE NEW FOOD FORM
foodRouter.get('/new', (req, res) => {
    res.render('food/createFood')
})

// EDIT FOOD FORM
foodRouter.get('/:id/edit', (req, res) => {
     foodModel.getOneFood(req.params.id)
        .then((singleFood) => {
            res.render('food/editFood', {singleFood})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// GET ONE
foodRouter.get('/:id', async (req, res) => {
    console.log('foodRouter.GET one route')
    try {
        const singleFood = await foodModel.getOneFood(req.params.id)
        res.render('food/singleFood', {singleFood})
    } catch (err) {
        console.log(err)
        res.json(err)
    }


    // foodModel.getOneFood(req.params.id)
    //     .then((singleFood) => {

    //         reviewModel.getAllReviewsByFoodId(req.params.id)
    //             .then(reviews => {
    //                 res.render('food/singleFood', {singleFood, reviews})
    //             })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         res.json(err)
    //     })
})

// CREATE
foodRouter.post('/', (req, res) => {
    foodModel.createFood(req.body)
        .then(() => {
            res.redirect('/food')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// UPDATE
foodRouter.put('/:id', (req, res) => {
    foodModel.updateFood(req.params.id, req.body)
        .then(() => {
            res.redirect(`/food/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// DELETE
foodRouter.delete('/:id', (req, res) =>{
    foodModel.deleteFood(req.params.id)
        .then(() => {
            res.redirect('/food')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


module.exports = foodRouter