import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.http.get<{token: string}>(environment.baseUrl + 'api/v1/hoods', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    },
    (error: any) => {
      console.log(error);
      alert('Not Authorized.Login');
      this.router.navigate(['']);
    }
    );
  }

}
