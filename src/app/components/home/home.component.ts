import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(){
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      center:true,
      items:3,
      autoplayTimeout:2000,
      autoplay:false,
      nav: false,
      
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
          },
        1024: {
          items: 3
        }
      },
    
    }
    this.customOption2={
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      center:true,
      items:4,
      autoplayTimeout:1500,
      autoplay:true,
      nav: false,
      
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 2
          },
          940: {
            items: 4
          },
        1024: {
          items: 4
        },
        1200:{
          items:4
        }
      },
    
    }
  }
  customOptions:OwlOptions|any;
  activeSlideIndex = 0;
  customOption2:OwlOptions|any;
  moveRight() {
    console.log('called::::');
    
    this.customOptions['autoplay'] = false; // Pause autoplay while moving
    this.customOptions['rtl'] = false; // Reset right-to-left (RTL) option if previously set
    this.customOptions.unshift(this.customOptions.pop()); // Move last item to first position
  }

  moveLeft() {
    this.customOptions['autoplay'] = false; // Pause autoplay while moving
    this.customOptions['rtl'] = true; // Set right-to-left (RTL) option to true
    this.customOptions.push(this.customOptions.shift()); // Move first item to last position
  }
}
