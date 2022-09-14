const express = require('express')
const subscriberRouter = require('./routes/subscriber.route')
const imageUploadRouter = require('./routes/image.route')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/', subscriberRouter)
app.use('/api/', imageUploadRouter)


const PORT = process.env.PORT || 3000
//server
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`)
})