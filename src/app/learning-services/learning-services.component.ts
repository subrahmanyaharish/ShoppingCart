import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Posts } from './posts';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-learning-services',
  templateUrl: './learning-services.component.html',
  styleUrls: ['./learning-services.component.css']
})
export class LearningServicesComponent implements OnInit {
  loadedPosts: Posts[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.FetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://shopping-cart-db458.firebaseio.com//posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
        this.onFetchPosts();
      });
  }

  onFetchPosts() {
    // Send Http request
    this.FetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private FetchPosts() {
    this.isFetching = true;
    this.spinner.show();
    this.http.get('https://shopping-cart-db458.firebaseio.com//posts.json')
    .pipe(map( (responseData: {[key: string]: Posts}) => {
      const postsArray: Posts[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({...responseData[key], id: key});
        }
      }
      return postsArray;
    }))
    .subscribe(
      data => {
        this.isFetching = false;
        this.loadedPosts = data;
        this.spinner.hide();
      },
      error => console.log(error),
      () => console.log('Success')
    );
  }
}
