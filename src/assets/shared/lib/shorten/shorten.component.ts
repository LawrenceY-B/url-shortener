import { Component, OnInit } from '@angular/core';
import { IShortenedUrl } from 'src/assets/model/shorten.model';
// import { ShortenedService } from '../../services/urlshorten.service';
@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss']
})
export class ShortenComponent {
  url: string = ""

  constructor(
    // private ShortenedService: ShortenedService
  ) { }
  
  // saveUrl(url: string){
  //   this.ShortenedService.getShortUrl(url).subscribe((data: IShortenedUrl) =>{
  //     console.log(data)
  //   })
  //   // this.saveSchool(data.id)
  // }

  ngOnInit(): void {
  }

}
