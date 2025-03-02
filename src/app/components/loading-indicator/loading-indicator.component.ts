// src/app/components/loading-indicator/loading-indicator.component.ts

import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LoadingService } from "../../services/loading.service";

@Component({
  selector: "app-loading-indicator",
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: "./loading-indicator.component.html",
  styleUrls: ["./loading-indicator.component.css"],
})
export class LoadingIndicatorComponent {
  loadingService = inject(LoadingService);
}
