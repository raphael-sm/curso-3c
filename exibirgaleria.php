<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar Galeria</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        .gallery {
            padding: 20px;
        }
        .gallery img {
            margin: 5px;
        }
    </style>
</head>
<body>
    <header class="head">
        <table width="100%">
            <tr>
                <td width="33%" style="text-align: left;">
                    <img src="hamburger.png" class="hambbutton">
                </td>
                <td width="33%">
                    <img src="logoanima.png" class="logoh">
                </td>
                <td width="33%" id="botaoSair">
                    <img src="logout.png" class="logoutbutton">
                    <span>Sair</span>
                </td>
            </tr>
        </table>
    </header>   
    <main>
        <div class="gallery">
        <?php

                $con = mysqli_connect("localhost", "root", "", "projeto_final");

                $eventos = mysqli_query($con, "SELECT id_evento, nome, DATE_FORMAT(inicio, '%d/%m/%Y') AS inicio, descricao, local_evento FROM evento");

                while ($evento = mysqli_fetch_assoc($eventos)) {

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

                    echo "<hr>";
                }

                mysqli_close($con);

                ?>
        </div>
    </main>
</body>
</html>