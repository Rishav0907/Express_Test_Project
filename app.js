var express=require('express')
var app=express()
var bodyparser=require('body-parser')
var mongoose=require('mongoose')
app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended:true}))
//app.use(express.static(__dirname +'public'))
mongoose.connect("mongodb://localhost:27017/project1")
var itemSchema=mongoose.Schema({
    image:String,
    title:String,
    description:String
})
 var items=mongoose.model("items",itemSchema)

// items.create({
//     image: "https://www.wifi-shop24.com/media/image/product/1280/md/alfa-networks-awus1900-wifi-usb-adapter~2.jpg",
//     title:"Alfa Wifi Adapter",
//     description:"Wifi adapters supporting monitor mode and packet injection."
// },function(err,data)
// {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log(data)
//     }
// })

app.get("/",function(req,res)
{
    res.render("index")
})

app.get("/all",function(req,res)
{
    items.find({},function(err,allItems)
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.render("show",{all:allItems})
        }
    })
})
app.listen(8900,'192.168.0.102',function(req,res)
{
    console.log("Server started at port 5000")
})