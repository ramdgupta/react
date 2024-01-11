import express from "express";
import dontenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dontenv.config({
    path:'./env'
})

connectDB()
.then(
    app.listen(process.env.PORT||8000, ()=>{
        console.log(`server is running at port new http://localhost:${process.env.PORT}`);
    }),
    
    
)
.catch((err)=>{
    console.log("MONGO db connection failed !!!", err)
})

// import express from "express";
// const app = express();
// ;(async()=>{
// try {
//     mongooes.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error", ()=>{
//         console.log("Error :", error);
//         throw error;
//     })

//     app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening port ${process.env.PORT}`);
//     })
// } catch (error) {
//     console.log("ERROR: ", error);
//     throw err;
// }
// })()