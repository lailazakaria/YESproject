import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  data!: any[];

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    this.http.get<any[]>('../../assets/json/work.json').subscribe(data => {
      this.data = data;
    });
    //an other way
    // this.data = this.dataService.getAllData();
  }
  showLeftSection = false;

  toggleLeftSection() {
    this.showLeftSection = !this.showLeftSection;
  }

}
