<?php
include_once ("conexao.php");

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
$endereco = filter_input(INPUT_POST, 'endereco', FILTER_SANITIZE_STRING);
$descricao = filter_input(INPUT_POST, 'descricao', FILTER_SANITIZE_STRING);

$result = "INSERT INTO orcamento (nome, email, telefone, endereco, descricao, created) 
VALUES ('$nome', '$email', '$telefone', '$endereco', '$descricao', NOW())";


if (mysqli_query($conn, $result)) {
     header("Location: index.html");
}else {
     echo "Error: " . $result . "<br>" . mysqli_error($conn);
}

