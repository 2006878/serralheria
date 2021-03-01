<?php
include_once ("conexao.php");

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
$endereco = filter_input(INPUT_POST, 'endereco', FILTER_SANITIZE_STRING);
$descricao = filter_input(INPUT_POST, 'descricao', FILTER_SANITIZE_STRING);

$result = "INSERT INTO orcamento (nome, email, telefone, endereco, descricao, created) VALUES ('$nome', '$email', '$telefone', '$endereco', '$descricao', NOW())";
$resultado_orcamento = mysqli_query($conn, $result);

if (mysqli_insert_id($conn)) {
    header("Location: index.html");
}else{
    header("Location: index.html");
}
?>