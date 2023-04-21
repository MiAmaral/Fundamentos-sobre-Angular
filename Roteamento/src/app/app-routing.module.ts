import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"primeira-pagina", component: PrimeiraPaginaComponent},
  {path:"segunda-pagina", component: SegundaPaginaComponent},
  {path:"", redirectTo: "primeira-pagina", pathMatch: "full"}, //Redirecionamento direto pela URL raiz
  {path:"pagina-com-parametros/:id", component: PaginaComParametrosComponent},//O /:id é o parâmetro que terá que ser acessado pela classe quando for preciso obter a informação | Adicionando ao endpoint: ?nome=&idade=  serão adicionados os parâmetros de consulta (query)
  {path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)}, //Utilizando o conceito de lazy loading 
  {path: "pagina-protegida", component: PaginaProtegidaComponent, canActivate: [AuthGuard]},
  {path:"login", component: LoginComponent},
  {path:"**", component:PaginaNaoEncontradaComponent} //Os ** significam que ele direcionará para a página não encontrada sempre que não for uma url válida

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
