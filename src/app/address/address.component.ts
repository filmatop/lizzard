import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() addressForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get formStreet() {
    return this.addressForm.get('street');
  }

}
