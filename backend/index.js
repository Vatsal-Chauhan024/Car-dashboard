require("./db/db")
const express = require("express")
const app = express()
const cors = require("cors")
require('dotenv').config()
const router = require("./routes/routes")



const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
app.use(express.static("./public"))
app.use(router)



app.listen(port, () => {
    console.log(`Server is Running on PORT: ${port}`);;
})
