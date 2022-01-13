console.log("Hello World!");

//Common JS Modules
const anmolObj = require("./child1");
console.log(anmolObj);

//BuiltIn HTTP Module

const httpModule = require("http");
server = httpModule.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Welcome to root page!");
    res.end();
  }
  if (req.url === "/address1") {
    res.write("Thanks for visiting URL : ADDRESS1");
    res.end();
  }
});
server.listen(3000);
