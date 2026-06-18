CREATE DATABASE projeto_final;
USE projeto_final;

CREATE TABLE evento(
    id_evento INT PRIMARY KEY AUTO_INCREMENT,
    inicio DATETIME,
    nome VARCHAR(200),
    descricao VARCHAR(1000),
    local_evento VARCHAR(400),
)

CREATE TABLE foto(
    id_foto INT PRIMARY KEY AUTO_INCREMENT,
    conteudos VARCHAR(255),
    id_evento INT,
    FOREIGN KEY (id_evento) REFERENCES evento(id_evento)
)