const Post=require('./models/PostModel')
const Comment=require('./models/CommentModel')


const resolvers={
    Query:{

     Posts:async()=>{
     const posts= await Post.find()
     return posts
     },
     post:async(parent,{id},context,info)=>{
     return await Post.findById(id)
     },
     Comments:async()=>{
        const Comments= await Comment.find() 
        return Comments},

    Comment:async(parent,{id},context,info)=>{
         return await Comment.findById(id)
            },
       },

    Mutation:{

    addPost: async(parent,args,context,info)=>{

       const{description,comment}=args.post
       const post=new Post({description,comment})
       await post.save()
       return post

    },
    deletePost: async(parent,args,context,info)=>{
        const {id}=args;
        await Post.findByIdAndDelete(id);
        return 'post deleted '
    },
    updatePost: async(parent,args,context,info)=>{
        const {id}=args;
        const{description,comment}=args.post;
        const post=await Post.findByIdAndUpdate(id,{description,comment},{new:true});
        return post
    },
    addComment: async(parent,args,context,info)=>{

        const{user,comment}=args.comment
        const comment=new Post({comment,user})
        await comment.save()
        return comment},
    deleteComment: async(parent,args,context,info)=>{
            const {id}=args;
            await Comment.findByIdAndDelete(id);
            return 'post deleted '
        },
     updatePost: async(parent,args,context,info)=>{
            const {id}=args;
            const{description,user}=args.comment;
            const post=await Post.findByIdAndUpdate(id,{description,user},{new:true});
            return post}







    }
}

module.exports=resolvers;