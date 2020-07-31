const express =require('express');
const Mock = require('mockjs')

let app = new express();
// 跨域
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('', function(req, res){
  res.json(Mock.mock({

  }))
})

app.listen(3000, () => {
  console.log('server is running 3000')
})