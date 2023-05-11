const fs = require("fs");
const { ReadStream } = require("tty");
const express = require("express");
const app = express();

const requestHandler = (req, res) => {
  //requesting a url 
  const url = req.url;
  //requesting a method
  const method = req.method;
   
  if (url === "/") {
    //
    res.write("<html>");
    res.write("<head><title>my message</title></head>");
    // making a post request by sending a message by the client to the server
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form><body>'
    );
    res.write("</html>");
    //ending current response process
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = []
    // listening to the data event
    req.on("data", (chunk) => {
      //chunk fragments of data that is sent by the client to the server
      console.log("chunk",chunk);
      // adding an array to the current list of arrays
      body.push(chunk);
    });
    // listening to the end event
    req.on("end", () => {
      //buffer  a set of chunks
      //creating a buffer and convertig it into a string
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("location", "/chisom");
        res.end()

        const readStream = fs.createReadStream('message.txt',{encoding: 'utf8'});
        readStream.on("data", chunk =>{
          console.log("#####new chunk####")

          console.log(chunk)
        })

        app.get('/', (req,res)=>{
          res.send("Hello")
      })
       app.post('/users', (req,res)=>{
         const user = new User({
          name: req.body.name
         })
       })

        const writeStream = fs.createWriteStream("lagest.txt")
        writeStream.on("data", chunk =>{
          console.log(chunk)
        })
        readStream.pipe(writeStream)
        
        let int,
          n = 5;
        n *= n += 10;
        console.log(n);
        let x = 5,
          y = 6;
        var Boolean,
          result = x > y ? true : false;
        console.log(result);
        let a = "C";
        a = 65;

        console.log(a);
        let: a = "\u0043";
        console.log(a);
        n = 5;
        console.log(n++);
        console.log(n);
        console.log(++n);
        const body = [0, 4];
        body.push = 7;
        console.log(body);
        let: (x = 56), (y = 89);
        lar = x > y ? x : y;
        console.log(lar);

        return res.end();
      });
    });
  }
  {
    /*console.log(req.url,req.method,req.headers,req.body)

  
    //process.exit()
    res.setHeader('content-type', 'text/html')
    res.write('<html>')
     res.write('<head><title>my life</title></head>')
      res.write('<body><h3>my day<h3><body>')
    res.write('</html>')*/
  }
};

module.exports = requestHandler;
//module.exports={
//request:requestHandler
//}
