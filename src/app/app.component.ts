import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IShortenedUrl } from 'src/assets/model/shorten.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'url-shortener';
  @Input() results: Array<IShortenedUrl>=[]
  ngOnInit(): void {
  }

}
