const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const globalSchema = new Schema({
    carbRatio: Number,
    activeInsulin: Number,
    activeInsulinTimer: Number,
    insulinType: String,
    insulinTypeActivityLength: Number
})

const globalCollection = mongoose.model('global', globalSchema)

// GET/READ ALL
function getAllGlobal() {
    return globalCollection.find()
}

// GET/READ ONE
function getOneGlobal(id) {
    return globalCollection.findById(id)
}

// CREATE
function createGlobal(newGlobal) {
    return globalCollection.create(newGlobal)
}

// UPDATE
function updateGlobal(id, newGlobal) {
    return globalCollection.findByIdAndUpdate(id, newGlobal)
}

// DELETE
function deleteGlobal(id) {
    return globalCollection.findByIdAndDelete(id)
}


module.exports = {
    getOneGlobal,
    getAllGlobal,
    createGlobal,
    updateGlobal,
    deleteGlobal
}