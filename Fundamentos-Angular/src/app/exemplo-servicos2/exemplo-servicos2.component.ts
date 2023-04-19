import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {
  descricao="";

  constructor(public logger: LoggerService){} //O public permite utilizar o serviço direto no template

  adicionarProduto(){
    this.logger.logar(`O produto com a descricao ${this.descricao} foi adicionado `);
  }
}
  