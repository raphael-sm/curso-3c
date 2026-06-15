<?php

$con = mysqli_connect("localhost", "root", "", "projeto_final");

$id_evento = $_POST["id_evento"];

foreach ($_FILES["images"]["tmp_name"] as $i => $tmp) {

    $nome = $_FILES["images"]["name"][$i];

    move_uploaded_file($tmp, "uploads/" . $nome);

    $caminho = "uploads/" . $nome;

    mysqli_query(
        $con,
        "INSERT INTO foto (conteudos, id_evento)
         VALUES ('$caminho', '$id_evento')"
    );
}

echo "Fotos enviadas!";
?>