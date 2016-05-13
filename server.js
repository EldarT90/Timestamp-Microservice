'use strict';

var express = require('express');
var moment = require("moment");


var app = express();

app.get('/:id', function (req, res) {
    var c = req.params.id;
     var a = moment(req.params.id, ['DDMMMMY', 'MMMMDDY']).format("ll");
     var b = c.toLowerCase();
     if(b.substring(0, 3) === 'jan' || b.substring(0, 3) === 'feb'  ||  b.substring(0, 3) === 'mar'  || 
     b.substring(0, 3) === 'apr'  ||  b.substring(0, 3) === 'may'  ||  b.substring(0, 3) === 'jun'  ||  
     b.substring(0, 3) === 'jul'  ||  b.substring(0, 3) === 'aug'  ||  b.substring(0, 3) === 'sep'  ||  
     b.substring(0, 3) === 'oct'  ||  b.substring(0, 3) === 'nov'  ||  b.substring(0, 3) === 'dec') {
         
     }
     else {
         a = "Invalid date";
     }
   
     
     
    var dateString = moment.unix((Math.round(+req.params.id/(1000)))).format("ll");
   
    if (a == "Invalid date" && dateString == "Invalid date") {
        res.send({"unix":null,"natural":null});
        
    }
   
    else if(/^\d+$/.test(req.params.id) == true) {
    res.send({"unix":req.params.id,"natural":dateString});
    }
    
    else if (/^\d+$/.test(req.params.id) == false){
       
        var noviDat = moment(req.params.id, ['DDMMMMY', 'MMMMDDY']).format("unix");
        
while(noviDat.charAt(0) === 'u' || noviDat.charAt(0) === 'n' || noviDat.charAt(0) === 'i' )
    {noviDat = noviDat.substr(1);}
        
        res.send({"unix":noviDat,"natural":a});
    }
    
    
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + process.env.PORT + '...');
});