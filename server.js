const express=require('express')
const app=express()
require('dotenv').config()
const connectDB=require('./config/connectDB')
const student=require('./models/studentSchema')
connectDB()

const addStudent=async()=>{
    const houssem= new student({name:'abderrahim',age:23,data:{message:'hello houssem'}})
    await houssem.save()
}

const deleteStudent=async()=>{
    await student.findByIdAndRemove("61b0d57983e1eee49c7e1842")
}
const updateStudent=async()=>{
    await student.findByIdAndUpdate("61b0d448ebcaf895d1f22b57",{$set:{name:"taha"}})
}

const getStudent=async()=>{
    const result = await student.find()
    console.log(result)
}
getStudent()

const PORT= process.env.PORT || 4000
  
app.listen(PORT,()=>console.log(`app listening on port ${PORT}`))