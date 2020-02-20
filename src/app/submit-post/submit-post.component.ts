import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../models/post-model';
import { PostService } from '../post.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-submit-post',
  templateUrl: './submit-post.component.html',
  styleUrls: ['./submit-post.component.scss']
})
export class SubmitPostComponent implements OnInit {
  newPost: PostModel;
  serverErrorMessage: string;
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.newPost = {author:'', email:'', title:'', content:''}
  }

  onSubmit(){
    console.log(this.newPost);
    this.postService.addPost(this.newPost).subscribe();
    this.serverErrorMessage = '';
    
    error => this.serverErrorMessage = error;
    this.newPost = {author:'', email:'', title:'', content:''}
  }

}
