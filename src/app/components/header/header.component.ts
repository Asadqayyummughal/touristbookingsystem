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
