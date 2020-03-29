import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
data: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      // tslint:disable-next-line: max-line-length
      this.http.get<{token: string}>(environment.baseUrl + 'api/v1/create_dept/' + id, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe((res) => {
        this.data = res;
        console.log(this.data);
      });
    });
  }

}
