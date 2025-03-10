"use strict";
(self["webpackChunkdriver_routes"] = self["webpackChunkdriver_routes"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 205);
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/logout/logout.component */ 9543);
/* harmony import */ var _components_purchase_product_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/purchase-product/products.component */ 1592);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _components_password_request_password_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/password-request/password-request.component */ 5593);
/* harmony import */ var _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/password-reset/password-reset.component */ 6881);
/* harmony import */ var _components_sidebar_layout_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar-layout/sidebar-layout.component */ 421);
/* harmony import */ var _components_fish_fish_list_fish_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fish/fish-list/fish-list.component */ 6448);
/* harmony import */ var _components_categoty_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/categoty/category-list/category-list.component */ 3936);
/* harmony import */ var _components_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/user-list/user-list-component */ 3046);
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/help/help.component */ 8729);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ 1245);
/* harmony import */ var _components_data_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/data/data.component */ 2871);
/* harmony import */ var _components_vendor_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/vendor/vendor-list/vendor-list.component */ 4724);
/* harmony import */ var _components_harvest_type_harvest_type_list_harvest_type_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/harvest-type/harvest-type-list/harvest-type-list.component */ 4818);
/* harmony import */ var _components_unit_type_unit_type_list_unit_type_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/unit-type/unit-type-list/unit-type-list.component */ 7021);
/* harmony import */ var _components_purchase_product_purchase_product_list_purchase_product_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/purchase-product/purchase-product-list/purchase-product-list.component */ 6123);
/* harmony import */ var _components_origin_origin_list_origin_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/origin/origin-list/origin-list.component */ 1008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7580);






















const routes = [{
  path: "",
  component: _components_sidebar_layout_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_7__.SidebarLayoutComponent,
  children: [{
    path: "home",
    component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
    title: "Home",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "login",
    component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
    title: "Login"
  }, {
    path: "logout",
    component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__.LogoutComponent,
    title: "Logout"
  }, {
    path: "password-request",
    component: _components_password_request_password_request_component__WEBPACK_IMPORTED_MODULE_5__.PasswordRequestComponent,
    title: "Password Request"
  }, {
    path: "password-reset/:token",
    component: _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_6__.PasswordResetComponent,
    title: "Password Reset"
  }, {
    path: "help",
    component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_11__.HelpComponent,
    title: "Help"
  }, {
    path: "products",
    component: _components_purchase_product_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent,
    title: "Products",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "fish",
    component: _components_fish_fish_list_fish_list_component__WEBPACK_IMPORTED_MODULE_8__.FishListComponent,
    title: "Fish example",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "categories",
    component: _components_categoty_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_9__.CategoryListComponent,
    title: "Categories",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "origins",
    component: _components_origin_origin_list_origin_list_component__WEBPACK_IMPORTED_MODULE_18__.OriginListComponent,
    title: "Origins",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "unit-types",
    component: _components_unit_type_unit_type_list_unit_type_list_component__WEBPACK_IMPORTED_MODULE_16__.UnitTypeListComponent,
    title: "Unit Types",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "users",
    component: _components_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__.UserListComponent,
    title: "Users",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "vendors",
    component: _components_vendor_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_14__.VendorListComponent,
    title: "Vendors",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "profile",
    component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__.ProfileComponent,
    title: "Profile",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "data",
    component: _components_data_data_component__WEBPACK_IMPORTED_MODULE_13__.DataComponent,
    title: "Data",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "purchase-products",
    component: _components_purchase_product_purchase_product_list_purchase_product_list_component__WEBPACK_IMPORTED_MODULE_17__.PurchaseProductListComponent,
    title: "Purchase Product",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "harvest-types",
    component: _components_harvest_type_harvest_type_list_harvest_type_list_component__WEBPACK_IMPORTED_MODULE_15__.HarvestTypeListComponent,
    title: "Harvest Types",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "**",
    redirectTo: "home"
  } // Wildcard route to handle unmatched paths, redirect to log  in
  ]
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loading-indicator/loading-indicator.component */ 8525);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ 6140);










class AppComponent {
  //isOrderForm: boolean = false;
  constructor(title, meta, swUpdate) {
    this.title = title;
    this.meta = meta;
    this.swUpdate = swUpdate;
    this.isDevMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)();
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.showWarning = false;
    // Check that UAT is not using the prod backend
    if (this.isDevMode && this.apiUrl.includes("prod")) {
      this.showWarning = true;
      alert("WARNING: Angular is in Dev mode but connected to production !!!");
    }
  }
  ngOnInit() {
    this.title.setTitle("Pacific Fresh Fish Company App");
    this.meta.addTags([{
      name: "description",
      content: "Pacific Fresh Fish Company application created by lb-advisors"
    }, {
      name: "keywords",
      content: "PFF, lb-advisors, Allintel"
    }, {
      name: "robots",
      content: "index, follow"
    }]);
    this.checkForUpdate();
  }
  checkForUpdate() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().then(isUpdateAvailable => {
        if (isUpdateAvailable) {
          const confirmUpdate = confirm("A new version is available. Do you want to load it?");
          if (confirmUpdate) {
            this.swUpdate.activateUpdate().then(() => {
              window.location.reload();
            });
          }
        }
      }).catch(error => {
        console.error("Error while checking for updates:", error);
      });
    }
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_4__.SwUpdate));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loading-indicator")(2, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_1__.LoadingIndicatorComponent],
      styles: [".tabs[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n  margin-top: 1em;\n}\n\n.active-link[_ngcontent-%COMP%] {\n  background-color: #d3d3d3;\n  color: #333 !important;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-decoration: none;\n  color: #333;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n}\n\na[_ngcontent-%COMP%]:hover, \na[_ngcontent-%COMP%]:active {\n  color: #333;\n}\n\na.active-link[_ngcontent-%COMP%] {\n  background-color: #d3d3d3 !important;\n}\n\n.valign-center[_ngcontent-%COMP%] {\n  display: inline-flex;\n  vertical-align: middle;\n  align-items: center;\n}\n\n#a[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n#a[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  width: 100%;\n  padding: 5px 0;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 100%;\n  color: #333;\n\n  \n\n}\n\n\n.nav-links-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n\n  \n\n  align-items: center;\n\n  \n\n  width: 100%;\n}\n\n.gs-logo[_ngcontent-%COMP%] {\n  height: 50px;\n\n  \n\n  border-radius: 10%;\n}\n\n.gs-logo-link[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  min-height: 95%;\n}\n\n.home-link[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-right: 5px;\n}\n\n.dev-mode[_ngcontent-%COMP%] {\n  color: darkblue;;\n}\n\n.warning[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxXQUFXOztFQUVYLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCOztFQUV2QixrQ0FBa0M7RUFDbEMsbUJBQW1COztFQUVuQixnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uYWN0aXZlLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5hOmhvdmVyLFxuYTphY3RpdmUge1xuICBjb2xvcjogIzMzMztcbn1cblxuYS5hY3RpdmUtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDMgIWltcG9ydGFudDtcbn1cblxuLnZhbGlnbi1jZW50ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2Ege1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbiNhIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5tYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMzMzM7XG5cbiAgLyogRGFyayBncmV5IHRleHQgY29sb3IgKi9cbn1cblxuXG4ubmF2LWxpbmtzLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC8qIENlbnRlciB0aGUgbGlua3MgaG9yaXpvbnRhbGx5ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLyogQ2VudGVyIHRoZSBsaW5rcyB2ZXJ0aWNhbGx5ICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZ3MtbG9nbyB7XG4gIGhlaWdodDogNTBweDtcblxuICAvKiBJbmNyZWFzZSB0aGUgc2l6ZSAqL1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbi5ncy1sb2dvLWxpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDk1JTtcbn1cblxuLmhvbWUtbGluayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5uYXYtaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZGV2LW1vZGUge1xuICBjb2xvcjogZGFya2JsdWU7O1xufVxuXG4ud2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 4535:
/*!*******************************************************************************!*\
  !*** ./src/app/components/app-install-prompt/app-install-prompt.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInstallPromptComponent: () => (/* binding */ AppInstallPromptComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_pwa_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/pwa.service */ 366);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);







function AppInstallPromptComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppInstallPromptComponent_Conditional_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.promptInstall());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Install as an Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AppInstallPromptComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppInstallPromptComponent_Conditional_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showIosInstructions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Install as an Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class AppInstallPromptComponent {
  constructor(pwaService, snackbarService, platform) {
    this.pwaService = pwaService;
    this.snackbarService = snackbarService;
    this.platform = platform;
    this.deferredPrompt = null;
    this.isPwa$ = this.pwaService.isPwa$;
    this.isPwa = this.isRunningAsPWA();
    this.isIosButNotPwa = this.isIOS() && !this.isRunningAsPWA();
    this.plat = this.isIOS();
  }
  ngOnInit() {
    this.beforeInstallPromptHandler = event => {
      // Prevent the mini-infobar from appearing
      event.preventDefault();
      this.deferredPrompt = event;
      this.pwaService.updateValue(true);
    };
    window.addEventListener("beforeinstallprompt", this.beforeInstallPromptHandler);
  }
  ngOnDestroy() {
    window.removeEventListener("beforeinstallprompt", this.beforeInstallPromptHandler);
    this.pwaService.updateValue(false);
  }
  promptInstall() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt(); // Show the install prompt
      this.deferredPrompt.userChoice.then(() => {
        this.deferredPrompt = null;
        this.pwaService.updateValue(false);
      });
    }
  }
  showIosInstructions() {
    this.snackbarService.showInfo("To install this web app on your device, tap the Menu button and then 'Add to Home Screen' button", 20000);
  }
  isIOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod|mac/.test(userAgent) || this.platform.IOS;
  }
  isRunningAsPWA() {
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    const isIOSStandalone = navigator.standalone === true;
    const isFullscreen = window.innerHeight === screen.height;
    return isStandalone || isIOSStandalone || isFullscreen;
  }
  static {
    this.ɵfac = function AppInstallPromptComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppInstallPromptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_pwa_service__WEBPACK_IMPORTED_MODULE_0__.PwaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppInstallPromptComponent,
      selectors: [["app-install-prompt"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 3,
      consts: [[1, "install-banner"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function AppInstallPromptComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppInstallPromptComponent_Conditional_0_Template, 3, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppInstallPromptComponent_Conditional_2_Template, 3, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.isPwa$) === true ? 0 : ctx.isIosButNotPwa ? 2 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton],
      styles: [".install-banner[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: inherit;\n  background-color: #036;\n  padding: 8px;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:hover {\n  background-color: #002855;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHAtaW5zdGFsbC1wcm9tcHQvYXBwLWluc3RhbGwtcHJvbXB0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3RhbGwtYmFubmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2O1xuICBwYWRkaW5nOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI4NTU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 9120:
/*!**********************************************************************************!*\
  !*** ./src/app/components/categoty/category-dialog/category-dialog.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryDialogComponent: () => (/* binding */ CategoryDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
// src/app/components/category-dialog/unit-type-dialog.component.ts














function CategoryDialogComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class CategoryDialogComponent {
  constructor() {
    this.dialogTitle = "";
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA);
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
  }
  ngOnInit() {
    this.initForm();
    this.dialogTitle = this.data.mode === "add" ? "Add New Category" : "Edit Category";
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.categoryForm.valid) {
      this.dialogRef.close({
        id: this.data.category?.id,
        ...this.categoryForm.getRawValue()
      });
    }
  }
  initForm() {
    this.categoryForm = this.fb.group({
      categoryName: [this.data.category?.categoryName || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  static {
    this.ɵfac = function CategoryDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CategoryDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryDialogComponent,
      selectors: [["app-category-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 5,
      consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], ["appearance", "fill", 1, "full-width"], ["formControlName", "categoryName", "matInput", "", "placeholder", "Enter category name"], [4, "ngIf"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"]],
      template: function CategoryDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CategoryDialogComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "mat-form-field", 2)(5, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CategoryDialogComponent_mat_error_8_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 5)(10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDialogComponent_Template_button_click_10_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.categoryForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.categoryForm.get("categoryName")) == null ? null : tmp_2_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.categoryForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.mode === "add" ? "Add" : "Update", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["\n\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXRlZ290eS9jYXRlZ29yeS1kaWFsb2cvY2F0ZWdvcnktZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEOztBQUU5RDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcmMvYXBwL2NvbXBvbmVudHMvZmlzaC1kaWFsb2cvZmlzaC1kaWFsb2cuY29tcG9uZW50LnNjc3MgKi9cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3936:
/*!******************************************************************************!*\
  !*** ./src/app/components/categoty/category-list/category-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryListComponent: () => (/* binding */ CategoryListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 7989);
/* harmony import */ var _confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirmation-dialog/confirmation-service.service */ 6620);
/* harmony import */ var _category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category-dialog/category-dialog.component */ 9120);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category.service */ 237);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/snackbar.service */ 2365);
/* harmony import */ var _services_search_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/search-table.service */ 2835);
// src/app/components/category-list/unit-type-list.component.ts



























function CategoryListComponent_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryListComponent_mat_icon_10_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const searchInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.clearSearch(searchInput_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 23)(1, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CategoryListComponent_th_21_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r2.toggleAllRows() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
  }
}
function CategoryListComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25)(1, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CategoryListComponent_td_22_Template_mat_checkbox_change_1_listener($event) {
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r2.selection.toggle(row_r7) : null);
    })("click", function CategoryListComponent_td_22_Template_mat_checkbox_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r7));
  }
}
function CategoryListComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", category_r8.id, "");
  }
}
function CategoryListComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", category_r9.categoryName, "");
  }
}
function CategoryListComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryListComponent_td_31_Template_button_click_1_listener() {
      const category_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openEditDialog(category_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryListComponent_td_31_Template_button_click_4_listener() {
      const category_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.deleteCategory(category_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function CategoryListComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 31);
  }
}
function CategoryListComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 32);
  }
}
function CategoryListComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("No results matching \"", ctx_r2.searchQuery(), "");
  }
}
function CategoryListComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Category data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class CategoryListComponent {
  constructor() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource([]);
    this.displayedColumns = ["select", "id", "name", "actions"];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
    this.searchQuery = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)("");
    // Entity type identifier for search service
    this.ENTITY_TYPE = "category";
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.categoryService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService);
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog);
    this.snackBarService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService);
    this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmationService);
    this.searchTableService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_search_table_service__WEBPACK_IMPORTED_MODULE_4__.SearchTableService);
    // Effect to update the table data whenever the categoryes signal changes
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.effect)(() => {
      this.updateTable(this.categoryService.categories());
    });
  }
  ngOnInit() {
    // No need to call loadCategoryes() as the service loads data on construction
    this.configureDataSource();
    this.setupSearch();
  }
  ngAfterViewInit() {
    // Connect sort after view initializes and configure custom sorting
    this.configureSort();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchTableService.destroySearch(this.ENTITY_TYPE);
  }
  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];
      // Handle different data types for sorting
      if (typeof value === "string") {
        return value.toLowerCase(); // Case-insensitive string sorting
      } else {
        return value; // Default for numbers and other types
      }
    };
  }
  /**
   * Set up the search functionality
   */
  setupSearch() {
    this.searchTableService.getSearchObservable(this.ENTITY_TYPE).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(searchValue => {
      this.searchQuery.set(searchValue);
      this.dataSource.filter = searchValue.trim().toLowerCase();
    });
  }
  /**
   * Configure the data source with custom filter predicate
   */
  configureDataSource() {
    // Define custom filter logic that searches across all fields
    this.dataSource.filterPredicate = (category, filter) => {
      const searchStr = filter.toLowerCase();
      return category.id.toString().includes(searchStr) || category.categoryName.toLowerCase().includes(searchStr);
    };
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows && numRows > 0;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(_category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CategoryDialogComponent, {
      width: "400px",
      data: {
        mode: "add"
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        this.categoryService.createCategory(result);
        this.snackBarService.showSuccess("Category added successfully");
      }
    });
  }
  openEditDialog(category) {
    const dialogRef = this.dialog.open(_category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CategoryDialogComponent, {
      width: "400px",
      data: {
        mode: "edit",
        category
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        const update = {
          categoryName: result.categoryName
        };
        this.categoryService.updateCategory(category.id, update);
        this.snackBarService.showSuccess("Category updated successfully");
      }
    });
  }
  deleteCategory(category) {
    this.confirmationService.confirmDeletion(`category "${category.categoryName}"`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.categoryService.deleteCategory(category.id);
        this.snackBarService.showSuccess("Category deleted successfully");
      }
    });
  }
  deleteSelectedCategories() {
    const selectedIds = this.selection.selected.map(category => category.id);
    if (selectedIds.length === 0) {
      this.snackBarService.showError("No category selected");
      return;
    }
    this.confirmationService.confirmBulkDeletion(selectedIds.length, "category").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.categoryService.deleteManyCategory(selectedIds);
        this.selection.clear();
        this.snackBarService.showSuccess("Selected category deleted successfully");
      }
    });
  }
  onSearch(event) {
    const value = event.target?.value;
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, value);
  }
  /**
   * Clear the search input
   */
  clearSearch(inputElement) {
    inputElement.value = "";
    this.searchQuery.set("");
    this.dataSource.filter = "";
    inputElement.focus();
  }
  // Function to update table data
  updateTable(categories) {
    this.dataSource.data = categories;
    // Reapply current filter
    if (this.searchQuery()) {
      this.dataSource.filter = this.searchQuery().trim().toLowerCase();
    }
    // Maintain sort state after data changes
    if (this.sort && this.dataSource.sort !== this.sort) {
      this.configureSort();
    }
  }
  static {
    this.ɵfac = function CategoryListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CategoryListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CategoryListComponent,
      selectors: [["app-category-list"]],
      viewQuery: function CategoryListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 36,
      vars: 10,
      consts: [["searchInput", ""], ["color", "primary"], [1, "toolbar-spacer"], [1, "search-container", "margin-right"], [1, "search-icon"], ["placeholder", "Search...", "type", "text", 3, "input", "value"], ["class", "clear-search", 3, "click", 4, "ngIf"], ["color", "accent", "mat-mini-fab", "", "matTooltip", "Add new Category", 1, "margin-right", 3, "click"], ["color", "accent", "mat-raised-button", "", 3, "click", "disabled"], [1, "mat-elevation-z8", "main-container"], ["mat-table", "", "matSort", "", "matSortActive", "categoryName", "matSortDirection", "asc", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "categoryName", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "no-data", 4, "ngIf"], [1, "clear-search", 3, "click"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "change", "click", "checked"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-cell", "", "mat-sort-header", "categoryName"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "warn", "mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data"]],
      template: function CategoryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 1)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3)(6, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function CategoryListComponent_Template_input_input_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onSearch($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CategoryListComponent_mat_icon_10_Template, 2, 0, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryListComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.openAddDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryListComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.deleteSelectedCategories());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 9)(19, "table", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CategoryListComponent_th_21_Template, 2, 2, "th", 12)(22, CategoryListComponent_td_22_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, CategoryListComponent_th_24_Template, 2, 0, "th", 15)(25, CategoryListComponent_td_25_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](26, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, CategoryListComponent_th_27_Template, 2, 0, "th", 17)(28, CategoryListComponent_td_28_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](29, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, CategoryListComponent_th_30_Template, 2, 0, "th", 12)(31, CategoryListComponent_td_31_Template, 7, 0, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, CategoryListComponent_tr_32_Template, 1, 0, "tr", 19)(33, CategoryListComponent_tr_33_Template, 1, 0, "tr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, CategoryListComponent_div_34_Template, 3, 1, "div", 21)(35, CategoryListComponent_div_35_Template, 3, 0, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.searchQuery());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.searchQuery().length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Delete Selected (", ctx.selection.selected.length, ") ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 0 && ctx.dataSource.filteredData.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatMiniFabButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbar, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: rgb(0 0 0 / 4%);\n}\n\n\n\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin: 16px 0;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-style: italic;\n  color: rgb(0 0 0 / 54%);\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f1f1;\n  border-radius: 20px;\n  padding: 5px 10px;\n  width: 200px;\n  position: relative; \n\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: gray;\n  margin-right: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n\n\n\n.clear-search[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: gray;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXRlZ290eS9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0IsRUFBRSwyQ0FBMkM7QUFDakU7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50b29sYmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBBZGQgdGhpcyBmb3IgYm9sZCB0YWJsZSBoZWFkZXJzICovXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0JSk7XG59XG5cbi8qIFRoaXMgY2xhc3MgaXMgdW51c2VkIGFuZCBjYW4gYmUgcmVtb3ZlZCAqL1xuLnRhYmxlLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG4ubm8tZGF0YSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogcmdiKDAgMCAwIC8gNTQlKTtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZGVkIGZvciBwb3NpdGlvbmluZyB0aGUgY2xlYXIgYnV0dG9uICovXG59XG5cbi5tYXJnaW4tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBBZGQgdGhpcyBmb3IgdGhlIGNsZWFyIGJ1dHRvbiAqL1xuLmNsZWFyLXNlYXJjaCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGdyYXk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 237:
/*!*********************************************************!*\
  !*** ./src/app/components/categoty/category.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryService: () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
// src/app/services/unit-type.service.ts




class CategoryService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/categories`;
    // State signals
    this.categoryList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    // Exposed computed signals
    this.categories = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.categoryList());
    // Load category data immediately when service is injected
    this.loadAllCategories();
  }
  /**
   * Load all category from the API and update the signal
   */
  loadAllCategories() {
    this.http.get(this.baseUrl).subscribe({
      next: data => this.categoryList.set(data)
    });
  }
  /**
   * Get a single category by ID
   */
  getCategoryById(id) {
    return this.categoryList().find(category => category.id === id);
  }
  /**
   * Create a new category
   */
  createCategory(category) {
    this.http.post(this.baseUrl, category).subscribe({
      next: newCategory => {
        // Update the signal with the new category
        this.categoryList.update(list => [...list, newCategory]);
      }
    });
  }
  /**
   * Update an existing category
   */
  updateCategory(id, categoryUpdate) {
    this.http.patch(`${this.baseUrl}/${id}`, categoryUpdate).subscribe({
      next: updatedCategory => {
        // Update the specific category in the list
        this.categoryList.update(list => list.map(category => category.id === id ? updatedCategory : category));
      }
    });
  }
  /**
   * Delete a category by ID
   */
  deleteCategory(id) {
    this.http.delete(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted category from the list
        this.categoryList.update(list => list.filter(category => category.id !== id));
      }
    });
  }
  /**
   * Delete multiple category by IDs
   */
  deleteManyCategory(ids) {
    if (ids.length === 0) return;
    this.http.delete(`${this.baseUrl}/bulk`, {
      body: {
        ids
      }
    }).subscribe({
      next: () => {
        // Remove all deleted category from the list
        this.categoryList.update(list => list.filter(category => !ids.includes(category.id)));
      }
    });
  }
  static {
    this.ɵfac = function CategoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CategoryService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CategoryService,
      factory: CategoryService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 8257:
/*!*********************************************************************************!*\
  !*** ./src/app/components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationDialogComponent: () => (/* binding */ ConfirmationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
// src/app/components/confirmation-dialog/confirmation-dialog.component.ts







class ConfirmationDialogComponent {
  constructor() {
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA);
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef);
    // Set default values if not provided
    this.data.confirmButtonText = this.data.confirmButtonText || "Confirm";
    this.data.cancelButtonText = this.data.cancelButtonText || "Cancel";
    this.data.confirmButtonColor = this.data.confirmButtonColor || "warn";
  }
  onConfirm() {
    this.dialogRef.close(true);
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  static {
    this.ɵfac = function ConfirmationDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfirmationDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmationDialogComponent,
      selectors: [["app-confirmation-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 5,
      consts: [["mat-dialog-title", ""], [3, "innerHTML"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", 3, "click", "color"]],
      template: function ConfirmationDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 2)(5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_5_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_7_listener() {
            return ctx.onConfirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.cancelButtonText, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.data.confirmButtonColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.confirmButtonText, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
      styles: ["\n\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 300px;\n  margin-bottom: 16px;\n}\n\np[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7O0FBRTlFO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MgKi9cblxubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxucCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 6620:
/*!********************************************************************************!*\
  !*** ./src/app/components/confirmation-dialog/confirmation-service.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationService: () => (/* binding */ ConfirmationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation-dialog.component */ 8257);
// src/app/services/confirmation.service.ts




class ConfirmationService {
  constructor() {
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog);
  }
  /**
   * Opens a confirmation dialog
   * @param data Configuration data for the dialog
   * @returns An Observable that resolves to true if confirmed, false otherwise
   */
  confirm(data) {
    const dialogRef = this.dialog.open(_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationDialogComponent, {
      width: "400px",
      disableClose: true,
      data
    });
    return dialogRef.afterClosed();
  }
  /**
   * Convenience method for delete confirmations
   * @param itemName The name of the item being deleted
   * @returns An Observable that resolves to true if confirmed, false otherwise
   */
  confirmDeletion(itemName = "this item") {
    return this.confirm({
      title: "Confirm Deletion",
      message: `Are you sure you want to delete ${itemName}? This action cannot be undone.`,
      confirmButtonText: "Delete",
      confirmButtonColor: "warn"
    });
  }
  /**
   * Convenience method for bulk delete confirmations
   * @param count The number of items being deleted
   * @param itemType The type of items being deleted (e.g., 'fish', 'records')
   * @returns An Observable that resolves to true if confirmed, false otherwise
   */
  confirmBulkDeletion(count, itemType = "items") {
    return this.confirm({
      title: "Confirm Bulk Deletion",
      message: `Are you sure you want to delete ${count} ${itemType}? This action cannot be undone.`,
      confirmButtonText: "Delete All",
      confirmButtonColor: "warn"
    });
  }
  static {
    this.ɵfac = function ConfirmationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfirmationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ConfirmationService,
      factory: ConfirmationService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 2871:
/*!***************************************************!*\
  !*** ./src/app/components/data/data.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataComponent: () => (/* binding */ DataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);

















function DataComponent_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataComponent_mat_icon_10_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const searchInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.clearSearch(searchInput_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DataComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DataComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
  }
}
function DataComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DataComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.description);
  }
}
function DataComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DataComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23)(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataComponent_td_21_Template_button_click_1_listener() {
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.navigateTo(item_r8.route));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function DataComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
  }
}
function DataComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
  }
}
function DataComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No results matching \"", ctx_r2.searchQuery(), "");
  }
}
function DataComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class DataComponent {
  constructor(router) {
    this.router = router;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource([]);
    this.displayedColumns = ["name", "description", "actions"];
    this.searchQuery = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)("");
    // Hard-coded data array
    this.DATA = [{
      name: "Customers",
      description: "List of customers",
      route: "/customers"
    }, {
      name: "Vendors",
      description: "List of vendors",
      route: "/vendors"
    }, {
      name: "Purchase Products",
      description: "List of purchase products",
      route: "/purchase-products"
    }, {
      name: "Sale products",
      description: "List of sale products",
      route: "/settings"
    }, {
      name: "Category",
      description: "List of categories",
      route: "/categories"
    }, {
      name: "Origin",
      description: "List of origins",
      route: "/origins"
    }, {
      name: "Harvest Type",
      description: "List of harvest types",
      route: "/harvest-types"
    }];
  }
  ngOnInit() {
    this.dataSource.data = this.DATA;
    this.configureDataSource();
  }
  ngAfterViewInit() {
    this.configureSort();
  }
  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];
      return typeof value === "string" ? value.toLowerCase() : value;
    };
  }
  /**
   * Configure the data source with custom filter predicate
   */
  configureDataSource() {
    this.dataSource.filterPredicate = (data, filter) => {
      const searchStr = filter.toLowerCase();
      return data.name.toLowerCase().includes(searchStr) || data.description.toLowerCase().includes(searchStr);
    };
  }
  /**
   * Navigate to the specified route
   */
  navigateTo(route) {
    this.router.navigate([route]);
  }
  /**
   * Handle search input changes
   */
  onSearch(event) {
    const value = event.target?.value;
    this.searchQuery.set(value);
    this.dataSource.filter = value.trim().toLowerCase();
  }
  /**
   * Clear the search input
   */
  clearSearch(inputElement) {
    inputElement.value = "";
    this.searchQuery.set("");
    this.dataSource.filter = "";
    inputElement.focus();
  }
  static {
    this.ɵfac = function DataComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DataComponent,
      selectors: [["app-data"]],
      viewQuery: function DataComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 26,
      vars: 8,
      consts: [["searchInput", ""], ["color", "primary"], [1, "toolbar-spacer"], [1, "search-container", "margin-right"], [1, "search-icon"], ["placeholder", "Search...", "type", "text", 3, "input", "value"], ["class", "clear-search", 3, "click", 4, "ngIf"], [1, "mat-elevation-z8", "main-container"], ["mat-table", "", "matSort", "", "matSortActive", "name", "matSortDirection", "asc", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "action-buttons", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["class", "data-row", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "no-data", 4, "ngIf"], [1, "clear-search", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-cell", "", 1, "action-buttons"], ["color", "primary", "mat-icon-button", "", "matTooltip", "View", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "data-row"], [1, "no-data"]],
      template: function DataComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 1)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data Explorer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DataComponent_Template_input_input_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSearch($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DataComponent_mat_icon_10_Template, 2, 0, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "table", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DataComponent_th_14_Template, 2, 0, "th", 10)(15, DataComponent_td_15_Template, 2, 1, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DataComponent_th_17_Template, 2, 0, "th", 10)(18, DataComponent_td_18_Template, 2, 1, "td", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DataComponent_th_20_Template, 2, 0, "th", 14)(21, DataComponent_td_21_Template, 4, 0, "td", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DataComponent_tr_22_Template, 1, 0, "tr", 16)(23, DataComponent_tr_23_Template, 1, 0, "tr", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DataComponent_div_24_Template, 3, 1, "div", 18)(25, DataComponent_div_25_Template, 3, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.searchQuery());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchQuery().length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 0 && ctx.dataSource.filteredData.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSortHeader],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {\n  padding-right: 50px;\n}\n\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background-color: rgb(0 0 0 / 4%);\n}\n\n.no-data[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-style: italic;\n  color: rgb(0 0 0 / 54%);\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f1f1;\n  border-radius: 20px;\n  padding: 5px 10px;\n  width: 200px;\n  position: relative; \n\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: gray;\n  margin-right: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n\n.clear-search[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: gray;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXRhL2RhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQixFQUFFLDJDQUEyQztBQUNqRTs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItc3BhY2VyIHtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLm1hdC1tZGMtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gNCUpO1xufVxuXG4ubm8tZGF0YSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogcmdiKDAgMCAwIC8gNTQlKTtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZGVkIGZvciBwb3NpdGlvbmluZyB0aGUgY2xlYXIgYnV0dG9uICovXG59XG5cbi5tYXJnaW4tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xlYXItc2VhcmNoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 7588:
/*!**********************************************************************!*\
  !*** ./src/app/components/fish/fish-dialog/fish-dialog.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FishDialogComponent: () => (/* binding */ FishDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
// src/app/components/fish-dialog/unit-type-dialog.component.ts














function FishDialogComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FishDialogComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class FishDialogComponent {
  constructor() {
    this.dialogTitle = "";
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA);
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
  }
  ngOnInit() {
    this.initForm();
    this.dialogTitle = this.data.mode === "add" ? "Add New Fish" : "Edit Fish";
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.fishForm.valid) {
      this.dialogRef.close({
        id: this.data.fish?.id,
        ...this.fishForm.getRawValue()
      });
    }
  }
  initForm() {
    this.fishForm = this.fb.group({
      name: [{
        value: this.data.fish?.name || "",
        disabled: this.data.mode === "edit"
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      description: [this.data.fish?.description || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  static {
    this.ɵfac = function FishDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FishDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FishDialogComponent,
      selectors: [["app-fish-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 19,
      vars: 6,
      consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], ["appearance", "fill", 1, "full-width"], ["formControlName", "name", "matInput", "", "placeholder", "Enter fish name"], [4, "ngIf"], ["formControlName", "description", "matInput", "", "placeholder", "Enter fish description", "rows", "4"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"]],
      template: function FishDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FishDialogComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "mat-form-field", 2)(5, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FishDialogComponent_mat_error_8_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 2)(10, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FishDialogComponent_mat_error_13_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-dialog-actions", 6)(15, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FishDialogComponent_Template_button_click_15_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fishForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.fishForm.get("name")) == null ? null : tmp_2_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.fishForm.get("description")) == null ? null : tmp_3_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.fishForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.mode === "add" ? "Add" : "Update", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["\n\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9maXNoL2Zpc2gtZGlhbG9nL2Zpc2gtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEOztBQUU5RDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcmMvYXBwL2NvbXBvbmVudHMvZmlzaC1kaWFsb2cvZmlzaC1kaWFsb2cuY29tcG9uZW50LnNjc3MgKi9cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6448:
/*!******************************************************************!*\
  !*** ./src/app/components/fish/fish-list/fish-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FishListComponent: () => (/* binding */ FishListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 7989);
/* harmony import */ var _confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirmation-dialog/confirmation-service.service */ 6620);
/* harmony import */ var _fish_dialog_fish_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fish-dialog/fish-dialog.component */ 7588);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _fish_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fish.service */ 423);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/snackbar.service */ 2365);
/* harmony import */ var _services_search_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/search-table.service */ 2835);
// src/app/components/fish-list/unit-type-list.component.ts



























function FishListComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 22)(1, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FishListComponent_th_19_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r1.toggleAllRows() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected());
  }
}
function FishListComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 24)(1, "mat-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FishListComponent_td_20_Template_mat_checkbox_change_1_listener($event) {
      const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r1.selection.toggle(row_r4) : null);
    })("click", function FishListComponent_td_20_Template_mat_checkbox_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r1.selection.isSelected(row_r4));
  }
}
function FishListComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FishListComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fish_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", fish_r5.id, "");
  }
}
function FishListComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FishListComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fish_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", fish_r6.name, "");
  }
}
function FishListComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FishListComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fish_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", fish_r7.description, "");
  }
}
function FishListComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FishListComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 24)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FishListComponent_td_32_Template_button_click_1_listener() {
      const fish_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openEditDialog(fish_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FishListComponent_td_32_Template_button_click_4_listener() {
      const fish_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteFish(fish_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function FishListComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 29);
  }
}
function FishListComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 30);
  }
}
function FishListComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 31)(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" No results matching \"", ctx_r1.searchQuery(), "\" ");
  }
}
function FishListComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No fish data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class FishListComponent {
  constructor() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource([]);
    this.displayedColumns = ["select", "id", "name", "description", "actions"];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
    this.searchQuery = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)("");
    // Entity type identifier for search service
    this.ENTITY_TYPE = "fish";
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.fishService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_fish_service__WEBPACK_IMPORTED_MODULE_2__.FishService);
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog);
    this.snackBarService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService);
    this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmationService);
    this.searchTableService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_search_table_service__WEBPACK_IMPORTED_MODULE_4__.SearchTableService);
    // Effect to update the table data whenever the fishes signal changes
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.effect)(() => {
      this.updateTable(this.fishService.fishes());
    });
  }
  ngOnInit() {
    // No need to call loadFishes() as the service loads data on construction
    this.configureDataSource();
    this.setupSearch();
  }
  ngAfterViewInit() {
    // Connect sort after view initializes and configure custom sorting
    this.configureSort();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchTableService.destroySearch(this.ENTITY_TYPE);
  }
  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];
      // Handle different data types for sorting
      if (typeof value === "string") {
        return value.toLowerCase(); // Case-insensitive string sorting
      } else {
        return value; // Default for numbers and other types
      }
    };
  }
  /**
   * Set up the search functionality
   */
  setupSearch() {
    this.searchTableService.getSearchObservable(this.ENTITY_TYPE).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(searchValue => {
      this.searchQuery.set(searchValue);
      this.dataSource.filter = searchValue.trim().toLowerCase();
    });
  }
  /**
   * Configure the data source with custom filter predicate
   */
  configureDataSource() {
    // Define custom filter logic that searches across all fields
    this.dataSource.filterPredicate = (fish, filter) => {
      const searchStr = filter.toLowerCase();
      return fish.id.toString().includes(searchStr) || fish.name.toLowerCase().includes(searchStr) || fish.description.toLowerCase().includes(searchStr);
    };
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows && numRows > 0;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(_fish_dialog_fish_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FishDialogComponent, {
      width: "400px",
      data: {
        mode: "add"
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        this.fishService.createFish(result);
        this.snackBarService.showSuccess("Fish added successfully");
      }
    });
  }
  openEditDialog(fish) {
    const dialogRef = this.dialog.open(_fish_dialog_fish_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FishDialogComponent, {
      width: "400px",
      data: {
        mode: "edit",
        fish
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        const update = {
          description: result.description
        };
        this.fishService.updateFish(fish.id, update);
        this.snackBarService.showSuccess("Fish updated successfully");
      }
    });
  }
  deleteFish(fish) {
    this.confirmationService.confirmDeletion(`fish "${fish.name}"`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.fishService.deleteFish(fish.id);
        this.snackBarService.showSuccess("Fish deleted successfully");
      }
    });
  }
  deleteSelectedFishes() {
    const selectedIds = this.selection.selected.map(fish => fish.id);
    if (selectedIds.length === 0) {
      this.snackBarService.showError("No fish selected");
      return;
    }
    this.confirmationService.confirmBulkDeletion(selectedIds.length, "fish").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.fishService.deleteManyFish(selectedIds);
        this.selection.clear();
        this.snackBarService.showSuccess("Selected fish deleted successfully");
      }
    });
  }
  onSearch(event) {
    const value = event.target?.value;
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, value);
  }
  // Function to update table data
  updateTable(fishes) {
    this.dataSource.data = fishes;
    // Reapply current filter
    if (this.searchQuery()) {
      this.dataSource.filter = this.searchQuery().trim().toLowerCase();
    }
    // Maintain sort state after data changes
    if (this.sort && this.dataSource.sort !== this.sort) {
      this.configureSort();
    }
  }
  static {
    this.ɵfac = function FishListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FishListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FishListComponent,
      selectors: [["app-fish-list"]],
      viewQuery: function FishListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 37,
      vars: 8,
      consts: [[1, "fish-container"], ["color", "primary"], [1, "toolbar-spacer"], [1, "search-container", "margin-right"], [1, "search-icon"], ["placeholder", "Search...", "type", "text", 3, "input", "value"], ["color", "accent", "mat-mini-fab", "", "matTooltip", "Add new fish", 1, "margin-right", 3, "click"], ["color", "accent", "mat-raised-button", "", 3, "click", "disabled"], [1, "mat-elevation-z8", "table-container"], ["mat-table", "", "matSort", "", "matSortActive", "name", "matSortDirection", "asc", 1, "sticky-table", 3, "dataSource"], ["matColumnDef", "select"], ["class", "sticky-header", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["arrowPosition", "before", "class", "sticky-header", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], ["mat-header-cell", "", 1, "sticky-header"], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "change", "click", "checked"], ["arrowPosition", "before", "mat-header-cell", "", "mat-sort-header", "", 1, "sticky-header"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "warn", "mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "5", 1, "mat-cell"], [1, "no-data"]],
      template: function FishListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Fish Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3)(6, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function FishListComponent_Template_input_input_8_listener($event) {
            return ctx.onSearch($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FishListComponent_Template_button_click_9_listener() {
            return ctx.openAddDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FishListComponent_Template_button_click_12_listener() {
            return ctx.deleteSelectedFishes();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 8)(17, "table", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, FishListComponent_th_19_Template, 2, 2, "th", 11)(20, FishListComponent_td_20_Template, 2, 1, "td", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](21, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, FishListComponent_th_22_Template, 2, 0, "th", 14)(23, FishListComponent_td_23_Template, 2, 1, "td", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](24, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, FishListComponent_th_25_Template, 2, 0, "th", 14)(26, FishListComponent_td_26_Template, 2, 1, "td", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](27, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, FishListComponent_th_28_Template, 2, 0, "th", 14)(29, FishListComponent_td_29_Template, 2, 1, "td", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](30, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, FishListComponent_th_31_Template, 2, 0, "th", 11)(32, FishListComponent_td_32_Template, 7, 0, "td", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, FishListComponent_tr_33_Template, 1, 0, "tr", 18)(34, FishListComponent_tr_34_Template, 1, 0, "tr", 19)(35, FishListComponent_tr_35_Template, 3, 1, "tr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, FishListComponent_div_36_Template, 3, 0, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.searchQuery());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Delete Selected (", ctx.selection.selected.length, ") ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.filteredData.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatMiniFabButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbar, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader],
      styles: ["\n\n\n.fish-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  overflow: auto;\n  max-height: 600px; \n\n}\n\n.sticky-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sticky-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 10;\n  font-weight: bold;\n  text-align: left;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n\n.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background-color: rgb(0 0 0 / 4%);\n}\n\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin: 16px 0;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-style: italic;\n  color: rgb(0 0 0 / 54%);\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f1f1;\n  border-radius: 20px;\n  padding: 5px 10px;\n  width: 200px;\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: gray;\n  margin-right: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9maXNoL2Zpc2gtbGlzdC9maXNoLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQ7O0FBRTFEO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUUsZ0NBQWdDO0FBQ3JEOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHNyYy9hcHAvY29tcG9uZW50cy9maXNoLWxpc3QvZmlzaC1saXN0LmNvbXBvbmVudC5zY3NzICovXG5cbi5maXNoLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnRvb2xiYXItc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNjAwcHg7IC8qIEFkanVzdCB0aGlzIHZhbHVlIGFzIG5lZWRlZCAqL1xufVxuXG4uc3RpY2t5LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdGlja3ktaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLm1hdC1tZGMtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtbWRjLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDQlKTtcbn1cblxuLnRhYmxlLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG4ubm8tZGF0YSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogcmdiKDAgMCAwIC8gNTQlKTtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ubWFyZ2luLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 423:
/*!*************************************************!*\
  !*** ./src/app/components/fish/fish.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FishService: () => (/* binding */ FishService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
// src/app/services/unit-type.service.ts




class FishService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fish`;
    // State signals
    this.fishList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    // Exposed computed signals
    this.fishes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.fishList());
    // Load fish data immediately when service is injected
    this.loadAllFish();
  }
  /**
   * Load all fish from the API and update the signal
   */
  loadAllFish() {
    this.http.get(this.baseUrl).subscribe({
      next: data => this.fishList.set(data)
    });
  }
  /**
   * Get a single fish by ID
   */
  getFishById(id) {
    return this.fishList().find(fish => fish.id === id);
  }
  /**
   * Create a new fish
   */
  createFish(fish) {
    this.http.post(this.baseUrl, fish).subscribe({
      next: newFish => {
        // Update the signal with the new fish
        this.fishList.update(list => [...list, newFish]);
      }
    });
  }
  /**
   * Update an existing fish
   */
  updateFish(id, fishUpdate) {
    this.http.patch(`${this.baseUrl}/${id}`, fishUpdate).subscribe({
      next: updatedFish => {
        // Update the specific fish in the list
        this.fishList.update(list => list.map(fish => fish.id === id ? updatedFish : fish));
      }
    });
  }
  /**
   * Delete a fish by ID
   */
  deleteFish(id) {
    this.http.delete(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted fish from the list
        this.fishList.update(list => list.filter(fish => fish.id !== id));
      }
    });
  }
  /**
   * Delete multiple fish by IDs
   */
  deleteManyFish(ids) {
    if (ids.length === 0) return;
    this.http.delete(`${this.baseUrl}/bulk`, {
      body: {
        ids
      }
    }).subscribe({
      next: () => {
        // Remove all deleted fish from the list
        this.fishList.update(list => list.filter(fish => !ids.includes(fish.id)));
      }
    });
  }
  static {
    this.ɵfac = function FishService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FishService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FishService,
      factory: FishService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 1994:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/harvest-type/harvest-type-dialog/harvest-type-dialog.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HarvestTypeDialogComponent: () => (/* binding */ HarvestTypeDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
// src/app/components/harvestType-dialog/unit-type-dialog.component.ts














function HarvestTypeDialogComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class HarvestTypeDialogComponent {
  constructor() {
    this.dialogTitle = "";
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA);
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
  }
  ngOnInit() {
    this.initForm();
    this.dialogTitle = this.data.mode === "add" ? "Add New HarvestType" : "Edit HarvestType";
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.harvestTypeForm.valid) {
      this.dialogRef.close({
        id: this.data.harvestType?.id,
        ...this.harvestTypeForm.getRawValue()
      });
    }
  }
  initForm() {
    this.harvestTypeForm = this.fb.group({
      harvestType: [this.data.harvestType?.harvestType || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  static {
    this.ɵfac = function HarvestTypeDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HarvestTypeDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HarvestTypeDialogComponent,
      selectors: [["app-harvestType-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 5,
      consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], ["appearance", "fill", 1, "full-width"], ["formControlName", "harvestType", "matInput", "", "placeholder", "Enter name"], [4, "ngIf"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"]],
      template: function HarvestTypeDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HarvestTypeDialogComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "mat-form-field", 2)(5, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HarvestTypeDialogComponent_mat_error_8_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 5)(10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HarvestTypeDialogComponent_Template_button_click_10_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.harvestTypeForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.harvestTypeForm.get("harvestType")) == null ? null : tmp_2_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.harvestTypeForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.mode === "add" ? "Add" : "Update", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["\n\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oYXJ2ZXN0LXR5cGUvaGFydmVzdC10eXBlLWRpYWxvZy9oYXJ2ZXN0LXR5cGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEOztBQUU5RDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcmMvYXBwL2NvbXBvbmVudHMvZmlzaC1kaWFsb2cvZmlzaC1kaWFsb2cuY29tcG9uZW50LnNjc3MgKi9cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4818:
/*!******************************************************************************************!*\
  !*** ./src/app/components/harvest-type/harvest-type-list/harvest-type-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HarvestTypeListComponent: () => (/* binding */ HarvestTypeListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 7989);
/* harmony import */ var _confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirmation-dialog/confirmation-service.service */ 6620);
/* harmony import */ var _harvest_type_dialog_harvest_type_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../harvest-type-dialog/harvest-type-dialog.component */ 1994);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _harvest_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../harvest-type.service */ 1219);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/snackbar.service */ 2365);
/* harmony import */ var _services_search_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/search-table.service */ 2835);
// src/app/components/harvestType-list/unit-type-list.component.ts



























function HarvestTypeListComponent_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HarvestTypeListComponent_mat_icon_10_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const searchInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.clearSearch(searchInput_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function HarvestTypeListComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 23)(1, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function HarvestTypeListComponent_th_21_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r2.toggleAllRows() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
  }
}
function HarvestTypeListComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25)(1, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function HarvestTypeListComponent_td_22_Template_mat_checkbox_change_1_listener($event) {
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r2.selection.toggle(row_r7) : null);
    })("click", function HarvestTypeListComponent_td_22_Template_mat_checkbox_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r7));
  }
}
function HarvestTypeListComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function HarvestTypeListComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const harvestType_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", harvestType_r8.id, "");
  }
}
function HarvestTypeListComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function HarvestTypeListComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const harvestType_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", harvestType_r9.harvestType, "");
  }
}
function HarvestTypeListComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function HarvestTypeListComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HarvestTypeListComponent_td_31_Template_button_click_1_listener() {
      const harvestType_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openEditDialog(harvestType_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HarvestTypeListComponent_td_31_Template_button_click_4_listener() {
      const harvestType_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.deleteHarvestType(harvestType_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function HarvestTypeListComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 31);
  }
}
function HarvestTypeListComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 32);
  }
}
function HarvestTypeListComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("No results matching \"", ctx_r2.searchQuery(), "");
  }
}
function HarvestTypeListComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No HarvestType data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class HarvestTypeListComponent {
  constructor() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource([]);
    this.displayedColumns = ["select", "id", "name", "actions"];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
    this.searchQuery = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)("");
    // Entity type identifier for search service
    this.ENTITY_TYPE = "harvestType";
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.harvestTypeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_harvest_type_service__WEBPACK_IMPORTED_MODULE_2__.HarvestTypeService);
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog);
    this.snackBarService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService);
    this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmationService);
    this.searchTableService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_search_table_service__WEBPACK_IMPORTED_MODULE_4__.SearchTableService);
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.effect)(() => {
      this.updateTable(this.harvestTypeService.harvestTypes());
    });
  }
  ngOnInit() {
    // No need to call loadHarvestTypees() as the service loads data on construction
    this.configureDataSource();
    this.setupSearch();
  }
  ngAfterViewInit() {
    // Connect sort after view initializes and configure custom sorting
    this.configureSort();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchTableService.destroySearch(this.ENTITY_TYPE);
  }
  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];
      // Handle different data types for sorting
      if (typeof value === "string") {
        return value.toLowerCase(); // Case-insensitive string sorting
      } else {
        return value; // Default for numbers and other types
      }
    };
  }
  /**
   * Set up the search functionality
   */
  setupSearch() {
    this.searchTableService.getSearchObservable(this.ENTITY_TYPE).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(searchValue => {
      this.searchQuery.set(searchValue);
      this.dataSource.filter = searchValue.trim().toLowerCase();
    });
  }
  /**
   * Configure the data source with custom filter predicate
   */
  configureDataSource() {
    // Define custom filter logic that searches across all fields
    this.dataSource.filterPredicate = (harvestType, filter) => {
      const searchStr = filter.toLowerCase();
      return harvestType.id.toString().includes(searchStr) || harvestType.harvestType.toLowerCase().includes(searchStr);
    };
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows && numRows > 0;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(_harvest_type_dialog_harvest_type_dialog_component__WEBPACK_IMPORTED_MODULE_1__.HarvestTypeDialogComponent, {
      width: "400px",
      data: {
        mode: "add"
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        this.harvestTypeService.createHarvestType(result);
        this.snackBarService.showSuccess("HarvestType added successfully");
      }
    });
  }
  openEditDialog(harvestType) {
    const dialogRef = this.dialog.open(_harvest_type_dialog_harvest_type_dialog_component__WEBPACK_IMPORTED_MODULE_1__.HarvestTypeDialogComponent, {
      width: "400px",
      data: {
        mode: "edit",
        harvestType
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        const update = {
          harvestType: result.harvestType
        };
        this.harvestTypeService.updateHarvestType(harvestType.id, update);
        this.snackBarService.showSuccess("HarvestType updated successfully");
      }
    });
  }
  deleteHarvestType(harvestType) {
    this.confirmationService.confirmDeletion(`harvestType "${harvestType.harvestType}"`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.harvestTypeService.deleteHarvestType(harvestType.id);
        this.snackBarService.showSuccess("HarvestType deleted successfully");
      }
    });
  }
  deleteSelectedCategories() {
    const selectedIds = this.selection.selected.map(harvestType => harvestType.id);
    if (selectedIds.length === 0) {
      this.snackBarService.showError("No harvestType selected");
      return;
    }
    this.confirmationService.confirmBulkDeletion(selectedIds.length, "harvestType").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.harvestTypeService.deleteManyHarvestType(selectedIds);
        this.selection.clear();
        this.snackBarService.showSuccess("Selected harvestType deleted successfully");
      }
    });
  }
  onSearch(event) {
    const value = event.target?.value;
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, value);
  }
  /**
   * Clear the search input
   */
  clearSearch(inputElement) {
    inputElement.value = "";
    this.searchQuery.set("");
    this.dataSource.filter = "";
    inputElement.focus();
  }
  // Function to update table data
  updateTable(categories) {
    this.dataSource.data = categories;
    // Reapply current filter
    if (this.searchQuery()) {
      this.dataSource.filter = this.searchQuery().trim().toLowerCase();
    }
    // Maintain sort state after data changes
    if (this.sort && this.dataSource.sort !== this.sort) {
      this.configureSort();
    }
  }
  static {
    this.ɵfac = function HarvestTypeListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HarvestTypeListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: HarvestTypeListComponent,
      selectors: [["app-harvestType-list"]],
      viewQuery: function HarvestTypeListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 36,
      vars: 10,
      consts: [["searchInput", ""], ["color", "primary"], [1, "toolbar-spacer"], [1, "search-container", "margin-right"], [1, "search-icon"], ["placeholder", "Search...", "type", "text", 3, "input", "value"], ["class", "clear-search", 3, "click", 4, "ngIf"], ["color", "accent", "mat-mini-fab", "", "matTooltip", "Add new HarvestType", 1, "margin-right", 3, "click"], ["color", "accent", "mat-raised-button", "", 3, "click", "disabled"], [1, "mat-elevation-z8", "main-container"], ["mat-table", "", "matSort", "", "matSortActive", "harvestType", "matSortDirection", "asc", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "harvestType", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "no-data", 4, "ngIf"], [1, "clear-search", 3, "click"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "change", "click", "checked"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-cell", "", "mat-sort-header", "harvestType"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "warn", "mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data"]],
      template: function HarvestTypeListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 1)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Harvest Types");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3)(6, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function HarvestTypeListComponent_Template_input_input_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onSearch($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, HarvestTypeListComponent_mat_icon_10_Template, 2, 0, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HarvestTypeListComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.openAddDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HarvestTypeListComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.deleteSelectedCategories());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 9)(19, "table", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, HarvestTypeListComponent_th_21_Template, 2, 2, "th", 12)(22, HarvestTypeListComponent_td_22_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, HarvestTypeListComponent_th_24_Template, 2, 0, "th", 15)(25, HarvestTypeListComponent_td_25_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](26, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, HarvestTypeListComponent_th_27_Template, 2, 0, "th", 17)(28, HarvestTypeListComponent_td_28_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](29, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, HarvestTypeListComponent_th_30_Template, 2, 0, "th", 12)(31, HarvestTypeListComponent_td_31_Template, 7, 0, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, HarvestTypeListComponent_tr_32_Template, 1, 0, "tr", 19)(33, HarvestTypeListComponent_tr_33_Template, 1, 0, "tr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, HarvestTypeListComponent_div_34_Template, 3, 1, "div", 21)(35, HarvestTypeListComponent_div_35_Template, 3, 0, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.searchQuery());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.searchQuery().length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Delete Selected (", ctx.selection.selected.length, ") ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 0 && ctx.dataSource.filteredData.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatMiniFabButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbar, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: rgb(0 0 0 / 4%);\n}\n\n\n\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin: 16px 0;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-style: italic;\n  color: rgb(0 0 0 / 54%);\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f1f1;\n  border-radius: 20px;\n  padding: 5px 10px;\n  width: 200px;\n  position: relative; \n\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: gray;\n  margin-right: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n\n\n\n.clear-search[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: gray;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oYXJ2ZXN0LXR5cGUvaGFydmVzdC10eXBlLWxpc3QvaGFydmVzdC10eXBlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0IsRUFBRSwyQ0FBMkM7QUFDakU7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50b29sYmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBBZGQgdGhpcyBmb3IgYm9sZCB0YWJsZSBoZWFkZXJzICovXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0JSk7XG59XG5cbi8qIFRoaXMgY2xhc3MgaXMgdW51c2VkIGFuZCBjYW4gYmUgcmVtb3ZlZCAqL1xuLnRhYmxlLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG4ubm8tZGF0YSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogcmdiKDAgMCAwIC8gNTQlKTtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZGVkIGZvciBwb3NpdGlvbmluZyB0aGUgY2xlYXIgYnV0dG9uICovXG59XG5cbi5tYXJnaW4tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBBZGQgdGhpcyBmb3IgdGhlIGNsZWFyIGJ1dHRvbiAqL1xuLmNsZWFyLXNlYXJjaCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGdyYXk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 1219:
/*!*****************************************************************!*\
  !*** ./src/app/components/harvest-type/harvest-type.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HarvestTypeService: () => (/* binding */ HarvestTypeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
// src/app/services/unit-type.service.ts




class HarvestTypeService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/harvest-types`;
    // State signals
    this.harvestTypeList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    // Exposed computed signals
    this.harvestTypes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.harvestTypeList());
    // Load harvestType data immediately when service is injected
    this.loadAllHarvestTypes();
  }
  /**
   * Load all harvestType from the API and update the signal
   */
  loadAllHarvestTypes() {
    this.http.get(this.baseUrl).subscribe({
      next: data => this.harvestTypeList.set(data)
    });
  }
  /**
   * Get a single harvestType by ID
   */
  getHarvestTypeById(id) {
    return this.harvestTypeList().find(harvestType => harvestType.id === id);
  }
  /**
   * Create a new harvestType
   */
  createHarvestType(harvestType) {
    this.http.post(this.baseUrl, harvestType).subscribe({
      next: newHarvestType => {
        // Update the signal with the new harvestType
        this.harvestTypeList.update(list => [...list, newHarvestType]);
      }
    });
  }
  /**
   * Update an existing harvestType
   */
  updateHarvestType(id, harvestTypeUpdate) {
    this.http.patch(`${this.baseUrl}/${id}`, harvestTypeUpdate).subscribe({
      next: updatedHarvestType => {
        // Update the specific harvestType in the list
        this.harvestTypeList.update(list => list.map(harvestType => harvestType.id === id ? updatedHarvestType : harvestType));
      }
    });
  }
  /**
   * Delete a harvestType by ID
   */
  deleteHarvestType(id) {
    this.http.delete(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted harvestType from the list
        this.harvestTypeList.update(list => list.filter(harvestType => harvestType.id !== id));
      }
    });
  }
  /**
   * Delete multiple harvestType by IDs
   */
  deleteManyHarvestType(ids) {
    if (ids.length === 0) return;
    this.http.delete(`${this.baseUrl}/bulk`, {
      body: {
        ids
      }
    }).subscribe({
      next: () => {
        // Remove all deleted harvestType from the list
        this.harvestTypeList.update(list => list.filter(harvestType => !ids.includes(harvestType.id)));
      }
    });
  }
  static {
    this.ɵfac = function HarvestTypeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HarvestTypeService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HarvestTypeService,
      factory: HarvestTypeService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 8729:
/*!***************************************************!*\
  !*** ./src/app/components/help/help.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpComponent: () => (/* binding */ HelpComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



class HelpComponent {
  static {
    this.ɵfac = function HelpComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HelpComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpComponent,
      selectors: [["app-help"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 0,
      consts: [["color", "primary", 1, "header-toolbar"], [1, "main-container", "mat-elevation-z8"], [1, "main-card"]],
      template: function HelpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 0)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Help");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1)(5, "mat-card", 2)(6, "mat-card-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " TBD: some help information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);






class HomeComponent {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  ngOnInit() {
    this.username = this.authService.getFullname();
  }
  navigateTo(page) {
    void this.router.navigate([`/${page}`]);
  }
  logout() {
    this.authService.logout();
  }
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 0,
      consts: [["color", "primary", 1, "header-toolbar"], [1, "main-container", "mat-elevation-z8"], [1, "main-card"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 0)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1)(5, "mat-card", 2)(6, "mat-card-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Welcome to the new PFFC application. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 8525:
/*!*****************************************************************************!*\
  !*** ./src/app/components/loading-indicator/loading-indicator.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingIndicatorComponent: () => (/* binding */ LoadingIndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/loading.service */ 7038);
// src/app/components/loading-indicator/loading-indicator.component.ts







function LoadingIndicatorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class LoadingIndicatorComponent {
  constructor() {
    this.loadingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService);
  }
  static {
    this.ɵfac = function LoadingIndicatorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoadingIndicatorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoadingIndicatorComponent,
      selectors: [["app-loading-indicator"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "loading-overlay", 4, "ngIf"], [1, "loading-overlay"], [1, "spinner-container"], ["diameter", "40"]],
      template: function LoadingIndicatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoadingIndicatorComponent_div_0_Template, 5, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadingService.loading());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinner],
      styles: [".loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(255 255 255 / 70%);\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 24px;\n  border-radius: 8px;\n  background-color: white;\n  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHNDQUFzQztBQUN4QyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNzAlKTtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zcGlubmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYigwIDAgMCAvIDEwJSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 205:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _app_install_prompt_app_install_prompt_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-install-prompt/app-install-prompt.component */ 4535);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);























const _c0 = () => ["/password-request"];
function LoginComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "UAT ENVIRONMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.apiUrl);
  }
}
class LoginComponent {
  constructor(router, cdr, formBuilder, authService) {
    this.router = router;
    this.cdr = cdr;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.hidePassword = true;
    this.loading = false;
    this.errorMessage = null;
    this.isDevMode = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.isDevMode)();
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    this.loginForm = this.formBuilder.group({
      username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.errorMessage = null;
    const {
      username,
      password
    } = this.loginForm.value;
    this.authService.login(username, password).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      this.errorMessage = `Login failed. ${error.status === 401 ? "Please check your username and password" : error.error?.message || "Please check your username and password"}.`;
      this.loading = false;
      this.cdr.markForCheck();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    })).subscribe({
      next: ({
        firstName,
        lastName,
        token
      }) => {
        this.authService.saveFullnameAndToken(`${firstName ?? ""} ${lastName ?? ""}`.trim(), token);
        void this.router.navigate(["/home"]);
      }
    });
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 40,
      vars: 12,
      consts: [["color", "primary", 1, "header-toolbar"], [1, "main-container"], [1, "main-card"], [1, "login-form", 3, "ngSubmit", "formGroup"], [1, "form-title"], ["appearance", "outline", 1, "full-width"], ["autocomplete", "username", "formControlName", "username", "matInput", "", "placeholder", "Enter your username", "type", "text"], ["matPrefix", ""], [4, "ngIf"], ["autocomplete", "current-password", "formControlName", "password", "matInput", "", "placeholder", "Enter your password", 3, "type"], ["aria-label", "Toggle password visibility", "mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "forgot-password"], [1, "forgot-link", 3, "routerLink"], [1, "form-actions"], ["color", "primary", "mat-raised-button", "", "type", "submit", 1, "login-button", 3, "disabled"], ["class", "error-message", 4, "ngIf"], [1, "text-align-center"], [1, "error-message"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 0)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1)(5, "mat-card", 2)(6, "mat-card-content")(7, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Sign in to your account");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field", 5)(11, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "person");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 5)(18, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "lock");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() {
            return ctx.togglePasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, LoginComponent_mat_error_26_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11)(28, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Forgot password? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 13)(31, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, LoginComponent_span_32_Template, 2, 0, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, LoginComponent_div_33_Template, 4, 1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "app-install-prompt");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "footer", 16)(36, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " \u00A9 2025- Pacific Fresh Fish Company ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, LoginComponent_div_38_Template, 2, 0, "div", 8)(39, LoginComponent_div_39_Template, 2, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility" : "visibility_off");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading || ctx.loginForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDevMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDevMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _app_install_prompt_app_install_prompt_component__WEBPACK_IMPORTED_MODULE_0__.AppInstallPromptComponent],
      styles: [".main-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: rgb(0 0 0 / 87%);\n  text-align: center;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 1.5rem;\n}\n\n.forgot-link[_ngcontent-%COMP%] {\n  color: #3f51b5;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n\n.forgot-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  min-width: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  color: #f44336;\n  display: flex;\n  align-items: center;\n  background-color: rgb(244 67 54 / 10%);\n  padding: 0.75rem;\n  border-radius: 4px;\n}\n\n.error-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpbi1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgY29sb3I6IHJnYigwIDAgMCAvIDg3JSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5mb3Jnb3QtbGluayB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZm9yZ290LWxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZvcm0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCA2NyA1NCAvIDEwJSk7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmVycm9yLW1lc3NhZ2UgbWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 9543:
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutComponent: () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/snackbar.service */ 2365);



class LogoutComponent {
  constructor(authService, snackbarService) {
    this.authService = authService;
    this.snackbarService = snackbarService;
    this.authService.logout();
    this.snackbarService.showSuccess("You have been logged out");
  }
  static {
    this.ɵfac = function LogoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["app-logout"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 5,
      vars: 0,
      consts: [[2, "padding-left", "200px"]],
      template: function LogoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br")(1, "br")(2, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "You have been logged out.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 8324:
/*!****************************************************************************!*\
  !*** ./src/app/components/origin/origin-dialog/origin-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OriginDialogComponent: () => (/* binding */ OriginDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
// src/app/components/origin-dialog/unit-type-dialog.component.ts














function OriginDialogComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class OriginDialogComponent {
  constructor() {
    this.dialogTitle = "";
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA);
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
  }
  ngOnInit() {
    this.initForm();
    this.dialogTitle = this.data.mode === "add" ? "Add New Origin" : "Edit Origin";
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.originForm.valid) {
      this.dialogRef.close({
        id: this.data.origin?.id,
        ...this.originForm.getRawValue()
      });
    }
  }
  initForm() {
    this.originForm = this.fb.group({
      originName: [this.data.origin?.originName || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  static {
    this.ɵfac = function OriginDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OriginDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OriginDialogComponent,
      selectors: [["app-origin-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 5,
      consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], ["appearance", "fill", 1, "full-width"], ["formControlName", "originName", "matInput", "", "placeholder", "Enter origin name"], [4, "ngIf"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"]],
      template: function OriginDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OriginDialogComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "mat-form-field", 2)(5, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OriginDialogComponent_mat_error_8_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 5)(10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OriginDialogComponent_Template_button_click_10_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.originForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.originForm.get("originName")) == null ? null : tmp_2_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.originForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.mode === "add" ? "Add" : "Update", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["\n\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmlnaW4vb3JpZ2luLWRpYWxvZy9vcmlnaW4tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEOztBQUU5RDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcmMvYXBwL2NvbXBvbmVudHMvZmlzaC1kaWFsb2cvZmlzaC1kaWFsb2cuY29tcG9uZW50LnNjc3MgKi9cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1008:
/*!************************************************************************!*\
  !*** ./src/app/components/origin/origin-list/origin-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OriginListComponent: () => (/* binding */ OriginListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 7989);
/* harmony import */ var _confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirmation-dialog/confirmation-service.service */ 6620);
/* harmony import */ var _origin_dialog_origin_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../origin-dialog/origin-dialog.component */ 8324);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _origin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../origin.service */ 2579);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/snackbar.service */ 2365);
/* harmony import */ var _services_search_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/search-table.service */ 2835);
// src/app/components/origin-list/unit-type-list.component.ts



























function OriginListComponent_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OriginListComponent_mat_icon_10_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const searchInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.clearSearch(searchInput_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function OriginListComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 23)(1, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function OriginListComponent_th_21_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r2.toggleAllRows() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
  }
}
function OriginListComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25)(1, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function OriginListComponent_td_22_Template_mat_checkbox_change_1_listener($event) {
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r2.selection.toggle(row_r7) : null);
    })("click", function OriginListComponent_td_22_Template_mat_checkbox_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r7));
  }
}
function OriginListComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function OriginListComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const origin_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", origin_r8.id, "");
  }
}
function OriginListComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function OriginListComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const origin_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", origin_r9.originName, "");
  }
}
function OriginListComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function OriginListComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OriginListComponent_td_31_Template_button_click_1_listener() {
      const origin_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openEditDialog(origin_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OriginListComponent_td_31_Template_button_click_4_listener() {
      const origin_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.deleteOrigin(origin_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function OriginListComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 31);
  }
}
function OriginListComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 32);
  }
}
function OriginListComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("No results matching \"", ctx_r2.searchQuery(), "");
  }
}
function OriginListComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Origin data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class OriginListComponent {
  constructor() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource([]);
    this.displayedColumns = ["select", "id", "name", "actions"];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
    this.searchQuery = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)("");
    // Entity type identifier for search service
    this.ENTITY_TYPE = "origin";
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.originService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_origin_service__WEBPACK_IMPORTED_MODULE_2__.OriginService);
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog);
    this.snackBarService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService);
    this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmationService);
    this.searchTableService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_search_table_service__WEBPACK_IMPORTED_MODULE_4__.SearchTableService);
    // Effect to update the table data whenever the origines signal changes
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.effect)(() => {
      this.updateTable(this.originService.origins());
    });
  }
  ngOnInit() {
    // No need to call loadOrigines() as the service loads data on construction
    this.configureDataSource();
    this.setupSearch();
  }
  ngAfterViewInit() {
    // Connect sort after view initializes and configure custom sorting
    this.configureSort();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchTableService.destroySearch(this.ENTITY_TYPE);
  }
  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];
      // Handle different data types for sorting
      if (typeof value === "string") {
        return value.toLowerCase(); // Case-insensitive string sorting
      } else {
        return value; // Default for numbers and other types
      }
    };
  }
  /**
   * Set up the search functionality
   */
  setupSearch() {
    this.searchTableService.getSearchObservable(this.ENTITY_TYPE).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(searchValue => {
      this.searchQuery.set(searchValue);
      this.dataSource.filter = searchValue.trim().toLowerCase();
    });
  }
  /**
   * Configure the data source with custom filter predicate
   */
  configureDataSource() {
    // Define custom filter logic that searches across all fields
    this.dataSource.filterPredicate = (origin, filter) => {
      const searchStr = filter.toLowerCase();
      return origin.id.toString().includes(searchStr) || origin.originName.toLowerCase().includes(searchStr);
    };
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows && numRows > 0;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(_origin_dialog_origin_dialog_component__WEBPACK_IMPORTED_MODULE_1__.OriginDialogComponent, {
      width: "400px",
      data: {
        mode: "add"
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        this.originService.createOrigin(result);
        this.snackBarService.showSuccess("Origin added successfully");
      }
    });
  }
  openEditDialog(origin) {
    const dialogRef = this.dialog.open(_origin_dialog_origin_dialog_component__WEBPACK_IMPORTED_MODULE_1__.OriginDialogComponent, {
      width: "400px",
      data: {
        mode: "edit",
        origin
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        const update = {
          originName: result.originName
        };
        this.originService.updateOrigin(origin.id, update);
        this.snackBarService.showSuccess("Origin updated successfully");
      }
    });
  }
  deleteOrigin(origin) {
    this.confirmationService.confirmDeletion(`origin "${origin.originName}"`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.originService.deleteOrigin(origin.id);
        this.snackBarService.showSuccess("Origin deleted successfully");
      }
    });
  }
  deleteSelectedCategories() {
    const selectedIds = this.selection.selected.map(origin => origin.id);
    if (selectedIds.length === 0) {
      this.snackBarService.showError("No origin selected");
      return;
    }
    this.confirmationService.confirmBulkDeletion(selectedIds.length, "origin").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.originService.deleteManyOrigin(selectedIds);
        this.selection.clear();
        this.snackBarService.showSuccess("Selected origin deleted successfully");
      }
    });
  }
  onSearch(event) {
    const value = event.target?.value;
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, value);
  }
  /**
   * Clear the search input
   */
  clearSearch(inputElement) {
    inputElement.value = "";
    this.searchQuery.set("");
    this.dataSource.filter = "";
    inputElement.focus();
  }
  // Function to update table data
  updateTable(categories) {
    this.dataSource.data = categories;
    // Reapply current filter
    if (this.searchQuery()) {
      this.dataSource.filter = this.searchQuery().trim().toLowerCase();
    }
    // Maintain sort state after data changes
    if (this.sort && this.dataSource.sort !== this.sort) {
      this.configureSort();
    }
  }
  static {
    this.ɵfac = function OriginListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OriginListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: OriginListComponent,
      selectors: [["app-origin-list"]],
      viewQuery: function OriginListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 36,
      vars: 10,
      consts: [["searchInput", ""], ["color", "primary"], [1, "toolbar-spacer"], [1, "search-container", "margin-right"], [1, "search-icon"], ["placeholder", "Search...", "type", "text", 3, "input", "value"], ["class", "clear-search", 3, "click", 4, "ngIf"], ["color", "accent", "mat-mini-fab", "", "matTooltip", "Add new Origin", 1, "margin-right", 3, "click"], ["color", "accent", "mat-raised-button", "", 3, "click", "disabled"], [1, "mat-elevation-z8", "main-container"], ["mat-table", "", "matSort", "", "matSortActive", "originName", "matSortDirection", "asc", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "originName", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "no-data", 4, "ngIf"], [1, "clear-search", 3, "click"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "change", "click", "checked"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-cell", "", "mat-sort-header", "originName"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "warn", "mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data"]],
      template: function OriginListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 1)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Origins");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3)(6, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function OriginListComponent_Template_input_input_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onSearch($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, OriginListComponent_mat_icon_10_Template, 2, 0, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OriginListComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.openAddDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OriginListComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.deleteSelectedCategories());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 9)(19, "table", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, OriginListComponent_th_21_Template, 2, 2, "th", 12)(22, OriginListComponent_td_22_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, OriginListComponent_th_24_Template, 2, 0, "th", 15)(25, OriginListComponent_td_25_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](26, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, OriginListComponent_th_27_Template, 2, 0, "th", 17)(28, OriginListComponent_td_28_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](29, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, OriginListComponent_th_30_Template, 2, 0, "th", 12)(31, OriginListComponent_td_31_Template, 7, 0, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, OriginListComponent_tr_32_Template, 1, 0, "tr", 19)(33, OriginListComponent_tr_33_Template, 1, 0, "tr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, OriginListComponent_div_34_Template, 3, 1, "div", 21)(35, OriginListComponent_div_35_Template, 3, 0, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.searchQuery());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.searchQuery().length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Delete Selected (", ctx.selection.selected.length, ") ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 0 && ctx.dataSource.filteredData.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatMiniFabButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbar, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: rgb(0 0 0 / 4%);\n}\n\n\n\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin: 16px 0;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-style: italic;\n  color: rgb(0 0 0 / 54%);\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f1f1;\n  border-radius: 20px;\n  padding: 5px 10px;\n  width: 200px;\n  position: relative; \n\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: gray;\n  margin-right: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n\n\n\n.clear-search[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: gray;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmlnaW4vb3JpZ2luLWxpc3Qvb3JpZ2luLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0IsRUFBRSwyQ0FBMkM7QUFDakU7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50b29sYmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBBZGQgdGhpcyBmb3IgYm9sZCB0YWJsZSBoZWFkZXJzICovXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0JSk7XG59XG5cbi8qIFRoaXMgY2xhc3MgaXMgdW51c2VkIGFuZCBjYW4gYmUgcmVtb3ZlZCAqL1xuLnRhYmxlLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG4ubm8tZGF0YSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogcmdiKDAgMCAwIC8gNTQlKTtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZGVkIGZvciBwb3NpdGlvbmluZyB0aGUgY2xlYXIgYnV0dG9uICovXG59XG5cbi5tYXJnaW4tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBBZGQgdGhpcyBmb3IgdGhlIGNsZWFyIGJ1dHRvbiAqL1xuLmNsZWFyLXNlYXJjaCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGdyYXk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 2579:
/*!*****************************************************!*\
  !*** ./src/app/components/origin/origin.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OriginService: () => (/* binding */ OriginService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
// src/app/services/unit-type.service.ts




class OriginService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/origins`;
    // State signals
    this.originList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    // Exposed computed signals
    this.origins = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.originList());
    // Load origin data immediately when service is injected
    this.loadAllOrigins();
  }
  /**
   * Load all origin from the API and update the signal
   */
  loadAllOrigins() {
    this.http.get(this.baseUrl).subscribe({
      next: data => this.originList.set(data)
    });
  }
  /**
   * Get a single origin by ID
   */
  getOriginById(id) {
    return this.originList().find(origin => origin.id === id);
  }
  /**
   * Create a new origin
   */
  createOrigin(origin) {
    this.http.post(this.baseUrl, origin).subscribe({
      next: newOrigin => {
        // Update the signal with the new origin
        this.originList.update(list => [...list, newOrigin]);
      }
    });
  }
  /**
   * Update an existing origin
   */
  updateOrigin(id, originUpdate) {
    this.http.patch(`${this.baseUrl}/${id}`, originUpdate).subscribe({
      next: updatedOrigin => {
        // Update the specific origin in the list
        this.originList.update(list => list.map(origin => origin.id === id ? updatedOrigin : origin));
      }
    });
  }
  /**
   * Delete a origin by ID
   */
  deleteOrigin(id) {
    this.http.delete(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted origin from the list
        this.originList.update(list => list.filter(origin => origin.id !== id));
      }
    });
  }
  /**
   * Delete multiple origin by IDs
   */
  deleteManyOrigin(ids) {
    if (ids.length === 0) return;
    this.http.delete(`${this.baseUrl}/bulk`, {
      body: {
        ids
      }
    }).subscribe({
      next: () => {
        // Remove all deleted origin from the list
        this.originList.update(list => list.filter(origin => !ids.includes(origin.id)));
      }
    });
  }
  static {
    this.ɵfac = function OriginService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OriginService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: OriginService,
      factory: OriginService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 5593:
/*!***************************************************************************!*\
  !*** ./src/app/components/password-request/password-request.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordRequestComponent: () => (/* binding */ PasswordRequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);



















function PasswordRequestComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class PasswordRequestComponent {
  constructor(router, cdr, formBuilder, authService, snackbarService) {
    this.router = router;
    this.cdr = cdr;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.snackbarService = snackbarService;
    this.passwordRequestForm = this.formBuilder.group({
      username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
  }
  onSubmit() {
    const {
      username
    } = this.passwordRequestForm.value;
    this.authService.passwordRequest(username).subscribe({
      next: () => {
        this.snackbarService.showInfo(`An email has been sent to ${username} to reset your password`);
        this.router.navigate(["/login"]);
      }
    });
  }
  static {
    this.ɵfac = function PasswordRequestComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PasswordRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PasswordRequestComponent,
      selectors: [["app-password-request"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 24,
      vars: 3,
      consts: [[1, "container"], ["color", "primary", 1, "header-toolbar"], [1, "form-container"], [1, "password-request-card"], [1, "password-form", 3, "ngSubmit", "formGroup"], [1, "form-title"], [1, "form-description"], ["appearance", "outline", 1, "full-width"], ["autocomplete", "username", "formControlName", "username", "matInput", "", "placeholder", "Enter your username", "type", "text"], ["matPrefix", ""], [4, "ngIf"], [1, "form-actions"], ["mat-stroked-button", "", "routerLink", "/login", "type", "button"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"]],
      template: function PasswordRequestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "New Password Request");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "mat-card", 3)(6, "mat-card-content")(7, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PasswordRequestComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Reset your password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Enter your username below and we'll send you instructions to reset your password. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 7)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "person");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, PasswordRequestComponent_mat_error_18_Template, 2, 0, "mat-error", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11)(20, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Back to Login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Submit Password Request ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.passwordRequestForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.passwordRequestForm.get("username")) == null ? null : tmp_1_0.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.passwordRequestForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbar],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.header-toolbar[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);\n  z-index: 10;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n  background-color: #f5f5f5;\n  flex: 1;\n}\n\n.password-request-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 100%;\n  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);\n}\n\n.password-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: rgb(0 0 0 / 87%);\n}\n\n.form-description[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: rgb(0 0 0 / 60%);\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC1yZXF1ZXN0L3Bhc3N3b3JkLXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXItdG9vbGJhciB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2IoMCAwIDAgLyAyMCUpO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGZsZXg6IDE7XG59XG5cbi5wYXNzd29yZC1yZXF1ZXN0LWNhcmQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYigwIDAgMCAvIDEwJSk7XG59XG5cbi5wYXNzd29yZC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGNvbG9yOiByZ2IoMCAwIDAgLyA4NyUpO1xufVxuXG4uZm9ybS1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgY29sb3I6IHJnYigwIDAgMCAvIDYwJSk7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 6881:
/*!***********************************************************************!*\
  !*** ./src/app/components/password-reset/password-reset.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordResetComponent: () => (/* binding */ PasswordResetComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);





















function PasswordResetComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PasswordResetComponent_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please confirm your password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PasswordResetComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Your password needs to have at least 5 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PasswordResetComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Your password needs to contain at least one special character: ", "[!@#$%^&*(),.?\":{}|<>]", " ");
  }
}
function PasswordResetComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " The 2 entries do not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class PasswordResetComponent {
  constructor(route, router, cdr, formBuilder, authService, snackbarService) {
    this.route = route;
    this.router = router;
    this.cdr = cdr;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.snackbarService = snackbarService;
    this.token = "";
    this.mismatchedPassword = false;
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.passwordResetForm = this.formBuilder.group({
      password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5), this.specialCharacterValidator]],
      confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5), this.specialCharacterValidator]]
    });
  }
  ngOnInit() {
    this.passwordResetForm.get("confirmPassword")?.valueChanges.subscribe(() => {
      this.mismatchedPassword = false;
    });
    this.route.paramMap.subscribe(params => {
      this.token = params.get("token") || "";
      if (!this.token) {
        // no JWT found
        void this.router.navigate(["/login"]);
      }
    });
  }
  onSubmit() {
    const {
      password,
      confirmPassword
    } = this.passwordResetForm.value;
    if (password !== confirmPassword) {
      this.mismatchedPassword = true;
      return;
    }
    this.authService.passwordReset(password, this.token).subscribe({
      next: () => {
        this.snackbarService.showSuccess("Your password has been reset");
        this.router.navigate(["/login"]); // Navigate to /products on success
      }
    });
  }
  specialCharacterValidator(control) {
    const value = control.value;
    // Regular expression for special characters
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    return hasSpecialCharacter ? null : {
      noSpecialCharacter: true
    };
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }
  static {
    this.ɵfac = function PasswordResetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PasswordResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PasswordResetComponent,
      selectors: [["app-password-reset"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 41,
      vars: 11,
      consts: [[1, "container"], ["color", "primary", 1, "header-toolbar"], [1, "form-container"], [1, "password-reset-card"], [1, "password-form", 3, "ngSubmit", "formGroup"], [1, "form-title"], [1, "form-description"], ["appearance", "outline", 1, "full-width"], ["autocomplete", "new-password", "formControlName", "password", "matInput", "", "placeholder", "Enter your password", 3, "type"], ["matPrefix", ""], ["aria-label", "Toggle password visibility", "mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [4, "ngIf"], ["autocomplete", "new-password", "formControlName", "confirmPassword", "matInput", "", "placeholder", "Confirm your password", 3, "type"], ["aria-label", "Toggle confirm password visibility", "mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "password-requirements"], ["class", "error-item", 4, "ngIf"], [1, "form-actions"], ["mat-stroked-button", "", "routerLink", "/login", "type", "button"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"], [1, "error-item"]],
      template: function PasswordResetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "New Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "mat-card", 3)(6, "mat-card-content")(7, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PasswordResetComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Create your new password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Please enter and confirm your new password below. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 7)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "lock");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PasswordResetComponent_Template_button_click_18_listener() {
            return ctx.togglePasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, PasswordResetComponent_mat_error_21_Template, 2, 0, "mat-error", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 7)(23, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Re-enter your password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "lock");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PasswordResetComponent_Template_button_click_28_listener() {
            return ctx.toggleConfirmPasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, PasswordResetComponent_mat_error_31_Template, 2, 0, "mat-error", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, PasswordResetComponent_div_33_Template, 4, 0, "div", 15)(34, PasswordResetComponent_div_34_Template, 4, 1, "div", 15)(35, PasswordResetComponent_div_35_Template, 4, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16)(37, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Back to Login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Submit New Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.passwordResetForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility" : "visibility_off");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.passwordResetForm.get("password")) == null ? null : tmp_3_0.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hideConfirmPassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hideConfirmPassword ? "visibility" : "visibility_off");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.passwordResetForm.get("confirmPassword")) == null ? null : tmp_6_0.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.passwordResetForm.get("password")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["minlength"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.passwordResetForm.get("password")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["noSpecialCharacter"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mismatchedPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.passwordResetForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.header-toolbar[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);\n  z-index: 10;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n  background-color: #f5f5f5;\n  flex: 1;\n}\n\n.password-reset-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 100%;\n  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);\n}\n\n.password-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: rgb(0 0 0 / 87%);\n}\n\n.form-description[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: rgb(0 0 0 / 60%);\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n}\n\n.password-requirements[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.error-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #f44336;\n  margin-bottom: 0.5rem;\n  font-size: 0.9rem;\n}\n\n.error-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  height: 1rem;\n  width: 1.5rem;\n  margin-right: 0.5rem;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXItdG9vbGJhciB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2IoMCAwIDAgLyAyMCUpO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGZsZXg6IDE7XG59XG5cbi5wYXNzd29yZC1yZXNldC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2IoMCAwIDAgLyAxMCUpO1xufVxuXG4ucGFzc3dvcmQtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBjb2xvcjogcmdiKDAgMCAwIC8gODclKTtcbn1cblxuLmZvcm0tZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGNvbG9yOiByZ2IoMCAwIDAgLyA2MCUpO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ucGFzc3dvcmQtcmVxdWlyZW1lbnRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uZXJyb3ItaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZXJyb3ItaXRlbSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMS41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmZvcm0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 1245:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



class ProfileComponent {
  static {
    this.ɵfac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProfileComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 0,
      consts: [["color", "primary", 1, "header-toolbar"], [1, "main-container", "mat-elevation-z8"], [1, "main-card"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 0)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1)(5, "mat-card", 2)(6, "mat-card-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " TBD ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 1592:
/*!*******************************************************************!*\
  !*** ./src/app/components/purchase-product/products.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsComponent: () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/products.service */ 9438);






class ProductsComponent {
  constructor(productService) {
    this.productService = productService;
    this.page = 0;
    this.size = 50;
    this.searchTerm = '';
    this.showRelevantItems = false;
    this.showSixtySales = false;
    this.showWoh = false;
    this.showYield = false;
    this.showWithImages = false; // New filter for rows with images
    // Filter dropdowns
    this.originFilter = '';
    this.packSizeFilter = '';
    this.buyerFilter = '';
    // Min CompCost property
    this.minCompCost = 0;
    // Form control
    this.minCompCostControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
    // Unique dropdown options
    this.uniqueOrigins = [];
    this.uniquePackSizes = [];
    this.uniqueBuyers = [];
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.inventoryItemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.inventoryItems$ = this.inventoryItemsSubject.asObservable();
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ProductsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Product Test\n");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
      styles: [".content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 800px;\n  margin: 20px auto;\n  padding: 20px;\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgb(0 0 0 / 10%);\n  text-align: center;\n}\n\n\n\n.image-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-radius: 8px;\n  background-color: rgb(0 16 46 / 100%);\n  text-decoration: none;\n  color: inherit;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 100px;\n  border-radius: 8px;\n}\n\n.inventory-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 32px;\n}\n\n\n\n.search-bar[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 12px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.filter-btn[_ngcontent-%COMP%], \n.relevant-items-btn[_ngcontent-%COMP%] {\n  background-color: #a9a9a9;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 6px 12px;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0;\n  width: 120px;\n}\n\n.filter-btn[_ngcontent-%COMP%]:hover, \n.relevant-items-btn[_ngcontent-%COMP%]:hover {\n  background-color: #888;\n}\n\n\n\n.filters[_ngcontent-%COMP%], \n.button-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 120px;\n}\n\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 5px;\n  color: #333;\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 120px;\n  height: 28px;\n  box-sizing: border-box;\n  max-width: 120px;\n}\n\n#comp-cost-min[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 120px;\n  height: 28px;\n  box-sizing: border-box;\n  max-width: 120px;\n}\n\n.inventory-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 20px;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 8px;\n  text-align: center;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #d3d3d3;\n  color: #333;\n  min-width: 75px;\n}\n\n\n\n.inventory-grid[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: whitesmoke;\n  cursor: pointer;\n}\n\n@media (width <= 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  \n\n  .inventory-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    table-layout: fixed;\n\n    \n\n    word-wrap: break-word;\n\n    \n\n    overflow-x: hidden;\n  }\n\n  .inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    white-space: normal;\n\n    \n\n    font-size: 12px;\n\n    \n\n  }\n\n  \n\n  .filters[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    \n\n    gap: 10px;\n  }\n\n  .filter-group[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n\n    \n\n    text-align: center;\n  }\n\n  \n\n  .filters[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3) {\n    grid-column: span 2;\n\n    \n\n    justify-self: center;\n  }\n\n  \n\n  .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 12px;\n    padding: 5px;\n    box-sizing: border-box;\n  }\n\n  .inventory-grid[_ngcontent-%COMP%]   tr.has-image[_ngcontent-%COMP%] {\n    background-color: #e6f7ff;\n\n    \n\n  }\n\n}\n\n\n.sticky[_ngcontent-%COMP%] {\n  top: 0;\n  position: sticky;\n}\n\n\n.description-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n\n  \n\n  gap: 8px;\n\n  \n\n}\n\n.blue-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: rgb(0 16 46 / 100%);\n  border-radius: 50%;\n  display: inline-block;\n\n  \n\n}\n\n.inventory-grid[_ngcontent-%COMP%]   tr.has-image[_ngcontent-%COMP%] {\n  background-color: #e6f7ff;\n\n  \n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wdXJjaGFzZS1wcm9kdWN0L3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7O0FBRUEsMENBQTBDO0FBQzFDO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQSwrQkFBK0I7QUFDL0I7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUEsa0RBQWtEO0VBQ2xEO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjs7SUFFbkIscURBQXFEO0lBQ3JELHFCQUFxQjs7SUFFckIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtFQUNwQjs7RUFFQTs7SUFFRSxtQkFBbUI7O0lBRW5CLDJDQUEyQztJQUMzQyxlQUFlOztJQUVmLDhDQUE4QztFQUNoRDs7RUFFQSxzQ0FBc0M7RUFDdEM7SUFDRSxhQUFhO0lBQ2IsOEJBQThCOztJQUU5Qix3QkFBd0I7SUFDeEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7O0lBRWYseUNBQXlDO0lBQ3pDLGtCQUFrQjtFQUNwQjs7RUFFQSwyREFBMkQ7RUFDM0Q7SUFDRSxtQkFBbUI7O0lBRW5CLDhDQUE4QztJQUM5QyxvQkFBb0I7RUFDdEI7O0VBRUEscUNBQXFDO0VBQ3JDOzs7SUFHRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx5QkFBeUI7O0lBRXpCLDBCQUEwQjtFQUM1Qjs7QUFFRjs7O0FBR0E7RUFDRSxNQUFNO0VBQ04sZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLHVDQUF1QztFQUN2QyxRQUFROztFQUVSLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixxQkFBcUI7O0VBRXJCLDZFQUE2RTtBQUMvRTs7QUFFQTtFQUNFLHlCQUF5Qjs7RUFFekIsMEJBQTBCO0FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDAgMCAwIC8gMTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBNYWtlIGVudGlyZSBpbWFnZS1jb250YWluZXIgY2xpY2thYmxlICovXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMTYgNDYgLyAxMDAlKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmludmVudG9yeS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLyogVXBkYXRlZCBTZWFyY2ggQmFyICovXG4uc2VhcmNoLWJhciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2VhcmNoLWJhciBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZmlsdGVyLWJ0bixcbi5yZWxldmFudC1pdGVtcy1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTlhOWE5O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5maWx0ZXItYnRuOmhvdmVyLFxuLnJlbGV2YW50LWl0ZW1zLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG59XG5cbi8qIEZpbHRlciBHcm91cCBhbmQgRHJvcGRvd25zICovXG4uZmlsdGVycyxcbi5idXR0b24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZpbHRlci1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmZpbHRlci1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZpbHRlcnMgc2VsZWN0LFxuLmZpbHRlcnMgaW5wdXRbdHlwZT1cInRleHRcIl0sXG4uZmlsdGVycyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG5cbiNjb21wLWNvc3QtbWluIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1heC13aWR0aDogMTIwcHg7XG59XG5cbi5pbnZlbnRvcnktZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW52ZW50b3J5LWdyaWQgdGgsXG4uaW52ZW50b3J5LWdyaWQgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmludmVudG9yeS1ncmlkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcbiAgY29sb3I6ICMzMzM7XG4gIG1pbi13aWR0aDogNzVweDtcbn1cblxuLyogSG92ZXIgZWZmZWN0IG9uIHRhYmxlIHJvd3MgKi9cbi5pbnZlbnRvcnktZ3JpZCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSA3NjhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC8qIEVuc3VyZSAuaW52ZW50b3J5LWdyaWQgZml0cyB3aXRoaW4gLmNvbnRhaW5lciAqL1xuICAuaW52ZW50b3J5LWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG5cbiAgICAvKiBFbnN1cmUgY29sdW1ucyBkb24ndCBleHBhbmQgYmV5b25kIHRoZSBjb250YWluZXIgKi9cbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgICAvKiBXcmFwIHRleHQgdG8gcHJldmVudCBvdmVyZmxvdyAqL1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuXG4gIC5pbnZlbnRvcnktZ3JpZCB0aCxcbiAgLmludmVudG9yeS1ncmlkIHRkIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuXG4gICAgLyogQWxsb3cgd3JhcHBpbmcgb2YgY29udGVudCBpbnNpZGUgY2VsbHMgKi9cbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAvKiBBZGp1c3QgZm9udCBzaXplIGZvciBiZXR0ZXIgZml0IG9uIG1vYmlsZSAqL1xuICB9XG5cbiAgLyogQWRqdXN0IGZpbHRlcnMgbGF5b3V0IHRvIHR3byByb3dzICovXG4gIC5maWx0ZXJzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblxuICAgIC8qIFR3byBmaWx0ZXJzIHBlciByb3cgKi9cbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAuZmlsdGVyLWdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG5cbiAgICAvKiBBbGxvdyBmdWxsIHdpZHRoIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAvKiBIYW5kbGUgY2FzZSB3aGVyZSBvbmUgZmlsdGVyIGFwcGVhcnMgb24gdGhlIHNlY29uZCByb3cgKi9cbiAgLmZpbHRlcnMgPiA6bnRoLWNoaWxkKDMpIHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xuXG4gICAgLyogQ2VudGVyIHRoZSB0aGlyZCBmaWx0ZXIgb24gdGhlIHNlY29uZCByb3cgKi9cbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgfVxuXG4gIC8qIEFkanVzdCB0aGUgc2l6ZSBvZiBmaWx0ZXIgaW5wdXRzICovXG4gIC5maWx0ZXJzIHNlbGVjdCxcbiAgLmZpbHRlcnMgaW5wdXRbdHlwZT1cInRleHRcIl0sXG4gIC5maWx0ZXJzIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5pbnZlbnRvcnktZ3JpZCB0ci5oYXMtaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmY7XG5cbiAgICAvKiBMaWdodCBibHVlIGJhY2tncm91bmQgKi9cbiAgfVxuXG59XG5cblxuLnN0aWNreSB7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IHN0aWNreTtcbn1cblxuXG4uZGVzY3JpcHRpb24tY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLyogQWxpZ25zIHRoZSBkb3QgYW5kIHRleHQgdmVydGljYWxseSAqL1xuICBnYXA6IDhweDtcblxuICAvKiBBZGRzIHNwYWNpbmcgYmV0d2VlbiB0aGUgZG90IGFuZCB0ZXh0ICovXG59XG5cbi5ibHVlLWRvdCB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDE2IDQ2IC8gMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIC8qIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAyNTUsIDAuNik7IC8qIE9wdGlvbmFsOiBBZGQgYSBnbG93IGVmZmVjdCAqL1xufVxuXG4uaW52ZW50b3J5LWdyaWQgdHIuaGFzLWltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjtcblxuICAvKiBMaWdodCBibHVlIGJhY2tncm91bmQgKi9cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 359:
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/purchase-product/purchase-product-dialog/purchase-product-dialog.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PurchaseProductDialogComponent: () => (/* binding */ PurchaseProductDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 4646);




















function PurchaseProductDialogComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Product description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PurchaseProductDialogComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pack size is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PurchaseProductDialogComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pack size must be greater than or equal to 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PurchaseProductDialogComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Default cost price is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PurchaseProductDialogComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Default cost price must be greater than or equal to 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PurchaseProductDialogComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const harvestType_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", harvestType_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", harvestType_r1.harvestType, " ");
  }
}
function PurchaseProductDialogComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Harvest type is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PurchaseProductDialogComponent_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Shelf life must be greater than or equal to 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PurchaseProductDialogComponent_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rotation days must be greater than or equal to 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PurchaseProductDialogComponent_mat_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const origin_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", origin_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", origin_r2.originName, " ");
  }
}
function PurchaseProductDialogComponent_mat_error_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Origin is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PurchaseProductDialogComponent_mat_option_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r3.categoryName, " ");
  }
}
function PurchaseProductDialogComponent_mat_error_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Category is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PurchaseProductDialogComponent_mat_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unitType_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unitType_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", unitType_r4.unitTypeName, " ");
  }
}
function PurchaseProductDialogComponent_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unit type is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PurchaseProductDialogComponent_mat_option_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const defaultBuyerUser_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", defaultBuyerUser_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", defaultBuyerUser_r5.firstName, " ", defaultBuyerUser_r5.lastName, " ");
  }
}
function PurchaseProductDialogComponent_mat_error_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Default buyer is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class PurchaseProductDialogComponent {
  constructor() {
    this.dialogTitle = "";
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA);
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
  }
  ngOnInit() {
    this.initForm();
    this.dialogTitle = this.data.mode === "add" ? "Add New Purchase Product" : "Edit Purchase Product";
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.productForm.valid) {
      const formValues = this.productForm.getRawValue();
      if (this.data.mode === "add") {
        const postData = {
          purchaseProductDescription: formValues.purchaseProductDescription,
          packSize: formValues.packSize,
          defaultCostPrice: formValues.defaultCostPrice,
          harvestTypeId: formValues.harvestTypeId,
          shelfLife: formValues.shelfLife,
          isFixedPack: formValues.isFixedPack,
          isActive: formValues.isActive,
          notes: formValues.notes,
          isAllowLbs: formValues.isAllowLbs,
          rotationDays: formValues.rotationDays,
          defaultBuyerUserId: formValues.defaultBuyerUserId,
          nonInventory: formValues.nonInventory,
          originId: formValues.originId,
          categoryId: formValues.categoryId,
          unitTypeId: formValues.unitTypeId
        };
        this.dialogRef.close(postData);
      } else {
        const patchData = {
          id: this.data.purchaseProduct.id,
          purchaseProductDescription: formValues.purchaseProductDescription,
          packSize: formValues.packSize,
          defaultCostPrice: formValues.defaultCostPrice,
          harvestTypeId: formValues.harvestTypeId,
          shelfLife: formValues.shelfLife,
          isFixedPack: formValues.isFixedPack,
          isActive: formValues.isActive,
          notes: formValues.notes,
          isAllowLbs: formValues.isAllowLbs,
          rotationDays: formValues.rotationDays,
          defaultBuyerUserId: formValues.defaultBuyerUserId,
          nonInventory: formValues.nonInventory,
          originId: formValues.originId,
          categoryId: formValues.categoryId,
          unitTypeId: formValues.unitTypeId
        };
        this.dialogRef.close(patchData);
      }
    }
  }
  initForm() {
    this.productForm = this.fb.group({
      purchaseProductDescription: [this.data.purchaseProduct?.purchaseProductDescription || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      packSize: [this.data.purchaseProduct?.packSize || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      defaultCostPrice: [this.data.purchaseProduct?.defaultCostPrice || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      harvestTypeId: [this.data.purchaseProduct?.harvestType?.id || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      shelfLife: [this.data.purchaseProduct?.shelfLife || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      isFixedPack: [this.data.purchaseProduct?.isFixedPack || false],
      isActive: [this.data.purchaseProduct?.isActive || true],
      notes: [this.data.purchaseProduct?.notes || ""],
      isAllowLbs: [this.data.purchaseProduct?.isAllowLbs || false],
      rotationDays: [this.data.purchaseProduct?.rotationDays || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      defaultBuyerUserId: [this.data.purchaseProduct?.defaultBuyerUser?.id || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      nonInventory: [this.data.purchaseProduct?.nonInventory || false],
      originId: [this.data.purchaseProduct?.origin?.id || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      categoryId: [this.data.purchaseProduct?.category?.id || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      unitTypeId: [this.data.purchaseProduct?.unitType?.id || null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  static {
    this.ɵfac = function PurchaseProductDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PurchaseProductDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PurchaseProductDialogComponent,
      selectors: [["app-purchase-product-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 86,
      vars: 21,
      consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], [1, "form-row"], ["appearance", "fill", 1, "form-field"], ["formControlName", "purchaseProductDescription", "matInput", "", "placeholder", "Enter product description"], [4, "ngIf"], ["formControlName", "packSize", "matInput", "", "placeholder", "Enter pack size", "type", "number"], ["formControlName", "defaultCostPrice", "matInput", "", "placeholder", "Enter default cost price", "type", "number"], ["formControlName", "harvestTypeId"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "shelfLife", "matInput", "", "placeholder", "Enter shelf life in days", "type", "number"], ["formControlName", "rotationDays", "matInput", "", "placeholder", "Enter rotation days", "type", "number"], ["formControlName", "originId"], ["formControlName", "categoryId"], ["formControlName", "unitTypeId"], ["formControlName", "defaultBuyerUserId"], [1, "toggles-row"], ["formControlName", "isFixedPack"], ["formControlName", "isActive"], ["formControlName", "isAllowLbs"], ["formControlName", "nonInventory"], ["formControlName", "notes", "matInput", "", "placeholder", "Enter notes", "rows", "3"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"], [3, "value"]],
      template: function PurchaseProductDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PurchaseProductDialogComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "div", 2)(5, "mat-form-field", 3)(6, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Product Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PurchaseProductDialogComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2)(11, "mat-form-field", 3)(12, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pack Size");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PurchaseProductDialogComponent_mat_error_15_Template, 2, 0, "mat-error", 5)(16, PurchaseProductDialogComponent_mat_error_16_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3)(18, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Default Cost Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PurchaseProductDialogComponent_mat_error_21_Template, 2, 0, "mat-error", 5)(22, PurchaseProductDialogComponent_mat_error_22_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2)(24, "mat-form-field", 3)(25, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "HarvestType");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PurchaseProductDialogComponent_mat_option_28_Template, 2, 2, "mat-option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PurchaseProductDialogComponent_mat_error_29_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 3)(31, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Shelf Life (days)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PurchaseProductDialogComponent_mat_error_34_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2)(36, "mat-form-field", 3)(37, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Rotation Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PurchaseProductDialogComponent_mat_error_40_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2)(42, "mat-form-field", 3)(43, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Origin");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PurchaseProductDialogComponent_mat_option_46_Template, 2, 2, "mat-option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, PurchaseProductDialogComponent_mat_error_47_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 3)(49, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PurchaseProductDialogComponent_mat_option_52_Template, 2, 2, "mat-option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, PurchaseProductDialogComponent_mat_error_53_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2)(55, "mat-form-field", 3)(56, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Unit Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-select", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, PurchaseProductDialogComponent_mat_option_59_Template, 2, 2, "mat-option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, PurchaseProductDialogComponent_mat_error_60_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 3)(62, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Default Buyer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, PurchaseProductDialogComponent_mat_option_65_Template, 2, 3, "mat-option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PurchaseProductDialogComponent_mat_error_66_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16)(68, "mat-slide-toggle", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Fixed Pack");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-slide-toggle", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-slide-toggle", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Allow Lbs");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-slide-toggle", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Non-Inventory");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2)(77, "mat-form-field", 3)(78, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "textarea", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-dialog-actions", 22)(82, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseProductDialogComponent_Template_button_click_82_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_10_0;
          let tmp_12_0;
          let tmp_14_0;
          let tmp_16_0;
          let tmp_18_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.productForm.get("purchaseProductDescription")) == null ? null : tmp_2_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.productForm.get("packSize")) == null ? null : tmp_3_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.productForm.get("packSize")) == null ? null : tmp_4_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.productForm.get("defaultCostPrice")) == null ? null : tmp_5_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.productForm.get("defaultCostPrice")) == null ? null : tmp_6_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.harvestTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.productForm.get("harvestTypeId")) == null ? null : tmp_8_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.productForm.get("shelfLife")) == null ? null : tmp_9_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx.productForm.get("rotationDays")) == null ? null : tmp_10_0.hasError("min"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.origins);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx.productForm.get("originId")) == null ? null : tmp_12_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx.productForm.get("categoryId")) == null ? null : tmp_14_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.unitTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx.productForm.get("unitTypeId")) == null ? null : tmp_16_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.defaultBuyerUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx.productForm.get("defaultBuyerUserId")) == null ? null : tmp_18_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.productForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.mode === "add" ? "Add" : "Update", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["mat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n}\n\n.toggles-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n\n.info-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 16px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n\n.info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 16px;\n  font-size: 16px;\n  color: rgb(0 0 0 / 87%);\n}\n\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-right: 8px;\n  color: rgb(0 0 0 / 60%);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wdXJjaGFzZS1wcm9kdWN0L3B1cmNoYXNlLXByb2R1Y3QtZGlhbG9nL3B1cmNoYXNlLXByb2R1Y3QtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmZvcm0tZmllbGQge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvZ2dsZXMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5pbmZvLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5pbmZvLXNlY3Rpb24gaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2IoMCAwIDAgLyA4NyUpO1xufVxuXG4uaW5mby1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBjb2xvcjogcmdiKDAgMCAwIC8gNjAlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 6123:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/purchase-product/purchase-product-list/purchase-product-list.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PurchaseProductListComponent: () => (/* binding */ PurchaseProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/collections */ 7989);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirmation-dialog/confirmation-service.service */ 6620);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/snackbar.service */ 2365);
/* harmony import */ var _purchase_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../purchase-product-service */ 9130);
/* harmony import */ var _purchase_product_view_purchase_product_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../purchase-product-view/purchase-product-view.component */ 9411);
/* harmony import */ var _purchase_product_dialog_purchase_product_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../purchase-product-dialog/purchase-product-dialog.component */ 359);
/* harmony import */ var _harvest_type_harvest_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../harvest-type/harvest-type.service */ 1219);
/* harmony import */ var _unit_type_unit_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../unit-type/unit-type.service */ 2681);
/* harmony import */ var _categoty_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../categoty/category.service */ 237);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../user/user.service */ 3757);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-infinite-scroll */ 6739);
/* harmony import */ var _origin_origin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../origin/origin.service */ 2579);

































function PurchaseProductListComponent_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PurchaseProductListComponent_mat_icon_10_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const searchInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.clearSearch(searchInput_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PurchaseProductListComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 28)(1, "mat-checkbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function PurchaseProductListComponent_th_21_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event ? ctx_r2.toggleAllRows() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
  }
}
function PurchaseProductListComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 30)(1, "mat-checkbox", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function PurchaseProductListComponent_td_22_Template_mat_checkbox_change_1_listener($event) {
      const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event ? ctx_r2.selection.toggle(product_r7) : null);
    })("click", function PurchaseProductListComponent_td_22_Template_mat_checkbox_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(product_r7));
  }
}
function PurchaseProductListComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PurchaseProductListComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r8.id);
  }
}
function PurchaseProductListComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PurchaseProductListComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r9.purchaseProductDescription);
  }
}
function PurchaseProductListComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PurchaseProductListComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r10.category == null ? null : product_r10.category.categoryName);
  }
}
function PurchaseProductListComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Origin");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PurchaseProductListComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r11.origin == null ? null : product_r11.origin.originName);
  }
}
function PurchaseProductListComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Pack Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PurchaseProductListComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", product_r12.packSize, " ", product_r12.unitType == null ? null : product_r12.unitType.name, "");
  }
}
function PurchaseProductListComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Default Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PurchaseProductListComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, product_r13.defaultCostPrice));
  }
}
function PurchaseProductListComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function PurchaseProductListComponent_td_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PurchaseProductListComponent_td_43_Template_button_click_1_listener() {
      const product_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.openViewDialog(product_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PurchaseProductListComponent_td_43_Template_button_click_4_listener() {
      const product_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.openEditDialog(product_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PurchaseProductListComponent_td_43_Template_button_click_7_listener() {
      const product_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.deletePurchaseProduct(product_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function PurchaseProductListComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 37);
  }
}
function PurchaseProductListComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tr", 38);
  }
}
function PurchaseProductListComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 39)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "No purchase products available");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
class PurchaseProductListComponent {
  constructor() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource([]);
    this.displayedColumns = ["select", "id", "purchaseProductDescription", "category", "origin", "packSize", "defaultCostPrice", "actions"];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__.SelectionModel(true, []);
    this.searchQuery = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.signal)("");
    this.searchInputSubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this.purchaseProductService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_purchase_product_service__WEBPACK_IMPORTED_MODULE_2__.PurchaseProductService);
    this.harvestTypeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_harvest_type_harvest_type_service__WEBPACK_IMPORTED_MODULE_5__.HarvestTypeService);
    this.originService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_origin_origin_service__WEBPACK_IMPORTED_MODULE_9__.OriginService);
    this.unitTypeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_unit_type_unit_type_service__WEBPACK_IMPORTED_MODULE_6__.UnitTypeService);
    this.categoryService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_categoty_category_service__WEBPACK_IMPORTED_MODULE_7__.CategoryService);
    this.userService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_user_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService); // TODO
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog);
    this.snackBarService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService);
    this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmationService);
    // Effect to update the table data whenever the products signal changes
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.effect)(() => {
      this.updateTable(this.purchaseProductService.purchaseProducts());
    });
  }
  ngOnInit() {
    this.originService.loadAllOrigins();
    this.harvestTypeService.loadAllHarvestTypes();
    this.unitTypeService.loadAllUnitTypes();
    this.categoryService.loadAllCategories();
    this.userService.loadAllUsers();
    // Setup debounced search
    this.searchInputSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(searchTerm => {
      this.purchaseProductService.setSearchTerm(searchTerm);
    });
  }
  ngAfterViewInit() {
    // Configure sorting
    this.configureSort();
    this.sort.sortChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(() => {
      // Pass the sort parameters to the service
      this.purchaseProductService.setSortParameters(this.sort.active, this.sort.direction);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.purchaseProductService.setSearchTerm("");
  }
  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      const value = this.getPropertyByPath(data, sortHeaderId);
      // Handle different data types for sorting
      if (typeof value === "string") {
        return value.toLowerCase(); // Case-insensitive string sorting
      } else if (value instanceof Date) {
        return value.getTime(); // Convert Date to timestamp (number) for sorting
      } else if (value == null) {
        return ""; // Treat null/undefined as an empty string
      } else {
        return value; // Default for numbers and other types
      }
    };
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows && numRows > 0;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  onSearch(event) {
    const value = event.target?.value;
    this.searchQuery.set(value);
    this.searchInputSubject.next(value);
  }
  clearSearch(inputElement) {
    inputElement.value = "";
    this.searchQuery.set("");
    this.searchInputSubject.next("");
    inputElement.focus();
  }
  onScroll() {
    this.purchaseProductService.loadNextPage();
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(_purchase_product_dialog_purchase_product_dialog_component__WEBPACK_IMPORTED_MODULE_4__.PurchaseProductDialogComponent, {
      width: "600px",
      data: {
        mode: "add",
        origins: this.originService.origins(),
        harvestTypes: this.harvestTypeService.harvestTypes(),
        categories: this.categoryService.categories(),
        unitTypes: this.unitTypeService.unitTypes(),
        defaultBuyerUsers: this.userService.users()
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        this.purchaseProductService.createPurchaseProduct(result);
        this.snackBarService.showSuccess("Purchase product added successfully");
      }
    });
  }
  openEditDialog(purchaseProduct) {
    // Implementation for editing a purchase product
    // Similar to the vendor component's implementation
    const dialogRef = this.dialog.open(_purchase_product_dialog_purchase_product_dialog_component__WEBPACK_IMPORTED_MODULE_4__.PurchaseProductDialogComponent, {
      width: "600px",
      data: {
        mode: "edit",
        purchaseProduct: purchaseProduct,
        origins: this.originService.origins(),
        harvestTypes: this.harvestTypeService.harvestTypes(),
        categories: this.categoryService.categories(),
        unitTypes: this.unitTypeService.unitTypes(),
        defaultBuyerUsers: this.userService.users()
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        this.purchaseProductService.updatePurchaseProduct(purchaseProduct.id, result);
        this.snackBarService.showSuccess("Vendor added successfully");
      }
    });
  }
  openViewDialog(purchaseProduct) {
    this.dialog.open(_purchase_product_view_purchase_product_view_component__WEBPACK_IMPORTED_MODULE_3__.PurchaseProductViewDialogComponent, {
      width: "600px",
      data: {
        purchaseProduct
      },
      disableClose: false
    });
  }
  deletePurchaseProduct(purchaseProduct) {
    this.confirmationService.confirmDeletion(`purchase product "${purchaseProduct.purchaseProductDescription}"`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.purchaseProductService.deletePurchaseProduct(purchaseProduct.id).subscribe({
          next: () => {
            // Reload first page after deletion
            this.purchaseProductService.loadPurchaseProducts(0, true);
            this.snackBarService.showSuccess("Purchase product deleted successfully");
          }
        });
      }
    });
  }
  deleteSelectedPurchaseProducts() {
    const selectedIds = this.selection.selected.map(product => product.id);
    if (selectedIds.length === 0) {
      this.snackBarService.showError("No purchase products selected");
      return;
    }
    this.confirmationService.confirmBulkDeletion(selectedIds.length, "purchase product").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.purchaseProductService.deleteManyPurchaseProducts(selectedIds).subscribe({
          next: () => {
            // Reload first page after deletion
            this.purchaseProductService.loadPurchaseProducts(0, true);
            this.selection.clear();
            this.snackBarService.showSuccess("Selected purchase products deleted successfully");
          }
        });
      }
    });
  }
  /**
   * Helper to get nested properties like 'category.name'
   */
  getPropertyByPath(obj, path) {
    return path.split(".").reduce((o, i) => o ? o[i] : undefined, obj);
  }
  // Function to update table data
  updateTable(purchaseProducts) {
    this.dataSource.data = purchaseProducts;
    // Maintain sort state after data changes
    if (this.sort && this.dataSource.sort !== this.sort) {
      this.configureSort();
    }
  }
  static {
    this.ɵfac = function PurchaseProductListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PurchaseProductListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: PurchaseProductListComponent,
      selectors: [["app-purchase-product-list"]],
      viewQuery: function PurchaseProductListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
      decls: 47,
      vars: 12,
      consts: [["searchInput", ""], ["infiniteScroll", "", 1, "container", 3, "scrolled", "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow"], ["color", "primary"], [1, "toolbar-spacer"], [1, "search-container", "margin-right"], [1, "search-icon"], ["placeholder", "Search...", "type", "text", 3, "input", "value"], ["class", "clear-search", 3, "click", 4, "ngIf"], ["color", "accent", "mat-mini-fab", "", "matTooltip", "Add new Purchase Product", 1, "margin-right", 3, "click"], ["color", "accent", "mat-raised-button", "", 3, "click", "disabled"], [1, "mat-elevation-z8", "main-container"], ["mat-table", "", "matSort", "", "matSortActive", "purchaseProductDescription", "matSortDirection", "asc", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "purchaseProductDescription"], ["matColumnDef", "category"], ["matColumnDef", "origin"], ["matColumnDef", "packSize"], ["matColumnDef", "defaultCostPrice"], ["matColumnDef", "actions"], ["class", "action-buttons", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "no-data", 4, "ngIf"], [1, "clear-search", 3, "click"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "change", "click", "checked"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "action-buttons"], ["color", "primary", "mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "warn", "mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data"]],
      template: function PurchaseProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("scrolled", function PurchaseProductListComponent_Template_div_scrolled_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onScroll());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-toolbar", 2)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Purchase Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4)(6, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "input", 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function PurchaseProductListComponent_Template_input_input_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.onSearch($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, PurchaseProductListComponent_mat_icon_10_Template, 2, 0, "mat-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PurchaseProductListComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.openAddDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PurchaseProductListComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.deleteSelectedPurchaseProducts());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 10)(19, "table", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](20, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, PurchaseProductListComponent_th_21_Template, 2, 2, "th", 13)(22, PurchaseProductListComponent_td_22_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](23, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, PurchaseProductListComponent_th_24_Template, 2, 0, "th", 16)(25, PurchaseProductListComponent_td_25_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](26, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, PurchaseProductListComponent_th_27_Template, 2, 0, "th", 16)(28, PurchaseProductListComponent_td_28_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](29, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, PurchaseProductListComponent_th_30_Template, 2, 0, "th", 16)(31, PurchaseProductListComponent_td_31_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](32, 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, PurchaseProductListComponent_th_33_Template, 2, 0, "th", 16)(34, PurchaseProductListComponent_td_34_Template, 2, 1, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](35, 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, PurchaseProductListComponent_th_36_Template, 2, 0, "th", 16)(37, PurchaseProductListComponent_td_37_Template, 2, 2, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](38, 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, PurchaseProductListComponent_th_39_Template, 2, 0, "th", 16)(40, PurchaseProductListComponent_td_40_Template, 3, 3, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](41, 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, PurchaseProductListComponent_th_42_Template, 2, 0, "th", 13)(43, PurchaseProductListComponent_td_43_Template, 10, 0, "td", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, PurchaseProductListComponent_tr_44_Template, 1, 0, "tr", 24)(45, PurchaseProductListComponent_tr_45_Template, 1, 0, "tr", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, PurchaseProductListComponent_div_46_Template, 3, 0, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.searchQuery());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.searchQuery().length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Delete Selected (", ctx.selection.selected.length, ") ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.CurrencyPipe, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatMiniFabButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbar, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__.InfiniteScrollDirective],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background-color: rgb(0 0 0 / 4%);\n}\n\n.no-data[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-style: italic;\n  color: rgb(0 0 0 / 54%);\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f1f1;\n  border-radius: 20px;\n  padding: 5px 10px;\n  width: 200px;\n  position: relative;\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: gray;\n  margin-right: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n\n.clear-search[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: gray;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: calc(100vh - 90px);\n  overflow-y: auto;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wdXJjaGFzZS1wcm9kdWN0L3B1cmNoYXNlLXByb2R1Y3QtbGlzdC9wdXJjaGFzZS1wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm1hdC1tZGMtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gNCUpO1xufVxuXG4ubm8tZGF0YSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogcmdiKDAgMCAwIC8gNTQlKTtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXJnaW4tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xlYXItc2VhcmNoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDkwcHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 9130:
/*!*************************************************************************!*\
  !*** ./src/app/components/purchase-product/purchase-product-service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PurchaseProductService: () => (/* binding */ PurchaseProductService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);




class PurchaseProductService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/purchase-products`;
    // State signals
    this.purchaseProductsList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    // Exposed computed signals
    this.purchaseProducts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.purchaseProductsList());
    this.totalElements = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(0);
    this.total = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.totalElements());
    this.totalPages = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(0);
    this.pages = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.totalPages());
    this.currentPage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(0);
    this.page = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.currentPage());
    this.hasMoreData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.currentPage() < this.totalPages() - 1);
    this.pageSize = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(50);
    this.size = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.pageSize());
    this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.loading());
    this.searchTerm = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)("");
    this.currentSearchTerm = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.searchTerm());
    this.sortField = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)("purchaseProductDescription");
    this.currentSortField = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.sortField());
    this.sortDirection = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)("asc");
    this.currentSortDirection = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.sortDirection());
    // Initial load of first page
    this.loadPurchaseProducts(0);
  }
  /**
   * Load purchase products with pagination and optional search
   */
  loadPurchaseProducts(page, resetList = false) {
    this.loading.set(true);
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("page", page.toString()).set("size", this.pageSize().toString()).set("sort", `${this.sortField()},${this.sortDirection()}`); // Add this line
    if (this.searchTerm()) {
      params = params.set("search", this.searchTerm());
    }
    this.http.get(this.baseUrl, {
      params
    }).subscribe({
      next: response => {
        this.totalElements.set(response.totalElements);
        this.totalPages.set(response.totalPages);
        this.currentPage.set(page);
        if (resetList) {
          this.purchaseProductsList.set(response.content);
        } else {
          this.purchaseProductsList.update(list => [...list, ...response.content]);
        }
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  /**
   * Load next page of purchase products
   */
  loadNextPage() {
    if (this.hasMoreData() && !this.isLoading()) {
      this.loadPurchaseProducts(this.currentPage() + 1);
    }
  }
  /**
   * Set search term and reload from first page
   */
  setSearchTerm(term) {
    this.searchTerm.set(term);
    this.loadPurchaseProducts(0, true);
  }
  setSortParameters(field, direction) {
    this.sortField.set(field);
    this.sortDirection.set(direction);
    // Reload data with new sort parameters
    this.loadPurchaseProducts(0, true);
  }
  /**
   * Get a single purchase product by ID
   */
  getPurchaseProductById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  /**
   * Create a new purchase product
   */
  createPurchaseProduct(purchaseProduct) {
    this.http.post(this.baseUrl, purchaseProduct).subscribe({
      next: newPurchaseProduct => {
        // Update the signal with the new vendor
        this.purchaseProductsList.update(list => [...list, newPurchaseProduct]);
      }
    });
  }
  /**
   * Update an existing purchase product
   */
  updatePurchaseProduct(id, purchaseProductUpdate) {
    this.http.patch(`${this.baseUrl}/${id}`, purchaseProductUpdate).subscribe({
      next: updatePurchaseProductGetDto => {
        this.purchaseProductsList.update(list => list.map(purchaseProductGetDto => purchaseProductGetDto.id === id ? updatePurchaseProductGetDto : purchaseProductGetDto));
      }
    });
  }
  /**
   * Delete a purchase product by ID
   */
  deletePurchaseProduct(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  /**
   * Delete multiple purchase products by IDs
   */
  deleteManyPurchaseProducts(ids) {
    return this.http.delete(`${this.baseUrl}/bulk`, {
      body: {
        ids
      }
    });
  }
  static {
    this.ɵfac = function PurchaseProductService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PurchaseProductService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PurchaseProductService,
      factory: PurchaseProductService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 9411:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/purchase-product/purchase-product-view/purchase-product-view.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PurchaseProductViewDialogComponent: () => (/* binding */ PurchaseProductViewDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);








class PurchaseProductViewDialogComponent {
  constructor() {
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA);
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef);
  }
  ngOnInit() {}
  close() {
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function PurchaseProductViewDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PurchaseProductViewDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PurchaseProductViewDialogComponent,
      selectors: [["app-purchase-product-view-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 83,
      vars: 18,
      consts: [["mat-dialog-title", ""], [1, "info-section"], [1, "detail-item"], [1, "info-label"], ["align", "end"], ["mat-button", "", 3, "click"]],
      template: function PurchaseProductViewDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Purchase Product Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "div", 1)(4, "div", 2)(5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Description:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2)(10, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pack Size:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Default Cost Price:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2)(21, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Harvest Type:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2)(26, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Shelf Life:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2)(31, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Fixed Pack:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2)(36, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Active:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2)(41, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Allow Lbs:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2)(46, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Rotation Days:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2)(51, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Non-Inventory:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 2)(56, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Default Buyer:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2)(61, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Origin:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2)(66, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Category:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 2)(71, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Unit Type:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 2)(76, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Notes:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-dialog-actions", 4)(81, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseProductViewDialogComponent_Template_button_click_81_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Close");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.purchaseProduct.purchaseProductDescription);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.purchaseProduct.packSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 16, ctx.data.purchaseProduct.defaultCostPrice));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.purchaseProduct.harvestType == null ? null : ctx.data.purchaseProduct.harvestType.harvestType);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.purchaseProduct.shelfLife, " days");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.purchaseProduct.isFixedPack ? "Yes" : "No");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.purchaseProduct.isActive ? "Yes" : "No");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.purchaseProduct.isAllowLbs ? "Yes" : "No");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.purchaseProduct.rotationDays);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.purchaseProduct.nonInventory ? "Yes" : "No");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.data.purchaseProduct.defaultBuyerUser == null ? null : ctx.data.purchaseProduct.defaultBuyerUser.firstName, " ", ctx.data.purchaseProduct.defaultBuyerUser == null ? null : ctx.data.purchaseProduct.defaultBuyerUser.lastName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.purchaseProduct.origin == null ? null : ctx.data.purchaseProduct.origin.originName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.purchaseProduct.category == null ? null : ctx.data.purchaseProduct.category.categoryName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.purchaseProduct.unitType == null ? null : ctx.data.purchaseProduct.unitType.unitTypeName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.purchaseProduct.notes);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
      styles: [".info-section[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n\n.detail-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-right: 8px;\n  color: rgb(0 0 0 / 60%);\n  min-width: 160px;\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wdXJjaGFzZS1wcm9kdWN0L3B1cmNoYXNlLXByb2R1Y3Qtdmlldy9wdXJjaGFzZS1wcm9kdWN0LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5kZXRhaWwtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5pbmZvLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGNvbG9yOiByZ2IoMCAwIDAgLyA2MCUpO1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 421:
/*!***********************************************************************!*\
  !*** ./src/app/components/sidebar-layout/sidebar-layout.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarLayoutComponent: () => (/* binding */ SidebarLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);























