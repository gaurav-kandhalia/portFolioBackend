const AdminModel = require('../model/admin')

const Login = async (req,res)=>{
    try{
        const admin = await AdminModel.findById('6696444485c49e1b002c5d5f');

    const data = req.body;
    

        if(data.email === admin.email && data.password === admin.password){
res.send("welcome admin")
        }else{
            // console.log(admin.email)
            // console.log(admin.password);
            // console.log(email);
            // console.log(password)
            res.send("invalid credentials")
        }

    }catch(error){
        res.json({
            status:404,
            msg:'error occured'
        })
    }
}

module.exports = Login;