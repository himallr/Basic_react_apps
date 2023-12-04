const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const mysql = require('mysql')


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "new_login",
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req,res)=>{
    const sqlSelect = "SELECT * from  login";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

app.post("/api", (req, res) => {

    console.log("run");

    const name1 = req.body.name1;
    const name2 = req.body.name2;

    const sqlInsert = "INSERT INTO login (user,password) VALUES (?,?)";
    db.query(sqlInsert, [name1,name2], (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});