
const express=require('express');
const port=3000;
const app=express();

app.get("/routehandler",function(req,res){
    res.json({
        message: "This is a route handler",
        names: ["John", "Doe", "Jane"]
    });
});

app.post('/conversations',(req,res)=>{
    console.log(req.headers);
    res.send({
        message: 'You made a POST request to /conversations',
    })
})

app.get('/',function(req,res){
    res.send('hello to express')

})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})