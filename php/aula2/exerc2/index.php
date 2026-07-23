<?php
    class Produto {
        public string $nome;
        public float $preco;
        public string $categoria;

        public function exibirResumo(){
            echo "O produto ". $this->nome . " pertence à categoria " .$this->categoria . ", e custa R$".$this->preco;
        }
    }
    $produto = new Produto();
    $produto->nome = "PC Gamer";
    $produto->preco = 9499.99;
    $produto->categoria = "Informática";
    $produto->exibirResumo();
