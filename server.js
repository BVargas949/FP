var express = require('express');
const fetch = require('node-fetch');
const path = require('path');
var app = express();
const port = 8080;

app.set('view engine', 'pug');
app.set("views", path.join(__dirname,"views"));
app.use("/static", express.static(path.join(__dirname, "public")));




app.get('/', (req, res) => {  

    fetch('https://swapi.co/api/planets/3/')
    .then(res => res.json())
    .then(
      (json) => {
        console.log(json)
      res.render('index', { 
          planet: json
        })
      })
    });


    const server = app.listen(port, () =>{
        console.log(`Express running - PORT ${server.address().port}`)
      })