import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent {
  horario = new Date();
  timer: any=null!;

  @Input() texto="";

  //o ngOnInit é o segundo ciclo de vida que dispara quando renderiza um elemento
  ngOnInit(): void{
    console.log("O evento OnInit disparou");
    this.timer = setInterval(() => this.horario = new Date(), 1000);
  }

  //o ngOnChanges é o primeiro ciclo de vida que dispara quando renderiza um elemento, pois é herdado do elemento pai
  ngOnChanges(change: SimpleChange): void{
    console.log(change);

  }

  //o ngOnDestroy permite destruir o ciclo de vida, geralmente quando o usuário navega para fora da página ou quando a aplicação é encerrada
  ngOnDestroy(): void{
    clearInterval(this.timer);
  }

}