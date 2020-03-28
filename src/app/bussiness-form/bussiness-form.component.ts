import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Bussiness} from '../bussiness';

@Component({
  selector: 'app-bussiness-form',
  templateUrl: './bussiness-form.component.html',
  styleUrls: ['./bussiness-form.component.css']
})
export class BussinessFormComponent implements OnInit {
  newBussiness = new Bussiness('','', '');

  @Output() addBussiness = new EventEmitter<Bussiness>();

  submitForm(){
    this.addBussiness.emit(this.newBussiness);
    this.newBussiness = new Bussiness('','', '');
  }

  constructor() { }

  ngOnInit() {
  }

}
