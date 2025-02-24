const AdminModel = require('../model/admin.js');
const ApiError = require('../utils/ApiError')

const Login = async (req,res)=>{
    try{
        console.log("hello login ")
        console.log("admin id",typeof(process.env.ADMIN_ID))
        const admin = await AdminModel.find({_id:process.env.ADMIN_ID}).select('email password -_id');
         console.log(admin[0].email)

    const {email,password} = req.body;
      if(!email || !password) {
        res.status(400)
        .json(
            {
                msg:"enter valid credentials",
                status:false
            }
        )
      }
    
    

        if(email === admin[0].email && password === admin[0].password){
res.send("welcome admin")
        }

    }catch(error){
        res.json({
            status:404,
            msg:'error occured'
        })
    }
}

module.exports = Login;