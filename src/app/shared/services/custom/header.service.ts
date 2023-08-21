import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {
 
  constructor() { }

  public valueSubject = new BehaviorSubject<any>(null);

  setMyValue(value: string|number) {
    this.valueSubject.next(value);
  }

  getMyValue(): Observable<number|string> {
    return this.valueSubject.asObservable();
  }
      

  


}
