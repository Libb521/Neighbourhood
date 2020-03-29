import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.css']
})
export class OutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('token');
    this.router.navigate(['']);

  }

}
