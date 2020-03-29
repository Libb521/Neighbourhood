import { Component, OnInit} from '@angular/core';
import { environment } from './../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bussiness-form',
  templateUrl: './bussiness-form.component.html',
  styleUrls: ['./bussiness-form.component.css']
})
export class BussinessFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      business_name: [''],
      business_email: [''],
    });
   }

   businessForm() {
    this.route.params.subscribe(params => {
      const id = params.id;
      // tslint:disable-next-line: max-line-length
      this.http.post<{token: string}>(environment.baseUrl + 'api/v1/create_business/' + id, this.form.value, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe((res) => {

        console.log(res);
        this.router.navigate(['']);
        alert('Business successfully created');
      },
      (error: any) => {
        console.log(error);
        alert('Not Authorized.Login');
        this.router.navigate(['']);
      }
      );

    });
  }

  ngOnInit() {
  }

}
