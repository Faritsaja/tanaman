<?php
$host = "localhost";
$user="root";
$pass="";
$debe="healthyricefields";

$db=new mysqli($host,$user,$pass,$debe)
or die($db->error);
// $conn = new mysqlsi("localhost","root","","healthyricefields");

// $result = mysqli_query($conn, SELECT * FROM tb_parameter);
//  var_dump($result);
?>  

<?php
    include 'konek.php';
    $sql = mysqli_query($conn, "SELECT * FROM tb_parameter ORDER BY id_parameter ASC")
        or die(mysqli_error($conn));
    $no=0;
    while($data=mysqli_fetch_array($sql)){
        $no++;
        $id=$data['id_parameter'];
        // tambahkan kode program untuk menampilkan data
    }
?>