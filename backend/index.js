const express = require("express")

const app = express()

var frname = []
app.get("/fname",function(req,res)
{
    console.log(req.query.FriutName)
    frname.push(req.query.FriutName)
    console.log("FriutName Added : ",req.query.FriutName)
    res.send(frname)
})
app.listen(5000,function()
{
    console.log("Server Is Started...")
})