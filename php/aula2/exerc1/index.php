<?php
    class Filme {
        public string $titulo;
        public string $genero;
        public int $ano;
        public string $diretor;
    }
    $filme = new Filme();
    $filme->titulo = "Interestelar";
    $filme->genero = "Ficção Científica";
    $filme->ano = 2014;
    $filme->diretor = "Christopher Nolan";
    echo "Título: $filme->titulo<br> Gênero: $filme->genero<br> Ano: $filme->ano<br> Diretor: $filme->diretor<br>";
    echo "<br>";
    $filme2 = new Filme();
    $filme2->titulo = "Devoradores de Estrelas";
    $filme2->genero = "Ficção Científica";
    $filme2->ano = 2026;
    $filme2->diretor = "Phil Lord";
    echo "Título: $filme2->titulo<br> Gênero: $filme2->genero<br> Ano: $filme2->ano<br> Diretor: $filme2->diretor<br>";
?>