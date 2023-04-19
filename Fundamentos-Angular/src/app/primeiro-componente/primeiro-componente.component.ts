import { Component } from "@angular/core";

@Component({  //Decorador de componente
    selector: "app-primeiro-componente", //todo component precisa utilizar o prefixo "app"
    template: "<h2>Primeiro Componente</h2>",
    styles: ["h2 { color : red; }"] 
})

export class PrimeiroComponenteComponent{

}