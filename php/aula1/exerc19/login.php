<?php
    $nome = $_POST['nome'];
    if($nome){
        echo "Olá, ".$nome;
    } else {
        echo "Preencha o nome";
    }
?>