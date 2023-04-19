import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent {
    @Input() sobrenome = "";
    @Output() mostrarNome = new EventEmitter(); //O EventEmitter é uma classe do Angular que permite que um componente emita eventos personalizados que podem ser ouvidos por outros componentes que estão escutando esses eventos.

    nome = "";
    
}
