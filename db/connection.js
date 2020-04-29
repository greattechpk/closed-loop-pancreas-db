const mongoose = require('mongoose')


const connectionString = process.env.MONGODB_URI || "mongodb://localhost/closed-loop-pancreas-db";


mongoose.connect(connectionString)
    .then(() => {
        console.log('Connected to mongo successfully!')
    })
    .catch((err) => {
        console.log('Failed to connect to mongo')
        console.log(err)
    })

module.exports = mongoose