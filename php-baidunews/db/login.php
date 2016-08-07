<?php
session_start();
require_once 'functions.php';
$cnn = conndetDb();
mysqli_query($cnn, "SET names UTF8");
if (!isset($_POST['username'])) {
    die('username not define');
}
if (!isset($_POST['password'])) {
die('password not define');
}
$username = $_POST['username'];
if (empty($username)) {
    die('请输入用户名');
}
$password =md5($_POST['password']);
if (empty($password)){
    die('请输入密码');
}
$sql  = "SELECT * FROM `user` WHERE `users`='".$username."' AND `password`='".$password."'";
$set = mysqli_query($cnn,$sql);
$result = mysqli_fetch_array($set);
if ($result){
    $_SESSION['user'] = $username;
    header('Location:allnews.php');
}else{
    echo  "<script>alert('账号或密码错误，登录失败');location='../index.html'</script>";
}
mysqli_close($cnn);
?>


