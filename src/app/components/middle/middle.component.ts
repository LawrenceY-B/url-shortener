import { Component, OnInit } from '@angular/core';
import { IShortenedUrl } from 'src/assets/model/shorten.model';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {
results!: IShortenedUrl

  constructor() { }

  ngOnInit(): void {
  }

}
