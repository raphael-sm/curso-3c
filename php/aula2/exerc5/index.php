<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .card {
            background-color: yellow;
            border: 4px red solid;
            text-align: center;
            width: 200px;
        }
    </style>
</head>
<body>
    <?php
        class Livro {
            public string $livro;
            public string $autor;
            public int $ano;
            public string $descricao;

            public function gerarCard(){
                include './card.php';
            }

            public function __construct($l, $a, $an, $desc)
            {
                $this->livro = $l;
                $this->autor = $a;
                $this->ano = $an;
                $this->descricao = $desc;
            }
        }
        $livro = new Livro("Crônicas de Nárnia", "CS Lewis", "1950", "Uma história legal.");
        $livro->gerarCard()
    ?>
</body>
</html>