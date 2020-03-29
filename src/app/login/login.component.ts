import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from './../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });

    this.http = http;
   }
   loginForm() {
    this.http.post(environment.baseUrl + 'api/token/', this.form.value).subscribe(
        // tslint:disable-next-line: no-string-literal
        (response) => {localStorage.setItem('token', response['access']);
                       alert('You have successfully logged in');
                       this.router.navigate(['/home']);
      },
        (error) => { alert('Wrong username or password');
                     this.router.navigate(['']);
                     this.form.reset();
      }
      );

    }
  ngOnInit() {
  }

}
