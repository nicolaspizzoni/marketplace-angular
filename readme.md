# Marketplace Angular

### 📂 Descrição do Projeto

Este projeto é uma simulação de um sistema de gestão de produtos que inclui as seguintes funcionalidades:

* **Tela de Login**: Autenticação de usuários.
* **Listagem de Produtos**: Exibição de produtos com opções de filtro por título e status.
* **Tela de Criação de Produto**: Interface para adicionar novos produtos ao catálogo.

Dividido em dois projetos, um frontend em Angular e um backend em Express, que estão localizados no mesmo repositório.

---

### ▶️ Como Executar os Projetos

Para rodar a aplicação, você deve iniciar tanto o servidor do backend quanto o frontend em terminais separados.

#### Backend (Express)

1.  Abra um terminal na pasta `backend-gestao-marketplace`.
2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```
3.  Execute o comando para iniciar o servidor:
    ```bash
    npm run dev
    ```
4.  👉 O servidor estará disponível em `http://localhost:3000`.

#### Frontend (Angular)

1.  Abra um terminal na pasta `frontend-gestao-marketplace`.
2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```
3.  Execute o comando para iniciar a aplicação:
    ```bash
    ng serve
    ```
4.  👉 A aplicação estará disponível em `http://localhost:4200/`.

---

### 🛠️ Instalações Necessárias

Certifique-se de que as seguintes ferramentas estão instaladas em seu ambiente para que os projetos funcionem corretamente:

* **Node.js**: Versão 22.19.0 (LTS).  
* **Angular CLI**: Versão 20.

---

### 💡 Extensões recomendadas do VS Code

Para melhorar a produtividade durante o desenvolvimento, recomenda-se instalar as seguintes extensões no **Visual Studio Code**:

- **Angular Language Service** → Fornece autocompletar, dicas e suporte avançado ao desenvolvimento Angular.  
- **Material Icon Theme** → Adiciona ícones visuais aos arquivos e pastas, facilitando a navegação no projeto.
- **Tailwind CSS IntelliSense** → Autocompletar e validação para classes do Tailwind CSS, tornando o uso mais ágil e confiável.  

---

### 📸 Recursos Adicionais

* A pasta `imagens` na raiz do repositório contém imagens que podem ser usadas para teste ao criar um novo produto.
* O arquivo `insomnia-backend.yaml`, localizado na pasta `backend-gestao-marketplace`, contém a coleção de endpoints que pode ser importada no Insomnia para facilitar os testes da API.

---