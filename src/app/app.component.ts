import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'url-shortener';
  circle!: HTMLDivElement;

  ngOnInit(): void {
    const circleElement = document.querySelector('.circle');
  if (circleElement) {
    this.circle = circleElement as HTMLDivElement;
  }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;

    this.circle.style.top = y + -13+ 'px';
    this.circle.style.left = x + -10+'px';
  }


}
