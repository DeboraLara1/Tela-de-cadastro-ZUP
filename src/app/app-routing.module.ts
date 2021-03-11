import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "todos",
  component: CadastrosComponent
},
{
  path: "atendidos",
  component: CadastrosComponent
},
{
  path: "delete/:id",
  component: CadastrosComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
