<?php
require_once 'functions.php';
if (empty($_GET['news-title'])) {
    die('title is empty');
}
if (empty($_GET['category'])) {
    die('category is empty');
}
if (empty($_GET['img'])) {
    die('img is empty');
}
if (empty($_GET['content'])) {
    die('content is empty');
}
$id = intval($_GET['id']);
$title = $_GET['news-title'];
$category = $_GET['category'];
$img = $_GET['img'];
$content = $_GET['content'];
$conn = conndetDb();
mysqli_query($conn,"SET names UTF8");
$sql = "UPDATE `news` SET `news-title`='$title',`category`='$category',`news-img`='$img',`news-content`='$content'  WHERE id = $id";
mysqli_query($conn,$sql);
if (mysqli_errno($conn)) {
    echo mysqli_error($conn);
} else {
    echo  "<script>alert('修改成功');location='allnews.php'</script>";
}
?>