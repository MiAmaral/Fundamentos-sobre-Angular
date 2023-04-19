## ✨ Projeto desenvolvido para estudo do Angular, promovido pelo programa START da Capgemini e elaborado pela ProWay ✨

---

#### 📒 Angular é um framework criado pelo Google para ajudar desenvolvedores a criar aplicativos web e móveis de maneira mais organizada e eficiente. Como um framework, ele fornece uma série de recursos e ferramentas que tornam o processo de desenvolvimento mais fácil e rápido. Com o Angular, é possível criar aplicativos poderosos e sofisticados que oferecem uma experiência de usuário excepcional. Ele é muito popular entre os desenvolvedores de front-end por ser um framework de fácil utilização e flexibilidade.

---

📍**Angular e o TypeScript**

• TypeScript e Angular estão intimamente relacionados. O uso do TypeScript em Angular traz diversos benefícios, como a verificação de erros em tempo de compilação, o aumento da produtividade e da legibilidade do código, e a possibilidade de utilizar recursos avançados de programação orientada a objetos.

• Além disso, TypeScript é uma linguagem que se integra muito bem com o Angular, permitindo que os desenvolvedores utilizem recursos avançados do framework, como o sistema de injeção de dependências e o sistema de templates. Embora seja possível desenvolver aplicações Angular sem usar TypeScript, é altamente recomendado utilizar a linguagem em projetos Angular, pois ela torna o desenvolvimento mais eficiente e seguro.

>*O que é TypeScript?*

    TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que se baseia na sintaxe da linguagem JavaScript, mas adiciona recursos de tipagem estática opcionais e outros recursos avançados de programação orientada a objetos. Ao contrário do JavaScript, que é uma linguagem interpretada, TypeScript é compilada em JavaScript para ser executada no navegador ou em ambientes de servidor, como o Node.js. Essa linguagem permite que os desenvolvedores escrevam código mais seguro e mais fácil de manter, evitando erros comuns de tipagem e fornecendo recursos avançados de verificação de erros.

---

📍**Angular CLI**

• Angular CLI é uma ferramenta de linha de comando que facilita o desenvolvimento de aplicações Angular. Ele é usado para criar, gerenciar e construir projetos Angular, bem como para gerar componentes, serviços, diretivas e outros elementos de forma automatizada. Através dele, é possível criar um novo projeto Angular com uma estrutura inicial pronta para uso, incluindo a configuração do webpack e do TypeScript.

>*Criando um projeto utilizando Angular CLI*

    -Abra o prompt de comando ou terminal do seu sistema operacional.
    -Navegue até a pasta raiz do seu projeto Angular.
    -Execute o comando **ng generate component nome-do-componente**.
    *O Angular CLI irá criar automaticamente uma nova pasta com o nome do seu componente na pasta src/app. Dentro dessa pasta, serão criados os arquivos necessários para o seu novo componente, incluindo um arquivo TypeScript para a lógica do componente, um arquivo HTML para a interface de usuário e um arquivo CSS para os estilos do componente.
    *Você também pode usar o comando abreviado ng g c nome-do-componente para gerar um novo componente (O resultado será o mesmo que o comando anterior.)

---

📍**As principais estruturas do Angular**

• *Componentes*

São a unidade básica da estrutura do Angular. Eles são blocos de código que encapsulam a lógica e a interface de usuário de uma parte específica da aplicação. Cada componente é representado por uma classe TypeScript decorada com o @Component, que define seu nome, seu template HTML e CSS, suas propriedades de entrada e saída, e outras informações relevantes.

• *Módulos*

São coleções de componentes, serviços e outras funcionalidades relacionadas que trabalham juntos para fornecer uma funcionalidade específica da aplicação. Cada módulo é representado por uma classe TypeScript decorada com o @NgModule, que define quais componentes, serviços e diretivas pertencem a esse módulo, bem como quais módulos são importados e exportados.

• *Serviços*

