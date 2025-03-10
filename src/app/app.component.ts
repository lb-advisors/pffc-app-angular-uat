import {
  ChangeDetectionStrategy,
  Component,
  isDevMode,
  OnInit,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { environment } from "src/environments/environment";
import { Meta, Title } from "@angular/platform-browser";
import { SwUpdate } from "@angular/service-worker";
import { LoadingIndicatorComponent } from "./components/loading-indicator/loading-indicator.component";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterOutlet,
    LoadingIndicatorComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  isDevMode: boolean = isDevMode();
  apiUrl = environment.apiUrl;
  showWarning = false;

  //isOrderForm: boolean = false;

  constructor(
    private title: Title,
    private meta: Meta,
    private swUpdate: SwUpdate,
  ) {
    // Check that UAT is not using the prod backend
    if (this.isDevMode && this.apiUrl.includes("prod")) {
      this.showWarning = true;
      alert("WARNING: Angular is in Dev mode but connected to production !!!");
    }
  }

  ngOnInit(): void {
    this.title.setTitle("Pacific Fresh Fish Company App");
    this.meta.addTags([
      {
        name: "description",
        content:
          "Pacific Fresh Fish Company application created by lb-advisors",
      },
      { name: "keywords", content: "PFF, lb-advisors, Allintel" },
      { name: "robots", content: "index, follow" },
    ]);

    this.checkForUpdate();
  }

  private checkForUpdate() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate
        .checkForUpdate()
        .then((isUpdateAvailable) => {
          if (isUpdateAvailable) {
            const confirmUpdate = confirm(
              "A new version is available. Do you want to load it?",
            );
            if (confirmUpdate) {
              this.swUpdate.activateUpdate().then(() => {
                window.location.reload();
              });
            }
          }
        })
        .catch((error) => {
          console.error("Error while checking for updates:", error);
        });
    }
  }
}
