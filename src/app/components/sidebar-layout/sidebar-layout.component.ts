import { Component, signal, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";

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
  ],
  templateUrl: "sidebar-layout.component.html",
  styleUrl: "sidebar-layout.component.css",
})
export class SidebarLayoutComponent {
  @ViewChild("drawer") drawer!: MatSidenav;

  // Signal to track sidebar state
  sidebarOpened = signal(true);

  // Toggle sidebar open/closed
  toggleSidebar(): void {
    this.sidebarOpened.update((state) => !state);
  }
}
