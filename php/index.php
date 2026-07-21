<link rel='stylesheet' href='styles.css'>
<?php
    class Aluno {
        public $nome;
        public $idade;
        public $curso;
        public $cidade;

        public function apresentar(){
            echo "Olá meu nome é " . $this -> nome . "<br>";
            echo "Tenho ". $this -> idade . " anos <br>";
            echo "Estudo " . $this -> curso . "<br>";
            echo "Na cidade de " . $this -> cidade . "<br>";
        }

        public function __construct($nome, $idade, $curso, $cidade)
        {
            $this->nome = $nome;
            $this->idade = $idade;
            $this->curso = $curso;
            $this->cidade = $cidade;
        }

        public function  checkAge() {
            if($this->idade <= 0) {
                echo "Ele(a) não nasceu ainda.";
            } else if ($this->idade >= 122){
                echo "Ele(a) é um fantasma.";
            } else if($this->idade >= 18) {
                echo "Ele(a) é maior de idade";
            } else {
                echo "Ele(a) é menor de idade";
            }
        }

        public function generateCard(){
            echo "<div class='card'>
                    <h1>$this->nome</h1>
                    <h2>$this->idade</h2>
                    <h3>$this->curso</h3>
                    <p>$this->cidade</p>
                </div>";
        }
    }

    $aluno = new Aluno($_POST['nome'], $_POST['idade'], $_POST['curso'], $_POST['cidade']);
    $aluno->generateCard();
?>