<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>新闻管理系统</title>
</head>
<body>
    <?php
    require_once 'functions.php';
    $conn = conndetDb();
    mysqli_query($conn, "SET names UTF8");
    $username = $_POST['username'];
    $password = md5($_POST['password']);
    //插入
    $sql = "INSERT INTO user (`users`, `password`) VALUES ('$username', '$password')";
    $set = mysqli_query($conn,$sql);
    if($set==1){
        echo  "<script>alert('注册成功！');location='../index.html'</script>";
    }else{
        echo  "<script>alert('注册失败！');location='../index.html'</script>";
    }
    mysqli_close($conn);
    ?>
</body>
</html>