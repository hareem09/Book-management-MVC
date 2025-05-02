const express=require('express')
const app= express()
const mongoose=require('mongoose')
const bookModel=require('./model/bookSchema')
const bookRouter=require('./view/book')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/bookDataBase')
const port=3000

app.use('/book',bookRouter)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})