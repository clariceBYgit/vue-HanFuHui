// 创建连接池
const mysql=require("mysql");
var pool=mysql.createPool({
  host:"127.0.0.1",
  password:"",
  user:"root",
  connectionLimit:20,
  database:"hanshang"
})
module.exports=pool;