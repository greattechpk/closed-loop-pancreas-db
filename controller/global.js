const express = require('express')
const globalModel = require('../models/global.js')
const globalRouter = express.Router()

// GET ALL Route
globalRouter.get('/', (req, res) => {
    globalModel.getAllGlobal()
        .then((allGlobal) => {
            res.render('global/settings', {allGlobal})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE NEW GLOBAL FORM
globalRouter.get('/new', (req, res) => {
    res.render('global/createSettings')
})

// GET ONE
globalRouter.get('/:id', (req, res) => {
    globalModel.getOneGlobal(req.params.id)
        .then((singleGlobal) => {
            res.render('global/singleSetting', {singleGlobal})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// EDIT GLOBAL FORM
globalRouter.get('/:id/edit', (req, res) => {
     globalModel.getOneGlobal(req.params.id)
        .then((singleGlobal) => {
            res.render('global/editSetting', {singleGlobal})
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
            res.redirect('/settings')
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
            res.redirect(`/settings/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// DELETE
globalRouter.delete('/:id', (req, res) =>{
    globalModel.deleteGlobal(req.params.id)
        .then(() => {
            res.redirect('/settings')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})



module.exports = globalRouter