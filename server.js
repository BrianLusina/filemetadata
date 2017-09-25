// server.js
// where your node app starts

// init project
let express = require('express');
let app = express();
let PORT = process.env.PORT || 8000
let multer = require("multer");
let bodyParser = require("body-parser");

const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public'));

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (request, response) => {
  response.render("index");
});

// post to get file metadata
app.post("/filemetadata", upload.single("file"), (request, response) =>{
  if(!request.body){
    request.status(500).end();
  }else{
    response.json({ "size" : request.file.size })
  }
});


// listen for requests :)
app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}`)
})