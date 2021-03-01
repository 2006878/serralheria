<?php
$servername = "localhost";
$database = "serralheriaamaral";
$username = "tairone";
$password = "Amaral247";

// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection

if (!$conn) {

    die("Falha na conexão: " . mysqli_connect_error());

}
echo "Sucesso na conexão";
mysqli_close($conn);
?>