import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { SnackbarService } from "../../services/snackbar.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LogoutComponent {
  constructor(
    private authService: AuthService,
    private snackbarService: SnackbarService,
  ) {
    this.authService.logout();
    this.snackbarService.showSuccess("You have been logged out");
  }
}