const _c0 = ["drawer"];
function SidebarLayoutComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Logged in as ", name_r2, "");
  }
}
class SidebarLayoutComponent {
  constructor() {
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
    // Signal to track sidebar state
    this.sidebarOpened = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(true);
    this.firstName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.authService.firstName());
  }
  // Toggle sidebar open/closed
  toggleSidebar() {
    this.sidebarOpened.update(state => !state);
  }
  static {
    this.ɵfac = function SidebarLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SidebarLayoutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SidebarLayoutComponent,
      selectors: [["app-sidebar-layout"]],
      viewQuery: function SidebarLayoutComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 114,
      vars: 4,
      consts: [["drawer", ""], [1, "sidebar-container"], ["color", "primary"], [1, "toolbar-left"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "toolbar-title"], [1, "toolbar-center"], ["alt", "Logo", "src", "./assets/logo.png", 1, "logo"], [1, "toolbar-right"], ["class", "logged-in", 4, "ngIf"], [1, "sidenav-container"], ["mode", "side", 1, "sidenav", 3, "opened"], ["mat-list-item", "", "routerLink", "/dashboard", "routerLinkActive", "active-link"], ["matListItemIcon", ""], ["matListItemTitle", ""], ["mat-list-item", "", "routerLink", "/data", "routerLinkActive", "active-link"], [1, "mat-elevation-z0"], ["mat-list-item", "", "routerLink", "/users", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/admin/roles", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/admin/permissions", "routerLinkActive", "active-link"], [1, "panel-title-content"], ["mat-list-item", "", "routerLink", "/reports/summary", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/reports/analytics", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/reports/export", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/profile", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/help", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/logout", "routerLinkActive", "active-link"], [1, "sidenav-content"], [1, "content-container"], [1, "logged-in"]],
      template: function SidebarLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "mat-toolbar", 2)(2, "div", 3)(3, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarLayoutComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.toggleSidebar());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "PFFC Application");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SidebarLayoutComponent_span_11_Template, 2, 1, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-sidenav-container", 10)(13, "mat-sidenav", 11, 0)(15, "mat-nav-list")(16, "a", 12)(17, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 15)(22, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "storage");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Data Explorer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-accordion")(28, "mat-expansion-panel", 16)(29, "mat-nav-list")(30, "a", 17)(31, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "people");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 18)(36, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "verified_user");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Roles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 19)(41, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "security");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Permissions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-accordion")(46, "mat-expansion-panel", 16)(47, "mat-expansion-panel-header")(48, "mat-panel-title")(49, "div", 20)(50, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Administration");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-nav-list")(55, "a", 17)(56, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "people");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 18)(61, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "verified_user");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Roles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 19)(66, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "security");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Permissions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-expansion-panel", 16)(71, "mat-expansion-panel-header")(72, "mat-panel-title")(73, "div", 20)(74, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "insert_chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-nav-list")(79, "a", 21)(80, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "summarize");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Summary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 22)(85, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "a", 23)(90, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "download");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Export");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-nav-list")(96, "a", 24)(97, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "account_circle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "a", 25)(102, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "help");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Help");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 26)(107, "mat-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "exit_to_app");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "mat-sidenav-content", 27)(112, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.sidebarOpened() ? "Hide menu" : "Show menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sidebarOpened() ? "menu_open" : "menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firstName());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", ctx.sidebarOpened());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItemIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItemTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanelTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip],
      styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n}\n\n.toolbar-left[_ngcontent-%COMP%], .toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.toolbar-center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n}\n\n.toolbar-title[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.logged-in[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 90vh;\n}\n\n.sidebar-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  flex: 1;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  padding: 8px;\n  min-width: 95%;\n  width: fit-content;\n}\n\n.active-link[_ngcontent-%COMP%] {\n  background-color: rgb(0 0 0 / 4%);\n}\n\n.panel-title-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\nmat-expansion-panel[_ngcontent-%COMP%] {\n  box-shadow: none;\n  background: transparent;\n}\n\nmat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLWxheW91dC9zaWRlYmFyLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsT0FBTztBQUNUOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLnRvb2xiYXItbGVmdCwgLnRvb2xiYXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9vbGJhci1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9vbGJhci10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5sb2dnZWQtaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuXG4uc2lkZWJhci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWluLXdpZHRoOiA5NSU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gNCUpO1xufVxuXG4ucGFuZWwtdGl0bGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 4573:
