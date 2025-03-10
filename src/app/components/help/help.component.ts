import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: "app-help",
  standalone: true,
  imports: [MatCard, MatCardContent, MatToolbar],
  templateUrl: "./help.component.html",
  styleUrl: "./help.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpComponent {}
