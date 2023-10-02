# DESAFIO SIL SISTEMAS

1.0 Este projeto tem como objetivo cumprir requisitos de desafio para vaga da Sil Sistemas.

2.0 O projeto tem como finalidade descobrir conhecimentos de candidatos, como TypeScript, Requisições para API, CSS e outros.

3.0 As tecnologias utilizadas são:
 - Vite para mais velocidade na hora de interpretação do código e também porque traz um projeto do zero bem montado;
 - React para melhor manuntenção e aproveitamento de código;
 - TypeScript para tipagem e melhor leitura e entendimento do código;
 - Axios para requisições a APIs externas;
 - Miragejs para fazer a parte de uma api externa, sem a necessidade de ficar testando a api externa ou mesmo se não tiver ela pronta;

4.0 Como rodar o projeto:
Clonar o projeto com: 
```
git clone git@github.com:dornellesfr/desafio-sil-sistemas.git
```
Dentro da pasta do projeto executar:
```
pnpm run dev
```

OBS: Para o botão de reload aparecer, só consegui mudando o tempo de execução dentro do arquiv index.ts da pasta miragejs dentro de src.
Portanto é necessário mudar o parâmetro 'TIMING' para um valor maior que 4000 caso queira ver a parte de reload.

abrir o navegador no link http://localhost:5173/