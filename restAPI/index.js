const express = require('express')
const path = require('path')
const app = express()
const cors = require("cors");
const mysql = require('mysql')
const fetch = require('node-fetch');

//
//
//
//
//
//
//
//
//
//


// const conn =mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     database:"cars_node",
//     password:""
// })

const conn = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'cars_node'
});


// let openDataMysql=()=>{
//         conn.connect(err=>{
//             if (err){
//                 console.error('error connecting: ' + err.stack);
//                 return;
//             }else {
//                 console.log("Database___OK")
//             }
//         })
// }
// openDataMysql();


//get all
//let query="SELECT * FROM `cars_node`;"
//delete with id
//let query="DELETE FROM cars_node \n" + "WHERE id = 2;"
//delete all
//let query="DELETE FROM `cars_node`;"
//add new (reg_date null)
//let query="INSERT INTO `cars_node` VALUES (2,\"mercedes\",\"artem\",\"very very good car\",reg_date);"
//let query="INSERT INTO `cars_node` (`id`, `carName`, `owner`, `description`, `reg_date`) VALUES ('3', 'mercedes-Benz', 'artem ', 'nice expiriense', CURRENT_TIMESTAMP);"
//update
//let query="UPDATE `cars_node` SET `id`='2',`carName`='bugatti',`owner`='roman',`description`='expensive car',`reg_date`=reg_date WHERE `id`=2;"


let closeDataMysql=()=>{
    // return(
    //     conn.end(err=>{
    //         if (err){
    //             console.log(err);
    //             return err;
    //         }else {
    //             console.log("Database___CLOSE")
    //         }
    //     })
    // )
}


app.use(cors());

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Welcome to  application." });
});



app.get("/anotherAPI",(req  , res)=>{
    fetch('https://api.api-ninjas.com/v1/cars?model=camry',{
        headers: {
            'X-Api-Key': '/99Ir718OEm9oKvuYnikRg==Tt7S3tPmMGwXSOUa'
        },
    })
        .then((response) => response.json())
        .then((data) =>{
            res.json(data)
        })
});
//--------------
//
//
//
//
app.get('/api/allInformation/pageNumber/:num', (req, res) => {
    let num=parseInt(req.params.num);
    if (num<=0){
        num=1
    }

    let query="SELECT * FROM `cars_node` LIMIT "+(num*5-5)+","+(5)+";"

   /* function getGet(name) {
        let s = window.location.search;
        s = s.match(new RegExp(name + '=([^&=]+)'));
        return s ? s[1] : false;
    }

    alert(getGet('tab'));
*/

    conn.query(query,(err,result,field)=>{
        if(err){
            console.log(err);
            closeDataMysql();
            res.status(403).json({message: err.message});
        }
        closeDataMysql();
        res.status(200).json(result);
    })

})
//
//
//
///
//
app.get('/api/allInformation', (req, res) => {
    let query="SELECT * FROM `cars_node`;"

    conn.query(query,(err,result,field)=>{
        if(err){
            console.log(err);
            closeDataMysql();
            res.status(403).json({message: err.message});
        }
        closeDataMysql();
        res.status(200).json(result);
    })

})

//register data
app.get('/api/register', (req, res) => {
    let query="SELECT * FROM `register`;"

    conn.query(query,(err,result,field)=>{
        if(err){
            console.log(err);
            closeDataMysql();
            res.status(403).json({message: err.message});
        }
        closeDataMysql();
        res.status(200).json(result);
    })
})

//register :create new account
app.post('/api/register', (req, res) => {
    const { login, password, phone  } = req.body;
    let id=Math.floor(Math.random() * 10000);

    let query="INSERT INTO `register` (`id`, `login`, `password`, `phone`) VALUES ('"+id.toString()+
        "', '"+login.toString()+
        "', '"+password.toString()+
        "','"+phone.toString()+ "');"
    conn.query(query,(err,result,field)=>{
        if(err){
            console.log(err);
            closeDataMysql();
            res.status(403).json({message: err.message});
        }
        closeDataMysql();
        const contact = {
            ...req.body,
            id: id
        }
        res.status(201).json(contact);
    })
})
app.put('/api/register/:id', (req, res) => {
    let {isLog } = req.body
    let id = req.params.id;

let query="UPDATE `register` SET `isLog` = '"+isLog.toString()+"' WHERE `register`.`id` = "+id.toString()+";"

    /*let query="UPDATE `cars_node` SET `id`='"+id.toString()+
        "',`carName`='"+carName.toString()+
        "',`owner`='"+owner.toString()+
        "',`description`='"+description.toString()+
        "',`reg_date`=CURRENT_TIMESTAMP WHERE `id`='"+id.toString()+"';"*/

    conn.query(query,(err,result,field)=>{
        if(err){
            console.log(err);
            closeDataMysql();
            res.status(403).json({message: err.message});
        }
        closeDataMysql();
        res.status(200).json({message:"update login : good )"})
    })

})


