const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from  Ivo! 888- this is time with registry keys!!-ok--!!!");
});
 
module.exports.app = app;
