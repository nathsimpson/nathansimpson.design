const express = require('express');
const port = process.env.PORT || 5000

let app = express();

app.use(express.static('public'));

app.listen(port, function(){
  console.log("Express server is running");
})
