import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

    nome = "Milena"; //Interpolação de texto com o html
    dataNascimento = "1900-03-11";
    urlImagem = "/assets/desenho.png";

  mostrarDataNascimento(){ // Criando o método
    alert(`A data de nascimento do João é: ${this.dataNascimento}`)
  }


}
