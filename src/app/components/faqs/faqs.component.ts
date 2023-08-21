import { Component,ElementRef,Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
 
   is_shown:boolean=true;

   constructor(private renderer:Renderer2){

   }

  showOrHide(elem_1:string,elem_2:string){
    let icon1=document.getElementById(elem_1);
    let icon2=document.getElementById(elem_2);
    icon1?.classList.toggle('hide-icon');
    icon2?.classList.toggle('hide-icon');  
  }


}
