const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/cardatabase").then(() => {
    console.log("Database is Successfully Connected")
}).catch((e) => {
   console.log(e)
})

