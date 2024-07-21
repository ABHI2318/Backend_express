const express = require('express');
const app = express();

var users = [{
    name: 'John Doe',
    kidneys: [{
        healthy: false
    }]
}];

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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
