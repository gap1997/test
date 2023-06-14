import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css'],
})
export class SummaryViewComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getData().subscribe((response) => {
      this.data = response.Datas;
    });
  }
  goToDetailedView() {
    this.router.navigate(['/detailed']);
  }

  getPropertyByLabel(item: any, label: string): any {
    const property = item.Properties.find((p: any) => p.Label === label);
    return property ? property.Value : null;
  }
}
