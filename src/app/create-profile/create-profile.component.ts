import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
form: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder, private route: ActivatedRoute, private router: Router ) {
    this.form = this.fb.group({
      bio: [''],
      general_location: [''],
    });
  }
profileForm() {
  this.route.params.subscribe(params => {
    const id = params.id;
    // tslint:disable-next-line: max-line-length
    this.http.post<{token: string}>(environment.baseUrl + 'api/v1/view_hood/' + id, this.form.value, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe((res) => {

      console.log(res);
      this.router.navigate(['/home']);
      alert('Profile successfully created');
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
