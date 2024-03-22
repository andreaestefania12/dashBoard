import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: DashBoardComponent, pathMatch: 'full' },
  ];
  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }