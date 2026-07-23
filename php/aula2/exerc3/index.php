<?php
    class Usuario {
        public string $nome;
        public string $email;
        public string $cidade;

        public function __construct($n, $e, $c)
        {
            $this->nome = $n;
            $this->email = $e;
            $this->cidade = $c;
        }
    }

    $user = new Usuario("Ernest Khalimov","ernest.khalimov@hotmail.com","Petropavlovsk-Kamchatskyy");
    echo $user->nome."<br>";
    echo $user->email."<br>";
    echo $user->cidade."<br>";
?>