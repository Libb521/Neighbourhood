import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
data: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      // tslint:disable-next-line: max-line-length
      this.http.get<{token: string}>(environment.baseUrl + 'api/v1/create_business/' + id, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe((res) => {
        this.data = res;
        console.log(this.data);
      });
    });

  }

}
