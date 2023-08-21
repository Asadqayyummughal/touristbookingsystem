import { Component,OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements AfterViewInit ,OnInit {
  active_branch:string='branch1'
  constructor(){}
  
  ngOnInit(): void {
    
 
   }
    
  ngAfterViewInit(): void {
   
  }
 

  setBranch(key:string){
    console.log('functin get celled::::::');
    
    this.active_branch=key;

  }



}
