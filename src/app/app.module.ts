import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorityComponent } from './authority/authority.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { HoodComponent } from './hood/hood.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogsComponent } from './blogs/blogs.component';
import { OutComponent } from './out/out.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorityComponent,
    BusinessComponent,
    HealthComponent,
    HomeComponent,
    HoodComponent,
    NavbarComponent,
    BlogsComponent,
    OutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
