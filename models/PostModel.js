const mongoose=require('mongoose')
const comment=require('./CommentModel')

const PostSchema=new mongoose.Schema({

description:{
type:String,
required:true
},
id:{
type:String,
required:true
},
comments:{
    type:[comment]
    

}

})
const Post=mongoose.model('post',PostSchema)
module.exports=Post