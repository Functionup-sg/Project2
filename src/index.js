const express = require('express');
const route = require('./routes/route.js');
const multer = require('multer')
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());
app.use(multer().any())

mongoose.connect("mongodb+srv://nirdosh:wSO3THNheXS1qlSB@nirdosh.z3ysi.mongodb.net/project2", {
    useNewUrlParser: true
})  
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))
 
app.use('/', route);

app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});