import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoodComponent } from './hood/hood.component';
import { AuthorityComponent } from './authority/authority.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { BlogsComponent } from './blogs/blogs.component';
import { OutComponent } from './out/out.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hood', component: HoodComponent },
  { path: 'authority', component: AuthorityComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'health', component: HealthComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'log-out', component: OutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
