# Wallet-App 💳

Wallet-App é uma aplicação web de controle de gastos que inclui um conversor de moedas. Através desta aplicação, o usuário pode gerenciar suas despesas, visualizar relatórios detalhados e acompanhar o total de gastos em diferentes moedas.

## Funcionalidades

- **Adicionar, Remover e Editar Gastos**: Gerencie suas despesas de forma intuitiva.
- **Visualização de Gastos**: Acompanhe seus gastos através de uma tabela organizada.
- **Conversão de Moedas**: Veja o total de despesas convertidas para a moeda de sua escolha.

## Desenvolvimento

Neste projeto, foram implementadas as seguintes funcionalidades:

- **Redux Store**: Criação e configuração de uma _store_ Redux para gerenciar o estado global da aplicação.
- **Reducers**: Desenvolvimento de _reducers_ para manipulação de estados no Redux.
- **Actions e Dispatchers**: Criação de _actions_ e _dispatchers_ para acionar mudanças no estado global.
- **Conexão com Componentes React**: Integração do Redux com componentes React para acesso ao estado global.
- **Actions Assíncronas**: Implementação de _actions_ assíncronas para consumo de dados de APIs utilizando Redux.

A aplicação consome dados da API do [AwesomeAPI](https://economia.awesomeapi.com.br/json/all) para realizar a busca de câmbio de moedas.

## Outras Funcionalidades Desenvolvidas

- **Página de Login**: Criação de uma página inicial de login para autenticação do usuário.
- **Header da Página de Carteira**: Implementação de um cabeçalho personalizado para a página de carteira.
- **Formulário de Despesa**: Desenvolvimento de um formulário para adicionar despesas, cujos dados são salvos no estado global.
- **Testes de Cobertura**: Desenvolvimento de testes unitários e de integração, atingindo mais de 60% de cobertura total.
- **Tabela de Gastos**: Criação de uma tabela para exibir gastos com informações detalhadas como descrição, tag, método de pagamento, valor, moeda, câmbio utilizado, valor convertido, e opções para editar ou excluir.

## Tecnologias Utilizadas

  <summary><strong>Linguagens de Programação</strong></summary><br />
  <strong>JavaScript</strong><br />
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js" alt="Linguagens de Programação">
  </a>

  <br /><summary><strong>Marcação</strong></summary><br />
  <strong>HTML</strong><br />
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html" alt="Marcação">
  </a>

  <br /><summary><strong>Estilização</strong></summary><br />
  <strong>CSS</strong><br />
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=css" alt="Estilização">
  </a>

### Bibliotecas e Dependências
- **React**: Framework para criação da interface de usuário.
- **Redux**: Gerenciamento de estado global.
- **React Redux**: Integração do Redux com React.
- **React Router DOM**: Navegação entre páginas.
- **Redux Thunk**: Middleware para ações assíncronas no Redux.
- **React Icons**: Biblioteca de ícones para React.
- **UUID**: Geração de identificadores únicos.

### Ferramentas de Desenvolvimento
- **Testing Libraries**: Ferramentas como Jest e Cypress para testes automatizados.
- **Stylelint**: Ferramenta de linting para CSS.
- **Mocha**: Framework de testes para JavaScript.
- **Mochawesome**: Gerador de relatórios de testes.

## Histórico de Desenvolvimento

Todo o código que eu desenvolvi para este projeto pode ser consultado através dos commits vinculados a este repositório. Cada commit reflete as etapas do desenvolvimento, com detalhes sobre as implementações realizadas. Para acessar o histórico completo e revisar as contribuições, basta navegar pela seção de commits.

## Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/Wallet-App.git
    ```
2. Entre na pasta do repositório que você acabou de clonar:
    ```sh
    cd Wallet-App
    ```
3. Crie uma branch a partir da branch main:
    ```sh
    Exemplo: git checkout -b user-Wallet-App
    ```
4. Instale as dependências:
    ```sh
    Exemplo: npm install
    ```
5. Inicie a aplicação:
    ```sh
    Exemplo: npm start
    ```
