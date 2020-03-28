import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.http.get<{token: string}>(environment.baseUrl + 'api/v1/hoods', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }

}
