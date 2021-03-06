const express = require('express')
const methodOverride = require('method-override')

//add controllers
const foodRouter = require('./controller/food.js')
const globalRouter = require('./controller/global.js')
const insulinRouter = require('./controller/insulin.js')
//const reviewRouter = require('./controller/review.js')

const app = express()
const port = process.env.PORT || 3001

app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(__dirname + '/public'))


//choose views
console.log("running")
app.use('/food', foodRouter)
app.use('/settings', globalRouter)
app.use('/', insulinRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})