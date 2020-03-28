import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {Blog} from '../blog'

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  newBlog = new Blog('','', new Date());

  @Output() addBlog= new EventEmitter<Blog>();

  submitForm(){
    this.addBlog.emit(this.newBlog);
    this.newBlog = new Blog('','', new Date());
  }

  constructor() { }

  ngOnInit() {
  }

}
