// listing 8.1.js (p. 137)
"use strict";

const port = 3000,
    express = require('express'), // 애플리케이션에 express 모듈 추가
    app = express(); // 상수 app에 express 애플리케이션 할당

app
    .get('/', (req, res) => { // 홈페이지에 GET 라우트 세팅      
        console.log(req.params);
        console.log(req.body);
        console.log(req.url);
        console.log(req.query);

        res.send('Hello World!'); // res.send로 서버에서 클라이언트의 응답 발행
    })
    .listen(port, () => { // 3000번 포트로 애플리케이션 셋업
        console.log(`Express at http://localhost:${port}`);
    });