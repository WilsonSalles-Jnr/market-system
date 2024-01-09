# Market System
Market System é um projeto elaborado para fins de estudos das bibliotecas do NextJS e Mantine, este projeto está utilizando o template do Mantine+NextJS.
Este projeto precisa ter as seguintes funcionalidades:
- Dashboard
  - Trará pequenos relatórios de quais itens são mais vendidos, categoria, média de consumo, entre outros gráficos que podem ser aplicados
- Market
  - Sua funcionalidade principal é executar as compras do cliente
  - Exibir preço unitário ou por kg
  - Listar produtos cadastrados (ao passar o mesmo produto, somar a quantidade anterior + atual)
  - Finalizar compra exibe forma de pagamento
- Stock
  - Esta tela terá como funcionalidade cadastrar novos produtos
  - Terá uma aba de categorias para cadastrar nova categoria
  - Listará todos os itens
- Configuration
  - Tela para definir se o código que será utilizado será o código de barras ou código interno

## Bibliotecas

- [Next.js](https://nextjs.org/)
- [Mantine](https://mantine.dev/)
- A instalar: [Tabler Icon](https://tabler.io/docs/icons/react)

## Como iniciar

### Requisitos

node versão 18.19.0 +
Instale o node na versão mais recente. ([Node](https://nodejs.org/en/download))

yarn versão 4.0.1
Abra o powershell como administrador e utilize este seguinte comando na raiz:
```bash
npm install --global yarn
```

### Iniciando o projeto

No prompt de comandos, faça a instalação dos pacotes do projeto utilizando o seguinte comando 
```bash
yarn install
```

Após os pacotes serem instalados, execute a aplicação utilizando o seguinte comando
```bash
yarn run dev
```

### Estrutura

Este projeto está utilizando a estruturação de nextjs utilizando a pasta `app`, na pasta `app` do projeto temos o arquivo `page.tsx` que é a rota principal (`/`), na mesma pasta, temos outra pasta com o nome `app` com outras duas pastas, a `market` e `dashboard`, a subpasta `app` será utilizado para rotas após o login.

A pasta `components` está reservada para componentização, para novos componentes, utilizar o nome da rota + NomeDoComponente para facilitar a navegação, exemplo: `market/ItemList`, neste exemplo é possível identificar que este componente é encontrado na pagina de market e é referente a listagem de itens da compra. Terá momentos que será necessário criar componentes para o componente, neste caso, segue a mesma regra do exemplo anterior, só que inserindo o componente dentro da pasta do componente pai, exemplo: `market/ItemList/PurchaseTotal`, neste exemplo, é possível identificar que possui um componente de total dentro do componente `ItemList` na rota `market`
