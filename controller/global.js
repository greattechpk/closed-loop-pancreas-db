const express = require('express')
const globalModel = require('../models/global.js')
const globalRouter = express.Router()

// GET ALL Route
globalRouter.get('/', (req, res) => {
    globalModel.getAllGlobal()
        .then((allGlobal) => {
            res.render('global/allGlobal', {allGlobal})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE NEW GLOBAL FORM
globalRouter.get('/new', (req, res) => {
    res.render('global/createGlobal')
})

// EDIT GLOBAL FORM
globalRouter.get('/:id/edit', (req, res) => {
     globalModel.getOneGlobal(req.params.id)
        .then((singleGlobal) => {
            res.render('global/editGlobal', {singleGlobal})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// CREATE
globalRouter.post('/', (req, res) => {
    globalModel.createGlobal(req.body)
        .then(() => {
            res.redirect('/global')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// UPDATE
globalRouter.put('/:id', (req, res) => {
    globalModel.updateGlobal(req.params.id, req.body)
        .then(() => {
            res.redirect(`/global/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})



module.exports = globalRouter