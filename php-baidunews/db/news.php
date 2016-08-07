<?php

require_once 'functions.php';
$conn = conndetDb();
mysqli_query($conn, "SET names UTF8");
header("Content-Type: text/html; charset=utf-8");
$category = $_POST['category'];
//$category = '本地';
$query = mysqli_query($conn,"SELECT * FROM news WHERE category='".$category."'");
$arr= array();
mysqli_query($conn, "SET names UTF8");
while($row = mysqli_fetch_assoc($query)){
    mysqli_query($conn, "SET names UTF8");
    $arr['list'][] = array(
        'id' => $row['id'],
        'title' => $row['news-title'],
        'img' => $row['news-img'],
        'content' => $row['news-content'],
        'time' => $row['time'],
    );
}
echo json_encode($arr);
?>