import { Component, OnInit } from '@angular/core';
import { IShortenedUrl } from 'src/assets/model/shorten.model';
import { ShortlyService } from 'src/assets/services/urlShorten.service';
@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss']
})
export class ShortenComponent {
  url: string = ""

  constructor(
    private APIservice: ShortlyService,
  ) { }
  
  saveUrl(url: string){
    this.APIservice.getUrlData(url).subscribe((data: IShortenedUrl) =>{
      console.log(data)
    })
    // this.saveSchool(data.id)
  }

  ngOnInit(): void {
  }

}
