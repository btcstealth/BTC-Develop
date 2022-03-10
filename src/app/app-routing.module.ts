import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { CountriesComponent } from './countries/countries.component';
import { IncomeComponent } from './income/income.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'BTC-Develop/todo', component: TodoComponent},
  {path: 'BTC-Develop/companies', component: CompaniesComponent},
  {path: 'BTC-Develop/countries', component: CountriesComponent},
  {path: 'BTC-Develop/income', component: IncomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




}
