import { Injectable } from '@angular/core';
import { SearchComponent } from './search/search.component';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  private _value: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public readonly value: Observable<string> = this._value.asObservable();

  constructor() { }

  updateValue(value) {
    this._value.next(value);
  }

  getValue(): Observable<string> {
    return this.value;
  }


}
