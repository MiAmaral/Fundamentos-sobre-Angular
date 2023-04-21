import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeira-pagina',
  templateUrl: './primeira-pagina.component.html',
  styleUrls: ['./primeira-pagina.component.css']
})
export class PrimeiraPaginaComponent {

  constructor( //Serviço de router injetado no componente
    private router: Router
  ) {}

  moverParaSegundaPagina(){
    this.router.navigate(["segunda-pagina"]); //Utilizando o serviço de router dentro do componente e fora do constructor
  }

}
