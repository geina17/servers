var http = require('http');
var PORT = 7000;
var usb = 7500;

//tell it how to handle a request
function hndleRequest(request,response){
    response.end ('you lookin good stud muffin');
   
}
function hndleReqst(request,response){
    response.end ('oh gawd are those love handles');
   
}

var server7 = http.createServer(hndleRequest);
var server75 = http.createServer(hndleReqst);

 //need to tell it to listen
 server7.listen(PORT, function(){
     console.log('server is listening on: http://localhost:%s',PORT);
     
});
server75.listen(usb, function(){
    console.log('server is listening on: http://localhost:%s',usb);
});



