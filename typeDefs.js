const {gql}=require('apollo-server-express')

const typeDefs=gql`

type Comment {
    comment: String
    id:String
    user: User
  }
  
  type Post {
    description: String
    id: String
    comments: [Comment]
  }
  
  type User {
    email: String
    name: String
  }
  
  type Query {
    Posts: [Post]
  }
  
  type Query {
    Post(id: String!): Post
  }
  
  type Mutation {
    addPost(input: InputPost): Post
  }
  
  type Mutation {
    updatePost(id: String, input: InputPost!): Post
  }
  
  type Mutation {
    deletePost(id: String): String
  }
  
  type Mutation {
    addComment(PostId: String!, InputComment: String!): Post
  }
  
  type Mutation {
    updateComment(id: String, input: InputComment!): Comment
  }
  
  type Mutation {
    deleteComment(id: String): String
  }
  
  input InputPost {
    
    description: String
    id: String
    comment: String
  }
  
  input InputComment {
    comment: String
    user: InputUser
  }
  
  input InputUser {
    email: String
    name: String
  }
`
module.exports=typeDefs;