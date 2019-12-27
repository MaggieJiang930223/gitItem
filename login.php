<?php
header('content-type:text/html;charset=utf8');

$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

$connect = mysqli_connect('localhost','root','','test',3306);
if(mysqli_connect_error()){
    die('数据库连接错误');
}
// echo '数据库连接成功';
$sql = "SELECT username FROM userdata WHERE username='$username' AND password='$password'";
$result = mysqli_query($connect,$sql);

$rows = mysqli_num_rows($result);

if($rows>0){
    // setcookie('username',$username,time(+24*60*60))
    // echo '恭喜'.$username.'登录成功';
    echo 1;
}else{
    echo 0;
    // echo '登录失败，用户名和密码错误';
}

?>