/*!*************************************************************************************!*\
  !*** ./src/app/components/unit-type/unit-type-dialog/unit-type-dialog.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnitTypeDialogComponent: () => (/* binding */ UnitTypeDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
// src/app/components/unitType-dialog/unit-type-dialog.component.ts














function UnitTypeDialogComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class UnitTypeDialogComponent {
  constructor() {
    this.dialogTitle = "";
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA);
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
  }
  ngOnInit() {
    this.initForm();
    this.dialogTitle = this.data.mode === "add" ? "Add New UnitType" : "Edit UnitType";
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.unitTypeForm.valid) {
      this.dialogRef.close({
        id: this.data.unitType?.id,
        ...this.unitTypeForm.getRawValue()
      });
    }
  }
  initForm() {
    this.unitTypeForm = this.fb.group({
      unitTypeName: [this.data.unitType?.unitTypeName || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  static {
    this.ɵfac = function UnitTypeDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UnitTypeDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnitTypeDialogComponent,
      selectors: [["app-unitType-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 5,
      consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], ["appearance", "fill", 1, "full-width"], ["formControlName", "unitTypeName", "matInput", "", "placeholder", "Enter unit type name"], [4, "ngIf"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"]],
      template: function UnitTypeDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UnitTypeDialogComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "mat-form-field", 2)(5, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UnitTypeDialogComponent_mat_error_8_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 5)(10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitTypeDialogComponent_Template_button_click_10_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.unitTypeForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.unitTypeForm.get("unitTypeName")) == null ? null : tmp_2_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.unitTypeForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.mode === "add" ? "Add" : "Update", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["\n\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91bml0LXR5cGUvdW5pdC10eXBlLWRpYWxvZy91bml0LXR5cGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEOztBQUU5RDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzcmMvYXBwL2NvbXBvbmVudHMvZmlzaC1kaWFsb2cvZmlzaC1kaWFsb2cuY29tcG9uZW50LnNjc3MgKi9cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7021:
/*!*********************************************************************************!*\
  !*** ./src/app/components/unit-type/unit-type-list/unit-type-list.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnitTypeListComponent: () => (/* binding */ UnitTypeListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 7989);
/* harmony import */ var _confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirmation-dialog/confirmation-service.service */ 6620);
/* harmony import */ var _unit_type_dialog_unit_type_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-type-dialog/unit-type-dialog.component */ 4573);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _unit_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unit-type.service */ 2681);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/snackbar.service */ 2365);
/* harmony import */ var _services_search_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/search-table.service */ 2835);
// src/app/components/unitType-list/unit-type-list.component.ts



























function UnitTypeListComponent_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UnitTypeListComponent_mat_icon_10_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      const searchInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.clearSearch(searchInput_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UnitTypeListComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 23)(1, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UnitTypeListComponent_th_21_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r2.toggleAllRows() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
  }
}
function UnitTypeListComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25)(1, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UnitTypeListComponent_td_22_Template_mat_checkbox_change_1_listener($event) {
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r2.selection.toggle(row_r7) : null);
    })("click", function UnitTypeListComponent_td_22_Template_mat_checkbox_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r7));
  }
}
function UnitTypeListComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UnitTypeListComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unitType_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", unitType_r8.id, "");
  }
}
function UnitTypeListComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UnitTypeListComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unitType_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", unitType_r9.unitTypeName, "");
  }
}
function UnitTypeListComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UnitTypeListComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UnitTypeListComponent_td_31_Template_button_click_1_listener() {
      const unitType_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openEditDialog(unitType_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UnitTypeListComponent_td_31_Template_button_click_4_listener() {
      const unitType_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.deleteUnitType(unitType_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function UnitTypeListComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 31);
  }
}
function UnitTypeListComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 32);
  }
}
function UnitTypeListComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("No results matching \"", ctx_r2.searchQuery(), "");
  }
}
function UnitTypeListComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No UnitType data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class UnitTypeListComponent {
  constructor() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource([]);
    this.displayedColumns = ["select", "id", "name", "actions"];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(true, []);
    this.searchQuery = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)("");
    // Entity type identifier for search service
    this.ENTITY_TYPE = "unitType";
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.unitTypeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_unit_type_service__WEBPACK_IMPORTED_MODULE_2__.UnitTypeService);
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog);
    this.snackBarService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService);
    this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmationService);
    this.searchTableService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_search_table_service__WEBPACK_IMPORTED_MODULE_4__.SearchTableService);
    // Effect to update the table data whenever the unitTypees signal changes
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.effect)(() => {
      this.updateTable(this.unitTypeService.unitTypes());
    });
  }
  ngOnInit() {
    // No need to call loadUnitTypees() as the service loads data on construction
    this.configureDataSource();
    this.setupSearch();
  }
  ngAfterViewInit() {
    // Connect sort after view initializes and configure custom sorting
    this.configureSort();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchTableService.destroySearch(this.ENTITY_TYPE);
  }
  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];
      // Handle different data types for sorting
      if (typeof value === "string") {
        return value.toLowerCase(); // Case-insensitive string sorting
      } else {
        return value; // Default for numbers and other types
      }
    };
  }
  /**
   * Set up the search functionality
   */
  setupSearch() {
    this.searchTableService.getSearchObservable(this.ENTITY_TYPE).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(searchValue => {
      this.searchQuery.set(searchValue);
      this.dataSource.filter = searchValue.trim().toLowerCase();
    });
  }
  /**
   * Configure the data source with custom filter predicate
   */
  configureDataSource() {
    // Define custom filter logic that searches across all fields
    this.dataSource.filterPredicate = (unitType, filter) => {
      const searchStr = filter.toLowerCase();
      return unitType.id.toString().includes(searchStr) || unitType.unitTypeName.toLowerCase().includes(searchStr);
    };
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows && numRows > 0;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(_unit_type_dialog_unit_type_dialog_component__WEBPACK_IMPORTED_MODULE_1__.UnitTypeDialogComponent, {
      width: "400px",
      data: {
        mode: "add"
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        this.unitTypeService.createUnitType(result);
        this.snackBarService.showSuccess("UnitType added successfully");
      }
    });
  }
  openEditDialog(unitType) {
    const dialogRef = this.dialog.open(_unit_type_dialog_unit_type_dialog_component__WEBPACK_IMPORTED_MODULE_1__.UnitTypeDialogComponent, {
      width: "400px",
      data: {
        mode: "edit",
        unitType
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        const update = {
          unitTypeName: result.unitTypeName
        };
        this.unitTypeService.updateUnitType(unitType.id, update);
        this.snackBarService.showSuccess("UnitType updated successfully");
      }
    });
  }
  deleteUnitType(unitType) {
    this.confirmationService.confirmDeletion(`unitType "${unitType.unitTypeName}"`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.unitTypeService.deleteUnitType(unitType.id);
        this.snackBarService.showSuccess("UnitType deleted successfully");
      }
    });
  }
  deleteSelectedCategories() {
    const selectedIds = this.selection.selected.map(unitType => unitType.id);
    if (selectedIds.length === 0) {
      this.snackBarService.showError("No unitType selected");
      return;
    }
    this.confirmationService.confirmBulkDeletion(selectedIds.length, "unitType").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.unitTypeService.deleteManyUnitType(selectedIds);
        this.selection.clear();
        this.snackBarService.showSuccess("Selected unitType deleted successfully");
      }
    });
  }
  onSearch(event) {
    const value = event.target?.value;
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, value);
  }
  /**
   * Clear the search input
   */
  clearSearch(inputElement) {
    inputElement.value = "";
    this.searchQuery.set("");
    this.dataSource.filter = "";
    inputElement.focus();
  }
  // Function to update table data
  updateTable(categories) {
    this.dataSource.data = categories;
    // Reapply current filter
    if (this.searchQuery()) {
      this.dataSource.filter = this.searchQuery().trim().toLowerCase();
    }
    // Maintain sort state after data changes
    if (this.sort && this.dataSource.sort !== this.sort) {
      this.configureSort();
    }
  }
  static {
    this.ɵfac = function UnitTypeListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UnitTypeListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: UnitTypeListComponent,
      selectors: [["app-unitType-list"]],
      viewQuery: function UnitTypeListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      decls: 36,
      vars: 10,
      consts: [["searchInput", ""], ["color", "primary"], [1, "toolbar-spacer"], [1, "search-container", "margin-right"], [1, "search-icon"], ["placeholder", "Search...", "type", "text", 3, "input", "value"], ["class", "clear-search", 3, "click", 4, "ngIf"], ["color", "accent", "mat-mini-fab", "", "matTooltip", "Add new UnitType", 1, "margin-right", 3, "click"], ["color", "accent", "mat-raised-button", "", 3, "click", "disabled"], [1, "mat-elevation-z8", "main-container"], ["mat-table", "", "matSort", "", "matSortActive", "unitTypeName", "matSortDirection", "asc", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "unitTypeName", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "no-data", 4, "ngIf"], [1, "clear-search", 3, "click"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "change", "click", "checked"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-cell", "", "mat-sort-header", "unitTypeName"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "warn", "mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data"]],
      template: function UnitTypeListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 1)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Unit Types");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3)(6, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function UnitTypeListComponent_Template_input_input_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onSearch($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, UnitTypeListComponent_mat_icon_10_Template, 2, 0, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UnitTypeListComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.openAddDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UnitTypeListComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.deleteSelectedCategories());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 9)(19, "table", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, UnitTypeListComponent_th_21_Template, 2, 2, "th", 12)(22, UnitTypeListComponent_td_22_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, UnitTypeListComponent_th_24_Template, 2, 0, "th", 15)(25, UnitTypeListComponent_td_25_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](26, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, UnitTypeListComponent_th_27_Template, 2, 0, "th", 17)(28, UnitTypeListComponent_td_28_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](29, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, UnitTypeListComponent_th_30_Template, 2, 0, "th", 12)(31, UnitTypeListComponent_td_31_Template, 7, 0, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, UnitTypeListComponent_tr_32_Template, 1, 0, "tr", 19)(33, UnitTypeListComponent_tr_33_Template, 1, 0, "tr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, UnitTypeListComponent_div_34_Template, 3, 1, "div", 21)(35, UnitTypeListComponent_div_35_Template, 3, 0, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.searchQuery());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.searchQuery().length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Delete Selected (", ctx.selection.selected.length, ") ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 0 && ctx.dataSource.filteredData.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatMiniFabButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbar, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: rgb(0 0 0 / 4%);\n}\n\n\n\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin: 16px 0;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-style: italic;\n  color: rgb(0 0 0 / 54%);\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f1f1;\n  border-radius: 20px;\n  padding: 5px 10px;\n  width: 200px;\n  position: relative; \n\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: gray;\n  margin-right: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n\n\n\n.clear-search[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: gray;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91bml0LXR5cGUvdW5pdC10eXBlLWxpc3QvdW5pdC10eXBlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0IsRUFBRSwyQ0FBMkM7QUFDakU7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBLGtDQUFrQztBQUNsQztFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50b29sYmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBBZGQgdGhpcyBmb3IgYm9sZCB0YWJsZSBoZWFkZXJzICovXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0JSk7XG59XG5cbi8qIFRoaXMgY2xhc3MgaXMgdW51c2VkIGFuZCBjYW4gYmUgcmVtb3ZlZCAqL1xuLnRhYmxlLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG4ubm8tZGF0YSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogcmdiKDAgMCAwIC8gNTQlKTtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZGVkIGZvciBwb3NpdGlvbmluZyB0aGUgY2xlYXIgYnV0dG9uICovXG59XG5cbi5tYXJnaW4tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBBZGQgdGhpcyBmb3IgdGhlIGNsZWFyIGJ1dHRvbiAqL1xuLmNsZWFyLXNlYXJjaCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGdyYXk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 2681:
/*!***********************************************************!*\
  !*** ./src/app/components/unit-type/unit-type.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnitTypeService: () => (/* binding */ UnitTypeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
// src/app/services/unit-type.service.ts




class UnitTypeService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/unit-types`;
    // State signals
    this.unitTypeList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    // Exposed computed signals
    this.unitTypes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.unitTypeList());
    // Load unitType data immediately when service is injected
    this.loadAllUnitTypes();
  }
  /**
   * Load all unitType from the API and update the signal
   */
  loadAllUnitTypes() {
    this.http.get(this.baseUrl).subscribe({
      next: data => this.unitTypeList.set(data)
    });
  }
  /**
   * Get a single unitType by ID
   */
  getUnitTypeById(id) {
    return this.unitTypeList().find(unitType => unitType.id === id);
  }
  /**
   * Create a new unitType
   */
  createUnitType(unitType) {
    this.http.post(this.baseUrl, unitType).subscribe({
      next: newUnitType => {
        // Update the signal with the new unitType
        this.unitTypeList.update(list => [...list, newUnitType]);
      }
    });
  }
  /**
   * Update an existing unitType
   */
  updateUnitType(id, unitTypeUpdate) {
    this.http.patch(`${this.baseUrl}/${id}`, unitTypeUpdate).subscribe({
      next: updatedUnitType => {
        // Update the specific unitType in the list
        this.unitTypeList.update(list => list.map(unitType => unitType.id === id ? updatedUnitType : unitType));
      }
    });
  }
  /**
   * Delete a unitType by ID
   */
  deleteUnitType(id) {
    this.http.delete(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted unitType from the list
        this.unitTypeList.update(list => list.filter(unitType => unitType.id !== id));
      }
    });
  }
  /**
   * Delete multiple unitType by IDs
   */
  deleteManyUnitType(ids) {
    if (ids.length === 0) return;
    this.http.delete(`${this.baseUrl}/bulk`, {
      body: {
        ids
      }
    }).subscribe({
      next: () => {
        // Remove all deleted unitType from the list
        this.unitTypeList.update(list => list.filter(unitType => !ids.includes(unitType.id)));
      }
    });
  }
  static {
    this.ɵfac = function UnitTypeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UnitTypeService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UnitTypeService,
      factory: UnitTypeService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 8937:
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-dialog/user-dialog-component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserDialogComponent: () => (/* binding */ UserDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
// src/app/components/user-dialog/user-dialog.component.ts


















function UserDialogComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function UserDialogComponent_div_10_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function UserDialogComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "mat-form-field", 3)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserDialogComponent_div_10_mat_error_5_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.userForm.get("password")) == null ? null : tmp_1_0.hasError("required"));
  }
}
function UserDialogComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function UserDialogComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function UserDialogComponent_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function UserDialogComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function UserDialogComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Last Login:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p")(10, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login Count:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p")(15, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Failed Login Attempts:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.data.user == null ? null : ctx_r0.data.user.lastLoginAt) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, ctx_r0.data.user == null ? null : ctx_r0.data.user.lastLoginAt, "medium") : "Never");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.user == null ? null : ctx_r0.data.user.loginCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.user == null ? null : ctx_r0.data.user.failedLoginAttemptsCount);
  }
}
class UserDialogComponent {
  constructor() {
    this.dialogTitle = "";
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA);
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
  }
  ngOnInit() {
    this.initForm();
    this.dialogTitle = this.data.mode === "add" ? "Add New User" : "Edit User";
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.dialogRef.close({
        id: this.data.user?.id,
        ...this.userForm.getRawValue()
      });
    }
  }
  initForm() {
    this.userForm = this.fb.group({
      username: [this.data.user?.username || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      password: [""],
      firstName: [this.data.user?.firstName || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      lastName: [this.data.user?.lastName || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      emailAddress: [this.data.user?.emailAddress || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      emailSignature: [this.data.user?.emailSignature || ""],
      phoneNumber: [this.data.user?.phoneNumber || ""],
      phoneCarrier: [this.data.user?.phoneCarrier || ""],
      preferredContact: [this.data.user?.preferredContact || ""],
      isCommission: [this.data.user?.isCommission || false],
      isEnabled: [this.data.mode === "add" ? true : this.data.user?.isEnabled],
      isLocked: [this.data.mode === "add" ? false : this.data.user?.isLocked],
      // These fields are only included on creation, not for updates
      lastLoginAt: [this.data.mode === "add" ? null : this.data.user?.lastLoginAt],
      loginCount: [this.data.mode === "add" ? 0 : this.data.user?.loginCount],
      failedLoginAttemptsCount: [this.data.mode === "add" ? 0 : this.data.user?.failedLoginAttemptsCount]
    });
  }
  static {
    this.ɵfac = function UserDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserDialogComponent,
      selectors: [["app-user-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 61,
      vars: 11,
      consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], [1, "form-row"], ["appearance", "fill", 1, "form-field"], ["formControlName", "username", "matInput", "", "placeholder", "Enter username"], [4, "ngIf"], ["class", "form-row", 4, "ngIf"], ["formControlName", "firstName", "matInput", "", "placeholder", "Enter first name"], ["formControlName", "lastName", "matInput", "", "placeholder", "Enter last name"], ["formControlName", "emailAddress", "matInput", "", "placeholder", "Enter email address", "type", "email"], ["formControlName", "emailSignature", "matInput", "", "placeholder", "Enter email signature", "rows", "3"], ["formControlName", "phoneNumber", "matInput", "", "placeholder", "Enter phone number"], ["formControlName", "phoneCarrier", "matInput", "", "placeholder", "Enter phone carrier"], ["formControlName", "preferredContact", "matInput", "", "placeholder", "Enter preferred Contact"], [1, "toggles-row"], ["color", "primary", "formControlName", "isCommission"], ["color", "primary", "formControlName", "isEnabled"], ["color", "warn", "formControlName", "isLocked"], ["class", "info-section", 4, "ngIf"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"], ["formControlName", "password", "matInput", "", "placeholder", "Enter password"], [1, "info-section"], [1, "info-label"]],
      template: function UserDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserDialogComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "div", 2)(5, "mat-form-field", 3)(6, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserDialogComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserDialogComponent_div_10_Template, 6, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2)(12, "mat-form-field", 3)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserDialogComponent_mat_error_16_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3)(18, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserDialogComponent_mat_error_21_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2)(23, "mat-form-field", 3)(24, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserDialogComponent_mat_error_27_Template, 2, 0, "mat-error", 5)(28, UserDialogComponent_mat_error_28_Template, 2, 0, "mat-error", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2)(30, "mat-form-field", 3)(31, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Email Signature");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2)(35, "mat-form-field", 3)(36, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 3)(40, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Phone Carrier");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2)(44, "mat-form-field", 3)(45, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Preferred Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14)(49, "mat-slide-toggle", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Commission Based");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-slide-toggle", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Enabled");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-slide-toggle", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Locked");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, UserDialogComponent_div_55_Template, 19, 6, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-dialog-actions", 19)(57, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDialogComponent_Template_button_click_57_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.userForm.get("username")) == null ? null : tmp_2_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.mode === "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.userForm.get("firstName")) == null ? null : tmp_4_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.userForm.get("lastName")) == null ? null : tmp_5_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.userForm.get("emailAddress")) == null ? null : tmp_6_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.userForm.get("emailAddress")) == null ? null : tmp_7_0.hasError("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.mode === "edit");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.mode === "add" ? "Add" : "Update", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["mat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n}\n\n.toggles-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n\n.info-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 16px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n\n.info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 16px;\n  font-size: 16px;\n  color: rgb(0 0 0 / 87%);\n}\n\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-right: 8px;\n  color: rgb(0 0 0 / 60%);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItZGlhbG9nL3VzZXItZGlhbG9nLWNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmZvcm0tZmllbGQge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvZ2dsZXMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5pbmZvLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5pbmZvLXNlY3Rpb24gaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2IoMCAwIDAgLyA4NyUpO1xufVxuXG4uaW5mby1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBjb2xvcjogcmdiKDAgMCAwIC8gNjAlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 3046:
/*!******************************************************************!*\
  !*** ./src/app/components/user/user-list/user-list-component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserListComponent: () => (/* binding */ UserListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ 7989);
/* harmony import */ var _confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirmation-dialog/confirmation-service.service */ 6620);
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-dialog/user-dialog-component */ 8937);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ 3757);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/snackbar.service */ 2365);
/* harmony import */ var _services_search_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/search-table.service */ 2835);
/* harmony import */ var _user_view_dialog_user_view_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-view-dialog/user-view-dialog.component */ 8147);




























function UserListComponent_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserListComponent_mat_icon_10_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const searchInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.clearSearch(searchInput_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserListComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 27)(1, "mat-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UserListComponent_th_21_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event ? ctx_r2.toggleAllRows() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
  }
}
function UserListComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 29)(1, "mat-checkbox", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UserListComponent_td_22_Template_mat_checkbox_change_1_listener($event) {
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event ? ctx_r2.selection.toggle(row_r7) : null);
    })("click", function UserListComponent_td_22_Template_mat_checkbox_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r7));
  }
}
function UserListComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserListComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r8.id, "");
  }
}
function UserListComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserListComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r9.username, "");
  }
}
function UserListComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserListComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", user_r10.firstName, " ", user_r10.lastName, "");
  }
}
function UserListComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Commission");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserListComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 29)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "mat-" + ctx_r2.getCommissionColor(user_r11) + "-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.getUserCommission(user_r11), " ");
  }
}
function UserListComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserListComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 29)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "mat-" + ctx_r2.getStatusColor(user_r12) + "-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.getUserStatus(user_r12), " ");
  }
}
function UserListComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UserListComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34)(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserListComponent_td_40_Template_button_click_1_listener() {
      const user_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.openViewDialog(user_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserListComponent_td_40_Template_button_click_4_listener() {
      const user_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.openEditDialog(user_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserListComponent_td_40_Template_button_click_7_listener() {
      const user_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.deleteUser(user_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function UserListComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 38);
  }
}
function UserListComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 39);
  }
}
function UserListComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("No results matching \"", ctx_r2.searchQuery(), "");
  }
}
function UserListComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 40)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No user data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class UserListComponent {
  constructor() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource([]);
    this.displayedColumns = ["select", "id", "username", "fullName", "commission", "status", "actions"];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
    this.searchQuery = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)("");
    // Entity type identifier for search service
    this.ENTITY_TYPE = "user";
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.userService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService);
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog);
    this.snackBarService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService);
    this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmationService);
    this.searchTableService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_services_search_table_service__WEBPACK_IMPORTED_MODULE_4__.SearchTableService);
    // Effect to update the table data whenever the users signal changes
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.effect)(() => {
      this.updateTable(this.userService.users());
    });
  }
  ngOnInit() {
    // No need to call loadUsers() as the service loads data on construction
    this.configureDataSource();
    this.setupSearch();
  }
  ngAfterViewInit() {
    // Connect sort after view initializes and configure custom sorting
    this.configureSort();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchTableService.destroySearch(this.ENTITY_TYPE);
  }
  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      // Handle fullName sorting
      if (sortHeaderId === "fullName") {
        return `${data.firstName} ${data.lastName}`.toLowerCase();
      }
      // Handle commission sorting
      if (sortHeaderId === "commission") {
        if (data.isCommission) return "yes";else return "no";
      }
      // Handle status sorting
      if (sortHeaderId === "status") {
        if (!data.isEnabled) return "disabled";
        if (data.isLocked) return "locked";
        return "active";
      }
      const value = data[sortHeaderId];
      // Handle different data types for sorting
      if (typeof value === "string") {
        return value.toLowerCase(); // Case-insensitive string sorting
      } else if (typeof value === "boolean") {
        return value ? 1 : 0; // Convert boolean to numeric for sorting
      } else if (value == null) {
        return ""; // Treat null/undefined as an empty string
      } else {
        return value; // Default for numbers and other types
      }
    };
  }
  /**
   * Set up the search functionality
   */
  setupSearch() {
    this.searchTableService.getSearchObservable(this.ENTITY_TYPE).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(searchValue => {
      this.searchQuery.set(searchValue);
      this.dataSource.filter = searchValue.trim().toLowerCase();
    });
  }
  /**
   * Configure the data source with custom filter predicate
   */
  configureDataSource() {
    this.dataSource.filterPredicate = (user, filter) => {
      const searchStr = filter.toLowerCase();
      return (user.id?.toString() ?? "").includes(searchStr) || (user.username?.toLowerCase() ?? "").includes(searchStr) || (user.firstName?.toLowerCase() ?? "").includes(searchStr) || (user.lastName?.toLowerCase() ?? "").includes(searchStr) || `${user.firstName ?? ""} ${user.lastName ?? ""}`.toLowerCase().includes(searchStr);
    };
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows && numRows > 0;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_1__.UserDialogComponent, {
      width: "600px",
      data: {
        mode: "add"
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        this.userService.createUser(result);
        this.snackBarService.showSuccess("User added successfully");
      }
    });
  }
  openEditDialog(user) {
    const dialogRef = this.dialog.open(_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_1__.UserDialogComponent, {
      width: "600px",
      data: {
        mode: "edit",
        user
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        const update = {
          username: result.username,
          preferredContact: result.preferredContact,
          emailAddress: result.emailAddress,
          emailSignature: result.emailSignature,
          phoneNumber: result.phoneNumber,
          phoneCarrier: result.phoneCarrier,
          isCommission: result.isCommission,
          firstName: result.firstName,
          lastName: result.lastName,
          isEnabled: result.isEnabled,
          isLocked: result.isLocked
        };
        this.userService.updateUser(user.id, update);
        this.snackBarService.showSuccess("User updated successfully");
      }
    });
  }
  openViewDialog(user) {
    this.dialog.open(_user_view_dialog_user_view_dialog_component__WEBPACK_IMPORTED_MODULE_5__.UserViewDialogComponent, {
      width: "600px",
      data: {
        user
      },
      disableClose: false
    });
  }
  deleteUser(user) {
    this.confirmationService.confirmDeletion(`user "${user.username}"`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.userService.deleteUser(user.id);
        this.snackBarService.showSuccess("User deleted successfully");
      }
    });
  }
  deleteSelectedUsers() {
    const selectedIds = this.selection.selected.map(user => user.id);
    if (selectedIds.length === 0) {
      this.snackBarService.showError("No users selected");
      return;
    }
    this.confirmationService.confirmBulkDeletion(selectedIds.length, "user").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.userService.deleteManyUsers(selectedIds);
        this.selection.clear();
        this.snackBarService.showSuccess("Selected users deleted successfully");
      }
    });
  }
  getUserCommission(user) {
    if (user.isCommission) {
      return "Yes";
    } else {
      return "No";
    }
  }
  getCommissionColor(user) {
    if (user.isCommission) {
      return "primary";
    } else {
      return "accent";
    }
  }
  getUserStatus(user) {
    if (!user.isEnabled) return "Disabled";
    if (user.isLocked) return "Locked";
    return "Active";
  }
  getStatusColor(user) {
    if (!user.isEnabled) return "warn";
    if (user.isLocked) return "accent";
    return "primary";
  }
  onSearch(event) {
    const value = event.target?.value;
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, value);
  }
  clearSearch(inputElement) {
    inputElement.value = "";
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, "");
    inputElement.focus(); // Optional: keeps focus on the input after clearing
  }
  // Function to update table data
  updateTable(users) {
    this.dataSource.data = users;
    // Reapply current filter
    if (this.searchQuery()) {
      this.dataSource.filter = this.searchQuery().trim().toLowerCase();
    }
    // Maintain sort state after data changes
    if (this.sort && this.dataSource.sort !== this.sort) {
      this.configureSort();
    }
  }
  static {
    this.ɵfac = function UserListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: UserListComponent,
      selectors: [["app-user-list"]],
      viewQuery: function UserListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 45,
      vars: 10,
      consts: [["searchInput", ""], ["color", "primary"], [1, "toolbar-spacer"], [1, "search-container", "margin-right"], [1, "search-icon"], ["placeholder", "Search...", "type", "text", 3, "input", "value"], ["class", "clear-search", 3, "click", 4, "ngIf"], ["color", "accent", "mat-mini-fab", "", "matTooltip", "Add new User", 1, "margin-right", 3, "click"], ["color", "accent", "mat-raised-button", "", 3, "click", "disabled"], [1, "mat-elevation-z8", "main-container"], ["mat-table", "", "matSort", "", "matSortActive", "username", "matSortDirection", "asc", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "username"], ["class", "mat-typography font-weight-bold", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "fullName"], ["matColumnDef", "commission"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["class", "action-buttons", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "no-data", 4, "ngIf"], [1, "clear-search", 3, "click"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "change", "click", "checked"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "mat-typography", "font-weight-bold"], [3, "ngClass"], ["mat-cell", "", 1, "action-buttons"], ["color", "primary", "mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "warn", "mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data"]],
      template: function UserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 1)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function UserListComponent_Template_input_input_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onSearch($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, UserListComponent_mat_icon_10_Template, 2, 0, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.openAddDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.deleteSelectedUsers());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 9)(19, "table", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, UserListComponent_th_21_Template, 2, 2, "th", 12)(22, UserListComponent_td_22_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, UserListComponent_th_24_Template, 2, 0, "th", 15)(25, UserListComponent_td_25_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, UserListComponent_th_27_Template, 2, 0, "th", 17)(28, UserListComponent_td_28_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, UserListComponent_th_30_Template, 2, 0, "th", 15)(31, UserListComponent_td_31_Template, 2, 2, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, UserListComponent_th_33_Template, 2, 0, "th", 15)(34, UserListComponent_td_34_Template, 3, 2, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, UserListComponent_th_36_Template, 2, 0, "th", 15)(37, UserListComponent_td_37_Template, 3, 2, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](38, 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, UserListComponent_th_39_Template, 2, 0, "th", 12)(40, UserListComponent_td_40_Template, 10, 0, "td", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, UserListComponent_tr_41_Template, 1, 0, "tr", 23)(42, UserListComponent_tr_42_Template, 1, 0, "tr", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, UserListComponent_div_43_Template, 3, 1, "div", 25)(44, UserListComponent_div_44_Template, 3, 0, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.searchQuery());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchQuery().length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Delete Selected (", ctx.selection.selected.length, ") ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 0 && ctx.dataSource.filteredData.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatMiniFabButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbar, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background-color: rgb(0 0 0 / 4%);\n}\n\n.no-data[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-style: italic;\n  color: rgb(0 0 0 / 54%);\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f1f1;\n  border-radius: 20px;\n  padding: 5px 10px;\n  width: 200px;\n  position: relative; \n\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: gray;\n  margin-right: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n\n.clear-search[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: gray;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.mat-primary-text[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n\n.mat-accent-text[_ngcontent-%COMP%] {\n  color: #ff4081;\n}\n\n.mat-warn-text[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItbGlzdC91c2VyLWxpc3QtY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0IsRUFBRSwyQ0FBMkM7QUFDakU7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubWF0LW1kYy1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0JSk7XG59XG5cbi5uby1kYXRhIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiByZ2IoMCAwIDAgLyA1NCUpO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogQWRkZWQgZm9yIHBvc2l0aW9uaW5nIHRoZSBjbGVhciBidXR0b24gKi9cbn1cblxuLm1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbGVhci1zZWFyY2gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubWF0LXByaW1hcnktdGV4dCB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuXG4ubWF0LWFjY2VudC10ZXh0IHtcbiAgY29sb3I6ICNmZjQwODE7XG59XG5cbi5tYXQtd2Fybi10ZXh0IHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 8147:
/*!********************************************************************************!*\
  !*** ./src/app/components/user/user-view-dialog/user-view-dialog.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserViewDialogComponent: () => (/* binding */ UserViewDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);








class UserViewDialogComponent {
  constructor() {
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA);
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef);
  }
  ngOnInit() {}
  close() {
    this.dialogRef.close();
  }
  getStatusText() {
    const user = this.data.user;
    if (!user.isEnabled) return "Disabled";
    if (user.isLocked) return "Locked";
    return "Active";
  }
  getStatusClass() {
    const user = this.data.user;
    if (!user.isEnabled) return "mat-warn-text";
    if (user.isLocked) return "mat-accent-text";
    return "mat-primary-text";
  }
  static {
    this.ɵfac = function UserViewDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserViewDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserViewDialogComponent,
      selectors: [["app-user-view-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 68,
      vars: 17,
      consts: [["mat-dialog-title", ""], [1, "info-section"], [1, "detail-item"], [1, "info-label"], [3, "ngClass"], ["align", "end"], ["mat-button", "", 3, "click"]],
      template: function UserViewDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "div", 1)(4, "div", 2)(5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2)(10, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Full Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email Address:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2)(20, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email Signature:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2)(25, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Phone Number:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2)(30, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Phone Carrier:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2)(35, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Preferred Contact:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2)(40, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Commission Based:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2)(45, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Status:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2)(50, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Last Login:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 2)(56, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Login Count:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2)(61, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Failed Login Attempts:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-dialog-actions", 5)(66, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserViewDialogComponent_Template_button_click_66_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Close");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.data.user.firstName, " ", ctx.data.user.lastName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.emailAddress || "Not provided");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.emailSignature || "Not provided");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.phoneNumber || "Not provided");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.phoneCarrier || "Not provided");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.preferredContact || "Not provided");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.isCommission ? "Yes" : "No");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getStatusClass());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStatusText());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.lastLoginAt ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 14, ctx.data.user.lastLoginAt, "medium") : "Never");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.loginCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.user.failedLoginAttemptsCount);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
      styles: [".info-section[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n\n.detail-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-right: 8px;\n  color: rgb(0 0 0 / 60%);\n  min-width: 160px;\n  display: inline-block;\n}\n\n.mat-primary-text[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n\n.mat-accent-text[_ngcontent-%COMP%] {\n  color: #ff4081;\n}\n\n.mat-warn-text[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItdmlldy1kaWFsb2cvdXNlci12aWV3LWRpYWxvZy1jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmRldGFpbC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmluZm8tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgY29sb3I6IHJnYigwIDAgMCAvIDYwJSk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1hdC1wcmltYXJ5LXRleHQge1xuICBjb2xvcjogIzNmNTFiNTtcbn1cblxuLm1hdC1hY2NlbnQtdGV4dCB7XG4gIGNvbG9yOiAjZmY0MDgxO1xufVxuXG4ubWF0LXdhcm4tdGV4dCB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 3757:
/*!*************************************************!*\
  !*** ./src/app/components/user/user.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
// src/app/services/user.service.ts




class UserService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users`;
    // State signals
    this.userList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    // Exposed computed signals
    this.users = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.userList());
    // Load user data immediately when service is injected
    this.loadAllUsers();
  }
  /**
   * Load all users from the API and update the signal
   */
  loadAllUsers() {
    this.http.get(this.baseUrl).subscribe({
      next: data => this.userList.set(data)
    });
  }
  /**
   * Get a single user by ID
   */
  getUserById(id) {
    return this.userList().find(user => user.id === id);
  }
  /**
   * Create a new user
   */
  createUser(user) {
    this.http.post(this.baseUrl, user).subscribe({
      next: newUser => {
        // Update the signal with the new user
        this.userList.update(list => [...list, newUser]);
      }
    });
  }
  /**
   * Update an existing user
   */
  updateUser(id, userUpdate) {
    this.http.patch(`${this.baseUrl}/${id}`, userUpdate).subscribe({
      next: updatedUser => {
        // Update the specific user in the list
        this.userList.update(list => list.map(user => user.id === id ? updatedUser : user));
      }
    });
  }
  /**
   * Delete a user by ID
   */
  deleteUser(id) {
    this.http.delete(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted user from the list
        this.userList.update(list => list.filter(user => user.id !== id));
      }
    });
  }
  /**
   * Delete multiple users by IDs
   */
  deleteManyUsers(ids) {
    if (ids.length === 0) return;
    this.http.delete(`${this.baseUrl}/bulk`, {
      body: {
        ids
      }
    }).subscribe({
      next: () => {
        // Remove all deleted category from the list
        this.userList.update(list => list.filter(user => !ids.includes(user.id)));
      }
    });
  }
  static {
    this.ɵfac = function UserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 9656:
/*!****************************************************************************!*\
  !*** ./src/app/components/vendor/vendor-dialog/vendor-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorDialogComponent: () => (/* binding */ VendorDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 4646);




















function VendorDialogComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Vendor name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class VendorDialogComponent {
  constructor() {
    this.dialogTitle = "";
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA);
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
  }
  ngOnInit() {
    this.initForm();
    this.dialogTitle = this.data.mode === "add" ? "Add New Vendor" : "Edit Vendor";
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    // Get the form values
    const formValues = this.vendorForm.getRawValue();
    // Combine date and time if both exist
    const dateValue = formValues.lastAgingRequestDate;
    const timeValue = formValues.lastAgingRequestTime;
    if (dateValue && timeValue) {
      // Split the time string into hours and minutes
      const [hours, minutes] = timeValue.split(":");
      // Create a new date object from the date value
      const combinedDateTime = new Date(dateValue);
      // Set the hours and minutes
      combinedDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      // Replace the separate date and time fields with the combined field
      delete formValues.lastAgingRequestDate;
      delete formValues.lastAgingRequestTime;
      formValues.lastAgingRequest = combinedDateTime.toISOString();
    }
    // Close the dialog with the combined data
    this.dialogRef.close({
      id: this.data.vendor?.id,
      ...formValues
    });
  }
  // Format time as HH:MM for time input
  formatTime(date) {
    return date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0");
  }
  initForm() {
    this.vendorForm = this.fb.group({
      vendorName: [this.data.vendor?.vendorName || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      address1: [this.data.vendor?.address1 || ""],
      address2: [this.data.vendor?.address2 || ""],
      city: [this.data.vendor?.city || ""],
      state: [this.data.vendor?.state || ""],
      zip: [this.data.vendor?.zip || ""],
      country: [this.data.vendor?.country || ""],
      phoneNumber: [this.data.vendor?.phoneNumber || ""],
      vendorRepName: [this.data.vendor?.vendorRepName || ""],
      vendorRepPhoneNumber: [this.data.vendor?.vendorRepPhoneNumber || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      vendorRepEmailAddress: [this.data.vendor?.vendorRepEmailAddress || ""],
      accountingName: [this.data.vendor?.accountingName || ""],
      accountingPhoneNumber: [this.data.vendor?.accountingPhoneNumber || ""],
      accountingEmailAddress: [this.data.vendor?.accountingEmailAddress || ""],
      creditTermsDays: [this.data.vendor?.creditTermsDays || 0],
      creditLimitAmount: [this.data.vendor?.creditLimitAmount || 0],
      vendorNotes: [this.data.vendor?.vendorNotes || ""],
      logisticsNotes: [this.data.vendor?.logisticsNotes || ""],
      accountingNotes: [this.data.vendor?.accountingNotes || ""],
      lastAgingRequestDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      lastAgingRequestTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null)
    });
    if (this.data.vendor?.lastAgingRequest) {
      const date = new Date(this.data.vendor.lastAgingRequest);
      this.vendorForm.patchValue({
        lastAgingRequestDate: date,
        lastAgingRequestTime: this.formatTime(date)
      });
    }
  }
  static {
    this.ɵfac = function VendorDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VendorDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VendorDialogComponent,
      selectors: [["app-vendor-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 111,
      vars: 7,
      consts: [["lastAgingPicker", ""], ["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], [1, "form-row"], ["appearance", "fill", 1, "form-field"], ["formControlName", "vendorName", "matInput", "", "placeholder", "Enter vendor name"], [4, "ngIf"], ["formControlName", "address1", "matInput", "", "placeholder", "Enter address 1"], ["formControlName", "address2", "matInput", "", "placeholder", "Enter address 2"], ["formControlName", "city", "matInput", "", "placeholder", "Enter city"], ["formControlName", "state", "matInput", "", "placeholder", "Enter state"], ["formControlName", "zip", "matInput", "", "placeholder", "Enter zip"], ["formControlName", "country", "matInput", "", "placeholder", "Enter country"], ["formControlName", "phoneNumber", "matInput", "", "placeholder", "Enter phone number"], ["formControlName", "vendorRepName", "matInput", "", "placeholder", "Enter vendor rep name"], ["formControlName", "vendorRepPhoneNumber", "matInput", "", "placeholder", "Enter vendor rep phone number"], ["formControlName", "vendorRepEmailAddress", "matInput", "", "placeholder", "Enter vendor rep email address", "type", "email"], ["formControlName", "accountingName", "matInput", "", "placeholder", "Enter accounting name"], ["formControlName", "accountingPhoneNumber", "matInput", "", "placeholder", "Enter accounting phone number"], ["formControlName", "accountingEmailAddress", "matInput", "", "placeholder", "Enter accounting email address", "type", "email"], ["formControlName", "creditTermsDays", "matInput", "", "placeholder", "Enter credit terms days", "type", "number"], ["formControlName", "creditLimitAmount", "matInput", "", "placeholder", "Enter credit limit amount", "type", "number"], ["formControlName", "vendorNotes", "matInput", "", "placeholder", "Enter vendor notes", "rows", "3"], ["formControlName", "logisticsNotes", "matInput", "", "placeholder", "Enter logistics notes", "rows", "3"], ["formControlName", "accountingNotes", "matInput", "", "placeholder", "Enter accounting notes", "rows", "3"], ["formControlName", "lastAgingRequestDate", "matInput", "", "placeholder", "MM/DD/YYYY", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["formControlName", "lastAgingRequestTime", "matInput", "", "placeholder", "HH:MM", "type", "time"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"]],
      template: function VendorDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function VendorDialogComponent_Template_form_ngSubmit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "div", 3)(5, "mat-form-field", 4)(6, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Vendor Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VendorDialogComponent_mat_error_9_Template, 2, 0, "mat-error", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3)(11, "mat-form-field", 4)(12, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Address 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 4)(16, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Address 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3)(20, "mat-form-field", 4)(21, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 4)(25, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3)(29, "mat-form-field", 4)(30, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Zip");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 4)(34, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3)(38, "mat-form-field", 4)(39, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3)(43, "mat-form-field", 4)(44, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Vendor Rep Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 4)(48, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Vendor Rep Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3)(52, "mat-form-field", 4)(53, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Vendor Rep Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3)(57, "mat-form-field", 4)(58, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Accounting Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 4)(62, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Accounting Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3)(66, "mat-form-field", 4)(67, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Accounting Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3)(71, "mat-form-field", 4)(72, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Credit Terms Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field", 4)(76, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Credit Limit Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 3)(80, "mat-form-field", 4)(81, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Vendor Notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "textarea", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 3)(85, "mat-form-field", 4)(86, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Logistics Notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "textarea", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 3)(90, "mat-form-field", 4)(91, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Accounting Notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "textarea", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 3)(95, "mat-form-field", 4)(96, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Last Aging Request Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 25)(99, "mat-datepicker-toggle", 26)(100, "mat-datepicker", null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-form-field", 4)(103, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Last Aging Request Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-dialog-actions", 28)(107, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorDialogComponent_Template_button_click_107_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onCancel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          const lastAgingPicker_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](101);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.vendorForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.vendorForm.get("vendorName")) == null ? null : tmp_3_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](89);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", lastAgingPicker_r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", lastAgingPicker_r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.vendorForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.mode === "add" ? "Add" : "Update", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatNativeDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["mat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n}\n\n.toggles-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n\n.info-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 16px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n\n.info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 16px;\n  font-size: 16px;\n  color: rgb(0 0 0 / 87%);\n}\n\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-right: 8px;\n  color: rgb(0 0 0 / 60%);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92ZW5kb3IvdmVuZG9yLWRpYWxvZy92ZW5kb3ItZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmZvcm0tZmllbGQge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvZ2dsZXMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5pbmZvLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5pbmZvLXNlY3Rpb24gaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2IoMCAwIDAgLyA4NyUpO1xufVxuXG4uaW5mby1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBjb2xvcjogcmdiKDAgMCAwIC8gNjAlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 4724:
/*!************************************************************************!*\
  !*** ./src/app/components/vendor/vendor-list/vendor-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorListComponent: () => (/* binding */ VendorListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ 7989);
/* harmony import */ var _confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../confirmation-dialog/confirmation-service.service */ 6620);
/* harmony import */ var _vendor_dialog_vendor_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor-dialog/vendor-dialog.component */ 9656);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _vendor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendor.service */ 9523);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/snackbar.service */ 2365);
/* harmony import */ var _services_search_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/search-table.service */ 2835);
/* harmony import */ var _vendor_view_dialog_vendor_view_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vendor-view-dialog/vendor-view-dialog.component */ 1740);




























