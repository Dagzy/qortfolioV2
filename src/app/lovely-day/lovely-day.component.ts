import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-lovely-day',
  templateUrl: './lovely-day.component.html',
  styleUrls: ['./lovely-day.component.css']
})
export class LovelyDayComponent implements OnInit {
  flipper: boolean;
  constructor() {
    const flipper = false;
  }

  ngOnInit() {
    alert('Happy Valentine\'s Day, Rabies!');
    console.log(this.flipper);
  }
  getSchwifty() {
    if (!this.flipper) {
      this.flipper = true;
      // const picz = document.createElement('img');
      // const dicz = document.createTextNode()
      // <img id="piccy" src=''/>
      document.getElementById('0').innerHTML = '';
      document.getElementById('1').innerHTML = '';
      document.getElementById('2').innerHTML = '';
      document.getElementById('3').innerHTML = '';
      document.getElementById('4').innerHTML = '';
      document.getElementById('5').innerHTML = 'And these are the reasons that I love you';
      document.getElementById('6').innerHTML = '';
      const picci = document.getElementById('piccy');
      picci.setAttribute('src', '../../assets/heartles.png');
      picci.style.width = '30%';
      picci.style.height = '30%';
      console.log('strings');
    } else if (this.flipper) {
      this.flipper = false;
      document.getElementById('0').innerHTML = 'For my amazing wife on this Valentine\'s Day';
      document.getElementById('1').innerHTML = 'When I look at you, my heart soars.';
      document.getElementById('2').innerHTML = 'When you are far, I long for you.';
      document.getElementById('3').innerHTML = 'When you are near, I am filled with joy.';
      document.getElementById('4').innerHTML = 'When you share your touch, I tremble.';
      document.getElementById('5').innerHTML = '';
      document.getElementById('6').innerHTML = 'Our time together is a treasure that cannot be valued.';
      const picci = document.getElementById('piccy');
      picci.style.width = '0';
      picci.style.height = '0';
    } else {
      console.log('Something is broken :)');
    }
  }
}
