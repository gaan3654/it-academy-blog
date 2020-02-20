import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'academy-blog';

  constructor() {
    const obs = Observable.create(m => {
      m.next("Produce");
      m.next("Smthn_else");
    });

    obs.subscribe(product => {
      console.log(product);
    });
  }

}
