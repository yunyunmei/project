<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/addnews.css">
</head>
<body>
<?php

require_once 'functions.php';
if (!empty($_GET['id'])){
    $conn = conndetDb();
    mysqli_query($conn,"SET names UTF8");
    $id = intval($_GET['id']);
    $res = mysqli_query($conn,"SELECT * FROM news WHERE id = $id");
    if (mysqli_errno($conn)){
        die('can not connect db');
    }
    $arr = mysqli_fetch_assoc($res);
}else{
    die('id not define');
}
?>

<form action="editnews_sever.php" method="get">

    <input type="text" style="display: none" name="id" class="input" value="<?php echo $arr['id'];?>">
    <div class="row">
        <div class="col-sm-3 textc"><h3>新闻标题</h3></div>
        <div class="col-sm-9 mar-10"><input type="text" name="news-title" class="input" value="<?php echo $arr['news-title'];?>"></div>
    </div>
    <div class="row">
        <div class="col-sm-3 textc"><h3>新闻类别</h3></div>
        <div class="col-sm-9 mar-10">
            <select size="1" name="category">
                <option value="<?php echo $arr['category'];?>"><?php echo $arr['category'];?></option>
                <option value="">请选择...</option>
                <option value="推荐">推荐</option>
                <option value="百家">百家</option>
                <option value="本地">本地</option>
                <option value="娱乐">娱乐</option>
                <option value="社会">社会</option>
            </select>
        </div>
        <div class="row">
            <div class="col-sm-3 textc"><h3>新闻图片</h3></div>
            <div class="col-sm-9 mar-10"><input type="text" name="img" class="input" value="<?php echo $arr['news-img'];?>">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3 textc"><h3>新闻内容</h3></div>
            <div class="col-sm-9 mar-10"><textarea name="content"> <?php echo $arr['news-content'];?></textarea></div>
        </div>
        <div class="col-sm-12" style="text-align: center">
            <input type="submit" value="提交" class="btn btn-success btn-primar ">
            <input type="reset" value="重置" class="btn btn-warning">
        </div>
</form>
</body>
</html>