São classes que fornecem funcionalidades compartilhadas entre vários componentes da aplicação. Eles são geralmente injetados em componentes por meio de sua classe decorada com @Injectable, e fornecem funcionalidades como acesso a dados, gerenciamento de estado, autenticação e autorização, etc.

• *Diretivas*

São elementos que adicionam comportamento a um componente. Elas podem ser estruturais, alterando a estrutura do DOM, ou atributivas, adicionando comportamento a um elemento existente. As diretivas são definidas por meio de uma classe TypeScript decorada com o @Directive.

• *Rotas*

São usadas para navegar entre diferentes componentes da aplicação. Elas são definidas em um arquivo de roteamento e são geralmente injetadas em componentes por meio de um serviço de roteamento. As rotas permitem que os usuários naveguem pela aplicação de forma intuitiva e sem a necessidade de recarregar a página.

• *Injeção de dependência*

Permite que os serviços e outras dependências sejam injetados em componentes e outros elementos da aplicação de forma transparente. Ela ajuda a manter a modularidade da aplicação e a evitar a duplicação de código. A injeção de dependência é feita por meio do mecanismo de injeção de dependência do Angular, que é responsável por criar e gerenciar as instâncias das classes injetáveis.

---

📍**Conceito de Pipes**

• Os Pipes são uma maneira de transformar dados exibidos em um template. Eles permitem formatar, filtrar e ordenar dados de uma forma muito simples e eficiente.Eles são chamados no template usando o caractere "|".
Para consultar todos os pipes já disponibilizados pelo Angular, acessar: <https://angular.io/guide/pipes>

>*Criando um pipe utilizando Angular CLI*

    - Abra o prompt de comando ou terminal do seu sistema operacional.
    - Navegue até a pasta raiz do seu projeto Angular.
    - Execute o comando **ng generate pipe nome-do-pipe**.
    *O Angular CLI irá criar automaticamente uma nova pasta com o nome do seu pipe na pasta src/app. Dentro dessa pasta, será criado um arquivo TypeScript para a lógica do seu pipe.
    
 ---

📍**Property binding**

• É um recurso do Angular que permite vincular uma propriedade de um elemento HTML a uma propriedade de uma classe do componente.

• Permite atualizar automaticamente o valor de uma propriedade do elemento HTML quando a propriedade da classe do componente é atualizada.

• É indicado pelo uso de colchetes ao redor do nome da propriedade HTML que se deseja vincular, seguido do nome da propriedade da classe do componente.

• Exemplo: `<img [src]="imagemUrl">`

---

📍**Event binding**

• É um recurso do Angular que permite vincular um evento de um elemento HTML a um método de uma classe do componente.

• Permite executar um código em resposta a um evento do usuário, como um clique em um botão ou uma entrada de texto em um campo de formulário.

• É indicado pelo uso de parênteses ao redor do nome do evento HTML que se deseja vincular, seguido do nome do método da classe do componente.

• Exemplo: `<button (click)="botaoClicado()">Clique aqui</button>`

---

📍**Two-Way Data Binding**

• É uma funcionalidade do Angular que permite que os dados fluam em ambas as direções, ou seja, do componente para o template e do template para o componente. Isso significa que, quando um valor é alterado no template, ele é automaticamente atualizado no componente, e vice-versa.

• Essa funcionalidade é implementada por meio da diretiva `[(ngModel)]`, que é usada em elementos de entrada de formulário, como `<input>, <select> e <textarea>`. Quando a diretiva ngModel é aplicada a um elemento de entrada, ela cria um Two-Way Data Binding entre a propriedade do componente e a propriedade do elemento de entrada. Isso significa que, quando o usuário digita algo no campo de entrada, o valor é atualizado no componente e, quando o valor do componente é alterado programaticamente, o campo de entrada é atualizado automaticamente.

---

📍**Renderizar Listas**

• Em Angular, podemos renderizar listas usando a diretiva *ngFor. Esta diretiva permite que você itere sobre uma matriz ou objeto e exiba cada item em seu modelo de exibição.

