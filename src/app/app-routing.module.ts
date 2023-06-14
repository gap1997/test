import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/detailed', pathMatch: 'full' },
  { path: 'detailed', component: DetailedViewComponent },
  { path: 'summary', component: SummaryViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
