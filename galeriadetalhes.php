<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar Galeria</title>
    <link rel="stylesheet" href="styles.css">
    <script src="sidebar.js" defer></script>
</head>
<body>
    <div class="overlay" id="overlay" onclick="closeSidebar()"></div>
    <?php
        include __DIR__ . '\snippets\header.html'
    ?>
    <main>
        <div class="gallery">
        <?php
                $id = $_GET['id'];
                $con = mysqli_connect("localhost", "root", "", "projeto_final");

                $eventos = mysqli_query($con, "SELECT id_evento, nome, DATE_FORMAT(inicio, '%d/%m/%Y') AS inicio, descricao, local_evento FROM evento WHERE id_evento = $id");

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

                    while($foto = mysqli_fetch_assoc($fotos)){

                    echo "
                    <div class='imagecontainer2'>
                        <img src='". $foto['conteudos'] . "' alt='Avatar' class='image2'>
                    </div>
                    ";
                    }
                }

                mysqli_close($con);

                ?>
        </div>
    </main>
</body>
</html>