import { ChangeDetectionStrategy, Component, isDevMode, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment';
import { Title, Meta } from '@angular/platform-browser';
import { SwUpdate } from '@angular/service-worker';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  isDevMode: boolean = isDevMode();
  apiUrl = environment.apiUrl;
  showWarning = false;
  //isOrderForm: boolean = false;

  constructor(private router: Router, private title: Title, private meta: Meta, private swUpdate: SwUpdate) {
    // Check that UAT is not using the prod backend
    if (this.isDevMode && this.apiUrl.includes('prod')) {
      this.showWarning = true;
      alert('WARNING: Angular is in Dev mode but connected to production !!!');
    }
  }

  ngOnInit(): void {
    this.title.setTitle('Pacific Fresh Fish Company App');
    this.meta.addTags([
      { name: 'description', content: 'Pacific Fresh Fish Company application created by lb-advisors' },
      { name: 'keywords', content: 'PFF, lb-advisors, allintel' },
      { name: 'robots', content: 'index, follow' },
    ]);

    this.checkForUpdate();
  }

  private checkForUpdate() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate
        .checkForUpdate()
        .then((isUpdateAvailable) => {
          if (isUpdateAvailable) {
            const confirmUpdate = confirm('A new version is available. Do you want to load it?');
            if (confirmUpdate) {
              this.swUpdate.activateUpdate().then(() => {
                window.location.reload();
              });
            }
          }
        })
        .catch((error) => {
          console.error('Error while checking for updates:', error);
        });
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
