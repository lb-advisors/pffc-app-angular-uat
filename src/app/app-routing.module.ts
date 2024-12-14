import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverRouteComponent } from './components/driver-route/driver-route.component';
import { HomeComponent } from './components/home/home.component';
import { OrderLinksComponent } from './components/order-links/order-links.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { OrderExistsComponent } from './components/order-exists/order-exists.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { DataComponent } from './components/data/data.component';
import { OrdersComponent } from './components/orders/orders.component';
import { VendorLinksComponent } from './components/preorder-links/preorder-links.component'; // Updated the import to match the renamed component
import { PreorderFormComponent } from './components/preorder-form/preorder-form.component'; // Import the new PreorderFormComponent
import { AuthGuard } from './guards/auth.guard';
import { PasswordRequestComponent } from './components/password-request/password-request.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home', canActivate: [AuthGuard] },
  { path: 'driver', component: DriverRouteComponent, title: "Drivers' Routes", canActivate: [AuthGuard] },
  { path: 'order-links', component: OrderLinksComponent, title: 'Order Links' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'logout', component: LogoutComponent, title: 'Logout' },
  { path: 'password-request', component: PasswordRequestComponent, title: 'Password Request' },
  { path: 'password-reset/:token', component: PasswordResetComponent, title: 'Password Reset' },
  { path: 'products', component: ProductsComponent, title: 'Products', canActivate: [AuthGuard] },
  { path: 'customer/:id/order-confirmation', component: OrderConfirmationComponent, title: 'Order Confirmation' },
  { path: 'customer/:id/order-exists', component: OrderExistsComponent, title: 'Order Exists' },
  { path: 'customer/:id/order-form', component: OrderFormComponent, title: 'Order Form' },
  { path: 'data', component: DataComponent, title: 'Data', canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, title: 'Orders', canActivate: [AuthGuard] },
  { path: 'preorder-links', component: VendorLinksComponent, title: 'Vendor Links', canActivate: [AuthGuard] },
  { path: 'preorder-form/:vendorId', component: PreorderFormComponent, title: 'Preorder Form' },
  { path: 'reports', component: ReportsComponent, title: 'Reports', canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' }, // Wildcard route to handle unmatched paths, redirect to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
