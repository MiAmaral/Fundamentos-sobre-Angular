import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  mensagens: string[] = [];

  logar(mensagem: string){
    console.log(mensagem); //console.log() é uma função que permite imprimir mensagens no console do navegador ou ambiente de desenvolvimento.
    this.mensagens.push(mensagem)
  }

  exibeTodosOsLogs(){
    console.log(this.mensagens);
  }

}
