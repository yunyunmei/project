<?php
if (empty($_GET['id'])){
    die('id is empty');
}
require_once 'functions.php';
$cnn = conndetDb();
$id = intval($_GET['id']);
mysqli_query($cnn,"DELETE FROM news WHERE id = $id");
$mark = mysqli_affected_rows($cnn);
if ($mark > 0) {
    echo  "<script>alert('删除成功');location='allnews.php'</script>";
} else {
    echo  "<script>alert('删除失败');location='allnews.php'</script>";
}
mysqli_close($cnn);
?>