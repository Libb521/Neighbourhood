import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HoodFormComponent} from './hood-form/hood-form.component';
import { BussinessFormComponent } from './bussiness-form/bussiness-form.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { LoginComponent } from './login/login.component';
import { HoodDetailsComponent } from './hood-details/hood-details.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
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
    OutComponent,
    RegisterComponent,
    HoodFormComponent,
    BussinessFormComponent,
    BlogFormComponent,
    LoginComponent,
    HoodDetailsComponent,
    CreateProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
