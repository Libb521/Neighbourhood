import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      dept_name: [''],
      contact_number: [''],
      dept_type: ['']
    });
  }
  departmentForm() {
    this.route.params.subscribe(params => {
      const id = params.id;
      // tslint:disable-next-line: max-line-length
      this.http.post<{token: string}>(environment.baseUrl + 'api/v1/create_dept/' + id, this.form.value, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe((res) => {

        console.log(res);
        this.router.navigate(['']);
        alert('Department successfully created');
        // tslint:disable-next-line: no-unused-expression

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
