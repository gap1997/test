import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css'],
})
export class DetailedViewComponent implements OnInit {
  data: any[] = [];
  selectedSamplingTime: string = '';
  selectedData: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getData().subscribe((response) => {
      this.data = response.Datas;
      if (this.data.length > 0) {
        this.selectedSamplingTime = this.data[0].SamplingTime;
        this.setSelectedData();
      }
    });
  }

  setSelectedData() {
    this.selectedData = this.data.find(
      (item) => item.SamplingTime === this.selectedSamplingTime
    );
  }

  onSamplingTimeChange(event: any) {
    this.setSelectedData();
  }

  saveData() {
    this.apiService.saveData(this.selectedData).subscribe(
      (response) => {
        console.log('Data saved successfully.');
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );
  }
  goToSummaryPage() {
    this.router.navigate(['/summary']);
  }

  getPropertyType(property: any): string {
    if (typeof property.Value === 'number') {
      return 'number';
    } else if (typeof property.Value === 'boolean') {
      return 'checkbox';
    } else {
      return 'text';
    }
  }
}
