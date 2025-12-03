express= require("express")
Books =require ('-/schema')
const connectDB =require ('/connection'). default

const cors =require('cors');
console.log("server2k25")

var app= express()
app.use(express.json());
app.use(express.urlencoded({extended;false})
app.use(cors()));
.
