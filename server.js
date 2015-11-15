var express = require('express')
  , app = express();
  
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/');

app.get('/', function(req, res) {
  res.render('index.html');
});

// static 은 view 선언 다음에 사용
app.use(express.static(__dirname + '/'));

app.listen(8000); 
console.log('Server running at http://127.0.0.1:8000/');