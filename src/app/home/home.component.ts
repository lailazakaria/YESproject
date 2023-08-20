import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showLeftSection = false;
  toggleLeftSection() {
    this.showLeftSection = !this.showLeftSection;
  }
  firstRateFormControl = new FormControl('', [Validators.required, Validators.pattern(/^(?:0|[1-9]\d?|100)$/)]);
  lastRateFormControl = new FormControl('', [Validators.required, Validators.pattern(/^(?:0|[1-9]\d?|100)$/)]);

  updateCircles() {
    const circleBig1 = document.querySelector('.circle-big1') as HTMLElement;
    const circleBig2 = document.querySelector('.circle-big2') as HTMLElement;
    const inputValue1 = this.firstRateFormControl.value;
    const inputValue2 = this.lastRateFormControl.value;
    console.log(inputValue1)
    if (circleBig1) {
      // circleBig1.style.borderColor = this.getCircleBorderColor(inputValue1);
      circleBig1.setAttribute('style', `border-color: ${this.getCircleBorderColor(inputValue1)}`);
    }

    if (circleBig2) {
      // circleBig2.style.borderColor = this.getCircleBorderColor2(inputValue2);
      circleBig2.setAttribute('style', `border-color: ${this.getCircleBorderColor2(inputValue2)}`);
    }
    if (this.firstRateFormControl.valid && this.lastRateFormControl.valid) {
      const circle1 = document.querySelector('.circle1');
      console.log(circle1)
      const circle2 = document.querySelector('.circle2');
      console.log(circle2)
      if (circle1) {
        circle1.textContent = this.firstRateFormControl.value + '%';
      }

      if (circle2) {
        circle2.textContent = this.lastRateFormControl.value + '%';
      }
    }
    else {
      alert('please enter a valid value between 0 and 100')
    }

  }
  getCircleBorderColor(inputValue: any): any {
    if (inputValue <= 25) {
      return 'border-left-color: #9cc1e0;border-right-color:#bfdaf0; border-top-color:#bfdaf0; border-bottom-color:#bfdaf0;'
    }
    else if (inputValue <= 50) {
      return 'border-left-color: #9cc1e0;border-top-color: #9cc1e0;border-bottom-color:#bfdaf0;border-right-color:#bfdaf0; '
    } else if (inputValue <= 75) {
      return 'border-right-color: #9cc1e0; border-left-color: #9cc1e0; border-top-color: #9cc1e0; border-bottom-color:#bfdaf0;'
    } else {
      return 'border-bottom-color: #9cc1e0; border-left-color: #9cc1e0; border-top-color: #9cc1e0; border-right-color: #9cc1e0;'
    }
  }
  getCircleBorderColor2(inputValue: any) {
    if (inputValue <= 25) {
      return 'border-left-color: #ffc396;border-right-color:#f5d6be; border-top-color:#f5d6be; border-bottom-color:#f5d6be;'
    }
    else if (inputValue <= 50) {
      return 'border-left-color: #ffc396;border-top-color: #ffc396;border-bottom-color:#f5d6be;border-right-color:#f5d6be; '
    } else if (inputValue <= 75) {
      return 'border-right-color: #ffc396; border-left-color:#ffc396; border-top-color:#ffc396; border-bottom-color:#f5d6be;'
    } else {
      return 'border-bottom-color:#ffc396; border-left-color:#ffc396; border-top-color:#ffc396; border-right-color:#ffc396;'
    }

  }
}
