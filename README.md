# Around Express (PT-BR)

Este repositório contém o código-fonte de uma aplicação Express que oferece uma API para gerenciar informações sobre cartões e usuários. A aplicação é integrada a uma base de dados MongoDB e usa arquivos JSON temporários para emular a integração com o banco de dados.

## Funcionalidades

A API oferece as seguintes funcionalidades:

### Cartões

- **Listar Cartões**: Retorna uma lista de todos os cartões cadastrados.
- **Criar Cartão**: Cria um novo cartão com base nas informações fornecidas.
- **Excluir Cartão**: Remove um cartão com base em seu ID, desde que pertença ao usuário autenticado.
- **Adicionar Like**: Adiciona o ID do usuário autenticado à lista de likes de um cartão.
- **Dislike**: Remove o ID do usuário autenticado da lista de likes de um cartão.

### Usuários

- **Listar Usuários**: Retorna uma lista de todos os usuários cadastrados.
- **Buscar Usuário por ID**: Busca um usuário pelo seu ID.
- **Criar Usuário**: Cria um novo usuário com base nas informações fornecidas.
- **Alterar Perfil**: Atualiza o nome e a descrição do perfil de um usuário.
- **Alterar Avatar**: Atualiza o avatar do usuário.

## Instalação

Para executar localmente, siga os passos abaixo:

1. Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.

2. Clone este repositório:

git clone https://github.com/izaqueIsrael/around-express_ptbr.git
cd around-express_ptbr


3. Instale as dependências:

npm install


4. Defina as variáveis de ambiente necessárias:

   - `PORT`: Porta na qual o servidor será executado (padrão: 3000).
   - `DATABASE_URL`: URL de conexão com o banco de dados MongoDB (padrão: mongodb://127.0.0.1:27017/aroundb).

5. Inicie o servidor:

npm start 


O servidor será executado na porta especificada, e a API estará disponível em http://localhost:3000.

## Endpoints da API

Abaixo estão os principais endpoints da API:

### Cartões

- `GET /cards`: Retorna a lista de todos os cartões.
- `POST /cards`: Cria um novo cartão.
- `DELETE /cards/:cardId`: Remove um cartão com base em seu ID.
- `PUT /cards/:cardId/likes`: Adiciona o like do usuário autenticado a um cartão.
- `DELETE /cards/:cardId/likes`: Remove o like do usuário autenticado de um cartão.

### Usuários

- `GET /users`: Retorna a lista de todos os usuários.
- `GET /users/:userId`: Retorna as informações de um usuário com base em seu ID.
- `POST /users`: Cria um novo usuário.
- `PATCH /users/me`: Atualiza o perfil do usuário autenticado.
- `PATCH /users/me/avatar`: Atualiza o avatar do usuário autenticado.

## Observações

- Para autenticação e identificação do usuário, um middleware foi utilizado para adicionar o ID do usuário (hardcoded neste exemplo) à requisição.
- O banco de dados MongoDB é acessado usando a biblioteca Mongoose.
- O servidor está configurado para utilizar o pacote `nodemon` durante o desenvolvimento para reiniciar automaticamente após alterações no código.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença ISC - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

## Contato

Você pode me encontrar no GitHub: [izaqueIsrael](https://github.com/izaqueIsrael).

---

**Nota**: Este é apenas um exemplo de arquivo README em formato Markdown para o código fornecido. É importante atualizar e personalizar o README de acordo com as necessidades e especificidades do projeto real.



