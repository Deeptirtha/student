const mongoose= require("mongoose")

const student=new mongoose.Schema(
{
    name:{type:String,required:true,trim:true},
    subject:{type:String,required:true,trim:true},
    marks:{type:Number,required:true}

}
)
module.exports=mongoose.model("student",student)