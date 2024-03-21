
const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({

    vname:{
        type:String,
        require:true,
    },
    vemail:{
        type:String,
        require:true,
        unique:true,
       
    
        validator(value){
            (!validator.isEmail(value))
        throw new Error('invalid Email')
    }},
    vpsd:{
        type:String,
        require:true,
    },
    vyear:{
        type:String,
        require:true,
     
    },
    vnumber:{
        type:String,
        require:true,
     
    },
    vtype:{
        type:String,
        require:true,
     
    },
    vitems:{
        type:String,
        require:true,
     
    },
    vmsg:{
        type:String,
        require:true,
     
    },
    vdefects:{
        type:Array,
        require:true,
     
    },
    vattacthment:{
        type:Array,
        require:true,
     
    },

})

const forms = mongoose.model("forms",formSchema)


module.exports = forms
