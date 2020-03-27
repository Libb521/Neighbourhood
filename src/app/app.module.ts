import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorityComponent } from './authority/authority.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { HoodComponent } from './hood/hood.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorityComponent,
    BusinessComponent,
    HealthComponent,
    HomeComponent,
    HoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
