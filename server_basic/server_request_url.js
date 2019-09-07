// 해당 url에 대응하는 출력문을 출력한다.

var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){
    console.log(request.url);
    var parsedUrl = url.parse(request.url)
    console.log(parsedUrl)

    var resource = parsedUrl.pathname;
    console.log(`resource path = ${resource}`)

    if(resource == '/address') {
        response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        response.end('서울특별시 강남구 논현1동 111');
    }
    else if(resource == '/phone'){
        response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        response.end('02-3545-1237');
    }
    else{
        response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        response.end('404 Page Not Found');
      }
        

})
server.listen(80, function(){
    console.log('Server is running...');
});