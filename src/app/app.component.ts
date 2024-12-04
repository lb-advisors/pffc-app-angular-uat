import { ChangeDetectionStrategy, Component, isDevMode } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isDevMode: boolean = isDevMode();
  apiUrl = environment.apiUrl;
  showWarning = false;
  //isOrderForm: boolean = false;

  constructor(private router: Router) {
    // Check that UAT is not using the prod backend
    if (this.isDevMode && this.apiUrl.includes('prod')) {
      this.showWarning = true;
      alert('WARNING: Angular is in Dev mode but connected to production !!!');
    }
  }

  //ngOnInit(): void {
  //  // Check if we are on the order form
  //  this.router.events.subscribe((event) => {
  //    if (event instanceof NavigationEnd) {
  //      const currentRoute = event.urlAfterRedirects;
  //      this.isOrderForm = currentRoute.includes('order-') && !currentRoute.includes('order-links');
  //    }
  //  });
  //}
}
