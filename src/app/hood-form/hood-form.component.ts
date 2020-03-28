import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import { Hood } from '../hood';

@Component({
  selector: 'app-hood-form',
  templateUrl: './hood-form.component.html',
  styleUrls: ['./hood-form.component.css']
})
export class HoodFormComponent implements OnInit {
  newHood = new Hood('','','',0,0);
  @Output() addHood = new EventEmitter<Hood>();

    submitHood(){
  this.addHood.emit(this.newHood);
  this.newHood = new Hood('','','',0,0);

    }
  
  constructor() { }

  ngOnInit() {
  }

}
