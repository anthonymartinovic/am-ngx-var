import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  users$: Observable<any[]>;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.users$ = this.http
      .get('http://jsonplaceholder.typicode.com/users')
      .pipe(
        delay(3000)
      ) as any;
  }
}
