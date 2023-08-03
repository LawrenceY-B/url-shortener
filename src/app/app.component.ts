import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IShortenedUrl } from 'src/assets/model/shorten.model';
import { ShortlyService } from 'src/assets/services/urlShorten.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'url-shortener';
  url:string = '';
  value: string = 'Copy';
  constructor(private APIservice: ShortlyService) {}
  results: Array<IShortenedUrl> = [];
  ngOnInit(): void {}

  saveUrl(url: string) {
   // Get the value of the FormControl
    this.APIservice.getUrlData(url).subscribe((data: IShortenedUrl) => {
      this.results.push(data);
      localStorage.setItem('results', JSON.stringify(this.results));
      this.results = JSON.parse(localStorage.getItem('results') || '{}');
    });
  }
  copylink(link: string, style:HTMLElement) {
    this.value = 'Copied';
    style.style.backgroundColor = 'hsl(257, 27%, 26%)';
    setTimeout(() => {
      this.value = 'Copy';
      style.style.backgroundColor = 'var(--Cyan)';
      
    }, 3000);
    navigator.clipboard.writeText(link);
    
  }
  

}
