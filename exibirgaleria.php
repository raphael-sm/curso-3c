<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar Galeria</title>
    <link rel="stylesheet" href="styles.css">
    <script src="sidebar.js" defer></script>
</head>
<body>
    <?php
        include __DIR__ . '/snippets/header.html';
        include __DIR__ . '/snippets/sidebar.html';
    ?>
    <main>
        <div class="gridgallery">
        <?php

                $con = mysqli_connect("localhost", "root", "", "projeto_final");

                $eventos = mysqli_query($con, "SELECT id_evento, nome, DATE_FORMAT(inicio, '%d/%m/%Y') AS inicio, descricao, local_evento FROM evento");

                while ($evento = mysqli_fetch_assoc($eventos)) {
                    echo "<div class='gridgallerycell'>";
                    echo "<h1>" . $evento["nome"] . "</h1>";
                    echo "<h3>" . $evento["inicio"] . "</h3>";
                    echo "<p style='display: flex; align-content: center'> <img src='mappin.png' style='height: 1em'>" . $evento["local_evento"] . "</p>";

                    echo "<p>" . $evento["descricao"] . "</p>";

                    $id = $evento["id_evento"];

                    $fotos = mysqli_query(
                        $con,
                        "SELECT * FROM foto WHERE id_evento = $id"
                    );

                    $foto = mysqli_fetch_assoc($fotos);

                    echo "
                    <a href='galeriadetalhes.php?id=" . $id . "' class='image-link'>
                        <div class='imagecontainer2'>
                            <img src='". $foto['conteudos'] . "' alt='Avatar' class='image2'>
                            <div class='overlay2'>
                                <div class='text2'>Visualizar Galeria Completa</div>
                            </div>
                        </div>
                    </a>
                    ";
                    
                    echo "</div>";
                }

                mysqli_close($con);

                ?>
        </div>
    </main>
</body>
</html>