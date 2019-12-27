<?php

header('content-type:text/html;charset=utf8');

$username = $_REQUEST['username'];
$sex = $_REQUEST['sex'];
$age = $_REQUEST['age'];
$password = $_REQUEST['password'];
$confirmpassword = $_REQUEST['confirmpassword'];
$telnum = $_REQUEST['telnum'];
$qqnum = $_REQUEST['qqnum'];
$email = $_REQUEST['email'];
$postcode = $_REQUEST['postcode'];
$idcard = $_REQUEST['idcard'];

$connect = mysqli_connect('localhost','root','','test',3306);
if(mysqli_connect_error()){
    die('数据库连接错误');
}
// echo '数据库连接成功';
$sql ="INSERT INTO userdata (username,sex,age,password,confirmpassword,telnum,qqnum,email,postcode,idcard) VALUES ('$username','$sex','$age','$password','$confirmpassword','$telnum','$qqnum','$email','$postcode','$idcard')";
$result = mysqli_query($connect,$sql);
if($result){
    echo 1;
}else{
    echo 0;
}


?>