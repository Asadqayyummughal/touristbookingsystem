import { Component, ElementRef, Renderer2, ViewChild,AfterViewInit,OnInit } from '@angular/core';
import { OwlOptions,SlidesOutputData } from 'ngx-owl-carousel-o';
import flatpickr from 'flatpickr';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('standard_anchor')standard_anchor!:ElementRef;
  @ViewChild('schedule_anchor')schedule_anchor!:ElementRef;
  @ViewChild('datetime_input',{static:false}) date_time_inp!:ElementRef;
  private reviews:any;
  public testimonial_carousel:any;
  public cities_carousel:any;
  public citiesOption:any;
  public testimonialsOptions:any;
  public content='this is cntent'
  active_key='standard';
  customOptions:OwlOptions|any;
  activeSlideIndex = 0;
  customOption2:OwlOptions|any;
  countries:Array<any>=[];
  start_destination:Array<any>=[];
  end_destination:Array<any>=[];
 
  constructor(
    private renderer:Renderer2
  ){
    this.testimonialsOptions={
      loop: true,
      mouseDrag: false,
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
        576:{
          items:1
          
        },
        768: {
          items: 2
          },
        992: {
          items: 3
        },
        1200:{
          items:3
        }
      },
    }
    this.citiesOption={
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
          items: 1
        },
        768: {
          items: 3
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

  ngOnInit(): void {
    this.cities_carousel= [
      {
        src:"../../../assets/images/lahore-pakistan-the-diary-of-a-nomad-facebook.png",
        title:'Lahore',
        desc:'Some quick example text to build on the card title.',
      },
      {
        src:"../../../assets/images/faisalmasjid.png",
        title:'Islamabad',
        desc:'Some quick example text to build on the card title.',
      },
        {
        src:"../../../assets/images/minarepakistan.png",
        title:'Karachi',
        desc:'Some quick example text to build on the card title.',
        },
        {
        src:"../../../assets/images/islamic-college-university.png",
        title:'Peshwar',
        desc:'Some quick example text to build on the card title.',
        },
        {
          src:"../../../assets/images/lahore-pakistan-the-diary-of-a-nomad-facebook.png",
          title:'Lahore',
          desc:'Some quick example text to build on the card title.',
        },
        {
          src:"../../../assets/images/faisalmasjid.png",
          title:'Islamabad',
          desc:'Some quick example text to build on the card title.',
        },
          {
          src:"../../../assets/images/minarepakistan.png",
          title:'Karachi',
          desc:'Some quick example text to build on the card title.',
          }
         
    ]
    this.testimonial_carousel=[
      {
        title:"FRANk BAKER",
        sub_title:"lorem ipsum",
        img:"../../../assets/images/fcard-img2.png",
        quoted_image:"../../../assets/images/card-quotation.png",
      
        },
        {
          title:"FRANk BAKER",
          sub_title:"lorem ipsum",
          img:"../../../assets/images/fcard-img1.png",
          quoted_image:"../../../assets/images/card-quotation.png",
          },
          {
            title:"FRANk BAKER",
            sub_title:"lorem ipsum",
            img:"../../../assets/images/fcard-img3.png",
            quoted_image:"../../../assets/images/card-quotation.png",
          },
          {
              title:"FRANk BAKER",
              sub_title:"lorem ipsum",
              img:"../../../assets/images/fcard-img1.png",
              quoted_image:"../../../assets/images/card-quotation.png",
              
          },
          
            {
              title:"FRANk BAKER",
              sub_title:"lorem ipsum",
              img:"../../../assets/images/fcard-img2.png",
              quoted_image:"../../../assets/images/card-quotation.png",
          },
          {
            title:"FRANk BAKER",
            sub_title:"lorem ipsum",
            img:"../../../assets/images/fcard-img1.png",
            quoted_image:"../../../assets/images/card-quotation.png",
        },
          
    ]
  }

  ngAfterViewInit(): void {
    const placeholderText = 'Choose a date and time';
    const elem=this.date_time_inp.nativeElement;
    this.renderer.setAttribute(elem,'placeholder', placeholderText)
  }

  searchStartDestination(start:string){
    start=start.trim();
    this.start_destination=this.countries.filter((country:any)=>country.toLowerCase().includes(start));
  }

  searchEndDestination(destination:string){
    destination=destination.trim();
    this.end_destination=this.countries.filter((country:any)=>country.toLowerCase().includes(destination));
  }

  toggleClass(ele:HTMLElement,key:string){
    this.active_key=key;
  }

  


  


}
