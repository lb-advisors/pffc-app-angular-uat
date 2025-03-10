import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [MatCard, MatCardContent, MatToolbar],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}
