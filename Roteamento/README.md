## ✨ Roteamento em Angular ✨

---

### É o processo de navegação entre diferentes componentes da aplicação. 

Isso é feito por meio do mapeamento de URLs para componentes específicos, permitindo que o usuário navegue pela aplicação sem precisar recarregar a página inteira. 
O Angular possui um módulo de roteamento que pode ser importado em um aplicativo Angular, esse módulo fornece um serviço de roteamento e diretivas que podem ser usadas para definir as rotas da aplicação.

Ao executar o comando `npm i @angular/router`, será instalado o pacote mais recente de roteamento oficial do Angular. O prefixo "@angular/" indica que o pacote é mantido pela equipe do Angular e faz parte do ecossistema oficial da biblioteca.

---

📍**Comando cmd para a criação de um módulo**

O comando para criar um novo módulo em Angular com as flags "--flat" e "--module" é:

        ng generate module nome-do-modulo --flat --module=nome-do-modulo-pai

• "--flat": essa flag instrui o Angular CLI a criar o novo módulo diretamente no diretório raiz do projeto, sem criar uma pasta separada com o nome do módulo. Isso é útil para módulos pequenos ou específicos que não precisam de uma pasta separada.

• "--module=nome-do-modulo-pai": essa flag especifica o nome do módulo pai onde o novo módulo será declarado. Ao definir o nome do módulo pai, o Angular CLI adicionará automaticamente uma importação do novo módulo no módulo pai. Se o módulo pai ainda não existir, o Angular CLI criará automaticamente um novo módulo com esse nome.

---

📍**Parâmetros de Rota e Parâmetros de Consulta**

Em uma aplicação, é comum passar informações entre as diferentes páginas ou componentes da aplicação usando parâmetros. Existem dois tipos de parâmetros que podem ser usados em uma rota: parâmetros de rota e parâmetros de consulta.

• Os parâmetros de rota são valores que são passados ​​na URL da rota, geralmente representados por um nome ou um identificador. Por exemplo, se você tiver uma rota para exibir detalhes de um produto, poderá definir um parâmetro de rota para identificar o produto a ser exibido. A definição de rota é:

        { path: 'produtos/:id', component: DetalhesDoProdutoComponent }

Nesse exemplo, :id é o parâmetro de rota, que pode ser substituído por um valor numérico para exibir os detalhes do produto com esse ID.

• Os parâmetros de consulta são valores adicionais que podem ser passados ​​na URL após o ponto de interrogação (?). Eles são usados ​​para filtrar ou ordenar resultados ou para passar informações adicionais para uma página ou componente. Por exemplo, se você tiver uma lista de produtos e quiser permitir que o usuário filtre os produtos por categoria, poderá usar um parâmetro de consulta para isso. A URL pode ser semelhante a:

        /produtos?categoria=eletronicos

Nesse exemplo, categoria é o parâmetro de consulta, e seu valor é 'eletronicos'. Esse valor pode ser usado para filtrar os produtos e exibir apenas os produtos da categoria eletrônicos.

Em resumo, os parâmetros de rota são valores que são passados ​​na URL da rota e são usados ​​para identificar ou localizar um recurso específico, enquanto os parâmetros de consulta são usados ​​para passar informações adicionais para uma página ou componente.

---

📍**Lazy Loading**

Lazy loading (ou carregamento preguiçoso) é uma técnica de otimização de desempenho usada em programação e design de páginas da web para melhorar a velocidade de carregamento de uma página.

O conceito básico do lazy loading é carregar apenas o conteúdo essencial da página no momento do carregamento inicial e atrasar o carregamento de elementos menos importantes até que sejam necessários. Isso é feito para evitar o carregamento de recursos desnecessários, reduzir o tempo de carregamento da página e economizar largura de banda.O lazy loading é frequentemente usado em páginas da web que contêm muitas imagens, vídeos e outros recursos pesados que podem tornar o tempo de carregamento da página muito longo.

---

📍**Route Guards (Rota de Guarda)**

Os route guards são classes que implementam a interface CanActivate e são usados para controlar o acesso a rotas específicas na aplicação. Eles são usados para proteger rotas e garantir que apenas usuários autenticados e autorizados possam acessar determinadas partes da aplicação.

Para criar um route guard em uma aplicação Angular usando o Angular CLI, siga os seguintes passos:

        - Abra o terminal ou prompt de comando e navegue até o diretório do projeto em que deseja criar o route guard.

        - Use o comando ´ng generate guard´ seguido pelo nome do route guard que deseja criar. O Angular CLI criará um novo arquivo chamado auth.guard.ts no diretório app da sua aplicação, que será a classe do route guard.

Abra o arquivo auth.guard.ts e implemente a lógica de autenticação e autorização que você deseja. Por exemplo, se você deseja verificar se o usuário está autenticado e tem permissão para acessar uma rota, você pode usar o serviço de autenticação da sua aplicação para fazer a verificação.

🌼
