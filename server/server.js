const express = require('express')
const router = require('./routes/admin.auth')
const articleRouter = require('./routes/article')
const single = require('./routes/single')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/admin',router)
app.use('/article',articleRouter)
app.use('/single',single)

app.get('/',(req,res) => {
    res.send({name: "Ujjwal"})
})
app.listen(8000,(err) => {
    if(err) {
        console.log(err)
    }
    console.log('server started')
})