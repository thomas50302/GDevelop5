// var http = require('http');
// http.createServer(function(request, response){
// 	response.write("Hello World!");
// 	response.end(); //close connection
// }).listen(80); //http port
var express = require("express");
var server = express();

var bodyParser = require("body-parser");



server.use(express.static(__dirname + "/public"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const Datastore = require('nedb-promises')
let GameDB = Datastore.create(__dirname + '/game.db')

// server.get("/", function (req, res) { //web root
//     res.send("Hello, World!"); //回傳固定內容
// });
server.get("/score", function (req, res) { //other pages
   //url?user=md&score=1000
   console.log(req.query);
   res.send("req /md");
});


server.post("/rank", (req, res) => {
   GameDB.find({}, { _id: 0 }).sort({ "score": -1 }).limit(3).then((docs) => {
      if (docs != null) {
         res.send(docs);
      }
   })
})
server.post("/postscore", (req, res) => {
   console.log(req.body);
   //save to db
   GameDB.insert(req.body).then(doc => {
      //find and sort and limit
      GameDB.find({}, { _id: 0 }).sort({ "score": -1 }).limit(3).then((docs) => {
         if (docs != null) {
            res.send(docs);
         }
      })
   });

   // res.send([{name:"MD", rank:1},{name:"Jhon",rank:2}]);
});

server.listen(80);
