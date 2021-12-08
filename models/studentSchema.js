const mongoose=require('mongoose')
const {Schema}=mongoose

const studentSchema= new Schema(
    {
        name:{type:String,required:true},
        age:Number,
        data:{message:String}
    }
)
module.exports=mongoose.model('student',studentSchema)