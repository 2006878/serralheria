<!doctype html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Lista Orçamentos</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <head>
    <body>
        <div class="container-fluid">
            <h2>Lista de orçamentos</h2>        
            <span id="conteudo"></span>
        </div>  

        <script>
            $(document).ready(function (){
                $.post('listar_orcamento.php', function(retorna){
                    $("#conteudo").html(retorna);
                });
            });
        </script>
    </body>      
</html>
