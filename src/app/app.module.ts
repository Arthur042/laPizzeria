import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './components/admin/login-page/login-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminBoissonComponent } from './components/admin/admin-boisson/admin-boisson.component';
import { AdminDessertComponent } from './components/admin/admin-dessert/admin-dessert.component';
import { AddPizzaComponent } from './components/admin/add/add-pizza/add-pizza.component';
import { AddBoissonComponent } from './components/admin/add/add-boisson/add-boisson.component';
import { AddDessertComponent } from './components/admin/add/add-dessert/add-dessert.component';
import { UpdateBoissonComponent } from './components/admin/update/update-boisson/update-boisson.component';
import { UpdateDessertComponent } from './components/admin/update/update-dessert/update-dessert.component';
import { UpdatePizzaComponent } from './components/admin/update/update-pizza/update-pizza.component';
import { CommandPizzaComponent } from './components/command/command-pizza/command-pizza.component';
import { CardComponent } from './components/command/card/card.component';
import { CommandBoissonComponent } from './components/command/command-boisson/command-boisson.component';
import { CommandDessertComponent } from './components/command/command-dessert/command-dessert.component';
import { CardBoissonComponent } from './components/command/card-boisson/card-boisson.component';
import { CardDessertComponent } from './components/command/card-dessert/card-dessert.component';
import { CommandHommeComponent } from './components/command/command-homme/command-homme.component';
import { RecapCommandComponent } from './components/command/recap-command/recap-command.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    LoginPageComponent,
    AdminHomeComponent,
    AdminBoissonComponent,
    AdminDessertComponent,
    AddPizzaComponent,
    AddBoissonComponent,
    AddDessertComponent,
    UpdateBoissonComponent,
    UpdateDessertComponent,
    UpdatePizzaComponent,
    CommandPizzaComponent,
    CardComponent,
    CommandBoissonComponent,
    CommandDessertComponent,
    CardBoissonComponent,
    CardDessertComponent,
    CommandHommeComponent,
    RecapCommandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
