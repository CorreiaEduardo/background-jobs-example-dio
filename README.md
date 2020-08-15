<div align="center">
    <h1 align="center">background-jobs-example-dio</h1>
    <h4 align="center">
      Background jobs example project using redis, bull, express and typescript.
    </h4>
  <img alt="typescript" src="https://img.shields.io/badge/%E2%9D%A4-typescript-success">

  <img alt="npm version" src="https://img.shields.io/badge/npm-%3E=6.14.5-informational">
  
  <img alt="node version" src="https://img.shields.io/badge/node-%3E=12.18.2-informational">

  <img alt="yarn version" src="https://img.shields.io/badge/yarn-%3E=1.22.4-informational">
  
  <a href="https://github.com/CorreiaEduardo/background-jobs-example-dio/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/CorreiaEduardo/background-jobs-example-dio">
  </a>
  
  <a href="https://github.com/CorreiaEduardo/background-jobs-example-dio/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/CorreiaEduardo/background-jobs-example-dio">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-critical">
</div>


### 💻 O Projeto
<hr/>
Esse projeto contém uma api node escrita em typescript que serve de exemplo de utilização do redis em conjunto com o bull para a criação e gerenciamento de background jobs.

### 🚨 Requisitos
<hr/>

- Redis
- Um servidor SMTP/Sistema de entrega de e-mails

### 🚀 Primeiros passos (ambiente de desenvolvimento)
<hr/>

1.  **Instalando dependências do projeto**

    Para executar o projeto, primeiro é necessário instalar suas dependências, para isso, certifique-se de ter instalado na sua máquina o `npm`, `node` e o `yarn`. Recomenda-se utilizar as versões 6.14.5, 12.18.2 e 1.22.4, respectivamente. Com essas ferramentas instaladas, abra um terminal na pasta raiz do projeto, e execute o comando:

    ```sh
    yarn
    ```


2.  **Configurando variáveis de ambiente do projeto**

    Antes de executar o projeto, também é preciso configurar as variáveis de ambiente. Primeiro localize o arquivo `.env.example` na raiz do projeto, depois faça uma cópia desse arquivo e nomeie de `.env`. Nesse arquivo ficarão algumas configurações escritas numa sintaxe de chave-valor que serão lidas pela aplicação para executar. Após copiar o arquivo você deve preenchê-lo com informações pertinentes ao seu ambiente de execução.



3.  **Executando o projeto**

    Após instalar todas as dependências e configurar as variáveis no arquivo `.env` como explicado nos passos anteriores, você pode rodar o projeto na sua máquina, basta executar os seguintes comandos:

    ```sh
    yarn start:dev
    ```
    **&&**
    ```sh
    yarn start:queue
    ```
  
    Após o node inicializar os servidores, o serviço ficará disponível na url `http://localhost:<NODE_PORT>`. Note que a porta da aplicação deve constar no seu arquivo .env.