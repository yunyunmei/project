<?php
header("Content-type:text/html;charset=utf-8");
require_once 'config.php';
function conndetDb(){
    $conn = mysqli_connect(MYSQL_HOST,MYSQL_USER,MYSQL_PW,'myapp');
    if(!$conn){
        die('Can not connect db');
    }
    return $conn;
}