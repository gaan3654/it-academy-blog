import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./shared/post";
import { map, catchError } from "rxjs/operators";
import { PostModel } from './models/post-model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  loadPosts() {
    return this.httpClient.get<Post[]>("/api/posts");
    // .pipe(map(posts => posts.filter(p => p.id === '2')));
  }
  getPost(id) {
    return this.httpClient.get<Post>(`/api/posts/${id}`);
  }
  addPost(newPost: PostModel): Observable<PostModel> {
    return this.httpClient.post<PostModel>("/api/posts1", newPost).pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Sorry, our system encountered an error. Please try again a bit later.');
  }
}
