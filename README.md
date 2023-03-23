# Hands on - Docker: Loja Virtual

Este repositório contém a aplicação e os arquivos utilizados no Hands On **Navegando com Docker: Um guia para marinheiros de primeira viagem**. A aplicação é uma loja virtual extremamente simpless. Nosso objetivo é pura e simplesmente fazer nossa aplicação rodar em um container. Sendo assim, será necessário criar um **Dockerfile** para buildar a imagem da aplicação e um **docker-compose** para subir o container para execução.

## Funcionalidades e requisitos

O projeto possui as opções de adicionar e remover um produto no carrinho de compras, e ter o valor total dos produtos como retorno. O frontend foi feito todo em ReactJS, mas os dados estão mockados, a aplicação não possui backend implementado. Precisaremos, além das dependências e de toda a configuração do React, um servidor como o Nginx para nossa aplicação funcionar como esperamos.

## Próximos passos

- Criação de serviços (Redis, banco de dados, etc.) para uma aplicação com docker-compose;
- Estudo da Orquestração de containers (Kubernetes, Docker Swarm);
- Estudo da Cultura DevOps e computação em nuvem;
- Um entendimento sobre [12-factor app](https://12factor.net/pt_br/) é sempre importante.

## Materiais de estudo

- [Repositório base para este hands on](https://github.com/atmosmps/dockerized-react-app);
- [Documentação do Docker](https://docs.docker.com/);
- Treinamentos oferecidos pela [Linuxtips](https://www.linuxtips.io/), como o [Descomplicando o Docker](https://livro.descomplicandodocker.com.br/);
- Livros do O’Reilly;
- [Techworld with Nana](https://www.techworld-with-nana.com/); 
- Canal do [Fabrício Veronez](https://www.youtube.com/c/fabricioveronez);
- Cursos da [4linux](https://escoladanuvem.org/);
- [Escola da Nuvem](https://escoladanuvem.org/);
- [Roadmap DevOps Engineer/SRE](https://roadmap.sh/devops).
