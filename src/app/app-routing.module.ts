import { BlogFormComponent } from './blog-form/blog-form.component';
import { HoodFormComponent } from './hood-form/hood-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoodComponent } from './hood/hood.component';
import { AuthorityComponent } from './authority/authority.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { BlogsComponent } from './blogs/blogs.component';
import { OutComponent } from './out/out.component';
import { HomeComponent } from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {BussinessFormComponent} from './bussiness-form/bussiness-form.component';
import { LoginComponent } from './login/login.component';
import { HoodDetailsComponent } from './hood-details/hood-details.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { DepartmentFormComponent } from './department-form/department-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'hood', component: HoodComponent },
  { path: 'authority', component: AuthorityComponent },
  { path: 'view-business/:id', component: BusinessComponent },
  { path: 'view-dept/:id', component: HealthComponent },
  { path: 'posts', component: BlogsComponent },
  { path: 'new-blog', component: BlogFormComponent },
  {path: 'register', component: RegisterComponent},
  { path: 'log-out', component: OutComponent },
  {path: 'hood-form', component: HoodFormComponent},
  {path: 'new-bussiness', component: BussinessFormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'hood/:id', component: HoodDetailsComponent},
  {path: 'join/:id', component: CreateProfileComponent},
  {path: 'create-business/:id', component: BussinessFormComponent},
  {path: 'create-dept/:id', component: DepartmentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
