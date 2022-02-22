import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { IncomeComponent } from './income/income.component';
import { CountriesComponent } from './countries/countries.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    IncomeComponent,
    CountriesComponent,
    MenuComponent,
    HomeComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
