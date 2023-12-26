const express=require('express')
const port=8082
const app=express()

app.get('/',async(req,res)=>{
    res.json('hi')
})

app.listen(port,()=>console.log('runing'))