function VendorListComponent_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_mat_icon_10_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const searchInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.clearSearch(searchInput_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23)(1, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function VendorListComponent_th_21_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event ? ctx_r2.toggleAllRows() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected());
  }
}
function VendorListComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 25)(1, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function VendorListComponent_td_22_Template_mat_checkbox_change_1_listener($event) {
      const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event ? ctx_r2.selection.toggle(row_r7) : null);
    })("click", function VendorListComponent_td_22_Template_mat_checkbox_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r7));
  }
}
function VendorListComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vendor_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", vendor_r8.id, "");
  }
}
function VendorListComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Vendor Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vendor_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", vendor_r9.vendorName, "");
  }
}
function VendorListComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 28)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_td_31_Template_button_click_1_listener() {
      const vendor_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.openViewDialog(vendor_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_td_31_Template_button_click_4_listener() {
      const vendor_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.openEditDialog(vendor_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_td_31_Template_button_click_7_listener() {
      const vendor_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.deleteVendor(vendor_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function VendorListComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 32);
  }
}
function VendorListComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 33);
  }
}
function VendorListComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("No results matching \"", ctx_r2.searchQuery(), "");
  }
}
function VendorListComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No vendor data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class VendorListComponent {
  constructor() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource([]);
    this.displayedColumns = ["select", "id", "vendorName", "actions"];
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
    this.searchQuery = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.signal)("");
    // Entity type identifier for search service
    this.ENTITY_TYPE = "vendor";
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.vendorService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vendor_service__WEBPACK_IMPORTED_MODULE_2__.VendorService);
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog);
    this.snackBarService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService);
    this.confirmationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_confirmation_dialog_confirmation_service_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmationService);
    this.searchTableService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_services_search_table_service__WEBPACK_IMPORTED_MODULE_4__.SearchTableService);
    // Effect to update the table data whenever the vendors signal changes
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.effect)(() => {
      this.updateTable(this.vendorService.vendors());
    });
  }
  ngOnInit() {
    // No need to call loadVendors() as the service loads data on construction
    this.configureDataSource();
    this.setupSearch();
  }
  ngAfterViewInit() {
    // Connect sort after view initializes and configure custom sorting
    this.configureSort();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchTableService.destroySearch(this.ENTITY_TYPE);
  }
  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];
      // Handle different data types for sorting
      if (typeof value === "string") {
        return value.toLowerCase(); // Case-insensitive string sorting
      } else if (value instanceof Date) {
        return value.getTime(); // Convert Date to timestamp (number) for sorting
      } else if (value == null) {
        return ""; // Treat null/undefined as an empty string
      } else {
        return value; // Default for numbers and other types
      }
    };
  }
  /**
   * Set up the search functionality
   */
  setupSearch() {
    this.searchTableService.getSearchObservable(this.ENTITY_TYPE).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(searchValue => {
      this.searchQuery.set(searchValue);
      this.dataSource.filter = searchValue.trim().toLowerCase();
    });
  }
  /**
   * Configure the data source with custom filter predicate
   */
  configureDataSource() {
    this.dataSource.filterPredicate = (vendor, filter) => {
      const searchStr = filter.toLowerCase();
      return (vendor.id?.toString() ?? "").includes(searchStr) || (vendor.vendorName?.toLowerCase() ?? "").includes(searchStr);
    };
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows && numRows > 0;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(_vendor_dialog_vendor_dialog_component__WEBPACK_IMPORTED_MODULE_1__.VendorDialogComponent, {
      width: "600px",
      data: {
        mode: "add"
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        this.vendorService.createVendor(result);
        this.snackBarService.showSuccess("Vendor added successfully");
      }
    });
  }
  openEditDialog(vendor) {
    const dialogRef = this.dialog.open(_vendor_dialog_vendor_dialog_component__WEBPACK_IMPORTED_MODULE_1__.VendorDialogComponent, {
      width: "600px",
      data: {
        mode: "edit",
        vendor
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(result => {
      if (result) {
        const update = {
          vendorName: result.vendorName,
          address1: result.address1,
          address2: result.address2,
          city: result.city,
          state: result.state,
          zip: result.zip,
          country: result.country,
          phoneNumber: result.phoneNumber,
          vendorRepName: result.vendorRepName,
          vendorRepPhoneNumber: result.vendorRepPhoneNumber,
          vendorRepEmailAddress: result.vendorRepEmailAddress,
          accountingName: result.accountingName,
          accountingPhoneNumber: result.accountingPhoneNumber,
          accountingEmailAddress: result.accountingEmailAddress,
          creditTermsDays: result.creditTermsDays,
          creditLimitAmount: result.creditLimitAmount,
          vendorNotes: result.vendorNotes,
          logisticsNotes: result.logisticsNotes,
          accountingNotes: result.accountingNotes,
          lastAgingRequest: result.lastAgingRequest
        };
        this.vendorService.updateVendor(vendor.id, update);
        this.snackBarService.showSuccess("Vendor updated successfully");
      }
    });
  }
  openViewDialog(vendor) {
    this.dialog.open(_vendor_view_dialog_vendor_view_dialog_component__WEBPACK_IMPORTED_MODULE_5__.VendorViewDialogComponent, {
      width: "600px",
      data: {
        vendor
      },
      disableClose: false
    });
  }
  deleteVendor(vendor) {
    this.confirmationService.confirmDeletion(`vendor "${vendor.vendorName}"`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.vendorService.deleteVendor(vendor.id);
        this.snackBarService.showSuccess("Vendor deleted successfully");
      }
    });
  }
  deleteSelectedVendors() {
    const selectedIds = this.selection.selected.map(vendor => vendor.id);
    if (selectedIds.length === 0) {
      this.snackBarService.showError("No vendors selected");
      return;
    }
    this.confirmationService.confirmBulkDeletion(selectedIds.length, "vendor").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(confirmed => {
      if (confirmed) {
        this.vendorService.deleteManyVendors(selectedIds);
        this.selection.clear();
        this.snackBarService.showSuccess("Selected vendors deleted successfully");
      }
    });
  }
  onSearch(event) {
    const value = event.target?.value;
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, value);
  }
  clearSearch(inputElement) {
    inputElement.value = "";
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, "");
    inputElement.focus(); // Optional: keeps focus on the input after clearing
  }
  // Function to update table data
  updateTable(vendors) {
    this.dataSource.data = vendors;
    // Reapply current filter
    if (this.searchQuery()) {
      this.dataSource.filter = this.searchQuery().trim().toLowerCase();
    }
    // Maintain sort state after data changes
    if (this.sort && this.dataSource.sort !== this.sort) {
      this.configureSort();
    }
  }
  static {
    this.ɵfac = function VendorListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VendorListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: VendorListComponent,
      selectors: [["app-vendor-list"]],
      viewQuery: function VendorListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
      decls: 36,
      vars: 10,
      consts: [["searchInput", ""], ["color", "primary"], [1, "toolbar-spacer"], [1, "search-container", "margin-right"], [1, "search-icon"], ["placeholder", "Search...", "type", "text", 3, "input", "value"], ["class", "clear-search", 3, "click", 4, "ngIf"], ["color", "accent", "mat-mini-fab", "", "matTooltip", "Add new Vendor", 1, "margin-right", 3, "click"], ["color", "accent", "mat-raised-button", "", 3, "click", "disabled"], [1, "mat-elevation-z8", "main-container"], ["mat-table", "", "matSort", "", "matSortActive", "vendorName", "matSortDirection", "asc", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "vendorName"], ["matColumnDef", "actions"], ["class", "action-buttons", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "no-data", 4, "ngIf"], [1, "clear-search", 3, "click"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "change", "click", "checked"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "action-buttons"], ["color", "primary", "mat-icon-button", "", "matTooltip", "View Details", 3, "click"], ["color", "primary", "mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "warn", "mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "no-data"]],
      template: function VendorListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 1)(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Vendors");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function VendorListComponent_Template_input_input_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onSearch($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, VendorListComponent_mat_icon_10_Template, 2, 0, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.openAddDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VendorListComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.deleteSelectedVendors());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 9)(19, "table", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, VendorListComponent_th_21_Template, 2, 2, "th", 12)(22, VendorListComponent_td_22_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, VendorListComponent_th_24_Template, 2, 0, "th", 15)(25, VendorListComponent_td_25_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, VendorListComponent_th_27_Template, 2, 0, "th", 15)(28, VendorListComponent_td_28_Template, 2, 1, "td", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, VendorListComponent_th_30_Template, 2, 0, "th", 12)(31, VendorListComponent_td_31_Template, 10, 0, "td", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, VendorListComponent_tr_32_Template, 1, 0, "tr", 19)(33, VendorListComponent_tr_33_Template, 1, 0, "tr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, VendorListComponent_div_34_Template, 3, 1, "div", 21)(35, VendorListComponent_div_35_Template, 3, 0, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.searchQuery());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchQuery().length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Delete Selected (", ctx.selection.selected.length, ") ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 0 && ctx.dataSource.filteredData.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatMiniFabButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbar, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background-color: rgb(0 0 0 / 4%);\n}\n\n.no-data[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-style: italic;\n  color: rgb(0 0 0 / 54%);\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f1f1;\n  border-radius: 20px;\n  padding: 5px 10px;\n  width: 200px;\n  position: relative; \n\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: gray;\n  margin-right: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n\n.clear-search[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: gray;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92ZW5kb3IvdmVuZG9yLWxpc3QvdmVuZG9yLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0IsRUFBRSwyQ0FBMkM7QUFDakU7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubWF0LW1kYy1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0JSk7XG59XG5cbi5uby1kYXRhIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiByZ2IoMCAwIDAgLyA1NCUpO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogQWRkZWQgZm9yIHBvc2l0aW9uaW5nIHRoZSBjbGVhciBidXR0b24gKi9cbn1cblxuLm1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbGVhci1zZWFyY2gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 1740:
/*!**************************************************************************************!*\
  !*** ./src/app/components/vendor/vendor-view-dialog/vendor-view-dialog.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorViewDialogComponent: () => (/* binding */ VendorViewDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);








class VendorViewDialogComponent {
  constructor() {
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA);
    this.dialogRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef);
  }
  ngOnInit() {}
  close() {
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function VendorViewDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VendorViewDialogComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VendorViewDialogComponent,
      selectors: [["app-vendor-view-dialog"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 108,
      vars: 23,
      consts: [["mat-dialog-title", ""], [1, "info-section"], [1, "detail-item"], [1, "info-label"], ["align", "end"], ["mat-button", "", 3, "click"]],
      template: function VendorViewDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vendor Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "div", 1)(4, "div", 2)(5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vendor Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2)(10, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Address 1:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Address 2:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2)(20, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "City:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2)(25, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "State:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2)(30, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Zip:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2)(35, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Country:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2)(40, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Phone Number:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2)(45, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Vendor Rep Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2)(50, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Vendor Rep Phone Number:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2)(55, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Vendor Rep Email Address:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2)(60, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Accounting Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2)(65, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Accounting Phone Number:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 2)(70, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Accounting Email Address:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 2)(75, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Credit Terms Days:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 2)(80, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Credit Limit Amount:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 2)(85, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Vendor Notes:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 2)(90, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Logistics Notes:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 2)(95, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Accounting Notes:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 2)(100, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Last Aging Request:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](104, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-dialog-actions", 4)(106, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorViewDialogComponent_Template_button_click_106_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Close");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.vendorName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.address1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.address2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.city);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.state);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.zip);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.country);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.phoneNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.vendorRepName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.vendorRepPhoneNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.vendorRepEmailAddress);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.accountingName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.accountingPhoneNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.accountingEmailAddress);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.creditTermsDays);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.creditLimitAmount);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.vendorNotes);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.logisticsNotes);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.vendor.accountingNotes);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](104, 20, ctx.data.vendor.lastAgingRequest, "medium"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
      styles: [".info-section[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n\n.detail-item[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-right: 8px;\n  color: rgb(0 0 0 / 60%);\n  min-width: 160px;\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92ZW5kb3IvdmVuZG9yLXZpZXctZGlhbG9nL3ZlbmRvci12aWV3LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmRldGFpbC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmluZm8tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgY29sb3I6IHJnYigwIDAgMCAvIDYwJSk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 9523:
/*!*****************************************************!*\
  !*** ./src/app/components/vendor/vendor.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorService: () => (/* binding */ VendorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);




class VendorService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/vendors`;
    // State signals
    this.vendorList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    // Exposed computed signals
    this.vendors = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.vendorList());
    // Load vendor data immediately when service is injected
    this.loadAllVendors();
  }
  /**
   * Load all vendors from the API and update the signal
   */
  loadAllVendors() {
    this.http.get(this.baseUrl).subscribe({
      next: data => this.vendorList.set(data)
    });
  }
  /**
   * Get a single vendor by ID
   */
  getVendorById(id) {
    return this.vendorList().find(vendor => vendor.id === id);
  }
  /**
   * Create a new vendor
   */
  createVendor(vendor) {
    this.http.post(this.baseUrl, vendor).subscribe({
      next: newVendor => {
        // Update the signal with the new vendor
        this.vendorList.update(list => [...list, newVendor]);
      }
    });
  }
  /**
   * Update an existing vendor
   */
  updateVendor(id, vendorUpdate) {
    this.http.patch(`${this.baseUrl}/${id}`, vendorUpdate).subscribe({
      next: updatedVendor => {
        // Update the specific vendor in the list
        this.vendorList.update(list => list.map(vendor => vendor.id === id ? updatedVendor : vendor));
      }
    });
  }
  /**
   * Delete a vendor by ID
   */
  deleteVendor(id) {
    this.http.delete(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted vendor from the list
        this.vendorList.update(list => list.filter(vendor => vendor.id !== id));
      }
    });
  }
  /**
   * Delete multiple vendors by IDs
   */
  deleteManyVendors(ids) {
    if (ids.length === 0) return;
    this.http.delete(`${this.baseUrl}/bulk`, {
      body: {
        ids
      }
    }).subscribe({
      next: () => {
        // Remove all deleted vendors from the list
        this.vendorList.update(list => list.filter(vendor => !ids.includes(vendor.id)));
      }
    });
  }
  static {
    this.ɵfac = function VendorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VendorService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VendorService,
      factory: VendorService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // Redirect to login if not authenticated
      void this.router.navigate(["/login"]);
      return false;
    }
  }
  static {
    this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 472:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loading.service */ 7038);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 4796);





class AuthInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    // Get the token from the AuthService (or other storage like localStorage)
    const token = this.authService.getToken(); // Make sure to implement getToken() method
    const loadingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService);
    if (token) {
      // Clone the request and add the authorization header
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      const url = new URL(req.urlWithParams, window.location.origin);
      const queryParams = url.searchParams;
      const isInfiniteScroll = queryParams.has("page") && queryParams.get("page") !== "0";
      if (!isInfiniteScroll) loadingService.setLoading(true);
      return next.handle(clonedRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
        // Stop loading when the request completes (success or error)
        if (!isInfiniteScroll) loadingService.setLoading(false);
      }));
    }
    // If there's no token, continue with the original request
    return next.handle(req);
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);





class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.tokenKey = "authToken";
    this.fullnameKey = "fullname";
    this._firstName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null);
    this.firstName = this._firstName.asReadonly();
  }
  login(username, password) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/public/auth/login`, {
      username,
      password
    });
  }
  passwordRequest(username) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/public/auth/password-request`, {
      username
    });
  }
  passwordReset(password, token) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/public/auth/password-reset`, {
      password,
      token
    });
  }
  saveFullnameAndToken(fullname, token) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.fullnameKey, fullname);
  }
  // Retrieve the token (from sessionStorage first, then fallback to localStorage)
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  getFullname() {
    return localStorage.getItem(this.fullnameKey);
  }
  // Check if the user is logged in by verifying if a token exists
  isLoggedIn() {
    const token = localStorage.getItem(this.tokenKey);
    this._firstName.set(this.getFullname());
    return !!token;
  }
  // Optional: method to log out
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.fullnameKey);
    this._firstName.set(null);
    void this.router.navigate(["/login"]);
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 7795:
/*!**********************************************************!*\
  !*** ./src/app/services/global-error-handler.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalErrorHandlerService: () => (/* binding */ GlobalErrorHandlerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snackbar.service */ 2365);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 4796);





