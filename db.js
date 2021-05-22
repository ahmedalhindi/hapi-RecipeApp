const mongoose = require('mongoose')

const uri='mongodb://localhost:27017/hapi-recipeapp'

module.exports = ()=>mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
});