• Por exemplo:

    <ul>
        <li *ngFor="let item of items">{{ item }}</li>
    </ul>

---

📍**Interação entre componente pai e componente filho**

• A comunicação entre o componente pai e o componente filho em Angular é realizada por meio dos decoradores @Input e @Output.

• O @Input é usado para passar dados do componente pai para o componente filho. Para fazer isso, o componente filho define uma propriedade decorada com @Input e o componente pai passa o valor para essa propriedade usando a sintaxe de atribuição de propriedade no template. O componente filho pode então usar esse valor como quiser.

• Já o @Output é usado para emitir eventos do componente filho para o componente pai. Para fazer isso, o componente filho define um evento usando o EventEmitter e o decorator @Output, e o componente pai pode se inscrever para receber esse evento e executar uma ação quando ele ocorrer.

---

📍**Injetando um serviço em um Componente**

• Para injetar um serviço no construtor de um componente ou serviço do Angular, você precisa criar uma variável privada que receberá a instância do serviço e adicioná-la como um parâmetro no construtor. A sintaxe para fazer isso é a seguinte:

        constructor(private nomeVariavel: NomeServico) { }

• Onde "nomeVariavel" é o nome da variável que você deseja criar e "NomeServico" é o nome do serviço que você deseja injetar. Com essa sintaxe, o Angular cuidará de criar uma instância do serviço para você e injetá-lo automaticamente na sua variável no construtor.

• Depois de injetar o serviço no construtor, é possível usar a variável "nomeVariavel" em qualquer método do seu componente ou serviço usando a sintaxe:

        this.nomeVariavel.metodoDoServico();

• Onde "metodoDoServico" é o nome de um método do serviço que você deseja chamar. A variável "nomeVariavel" pode ser declarada como pública ou privada no construtor, dependendo se você deseja que ela possa ser acessada de fora do componente ou serviço. Ao injetar um serviço, você pode compartilhar funcionalidades entre diferentes partes do seu aplicativo e melhorar a modularidade e reutilização do código.

---

📍**Ciclo de vida do componente**

• O ciclo de vida do componente no Angular é composto por uma série de etapas que ocorrem desde a criação até a destruição do componente. Essas etapas são gerenciadas pelo Angular e permitem que você execute código em momentos específicos do ciclo de vida do componente. O ciclo de vida do componente no Angular pode ser dividido em oito etapas:

    ngOnChanges: chamado sempre que uma propriedade de entrada do componente é alterada. Esse método recebe um objeto SimpleChanges que contém informações sobre as alterações.

    ngOnInit: chamado depois que todas as propriedades de entrada do componente são inicializadas. É nesse método que você pode executar inicializações adicionais, como buscar dados de um serviço ou configurar o estado inicial do componente.

    ngDoCheck: chamado sempre que o Angular verifica a detecção de mudanças em um componente. Isso permite que você execute ações personalizadas de verificação de alterações.

    ngAfterContentInit: chamado depois que o conteúdo do componente é projetado e as propriedades de conteúdo são definidas.

    ngAfterContentChecked: chamado sempre que o conteúdo do componente é verificado quanto a alterações.

    ngAfterViewInit: chamado depois que a exibição do componente e seus filhos são renderizados pela primeira vez.

    ngAfterViewChecked: chamado sempre que a exibição do componente e seus filhos são verificados quanto a alterações.

    ngOnDestroy: chamado antes que o componente seja destruído e removido do DOM. Isso permite que você execute ações de limpeza, como cancelar assinaturas de eventos ou interromper a execução de intervalos.

• Essas etapas permitem que você execute código em momentos específicos do ciclo de vida do componente, o que é útil para realizar tarefas como inicialização, atualização e limpeza do componente. Além disso, o Angular oferece vários ganchos de ciclo de vida que permitem que você execute código em momentos específicos durante o ciclo de vida do componente.


🌞
