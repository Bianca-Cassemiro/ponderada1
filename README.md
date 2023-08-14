# Atividade ponderada 1
## Informações do aluno:
Bianca Cassemiro Lima - Engenharia da Computação

## Descrição
O projeto é uma aplicação web desenvolvida em HTML e Flask, empacotada em um contêiner Docker acessível na porta 80. O arquivo principal é o "app.py" no qual temos nosso servidor em flask. Já o arquivo "index html" que está dentro da pasta templates, é o currículo por si só, ele utliza o "styles.css" para fazer a estilização. 
Por fim, temos o dockerfile que configura como a imagem será construída

DockerHub:
https://hub.docker.com/repository/docker/bialimac/minha-imagem/general

## Como utilizar?
1) Clone este repositório
2) Build a imagem utilizando: docker build -t bialimac/minha-imagem:latest
3) Rode o o container utilizando: docker run bialimac/minha-imagem
4) Utilize "localhost:80" para visualizar a aplicação.
