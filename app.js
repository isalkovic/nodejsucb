const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Ivo! - this time with registry keys!!-ok--!!!");
});
 
module.exports.app = app;