app.post('/api/cars', (req, res) => {
console.log(req.body)
    const { description, owner, carName,photoUrl,photoUrl2,photoUrl3,photoUrl4,photoUrl5,photoUrl6,phone  } = req.body;
    let id=Math.floor(Math.random() * 1000);

    let query="INSERT INTO `cars_node` (`id`, `carName`, `owner`, `description`," +
        " `reg_date`, `photoUrl`, `photoUrl2`, `photoUrl3`, `photoUrl4`, `photoUrl5`, `photoUrl6`,`phone`) " +
        "VALUES (NULL, '"+carName.toString()+
        "', '"+owner.toString()+
        "', '"+description.toString()+
        "', CURRENT_TIMESTAMP," +
        " '"+photoUrl.toString()+
        "', '"+photoUrl2.toString()+
        "', '"+photoUrl3.toString()+
        "', '"+photoUrl4.toString()+
        "', '"+photoUrl5.toString()+
        "', '"+photoUrl6.toString()+"', '"+phone.toString()+"');"

    conn.query(query,(err,result,field)=>{
        if(err){
            console.log(err);
            closeDataMysql();
            res.status(403).json({message: err.message});
        }
        closeDataMysql();
        const contact = {
            ...req.body,
            id: id,
            marked: false
        }

        res.status(201).json(contact);
    })

})

//localhost:3000/api/cars/deleteOne/692
// DELETE
app.delete('/api/cars/deleteOne/:id', (req, res) => {

    let id=req.params.id.toString();

    let query="DELETE FROM cars_node \n" + "WHERE id = "+id+";";

    conn.query(query,(err,result,field)=>{
        if(err){
            console.log(err);
            closeDataMysql();
            res.status(403).json({message: err.message});
        }
        closeDataMysql();

        res.status(200).json({message: 'Контакт был удален'})
    })
})

//delete all objects
app.delete("/api/cars/deleteAll",(req,res)=>{

    let query="DELETE FROM `cars_node`;";

    conn.query(query,(err,result,field)=>{
        if(err){
            console.log(err);
            closeDataMysql();
            res.status(403).json({message: err.message});
        }
        closeDataMysql();

        res.status(200).json({message:"delete all: good )"})
    })

})

// PUT
app.put('/api/cars/:id', (req, res) => {
    let {carName, owner, description,phone } = req.body
    let id = req.params.id;
console.log(phone)

    let query="UPDATE `cars_node` SET `id`='"+id.toString()+
        "',`carName`='"+carName.toString()+
        "',`owner`='"+owner.toString()+
        "',`description`='"+description.toString()+
        "',`phone`='"+phone.toString()+
        "',`reg_date`=CURRENT_TIMESTAMP WHERE `id`='"+id.toString()+ "';"

    conn.query(query,(err,result,field)=>{
        if(err){
            console.log(err);
            closeDataMysql();
            res.status(403).json({message: err.message});
        }
        closeDataMysql();
        res.status(200).json({message:"update all: good )"})
    })

})



// This is better i
//
// app.use(express.static(path.resolve(__dirname, 'client')))
//
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
// })

//It's for you client. Axios use fetch, but it's functions are easier to use.
//Axios is better choise: npm i axios
//fetch("http://localhost:3000/contacts", {
// method:"POST",
// headers:{'Content-Type':'application/json'},
// body:'{"name":"name", "value":"sosi"}'
// }).then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((e=>console.log(error)));

app.listen(3000, () => console.log('Server has been started on port 3000...'))