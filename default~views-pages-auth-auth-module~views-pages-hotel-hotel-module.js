(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-pages-auth-auth-module~views-pages-hotel-hotel-module"],{

/***/ "/2yL":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/auth/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/tenant/tenant */ "lWHP");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "0Xdg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");











const _c0 = ["userCode"];
const _c1 = ["password"];
function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Enter your details to login to your account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Remember me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.Login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.loginForm.get("userCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.loginForm.get("password"));
} }
function LoginComponent_div_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 43);
} }
function LoginComponent_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 44);
} }
function LoginComponent_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 45);
} }
function LoginComponent_div_2_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 46);
} }
function LoginComponent_div_2_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 47);
} }
function LoginComponent_div_2_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} }
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_img_2_Template, 1, 0, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_2_img_3_Template, 1, 0, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_2_img_4_Template, 1, 0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_2_img_5_Template, 1, 0, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_2_img_6_Template, 1, 0, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_div_2_img_7_Template, 1, 0, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "powered by Travel 101 \u00A9\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Why us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Get in touch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getTenantLoginLogos().includes("Linksrez"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getTenantLoginLogos().includes("AmericanAirlines"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getTenantLoginLogos().includes("Marriott"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getTenantLoginLogos().includes("AVIS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getTenantLoginLogos().includes("IBM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getTenantLoginLogos().includes("RedHat"));
} }
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class LoginComponent {
    constructor(loginService, router, _snackBar) {
        this.loginService = loginService;
        this.router = router;
        this._snackBar = _snackBar;
        this.submitted = false;
        this.errorMessage = '';
        this.serverError = false;
        this.actionsLayout = 'normal';
        this.isLoadingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = false;
        this.matcher = new MyErrorStateMatcher();
        this.tenantName = Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_2__["getTenantName"])();
        console.log(Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_2__["getTenantLoginLogos"])());
    }
    get getLogo() {
        return _shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_2__["getLogo"];
    }
    get getTenantLoginLogos() {
        return _shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_2__["getTenantLoginLogos"];
    }
    ngOnInit() {
        // console.log('LoginComponent');
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    get password() { return this.loginForm.get('password'); }
    Login() {
        this.submitted = true;
        this.isLoading = true;
        this.isLoadingChange.emit(this.isLoading);
        const formValue = this.loginForm.value;
        if (formValue.userCode == "" && formValue.password == "") {
            this.snackBar("Email & Password is Required");
            return;
        }
        else if (formValue.userCode == "") {
            this.snackBar("Email is Required");
            return;
        }
        else if (formValue.password == "") {
            this.snackBar("Password is Required");
            return;
        }
        const user = {
            username: this.loginForm.value.userCode,
            password: this.loginForm.value.password
        };
        // this.loginService.login(user, 'hotelsApiEndpoint').
        //   subscribe((data: any) => {
        //     if(data.jwt != null && data.jwt != ""){
        //       this.errorMessage = '';
        //       // console.log(JSON.stringify(data));
        //       this.loginService.setUserSession(data, "hotelsTokenName");
        //       this.isLoading = false;
        //       this.isLoadingChange.emit(this.isLoading);
        //       this.router.navigateByUrl('/Hotels');
        //     } else {
        //       this.snackBar("Something Wrong Happend");
        //     }
        //   },
        //   error => {
        //     this.isLoading = false;
        //     this.isLoadingChange.emit(this.isLoading);
        //     this.errorMessage = error.Error;
        //     if(error.status!=500){
        //       this.password.setErrors([{'password is incorrect': true}]);
        //     }else{
        //       this.serverError = true;
        //       this.errorMessage ='Server is unavailable.';
        //     }
        //     this.snackBar("Server is unavailable.");
        //   }
        // );
        this.loginService.setUserSession('c8b129c2e8c53de7adc8e2d1ede8d5d3', "hotelsTokenName");
        this.isLoading = false;
        this.isLoadingChange.emit(this.isLoading);
        this.router.navigateByUrl('/Hotels');
    }
    close(status) {
        console.log(`Dialog result: ${status}`);
        this.serverError = false;
    }
    open() {
        this.serverError = true;
    }
    keyEnter(event, formName) {
        console.log(formName);
        if (formName === 'userCode') {
            this.passwordElement.nativeElement.focus();
        }
        else if (formName === 'password') {
            console.log(this.loginForm.valid);
            if (this.loginForm.valid) {
                this.Login();
            }
        }
    }
    snackBar(message, action = "OK", duration = 2000) {
        this._snackBar.open(message, "OK", { duration: duration });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.usercodeElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.passwordElement = _t.first);
    } }, inputs: { isLoading: "isLoading" }, outputs: { isLoadingChange: "isLoadingChange" }, decls: 3, vars: 3, consts: [["class", "spinnerBg", 4, "ngIf"], ["class", "d-flex flex-column flex-root h-100", 4, "ngIf"], ["class", "footerFixed", 4, "ngIf"], [1, "spinnerBg"], [1, "spinner", 3, "diameter"], [1, "d-flex", "flex-column", "flex-root", "h-100"], ["id", "lr_login", 1, "login", "login-lr", "login-signin-on", "d-flex", "flex-row-fluid"], [1, "d-flex", "flex-center", "bgi-size-cover", "bgi-no-repeat", "flex-row-fluid", "lr-login--bg"], [1, "imgRight"], [1, "imgLeft"], [1, "login-form", "text-center", "text-white", "p-0", "mb-10", "position-relative", "overflow-hidden"], [1, "d-flex", "flex-center", "mb-12"], ["routerLink", "/Hotels"], ["src", "assets/media/logoNew/t101-1.png", 1, "max-h-100px", "max-w-450px", 2, "height", "65px", "display", "block", "width", "auto"], [1, "login-signin"], [1, "mb-15"], [1, "opacity-60", "font-weight-bold"], ["id", "lr_login_signin_form", 1, "lr-form"], [1, "form-group"], ["matInput", "", "type", "text", "placeholder", "Login", "name", "email", "autocomplete", "off", 1, "form-control", "form-control2", "rounded-pill", 3, "formControl"], ["userCode", ""], ["matInput", "", "type", "password", "placeholder", "Password", "name", "password", 1, "form-control", "form-control2", "rounded-pill", 3, "formControl"], ["password", ""], [1, "form-group", "d-flex", "flex-wrap", "justify-content-end", "px-8"], [1, "d-none", "checkbox-inline"], [1, "checkbox", "checkbox-outline", "checkbox-white", "text-white", "m-0"], ["type", "checkbox", "name", "remember"], [1, "form-group", "text-center", "mt-5"], ["id", "lr_login_signin_submit", 1, "btn", "btn-pill", "btn-outline-white", "font-weight-bold", "opacity-90", "px-15", "py-3", 3, "click"], [1, "footerFixed"], [1, "d-flex", "justify-content-center", "mb-5"], ["class", "mr-5", "src", "../../../../../assets/media/login_lrz.png", 4, "ngIf"], ["class", "mr-6", "src", "../../../../../assets/media/login_aa.png", 4, "ngIf"], ["class", "mr-6", "src", "../../../../../assets/media/login_mr.png", 4, "ngIf"], ["class", "mr-5", "src", "../../../../../assets/media/login_avis.png", 4, "ngIf"], ["class", "mr-5", "src", "../../../../../assets/media/login-ibm.png", 4, "ngIf"], ["class", "mr-5", "src", "../../../../../assets/media/login_rh.png", 4, "ngIf"], [1, "d-flex", "justify-content-between", "bg-white-o-100", "h-40px", "pl-10", "pr-10", "pt-2"], [1, "text-light", "font-size-lg", "mr-10"], ["href", "#", "target", "_blank", 1, "text-light", "text-hover-primary"], [1, "d-none"], ["href", "#", 1, "text-light"], ["href", "#", 1, "text-light", "ml-5"], ["src", "../../../../../assets/media/login_lrz.png", 1, "mr-5"], ["src", "../../../../../assets/media/login_aa.png", 1, "mr-6"], ["src", "../../../../../assets/media/login_mr.png", 1, "mr-6"], ["src", "../../../../../assets/media/login_avis.png", 1, "mr-5"], ["src", "../../../../../assets/media/login-ibm.png", 1, "mr-5"], ["src", "../../../../../assets/media/login_rh.png", 1, "mr-5"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 31, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 19, 6, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: [".login.login-lr .login-signin,\r\n.login.login-lr .login-signup,\r\n.login.login-lr .login-forgot {\r\n  display: none; }\r\n\r\n.login.login-lr.login-signin-on .login-signin {\r\n  display: block; }\r\n\r\n.login.login-lr.login-signup-on .login-signup {\r\n  display: block; }\r\n\r\n.login.login-lr.login-forgot-on .login-forgot {\r\n  display: block; }\r\n\r\n.login.login-lr .login-form {\r\n  width: 100%;\r\n  max-width: 450px; }\r\n\r\n@media (max-width: 575.98px) {\r\n  .login.login-lr .login-form {\r\n    width: 100%;\r\n    max-width: 100%; } }\r\n\r\n.form-control2 {\r\n  height: 46px; border-radius: 46px; border: none; padding-left: 1.5rem;\r\n  padding-right: 1.5rem; margin-top: 1.5rem; background: rgba(0, 0, 50, 0.6);\r\n  color: #fff; font-size: 1.2rem !important;}\r\n\r\n.footerFixed {\r\n  width: 100%; bottom: 0px; position: fixed;\r\n}\r\n\r\n.btn {\r\n  font-size: 1.2rem !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxhQUFhLEVBQUU7O0FBRWpCO0VBQ0UsY0FBYyxFQUFFOztBQUVsQjtFQUNFLGNBQWMsRUFBRTs7QUFFbEI7RUFDRSxjQUFjLEVBQUU7O0FBRWxCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQixFQUFFOztBQUVwQjtFQUNFO0lBQ0UsV0FBVztJQUNYLGVBQWUsRUFBRSxFQUFFOztBQUV2QjtFQUNFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsb0JBQW9CO0VBQ3JFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLCtCQUErQjtFQUMxRSxXQUFXLEVBQUUsNEJBQTRCLENBQUM7O0FBRTVDO0VBQ0UsV0FBVyxFQUFFLFdBQVcsRUFBRSxlQUFlO0FBQzNDOztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLmxvZ2luLWxyIC5sb2dpbi1zaWduaW4sXHJcbi5sb2dpbi5sb2dpbi1sciAubG9naW4tc2lnbnVwLFxyXG4ubG9naW4ubG9naW4tbHIgLmxvZ2luLWZvcmdvdCB7XHJcbiAgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLmxvZ2luLmxvZ2luLWxyLmxvZ2luLXNpZ25pbi1vbiAubG9naW4tc2lnbmluIHtcclxuICBkaXNwbGF5OiBibG9jazsgfVxyXG5cclxuLmxvZ2luLmxvZ2luLWxyLmxvZ2luLXNpZ251cC1vbiAubG9naW4tc2lnbnVwIHtcclxuICBkaXNwbGF5OiBibG9jazsgfVxyXG5cclxuLmxvZ2luLmxvZ2luLWxyLmxvZ2luLWZvcmdvdC1vbiAubG9naW4tZm9yZ290IHtcclxuICBkaXNwbGF5OiBibG9jazsgfVxyXG5cclxuLmxvZ2luLmxvZ2luLWxyIC5sb2dpbi1mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQ1MHB4OyB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAubG9naW4ubG9naW4tbHIgLmxvZ2luLWZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH0gfVxyXG5cclxuLmZvcm0tY29udHJvbDIge1xyXG4gIGhlaWdodDogNDZweDsgYm9yZGVyLXJhZGl1czogNDZweDsgYm9yZGVyOiBub25lOyBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07IG1hcmdpbi10b3A6IDEuNXJlbTsgYmFja2dyb3VuZDogcmdiYSgwLCAwLCA1MCwgMC42KTtcclxuICBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDt9XHJcblxyXG4uZm9vdGVyRml4ZWQge1xyXG4gIHdpZHRoOiAxMDAlOyBib3R0b206IDBweDsgcG9zaXRpb246IGZpeGVkO1xyXG59ICBcclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, { isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoadingChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], usercodeElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['userCode', { static: false }]
        }], passwordElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['password', { static: false }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~views-pages-auth-auth-module~views-pages-hotel-hotel-module.js.map