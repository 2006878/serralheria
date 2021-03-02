<?php
include_once "conexao.php";

$result_orcamento = "SELECT * FROM orcamento ORDER BY id DESC";
$resultado_orcamento = mysqli_query($conn, $result_orcamento);

if(($resultado_orcamento) AND ($resultado_orcamento->num_rows != 0)){
    ?>
	<table class="table table-striped table-bordered table-hover">
		<thead>
			<tr>
				<th>ID</th>
				<th>Nome</th>
                		<!--th>E-mail</th-->
                		<th>Telefone</th>
                		<th>Endereço</th>
                		<th>Descrição</th>
			</tr>
		</thead>
		<tbody>
			<?php
            while($row_orcamento =mysqli_fetch_assoc($resultado_orcamento)){
                ?>
                <tr>
			<th><?php echo $row_orcamento['id']; ?></th>
			<td><?php echo $row_orcamento['nome']; ?></td>
			<!--td><?php echo $row_orcamento['email']; ?></td-->
                    	<th><?php echo $row_orcamento['telefone']; ?></th>
			<td><?php echo $row_orcamento['endereco']; ?></td>
			<td><?php echo $row_orcamento['descricao']; ?></td>
		</tr>
                <?php
			}?>
		</tbody>
	</table>
<?php
}else{
	echo "<div class='alert alert-danger' role='alert'>Nenhum usuário encontrado!</div>";
}

