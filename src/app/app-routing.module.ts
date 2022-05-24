import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBoissonComponent } from './components/admin/add/add-boisson/add-boisson.component';
import { AddDessertComponent } from './components/admin/add/add-dessert/add-dessert.component';
import { AddPizzaComponent } from './components/admin/add/add-pizza/add-pizza.component';
import { AdminBoissonComponent } from './components/admin/admin-boisson/admin-boisson.component';
import { AdminDessertComponent } from './components/admin/admin-dessert/admin-dessert.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { LoginPageComponent } from './components/admin/login-page/login-page.component';
import { UpdateBoissonComponent } from './components/admin/update/update-boisson/update-boisson.component';
import { UpdateDessertComponent } from './components/admin/update/update-dessert/update-dessert.component';
import { UpdatePizzaComponent } from './components/admin/update/update-pizza/update-pizza.component';
import { CommandHommeComponent } from './components/command/command-homme/command-homme.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'commande', component: CommandHommeComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'admin/Pizza', component: AdminHomeComponent},
  {path: 'admin/Boisson', component: AdminBoissonComponent},
  {path: 'admin/Dessert', component: AdminDessertComponent},
  {path: 'admin/Pizza/Ajout', component: AddPizzaComponent},
  {path: 'admin/Boisson/Ajout', component: AddBoissonComponent},
  {path: 'admin/Dessert/Ajout', component: AddDessertComponent},
  {path: 'admin/Pizza/Update/:id', component: UpdatePizzaComponent},
  {path: 'admin/Dessert/Update/:id', component: UpdateDessertComponent},
  {path: 'admin/Boisson/Update/:id', component: UpdateBoissonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
