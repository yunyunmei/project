<?php
require_once 'functions.php'
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0"/>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/home-style.css">
    <link rel="stylesheet" href="../css/dashboard.css">
</head>
<body>
<!--头部-->
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">后台管理系统</a>
        </div>
        <!--连接-->
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <!--<a href="home.html" class="active">-->
                <?php
                if (isset($_GET['name']) && $_GET['name']) {
                    echo $_GET['name'];
                }
                ?>
                <!--</a>-->
                <a href="../index.html" class="active">注销</a>
                <a href="home.html" class="active">帮助</a>
            </ul>
        </div>

    </div>
</nav>
<!--左侧导航-->
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
            <ul class="nav nav-sidebar">
                <li class="active">
                    <a href="home.html" title="频道管理">推荐</a>
                </li>
                <li>
                    <a href="home.html" title="会员管理">百家</a>
                </li>
                <li>
                    <a href="home.html" title="留言管理 ">本地</a>
                </li>
                <li>
                    <a href="home.html" title="一键更新">娱乐</a>
                </li>
                <li>
                    <a href="home.html" title="系统管理">社会</a>
                </li>
            </ul>
        </div>
        <!--右侧主体内容-->
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <div class="infor">
                <a href="addnews.html">添加用户</a>
            </div>
            <div class="txt">
                <table class="table table-striped">
                    <tr>
                        <th>id</th>
                        <th>新闻标题</th>
                        <th>类别</th>
                        <th>时间</th>
                        <th>修改</th>
                    </tr>
                    <?php
                    //链接数据库
                    $conn = conndetDb();
                    mysqli_query($conn, "SET names UTF8");
                    $result = mysqli_query($conn, "SELECT * FROM news ORDER BY id DESC ");
                    $dataCount = mysqli_num_rows($result);
                    for ($i = 0; $i < $dataCount; $i++) {
                        $result_arr = mysqli_fetch_assoc($result);
                        $id = $result_arr['id'];
                        $newsTitle = $result_arr['news-title'];
                        $category = $result_arr['category'];
                        $newsImg = $result_arr['news-img'];
                        $nwesContent = $result_arr['news-content'];
                        $time = $result_arr['time'];
                        echo "<tr><td>$id</td><td>$newsTitle</td><td>$category</td><td>$time</td><td><a href='editnews.php?id=$id'>修改</a> <a href='deletnews.php?id=$id'>删除</a></td></tr>";
                    }
                    ?>
                </table>
            </div>
        </div>
    </div>
</div>
</div>
</body>
</html>


</body>
</html>