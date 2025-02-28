import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { ProductsComponent } from "./components/products/products.component";
import { AuthGuard } from "./guards/auth.guard";
import { PasswordRequestComponent } from "./components/password-request/password-request.component";
import { PasswordResetComponent } from "./components/password-reset/password-reset.component";
import { CompanyTableComponent } from "./components/company/company-table/company-table.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    title: "Home",
    canActivate: [AuthGuard],
  },
  { path: "login", component: LoginComponent, title: "Login" },
  { path: "logout", component: LogoutComponent, title: "Logout" },
  {
    path: "password-request",
    component: PasswordRequestComponent,
    title: "Password Request",
  },
  {
    path: "password-reset/:token",
    component: PasswordResetComponent,
    title: "Password Reset",
  },
  {
    path: "products",
    component: ProductsComponent,
    title: "Products",
    canActivate: [AuthGuard],
  },
  {
    path: "test",
    component: CompanyTableComponent,
    title: "Company Test",
    canActivate: [AuthGuard],
  },

  { path: "**", redirectTo: "home" }, // Wildcard route to handle unmatched paths, redirect to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
