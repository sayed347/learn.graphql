const mongoose=require('mongoose')

const User=require('./UserModel')
const CommentSchema=new mongoose.Schema({

comment:{
type:String,
required:true
},
id:{
type:String,
required:true
},
user:{
    type:User,
    required:true
    

}

})
const Comment=mongoose.model('comment',CommentSchema)
module.exports=Comment;