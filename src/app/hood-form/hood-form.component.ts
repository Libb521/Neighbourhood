import { Component, OnInit} from '@angular/core';
import { environment } from './../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hood-form',
  templateUrl: './hood-form.component.html',
  styleUrls: ['./hood-form.component.css']
})
export class HoodFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      neighbourhood_name: [''],
      neighbourhood_location: [''],
      occupants: ['']
    });
  }

hoodForm() {// tslint:disable-next-line: max-line-length
  this.http.post<{token: string}>(environment.baseUrl + 'api/v1/create_hood', this.form.value , {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe(

    (response) => {
      console.log(response);
      this.router.navigate(['/home']);
      alert('Created Hood successfully');
    },
    (error: any) => {
      console.log(error);
      alert('Not Authorized.Login');
      this.router.navigate(['']);
    }
  );

  }
  ngOnInit() {
  }

}
