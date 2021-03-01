<?php
include_once ("conexao.php");

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$cpf = filter_input(INPUT_POST, 'cpf', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
$cep = filter_input(INPUT_POST, 'cep', FILTER_SANITIZE_STRING);
$endereco = filter_input(INPUT_POST, 'endereco', FILTER_SANITIZE_STRING);

$result = "INSERT INTO cadastro (nome, cpf, email, telefone, cep, endereco, created) 
VALUES ('$nome', $cpf, '$email', '$telefone', '$cep', '$endereco', NOW())";


if (mysqli_query($conn, $result)) {
     header("Location: index.html");
}else {
     echo "Error: " . $result . "<br>" . mysqli_error($conn);
}

