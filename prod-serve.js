var express = require('express')
var cors = require('cors')
var app = express()

var appData = require('./data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

var apiRoutes = express.Router()

apiRoutes.get('/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  })
})
apiRoutes.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  })
})
apiRoutes.get('/ratings', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  })
})

app.use(cors())
app.use('/api', apiRoutes)

app.listen(3000, function () {
  console.log('Listening on the http://localhost:3000')
})