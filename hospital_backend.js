const express = require('express');
const app = express();

var users = [{
    name: ['John Doe','abishek'],
    kidneys: [{
        healthy: false
    }]
   
}];

app.use(express.json());

app.get('/', function(req, res) {
    const johnkidneys = users[0].kidneys;
    const noofkidneys = johnkidneys.length;
    let noofhealthykidneys = 0;

    for (let i = 0; i < johnkidneys.length; i++) {
        if (johnkidneys[i].healthy) {
            noofhealthykidneys++;
        }
    }

    res.json({
        noofkidneys,
        noofhealthykidneys,
        noofunhealthykidneys: noofkidneys - noofhealthykidneys
    });
});


app.post('/',function(req, res) {
    const ishealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })

    res.json({
        message:"done sucessfully"
    })
})

app.put('/', function(req, res) {
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})

})

app.delete('/', function(req, res) {
    users[0].kidneys=[];
    res.json({})
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});