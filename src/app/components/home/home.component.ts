import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthService } from "src/app/services/auth.service";
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  standalone: true,
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  imports: [CommonModule, MatCard, MatCardContent, MatToolbar],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  username!: string | null;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.username = this.authService.getFullname();
  }

  navigateTo(page: string): void {
    void this.router.navigate([`/${page}`]);
  }

  logout(): void {
    this.authService.logout();
  }
}
