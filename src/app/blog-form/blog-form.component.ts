import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { environment } from './../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      post: [''],
    });
   }
postForm() {
// tslint:disable-next-line: max-line-length
this.http.post<{token: string}>(`${environment.baseUrl}api/v1/post`, this.form.value , {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe(

    (response) => {console.log(response);
                   this.router.navigate(['/home']);
                   alert('Created Post successfully');
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
