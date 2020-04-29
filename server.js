const express = require('express')
const methodOverride = require('method-override')

//add controllers
const foodRouter = require('./controller/food.js')
//const reviewRouter = require('./controller/review.js')

const app = express()
const port = 3001

app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.json('ok')
})

//choose views
app.use('/food', foodRouter)
//app.use('/review', reviewRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})