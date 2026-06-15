<?php
    $nome = $_POST['nome'];
    $data = $_POST['data'];
    $hora = $_POST['horario'];
    $desc = $_POST['descricao'];
    $datahora = "$data $hora:00";
    $local = $_POST['localevto'];
    $con = mysqli_connect('localhost', 'root','','projeto_final');
    $sql = "INSERT INTO evento(nome,inicio,descricao,local_evento) VALUES ('$nome', '$datahora', '$desc', '$local')";
    $exe = mysqli_query($con, $sql);
    echo "cadastrado";
    mysqli_close($con)
?>