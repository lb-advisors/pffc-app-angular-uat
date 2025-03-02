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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 205);
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/logout/logout.component */ 9543);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products/products.component */ 6827);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _components_password_request_password_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/password-request/password-request.component */ 5593);
/* harmony import */ var _components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/password-reset/password-reset.component */ 6881);
/* harmony import */ var _components_sidebar_layout_sidebar_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar-layout/sidebar-layout.component */ 421);
/* harmony import */ var _components_fish_fish_list_fish_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fish/fish-list/fish-list.component */ 6448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);












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
    path: "products",
    component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent,
    title: "Products",
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
  }, {
    path: "fish",
    component: _components_fish_fish_list_fish_list_component__WEBPACK_IMPORTED_MODULE_8__.FishListComponent,
    title: "Fish example",
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
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
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











function AppComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "UAT ENVIRONMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.apiUrl);
  }
}
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
      decls: 9,
      vars: 2,
      consts: [[1, "mat-drawer-container"], [1, "container"], [1, "text-align-center"], ["class", "dev-mode", 4, "ngIf"], [1, "dev-mode"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loading-indicator")(2, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "footer", 0)(4, "div", 1)(5, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u00A9 2024 - Pacific Fresh Fish Company ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_div_7_Template, 2, 0, "div", 3)(8, AppComponent_div_8_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDevMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDevMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_1__.LoadingIndicatorComponent],
      styles: [".tabs[_ngcontent-%COMP%] {\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n    margin-top: 1em;\n}\n\n.active-link[_ngcontent-%COMP%] {\n    background-color: #d3d3d3;\n    color: #333 !important;\n}\n\na[_ngcontent-%COMP%] {\n    padding: 10px;\n    text-decoration: none;\n    color: #333;\n    \n\n    font-size: 14px;\n    \n\n    display: flex;\n    align-items: center;\n}\n\na[_ngcontent-%COMP%]:hover, \na[_ngcontent-%COMP%]:active {\n    color: #333;\n    \n\n}\n\na.active-link[_ngcontent-%COMP%] {\n    background-color: #d3d3d3 !important;\n    \n\n}\n\n.valign-center[_ngcontent-%COMP%] {\n    display: inline-flex;\n    vertical-align: middle;\n    align-items: center;\n}\n\n#a[_ngcontent-%COMP%] {\n    display: inline;\n}\n\n#a[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    margin-right: 5px;\n    \n\n}\n\n.header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n\n    background-color: #ffffff;\n    width: 100%;\n    padding: 5px 0;\n    \n\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    width: 100%;\n    color: #333;\n    \n\n}\n\n.text-align-center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.nav-links-center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    \n\n    align-items: center;\n    \n\n    width: 100%;\n}\n\n.gs-logo[_ngcontent-%COMP%] {\n    height: 50px;\n    \n\n    border-radius: 10%;\n}\n\n.gs-logo-link[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 10px;\n}\n\n\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n    min-height: 95%;\n}\n\n.home-link[_ngcontent-%COMP%] {\n    display: none;\n    \n\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    margin-right: 5px;\n    \n\n}\n\n.dev-mode[_ngcontent-%COMP%] {\n    color: darkblue;\n    ;\n}\n\n.warning[_ngcontent-%COMP%] {\n    background-color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7Ozs7QUFJQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIC8qIERhcmsgZ3JleSB0ZXh0IGNvbG9yICovXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8qIFNtYWxsZXIgZm9udCBzaXplICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5hOmhvdmVyLFxuYTphY3RpdmUge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIC8qIERhcmsgZ3JleSB0ZXh0IGNvbG9yICovXG59XG5cbmEuYWN0aXZlLWxpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDMgIWltcG9ydGFudDtcbiAgICAvKiBMaWdodCBncmV5IGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIGxpbmsgKi9cbn1cblxuLnZhbGlnbi1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2Ege1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuI2EgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxubWF0LWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgLyogU3BhY2UgYmV0d2VlbiBpY29uIGFuZCB0ZXh0ICovXG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBDZW50ZXIgdGhlIG5hdiBsaW5rcyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgLyogUmVkdWNlIHBhZGRpbmcgdG8gbWFrZSB0aGUgbmF2IGJhciBsZXNzIHRhbGwgKi9cbn1cblxubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgLyogRGFyayBncmV5IHRleHQgY29sb3IgKi9cbn1cblxuLnRleHQtYWxpZ24tY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXYtbGlua3MtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8qIENlbnRlciB0aGUgbGlua3MgaG9yaXpvbnRhbGx5ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBDZW50ZXIgdGhlIGxpbmtzIHZlcnRpY2FsbHkgKi9cbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmdzLWxvZ28ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICAvKiBJbmNyZWFzZSB0aGUgc2l6ZSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuLmdzLWxvZ28tbGluayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xufVxuXG5cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA5NSU7XG59XG5cbi5ob21lLWxpbmsge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLyogSGlkZSBvcmlnaW5hbCBIb21lIGxpbmsgKi9cbn1cblxuLm5hdi1pY29uIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgLyogU3BhY2UgYmV0d2VlbiBpY29uIGFuZCB0ZXh0ICovXG59XG5cbi5kZXYtbW9kZSB7XG4gICAgY29sb3I6IGRhcmtibHVlO1xuICAgIDtcbn1cblxuLndhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
      styles: [".install-banner[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 0;\n  padding-bottom: 10px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: inherit;\n  background-color: #036;\n  padding: 8px;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:hover {\n  background-color: #002855;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHAtaW5zdGFsbC1wcm9tcHQvYXBwLWluc3RhbGwtcHJvbXB0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3RhbGwtYmFubmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2O1xuICBwYWRkaW5nOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI4NTU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
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
// src/app/components/fish-dialog/fish-dialog.component.ts














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
// src/app/components/fish-list/fish-list.component.ts



























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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Description");
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
      consts: [[1, "fish-container"], ["color", "primary"], [1, "toolbar-spacer"], [1, "search-container", "margin-right"], [1, "search-icon"], ["placeholder", "Search...", "type", "text", 3, "input", "value"], ["color", "accent", "mat-mini-fab", "", "matTooltip", "Add new fish", 1, "margin-right", 3, "click"], ["color", "accent", "mat-raised-button", "", 3, "click", "disabled"], [1, "mat-elevation-z8", "table-container"], ["mat-table", "", "matSort", "", "matSortActive", "name", "matSortDirection", "asc", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["arrowPosition", "before", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "change", "click", "checked"], ["arrowPosition", "before", "mat-header-cell", "", "mat-sort-header", ""], ["color", "primary", "mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["color", "warn", "mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "5", 1, "mat-cell"], [1, "no-data"]],
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
      styles: ["\n\n\n.fish-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background-color: rgb(0 0 0 / 4%);\n}\n\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin: 16px 0;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-style: italic;\n  color: rgb(0 0 0 / 54%);\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f1f1;\n  border-radius: 20px;\n  padding: 5px 10px;\n  width: 200px;\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: gray;\n  margin-right: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9maXNoL2Zpc2gtbGlzdC9maXNoLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQ7O0FBRTFEO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3JjL2FwcC9jb21wb25lbnRzL2Zpc2gtbGlzdC9maXNoLWxpc3QuY29tcG9uZW50LnNjc3MgKi9cblxuLmZpc2gtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LW1kYy1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0JSk7XG59XG5cbi50YWJsZS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDE2cHggMDtcbn1cblxuLm5vLWRhdGEge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IHJnYigwIDAgMCAvIDU0JSk7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLm1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
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
// src/app/services/fish.service.ts




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
      decls: 12,
      vars: 1,
      consts: [[1, "page", "container"], [1, "button-container"], [1, "nav-button", 3, "click"], [1, "nav-button", "logout-button", 3, "click"], [1, "button-container", "user-info"], [1, "image-grid"], ["alt", "Logo Image", "height", "425", "ngSrc", "assets/logo.png", "width", "1235", 1, "grid-image", "image2"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_2_listener() {
            return ctx.navigateTo("products");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_4_listener() {
            return ctx.navigateTo("test");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Just a Test");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Welcome, ", ctx.username, "! ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgOptimizedImage],
      styles: [".button-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin: 20px 0;\n}\n\n.nav-button[_ngcontent-%COMP%] {\n    background-color: rgb(0 16 46 / 100%);\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    cursor: pointer;\n    border-radius: 5px;\n    font-size: 1.2em;\n    margin: 0 10px;\n    transition: background-color 0.3s;\n}\n\n.nav-button[_ngcontent-%COMP%]:hover {\n    background-color: rgb(0 16 46 / 100%);\n}\n\n.user-info[_ngcontent-%COMP%] {\n    margin-left: 20px; \n\n    font-size: 1.1em;\n    color: rgb(0 16 46 / 100%); \n\n    padding: 10px 0;\n}\n\n.image-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    width: 100%;\n    max-width: 400px;\n    margin: 20px auto;\n}\n\n.grid-image[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n}\n\n\n\n.image2[_ngcontent-%COMP%] {\n    margin-top: 65px; \n\n    margin-left: 50px;\n    background-color: rgb(0 16 46 / 100%);\n    transform: scale(1.4); \n\n}\n\n.image4[_ngcontent-%COMP%] {\n    transform: scale(1.4); \n\n    margin-top: 10px;\n    margin-left: 50px;\n}\n\n.image3[_ngcontent-%COMP%] {\n    transform: scale(1); \n\n    margin-left: 0;\n    border: none;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 20px;\n    background-color: #fff;\n    color: #000;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgb(0 0 0 / 10%);\n    text-align: center;\n}\n\n\n\n@media (width <= 768px) {\n    .button-container[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .nav-button[_ngcontent-%COMP%] {\n        width: 80%;\n        margin: 10px 0;\n    }\n\n\n    .grid-image[_ngcontent-%COMP%] {\n        width: 90%; \n\n        height: auto; \n\n        margin: 0 auto; \n\n    }\n\n    .image-grid[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: 1fr; \n\n        gap: 10px; \n\n    }\n\n    \n\n    .image1[_ngcontent-%COMP%] {\n        width: 90%; \n\n        height: auto; \n\n        margin: 0 auto; \n\n    }\n\n    \n\n    .image2[_ngcontent-%COMP%] {\n        width: 90%;\n        height: auto;\n        margin: 0 auto;\n        transform: scale(1); \n\n    }\n\n    \n\n    .image3[_ngcontent-%COMP%] {\n        width: 90%;\n        height: auto;\n        margin: 0 auto;\n        transform: scale(1); \n\n    }\n\n    \n\n    .image4[_ngcontent-%COMP%] {\n        width: 90%;\n        height: auto;\n        margin: 0 auto;\n        transform: scale(1); \n\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksaUJBQWlCLEVBQUUsK0JBQStCO0lBQ2xELGdCQUFnQjtJQUNoQiwwQkFBMEIsRUFBRSx5Q0FBeUM7SUFDckUsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUEsc0NBQXNDO0FBQ3RDO0lBQ0ksZ0JBQWdCLEVBQUUsbUNBQW1DO0lBQ3JELGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMscUJBQXFCLEVBQUUsNkNBQTZDO0FBQ3hFOztBQUVBO0lBQ0kscUJBQXFCLEVBQUUsNkNBQTZDO0lBQ3BFLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUIsRUFBRSw2Q0FBNkM7SUFDbEUsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxrQkFBa0I7QUFDdEI7O0FBRUEsMENBQTBDO0FBQzFDO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGNBQWM7SUFDbEI7OztJQUdBO1FBQ0ksVUFBVSxFQUFFLG9EQUFvRDtRQUNoRSxZQUFZLEVBQUUsOEJBQThCO1FBQzVDLGNBQWMsRUFBRSxzQkFBc0I7SUFDMUM7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsMEJBQTBCLEVBQUUsa0NBQWtDO1FBQzlELFNBQVMsRUFBRSwyQkFBMkI7SUFDMUM7O0lBRUEsWUFBWTtJQUNaO1FBQ0ksVUFBVSxFQUFFLDZDQUE2QztRQUN6RCxZQUFZLEVBQUUsMEJBQTBCO1FBQ3hDLGNBQWMsRUFBRSxxQkFBcUI7SUFDekM7O0lBRUEsWUFBWTtJQUNaO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixjQUFjO1FBQ2QsbUJBQW1CLEVBQUUsNkJBQTZCO0lBQ3REOztJQUVBLFlBQVk7SUFDWjtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osY0FBYztRQUNkLG1CQUFtQixFQUFFLDZCQUE2QjtJQUN0RDs7SUFFQSxZQUFZO0lBQ1o7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUIsRUFBRSw2QkFBNkI7SUFDdEQ7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG4ubmF2LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMTYgNDYgLyAxMDAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuXG4ubmF2LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMTYgNDYgLyAxMDAlKTtcbn1cblxuLnVzZXItaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7IC8qIEluZGVudHMgdGhlIHVzZXItaW5mbyB0ZXh0ICovXG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBjb2xvcjogcmdiKDAgMTYgNDYgLyAxMDAlKTsgLyogTWF0Y2hlcyBidXR0b24gY29sb3IgZm9yIGNvbnNpc3RlbmN5ICovXG4gICAgcGFkZGluZzogMTBweCAwO1xufVxuXG4uaW1hZ2UtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5ncmlkLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIEFkanVzdG1lbnRzIGZvciBpbmRpdmlkdWFsIGltYWdlcyAqL1xuLmltYWdlMiB7XG4gICAgbWFyZ2luLXRvcDogNjVweDsgLyogTW92ZXMgdGhlIHNtYWxsbG9nbyBpbWFnZSBkb3duICovXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMTYgNDYgLyAxMDAlKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7IC8qIFNjYWxlcyB1cCB0aGUgbmF0dXJlIGN1cmUgaW1hZ2Ugc2xpZ2h0bHkgKi9cbn1cblxuLmltYWdlNCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpOyAvKiBTY2FsZXMgdXAgdGhlIG5hdHVyZSBjdXJlIGltYWdlIHNsaWdodGx5ICovXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmltYWdlMyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgLyogU2NhbGVzIHVwIHRoZSBuYXR1cmUgY3VyZSBpbWFnZSBzbGlnaHRseSAqL1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoMCAwIDAgLyAxMCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogTWVkaWEgUXVlcmllcyBmb3IgTW9iaWxlIE9wdGltaXphdGlvbiAqL1xuQG1lZGlhICh3aWR0aCA8PSA3NjhweCkge1xuICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubmF2LWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgIH1cblxuXG4gICAgLmdyaWQtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogOTAlOyAvKiBBZGp1c3QgdGhlIHNpemUgb2YgdGhlIGltYWdlcyB0byBmaXQgdGhlIHNjcmVlbiAqL1xuICAgICAgICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIHRoZSBhc3BlY3QgcmF0aW8gKi9cbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgaW1hZ2VzICovXG4gICAgfVxuXG4gICAgLmltYWdlLWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgLyogU2luZ2xlLWNvbHVtbiBncmlkIGZvciBtb2JpbGUgKi9cbiAgICAgICAgZ2FwOiAxMHB4OyAvKiBTcGFjaW5nIGJldHdlZW4gaW1hZ2VzICovXG4gICAgfVxuXG4gICAgLyogSW1hZ2UgMSAqL1xuICAgIC5pbWFnZTEge1xuICAgICAgICB3aWR0aDogOTAlOyAvKiBBZGp1c3QgdGhlIHNpemUgdG8gZml0IHdpdGhpbiB0aGUgc2NyZWVuICovXG4gICAgICAgIGhlaWdodDogYXV0bzsgLyogTWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXG4gICAgfVxuXG4gICAgLyogSW1hZ2UgMiAqL1xuICAgIC5pbWFnZTIge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyAvKiBSZXNldCBzY2FsaW5nIGZvciBtb2JpbGUgKi9cbiAgICB9XG5cbiAgICAvKiBJbWFnZSAzICovXG4gICAgLmltYWdlMyB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IC8qIFJlc2V0IHNjYWxpbmcgZm9yIG1vYmlsZSAqL1xuICAgIH1cblxuICAgIC8qIEltYWdlIDQgKi9cbiAgICAuaW1hZ2U0IHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgLyogUmVzZXQgc2NhbGluZyBmb3IgbW9iaWxlICovXG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var _app_install_prompt_app_install_prompt_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-install-prompt/app-install-prompt.component */ 4535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
















const _c0 = () => ["/password-request"];
function LoginComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Logging in...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
class LoginComponent {
  constructor(router, cdr, formBuilder, authService) {
    this.router = router;
    this.cdr = cdr;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.loading = false;
    this.errorMessage = null;
    this.loginForm = this.formBuilder.group({
      username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
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
    this.authService.login(username, password).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      this.errorMessage = `Login failed. ${error.status === 401 ? "Please check your username and password" : error.error?.message || "Please check your username and password"}.`;
      this.loading = false;
      this.cdr.markForCheck();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    })).subscribe({
      next: ({
        firstName,
        lastName,
        token
      }) => {
        this.authService.saveFullnameAndToken(`${firstName ?? ""} ${lastName ?? ""}`.trim(), token);
        void this.router.navigate(["/products"]);
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 7,
      consts: [[1, "container"], [1, "login-container"], [1, "logo-container"], ["alt", "Company Logo", "height", "425", "ngSrc", "assets/logo.png", "width", "1235", 1, "logo"], [3, "ngSubmit", "formGroup"], ["appearance", "fill"], ["autocomplete", "username", "formControlName", "username", "matInput", "", "placeholder", "Enter your username", "type", "text"], ["autocomplete", "current-password", "formControlName", "password", "matInput", "", "placeholder", "Enter your password", "type", "password"], [3, "routerLink"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"], [4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 5)(12, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Forgot password? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, LoginComponent_span_18_Template, 2, 0, "span", 10)(19, LoginComponent_span_19_Template, 2, 0, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-install-prompt");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading || ctx.loginForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgOptimizedImage, _app_install_prompt_app_install_prompt_component__WEBPACK_IMPORTED_MODULE_0__.AppInstallPromptComponent],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 20px 0;\n  background-color: rgb(0 16 46 / 100%);\n}\n\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n  background-color: rgb(0 16 46 / 100%);\n}\n\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 80px;\n  width: auto;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  max-width: 300px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgb(0 0 0 / 10%);\n  text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0 0 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  font-size: 18px;\n  background-color: #036;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-top: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:hover {\n  background-color: #002855;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: #f00;\n  margin-top: 16px;\n  font-size: 14px;\n  text-align: center;\n}\n\n@media (width <= 600px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n\n  .login-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    box-shadow: none;\n  }\n\n  mat-form-field[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtFQUNmLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDE2IDQ2IC8gMTAwJSk7XG59XG5cbi5sb2dvLWNvbnRhaW5lciBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAxNiA0NiAvIDEwMCUpO1xufVxuXG4ubG9nby1jb250YWluZXIgYTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDAgMCAwIC8gMTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI4NTU7XG59XG5cbmJ1dHRvblttYXQtcmFpc2VkLWJ1dHRvbl06ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjZjAwO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cblxuICAubG9naW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);


class LogoutComponent {
  constructor(authService) {
    this.authService = authService;
    this.authService.logout();
  }
  static {
    this.ɵfac = function LogoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["app-logout"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 26,
      vars: 0,
      consts: [[2, "padding-left", "200px"]],
      template: function LogoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br")(1, "br")(2, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "You have been logged out.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br")(6, "br")(7, "br")(8, "br")(9, "br")(10, "br")(11, "br")(12, "br")(13, "br")(14, "br")(15, "br")(16, "br")(17, "br")(18, "br")(19, "br")(20, "br")(21, "br")(22, "br")(23, "br")(24, "br")(25, "br");
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);














const _c0 = () => ["/home"];
class PasswordRequestComponent {
  constructor(router, cdr, formBuilder, authService, snackbarService) {
    this.router = router;
    this.cdr = cdr;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.snackbarService = snackbarService;
    this.passwordRequestForm = this.formBuilder.group({
      username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]]
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
      return new (__ngFactoryType__ || PasswordRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PasswordRequestComponent,
      selectors: [["app-password-request"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 4,
      consts: [[1, "container"], [1, "login-container"], [1, "logo-container"], [3, "routerLink"], ["alt", "Company Logo", "height", "425", "ngSrc", "assets/logo.png", "width", "1235", 1, "logo"], [3, "ngSubmit", "formGroup"], ["appearance", "fill"], ["autocomplete", "username", "formControlName", "username", "matInput", "", "placeholder", "Enter your username", "type", "text"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"]],
      template: function PasswordRequestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "New password request");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PasswordRequestComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 6)(9, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8)(13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Submit password request");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.passwordRequestForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.passwordRequestForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgOptimizedImage],
      styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 20px;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding: 20px 0;\n    background-color: rgba(0, 16, 46, 1);\n}\n\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    cursor: pointer;\n    transition: opacity 0.2s ease;\n    background-color: rgba(0, 16, 46, 1);\n}\n\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n}\n\n.logo[_ngcontent-%COMP%] {\n    height: 80px;\n    width: auto;\n}\n\n.login-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px;\n    max-width: 300px;\n    background-color: #ffffff;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n\n}\n\nh1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 0 0 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px;\n    font-size: 18px;\n    background-color: #003366;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-top: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:hover {\n    background-color: #002855;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:disabled {\n    background-color: #cccccc;\n    cursor: not-allowed;\n}\n\n.error-message[_ngcontent-%COMP%] {\n    color: #ff0000;\n    margin-top: 16px;\n    font-size: 14px;\n    text-align: center;\n}\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 0 10px;\n    }\n\n    .login-container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0;\n        border-radius: 0;\n        box-shadow: none;\n    }\n\n    mat-form-field[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC1yZXF1ZXN0L3Bhc3N3b3JkLXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpO1xufVxuXG4ubG9nby1jb250YWluZXIgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE2LCA0NiwgMSk7XG59XG5cbi5sb2dvLWNvbnRhaW5lciBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5sb2dvIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzM2NjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjg1NTtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXTpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6ICNmZjAwMDA7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG5cbiAgICAubG9naW4tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/snackbar.service */ 2365);















const _c0 = () => ["/home"];
function PasswordResetComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Your password needs to have at least 5 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PasswordResetComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Your password needs to contain at least one special character: ", "[!@#$%^&*(),.?\":{}|<>]", " ");
  }
}
function PasswordResetComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " The 2 entries do not match. ");
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
        this.router.navigate(["/login"]);
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
      decls: 22,
      vars: 7,
      consts: [[1, "container"], [1, "login-container"], [1, "logo-container"], [3, "routerLink"], ["alt", "Company Logo", "height", "425", "ngSrc", "assets/logo.png", "width", "1235", 1, "logo"], [3, "ngSubmit", "formGroup"], ["appearance", "fill"], ["autocomplete", "current-password", "formControlName", "password", "matInput", "", "placeholder", "Enter your password", "type", "password"], ["autocomplete", "current-password", "formControlName", "confirmPassword", "matInput", "", "placeholder", "Enter your password", "type", "password"], ["class", "error", 4, "ngIf"], ["color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled"], [1, "error"]],
      template: function PasswordResetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "New password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PasswordResetComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 6)(9, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Re-enter your password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PasswordResetComponent_div_16_Template, 2, 0, "div", 9)(17, PasswordResetComponent_div_17_Template, 2, 1, "div", 9)(18, PasswordResetComponent_div_18_Template, 2, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 10)(20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Submit new password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.passwordResetForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordResetForm.get("password") && ((tmp_2_0 = ctx.passwordResetForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordResetForm.get("password") && ((tmp_3_0 = ctx.passwordResetForm.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["noSpecialCharacter"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mismatchedPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.passwordResetForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgOptimizedImage],
      styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 20px;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding: 20px 0;\n    background-color: rgba(0, 16, 46, 1);\n}\n\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    cursor: pointer;\n    transition: opacity 0.2s ease;\n    background-color: rgba(0, 16, 46, 1);\n}\n\n.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n}\n\n.logo[_ngcontent-%COMP%] {\n    height: 80px;\n    width: auto;\n}\n\n.login-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px;\n    max-width: 300px;\n    background-color: #ffffff;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n\n}\n\nh1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 0 0 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px;\n    font-size: 18px;\n    background-color: #003366;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-top: 16px;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:hover {\n    background-color: #002855;\n}\n\nbutton[mat-raised-button][_ngcontent-%COMP%]:disabled {\n    background-color: #cccccc;\n    cursor: not-allowed;\n}\n\n.error[_ngcontent-%COMP%] {\n    color: #ff0000;\n    font-size: small;\n}\n\n@media (max-width: 600px) {\n    .container[_ngcontent-%COMP%] {\n        width: 100%;\n        padding: 0 10px;\n    }\n\n    .login-container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 0;\n        border-radius: 0;\n        box-shadow: none;\n    }\n\n    mat-form-field[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNiwgNDYsIDEpO1xufVxuXG4ubG9nby1jb250YWluZXIgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE2LCA0NiwgMSk7XG59XG5cbi5sb2dvLWNvbnRhaW5lciBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5sb2dvIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzM2NjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjg1NTtcbn1cblxuYnV0dG9uW21hdC1yYWlzZWQtYnV0dG9uXTpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cblxuICAgIC5sb2dpbi1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 6827:
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
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
      styles: [".content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 800px;\n  margin: 20px auto;\n  padding: 20px;\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgb(0 0 0 / 10%);\n  text-align: center;\n}\n\n\n\n.image-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  border-radius: 8px;\n  background-color: rgb(0 16 46 / 100%);\n  text-decoration: none;\n  color: inherit;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 100px;\n  border-radius: 8px;\n}\n\n.inventory-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 32px;\n}\n\n\n\n.search-bar[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding: 12px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.filter-btn[_ngcontent-%COMP%], \n.relevant-items-btn[_ngcontent-%COMP%] {\n  background-color: #a9a9a9;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 6px 12px;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0;\n  width: 120px;\n}\n\n.filter-btn[_ngcontent-%COMP%]:hover, \n.relevant-items-btn[_ngcontent-%COMP%]:hover {\n  background-color: #888;\n}\n\n\n\n.filters[_ngcontent-%COMP%], \n.button-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 120px;\n}\n\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 5px;\n  color: #333;\n}\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 120px;\n  height: 28px;\n  box-sizing: border-box;\n  max-width: 120px;\n}\n\n#comp-cost-min[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 120px;\n  height: 28px;\n  box-sizing: border-box;\n  max-width: 120px;\n}\n\n.inventory-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 20px;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 8px;\n  text-align: center;\n}\n\n.inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #d3d3d3;\n  color: #333;\n  min-width: 75px;\n}\n\n\n\n.inventory-grid[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: whitesmoke;\n  cursor: pointer;\n}\n\n@media (width <= 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  \n\n  .inventory-grid[_ngcontent-%COMP%] {\n    width: 100%;\n    table-layout: fixed;\n\n    \n\n    word-wrap: break-word;\n\n    \n\n    overflow-x: hidden;\n  }\n\n  .inventory-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .inventory-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    white-space: normal;\n\n    \n\n    font-size: 12px;\n\n    \n\n  }\n\n  \n\n  .filters[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    \n\n    gap: 10px;\n  }\n\n  .filter-group[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n\n    \n\n    text-align: center;\n  }\n\n  \n\n  .filters[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3) {\n    grid-column: span 2;\n\n    \n\n    justify-self: center;\n  }\n\n  \n\n  .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], \n   .filters[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 12px;\n    padding: 5px;\n    box-sizing: border-box;\n  }\n\n  .inventory-grid[_ngcontent-%COMP%]   tr.has-image[_ngcontent-%COMP%] {\n    background-color: #e6f7ff;\n\n    \n\n  }\n\n}\n\n\n.sticky[_ngcontent-%COMP%] {\n  top: 0;\n  position: sticky;\n}\n\n\n.description-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n\n  \n\n  gap: 8px;\n\n  \n\n}\n\n.blue-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: rgb(0 16 46 / 100%);\n  border-radius: 50%;\n  display: inline-block;\n\n  \n\n}\n\n.inventory-grid[_ngcontent-%COMP%]   tr.has-image[_ngcontent-%COMP%] {\n  background-color: #e6f7ff;\n\n  \n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCOztBQUVBLDBDQUEwQztBQUMxQztFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxzQkFBc0I7QUFDeEI7O0FBRUEsK0JBQStCO0FBQy9COztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBLGtEQUFrRDtFQUNsRDtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7O0lBRW5CLHFEQUFxRDtJQUNyRCxxQkFBcUI7O0lBRXJCLGtDQUFrQztJQUNsQyxrQkFBa0I7RUFDcEI7O0VBRUE7O0lBRUUsbUJBQW1COztJQUVuQiwyQ0FBMkM7SUFDM0MsZUFBZTs7SUFFZiw4Q0FBOEM7RUFDaEQ7O0VBRUEsc0NBQXNDO0VBQ3RDO0lBQ0UsYUFBYTtJQUNiLDhCQUE4Qjs7SUFFOUIsd0JBQXdCO0lBQ3hCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlOztJQUVmLHlDQUF5QztJQUN6QyxrQkFBa0I7RUFDcEI7O0VBRUEsMkRBQTJEO0VBQzNEO0lBQ0UsbUJBQW1COztJQUVuQiw4Q0FBOEM7SUFDOUMsb0JBQW9CO0VBQ3RCOztFQUVBLHFDQUFxQztFQUNyQzs7O0lBR0UsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UseUJBQXlCOztJQUV6QiwwQkFBMEI7RUFDNUI7O0FBRUY7OztBQUdBO0VBQ0UsTUFBTTtFQUNOLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1COztFQUVuQix1Q0FBdUM7RUFDdkMsUUFBUTs7RUFFUiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIscUJBQXFCOztFQUVyQiw2RUFBNkU7QUFDL0U7O0FBRUE7RUFDRSx5QkFBeUI7O0VBRXpCLDBCQUEwQjtBQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigwIDAgMCAvIDEwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogTWFrZSBlbnRpcmUgaW1hZ2UtY29udGFpbmVyIGNsaWNrYWJsZSAqL1xuLmltYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDE2IDQ2IC8gMTAwJSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5pbnZlbnRvcnktdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi8qIFVwZGF0ZWQgU2VhcmNoIEJhciAqL1xuLnNlYXJjaC1iYXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlYXJjaC1iYXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmZpbHRlci1idG4sXG4ucmVsZXZhbnQtaXRlbXMtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uZmlsdGVyLWJ0bjpob3Zlcixcbi5yZWxldmFudC1pdGVtcy1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xufVxuXG4vKiBGaWx0ZXIgR3JvdXAgYW5kIERyb3Bkb3ducyAqL1xuLmZpbHRlcnMsXG4uYnV0dG9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5maWx0ZXItZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5maWx0ZXItZ3JvdXAgbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5maWx0ZXJzIHNlbGVjdCxcbi5maWx0ZXJzIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLmZpbHRlcnMgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuXG4jY29tcC1jb3N0LW1pbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xufVxuXG4uaW52ZW50b3J5LWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmludmVudG9yeS1ncmlkIHRoLFxuLmludmVudG9yeS1ncmlkIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnZlbnRvcnktZ3JpZCB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gIGNvbG9yOiAjMzMzO1xuICBtaW4td2lkdGg6IDc1cHg7XG59XG5cbi8qIEhvdmVyIGVmZmVjdCBvbiB0YWJsZSByb3dzICovXG4uaW52ZW50b3J5LWdyaWQgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAvKiBFbnN1cmUgLmludmVudG9yeS1ncmlkIGZpdHMgd2l0aGluIC5jb250YWluZXIgKi9cbiAgLmludmVudG9yeS1ncmlkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuXG4gICAgLyogRW5zdXJlIGNvbHVtbnMgZG9uJ3QgZXhwYW5kIGJleW9uZCB0aGUgY29udGFpbmVyICovXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICAgLyogV3JhcCB0ZXh0IHRvIHByZXZlbnQgb3ZlcmZsb3cgKi9cbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cblxuICAuaW52ZW50b3J5LWdyaWQgdGgsXG4gIC5pbnZlbnRvcnktZ3JpZCB0ZCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcblxuICAgIC8qIEFsbG93IHdyYXBwaW5nIG9mIGNvbnRlbnQgaW5zaWRlIGNlbGxzICovXG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3IgYmV0dGVyIGZpdCBvbiBtb2JpbGUgKi9cbiAgfVxuXG4gIC8qIEFkanVzdCBmaWx0ZXJzIGxheW91dCB0byB0d28gcm93cyAqL1xuICAuZmlsdGVycyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5cbiAgICAvKiBUd28gZmlsdGVycyBwZXIgcm93ICovXG4gICAgZ2FwOiAxMHB4O1xuICB9XG5cbiAgLmZpbHRlci1ncm91cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuXG4gICAgLyogQWxsb3cgZnVsbCB3aWR0aCBmb3Igc21hbGxlciBzY3JlZW5zICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLyogSGFuZGxlIGNhc2Ugd2hlcmUgb25lIGZpbHRlciBhcHBlYXJzIG9uIHRoZSBzZWNvbmQgcm93ICovXG4gIC5maWx0ZXJzID4gOm50aC1jaGlsZCgzKSB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcblxuICAgIC8qIENlbnRlciB0aGUgdGhpcmQgZmlsdGVyIG9uIHRoZSBzZWNvbmQgcm93ICovXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1cblxuICAvKiBBZGp1c3QgdGhlIHNpemUgb2YgZmlsdGVyIGlucHV0cyAqL1xuICAuZmlsdGVycyBzZWxlY3QsXG4gIC5maWx0ZXJzIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuICAuZmlsdGVycyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAuaW52ZW50b3J5LWdyaWQgdHIuaGFzLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2ZmO1xuXG4gICAgLyogTGlnaHQgYmx1ZSBiYWNrZ3JvdW5kICovXG4gIH1cblxufVxuXG5cbi5zdGlja3kge1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cblxuLmRlc2NyaXB0aW9uLWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC8qIEFsaWducyB0aGUgZG90IGFuZCB0ZXh0IHZlcnRpY2FsbHkgKi9cbiAgZ2FwOiA4cHg7XG5cbiAgLyogQWRkcyBzcGFjaW5nIGJldHdlZW4gdGhlIGRvdCBhbmQgdGV4dCAqL1xufVxuXG4uYmx1ZS1kb3Qge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAxNiA0NiAvIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAvKiBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMjU1LCAwLjYpOyAvKiBPcHRpb25hbDogQWRkIGEgZ2xvdyBlZmZlY3QgKi9cbn1cblxuLmludmVudG9yeS1ncmlkIHRyLmhhcy1pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmY7XG5cbiAgLyogTGlnaHQgYmx1ZSBiYWNrZ3JvdW5kICovXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
function SidebarLayoutComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Logged in as ", name_r2, "");
  }
}
const _c1 = ".sidebar-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100%;\n}\n\n.toolbar-title[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\n.sidenav-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: center;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.active-link[_ngcontent-%COMP%] {\n  background-color: rgb(0 0 0 / 4%);\n}\n\n.panel-title-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\nmat-expansion-panel[_ngcontent-%COMP%] {\n  box-shadow: none;\n  background: transparent;\n}\n\nmat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n.logged-in[_ngcontent-%COMP%] {\n  flex: 1; \n\n  text-align: right; \n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyLWxheW91dC9zaWRlYmFyLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPLEVBQUUsNEJBQTRCO0VBQ3JDLGlCQUFpQixFQUFFLDZCQUE2QjtBQUNsRCIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9vbGJhci10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBmbGV4OiAxO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnNpZGVuYXYtaGVhZGVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYWN0aXZlLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA0JSk7XG59XG5cbi5wYW5lbC10aXRsZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4ubG9nZ2VkLWluIHtcbiAgZmxleDogMTsgLyogVGFrZSB1cCByZW1haW5pbmcgc3BhY2UgKi9cbiAgdGV4dC1hbGlnbjogcmlnaHQ7IC8qIENlbnRlciB0ZXh0IGhvcml6b250YWxseSAqL1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */";
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
      decls: 96,
      vars: 4,
      consts: [["drawer", ""], [1, "sidebar-container"], ["color", "primary"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "toolbar-title"], ["class", "logged-in", 4, "ngIf"], [1, "sidenav-container"], ["mode", "side", 1, "sidenav", 3, "opened"], [1, "sidenav-header"], ["mat-list-item", "", "routerLink", "/dashboard", "routerLinkActive", "active-link"], ["matListItemIcon", ""], ["matListItemTitle", ""], ["mat-list-item", "", "routerLink", "/fish", "routerLinkActive", "active-link"], [1, "mat-elevation-z0"], [1, "panel-title-content"], ["mat-list-item", "", "routerLink", "/admin/users", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/admin/roles", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/admin/permissions", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/reports/summary", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/reports/analytics", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/reports/export", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/profile", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/help", "routerLinkActive", "active-link"], ["mat-list-item", "", "routerLink", "/logout", "routerLinkActive", "active-link"], [1, "sidenav-content"], [1, "content-container"], [1, "logged-in"]],
      template: function SidebarLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "mat-toolbar", 2)(2, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarLayoutComponent_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.toggleSidebar());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "PFFC Application");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SidebarLayoutComponent_span_7_Template, 2, 1, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-sidenav-container", 6)(9, "mat-sidenav", 7, 0)(11, "div", 8)(12, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-nav-list")(16, "a", 9)(17, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 12)(22, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "business");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Fish (example)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-accordion")(28, "mat-expansion-panel", 13)(29, "mat-expansion-panel-header")(30, "mat-panel-title")(31, "div", 14)(32, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Administration");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-nav-list")(37, "a", 15)(38, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "people");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 16)(43, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "verified_user");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Roles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 17)(48, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "security");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Permissions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-expansion-panel", 13)(53, "mat-expansion-panel-header")(54, "mat-panel-title")(55, "div", 14)(56, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "insert_chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-nav-list")(61, "a", 18)(62, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "summarize");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Summary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 19)(67, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 20)(72, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "download");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Export");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-nav-list")(78, "a", 21)(79, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "account_circle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 22)(84, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "help");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Help");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 23)(89, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "exit_to_app");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-sidenav-content", 24)(94, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.sidebarOpened() ? "Hide menu" : "Show menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sidebarOpened() ? "menu_open" : "menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firstName());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", ctx.sidebarOpened());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItemIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItemTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionPanelTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip],
      styles: [_c1, _c1]
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
      loadingService.setLoading(true);
      return next.handle(clonedRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
        // Stop loading when the request completes (success or error)
        loadingService.setLoading(false);
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
  apiUrl: "http://localhost:8080/api"
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
  })]
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