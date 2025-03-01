import { AppComponent } from "./app/app.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideAnimations } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app/app-routing.module";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { GlobalErrorHandlerService } from "./app/services/global-error-handler.service";
import { ErrorHandler, importProvidersFrom, isDevMode } from "@angular/core";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AuthInterceptor } from "./app/interceptors/auth.interceptor";
import { provideServiceWorker } from "@angular/service-worker";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatSlideToggleModule,
      MatTableModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      MatMenuModule,
      MatSnackBarModule,
    ),
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideServiceWorker("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000",
    }),
  ],
}).catch((err) => console.error(err));
