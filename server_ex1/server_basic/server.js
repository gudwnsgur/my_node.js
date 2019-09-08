var http = require('http');
// 서버 사용을 위해 http 모듈을 http 변수에 담는다.
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(request, response) {
        // 3. 콘솔화면에 로그 시작 부분을 출력
    console.log('--- log start ---');
    // 4. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);
    // 5. 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
    var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
    console.log(parsedQuery);
    // 6. 콘솔화면에 로그 종료 부분을 출력
    console.log('--- log end ---');

    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    response.end('var1의 값은 '+parsedQuery.var1);
}); // http 모듈로 서버 생성

server.listen(8080, function(){ 
    console.log('Server is running...');
}); // 서버 실행 (8080포트)