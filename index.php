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
    <script>
        document.getElementById('TheHead').className="headIndex"
    </script>
    <div class="indexMain">
        <div class="aboveCarousel">
            <span><a href="">Seja Um Sócio</a></span>
            <span><a href="">História</a></span>
            <span><a href="">Eventos</a></span>
            <span><a href="">Galeria de Imagens</a></span>
            <span><a href="">Notícias</a></span>
        </div>
    </div>
    <img src="teste.png" width="100%" class="carrosel_placeholder"><br>
    <img src="seguralugar.png" width="100%"><br>
    <div class="bandeira">
        <div class="um">&nbsp;</div>
        <div class="dois">&nbsp;</div>
        <div class="tres">&nbsp;</div>
    </div>
    <div class="resumo">
        <table>
        <p>Anima: palavra em Italiano que significa “Alma”. E não por acaso o grupo tem esse nome. De alma e coração, os integrantes se doam para manter vivo o folclore como um todo, mas especialmente dessa cultura tão admirada pelo mundo: a cultura italiana.</p>

        <p> O Gruppo Anima, surgiu no ano de 1991. Oriundo do círculo ítalo-brasileiro Laços d’Oro, da cidade de Guarapuava, Estado do Paraná. O círculo foi criado em 1985  por descendentes de italianos residentes em Guarapuava, com o objetivo de manter viva as tradições italianas no nosso município através do canto e culinária. Porém, faltava uma peça fundamental: a dança. E a partir daí, começa a história do que se tornou o grupo como hoje é.</p>
        </table>
    </div>
    <div class="bandeira">
        <div class="um">&nbsp;</div>
        <div class="dois">&nbsp;</div>
        <div class="tres">&nbsp;</div>
    </div>
    <?php
        include __DIR__ . '\snippets\footer.html'
    ?>
</body>
</html>