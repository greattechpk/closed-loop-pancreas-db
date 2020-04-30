const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const insulinSchema = new Schema({
    carbRatio: Number,
    correctionSubtract:Number,
    correctionDivisor:Number,
    activeInsulin: Number,
    activeInsulinTimer: Number,
    insulinType: String,
    insulinActivityLength: Number
})

const insulinCollection = mongoose.model('insulin', insulinSchema)

// GET/READ ALL
function getAllInsulin() {
    return insulinCollection.find()
}

// GET/READ ONE
function getOneInsulin(id) {
    return insulinCollection.findById(id)
}

// CREATE
function createInsulin(newInsulin) {
    return insulinCollection.create(newInsulin)
}

// UPDATE
function updateInsulin(id, newInsulin) {
    return insulinCollection.findByIdAndUpdate(id, newInsulin)
}

// DELETE
function deleteInsulin(id) {
    return insulinCollection.findByIdAndDelete(id)
}


module.exports = {
    getOneInsulin,
    getAllInsulin,
    createInsulin,
    updateInsulin,
    deleteInsulin
}