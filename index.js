const express = require('express');
require('dotenv').config({ path: './.env' });
const app = express();
const db = require('./config/db')
const ProjModel = require('./model/model')
const AdminModel = require('./model/admin')
const Router = require('./routes/routes')
const cors = require('cors')
const moragn = require('morgan')



//Middleware
app.use(express.json());
app.use(cors());
app.use(moragn('dev'));

app.get('/',async(req,res)=>{
    
})

app.use('/api/v1',Router)



app.listen(process.env.PORT,()=>{
    console.log("server connected to ",process.env.PORT)
})