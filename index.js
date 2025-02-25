const express = require('express');
require('dotenv').config({ path: './.env' });
const app = express();
const db = require('./config/db')
const ProjModel = require('./model/model')

const Router = require('./routes/routes')
const cors = require('cors')
const moragn = require('morgan')
const PORT = process.env.PORT;



//Middleware
app.use(express.json());
app.use(cors(process.env.CORS));
app.use(moragn('dev'));



app.use('/api/v1',Router)



app.listen(PORT,()=>{
    console.log("server connected to ",PORT)
})

app.use((err,req,res,next)=>{
    res.status(404).json({
        message:"Page Not Found",
        error:err
    })
})