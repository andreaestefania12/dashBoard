import { Component,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashBoardComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthService],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'proyectoDashboard';
}
