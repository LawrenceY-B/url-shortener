import { Component, Input, OnInit } from '@angular/core';
import { IShortenedUrl } from 'src/assets/model/shorten.model';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {
  @Input() results: Array<IShortenedUrl>=[]


  constructor() { 

  }

  ngOnInit(): void {
    
  }
fetchAllResults(){}

}
