import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpClient ) { }
  
  getCountries():Observable<any>{
    const url='https://restcountries.com/v3.1/all';
    return  this.http.get(url)
    .pipe(
      map((data:any)=>{

         return data.map((item:any)=>item.name.common)
           
      }
    )
    )

  }
}
