import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { ProductsComponent } from "./components/purchase-product/products.component";
import { AuthGuard } from "./guards/auth.guard";
import { PasswordRequestComponent } from "./components/password-request/password-request.component";
import { PasswordResetComponent } from "./components/password-reset/password-reset.component";
import { SidebarLayoutComponent } from "./components/sidebar-layout/sidebar-layout.component";
import { FishListComponent } from "./components/fish/fish-list/fish-list.component";
import { CategoryListComponent } from "./components/categoty/category-list/category-list.component";
import { UserListComponent } from "./components/user/user-list/user-list-component";
import { HelpComponent } from "./components/help/help.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { DataComponent } from "./components/data/data.component";
import { VendorListComponent } from "./components/vendor/vendor-list/vendor-list.component";
import { HarvestTypeListComponent } from "./components/harvest-type/harvest-type-list/harvest-type-list.component";
import { UnitTypeListComponent } from "./components/unit-type/unit-type-list/unit-type-list.component";
import { PurchaseProductListComponent } from "./components/purchase-product/purchase-product-list/purchase-product-list.component";
import { OriginListComponent } from "./components/origin/origin-list/origin-list.component";

const routes: Routes = [
  {
    path: "",
    component: SidebarLayoutComponent,
    children: [
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
      { path: "help", component: HelpComponent, title: "Help" },
      {
        path: "products",
        component: ProductsComponent,
        title: "Products",
        canActivate: [AuthGuard],
      },
      {
        path: "fish",
        component: FishListComponent,
        title: "Fish example",
        canActivate: [AuthGuard],
      },
      {
        path: "categories",
        component: CategoryListComponent,
        title: "Categories",
        canActivate: [AuthGuard],
      },
      {
        path: "origins",
        component: OriginListComponent,
        title: "Origins",
        canActivate: [AuthGuard],
      },
      {
        path: "unit-types",
        component: UnitTypeListComponent,
        title: "Unit Types",
        canActivate: [AuthGuard],
      },
      {
        path: "users",
        component: UserListComponent,
        title: "Users",
        canActivate: [AuthGuard],
      },
      {
        path: "vendors",
        component: VendorListComponent,
        title: "Vendors",
        canActivate: [AuthGuard],
      },
      {
        path: "profile",
        component: ProfileComponent,
        title: "Profile",
        canActivate: [AuthGuard],
      },
      {
        path: "data",
        component: DataComponent,
        title: "Data",
        canActivate: [AuthGuard],
      },
      {
        path: "purchase-products",
        component: PurchaseProductListComponent,
        title: "Purchase Product",
        canActivate: [AuthGuard],
      },
      {
        path: "harvest-types",
        component: HarvestTypeListComponent,
        title: "Harvest Types",
        canActivate: [AuthGuard],
      },

      { path: "**", redirectTo: "home" }, // Wildcard route to handle unmatched paths, redirect to log  in
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
