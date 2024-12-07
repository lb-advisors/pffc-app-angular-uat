import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PwaService } from 'src/app/services/pwa.service';

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

  constructor(private cdr: ChangeDetectorRef, public pwaService: PwaService) {
    this.isPwa$ = this.pwaService.isPwa$;
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.beforeInstallPromptHandler = (event: any) => {
      console.log('beforeinstallprompt');

      // Prevent the mini-infobar from appearing
      event.preventDefault();
      this.deferredPrompt = event;
      this.pwaService.updateValue(true);
      this.cdr.markForCheck();
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
}