class GlobalErrorHandlerService {
  constructor(snackBarService, router, authService) {
    this.snackBarService = snackBarService;
    this.router = router;
    this.authService = authService;
  }
  handleError(error) {
    if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
      // Check network connectivity
      if (!navigator.onLine) {
        this.snackBarService.showError('No internet connection');
        return;
      }
      // Handle client-side errors
      if (error.error instanceof ErrorEvent) {
        this.snackBarService.showError(error.error.message);
        return;
      }
      // Handle specific HTTP status codes
      switch (error.status) {
        case 401:
          this.authService.logout();
          this.snackBarService.showError('Unauthorized. Please enter your credentials.');
          this.router.navigate(['/login']);
          break;
        case 403:
          {
            this.authService.logout();
            const errorMessage = error.error?.message || 'Try again.';
            this.snackBarService.showError(`Access denied. ${errorMessage}.`);
            break;
          }
        case 423:
          {
            this.authService.logout();
            const errorMessage = error.error?.message || 'Try again.';
            this.snackBarService.showError(`Access denied. ${errorMessage}.`);
            break;
          }
        case 404:
          this.snackBarService.showError('Resource not found.');
          break;
        case 413:
          this.snackBarService.showError('File too large.');
          break;
        case 500:
          {
            const errorMessage = error.error?.message || 'Please try again later.';
            this.snackBarService.showError(`Error: ${errorMessage}`);
            break;
          }
        default:
          {
            console.error('An error occurred:', error);
            const errorMessage = error.error?.message || 'An unexpected error occurred.';
            this.snackBarService.showError(`Error: ${errorMessage}`);
          }
      }
      // Log the full error for debugging
      console.error('Full error details:', {
        status: error.status,
        statusText: error.statusText,
        url: error.url,
        error: error.error
      });
    } else {
      // Handle client-side/non-HTTP errors
      console.error('Client-side error:', error);
      this.snackBarService.showError('An unexpected error occurred');
    }
  }
  static {
    this.ɵfac = function GlobalErrorHandlerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GlobalErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: GlobalErrorHandlerService,
      factory: GlobalErrorHandlerService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7038:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingService: () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
// src/app/services/loading.service.ts


class LoadingService {
  constructor() {
    // Use a signal to track loading state
    this._loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    // Expose a readonly version of the loading signal
    this.loading = this._loading.asReadonly();
  }
  /**
   * Set the loading state
   * @param isLoading Whether the application is loading
   */
  setLoading(isLoading) {
    this._loading.set(isLoading);
  }
  static {
    this.ɵfac = function LoadingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoadingService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoadingService,
      factory: LoadingService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 9438:
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 4796);






class ProductService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  /**
   * Fetch products with pagination and search term
   */
  getProducts(page, size, searchTerm) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('page', page.toString()).set('size', size.toString()).set('search', searchTerm);
    return this.http.get(`${this.apiUrl}/products`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => response.content));
  }
  /**
   * Upload a photo for a specific product
   */
  uploadProductImage(productId, file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/products/${productId}/photos`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
  /**
   * Delete a photo for a specific product
   */
  deleteProductPhoto(productId) {
    const url = `${this.apiUrl}/products/${productId}/photos`; // Full API endpoint
    return this.http.delete(url); // Use DELETE HTTP method
  }
  static {
    this.ɵfac = function ProductService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 366:
/*!*****************************************!*\
  !*** ./src/app/services/pwa.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PwaService: () => (/* binding */ PwaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class PwaService {
  constructor() {
    this.isPwa = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isPwa$ = this.isPwa.asObservable();
  }
  updateValue(isPwa) {
    this.isPwa.next(isPwa);
  }
  static {
    this.ɵfac = function PwaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PwaService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PwaService,
      factory: PwaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2835:
/*!**************************************************!*\
  !*** ./src/app/services/search-table.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchTableService: () => (/* binding */ SearchTableService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);



class SearchTableService {
  constructor() {
    this.searchSubjects = new Map();
  }
  /**
   * Gets or creates a search observable for a specific entity type
   * @param entityType The entity type identifier (e.g., 'fish', 'user', etc.)
   * @param debounceMs Debounce time in milliseconds (default: 300ms)
   * @returns An observable that emits search query values
   */
  getSearchObservable(entityType, debounceMs = 300) {
    if (!this.searchSubjects.has(entityType)) {
      this.searchSubjects.set(entityType, new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject());
    }
    return this.searchSubjects.get(entityType).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(debounceMs), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
  }
  /**
   * Updates the search query for a specific entity type
   * @param entityType The entity type identifier
   * @param query The search query string
   */
  updateSearchQuery(entityType, query) {
    if (!this.searchSubjects.has(entityType)) {
      this.searchSubjects.set(entityType, new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject());
    }
    this.searchSubjects.get(entityType).next(query);
  }
  /**
   * Clears search subject for an entity type
   * @param entityType The entity type identifier
   */
  //clearSearch(entityType: string): void {
  //  if (this.searchSubjects.has(entityType)) {
  //    const subject = this.searchSubjects.get(entityType)!;
  //    subject.next("");
  //  }
  //}
  /**
   * Destroys the search subject for an entity type
   * @param entityType The entity type identifier
   */
  destroySearch(entityType) {
    if (this.searchSubjects.has(entityType)) {
      const subject = this.searchSubjects.get(entityType);
      subject.complete();
      this.searchSubjects.delete(entityType);
    }
  }
  static {
    this.ɵfac = function SearchTableService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SearchTableService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: SearchTableService,
      factory: SearchTableService.ɵfac,
      providedIn: "root"
    });
  }
}

/***/ }),

/***/ 2365:
/*!**********************************************!*\
  !*** ./src/app/services/snackbar.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackbarService: () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);


class SnackbarService {
  constructor(matSnackBar) {
    this.matSnackBar = matSnackBar;
    this.duration = 10000;
    this.verticalPosition = 'bottom';
    this.horizontalPos = 'center';
    this.action = 'Hide';
    // Define standard styles
    this.styles = {
      error: 'error-snackbar',
      success: 'success-snackbar',
      warning: 'warning-snackbar',
      info: 'info-snackbar'
    };
  }
  showSnackBar(message, style, duration = this.duration) {
    // Close any existing snackbar
    this.closeSnackBar();
    // Get the appropriate style class
    const panelClass = style ? this.styles[style] : undefined;
    this.snackBarRef = this.matSnackBar.open(message, this.action, {
      duration: duration,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPos,
      panelClass: panelClass
    });
    this.snackBarRef.onAction().subscribe(() => {
      this.closeSnackBar();
    });
    return this.snackBarRef;
  }
  // Convenience methods for different types of messages
  showError(message, duration) {
    return this.showSnackBar(message, 'error', duration);
  }
  showSuccess(message, duration) {
    return this.showSnackBar(message, 'success', duration);
  }
  showWarning(message, duration) {
    return this.showSnackBar(message, 'warning', duration);
  }
  showInfo(message, duration) {
    return this.showSnackBar(message, 'info', duration);
  }
  closeSnackBar() {
    if (this.snackBarRef) {
      this.snackBarRef.dismiss();
    }
  }
  static {
    this.ɵfac = function SnackbarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SnackbarService,
      factory: SnackbarService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: "https://pffc-app-uat-latest.onrender.com/api"
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app-routing.module */ 4114);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/services/global-error-handler.service */ 7795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/interceptors/auth.interceptor */ 472);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 4646);






















(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule), {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ErrorHandler,
    useClass: _app_services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.GlobalErrorHandlerService
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS,
    useClass: _app_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__.AuthInterceptor,
    multi: true
  }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.withInterceptorsFromDi)()), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.provideAnimations)(), (0,_angular_service_worker__WEBPACK_IMPORTED_MODULE_20__.provideServiceWorker)("ngsw-worker.js", {
    enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.isDevMode)(),
    registrationStrategy: "registerWhenStable:30000"
  }), (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule)]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map