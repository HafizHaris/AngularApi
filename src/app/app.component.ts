import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApis';
  listofcomments: Comments[];
  listofposts: Posts[];
  addedPost: Posts;
  constructor(private _apiService: ApiService){}

  ngOnInit() {
    this._apiService.getcomments().subscribe(data=>{
      this.listofcomments = data;
    });

    this._apiService.getcommentsbyparameter().subscribe(data=>{
      this.listofposts = data;
    });

    let postObj = new Posts();

    postObj.userId = 5;
    postObj.title = 'testbody';
    postObj.body = 'testbody';

    this._apiService.post(postObj).subscribe(
      data=>{
        this.addedPost = data;
      }
    );
  }


}
