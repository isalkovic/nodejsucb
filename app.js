const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Ivo!");
});
 
module.exports.app = app;
