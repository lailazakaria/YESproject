import { Component } from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent {
  isActive: string = '';
  toggleActive(value: string) {
    this.isActive = value;
  }
}
