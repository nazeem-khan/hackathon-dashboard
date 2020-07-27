const express=require("express");
const app=express();
const request=require("request");
app.set("view engine","ejs");

var PORT=process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get("/",(req,res)=>{
    // var query=req.query.search;
    request(`https://cyber-bullying-report.herokuapp.com/api/task-list`,(error,response,body)=>{
       if(!error&&response.statusCode==200){
        const parse=JSON.parse(body);
        res.render("dashboard",{parse:parse});
       }
           
    })
});

app.get('/dash',(req,res)=>{
    request(`https://cyber-bullying-report.herokuapp.com/api/task-list`,(error,response,body)=>{
        if(!error&&response.statusCode==200){
         const parse=JSON.parse(body);
         res.render("results",{parse:parse});
        }
            
     })
})



app.listen(PORT,()=>{
    console.log("Serving at port 3000");
})