import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
  ngAfterViewInit() {
  this.slidimages();
  }

  slidimages() {
  $( '#carousel' ).elastislide({
    orientation : 'horizontal',
    minItems : ($(window).width() < 768 ) ? 1 : 2 ,
    itemW: 20
  });
}
}
