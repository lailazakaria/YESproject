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
  currentPage = 1;
  itemsPerPage = 10;

  showLeftSection = false;
  toggleLeftSection() {
    this.showLeftSection = !this.showLeftSection;
  }
  paginateData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }
  nextPage() {
    const totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
