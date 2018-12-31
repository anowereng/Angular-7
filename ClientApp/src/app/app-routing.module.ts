import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './views/employee/create-employee.component';
import { ViewEmployeeComponent } from './views/employee/view-employee.component';
import { ListEmployeeComponent } from './views/employee/list-employee.component';
import { IndexCategoryComponent } from './views/category/index-category.component';

const routes: Routes = [
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'list', component: ListEmployeeComponent },
  { path: 'category', component: IndexCategoryComponent },
  { path: 'view', component: ViewEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateEmployeeComponent, IndexCategoryComponent,ListEmployeeComponent, ViewEmployeeComponent]
