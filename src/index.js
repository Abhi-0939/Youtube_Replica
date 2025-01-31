// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()

/*
import express from "express"
const app = express()

( async() => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("Error" , (error) => {
           console.log("ERR", error)
           throw error
        })
        
        app.listen(process.env.PORT, () => {
            console.log(`${process.env.PORT}`)
            })

    } catch(error){
        console.error("ERROR:", error)
    }
})()
    */