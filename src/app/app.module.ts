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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
