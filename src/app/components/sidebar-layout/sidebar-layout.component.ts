import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  ViewChild,
} from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-sidebar-layout",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    MatTooltipModule,
    NgOptimizedImage,
  ],
  templateUrl: "sidebar-layout.component.html",
  styleUrl: "sidebar-layout.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLayoutComponent {
  @ViewChild("drawer") drawer!: MatSidenav;

  authService = inject(AuthService);
  // Signal to track sidebar state
  sidebarOpened = signal(true);
  firstName = computed(() => this.authService.firstName());

  // Toggle sidebar open/closed
  toggleSidebar(): void {
    this.sidebarOpened.update((state) => !state);
  }
}
