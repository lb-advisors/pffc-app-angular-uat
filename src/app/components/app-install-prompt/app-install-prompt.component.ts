import { Platform } from "@angular/cdk/platform";
import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Observable } from "rxjs";
import { PwaService } from "src/app/services/pwa.service";
import { SnackbarService } from "src/app/services/snackbar.service";
import { MatButton } from "@angular/material/button";

@Component({
  standalone: true,
  selector: "app-install-prompt",
  imports: [CommonModule, MatButton],
  templateUrl: "./app-install-prompt.component.html",
  styleUrls: ["./app-install-prompt.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInstallPromptComponent implements OnInit, OnDestroy {
  beforeInstallPromptHandler?: (event: BeforeInstallPromptEvent) => void;
  deferredPrompt: BeforeInstallPromptEvent | null = null;
  isPwa$: Observable<boolean>;
  isIosButNotPwa: boolean;
  isPwa: boolean;
  plat: boolean;

  constructor(
    private pwaService: PwaService,
    private snackbarService: SnackbarService,
    public platform: Platform,
  ) {
    this.isPwa$ = this.pwaService.isPwa$;
    this.isPwa = this.isRunningAsPWA();
    this.isIosButNotPwa = this.isIOS() && !this.isRunningAsPWA();
    this.plat = this.isIOS();
  }

  ngOnInit() {
    this.beforeInstallPromptHandler = (event: BeforeInstallPromptEvent) => {
      // Prevent the mini-infobar from appearing
      event.preventDefault();
      this.deferredPrompt = event;
      this.pwaService.updateValue(true);
    };

    window.addEventListener(
      "beforeinstallprompt",
      this.beforeInstallPromptHandler as EventListener,
    );
  }

  ngOnDestroy() {
    window.removeEventListener(
      "beforeinstallprompt",
      this.beforeInstallPromptHandler as EventListener,
    );
    this.pwaService.updateValue(false);
  }

  promptInstall() {
    if (this.deferredPrompt) {
      // Store the prompt() promise and handle it
      this.deferredPrompt
        .prompt()
        .then(() => {
          // After prompt() resolves, then handle the user choice
          return this.deferredPrompt?.userChoice;
        })
        .then(() => {
          this.deferredPrompt = null;
          this.pwaService.updateValue(false);
        });
    }
  }

  showIosInstructions() {
    this.snackbarService.showInfo(
      "To install this web app on your device, tap the Menu button and then 'Add to Home Screen' button",
      20000,
    );
  }

  private isIOS(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod|mac/.test(userAgent) || this.platform.IOS;
  }

  private isRunningAsPWA(): boolean {
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)",
    ).matches;
    const isIOSStandalone = (navigator as Navigator & { standalone?: boolean })
      .standalone;
    const isFullscreen = window.innerHeight === screen.height;

    return isStandalone || isIOSStandalone || isFullscreen;
  }
}

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;

  prompt(): Promise<void>;
}
