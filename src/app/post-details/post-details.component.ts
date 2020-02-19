import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/post';
import { postList } from '../shared/post-list';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute, private service: PostService) {
    this.service = service;
  }
  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.post = this.service.getPost(postId);
    // this.post = postList.find(p => p.id === postId)
  }

}
