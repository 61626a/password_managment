const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 4010;
const cors = require("cors");
const device_password = 123;

const {encrypt, decrypt} = require("./EncryptionHandler");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "61626",
  database: "password_manager",
});

app.post('/alerting',(req,res) => {
    console.log(req.body.device_code);
    if(req.body.device_code==device_password)
       res.send("success");
    else
     res.send("failed");

  });

app.post("/temp",(req,res)=>{
        res.send("nice ok")
});
app.post('/addpassword', (req, res) => {
   const password = req.body.password;
   const title = req.body.title;
   console.log(password,title);

   const hashpassword = encrypt(password);
  
   db.query(
     "INSERT INTO password (password,Title,iv) VALUES (?, ?,?)",
     [hashpassword.password, title,hashpassword.iv],
     (err,result) =>{
      if(err)
        {
          console.log(err);
        }
      else{
        res.send("success");
      }
     }
   )
});

app.post("/getpassword" ,(req,res) =>{
  res.send(decrypt(req.body));

});

app.get('/showpassword',(req,res) =>{

    db.query("SELECT * FROM password;" ,(err,result)=>{
      if(err)
        {
          console.log(err);
        }
      else{
        res.send(result);
      }

    });
});
app.listen(PORT, () => {
    console.log("Server is running");
  });