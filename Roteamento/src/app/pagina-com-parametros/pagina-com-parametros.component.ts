import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-parametros',
  templateUrl: './pagina-com-parametros.component.html',
  styleUrls: ['./pagina-com-parametros.component.css']
})
export class PaginaComParametrosComponent {

  id: number | null = null;
  idade: number | null = null;
  nome: string | null = "";

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    //Criando Parâmetro de Rota
    // O sinal => é chamado de "arrow function" e é uma das formas mais comuns de definir funções em Js e Ts. Em vez de definir uma função usando a palavra-chave function, uma função de seta é definida com uma sintaxe mais curta e concisa.
    this.route.paramMap.subscribe(params => { 
      this.id = Number(params.get("id"));
    });

    //Criando Parâmetro de Consulta(Query)
    this.route.queryParamMap.subscribe(params => {
      this.idade = Number(params.get("idade"));
      this.nome = params.get("nome");
    });
  }

}
