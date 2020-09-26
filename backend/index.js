var express =require('express');
var mongoose =require('mongoose');
var app=express();
var cors =require('cors');
var path =require('path');
app.use(cors())
app.use(express.json())


const routes=require('./route')
app.use('/api',routes)

//port
const port =3000;

app.listen(port,()=>{
    console.log("server started at :"+port)
}
);

//routes






//mongodb

mongoose.connect('mongodb://localhost:27017/expenses').then(()=>{console.log("db connected")})


