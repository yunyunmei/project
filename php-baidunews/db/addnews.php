<?php
//判断是否有值
if (!isset($_POST['news-title'])) {
    die('news-title not define');
}
if (!isset($_POST['category'])) {
    die('category not define');
}
if (!isset($_POST['news-img'])) {
    die('news-img not define');
}
if (!isset($_POST['news-content'])) {
    die('news-content not define');
}
$newsTitle = $_POST['news-title'];
if (empty($newsTitle)) {
    die('newsTitle is enpty');
}
$category = $_POST['category'];
if (empty($category)) {
    die('category is enpty');
}
$newsImg = $_POST['news-img'];
if (empty($newsImg)) {
    die('newsimg is enpty');
}
$newsContent = $_POST['news-content'];
if (empty($newsContent)) {
    die('newsContent is enpty');
}
require_once 'functions.php';
$conn = conndetDb();
mysqli_query($conn,"SET names UTF8");
$newsTitle = $_POST['news-title'];
$category = $_POST['category'];
$newsImg = $_POST['news-img'];
$newsContent = $_POST['news-content'];
$time = date("Y-m-d");
//插入数据
$sql = "INSERT INTO `news`(`news-title`, `category`, `news-img`, `news-content`, `time`) VALUES ('$newsTitle','$category','$newsImg','$newsContent','$time')";
if (mysqli_query($conn,$sql)) {
    echo "<script>alert('添加成功！');location='allnews.php'</script>";
} else {
    echo "<script>alert('添加失败！');location='allnews.php'</script>";
}
mysqli_close($conn);
?>