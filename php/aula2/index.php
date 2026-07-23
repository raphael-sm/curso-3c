<?php
    class Filme {
        public $titulo;
        public $genero;
        public $ano;
        public $diretor;

        public function Exibir(){
            echo "Título: ".$this->titulo."<br>";
            echo "Gênero: ".$this->genero."<br>";
            echo "Ano De Lançamento: ".$this->ano."<br>";
            echo "Diretor: ".$this->diretor."<br>";
        }

        public function __construct($titulo, $genero, $ano, $diretor)
        {
            $this->titulo = $titulo;
            $this->genero = $genero;
            $this->ano = $ano;
            $this->diretor = $diretor;
        }
    }
    $filme = new Filme("Interestelar", "Ficção Científica", 2014, "Christopher Nolan");
    $filme->Exibir();
    echo "<br>";
    $filme2 = new Filme("Devoradores de Estrelas", "Ficção Científica", 2026, "Phil Lord");
    $filme2->Exibir();
?>