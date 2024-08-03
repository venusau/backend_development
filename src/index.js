// require("dotenv").config({path:"./env"})

import dotenv, { config }  from "dotenv";
dotenv.config({
  path: "./.env",
});
import { app } from "./app.js";
import { connectDB } from "./db/index.js";



connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MONGODB connection failed, ERROR: ${error}`);
  });

/*
const app = express()

;(async ()=>{
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
        console.log("ERROR: ", error)
        throw error
    })
    app.listen(process.env.PORT, ()=>{
        console.log(`server listening on ${process.env.PORT}`)
    })
} catch (error) {
    console.log(`something went wrong, ERROR: ${error}`)
}
})()

*/
