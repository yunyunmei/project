<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>链接数据库</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
 <?php
header("Content-type:text/html;charset=utf-8");
// 链接服务器函数 s 链接地址  用户名  密码 数据库名
 require_once 'functions.php';
 $conn = conndetDb();
 mysqli_query($conn,"SET names UTF8");
if ($conn) {
    mysqli_query($conn,"SETNAMES 'UTF8'");
	$result = mysqli_query($conn,"SELECT * FROM news WHERE id = 1");
//    获取数据长度
    $data_count = mysqli_num_rows($result);
    for($i=0;$i<$data_count;$i++){
        print_r(mysqli_fetch_assoc($result));
    }
//获取所有数据的条数数据条数 还可以加条件来获取
   $re = mysqli_query($conn,"SELECT COUNT(*) FROM news");
    if ($re) {
        $re_arr = mysqli_fetch_array($re);
        echo '数据条数' . $re_arr[0];
    }else{
        echo "查询失败";
    }
}else{
	echo "链接失败";
}
?>
</body>
<html>