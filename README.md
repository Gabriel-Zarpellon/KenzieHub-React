# KenzieHub

## Descrição do projeto

O projeto KenzieHub consiste em uma aplicação onde é possível cadastrar um usuário e realizar o login, tendo acesso assim a uma página onde existem funções para a criação, atualização e exclusão de tecnologias possuídas pelo usuário e seu nível de conhecimento.

As funções desse projeto foram desenvolvidas em React, utilizando Context e estados em seus funcionamentos, que trabalham com a alimentação e consumo da [API KenzieHub](https://github.com/Kenzie-Academy-Brasil-Developers/kenziehub-api). A estilização foi desenvolvida com SASS e proporciona responsividade completa, adaptando-se a diversos tamanhos de tela.

## Implementações do projeto

### Cadastro e Login de usuários
    - Rotas desenvolvidas com React Router Dom;
    - Formulários utilizando React Hook Form;
    - Componentes de páginas Register, Login e Dashboard;
    - Validação de formulários;
    - Funcionalidades de login, logout e registro;
    - Consumo da API https://kenziehub.herokuapp.com com Axios;
    - Serviço de contexto para criação e leitura de perfis de usuário: UserContext.

### Autenticação
    - Rotas de usuário protegidas: apenas acessíveis por usuários logados e autenticados através de TOKEN fornecido na realização do login;
    - Autologin: usuários previamente logados serão direcionados automaticamente à página Dashboard até realizarem o logout.

### Cadastro, leitura, atualização e exclusão de tecnologias
    - Modais de criação e atualização de tecnologias;
    - Componentes de lista e card de tecnologias: Techlist e TechCard;
    - Serviço de contexto para CRUD completo de tecnologias: TechContext;
    - Integração de tecnologias e usuário através de estados.


## Visualizar deploy do [projeto no Vercel](https://kenziehub-react-tawny.vercel.app/)
