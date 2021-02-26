var http = require('http');
var fs = require('fs');
var open = require('open');

const PORT=3000; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT, 'localhost', function(){
        console.log("launching the browser!");
        open('http://localhost:3000');
    });
});