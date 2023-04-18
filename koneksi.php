<?php
$host = "localhost";
$user="root";
$pass="";
$debe="healthyricefields";

$db=new mysqli($host,$user,$pass,$debe)
or die($db->error);
// $conn = new mysqlsi("localhost","root","","healthyricefields");

// $result = mysqli_query($conn, SELECT * FROM tb_user);
//  var_dump($result);
?>  

<?php
    include 'login.php';
    $sql = mysqli_query($conn, "SELECT * FROM tb_user ORDER BY id_user ASC")
        or die(mysqli_error($conn));
    $no=0;
    while($data=mysqli_fetch_array($sql)){
        $no++;
        $id=$data['id_user'];
        // tambahkan kode program untuk menampilkan data
    }
?>