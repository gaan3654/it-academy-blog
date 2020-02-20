import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { PostComponent } from "./post/post.component";
import { SubmitPostComponent } from './submit-post/submit-post.component';
import { FormsModule } from '@angular/forms'

//fb.com/home/0

const routes: Route[] = [
  {
    path: "home",
    component: HomePageComponent
  },
  { path: "post/:id", component: PostDetailsComponent },
  { path: "postform", component: SubmitPostComponent},
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostComponent,
    PostDetailsComponent,
    SubmitPostComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
