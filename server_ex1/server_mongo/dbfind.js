var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:27017/school', function(error, db){
    if(error) {
        console.log(error);
    } else {
        // 1. find( ) 함수에 아무런 입력값이 없으면 컬렉션의 전체 document 를 읽어온다.
        var cursor = db.collection('student').find();
        // 2. 읽어온 document 를 cursor 에 넣고 반복처리
        cursor.each(function(err,doc){ // document 가 예약어이기 때문에 변수명을 doc로 변경
            if(err){
                console.log(err);
            }else{
                if(doc != null){
                    // 3. document 가 정상적으로 있으면 console 에 출력해준다.
                    console.log(doc);
                }
            }
        });
        db.close();
    }
});