const {ApolloServer, gql}=require("apollo-server-express");
const express=require('express');
const typeDefs=require('./typeDefs');
const resolvers=require('./resolvers')
const mongoose=require('mongoose')


 async function startServer(){
 const app=express();
 const apolloServer = new ApolloServer({typeDefs,resolvers});
 await apolloServer.start();
 apolloServer.applyMiddleware({app:app});
 await mongoose.connect('mongodb+srv://sayed:.........@sayedcluster.qfltr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
 { useNewUrlParser: true, useUnifiedTopology: true },()=>console.log('db connected'))
 ;
 
 app.listen(4000,()=>console.log('server is running at pory 3000'))

}
startServer();