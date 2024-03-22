
const users = require('../Model/userSchema')


const jwt = require('jsonwebtoken')


console.log('inside the controller ');


exports.register = async(req,res)=>{

const {name,address,gender,email,username,password}=req.body


try{const existUser = await users.findOne({email})

if(existUser){
    res.status(406).json('Account already exist.....please login')
}
else{
    
  const newUser = new users({
    name,
    address,
    gender,
    email,
    username,
    password
  })
  
  await newUser.save()

    return res.status(200).json(newUser)



  


    //response
res.status(200).json("REGISTRATION REQUEST RECIEVED")
}
}
catch(err){
    res.status(401).json(`Register request Failed due to ${err}`)
}



}

//login request
exports.login = async(req,res)=>{
  const {email,password} = req.body
  
  try{
  const existingUser = await users.findOne({email,password})
  console.log(existingUser);
  if(existingUser){
    //jwt token
    const token = jwt.sign({userId:existingUser._id},"superstar")

    res.status(200).json({existingUser,token})
  }
  else{
    res.status(404).json('invalid Email Id or Password')
  }
}catch(err){
  res.status(401).json(`login request failed  due to ${err}`);
}
}


//password reset
exports.userPassword = async(req,res)=>{
  const {uname,email,pswd} = req.body
 
  try {
      const pswdChange = await users.updateOne({username:uname,email},{$set:{password:pswd}})
      res.status(200).json(pswdChange)
     } catch (err) {
      res.status(401).json(`Request failed due to ${err}`)
}

}