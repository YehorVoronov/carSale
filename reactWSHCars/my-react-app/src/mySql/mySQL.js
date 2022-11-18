// const cors = require("cors");
// const path = require('path')
// const mysql = require('mysql')
//
// const conn =mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     database:"cars_node",
//     password:""
// })
//
// export let openDataMysql=()=>{
//     conn.connect(err=>{
//         if (err){
//             console.log(err);
//             return err;
//         }else {
//             console.log("Database___OK")
//         }
//     })
// }
//
// export let nedOnlyQueryForRequest=(query)=>{
//     conn.query(query,(err,result,field)=>{
//         debugger
//         console.log(result)
//     })
// }
//
// export let getAllMysql=()=>{
//     openDataMysql()
//
//     let query="SELECT * FROM `cars_node`;"
//
//     nedOnlyQueryForRequest(query)
//     closeDataMysql()
// }
//
// export let deleteWithIdMysql=(id)=>{
//     openDataMysql()
//
//     //let query="DELETE FROM cars_node \n" + "WHERE id = "+id.toString()+";";
//     let query="DELETE FROM cars_node \n" + "WHERE id = "+id+";";
//
//     nedOnlyQueryForRequest(query)
//     closeDataMysql()
// }
//
// export let deleteAllMysql=()=>{
//     openDataMysql()
//     let query="DELETE FROM `cars_node`;";
//     nedOnlyQueryForRequest(query)
//     closeDataMysql()
// }
// //example how to call this function
// // addObjectMysql("4","mustang","Kris","kriss mustang good car")
// export let addObjectMysql=(id,carName,owner,description)=>{
//     openDataMysql()
//     // let query="INSERT INTO `cars_node` (`id`, `carName`, `owner`, `description`, `reg_date`) VALUES ('5', 'mercedes-Benz', 'artem ', 'nice expiriense', CURRENT_TIMESTAMP);"
//     let query="INSERT INTO `cars_node` (`id`, `carName`, `owner`, `description`, `reg_date`) VALUES ('"+id.toString()+
//         "', '"+carName.toString()+
//         "', '"+owner.toString()+
//         "','"+description.toString()+
//         "', CURRENT_TIMESTAMP);"
//     nedOnlyQueryForRequest(query)
//     closeDataMysql()
// }
// //updateObjectWithIdMysql("5","nissan","nikita","its update description")
// export let updateObjectWithIdMysql=(id,carName,owner,description)=>{
//     openDataMysql()
//
//     let query="UPDATE `cars_node` SET `id`='"+id.toString()+
//         "',`carName`='"+carName.toString()+
//         "',`owner`='"+owner.toString()+
//         "',`description`='"+description.toString()+
//         "',`reg_date`=CURRENT_TIMESTAMP WHERE `id`='"+id.toString()+"';"
//
//     nedOnlyQueryForRequest(query)
//     closeDataMysql()
// }
//
// export let closeDataMysql=()=>{
//     /*return(
//         conn.end(err=>{
//             if (err){
//                 console.log(err);
//                 return err;
//             }else {
//                 console.log("Database___CLOSE")
//             }
//         })
//     )*/
// }