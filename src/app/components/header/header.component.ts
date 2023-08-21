<<<<<<< HEAD
import { Component, ElementRef, HostListener, ViewChild,OnInit,OnDestroy } from '@angular/core';
import { NgbDateStruct, NgbTimeStruct, NgbModalConfig, NgbModal, NgbDatepickerConfig, NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { CountriesService } from 'src/app/shared/services/custom/countries.service';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/services/custom/header.service';

// declare var window 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit,OnDestroy{
  @ViewChild('phone',{static:true})phone_number!:ElementRef;
  countries:Array<any>=[];
  start_destination:Array<any>=[];
  end_destination:Array<any>=[];
  selectedDate: NgbDateStruct|undefined;
  selectedTime: NgbTimeStruct|undefined;
  phon_input:any;
  active_item='Home';
  NavigationItem:Array<any> = [
    { name: 'Home', url:'/home'},
    { name: 'Booking',url:'/booking'},
    { name: 'About Us',url:'/about-us' },
    { name: 'Contact Us',url:'/contact-us'},
    { name: 'Faqs',url:'/faqs'}
    ];

  constructor(
        private datepickerConfig: NgbDatepickerConfig, 
        private timepickerConfig: NgbTimepickerConfig,
        private counteryServise:CountriesService,
        private router:Router,
        public header_service:HeaderService
        ){
        // Configure datepicker and timepicker
        this.datepickerConfig.minDate = {year: 1900, month: 1, day: 1 };
        this.datepickerConfig.maxDate = {year: 2099, month: 12, day: 31 };
        this.timepickerConfig.spinners = false;
        this.counteryServise.getCountries().subscribe(
           (data:Array<any>)=>{
            this.countries=data;  
           },
           (error:any)=>{
            console.log('Some thing Went wrong While Acceessing counteris i.e',error)
           }
                                                     )
         }

  ngOnInit(): void {
    this.header_service.getMyValue().subscribe((data:any)=>{
    if(data){
      this.active_item=data;
    }
   
   }).unsubscribe();

  
  }

  setActive(item:any){
    this.header_service.setMyValue(item.name);
    this.router.navigateByUrl(item.url);
  }

  searchStartDestination(start:string){
    start=start.trim();
    this.start_destination=this.countries.filter((country:any)=>country.toLowerCase().includes(start));
  }


  searchEndDestination(destination:string){
    destination=destination.trim();
    this.end_destination=this.countries.filter((country:any)=>country.toLowerCase().includes(destination));
    
  }

  ngOnDestroy() {

  }

  


}

=======
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(){

  }
  isNavbarCollapsed:boolean = true;
  is_active:Boolean=true;
  is_fixed:boolean=false;
  screenWidth:any;
  @ViewChild('open',{static:true})open_hamburger!:ElementRef;
  @ViewChild('close',{static:true})close_ambburger!:ElementRef;
  @ViewChild('navbar',{static:true})navbar!:ElementRef;
  @HostListener('window:resize', [])
  onWindowResize() { 
    if(this.screenWidth>=767)
    {
      
      this.is_fixed=false;
      this.is_active=true;
    
      
    }
    
  }
  
  toggleNavbar(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  
  showNav(){
       this.is_active=!this.is_active;
       this.is_fixed=!this.is_fixed;

  }
  hideNav(){
    this.is_active=!this.is_active;
    this.is_fixed=false;
  
  }

 

}
>>>>>>> 3b3dba6f7e291378fe455d35bc85dd91b3fe331f
