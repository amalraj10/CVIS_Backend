
const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:[3,'Must be atleast 3 character but got {VALUE}']
    },
    address:{
        type:String,
     
    },
    gender:{
        type:String,
     
    },
    email:{
        type:String,
        require:true,
        unique:true,
       
    
        validator(value){
            (!validator.isEmail(value))
        throw new Error('invalid Email')
    }},
    username:{
        type:String,
        require:true,
        min:[3,'Must be atleast 3 character but got {VALUE}']
    },
    password:{
        type:String,
        require:true,
    }

})



const users = mongoose.model("users",userSchema)


module.exports = users