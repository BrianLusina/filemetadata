// server.js
// where your node app starts

// init project
let express = require('express');
let app = express();
let PORT = process.env.PORT || 8000

app.use(express.static('public'));

app.set("views", "./views");
app.set("view engine", "pug");

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.render("index");
  //response.sendFile(__dirname + '/views/index.html');
});


// listen for requests :)
app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}`)
})