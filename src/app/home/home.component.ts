import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sliderValue = 0;
  constant = 6;
  img;
  slider;

  constructor() {
    this.slider = null;
  }

  ngOnInit() {
    this.slider = <HTMLInputElement> document.getElementById('mySlider');
    this.sliderValue = this.slider.value;
    this.img = document.getElementById('lizardImage');
  }

  onSliderInput() {
    this.img.style.width = (this.slider.value * this.constant).toString() + 'px';
  }

}
