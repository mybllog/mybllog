const express = require("express");
const app = express();


const fs = require("fs");
const mysql = require("mysql2");
const { hostname } = require("os");
const bodyParser = require("body-parser");
const cors = require("cors");
const validator = require('validator');

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Adaeze34567890",
  database: "landing_page_db",
  authPlugins: {
    mysql_native_password: false
  }
});



app.use('/',(req, res,next) => {

})
// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});
// API endpoint to create a new user
app.post('/users', (req, res) => {
      const { location, name , email , password} = req.body
      res.send({ message: 'User created successfully' });

      db.query('insert into user (location,name, email, password) values(?,?,?,?)',[location,name,email,password],
      (error, result) => {
      if (error){
        res.status(404).json({error:'internal server error'})
      }else {
        res.send('value inserted successfully')
      }
      
       
      })
})
// API endpoint to retrieve all users
   app.get('/users',(req,res) =>{

      db.query('select * from user' ,
      (error, result) => {
      if (error){
        console.log(error);
        
      }else {
        res.send(result)
      }
      
       
      })
      
   })

   app.get('/users:id',(req,res) =>{

    db.query('select * from user' ,
    (error, result) => {
    if (error){
      console.log(error);
    }else {
      res.send(result)
    }
    
     
    })
    
 })

   app.delete('/users',(req,res) =>{
       res.status(200).json(users)
      
   })

app.listen(3005, () => {
  console.log("this app is listening on port 3005");
});
