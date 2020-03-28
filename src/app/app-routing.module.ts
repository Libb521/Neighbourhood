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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hood', component: HoodComponent },
  { path: 'authority', component: AuthorityComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'health', component: HealthComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'new-blog', component: BlogFormComponent },
  {path: 'register', component: RegisterComponent},
  { path: 'log-out', component: OutComponent },
  {path:'hood-form', component:HoodFormComponent},
  {path:'new-bussiness', component:BussinessFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
