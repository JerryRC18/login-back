const express =require('express')
const mongoose=require('mongoose')
const bosyparse=requre('body-parse')
require('doteny').Config()

const app=express()
app.use(bodyparser.urlencoded(({
    extended: true
})),
app.use(bodyparser.json())
//conexion a la base de datos

//import routes
const authRoutes=require('./routes/auth')

app.get("/",(req,res)=>{
    res.json({
        estado: true,
        mensaje:'WORKSS!!!'
    })
})

app.get('/api/user',authRoutes)

const PORT=process.env.PORT||3001
app.listen(PORT,()=>{
    console.log('servidor trabajando:'+$(PORT))
})