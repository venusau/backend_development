const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req,res)=>{
    res.send("vickybhattacharya19@dotcom")
})

app.get("/login", (req, res)=>{
    res.send("<h1>hello from the login route </h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})