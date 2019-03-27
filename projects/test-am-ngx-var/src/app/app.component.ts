import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  users$: Observable<User[]> = this.http
    .get('http://jsonplaceholder.typicode.com/users')
    .pipe(delay(3000)) as Observable<User[]>;

  constructor(
    private http: HttpClient
  ) {}
}
