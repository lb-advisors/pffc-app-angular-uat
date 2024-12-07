import { Platform } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PwaService } from 'src/app/services/pwa.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  standalone: true,
  selector: 'app-install-prompt',
  imports: [CommonModule],
  templateUrl: './app-install-prompt.component.html',
  styleUrls: ['./app-install-prompt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInstallPromptComponent implements OnInit, OnDestroy {
  private beforeInstallPromptHandler: any;
  deferredPrompt: any;
  isPwa$: Observable<boolean>;
  isIosButNotStandalone: boolean; // iOs

  constructor(private pwaService: PwaService, private platform: Platform, private snackbarService: SnackbarService) {
    this.isPwa$ = this.pwaService.isPwa$;
    const isStandalone = 'standalone' in window.navigator && window.navigator['standalone'];
    this.isIosButNotStandalone = !isStandalone && platform.IOS;
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.beforeInstallPromptHandler = (event: any) => {
      console.log('beforeinstallprompt');

      // Prevent the mini-infobar from appearing
      event.preventDefault();
      this.deferredPrompt = event;
      this.pwaService.updateValue(true);
    };

    window.addEventListener('beforeinstallprompt', this.beforeInstallPromptHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('beforeinstallprompt', this.beforeInstallPromptHandler);
    this.pwaService.updateValue(false);
  }

  promptInstall() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt(); // Show the install prompt
      this.deferredPrompt.userChoice.then(() => {
        this.deferredPrompt = null;
        this.pwaService.updateValue(false);
      });
    }
  }

  showIosInstructions() {
    this.snackbarService.showInfo("To install this web app on your device, tap the Menu button and then 'Add to Home Screen' button");
  }
}
