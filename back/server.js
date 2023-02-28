const express=require('express')
const plans=require('./plans.json')
const PORT=8080
const app=express()
const cors=require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.json(plans)
})

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})