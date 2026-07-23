<?php
    class Aluno{
        public string $nome;
        public float $nota1;
        public float $nota2;

        public function calcularMedia(){
            return ($this->nota1 + $this->nota2)/2;
        }

        public function verificarSituacao(){
            $media = $this->calcularMedia();
            if($media>=7){
                return "Aprovado(a)";
            } else if ($media>=5) {
                return "de Recuperação";
            } else {
                return "Reprovado(a)";
            }
        }

        public function __construct($n, $nt1, $nt2)
        {
            $this->nome = $n;
            $this->nota1 = $nt1;
            $this->nota2 = $nt2;
        }
    }

    $aluno = new Aluno("Eduardo", 7.0, 6.1);
    echo "O(A) Aluno(a) " . $aluno->nome . " Está " . $aluno->verificarSituacao();
?>