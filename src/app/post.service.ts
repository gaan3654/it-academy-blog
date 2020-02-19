import { Injectable } from "@angular/core";
import { postList } from "./shared/post-list";
import { HttpClient } from "@angular/common/http";
import { Post } from './shared/post';

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  loadPosts() {
    return this.httpClient
    .get<{ posts: Post[] }>("assets/post-list.json")
    .toPromise();
  }

  getPost(id) {
    return postList.find(p => p.id === id);
  }
}
