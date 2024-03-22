import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AuthService, AuthResponse } from '../../auth.service';

declare global {
  interface Window { token: any; }
}

@Component({
  selector: 'app-dash-board',
  standalone: true,
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashBoardComponent  implements OnInit{

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getToken().subscribe({
      next: (response: AuthResponse) => { 
        window.token = response.access_token;
        console.log(window.token);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }
}
