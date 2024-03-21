
const forms = require('../Model/formSchema')

const jwt = require('jsonwebtoken')


console.log('inside the controller - register function');


exports.registervech =async(req,res)=>{



    console.log('inside the controller - register');

 let imgarray = []
    for(let obj of req.files){
         imgarray.push(obj.filename)
    }
    console.log(imgarray)
    

    const{vname,
        vemail,
        vpsd,
        vyear,
        vnumber,
        vtype,
        vitems,
        vmsg,
        vdefects,
       } = req.body

    console.log(`${vname},${vemail},${vpsd},${vyear},${vyear},${vnumber},${vtype},${vitems},${vmsg},${vdefects}`);

    

    try{
        const newRegister = new forms({
            vname,
    vemail,
    vpsd,
    vyear,
    vnumber,
    vtype,
    vitems,
    vmsg,
    vdefects,
    vattacthment:imgarray

        })
        await newRegister.save()
        res.status(200).json(newRegister)

    }catch(err){
        res.status(401).json(`Request Failed Due to ${err}`)
    }

    }