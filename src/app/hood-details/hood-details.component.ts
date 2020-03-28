import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hood-details',
  templateUrl: './hood-details.component.html',
  styleUrls: ['./hood-details.component.css']
})
export class HoodDetailsComponent implements OnInit {
id: any;
hood;
  constructor(private http: HttpClient, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      // tslint:disable-next-line: max-line-length
      this.http.get<{token: string}>(environment.baseUrl + 'api/v1/view_hood/' + id, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe((res) => {
        this.hood = res;
        console.log(this.hood);
      });

    });
  }

}
