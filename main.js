(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "++hd":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/tooltip.directive.ts ***!
  \********************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TooltipDirective {
    constructor(el) {
        this.el = el;
    }
    onHover() {
        /*this.$tooltip = document.createElement('span');
        this.$tooltip.textContent = this.tooltip;
        this.$tooltip.className = 'tooltip-text'
        this.el.nativeElement.appendChild(this.$tooltip);*/
        //if(this.appTooltip.popUpMessage != "" && this.appTooltip.popUpMessage != null) {
        this.appTooltip.isPopUp = true;
        //} 
        // console.log('onHover')
    }
    onLeave() {
        // this.el.nativeElement.removeChild(this.$tooltip);
        this.appTooltip.isPopUp = false;
        // console.log('onLeave')
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TooltipDirective, selectors: [["", "appTooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function TooltipDirective_mouseover_HostBindingHandler() { return ctx.onHover(); })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() { return ctx.onLeave(); });
    } }, inputs: { appTooltip: "appTooltip" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appTooltip]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { appTooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseover']
        }], onLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "/hi3":
/*!**************************************************************!*\
  !*** ./src/app/store/transportation/transportation.state.ts ***!
  \**************************************************************/
/*! exports provided: TransportationStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationStateModule", function() { return TransportationStateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _transportation_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transportation.actions */ "XsqF");



let TransportationStateModule = class TransportationStateModule {
    static getTransportationData({ getState }) {
        return getState();
    }
    setTransportationData({ setState, getState }, { payload }) {
        const state = getState();
        setState(Object.assign(Object.assign({}, state), payload));
    }
    //selectedTransportation
    static getSelectedTransportation(state) {
        return state.selectedTransportation;
    }
    static checkSelectedTransportation(state) {
        return state.selectedTransportation == null ? false : true;
    }
    setSelectedTransportation({ patchState }, { payload }) {
        patchState({ selectedTransportation: payload });
    }
    deleteSelectedTransportation({ patchState }) {
        patchState({ selectedTransportation: null });
    }
    //searchCriteria
    static getSearchCriteria(state) {
        return state.searchCriteria;
    }
    static checkSearchCriteria(state) {
        return state.searchCriteria == null ? false : true;
    }
    setSearchCriteria({ patchState }, { payload }) {
        patchState({ searchCriteria: payload });
    }
    deleteSearchCriteria({ patchState }) {
        patchState({ searchCriteria: null });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_transportation_actions__WEBPACK_IMPORTED_MODULE_2__["SetTransportationData"])
], TransportationStateModule.prototype, "setTransportationData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_transportation_actions__WEBPACK_IMPORTED_MODULE_2__["SetSelectedTransportationData"])
], TransportationStateModule.prototype, "setSelectedTransportation", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_transportation_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSelectedTransportationData"])
], TransportationStateModule.prototype, "deleteSelectedTransportation", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_transportation_actions__WEBPACK_IMPORTED_MODULE_2__["SetSearchCriteriaData"])
], TransportationStateModule.prototype, "setSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_transportation_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSearchCriteriaData"])
], TransportationStateModule.prototype, "deleteSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], TransportationStateModule, "getTransportationData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], TransportationStateModule, "getSelectedTransportation", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], TransportationStateModule, "checkSelectedTransportation", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], TransportationStateModule, "getSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], TransportationStateModule, "checkSearchCriteria", null);
TransportationStateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'transportationStateModule',
        defaults: {
            selectedTransportation: null,
            searchCriteria: null
        }
    })
], TransportationStateModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pedro\OneDrive\Escritorio\react\hotel\LR%20GUI\src\main.ts */"zUnb");


/***/ }),

/***/ "0Xdg":
/*!*********************************************************!*\
  !*** ./src/app/views/pages/auth/login/login.service.ts ***!
  \*********************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/config */ "VJzw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/tenant/tenant */ "lWHP");
/* harmony import */ var _shared_services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/EncrDecr.service */ "7qyG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_storage_cookie_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/storage/cookie-storage */ "pEEB");
/* harmony import */ var _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/storage/local-storage */ "ADqn");













class LoginService {
    constructor(httpClient, encrypt, router, cookieStorage, localStorage) {
        this.httpClient = httpClient;
        this.encrypt = encrypt;
        this.router = router;
        this.cookieStorage = cookieStorage;
        this.localStorage = localStorage;
    }
    getLogggedInStatus(tokenName = "airlinesTokenName") {
        return this.cookieStorage.check(src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"][tokenName]);
    }
    setUserSession(tokenObj, tokenName = "airlinesTokenName") {
        if (tokenName != "airlinesTokenName") {
            const token = {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMDA5MzliYy1iZjdmLTQxMjAtYTQwMi05YjI2ZWJlN2JhMjMiLCJqdGkiOiIyZDEwNmUzNy03MWY1LTRhNGUtOGI0OC1kYmQxNmYyZWJiM2UiLCJyb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwibmJmIjoxNjM0ODk1MDg1LCJleHAiOjE2NjY0MzEwODUsImlzcyI6Imlzc3VlciIsImF1ZCI6ImF1ZGllbmNlIn0.8nw033EMjhlechyC3yPfopk9akCzYtKFfzD_Tgu6NLI"
            };
            this.setToken(token, "airlinesTokenName");
        }
        this.setToken(tokenObj, tokenName);
        /*this.cookieStorage.removeItem(config[tokenName], '/');
        let userinfo = {
          token: tokenObj.token
        };
        this.cookieStorage.setItem(config[tokenName], JSON.stringify(userinfo), config.sessionexpiration * (1 / 24) / 60, '/', undefined, false, 'Strict');*/
    }
    setToken(tokenObj, tokenName) {
        this.cookieStorage.removeItem(src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"][tokenName], '/');
        if (tokenName == "airlinesTokenName") {
            this.cookieStorage.setItem(src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"][tokenName], JSON.stringify(tokenObj), src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"].sessionexpiration * (1 / 24) / 60, '/', undefined, false, 'Strict');
        }
        else {
            this.cookieStorage.setItem(src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"][tokenName], JSON.stringify(tokenObj), src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"].hotelSessionexpiration * (1 / 24) / 60, '/', undefined, false, 'Strict');
        }
    }
    updateUserSession(tokenName = "airlinesTokenName") {
        const token = this.cookieStorage.getItem(src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"][tokenName]);
        this.cookieStorage.removeItem(src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"][tokenName], '/');
        if (tokenName == "airlinesTokenName") {
            this.cookieStorage.setItem(src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"][tokenName], token, src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"].sessionexpiration * (1 / 24) / 60, '/', undefined, false, 'Strict');
        }
        else {
            this.cookieStorage.setItem(src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"][tokenName], token, src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"].hotelSessionexpiration * (1 / 24) / 60, '/', undefined, false, 'Strict');
        }
    }
    getUserSession(tokenName = "airlinesTokenName") {
        // this.updateUserSession();
        let token = this.cookieStorage.getItem(src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"][tokenName]) || null;
        if (token == null) {
            this.router.navigateByUrl('/login');
        }
        return JSON.parse(token);
    }
    getUserName(tokenName = "airlinesTokenName") {
        this.updateUserSession();
        let token = this.cookieStorage.getItem(src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"][tokenName]) || null;
        if (token == null) {
            this.router.navigateByUrl('/login');
        }
        let userObj = JSON.parse(token) || {};
        return userObj.userName || '';
    }
    deleteUserSession(tokenName = "airlinesTokenName") {
        this.localStorage.removeItem('searchFormGroup');
        this.localStorage.removeItem('hotelSearchFormGroup');
        this.cookieStorage.removeItem(src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"][tokenName]);
        return this.cookieStorage.removeItem(src_app_shared_config__WEBPACK_IMPORTED_MODULE_2__["config"]["airlinesTokenName"]);
    }
    login(user, endPoint = "airlinesApiEndpointNET") {
        const headerDict = {
            'Content-Type': 'application/json'
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerDict),
        };
        const ep = "object" === typeof _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"][endPoint] ? _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"][endPoint][Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_6__["getEnvironment"])()] : _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"][endPoint];
        return this.httpClient.post(ep + 'authenticate', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = {};
        if (error.error instanceof ErrorEvent) {
            //  client-side error
            errorMessage = { code: '-1', Error: `${error.error.message}` };
        }
        else {
            //  server-side error
            errorMessage = { code: '-1', status: error.status, Error: error.message };
        }
        // window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
    logout(endPoint = "airlinesApiEndpointNET") {
        let userinfo = this.getUserSession();
        const headerDict = {
            'Content-Type': 'application/json',
            'token': userinfo.token
        };
        const requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerDict),
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"][endPoint] + 'logout', {}, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_7__["EncrDecrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_storage_cookie_storage__WEBPACK_IMPORTED_MODULE_9__["CookieStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_10__["LocalStorage"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _shared_services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_7__["EncrDecrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _shared_storage_cookie_storage__WEBPACK_IMPORTED_MODULE_9__["CookieStorage"] }, { type: _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_10__["LocalStorage"] }]; }, null); })();


/***/ }),

/***/ "0lBK":
/*!***********************************************!*\
  !*** ./src/app/guard/authentication.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/pages/auth/login/login.service */ "0Xdg");




class AuthenticationGuard {
    constructor(myRoute, loginService) {
        this.myRoute = myRoute;
        this.loginService = loginService;
    }
    canActivate(next, state) {
        let auth = this.loginService.getLogggedInStatus();
        if (auth == true) {
            return true;
        }
        else {
            this.myRoute.navigate(["login"]);
            return false;
        }
    }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) { return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
AuthenticationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationGuard, factory: AuthenticationGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2Goh":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/only-number.directive.ts ***!
  \************************************************************/
/*! exports provided: OnlyNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function() { return OnlyNumberDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OnlyNumberDirective {
    constructor(el) {
        this.el = el;
        this.regexStr = '^[0-9]*$';
    }
    onKeyDown(event) {
        let e = event;
        if (
        // Allow: Delete, Backspace, Tab, Escape, Enter, etc
        // this.navigationKeys.indexOf(e.key) > -1 || 
        (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) // Cmd+X (Mac)
        ) {
            return; // let it happen, don't do anything
        }
        // Ensure that it is a number and stop the keypress
        // backspace and tab
        if (!(event.keyCode === 8 || event.keyCode === 46 || event.key == 'Tab')
            && (e.key === ' ' || isNaN(Number(e.key)))) {
            e.preventDefault();
        }
    }
    onPaste(event) {
        event.preventDefault();
        const pastedInput = event.clipboardData
            .getData('text/plain')
            .replace(/\D/g, ''); // get a digit-only string
        document.execCommand('insertText', false, pastedInput);
    }
    // @HostListener('document:keydown.tab', ['$event'])
    // onKeydownHandler(event: KeyboardEvent) {
    //   console.log('only number keydown tab');
    //   // event.preventDefault();
    // }
    onDrop(event) {
        event.preventDefault();
        const textData = event.dataTransfer
            .getData('text').replace(/\D/g, '');
        document.execCommand('insertText', false, textData);
    }
}
OnlyNumberDirective.ɵfac = function OnlyNumberDirective_Factory(t) { return new (t || OnlyNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
OnlyNumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OnlyNumberDirective, selectors: [["", "appOnlyNumber", ""]], hostBindings: function OnlyNumberDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function OnlyNumberDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("paste", function OnlyNumberDirective_paste_HostBindingHandler($event) { return ctx.onPaste($event); })("drop", function OnlyNumberDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlyNumberDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appOnlyNumber]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], onPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['paste', ['$event']]
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }] }); })();


/***/ }),

/***/ "7qyG":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/EncrDecr.service.ts ***!
  \*****************************************************/
/*! exports provided: EncrDecrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncrDecrService", function() { return EncrDecrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "VJzw");




class EncrDecrService {
    constructor() { }
    // The set method is use for encrypt the value.
    AESEncrypt(value, key) {
        key = key || _config__WEBPACK_IMPORTED_MODULE_2__["config"].encryptionKey;
        const keyvalue = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(key);
        const iv = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(key);
        const encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(value.toString()), keyvalue, {
            keySize: 128 / 8,
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_1__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_1__["pad"].Pkcs7
        });
        return encrypted.toString();
    }
    // The get method is use for decrypt the value.
    AESDecrypt(value, key) {
        key = key || _config__WEBPACK_IMPORTED_MODULE_2__["config"].encryptionKey;
        const keyValue = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(key);
        const iv = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(key);
        const decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(value, keyValue, {
            keySize: 128 / 8,
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_1__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_1__["pad"].Pkcs7
        });
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
    }
}
EncrDecrService.ɵfac = function EncrDecrService_Factory(t) { return new (t || EncrDecrService)(); };
EncrDecrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EncrDecrService, factory: EncrDecrService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EncrDecrService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ADqn":
/*!*************************************************!*\
  !*** ./src/app/shared/storage/local-storage.ts ***!
  \*************************************************/
/*! exports provided: LocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/EncrDecr.service */ "7qyG");



class LocalStorage {
    constructor(encrypt) {
        this.encrypt = encrypt;
        this.keys = {
            airline: {
                selectedRlocId: "selectedRlocId",
                search: "airlineSearch",
                offerViewModel: "airlineOfferViewModel",
            }
        };
    }
    clear() {
        localStorage.clear();
    }
    check(key) {
        return localStorage.getItem(key) == (undefined || null) ? false : true;
    }
    getItem(key) {
        let data = localStorage.getItem(key);
        if (data == (undefined || null)) {
            return data;
        }
        data = this.encrypt.AESDecrypt(data);
        return data;
    }
    key(index) {
        return localStorage.key(index);
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    setItem(key, data) {
        data = this.encrypt.AESEncrypt(data);
        localStorage.setItem(key, data);
    }
}
LocalStorage.ɵfac = function LocalStorage_Factory(t) { return new (t || LocalStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_1__["EncrDecrService"])); };
LocalStorage.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorage, factory: LocalStorage.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_1__["EncrDecrService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    version: "2.0",
    releaseDate: "2024-02-20",
    airlinesApiEndpointNET: 'https://airlineapi.dev.linksrez.com/api/',
    airApiEndpoint: {
        dev: 'https://air-api.dev.linksrez.com/api/',
        stg: 'https://air-api.dev.linksrez.com/api/',
        prd: 'https://air-api.dev.linksrez.com/api/'
    },
    hotelsApiEndpoint: {
        dev: 'https://hotel-api-2445583353637.production.gw.apicast.io:443/api/v2/',
        stg: 'https://hotel-api-2445583353637.production.gw.apicast.io:443/api/v2/',
        prd: 'https://hotel-api-2445583353637.production.gw.apicast.io:443/api/v2/'
    },
    hotelsImgEndpoint: 'https://test-hotelapi2staging.linksrez.com/api/values',
    carRentalApiEndpoint: {
        dev: 'https://api.dev.linksrez.com/',
        stg: 'https://api.stg.linksrez.com/',
        prd: 'https://api.stg.linksrez.com/'
    },
    golfApiEndpoint: 'https://airlineapi.dev.linksrez.com/api/',
    spaApiEndpoint: 'https://airlineapi.dev.linksrez.com/api/',
    railApiEndpoint: 'https://airlineapi.dev.linksrez.com/api/',
    cruiseApiEndpoint: 'https://airlineapi.dev.linksrez.com/api/',
    transportationApiEndpoint: 'https://airlineapi.dev.linksrez.com/api/',
    tenants: [
        {
            urls: ["air-poc", "localhost", "portal.linksrez.com"],
            tenant: "linkrez"
        },
        {
            urls: ["travel.linksrez"],
            tenant: "travel"
        },
        {
            urls: ["opentravel", "ota.linksrez.com", "travelapi.opentravel.org"],
            tenant: "opentravel"
        },
        {
            urls: ["fullofdreams"],
            tenant: "fullofdreams"
        },
        {
            urls: ["simplenight"],
            tenant: "simplenight"
        },
        {
            urls: ["military", "military-travel", "military-travel.linksrez.com"],
            tenant: "military"
        },
        {
            urls: ["cwt"],
            tenant: "cwt"
        },
        {
            urls: ["golfhero", "golfherohotels"],
            tenant: "golfhero"
        },
        {
            urls: ["golfnational", "le-golf-national", "legolfnational", "golf-national", "le-golf", "le-golfnational"],
            tenant: "golfnational"
        },
        {
            urls: ["golfopen", "theopen", "opengolf"],
            tenant: "golfopen"
        },
        {
            urls: ["mykey", "mykey.linksrez.com"],
            tenant: "mykey"
        },
        {
            urls: ["catale", "catale.linksrez.com"],
            tenant: "calate"
        }
    ],
    hotelTarget: {
        dev: 'TEST',
        stg: 'TEST',
        prd: 'TEST'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ChSZ":
/*!*************************************************************!*\
  !*** ./src/app/shared/tenant/configuration/fullofdreams.ts ***!
  \*************************************************************/
/*! exports provided: fullofdreams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullofdreams", function() { return fullofdreams; });
const fullofdreams = {
    "env": "stg",
    "tenant": "fullofdreams",
    "logo": "fullofdreams.png",
    "whiteLogo": "fullofdreamsWhite.png",
    "favIcon": "fullOfDreamsFavIcon.ico",
    "title": "Full of Dreams",
    "theme": "fullofdreams",
    "loginLogos": [],
    "authorizedModules": ["Hotels"],
    "modulesOrder": ["Hotels", "Airlines", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 10,
            "batchSize": 10
        }
    }
};


/***/ }),

/***/ "EyRZ":
/*!********************************************************!*\
  !*** ./src/app/shared/tenant/configuration/default.ts ***!
  \********************************************************/
/*! exports provided: defaultTenant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTenant", function() { return defaultTenant; });
const defaultTenant = {
    "env": "stg",
    "tenant": "Linkrez",
    "logo": "linkrez.svg",
    "whiteLogo": "linkrezWhite.svg",
    "favIcon": "linkrezFavIcon.ico",
    "title": "Linkrez",
    "theme": "default",
    "loginLogos": ["Linksrez", "Opentravel", "AmericanAirlines", "Marriott", "AVIS", "IBM", "RedHat"],
    "authorizedModules": ["Airlines", "Hotels", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "modulesOrder": ["Airlines", "Hotels", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 25,
            "batchSize": 10
        }
    }
};


/***/ }),

/***/ "GG7F":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/credit-card.directive.ts ***!
  \************************************************************/
/*! exports provided: CreditCardDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardDirective", function() { return CreditCardDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CreditCardDirective {
    constructor(el) {
        this.el = el;
        this.regexStr = '^[0-9]*$';
    }
    onKeyDown(event) {
        let e = event;
        if (
        // Allow: Delete, Backspace, Tab, Escape, Enter, etc
        // this.navigationKeys.indexOf(e.key) > -1 || 
        (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) // Cmd+X (Mac)
        ) {
            return; // let it happen, don't do anything
        }
        // Ensure that it is a number and stop the keypress and 
        // backspace and tab
        if (!(event.keyCode === 8 || event.keyCode === 46 || event.key == 'Tab')
            && (e.key === ' ' || isNaN(Number(e.key)))) {
            e.preventDefault();
        }
        else {
            const input = event.target;
            // console.log(input.value);
            let trimmed = input.value.replace(/\s+/g, '');
            if (trimmed.length > 16) {
                trimmed = trimmed.substr(0, 16);
            }
            let numbers = [];
            for (let i = 0; i < trimmed.length; i += 4) {
                numbers.push(trimmed.substr(i, 4));
            }
            input.value = numbers.join(' ');
            /*this.border = '';
            if (/[^\d]+/.test(trimmed)) {
              this.border = '1px solid red';
            }*/
        }
    }
    onPaste(event) {
        // console.log('onPaste');
        event.preventDefault();
        let pastedInput = event.clipboardData
            .getData('text/plain')
            .replace(/\D/g, ''); // get a digit-only string
        pastedInput = this.formatedCardNumber(pastedInput);
        document.execCommand('insertText', false, pastedInput);
    }
    onDrop(event) {
        // console.log('onDrop');
        event.preventDefault();
        let textData = event.dataTransfer
            .getData('text').replace(/\D/g, '');
        textData = this.formatedCardNumber(textData);
        document.execCommand('insertText', false, textData);
    }
    // @HostListener('document:keydown.tab', ['$event'])
    // onKeydownHandler(event: KeyboardEvent) {
    //   console.log('credit card keydown tab');
    //   // event.preventDefault();
    // }
    formatedCardNumber(input) {
        let numbers = [];
        for (let i = 0; i < input.length; i += 4) {
            numbers.push(input.substr(i, 4));
        }
        return numbers.join(' ');
    }
}
CreditCardDirective.ɵfac = function CreditCardDirective_Factory(t) { return new (t || CreditCardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CreditCardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CreditCardDirective, selectors: [["", "appCreditCard", ""]], hostVars: 2, hostBindings: function CreditCardDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CreditCardDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("paste", function CreditCardDirective_paste_HostBindingHandler($event) { return ctx.onPaste($event); })("drop", function CreditCardDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx.border);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditCardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appCreditCard]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { border: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.border']
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], onPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['paste', ['$event']]
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }] }); })();


/***/ }),

/***/ "GlT0":
/*!********************************************************!*\
  !*** ./src/app/shared/tenant/configuration/linkrez.ts ***!
  \********************************************************/
/*! exports provided: linkrez */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkrez", function() { return linkrez; });
const linkrez = {
    "env": "dev",
    "tenant": "Linkrez",
    "logo": "linkrez.svg",
    "whiteLogo": "linkrezWhite.svg",
    "favIcon": "linkrezFavIcon.ico",
    "title": "T101",
    "theme": "linkrez",
    "loginLogos": [],
    "authorizedModules": ["Airlines", "Hotels", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "modulesOrder": ["Airlines", "Hotels", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 25,
            "batchSize": 10
        }
    }
};


/***/ }),

/***/ "I1Ny":
/*!***************************************************!*\
  !*** ./src/app/shared/storage/session-storage.ts ***!
  \***************************************************/
/*! exports provided: SessionStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorage", function() { return SessionStorage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/EncrDecr.service */ "7qyG");



class SessionStorage {
    constructor(encrypt) {
        this.encrypt = encrypt;
    }
    clear() {
        sessionStorage.clear();
    }
    check(key) {
        return sessionStorage.getItem(key) == (undefined || null) ? false : true;
    }
    getItem(key) {
        let data = sessionStorage.getItem(key);
        if (data == (undefined || null)) {
            return data;
        }
        data = this.encrypt.AESDecrypt(data);
        return data;
    }
    key(index) {
        return sessionStorage.key(index);
    }
    removeItem(key) {
        sessionStorage.removeItem(key);
    }
    setItem(key, data) {
        data = this.encrypt.AESEncrypt(data);
        sessionStorage.setItem(key, data);
    }
}
SessionStorage.ɵfac = function SessionStorage_Factory(t) { return new (t || SessionStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_1__["EncrDecrService"])); };
SessionStorage.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionStorage, factory: SessionStorage.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_1__["EncrDecrService"] }]; }, null); })();


/***/ }),

/***/ "II1b":
/*!********************************************!*\
  !*** ./src/app/store/rail/rail.actions.ts ***!
  \********************************************/
/*! exports provided: SetRailData, SetSelectedRailData, DeleteSelectedRailData, SetSearchCriteriaData, DeleteSearchCriteriaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRailData", function() { return SetRailData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedRailData", function() { return SetSelectedRailData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSelectedRailData", function() { return DeleteSelectedRailData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearchCriteriaData", function() { return SetSearchCriteriaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSearchCriteriaData", function() { return DeleteSearchCriteriaData; });
class SetRailData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetRailData.type = '[Rail] Rail data';
class SetSelectedRailData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSelectedRailData.type = '[Rail] Set SelectedRail data';
class DeleteSelectedRailData {
    constructor() { }
}
DeleteSelectedRailData.type = '[Rail] Delete SelectedRail data';
class SetSearchCriteriaData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSearchCriteriaData.type = '[Rail] Set SearchCriteria data';
class DeleteSearchCriteriaData {
    constructor() { }
}
DeleteSearchCriteriaData.type = '[Rail] Delete SearchCriteria data';


/***/ }),

/***/ "MHJH":
/*!************************************************!*\
  !*** ./src/app/store/cruise/cruise.actions.ts ***!
  \************************************************/
/*! exports provided: SetCruiseData, SetSelectedCruiseData, DeleteSelectedCruiseData, SetSearchCriteriaData, DeleteSearchCriteriaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCruiseData", function() { return SetCruiseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedCruiseData", function() { return SetSelectedCruiseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSelectedCruiseData", function() { return DeleteSelectedCruiseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearchCriteriaData", function() { return SetSearchCriteriaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSearchCriteriaData", function() { return DeleteSearchCriteriaData; });
class SetCruiseData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetCruiseData.type = '[Cruise] Cruise data';
class SetSelectedCruiseData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSelectedCruiseData.type = '[Cruise] Set SelectedCruise data';
class DeleteSelectedCruiseData {
    constructor() { }
}
DeleteSelectedCruiseData.type = '[Cruise] Delete SelectedCruise data';
class SetSearchCriteriaData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSearchCriteriaData.type = '[Cruise] Set SearchCriteria data';
class DeleteSearchCriteriaData {
    constructor() { }
}
DeleteSearchCriteriaData.type = '[Cruise] Delete SearchCriteria data';


/***/ }),

/***/ "P4iX":
/*!********************************************!*\
  !*** ./src/app/store/hotel/hotel.state.ts ***!
  \********************************************/
/*! exports provided: HotelStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelStateModule", function() { return HotelStateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _hotel_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hotel.actions */ "kx4g");



let HotelStateModule = class HotelStateModule {
    static getHotelData({ getState }) {
        return getState();
    }
    setHotelData({ setState, getState }, { payload }) {
        const state = getState();
        setState(Object.assign(Object.assign({}, state), payload));
    }
    //selectedHotel
    static getSelectedHotel(state) {
        return state.selectedHotel;
    }
    static checkSelectedHotel(state) {
        return state.selectedHotel == null ? false : true;
    }
    setSelectedHotel({ patchState }, { payload }) {
        patchState({ selectedHotel: payload });
    }
    deleteSelectedHotel({ patchState }) {
        patchState({ selectedHotel: null });
    }
    //searchCriteria
    static getSearchCriteria(state) {
        return state.searchCriteria;
    }
    static checkSearchCriteria(state) {
        return state.searchCriteria == null ? false : true;
    }
    setSearchCriteria({ patchState }, { payload }) {
        patchState({ searchCriteria: payload });
    }
    deleteSearchCriteria({ patchState }) {
        patchState({ searchCriteria: null });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_hotel_actions__WEBPACK_IMPORTED_MODULE_2__["SetHotelData"])
], HotelStateModule.prototype, "setHotelData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_hotel_actions__WEBPACK_IMPORTED_MODULE_2__["SetSelectedHotelData"])
], HotelStateModule.prototype, "setSelectedHotel", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_hotel_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSelectedHotelData"])
], HotelStateModule.prototype, "deleteSelectedHotel", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_hotel_actions__WEBPACK_IMPORTED_MODULE_2__["SetSearchCriteriaData"])
], HotelStateModule.prototype, "setSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_hotel_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSearchCriteriaData"])
], HotelStateModule.prototype, "deleteSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], HotelStateModule, "getHotelData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], HotelStateModule, "getSelectedHotel", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], HotelStateModule, "checkSelectedHotel", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], HotelStateModule, "getSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], HotelStateModule, "checkSearchCriteria", null);
HotelStateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'hotelStateModule',
        defaults: {
            selectedHotel: null,
            searchCriteria: null
        }
    })
], HotelStateModule);



/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material.module */ "vvyD");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _storage_cookie_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage/cookie-storage */ "pEEB");
/* harmony import */ var _storage_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage/local-storage */ "ADqn");
/* harmony import */ var _storage_session_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage/session-storage */ "I1Ny");
/* harmony import */ var _services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/EncrDecr.service */ "7qyG");
/* harmony import */ var _directives_only_number_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/only-number.directive */ "2Goh");
/* harmony import */ var _directives_credit_card_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/credit-card.directive */ "GG7F");
/* harmony import */ var _directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/uppercase.directive */ "QEcS");
/* harmony import */ var _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/tooltip.directive */ "++hd");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog/dialog.component */ "d/rN");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialog/dialog.service */ "WN5f");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _directives_google_places_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/google-places.directive */ "jvKd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_datepicker_range_datepicker_range_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/datepicker-range/datepicker-range.component */ "WJVJ");
/* harmony import */ var _services_array_helper_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/array-helper.service */ "zPlH");
/* harmony import */ var _directives_var_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/var.directive */ "TSMZ");



// import { DaterangeModule } from './daterange/daterange.module';


















;
class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _storage_cookie_storage__WEBPACK_IMPORTED_MODULE_4__["CookieStorage"], _storage_local_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"], _storage_session_storage__WEBPACK_IMPORTED_MODULE_6__["SessionStorage"], _services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_7__["EncrDecrService"],
        _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"], _services_array_helper_service__WEBPACK_IMPORTED_MODULE_18__["ArrayHelperService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]
            // DaterangeModule
        ], _material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_8__["OnlyNumberDirective"], _directives_credit_card_directive__WEBPACK_IMPORTED_MODULE_9__["CreditCardDirective"], _directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_10__["UppercaseDirective"], _directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_10__["UppercaseDirective"],
        _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__["TooltipDirective"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"],
        _directives_google_places_directive__WEBPACK_IMPORTED_MODULE_15__["GooglePlacesDirective"], _components_datepicker_range_datepicker_range_component__WEBPACK_IMPORTED_MODULE_17__["DatepickerRangeComponent"], _directives_var_directive__WEBPACK_IMPORTED_MODULE_19__["VarDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]
        // DaterangeModule
    ], exports: [_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"], _directives_only_number_directive__WEBPACK_IMPORTED_MODULE_8__["OnlyNumberDirective"], _directives_credit_card_directive__WEBPACK_IMPORTED_MODULE_9__["CreditCardDirective"], _directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_10__["UppercaseDirective"],
        _directives_var_directive__WEBPACK_IMPORTED_MODULE_19__["VarDirective"],
        _directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_10__["UppercaseDirective"], _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__["TooltipDirective"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"],
        _directives_google_places_directive__WEBPACK_IMPORTED_MODULE_15__["GooglePlacesDirective"], _components_datepicker_range_datepicker_range_component__WEBPACK_IMPORTED_MODULE_17__["DatepickerRangeComponent"]
        // DaterangeModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _directives_only_number_directive__WEBPACK_IMPORTED_MODULE_8__["OnlyNumberDirective"], _directives_credit_card_directive__WEBPACK_IMPORTED_MODULE_9__["CreditCardDirective"], _directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_10__["UppercaseDirective"], _directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_10__["UppercaseDirective"],
                    _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__["TooltipDirective"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"],
                    _directives_google_places_directive__WEBPACK_IMPORTED_MODULE_15__["GooglePlacesDirective"], _components_datepicker_range_datepicker_range_component__WEBPACK_IMPORTED_MODULE_17__["DatepickerRangeComponent"], _directives_var_directive__WEBPACK_IMPORTED_MODULE_19__["VarDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]
                    // DaterangeModule
                ],
                providers: [
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _storage_cookie_storage__WEBPACK_IMPORTED_MODULE_4__["CookieStorage"], _storage_local_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"], _storage_session_storage__WEBPACK_IMPORTED_MODULE_6__["SessionStorage"], _services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_7__["EncrDecrService"],
                    _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"], _services_array_helper_service__WEBPACK_IMPORTED_MODULE_18__["ArrayHelperService"]
                ],
                exports: [
                    _material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"], _directives_only_number_directive__WEBPACK_IMPORTED_MODULE_8__["OnlyNumberDirective"], _directives_credit_card_directive__WEBPACK_IMPORTED_MODULE_9__["CreditCardDirective"], _directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_10__["UppercaseDirective"],
                    _directives_var_directive__WEBPACK_IMPORTED_MODULE_19__["VarDirective"],
                    _directives_uppercase_directive__WEBPACK_IMPORTED_MODULE_10__["UppercaseDirective"], _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__["TooltipDirective"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"],
                    _directives_google_places_directive__WEBPACK_IMPORTED_MODULE_15__["GooglePlacesDirective"], _components_datepicker_range_datepicker_range_component__WEBPACK_IMPORTED_MODULE_17__["DatepickerRangeComponent"]
                    // DaterangeModule
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Pvy7":
/*!****************************************************!*\
  !*** ./src/app/views/theme/base/base.component.ts ***!
  \****************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "n2Ir");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class BaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], decls: 33, vars: 0, consts: [["id", "lr_header_mobile", 1, "header-mobile"], ["href", "index.html"], ["alt", "Logo", "src", "assets/media/logoNew/logo.png", 1, "logo-default", "max-h-30px"], [1, "d-flex", "align-items-center"], ["id", "lr_header_mobile_toggle", 1, "btn", "p-0", "burger-icon", "burger-icon-left", "ml-4"], ["id", "lr_header_mobile_topbar_toggle", 1, "btn", "btn-icon", "btn-hover-transparent-white", "p-0", "ml-3"], [1, "svg-icon", "svg-icon-xl"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["points", "0 0 24 0 24 24 0 24"], ["d", "M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3"], ["d", "M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z", "fill", "#000000", "fill-rule", "nonzero"], [1, "d-flex", "flex-column", "flex-root"], [1, "d-flex", "flex-row", "flex-column-fluid", "page"], ["id", "lr_wrapper", 1, "d-flex", "flex-column", "flex-row-fluid", "wrapper"], ["id", "lr_content", 1, "content", "d-flex", "flex-column", "flex-column-fluid", "pt-0"], ["id", "lr_footer", 1, "footer", "bg-dark", "py-4", "d-none", "flex-lg-column"], [1, "container", "d-flex", "flex-column", "flex-md-row", "align-items-center", "justify-content-between"], [1, "text-white", "font-weight-bold", "order-2", "order-md-1"], [1, "mr-2"], ["href", "#", "target", "_blank", 1, "text-hover-primary"], [1, "nav", "nav-dark", "order-1", "order-md-2"], ["href", "#", "target", "_blank", 1, "nav-link", "text-white-50", "pr-3", "pl-0"], ["href", "#", "target", "_blank", 1, "nav-link", "text-white-50", "px-3"], ["href", "#", "target", "_blank", 1, "nav-link", "text-white-50", "pl-3", "pr-0"]], template: function BaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "polygon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "2020\u00A9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LinksRez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Why us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Get in touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL2Jhc2UvYmFzZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base',
                templateUrl: './base.component.html',
                styleUrls: ['./base.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QEcS":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/uppercase.directive.ts ***!
  \**********************************************************/
/*! exports provided: UppercaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UppercaseDirective", function() { return UppercaseDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UppercaseDirective {
    constructor(ref) {
        this.ref = ref;
    }
    onInput($event) {
        var start = $event.target.selectionStart;
        var end = $event.target.selectionEnd;
        $event.target.value = $event.target.value.toUpperCase();
        $event.target.setSelectionRange(start, end);
        $event.preventDefault();
        if (!this.lastValue || (this.lastValue && $event.target.value.length > 0 && this.lastValue !== $event.target.value)) {
            this.lastValue = this.ref.nativeElement.value = $event.target.value;
            // Propagation
            const evt = document.createEvent('HTMLEvents');
            evt.initEvent('input', false, true);
            event.target.dispatchEvent(evt);
        }
    }
}
UppercaseDirective.ɵfac = function UppercaseDirective_Factory(t) { return new (t || UppercaseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UppercaseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: UppercaseDirective, selectors: [["", "uppercase", ""]], hostBindings: function UppercaseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function UppercaseDirective_input_HostBindingHandler($event) { return ctx.onInput($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UppercaseDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[uppercase]',
                host: {
                    '(input)': '$event'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
        }] }); })();


/***/ }),

/***/ "Ra1L":
/*!****************************************************!*\
  !*** ./src/app/store/carrental/carrental.state.ts ***!
  \****************************************************/
/*! exports provided: CarrentalStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrentalStateModule", function() { return CarrentalStateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _carrental_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrental.actions */ "wW1D");



let CarrentalStateModule = class CarrentalStateModule {
    static getCarrentalData({ getState }) {
        return getState();
    }
    setCarrentalData({ setState, getState }, { payload }) {
        const state = getState();
        setState(Object.assign(Object.assign({}, state), payload));
    }
    //selectedCarrental
    static getSelectedCarrental(state) {
        return state.selectedCarrental;
    }
    static checkSelectedCarrental(state) {
        return state.selectedCarrental == null ? false : true;
    }
    setSelectedCarrental({ patchState }, { payload }) {
        patchState({ selectedCarrental: payload });
    }
    deleteSelectedCarrental({ patchState }) {
        patchState({ selectedCarrental: null });
    }
    //searchCriteria
    static getSearchCriteria(state) {
        return state.searchCriteria;
    }
    static checkSearchCriteria(state) {
        return state.searchCriteria == null ? false : true;
    }
    setSearchCriteria({ patchState }, { payload }) {
        patchState({ searchCriteria: payload });
    }
    deleteSearchCriteria({ patchState }) {
        patchState({ searchCriteria: null });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_carrental_actions__WEBPACK_IMPORTED_MODULE_2__["SetCarrentalData"])
], CarrentalStateModule.prototype, "setCarrentalData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_carrental_actions__WEBPACK_IMPORTED_MODULE_2__["SetSelectedCarrentalData"])
], CarrentalStateModule.prototype, "setSelectedCarrental", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_carrental_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSelectedCarrentalData"])
], CarrentalStateModule.prototype, "deleteSelectedCarrental", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_carrental_actions__WEBPACK_IMPORTED_MODULE_2__["SetSearchCriteriaData"])
], CarrentalStateModule.prototype, "setSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_carrental_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSearchCriteriaData"])
], CarrentalStateModule.prototype, "deleteSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], CarrentalStateModule, "getCarrentalData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], CarrentalStateModule, "getSelectedCarrental", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], CarrentalStateModule, "checkSelectedCarrental", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], CarrentalStateModule, "getSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], CarrentalStateModule, "checkSearchCriteria", null);
CarrentalStateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'carrentalStateModule',
        defaults: {
            selectedCarrental: null,
            searchCriteria: null
        }
    })
], CarrentalStateModule);



/***/ }),

/***/ "RgPU":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/page-not-found/page-not-found.component.ts ***!
  \************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() {
        document.body.style.backgroundSize = "100% 70px";
    }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 9, vars: 0, consts: [[1, "alert", "text-center", "mt-48", "pt-20"], [1, "alert-icon"], [1, "material-icons", "text-warning", "icon-9x"], [1, "alert-text", "h3"], [1, "h5", "text-muted"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page Not Found! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please go back and try again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/tenant/tenant */ "lWHP");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









class AppComponent {
    constructor(titleService, sanitizer, httpClient) {
        this.titleService = titleService;
        this.sanitizer = sanitizer;
        this.httpClient = httpClient;
        this.titleService.setTitle(Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__["getTitle"])());
        this.favIcon = document.querySelector('#favIcon');
        this.favIcon.href = Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__["getLogo"])(false, true);
        let tenantTheme = Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__["getTenantTheme"])();
        const head = document.getElementsByTagName('head')[0];
        const style = document.createElement('link');
        style.id = 'client-theme';
        style.rel = 'stylesheet';
        style.type = 'text/css';
        // style.href = 'assets/css/tenant/' + tenantTheme + ".css";
        console.log(style.href);
        this.getFolder(tenantTheme + ".css").subscribe((data) => {
            style.href = data;
            // console.log("data"+data);
            head.appendChild(style);
        });
        // style.href = 'http://localhost:4200/assets/css/tenant/linkrez.css';
        // const href = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:4200/assets/css/tenant/linkrez.css'); //Not Working 
    }
    getFolder(fileName) {
        const filePath = `assets/css/tenant/${fileName}`;
        return this.httpClient
            .get(`${filePath}`, { observe: 'response', responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            // console.log('file name exists');
            return filePath;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            // console.log('default');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(`assets/css/tenant/default.css`);
        }));
    }
    ngAfterViewInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "TSMZ":
/*!****************************************************!*\
  !*** ./src/app/shared/directives/var.directive.ts ***!
  \****************************************************/
/*! exports provided: VarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VarDirective", function() { return VarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class VarDirective {
    constructor(vcRef, templateRef) {
        this.vcRef = vcRef;
        this.templateRef = templateRef;
        this.context = {};
    }
    set ngVar(context) {
        this.context.$implicit = this.context.ngVar = context;
        this.updateView();
    }
    updateView() {
        this.vcRef.clear();
        this.vcRef.createEmbeddedView(this.templateRef, this.context);
    }
}
VarDirective.ɵfac = function VarDirective_Factory(t) { return new (t || VarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
VarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VarDirective, selectors: [["", "ngVar", ""]], inputs: { ngVar: "ngVar" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngVar]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { ngVar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "UcMP":
/*!*******************************************************!*\
  !*** ./src/app/shared/tenant/configuration/travel.ts ***!
  \*******************************************************/
/*! exports provided: travel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travel", function() { return travel; });
const travel = {
    "env": "stg",
    "tenant": "travel",
    "logo": "linkrez.svg",
    "whiteLogo": "linkrezWhite.svg",
    "favIcon": "linkrezFavIcon.ico",
    "title": "Linkrez",
    "theme": "travel",
    "loginLogos": [],
    "authorizedModules": ["Airlines", "Hotels", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "modulesOrder": ["Airlines", "Hotels", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 25,
            "batchSize": 10
        }
    }
};


/***/ }),

/***/ "Ukku":
/*!*********************************************************!*\
  !*** ./src/app/shared/tenant/configuration/golfopen.ts ***!
  \*********************************************************/
/*! exports provided: golfopen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "golfopen", function() { return golfopen; });
const golfopen = {
    "env": "stg",
    "tenant": "golfopen",
    "logo": "openGolfTransparent.png",
    "whiteLogo": "openGolfTransparent.png",
    "favIcon": "openGolfFavIcon.png",
    "title": "Open Golf",
    "theme": "golfopen",
    "loginLogos": [],
    "authorizedModules": ["Airlines", "Hotels", "CarRental", "Golf"],
    "modulesOrder": ["Hotels", "Airlines", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 25,
            "batchSize": 10
        }
    }
};


/***/ }),

/***/ "V5Qo":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/access-denied/access-denied.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AccessDeniedComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccessDeniedComponent.ɵfac = function AccessDeniedComponent_Factory(t) { return new (t || AccessDeniedComponent)(); };
AccessDeniedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessDeniedComponent, selectors: [["app-access-denied"]], decls: 3, vars: 0, consts: [[1, "kt-container", "header--fixed"]], template: function AccessDeniedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Access Denied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header--fixed[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 50px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWNjZXNzLWRlbmllZC9hY2Nlc3MtZGVuaWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztFQUNYIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYWNjZXNzLWRlbmllZC9hY2Nlc3MtZGVuaWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLS1maXhlZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessDeniedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-access-denied',
                templateUrl: './access-denied.component.html',
                styleUrls: ['./access-denied.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VJzw":
/*!**********************************!*\
  !*** ./src/app/shared/config.ts ***!
  \**********************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
    tokenName: 'LinkrezToken',
    airlinesTokenName: 'AirlinesLinkrezToken',
    hotelsTokenName: 'HotelsLinkrezToken',
    carRentalTokenName: 'CarRentalLinkrezToken',
    golfTokenName: 'GolfLinkrezToken',
    spaTokenName: 'SpaLinkrezToken',
    railTokenName: 'RailLinkrezToken',
    cruiseTokenName: 'CruiseLinkrezToken',
    transportationTokenName: 'TransportationLinkrezToken',
    sessionexpiration: 31536000,
    hotelSessionexpiration: 60,
    encryptionKey: 'uI5r8uYpQ1c8x9swh02/TkgKzOQcmffkENWgp8m73m7VFvrXi0Ol9FHl7IhaKxB7c3s2iBN1pRh2eR/J+Zv3nZme8OcMIh9xsZwjkvaI4J3gdACEghqj88vsDAJdVA3LW38DbwoZF56XLL+6gQhhTyI/30+k6hKDifC65W5mrJHBfLSVsM3gE1jO34o=',
    objectRouting: {
        Flights: {
            name: 'Flights',
            URLLink: 'Airlines',
            class: 'fas fa-plane-departure pr-1 pt-1'
        },
        Hotels: {
            name: 'Hotels',
            URLLink: 'Hotels',
            class: 'fas fa-hotel pr-1 pt-1'
        },
        CarRental: {
            name: 'Car Rental',
            URLLink: 'CarRental',
            class: 'fas fa-car pr-1 pt-1 icon-lg'
        },
        Golf: {
            name: 'Golf',
            URLLink: 'Golf',
            class: 'material-icons pr-1 icon-xl',
            icon: 'golf_course'
        },
        Spa: {
            name: 'Spa',
            URLLink: 'Spa',
            class: 'fas fa-spa pr-1 pt-1 icon-lg'
        },
        Rail: {
            name: 'Rail',
            URLLink: 'Rail',
            class: 'fas fa-train pr-1 pt-1 icon-lg'
        },
        Cruise: {
            name: 'Cruise',
            URLLink: 'Cruise',
            class: 'fas fa-ship pr-1 pt-1 icon-lg'
        },
        Transportation: {
            name: 'Transportation',
            URLLink: 'Transportation',
            class: 'fas fa-bus pr-1 pt-1 icon-lg',
            hidden: true
        }
    }
};


/***/ }),

/***/ "VYTO":
/*!***************************************************!*\
  !*** ./src/app/header-interceptor.interceptor.ts ***!
  \***************************************************/
/*! exports provided: HeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderInterceptor", function() { return HeaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/tenant/tenant */ "lWHP");
/* harmony import */ var _views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/pages/auth/login/login.service */ "0Xdg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class HeaderInterceptor {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    intercept(request, next) {
        if (request.url.indexOf('v1/auth') === -1 && request.url.indexOf(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].airlinesApiEndpointNET) != -1) {
            const userinfo = this.loginService.getUserSession();
            // const appendedObj = {
            //   user: userinfo.userCode
            // };
            // const reqBody: any = request.body;
            const authReq = request.clone({
                headers: request.headers
                    .set('Authorization', 'Bearer ' + userinfo.token)
                    .set('content-type', 'application/json'),
            });
            return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(x => this.handleAuthError(x)));
        }
        else if (request.url.indexOf('authenticate') === -1 && request.url.indexOf(Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_4__["getHotelsAPI"])()) != -1) {
            const userinfo = this.loginService.getUserSession('hotelsTokenName');
            // const appendedObj = {
            //   user: userinfo.userCode
            // };
            // const reqBody: any = request.body;
            const authReq = request.clone({
                headers: request.headers
                    .set('Authorization', 'Bearer ' + userinfo.jwt)
                    .set('content-type', 'application/json'),
            });
            return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(x => this.handleAuthError(x)));
        }
        else {
            return next.handle(request);
        }
    }
    handleAuthError(err) {
        //handle your auth error or rethrow
        if (err.status === 401 || err.status === 403) {
            //navigate /delete cookies or whatever
            alert('Unauthorized Access');
            this.router.navigateByUrl("/login");
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(err.message); // or EMPTY may be appropriate here
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
    }
}
HeaderInterceptor.ɵfac = function HeaderInterceptor_Factory(t) { return new (t || HeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
HeaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderInterceptor, factory: HeaderInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "W2rJ":
/*!****************************************!*\
  !*** ./src/app/store/spa/spa.state.ts ***!
  \****************************************/
/*! exports provided: SpaStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaStateModule", function() { return SpaStateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _spa_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spa.actions */ "faEI");



let SpaStateModule = class SpaStateModule {
    static getSpaData({ getState }) {
        return getState();
    }
    setSpaData({ setState, getState }, { payload }) {
        const state = getState();
        setState(Object.assign(Object.assign({}, state), payload));
    }
    //selectedSpa
    static getSelectedSpa(state) {
        return state.selectedSpa;
    }
    static checkSelectedSpa(state) {
        return state.selectedSpa == null ? false : true;
    }
    setSelectedSpa({ patchState }, { payload }) {
        patchState({ selectedSpa: payload });
    }
    deleteSelectedSpa({ patchState }) {
        patchState({ selectedSpa: null });
    }
    //searchCriteria
    static getSearchCriteria(state) {
        return state.searchCriteria;
    }
    static checkSearchCriteria(state) {
        return state.searchCriteria == null ? false : true;
    }
    setSearchCriteria({ patchState }, { payload }) {
        patchState({ searchCriteria: payload });
    }
    deleteSearchCriteria({ patchState }) {
        patchState({ searchCriteria: null });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_spa_actions__WEBPACK_IMPORTED_MODULE_2__["SetSpaData"])
], SpaStateModule.prototype, "setSpaData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_spa_actions__WEBPACK_IMPORTED_MODULE_2__["SetSelectedSpaData"])
], SpaStateModule.prototype, "setSelectedSpa", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_spa_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSelectedSpaData"])
], SpaStateModule.prototype, "deleteSelectedSpa", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_spa_actions__WEBPACK_IMPORTED_MODULE_2__["SetSearchCriteriaData"])
], SpaStateModule.prototype, "setSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_spa_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSearchCriteriaData"])
], SpaStateModule.prototype, "deleteSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], SpaStateModule, "getSpaData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], SpaStateModule, "getSelectedSpa", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], SpaStateModule, "checkSelectedSpa", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], SpaStateModule, "getSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], SpaStateModule, "checkSearchCriteria", null);
SpaStateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'spaStateModule',
        defaults: {
            selectedSpa: null,
            searchCriteria: null
        }
    })
], SpaStateModule);



/***/ }),

/***/ "WJVJ":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/datepicker-range/datepicker-range.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DatepickerRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerRangeComponent", function() { return DatepickerRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");






const _c0 = ["datepicker"];
function DatepickerRangeComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_0_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.clickChange("start"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r2.searchFormGroup.value.start, "dd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx_r2.searchFormGroup.value.start, "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 9, ctx_r2.searchFormGroup.value.start, "yyyy"), " ");
} }
function DatepickerRangeComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_0_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.clickChange("start"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r3.searchFormGroup.value.start, "dd"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, ctx_r3.searchFormGroup.value.start, "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, ctx_r3.searchFormGroup.value.start, "yyyy"), " ");
} }
function DatepickerRangeComponent_div_0_div_7_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DatepickerRangeComponent_div_0_div_7_ng_template_5_Template_span_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const date_r18 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.hoveredDate = date_r18; })("mouseleave", function DatepickerRangeComponent_div_0_div_7_ng_template_5_Template_span_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.hoveredDate = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r18 = ctx.$implicit;
    const focused_r19 = ctx.focused;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", focused_r19)("range", ctx_r16.isRange(date_r18))("faded", ctx_r16.isHovered(date_r18) || ctx_r16.isInside(date_r18));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r18.day, " ");
} }
function DatepickerRangeComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function DatepickerRangeComponent_div_0_div_7_Template_input_dateSelect_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onDateSelection($event, _r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatepickerRangeComponent_div_0_div_7_ng_template_5_Template, 2, 7, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DatepickerRangeComponent_div_0_div_7_Template_input_input_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.fromDate = ctx_r25.validateInput(ctx_r25.fromDate, _r17.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "outside")("displayMonths", 2)("dayTemplate", _r15)("minDate", ctx_r4.minDate)("startDate", ctx_r4.fromDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.formatter.format(ctx_r4.fromDate));
} }
function DatepickerRangeComponent_div_0_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.name[0], " is ");
} }
function DatepickerRangeComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_0_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.clickChange("end"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r6.searchFormGroup.value.end, "dd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx_r6.searchFormGroup.value.end, "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 9, ctx_r6.searchFormGroup.value.end, "yyyy"), " ");
} }
function DatepickerRangeComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_0_div_14_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.clickChange("end"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r7.searchFormGroup.value.end, "dd"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, ctx_r7.searchFormGroup.value.end, "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, ctx_r7.searchFormGroup.value.end, "yyyy"), " ");
} }
function DatepickerRangeComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DatepickerRangeComponent_div_0_div_15_Template_input_input_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.toDate = ctx_r31.validateInput(ctx_r31.toDate, _r30.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r8.formatter.format(ctx_r8.toDate));
} }
function DatepickerRangeComponent_div_0_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.name[1], " is ");
} }
function DatepickerRangeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.clickChange("start"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.clickChange("start"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatepickerRangeComponent_div_0_div_5_Template, 7, 12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatepickerRangeComponent_div_0_div_6_Template, 5, 12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DatepickerRangeComponent_div_0_div_7_Template, 11, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DatepickerRangeComponent_div_0_mat_error_8_Template, 4, 1, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_0_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.clickChange("end"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DatepickerRangeComponent_div_0_div_13_Template, 7, 12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DatepickerRangeComponent_div_0_div_14_Template, 5, 12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DatepickerRangeComponent_div_0_div_15_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DatepickerRangeComponent_div_0_mat_error_16_Template, 4, 1, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.name[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.click.start && !ctx_r0.isSearchPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.click.start && ctx_r0.isSearchPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.click.start);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.searchFormGroup.get("start").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.name[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.click.end && !ctx_r0.isSearchPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.click.end && ctx_r0.isSearchPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.click.end);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitted && ctx_r0.searchFormGroup.get("end").hasError("required"));
} }
function DatepickerRangeComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_1_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.clickChange("start", false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r37.searchFormGroup.value.start, "dd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx_r37.searchFormGroup.value.start, "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 9, ctx_r37.searchFormGroup.value.start, "yyyy"), " ");
} }
function DatepickerRangeComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_1_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.clickChange("start", false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r38.searchFormGroup.value.start, "dd"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, ctx_r38.searchFormGroup.value.start, "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, ctx_r38.searchFormGroup.value.start, "yyyy"), " ");
} }
function DatepickerRangeComponent_div_1_div_7_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DatepickerRangeComponent_div_1_div_7_ng_template_5_Template_span_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const date_r53 = ctx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r55.hoveredDate = date_r53; })("mouseleave", function DatepickerRangeComponent_div_1_div_7_ng_template_5_Template_span_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r57.hoveredDate = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r53 = ctx.$implicit;
    const focused_r54 = ctx.focused;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", focused_r54)("range", ctx_r51.isRange(date_r53))("faded", ctx_r51.isHovered(date_r53) || ctx_r51.isInside(date_r53));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r53.day, " ");
} }
function DatepickerRangeComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function DatepickerRangeComponent_div_1_div_7_Template_input_dateSelect_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.onDateSelection($event, _r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatepickerRangeComponent_div_1_div_7_ng_template_5_Template, 2, 7, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DatepickerRangeComponent_div_1_div_7_Template_input_input_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r60.fromDate = ctx_r60.validateInput(ctx_r60.fromDate, _r52.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "outside")("displayMonths", 2)("dayTemplate", _r50)("minDate", ctx_r39.minDate)("startDate", ctx_r39.fromDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r39.formatter.format(ctx_r39.fromDate));
} }
function DatepickerRangeComponent_div_1_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r40.name[0], " is ");
} }
function DatepickerRangeComponent_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_1_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.clickChange("end", false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r41.searchFormGroup.value.end, "dd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx_r41.searchFormGroup.value.end, "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 9, ctx_r41.searchFormGroup.value.end, "yyyy"), " ");
} }
function DatepickerRangeComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_1_div_14_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.clickChange("end", false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r42.searchFormGroup.value.end, "dd"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, ctx_r42.searchFormGroup.value.end, "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, ctx_r42.searchFormGroup.value.end, "yyyy"), " ");
} }
function DatepickerRangeComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DatepickerRangeComponent_div_1_div_15_Template_input_input_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r66.toDate = ctx_r66.validateInput(ctx_r66.toDate, _r65.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r43.formatter.format(ctx_r43.toDate));
} }
function DatepickerRangeComponent_div_1_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r44.name[1], " is ");
} }
function DatepickerRangeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.clickChange("start", false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.clickChange("start", false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatepickerRangeComponent_div_1_div_5_Template, 7, 12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatepickerRangeComponent_div_1_div_6_Template, 5, 12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DatepickerRangeComponent_div_1_div_7_Template, 11, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DatepickerRangeComponent_div_1_mat_error_8_Template, 4, 1, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerRangeComponent_div_1_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.clickChange("end", false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DatepickerRangeComponent_div_1_div_13_Template, 7, 12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DatepickerRangeComponent_div_1_div_14_Template, 5, 12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DatepickerRangeComponent_div_1_div_15_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DatepickerRangeComponent_div_1_mat_error_16_Template, 4, 1, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.name[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.start && !ctx_r1.isSearchPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.start && ctx_r1.isSearchPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.click.start);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.get("start").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.name[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.end && !ctx_r1.isSearchPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.end && ctx_r1.isSearchPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.click.end);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.get("end").hasError("required"));
} }
class DatepickerRangeComponent {
    constructor(calendar, renderer, formatter) {
        this.calendar = calendar;
        this.renderer = renderer;
        this.formatter = formatter;
        this.excludedIds = ["dFlex", "startDate", "startLabel", "startValue", "startDateInput", "endDate", "endLabel", "endValue", "endDateInput"];
        this.excludedClasses = ["fa-calendar-alt", "custom-select", "ngb-dp"];
        this.hoveredDate = null;
        this.DELIMITER = '-';
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 1);
        this.minDate = calendar.getToday();
    }
    mouseEvent(event) {
        if (event.target.offsetParent.tagName !== 'NGB-DATEPICKER') {
            if (this.inputDatepicker != null) {
                if (this.searchFormGroup.value.end == '') {
                    let json = this.searchFormGroup.value;
                    json.end = this.getNextDate(json.start);
                    this.toDate = this.calendar.getNext(this.fromDate, 'd', 1);
                    this.searchFormGroup.patchValue(json);
                }
                this.close();
                this.startDateChange(null);
                this.endDateChange(null);
            }
        }
    }
    keyEvent(event) {
        if (event.key === "Escape") {
            if (this.inputDatepicker != null) {
                if (this.searchFormGroup.value.end == '') {
                    let json = this.searchFormGroup.value;
                    json.end = this.getNextDate(json.start);
                    this.toDate = this.calendar.getNext(this.fromDate, 'd', 1);
                    this.searchFormGroup.patchValue(json);
                }
                this.close();
                this.startDateChange(null);
                this.endDateChange(null);
            }
        }
    }
    ngOnInit() {
        this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
        let fromDate = this.fromModel(this.searchFormGroup.value.start);
        this.fromDate = fromDate == null ? this.calendar.getToday() : fromDate;
        let endDate = this.fromModel(this.searchFormGroup.value.end);
        this.toDate = endDate == null ? this.calendar.getNext(this.calendar.getToday(), 'd', 1) : endDate;
    }
    ngOnDestroy() {
        this.docClickSubscription();
    }
    onDocumentClick(event) {
        //console.log(event.target.id);
        //console.log(event.target.className);
        if (event.target.className.indexOf("custom-day") != -1) {
            // console.log("mat-calendar clicks");
            if (this.fromDate && this.toDate) {
                this.startDateChange(null);
                this.endDateChange(null);
            }
        }
        else if (event.target.className.indexOf("cdk-overlay-backdrop") != -1) {
            // console.log("overlay clicks");
            this.startDateChange(null);
            this.endDateChange(null);
        }
        else {
            if (!this.click.start || !this.click.end) {
                if (this.excludedIds.indexOf(event.target.id) == -1 && !this.isExcludedClass(event.target.className)) {
                    this.changeEndValue();
                    this.startDateChange(null);
                    this.endDateChange(null);
                }
            }
        }
    }
    detectClickChanges() {
        let isChanged = false;
        for (let key in this.click) {
            if (key != 'start' && key != 'end') {
                isChanged = this.click[key] ? false : true;
                if (isChanged) {
                    break;
                }
            }
        }
        return isChanged;
    }
    changeEndValue() {
        if (this.searchFormGroup.value.end == '' && this.searchFormGroup.value.start != '') {
            let json = this.searchFormGroup.value;
            json.end = this.getNextDate(json.start);
            this.toDate = this.calendar.getNext(this.fromDate, 'd', 1);
            this.searchFormGroup.patchValue(json);
        }
    }
    isExcludedClass(className) {
        let isExcluded = false;
        for (let excldClass of this.excludedClasses) {
            isExcluded = className.indexOf(excldClass) != -1;
            if (isExcluded) {
                break;
            }
        }
        return isExcluded;
    }
    getNextDate(date) {
        return date ? new Date(date.getTime() + 1000 * 60 * 60 * 24) : null;
    }
    toggle() {
        this.inputDatepicker.toggle();
    }
    close() {
        this.inputDatepicker.close();
    }
    open() {
        let self = this;
        setTimeout(() => {
            if (self.inputDatepicker != null) {
                self.inputDatepicker.open();
            }
        }, 50);
    }
    onDateSelection(date) {
        let json = this.searchFormGroup.value;
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
            json.start = this.toModel(date);
        }
        else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
            this.toDate = date;
            json.end = this.toModel(date);
            this.changeView();
        }
        else {
            this.toDate = null;
            this.fromDate = date;
            json.end = '';
            json.start = this.toModel(date);
        }
        this.searchFormGroup.patchValue(json);
    }
    changeView() {
        this.click.start = true;
        this.click.end = true;
        this.close();
    }
    fromModel(date) {
        date = typeof (date) == "object" ? date : new Date(date);
        return date ? new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](date.getFullYear(), date.getMonth() + 1, date.getDate()) : null;
    }
    toModel(date) {
        return date ? new Date(date.year, date.month - 1, date.day, 0, 0, 0) : null;
    }
    startDateChange(type) {
        if (!this.searchFormGroup.get('start').hasError('required')) {
            this.click.start = true;
        }
    }
    endDateChange(type) {
        if (!this.searchFormGroup.get('end').hasError('required')) {
            this.click.end = true;
        }
    }
    clickChange(objType, isOpen = true) {
        if (isOpen) {
            // console.log('clickChange');
            if (this.click.start && this.click.end) {
                this.click.start = false;
                this.click.end = false;
                this.open();
            }
        }
    }
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
    }
    validateInput(currentValue, input) {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed)) ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed) : currentValue;
    }
    format(date) {
        console.log(new Date(date.year, date.month - 1, date.day));
        return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
    }
}
DatepickerRangeComponent.ɵfac = function DatepickerRangeComponent_Factory(t) { return new (t || DatepickerRangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"])); };
DatepickerRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatepickerRangeComponent, selectors: [["datepicker-range"]], viewQuery: function DatepickerRangeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputDatepicker = _t.first);
    } }, hostBindings: function DatepickerRangeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function DatepickerRangeComponent_mousedown_HostBindingHandler($event) { return ctx.mouseEvent($event); })("keyup", function DatepickerRangeComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { searchFormGroup: "searchFormGroup", click: "click", isSubmitted: "isSubmitted", isSearchPage: "isSearchPage", name: "name" }, decls: 2, vars: 2, consts: [["id", "dFlex", "class", "d-flex", 3, "click", 4, "ngIf"], ["id", "dFlex", 1, "d-flex", 3, "click"], ["id", "startDate", 1, "searchContent", "w-50", 3, "click"], ["id", "startLabel", 1, "search_lbl", "text-dark-50", "pb-2", "from"], [1, "far", "fa-calendar-alt", "text-primary"], ["id", "startValue", "class", "search_inputField h1", 3, "click", 4, "ngIf"], ["id", "startValue", "class", "search_inputField h4", 3, "click", 4, "ngIf"], ["id", "startDateInput", "class", "lessMlr-1", 4, "ngIf"], [4, "ngIf"], ["id", "endDate", 1, "searchContent", "w-50", 3, "click"], ["id", "endLabel", 1, "search_lbl", "text-dark-50", "pb-2"], ["id", "endValue", "class", "search_inputField h1", 3, "click", 4, "ngIf"], ["id", "endValue", "class", "search_inputField h4", 3, "click", 4, "ngIf"], ["id", "endDateInput", "class", "lessMlr-1", 4, "ngIf"], ["id", "startValue", 1, "search_inputField", "h1", 3, "click"], ["id", "startValue", 1, "search_inputField", "display6"], ["id", "startValue", 1, "search_inputField", "h4", 3, "click"], ["id", "startDateInput", 1, "lessMlr-1"], [1, "form-group", "hidden"], [1, "input-group"], ["name", "datepicker", "ngbDatepicker", "", "container", "'body'", "outsideDays", "hidden", "tabindex", "-1", "readonly", "", 1, "form-control", "position-absolute", 3, "autoClose", "displayMonths", "dayTemplate", "minDate", "startDate", "dateSelect"], ["datepicker", "ngbDatepicker"], ["t", ""], [1, "form-group"], ["placeholder", "yyyy-mm-dd", "name", "dpFromDate", 1, "form-control", 3, "value", "input"], ["dpFromDate", ""], [1, "custom-day", 3, "mouseenter", "mouseleave"], ["id", "endValue", 1, "search_inputField", "h1", 3, "click"], ["id", "endValue", 1, "search_inputField", "display6"], ["id", "endValue", 1, "search_inputField", "h4", 3, "click"], ["id", "endDateInput", 1, "lessMlr-1"], ["placeholder", "yyyy-mm-dd", "name", "dpToDate", 1, "form-control", 3, "value", "input"], ["dpToDate", ""], [1, "search_inputField", "display6"]], template: function DatepickerRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatepickerRangeComponent_div_0_Template, 17, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatepickerRangeComponent_div_1_Template, 17, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.click.start && ctx.click.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.click.start && !ctx.click.end);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".form-group.hidden[_ngcontent-%COMP%] {\n    width: 0;\n    margin: 0;\n    border: none;\n    padding: 0;\n  }\n  .custom-day[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0.185rem 0.25rem;\n    display: inline-block;\n    height: 2rem;\n    width: 2rem;\n  }\n  .custom-day.focused[_ngcontent-%COMP%] {\n    background-color: #e6e6e6;\n  }\n  .custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n    background-color: rgb(2, 117, 216);\n    color: white;\n  }\n  .custom-day.faded[_ngcontent-%COMP%] {\n    background-color: rgba(2, 117, 216, 0.5);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0ZXBpY2tlci1yYW5nZS9kYXRlcGlja2VyLXJhbmdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0VBQ1o7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLFlBQVk7RUFDZDtFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0ZXBpY2tlci1yYW5nZS9kYXRlcGlja2VyLXJhbmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cC5oaWRkZW4ge1xuICAgIHdpZHRoOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuY3VzdG9tLWRheSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgfVxuICAuY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICB9XG4gIC5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmN1c3RvbS1kYXkuZmFkZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatepickerRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datepicker-range',
                templateUrl: './datepicker-range.component.html',
                styleUrls: ['./datepicker-range.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"] }]; }, { searchFormGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSubmitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSearchPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputDatepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['datepicker', { static: false }]
        }], mouseEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "WN5f":
/*!*************************************************!*\
  !*** ./src/app/shared/dialog/dialog.service.ts ***!
  \*************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
class DialogService {
    register(dialog, title, modalBody, ok, cancel) {
        this.registeredDialog = dialog;
        this.registeredDialog.title = title || "Modal title";
        this.registeredDialog.modalBody = modalBody || "Modal body text goes here.";
        this.registeredDialog.ok = ok || "OK";
        this.registeredDialog.cancel = cancel || "cancel";
    }
    show() {
        return new Promise((resolve, reject) => {
            this.registeredDialog.show();
            this.registeredDialog.onOk.subscribe(() => {
                this.registeredDialog.hide();
                resolve();
            });
            this.registeredDialog.onCancel.subscribe(() => {
                this.registeredDialog.hide();
                reject();
            });
        });
    }
}


/***/ }),

/***/ "XFqO":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/unauthorized-page/unauthorized-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: UnauthorizedPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedPageComponent", function() { return UnauthorizedPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UnauthorizedPageComponent {
    constructor() {
        document.body.style.backgroundSize = "100% 70px";
    }
    ngOnInit() {
    }
}
UnauthorizedPageComponent.ɵfac = function UnauthorizedPageComponent_Factory(t) { return new (t || UnauthorizedPageComponent)(); };
UnauthorizedPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnauthorizedPageComponent, selectors: [["app-unauthorized-page"]], decls: 9, vars: 0, consts: [[1, "alert", "text-center", "mt-48", "pt-10"], [1, "alert-icon"], [1, "material-icons", "text-danger", "icon-9x"], [1, "alert-text", "h2"], [1, "h5", "text-muted"]], template: function UnauthorizedPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "notification_important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "unauthorized Access. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please contact Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3VuYXV0aG9yaXplZC1wYWdlL3VuYXV0aG9yaXplZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnauthorizedPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unauthorized-page',
                templateUrl: './unauthorized-page.component.html',
                styleUrls: ['./unauthorized-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XsqF":
/*!****************************************************************!*\
  !*** ./src/app/store/transportation/transportation.actions.ts ***!
  \****************************************************************/
/*! exports provided: SetTransportationData, SetSelectedTransportationData, DeleteSelectedTransportationData, SetSearchCriteriaData, DeleteSearchCriteriaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTransportationData", function() { return SetTransportationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedTransportationData", function() { return SetSelectedTransportationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSelectedTransportationData", function() { return DeleteSelectedTransportationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearchCriteriaData", function() { return SetSearchCriteriaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSearchCriteriaData", function() { return DeleteSearchCriteriaData; });
class SetTransportationData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetTransportationData.type = '[Transportation] Transportation data';
class SetSelectedTransportationData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSelectedTransportationData.type = '[Transportation] Set SelectedTransportation data';
class DeleteSelectedTransportationData {
    constructor() { }
}
DeleteSelectedTransportationData.type = '[Transportation] Delete SelectedTransportation data';
class SetSearchCriteriaData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSearchCriteriaData.type = '[Transportation] Set SearchCriteria data';
class DeleteSearchCriteriaData {
    constructor() { }
}
DeleteSearchCriteriaData.type = '[Transportation] Delete SearchCriteria data';


/***/ }),

/***/ "YYlJ":
/*!************************************************!*\
  !*** ./src/app/store/airline/airline.state.ts ***!
  \************************************************/
/*! exports provided: AirlineStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineStateModule", function() { return AirlineStateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _airline_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airline.actions */ "wJS7");



let AirlineStateModule = class AirlineStateModule {
    static getAirlineData({ getState }) {
        return getState();
    }
    setAirlineData({ setState, getState }, { payload }) {
        const state = getState();
        setState(Object.assign(Object.assign({}, state), payload));
    }
    //selectedAirline
    static getSelectedAirline(state) {
        return state.selectedAirline;
    }
    static checkSelectedAirline(state) {
        return state.selectedAirline == null ? false : true;
    }
    setSelectedAirline({ patchState }, { payload }) {
        patchState({ selectedAirline: payload });
    }
    deleteSelectedAirline({ patchState }) {
        patchState({ selectedAirline: null });
    }
    //searchCriteria
    static getSearchCriteria(state) {
        return state.searchCriteria;
    }
    static checkSearchCriteria(state) {
        return state.searchCriteria == null ? false : true;
    }
    setSearchCriteria({ patchState }, { payload }) {
        patchState({ searchCriteria: payload });
    }
    deleteSearchCriteria({ patchState }) {
        patchState({ searchCriteria: null });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_airline_actions__WEBPACK_IMPORTED_MODULE_2__["SetAirlineData"])
], AirlineStateModule.prototype, "setAirlineData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_airline_actions__WEBPACK_IMPORTED_MODULE_2__["SetSelectedAirlineData"])
], AirlineStateModule.prototype, "setSelectedAirline", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_airline_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSelectedAirlineData"])
], AirlineStateModule.prototype, "deleteSelectedAirline", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_airline_actions__WEBPACK_IMPORTED_MODULE_2__["SetSearchCriteriaData"])
], AirlineStateModule.prototype, "setSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_airline_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSearchCriteriaData"])
], AirlineStateModule.prototype, "deleteSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], AirlineStateModule, "getAirlineData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], AirlineStateModule, "getSelectedAirline", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], AirlineStateModule, "checkSelectedAirline", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], AirlineStateModule, "getSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], AirlineStateModule, "checkSearchCriteria", null);
AirlineStateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'airlineStateModule',
        defaults: {
            selectedAirline: null,
            searchCriteria: null
        }
    })
], AirlineStateModule);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _header_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-interceptor.interceptor */ "VYTO");
/* harmony import */ var _guard_authentication_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guard/authentication.guard */ "0lBK");
/* harmony import */ var _guard_authorization_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guard/authorization.guard */ "g/xL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/logger-plugin */ "/wON");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "xuHu");
/* harmony import */ var _store_store_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/store.config */ "d7eW");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _guard_authentication_guard__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuard"],
        _guard_authorization_guard__WEBPACK_IMPORTED_MODULE_9__["AuthorizationGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _header_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_7__["HeaderInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"].forRoot(),
            _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["NgxsModule"].forRoot(_store_store_config__WEBPACK_IMPORTED_MODULE_13__["STATES_MODULES"], _store_store_config__WEBPACK_IMPORTED_MODULE_13__["OPTIONS_CONFIG"]),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_12__["NgxsReduxDevtoolsPluginModule"].forRoot(_store_store_config__WEBPACK_IMPORTED_MODULE_13__["DEVTOOLS_REDUX_CONFIG"]),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_11__["NgxsLoggerPluginModule"].forRoot(_store_store_config__WEBPACK_IMPORTED_MODULE_13__["LOGGER_CONFIG"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["ɵj"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_12__["NgxsReduxDevtoolsPluginModule"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_11__["NgxsLoggerPluginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"].forRoot(),
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["NgxsModule"].forRoot(_store_store_config__WEBPACK_IMPORTED_MODULE_13__["STATES_MODULES"], _store_store_config__WEBPACK_IMPORTED_MODULE_13__["OPTIONS_CONFIG"]),
                    _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_12__["NgxsReduxDevtoolsPluginModule"].forRoot(_store_store_config__WEBPACK_IMPORTED_MODULE_13__["DEVTOOLS_REDUX_CONFIG"]),
                    _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_11__["NgxsLoggerPluginModule"].forRoot(_store_store_config__WEBPACK_IMPORTED_MODULE_13__["LOGGER_CONFIG"]),
                ],
                providers: [
                    _guard_authentication_guard__WEBPACK_IMPORTED_MODULE_8__["AuthenticationGuard"],
                    _guard_authorization_guard__WEBPACK_IMPORTED_MODULE_9__["AuthorizationGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _header_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_7__["HeaderInterceptor"],
                        multi: true
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zl5q":
/*!******************************************************!*\
  !*** ./src/app/shared/tenant/configuration/mykey.ts ***!
  \******************************************************/
/*! exports provided: mykey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mykey", function() { return mykey; });
const mykey = {
    "env": "stg",
    "tenant": "mykey",
    "logo": "myKeyLogo.png",
    "whiteLogo": "myKeyLogo.png",
    "favIcon": "myKeyFavIcon.ico",
    "title": "MyKey",
    "theme": "mykey",
    "loginLogos": [],
    "authorizedModules": ["Hotels"],
    "modulesOrder": ["Hotels", "Airlines", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 25,
            "batchSize": 10
        }
    }
};


/***/ }),

/***/ "b2g8":
/*!*********************************************************!*\
  !*** ./src/app/shared/tenant/configuration/military.ts ***!
  \*********************************************************/
/*! exports provided: military */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "military", function() { return military; });
const military = {
    "env": "dev",
    "tenant": "military",
    "logo": "militaryTravelers.png",
    "whiteLogo": "militaryTravelersWhite.png",
    "favIcon": "militaryTravelersFavIcon.ico",
    "title": "Military Travellers",
    "theme": "military",
    "loginLogos": [],
    "authorizedModules": ["Airlines", "Hotels", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "modulesOrder": ["Airlines", "Hotels", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 25,
            "batchSize": 20
        }
    }
};


/***/ }),

/***/ "bgaU":
/*!**********************************************!*\
  !*** ./src/app/store/cruise/cruise.state.ts ***!
  \**********************************************/
/*! exports provided: CruiseStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CruiseStateModule", function() { return CruiseStateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _cruise_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cruise.actions */ "MHJH");



let CruiseStateModule = class CruiseStateModule {
    static getCruiseData({ getState }) {
        return getState();
    }
    setCruiseData({ setState, getState }, { payload }) {
        const state = getState();
        setState(Object.assign(Object.assign({}, state), payload));
    }
    //selectedCruise
    static getSelectedCruise(state) {
        return state.selectedCruise;
    }
    static checkSelectedCruise(state) {
        return state.selectedCruise == null ? false : true;
    }
    setSelectedCruise({ patchState }, { payload }) {
        patchState({ selectedCruise: payload });
    }
    deleteSelectedCruise({ patchState }) {
        patchState({ selectedCruise: null });
    }
    //searchCriteria
    static getSearchCriteria(state) {
        return state.searchCriteria;
    }
    static checkSearchCriteria(state) {
        return state.searchCriteria == null ? false : true;
    }
    setSearchCriteria({ patchState }, { payload }) {
        patchState({ searchCriteria: payload });
    }
    deleteSearchCriteria({ patchState }) {
        patchState({ searchCriteria: null });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_cruise_actions__WEBPACK_IMPORTED_MODULE_2__["SetCruiseData"])
], CruiseStateModule.prototype, "setCruiseData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_cruise_actions__WEBPACK_IMPORTED_MODULE_2__["SetSelectedCruiseData"])
], CruiseStateModule.prototype, "setSelectedCruise", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_cruise_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSelectedCruiseData"])
], CruiseStateModule.prototype, "deleteSelectedCruise", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_cruise_actions__WEBPACK_IMPORTED_MODULE_2__["SetSearchCriteriaData"])
], CruiseStateModule.prototype, "setSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_cruise_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSearchCriteriaData"])
], CruiseStateModule.prototype, "deleteSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], CruiseStateModule, "getCruiseData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], CruiseStateModule, "getSelectedCruise", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], CruiseStateModule, "checkSelectedCruise", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], CruiseStateModule, "getSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], CruiseStateModule, "checkSearchCriteria", null);
CruiseStateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'cruiseStateModule',
        defaults: {
            selectedCruise: null,
            searchCriteria: null
        }
    })
], CruiseStateModule);



/***/ }),

/***/ "d/rN":
/*!***************************************************!*\
  !*** ./src/app/shared/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class DialogComponent {
    constructor(document) {
        this.document = document;
        this.onOk = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.title = "Modal title";
        this.modalBody = "Modal body text goes here.";
        this.ok = "OK";
        this.cancel = "cancel";
    }
    okClicked() {
        this.onOk.emit();
    }
    cancelClicked() {
        this.onCancel.emit();
    }
    show() {
        this.document.body.classList.add('modal-open');
        this.style = { 'display': 'block' };
        this.showBackdrop();
    }
    hide() {
        this.document.body.classList.remove('modal-open');
        this.style = { 'display': 'none' };
        this.hideBackdrop();
    }
    showBackdrop() {
        this.backdrop = this.document.createElement('div');
        this.backdrop.classList.add('modal-backdrop');
        this.backdrop.classList.add('show');
        this.document.body.appendChild(this.backdrop);
    }
    hideBackdrop() {
        this.backdrop.remove();
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 17, vars: 5, consts: [["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", 3, "ngStyle"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_6_listener() { return ctx.cancelClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_13_listener() { return ctx.okClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_15_listener() { return ctx.cancelClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.modalBody, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ok);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cancel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-dialog',
                templateUrl: './dialog.component.html'
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "d7eW":
/*!***************************************!*\
  !*** ./src/app/store/store.config.ts ***!
  \***************************************/
/*! exports provided: STATES_MODULES, OPTIONS_CONFIG, DEVTOOLS_REDUX_CONFIG, LOGGER_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_MODULES", function() { return STATES_MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS_CONFIG", function() { return OPTIONS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVTOOLS_REDUX_CONFIG", function() { return DEVTOOLS_REDUX_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGGER_CONFIG", function() { return LOGGER_CONFIG; });
/* harmony import */ var _airline_airline_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airline/airline.state */ "YYlJ");
/* harmony import */ var _hotel_hotel_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hotel/hotel.state */ "P4iX");
/* harmony import */ var _carrental_carrental_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrental/carrental.state */ "Ra1L");
/* harmony import */ var _cruise_cruise_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cruise/cruise.state */ "bgaU");
/* harmony import */ var _golf_golf_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./golf/golf.state */ "m7us");
/* harmony import */ var _rail_rail_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rail/rail.state */ "p2+c");
/* harmony import */ var _spa_spa_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spa/spa.state */ "W2rJ");
/* harmony import */ var _transportation_transportation_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transportation/transportation.state */ "/hi3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "AytR");









const STATES_MODULES = [_airline_airline_state__WEBPACK_IMPORTED_MODULE_0__["AirlineStateModule"], _hotel_hotel_state__WEBPACK_IMPORTED_MODULE_1__["HotelStateModule"], _carrental_carrental_state__WEBPACK_IMPORTED_MODULE_2__["CarrentalStateModule"], _cruise_cruise_state__WEBPACK_IMPORTED_MODULE_3__["CruiseStateModule"],
    _golf_golf_state__WEBPACK_IMPORTED_MODULE_4__["GolfStateModule"], _rail_rail_state__WEBPACK_IMPORTED_MODULE_5__["RailStateModule"], _spa_spa_state__WEBPACK_IMPORTED_MODULE_6__["SpaStateModule"], _transportation_transportation_state__WEBPACK_IMPORTED_MODULE_7__["TransportationStateModule"]];
const OPTIONS_CONFIG = {
    developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
};
const DEVTOOLS_REDUX_CONFIG = {
    disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
};
const LOGGER_CONFIG = {
    disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
};


/***/ }),

/***/ "faEI":
/*!******************************************!*\
  !*** ./src/app/store/spa/spa.actions.ts ***!
  \******************************************/
/*! exports provided: SetSpaData, SetSelectedSpaData, DeleteSelectedSpaData, SetSearchCriteriaData, DeleteSearchCriteriaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSpaData", function() { return SetSpaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedSpaData", function() { return SetSelectedSpaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSelectedSpaData", function() { return DeleteSelectedSpaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearchCriteriaData", function() { return SetSearchCriteriaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSearchCriteriaData", function() { return DeleteSearchCriteriaData; });
class SetSpaData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSpaData.type = '[Spa] Spa data';
class SetSelectedSpaData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSelectedSpaData.type = '[Spa] Set SelectedSpa data';
class DeleteSelectedSpaData {
    constructor() { }
}
DeleteSelectedSpaData.type = '[Spa] Delete SelectedSpa data';
class SetSearchCriteriaData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSearchCriteriaData.type = '[Spa] Set SearchCriteria data';
class DeleteSearchCriteriaData {
    constructor() { }
}
DeleteSearchCriteriaData.type = '[Spa] Delete SearchCriteria data';


/***/ }),

/***/ "g/xL":
/*!**********************************************!*\
  !*** ./src/app/guard/authorization.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthorizationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationGuard", function() { return AuthorizationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/tenant/tenant */ "lWHP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/pages/auth/login/login.service */ "0Xdg");





class AuthorizationGuard {
    constructor(myRoute, loginService) {
        this.myRoute = myRoute;
        this.loginService = loginService;
        this.totalModels = Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_1__["getTotalModels"])();
        this.totalConfigModels = Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_1__["getTotalConfigModels"])();
    }
    canActivate(next, state) {
        const slashSplit = state.url.split("/");
        const accessModels = Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_1__["getAuthorizedModules"])(); // ["Airlines", "Hotels", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"]
        if (slashSplit.length > 1) {
            const modelName = slashSplit[1];
            const result = accessModels.filter((model) => model === modelName);
            if (result.length > 0) {
                return true;
            }
            else if (modelName == "" || modelName == "/") {
                if (accessModels.length == 0) {
                    return this.myRoute.navigate(["login"]);
                }
                else {
                    return this.myRoute.navigate([accessModels[0]]);
                }
            }
            else if (this.totalConfigModels.includes(modelName)) {
                return this.myRoute.navigate(["unauthorized"]);
            }
            else {
                return true;
            }
        }
        return true;
    }
    canActivateOld(next, state) {
        const user = this.loginService.getUserSession();
        const slashSplit = state.url.split("/");
        if (slashSplit.length > 1) {
            const modelName = slashSplit[1];
            //console.log(modelName);
            let accessModels = [];
            for (const accessModel in user.accessModels) {
                accessModels.push(accessModel);
            }
            const result = accessModels.filter((model) => model === modelName);
            if (result.length > 0) {
                return true;
            }
            else if (this.myRoute.url == "/login" || this.myRoute.url == "/") {
                if (accessModels.length == 0) {
                    alert('Access Denied to All Objects');
                    // this.myRoute.navigate(["denied"]);
                    return false;
                }
                else {
                    alert(modelName + ' Access Denied');
                    // this.myRoute.navigate(["denied"]);
                    this.myRoute.navigate([accessModels[0]]);
                }
            }
            else {
                alert(modelName + ' Access Denied');
                // this.myRoute.navigate(["denied"]);
                return false;
            }
        }
        return true;
    }
}
AuthorizationGuard.ɵfac = function AuthorizationGuard_Factory(t) { return new (t || AuthorizationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
AuthorizationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizationGuard, factory: AuthorizationGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "gZV7":
/*!********************************************!*\
  !*** ./src/app/store/golf/golf.actions.ts ***!
  \********************************************/
/*! exports provided: SetGolfData, SetSelectedGolfData, DeleteSelectedGolfData, SetSearchCriteriaData, DeleteSearchCriteriaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetGolfData", function() { return SetGolfData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedGolfData", function() { return SetSelectedGolfData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSelectedGolfData", function() { return DeleteSelectedGolfData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearchCriteriaData", function() { return SetSearchCriteriaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSearchCriteriaData", function() { return DeleteSearchCriteriaData; });
class SetGolfData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetGolfData.type = '[Golf] Golf data';
class SetSelectedGolfData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSelectedGolfData.type = '[Golf] Set SelectedGolf data';
class DeleteSelectedGolfData {
    constructor() { }
}
DeleteSelectedGolfData.type = '[Golf] Delete SelectedGolf data';
class SetSearchCriteriaData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSearchCriteriaData.type = '[Golf] Set SearchCriteria data';
class DeleteSearchCriteriaData {
    constructor() { }
}
DeleteSearchCriteriaData.type = '[Golf] Delete SearchCriteria data';


/***/ }),

/***/ "j4ew":
/*!*******************************************************!*\
  !*** ./src/app/shared/tenant/configuration/catale.ts ***!
  \*******************************************************/
/*! exports provided: catale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catale", function() { return catale; });
const catale = {
    "env": "stg",
    "tenant": "catale",
    "logo": "cataleLogoLong.png",
    "whiteLogo": "cataleLogoLong.png",
    "favIcon": "cataleFavIcon.png",
    "title": "Catale",
    "theme": "catale",
    "loginLogos": [],
    "authorizedModules": ["Hotels"],
    "modulesOrder": ["Hotels", "Airlines", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 25,
            "batchSize": 10
        }
    }
};


/***/ }),

/***/ "jvKd":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/google-places.directive.ts ***!
  \**************************************************************/
/*! exports provided: GooglePlacesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlacesDirective", function() { return GooglePlacesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/// <reference types="@types/googlemaps" />
/// <reference types="@types/googlemaps" />


class GooglePlacesDirective {
    constructor(elRef) {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //elRef will get a reference to the element where
        //the directive is placed
        this.element = elRef.nativeElement;
    }
    getFormattedAddress(place) {
        //@params: place - Google Autocomplete place object
        //@returns: location_obj - An address object in human readable format
        let location_obj = {};
        for (let i in place.address_components) {
            let item = place.address_components[i];
            location_obj['formatted_address'] = place.formatted_address;
            if (item['types'].indexOf("locality") > -1) {
                location_obj['locality'] = item['long_name'];
            }
            else if (item['types'].indexOf("administrative_area_level_1") > -1) {
                location_obj['admin_area_l1'] = item['short_name'];
            }
            else if (item['types'].indexOf("street_number") > -1) {
                location_obj['street_number'] = item['short_name'];
            }
            else if (item['types'].indexOf("route") > -1) {
                location_obj['route'] = item['long_name'];
            }
            else if (item['types'].indexOf("country") > -1) {
                location_obj['country'] = item['short_name'];
            }
            else if (item['types'].indexOf("postal_code") > -1) {
                location_obj['postal_code'] = item['short_name'];
            }
        }
        return location_obj;
    }
    ngOnInit() {
        const autocomplete = new google.maps.places.Autocomplete(this.element, {
            types: ['(cities)']
        });
        //Event listener to monitor place changes in the input
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            //Emit the new address object for the updated place
            this.onSelect.emit(this.getFormattedAddress(autocomplete.getPlace()));
        });
    }
}
GooglePlacesDirective.ɵfac = function GooglePlacesDirective_Factory(t) { return new (t || GooglePlacesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
GooglePlacesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: GooglePlacesDirective, selectors: [["", "google-place", ""]], outputs: { onSelect: "onSelect" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GooglePlacesDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[google-place]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "kx4g":
/*!**********************************************!*\
  !*** ./src/app/store/hotel/hotel.actions.ts ***!
  \**********************************************/
/*! exports provided: SetHotelData, SetSelectedHotelData, DeleteSelectedHotelData, SetSearchCriteriaData, DeleteSearchCriteriaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetHotelData", function() { return SetHotelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedHotelData", function() { return SetSelectedHotelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSelectedHotelData", function() { return DeleteSelectedHotelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearchCriteriaData", function() { return SetSearchCriteriaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSearchCriteriaData", function() { return DeleteSearchCriteriaData; });
class SetHotelData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetHotelData.type = '[Hotel] Hotel data';
class SetSelectedHotelData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSelectedHotelData.type = '[Hotel] Set SelectedHotel data';
class DeleteSelectedHotelData {
    constructor() { }
}
DeleteSelectedHotelData.type = '[Hotel] Delete SelectedHotel data';
class SetSearchCriteriaData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSearchCriteriaData.type = '[Hotel] Set SearchCriteria data';
class DeleteSearchCriteriaData {
    constructor() { }
}
DeleteSearchCriteriaData.type = '[Hotel] Delete SearchCriteria data';


/***/ }),

/***/ "lWHP":
/*!*****************************************!*\
  !*** ./src/app/shared/tenant/tenant.ts ***!
  \*****************************************/
/*! exports provided: getTenantName, getTenant, getLogo, getTitle, getTenantLoginLogos, getTenantTheme, getTenantModule, getAuthorizedModules, getTotalModels, getTotalConfigModels, getEnvironment, getHotelsAPI, getAirAPI, getCarsAPI, getReservationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTenantName", function() { return getTenantName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTenant", function() { return getTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogo", function() { return getLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return getTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTenantLoginLogos", function() { return getTenantLoginLogos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTenantTheme", function() { return getTenantTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTenantModule", function() { return getTenantModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthorizedModules", function() { return getAuthorizedModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalModels", function() { return getTotalModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalConfigModels", function() { return getTotalConfigModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvironment", function() { return getEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotelsAPI", function() { return getHotelsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAirAPI", function() { return getAirAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCarsAPI", function() { return getCarsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReservationType", function() { return getReservationType; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "VJzw");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "xUj5");



function getTenantName() {
    const logo = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].tenants;
    for (const l of logo) {
        const urls = l.urls;
        for (const url of urls) {
            if (window.location.href.toLowerCase().indexOf('/' + url.toLowerCase()) !== -1) {
                if (_configuration__WEBPACK_IMPORTED_MODULE_2__["confirationClasses"][l.tenant] != null) {
                    return l.tenant;
                }
                else {
                    return "defaultTenant";
                }
            }
        }
    }
    return "defaultTenant";
}
function getTenant() {
    const tenantName = getTenantName();
    if (_configuration__WEBPACK_IMPORTED_MODULE_2__["confirationClasses"][tenantName] != null) {
        return _configuration__WEBPACK_IMPORTED_MODULE_2__["confirationClasses"][tenantName];
    }
    else {
        return _configuration__WEBPACK_IMPORTED_MODULE_2__["confirationClasses"].defaultTenant;
    }
}
function getLogo(isWhiteBackgroundLog = false, favIcon = false) {
    const tenantConfig = getTenant();
    if (tenantConfig != null) {
        if (favIcon) {
            return "assets/media/Logos/" + tenantConfig.favIcon;
        }
        else {
            return "assets/media/Logos/" + (isWhiteBackgroundLog ? tenantConfig.whiteLogo : tenantConfig.logo);
        }
    }
    if (favIcon) {
        return "assets/media/Logos/linkrezFavIcon.ico";
    }
    else {
        return "assets/media/Logos/" + (isWhiteBackgroundLog ? "linkrezWhite.svg" : "linkrez.svg");
    }
}
function getTitle() {
    const tenantConfig = getTenant();
    return tenantConfig.title || "Linkrez";
}
function getTenantLoginLogos() {
    const tenantConfig = getTenant();
    return tenantConfig.loginLogos || [];
}
function getTenantTheme() {
    const tenantConfig = getTenant();
    return tenantConfig.theme || "default";
}
function getTenantModule() {
    const tenantConfig = getTenant();
    return tenantConfig.module;
}
function getAuthorizedModules() {
    const tenantConfig = getTenant();
    return tenantConfig.authorizedModules;
}
function getTotalModels() {
    const tenantConfig = getTenant();
    return tenantConfig.modulesOrder;
}
function getTotalConfigModels() {
    let models = [];
    for (let objectRoutingObj in _config__WEBPACK_IMPORTED_MODULE_1__["config"].objectRouting) {
        models.push(_config__WEBPACK_IMPORTED_MODULE_1__["config"].objectRouting[objectRoutingObj].URLLink);
    }
    return models;
}
function getEnvironment() {
    return getTenant().env || 'stg';
}
function getHotelsAPI() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].hotelsApiEndpoint[getEnvironment()];
}
function getAirAPI() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].airApiEndpoint[getEnvironment()];
}
function getCarsAPI() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].carRentalApiEndpoint[getEnvironment()];
}
function getReservationType() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].hotelTarget[getEnvironment()];
}


/***/ }),

/***/ "m7us":
/*!******************************************!*\
  !*** ./src/app/store/golf/golf.state.ts ***!
  \******************************************/
/*! exports provided: GolfStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolfStateModule", function() { return GolfStateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _golf_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./golf.actions */ "gZV7");



let GolfStateModule = class GolfStateModule {
    static getGolfData({ getState }) {
        return getState();
    }
    setGolfData({ setState, getState }, { payload }) {
        const state = getState();
        setState(Object.assign(Object.assign({}, state), payload));
    }
    //selectedGolf
    static getSelectedGolf(state) {
        return state.selectedGolf;
    }
    static checkSelectedGolf(state) {
        return state.selectedGolf == null ? false : true;
    }
    setSelectedGolf({ patchState }, { payload }) {
        patchState({ selectedGolf: payload });
    }
    deleteSelectedGolf({ patchState }) {
        patchState({ selectedGolf: null });
    }
    //searchCriteria
    static getSearchCriteria(state) {
        return state.searchCriteria;
    }
    static checkSearchCriteria(state) {
        return state.searchCriteria == null ? false : true;
    }
    setSearchCriteria({ patchState }, { payload }) {
        patchState({ searchCriteria: payload });
    }
    deleteSearchCriteria({ patchState }) {
        patchState({ searchCriteria: null });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_golf_actions__WEBPACK_IMPORTED_MODULE_2__["SetGolfData"])
], GolfStateModule.prototype, "setGolfData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_golf_actions__WEBPACK_IMPORTED_MODULE_2__["SetSelectedGolfData"])
], GolfStateModule.prototype, "setSelectedGolf", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_golf_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSelectedGolfData"])
], GolfStateModule.prototype, "deleteSelectedGolf", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_golf_actions__WEBPACK_IMPORTED_MODULE_2__["SetSearchCriteriaData"])
], GolfStateModule.prototype, "setSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_golf_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSearchCriteriaData"])
], GolfStateModule.prototype, "deleteSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], GolfStateModule, "getGolfData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], GolfStateModule, "getSelectedGolf", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], GolfStateModule, "checkSelectedGolf", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], GolfStateModule, "getSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], GolfStateModule, "checkSearchCriteria", null);
GolfStateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'golfStateModule',
        defaults: {
            selectedGolf: null,
            searchCriteria: null
        }
    })
], GolfStateModule);



/***/ }),

/***/ "ms6O":
/*!************************************************************!*\
  !*** ./src/app/shared/tenant/configuration/simplenight.ts ***!
  \************************************************************/
/*! exports provided: simplenight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplenight", function() { return simplenight; });
const simplenight = {
    "env": "stg",
    "tenant": "simplenight",
    "logo": "simplenightWhite.svg",
    "whiteLogo": "simpleNightWhite.png",
    "favIcon": "simpleNightFavIcon.ico",
    "title": "Simple Night",
    "theme": "simplenight",
    "loginLogos": [],
    "authorizedModules": ["Airlines", "Hotels"],
    "modulesOrder": ["Hotels", "Airlines", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 10,
            "batchSize": 10
        }
    }
};


/***/ }),

/***/ "n2Ir":
/*!********************************************************!*\
  !*** ./src/app/views/theme/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/config */ "VJzw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/tenant/tenant */ "lWHP");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/auth/login/login.service */ "0Xdg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function HeaderComponent_ng_container_9_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.linkSelected == model_r2 ? "menu-item-open menu-item-here menu-item-open menu-item-here" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", "/" + ctx_r3.getObjectRouting(model_r2).URLLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.getObjectRouting(model_r2).class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getObjectRouting(model_r2).icon != null ? ctx_r3.getObjectRouting(model_r2).icon : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getObjectRouting(model_r2).name);
} }
function HeaderComponent_ng_container_9_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.linkSelected == model_r2 ? "menu-item-open menu-item-here menu-item-open menu-item-here" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.getObjectRouting(model_r2).class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getObjectRouting(model_r2).icon != null ? ctx_r4.getObjectRouting(model_r2).icon : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getObjectRouting(model_r2).name);
} }
function HeaderComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_9_li_1_Template, 7, 5, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_ng_container_9_li_2_Template, 7, 4, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const model_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.getObjectRouting(model_r2).hidden && ctx_r0.getObjectRouting(model_r2).name === "Hotels");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.getObjectRouting(model_r2).hidden && ctx_r0.getObjectRouting(model_r2).name !== "Hotels");
} }
class HeaderComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.objectRouting = _shared_config__WEBPACK_IMPORTED_MODULE_1__["config"].objectRouting;
        this.accessModels = [];
        this.totalModels = [];
        this.releaseDate = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].releaseDate;
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version;
        this.accessModels = Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__["getAuthorizedModules"])();
        this.totalModels = Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__["getTotalModels"])();
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                const urlSplitArr = event.url.split("/");
                if (urlSplitArr.length > 0) {
                    this.linkSelected = urlSplitArr[1] == "" ? this.objectRouting.Flights.URLLink : urlSplitArr[1];
                }
            }
        });
    }
    getObjectRouting(URLLink) {
        for (let objectRoutingObj in _shared_config__WEBPACK_IMPORTED_MODULE_1__["config"].objectRouting) {
            if (_shared_config__WEBPACK_IMPORTED_MODULE_1__["config"].objectRouting[objectRoutingObj].URLLink == URLLink) {
                return _shared_config__WEBPACK_IMPORTED_MODULE_1__["config"].objectRouting[objectRoutingObj];
            }
        }
    }
    ngOnInit() {
    }
    get getLogo() {
        return _shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__["getLogo"];
    }
    Logout() {
        this.loginService.deleteUserSession("hotelsTokenName");
        this.router.navigateByUrl('/login');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 35, vars: 6, consts: [["id", "lr_header", 1, "header", "header-fixed", "border-0"], [1, "container", "d-flex", "align-items-stretch", "justify-content-between"], [1, "d-flex", "align-items-stretch", "mr-3"], [1, "header-logo"], ["routerLink", "/"], ["alt", "Logo", 1, "logo-default", "max-w-150px", "max-h-60px", 3, "src"], ["id", "lr_header_menu_wrapper", 1, "header-menu-wrapper", "header-menu-wrapper-left"], ["id", "lr_header_menu", 1, "header-menu", "header-menu-left", "header-menu-mobile", "header-menu-layout-default"], [1, "menu-nav"], [4, "ngFor", "ngForOf"], [1, "topbar", "d-flex", "align-items-stretch"], [1, "dropdown"], [1, "topbar-item"], [1, "text-dark-25", "font-size-xs", "mr-3", "text-right"], ["id", "lr_order", "title", "Orders", 1, "btn", "btn-icon", "d-flex", "align-items-center", "btn-lg", "px-md-2", "w-md-auto"], [1, "btn", "btn-icon", "btn-hover-transparent-white", "btn-dropdown", "btn-lg", "mr-1", 3, "routerLink"], [1, "far", "fa-clipboard", "opacity-80"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 1, "btn", "btn-icon", "d-flex", "align-items-center", "btn-lg", "px-md-2", "w-md-auto", 3, "matMenuTriggerFor"], [1, "symbol", "symbol-40"], [1, "symbol-label", "text-white", "font-size-h5", "font-weight-bold", "bg-white-o-30"], [1, "min-w-200px"], ["menu", "matMenu"], ["mat-menu-item", "", "id", "lr_quick_user_toggle", 3, "click"], ["data-menu-toggle", "click", "class", "menu-item menu-item-submenu menu-item-rel", "aria-haspopup", "true", 3, "ngClass", 4, "ngIf"], ["data-menu-toggle", "click", "aria-haspopup", "true", 1, "menu-item", "menu-item-submenu", "menu-item-rel", 3, "ngClass"], [1, "menu-link", "menu-toggle", 3, "routerLink"], [3, "ngClass"], [1, "menu-text"], [1, "menu-arrow"], [1, "menu-link", "menu-toggle"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_ng_container_9_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-menu", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_30_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getLogo(true), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.totalModels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Version: ", ctx.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("released ", ctx.releaseDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", "/" + ctx.linkSelected + "/Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "nlne":
/*!*********************************************************!*\
  !*** ./src/app/shared/tenant/configuration/golfhero.ts ***!
  \*********************************************************/
/*! exports provided: golfhero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "golfhero", function() { return golfhero; });
const golfhero = {
    "env": "stg",
    "tenant": "golfhero",
    "logo": "golfOpenBlue.png",
    "whiteLogo": "golfOpenWhite.png",
    "favIcon": "openGolfFavIcon.png",
    "title": "Golf Hero",
    "theme": "golfhero",
    "loginLogos": [],
    "authorizedModules": ["Airlines", "Hotels", "CarRental", "Golf"],
    "modulesOrder": ["Hotels", "Airlines", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 25,
            "batchSize": 10
        }
    }
};


/***/ }),

/***/ "p2+c":
/*!******************************************!*\
  !*** ./src/app/store/rail/rail.state.ts ***!
  \******************************************/
/*! exports provided: RailStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailStateModule", function() { return RailStateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _rail_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rail.actions */ "II1b");



let RailStateModule = class RailStateModule {
    static getRailData({ getState }) {
        return getState();
    }
    setRailData({ setState, getState }, { payload }) {
        const state = getState();
        setState(Object.assign(Object.assign({}, state), payload));
    }
    //selectedRail
    static getSelectedRail(state) {
        return state.selectedRail;
    }
    static checkSelectedRail(state) {
        return state.selectedRail == null ? false : true;
    }
    setSelectedRail({ patchState }, { payload }) {
        patchState({ selectedRail: payload });
    }
    deleteSelectedRail({ patchState }) {
        patchState({ selectedRail: null });
    }
    //searchCriteria
    static getSearchCriteria(state) {
        return state.searchCriteria;
    }
    static checkSearchCriteria(state) {
        return state.searchCriteria == null ? false : true;
    }
    setSearchCriteria({ patchState }, { payload }) {
        patchState({ searchCriteria: payload });
    }
    deleteSearchCriteria({ patchState }) {
        patchState({ searchCriteria: null });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_rail_actions__WEBPACK_IMPORTED_MODULE_2__["SetRailData"])
], RailStateModule.prototype, "setRailData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_rail_actions__WEBPACK_IMPORTED_MODULE_2__["SetSelectedRailData"])
], RailStateModule.prototype, "setSelectedRail", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_rail_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSelectedRailData"])
], RailStateModule.prototype, "deleteSelectedRail", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_rail_actions__WEBPACK_IMPORTED_MODULE_2__["SetSearchCriteriaData"])
], RailStateModule.prototype, "setSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_rail_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteSearchCriteriaData"])
], RailStateModule.prototype, "deleteSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], RailStateModule, "getRailData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], RailStateModule, "getSelectedRail", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], RailStateModule, "checkSelectedRail", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], RailStateModule, "getSearchCriteria", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], RailStateModule, "checkSearchCriteria", null);
RailStateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'railStateModule',
        defaults: {
            selectedRail: null,
            searchCriteria: null
        }
    })
], RailStateModule);



/***/ }),

/***/ "pEEB":
/*!**************************************************!*\
  !*** ./src/app/shared/storage/cookie-storage.ts ***!
  \**************************************************/
/*! exports provided: CookieStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieStorage", function() { return CookieStorage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/EncrDecr.service */ "7qyG");




class CookieStorage {
    constructor(cookieService, encrypt) {
        this.cookieService = cookieService;
        this.encrypt = encrypt;
    }
    clear() {
        this.cookieService.deleteAll();
    }
    check(key) {
        return this.cookieService.check(key);
    }
    getItem(key) {
        let data = this.cookieService.get(key);
        if (data == (undefined || null)) {
            return data;
        }
        data = this.encrypt.AESDecrypt(data);
        return data;
    }
    key(index) {
        return this.cookieService.getAll().propertyIsEnumerable[index];
    }
    removeItem(key, path = '/') {
        this.cookieService.delete(key, path);
    }
    setItem(key, data, expires, path, domain, secure, sameSite) {
        path = path || '/';
        data = this.encrypt.AESEncrypt(data);
        this.cookieService.set(key, data, expires, path, domain, secure, sameSite);
    }
}
CookieStorage.ɵfac = function CookieStorage_Factory(t) { return new (t || CookieStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_2__["EncrDecrService"])); };
CookieStorage.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieStorage, factory: CookieStorage.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }, { type: _services_EncrDecr_service__WEBPACK_IMPORTED_MODULE_2__["EncrDecrService"] }]; }, null); })();


/***/ }),

/***/ "tbg8":
/*!*************************************************************!*\
  !*** ./src/app/shared/tenant/configuration/golfnational.ts ***!
  \*************************************************************/
/*! exports provided: golfnational */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "golfnational", function() { return golfnational; });
const golfnational = {
    "env": "stg",
    "tenant": "golfnational",
    "logo": "leGolfNational.png",
    "whiteLogo": "leGolfNationalWhite.png",
    "favIcon": "golfNationalFavIcon.png",
    "title": "Le Golf National",
    "theme": "golfnational",
    "loginLogos": [],
    "authorizedModules": ["Airlines", "Hotels", "CarRental", "Golf"],
    "modulesOrder": ["Hotels", "Airlines", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 25,
            "batchSize": 10
        }
    }
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/pages/page-not-found/page-not-found.component */ "RgPU");
/* harmony import */ var _views_pages_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/pages/access-denied/access-denied.component */ "V5Qo");
/* harmony import */ var _views_pages_unauthorized_page_unauthorized_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/pages/unauthorized-page/unauthorized-page.component */ "XFqO");
/* harmony import */ var _views_theme_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/theme/base/base.component */ "Pvy7");
/* harmony import */ var _guard_authentication_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guard/authentication.guard */ "0lBK");
/* harmony import */ var _guard_authorization_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guard/authorization.guard */ "g/xL");
/* harmony import */ var _shared_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/config */ "VJzw");











const routes = [
    // { path: '' , redirectTo: config.objectRouting.Flights.URLLink, pathMatch: 'full'},
    { path: 'login', loadChildren: () => Promise.all(/*! import() | views-pages-auth-auth-module */[__webpack_require__.e("default~views-pages-auth-auth-module~views-pages-hotel-hotel-module"), __webpack_require__.e("views-pages-auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./views/pages/auth/auth.module */ "SSQ5")).then(m => m.AuthModule) },
    {
        path: '',
        component: _views_theme_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"],
        canActivate: [_guard_authentication_guard__WEBPACK_IMPORTED_MODULE_6__["AuthenticationGuard"], _guard_authorization_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizationGuard"]],
        children: [
            // { path: '', redirectTo: config.objectRouting.Flights.URLLink, pathMatch: 'full'},
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | views-pages-hotel-hotel-module */[__webpack_require__.e("default~views-pages-auth-auth-module~views-pages-hotel-hotel-module"), __webpack_require__.e("common"), __webpack_require__.e("views-pages-hotel-hotel-module")]).then(__webpack_require__.bind(null, /*! ./views/pages/hotel/hotel.module */ "hObm")).then(m => m.HotelModule),
                canActivate: [_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizationGuard"]]
            },
            {
                path: _shared_config__WEBPACK_IMPORTED_MODULE_8__["config"].objectRouting.Flights.URLLink,
                loadChildren: () => Promise.all(/*! import() | views-pages-hotel-hotel-module */[__webpack_require__.e("default~views-pages-auth-auth-module~views-pages-hotel-hotel-module"), __webpack_require__.e("common"), __webpack_require__.e("views-pages-hotel-hotel-module")]).then(__webpack_require__.bind(null, /*! ./views/pages/hotel/hotel.module */ "hObm")).then(m => m.HotelModule),
                canActivate: [_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizationGuard"]]
            },
            {
                path: _shared_config__WEBPACK_IMPORTED_MODULE_8__["config"].objectRouting.Hotels.URLLink,
                loadChildren: () => Promise.all(/*! import() | views-pages-hotel-hotel-module */[__webpack_require__.e("default~views-pages-auth-auth-module~views-pages-hotel-hotel-module"), __webpack_require__.e("common"), __webpack_require__.e("views-pages-hotel-hotel-module")]).then(__webpack_require__.bind(null, /*! ./views/pages/hotel/hotel.module */ "hObm")).then(m => m.HotelModule),
                canActivate: [_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizationGuard"]]
            },
            {
                path: _shared_config__WEBPACK_IMPORTED_MODULE_8__["config"].objectRouting.CarRental.URLLink,
                loadChildren: () => Promise.all(/*! import() | views-pages-carrental-carrental-module */[__webpack_require__.e("common"), __webpack_require__.e("views-pages-carrental-carrental-module")]).then(__webpack_require__.bind(null, /*! ./views/pages/carrental/carrental.module */ "jzxU")).then(m => m.CarrentalModule),
                canActivate: [_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizationGuard"]]
            },
            {
                path: _shared_config__WEBPACK_IMPORTED_MODULE_8__["config"].objectRouting.Golf.URLLink,
                loadChildren: () => Promise.all(/*! import() | views-pages-golf-golf-module */[__webpack_require__.e("common"), __webpack_require__.e("views-pages-golf-golf-module")]).then(__webpack_require__.bind(null, /*! ./views/pages/golf/golf.module */ "WeSM")).then(m => m.GolfModule),
                canActivate: [_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizationGuard"]]
            },
            {
                path: _shared_config__WEBPACK_IMPORTED_MODULE_8__["config"].objectRouting.Spa.URLLink,
                loadChildren: () => Promise.all(/*! import() | views-pages-spa-spa-module */[__webpack_require__.e("common"), __webpack_require__.e("views-pages-spa-spa-module")]).then(__webpack_require__.bind(null, /*! ./views/pages/spa/spa.module */ "m1zI")).then(m => m.SpaModule),
                canActivate: [_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizationGuard"]]
            },
            {
                path: _shared_config__WEBPACK_IMPORTED_MODULE_8__["config"].objectRouting.Rail.URLLink,
                loadChildren: () => Promise.all(/*! import() | views-pages-rail-rail-module */[__webpack_require__.e("common"), __webpack_require__.e("views-pages-rail-rail-module")]).then(__webpack_require__.bind(null, /*! ./views/pages/rail/rail.module */ "lP/z")).then(m => m.RailModule),
                canActivate: [_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizationGuard"]]
            },
            {
                path: _shared_config__WEBPACK_IMPORTED_MODULE_8__["config"].objectRouting.Cruise.URLLink,
                loadChildren: () => Promise.all(/*! import() | views-pages-cruise-cruise-module */[__webpack_require__.e("common"), __webpack_require__.e("views-pages-cruise-cruise-module")]).then(__webpack_require__.bind(null, /*! ./views/pages/cruise/cruise.module */ "FK63")).then(m => m.CruiseModule),
                canActivate: [_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizationGuard"]]
            },
            {
                path: _shared_config__WEBPACK_IMPORTED_MODULE_8__["config"].objectRouting.Transportation.URLLink,
                loadChildren: () => Promise.all(/*! import() | views-pages-transportation-transportation-module */[__webpack_require__.e("common"), __webpack_require__.e("views-pages-transportation-transportation-module")]).then(__webpack_require__.bind(null, /*! ./views/pages/transportation/transportation.module */ "Lg3F")).then(m => m.TransportationModule),
                canActivate: [_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizationGuard"]]
            },
            { path: 'denied', component: _views_pages_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedComponent"] },
            { path: 'unauthorized', component: _views_pages_unauthorized_page_unauthorized_page_component__WEBPACK_IMPORTED_MODULE_4__["UnauthorizedPageComponent"] },
            { path: '**', component: _views_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
        ]
    },
    { path: '**', component: _views_pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
                onSameUrlNavigation: 'reload'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled',
                        onSameUrlNavigation: 'reload'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MY_FORMATS, AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng2-daterangepicker */ "B01t");

















































const MY_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YY',
        monthYearLabel: 'MM YYYY',
        dateA11yLabel: 'DD/MM/YYYY',
        monthYearA11yLabel: 'MM YYYY',
    },
};
class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, providers: [], imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_46__["InfiniteScrollModule"],
        ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_47__["Daterangepicker"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_46__["InfiniteScrollModule"],
        ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_47__["Daterangepicker"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [],
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"],
                    ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_46__["InfiniteScrollModule"],
                    ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_47__["Daterangepicker"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "wJS7":
/*!**************************************************!*\
  !*** ./src/app/store/airline/airline.actions.ts ***!
  \**************************************************/
/*! exports provided: SetAirlineData, SetSelectedAirlineData, DeleteSelectedAirlineData, SetSearchCriteriaData, DeleteSearchCriteriaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAirlineData", function() { return SetAirlineData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedAirlineData", function() { return SetSelectedAirlineData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSelectedAirlineData", function() { return DeleteSelectedAirlineData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearchCriteriaData", function() { return SetSearchCriteriaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSearchCriteriaData", function() { return DeleteSearchCriteriaData; });
class SetAirlineData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetAirlineData.type = '[Airline] Airline data';
class SetSelectedAirlineData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSelectedAirlineData.type = '[Airline] Set SelectedAirline data';
class DeleteSelectedAirlineData {
    constructor() { }
}
DeleteSelectedAirlineData.type = '[Airline] Delete SelectedAirline data';
class SetSearchCriteriaData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSearchCriteriaData.type = '[Airline] Set SearchCriteria data';
class DeleteSearchCriteriaData {
    constructor() { }
}
DeleteSearchCriteriaData.type = '[Airline] Delete SearchCriteria data';


/***/ }),

/***/ "wW1D":
/*!******************************************************!*\
  !*** ./src/app/store/carrental/carrental.actions.ts ***!
  \******************************************************/
/*! exports provided: SetCarrentalData, SetSelectedCarrentalData, DeleteSelectedCarrentalData, SetSearchCriteriaData, DeleteSearchCriteriaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCarrentalData", function() { return SetCarrentalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedCarrentalData", function() { return SetSelectedCarrentalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSelectedCarrentalData", function() { return DeleteSelectedCarrentalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearchCriteriaData", function() { return SetSearchCriteriaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSearchCriteriaData", function() { return DeleteSearchCriteriaData; });
class SetCarrentalData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetCarrentalData.type = '[Carrental] Carrental data';
class SetSelectedCarrentalData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSelectedCarrentalData.type = '[Carrental] Set SelectedCarrental data';
class DeleteSelectedCarrentalData {
    constructor() { }
}
DeleteSelectedCarrentalData.type = '[Carrental] Delete SelectedCarrental data';
class SetSearchCriteriaData {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSearchCriteriaData.type = '[Carrental] Set SearchCriteria data';
class DeleteSearchCriteriaData {
    constructor() { }
}
DeleteSearchCriteriaData.type = '[Carrental] Delete SearchCriteria data';


/***/ }),

/***/ "xUj5":
/*!******************************************************!*\
  !*** ./src/app/shared/tenant/configuration/index.ts ***!
  \******************************************************/
/*! exports provided: confirationClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirationClasses", function() { return confirationClasses; });
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "EyRZ");
/* harmony import */ var _linkrez__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linkrez */ "GlT0");
/* harmony import */ var _opentravel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opentravel */ "y2W6");
/* harmony import */ var _fullofdreams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullofdreams */ "ChSZ");
/* harmony import */ var _simplenight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simplenight */ "ms6O");
/* harmony import */ var _military__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./military */ "b2g8");
/* harmony import */ var _travel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel */ "UcMP");
/* harmony import */ var _cwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cwt */ "z3G2");
/* harmony import */ var _golfhero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./golfhero */ "nlne");
/* harmony import */ var _golfnational__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./golfnational */ "tbg8");
/* harmony import */ var _golfopen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./golfopen */ "Ukku");
/* harmony import */ var _mykey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mykey */ "Zl5q");
/* harmony import */ var _catale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catale */ "j4ew");













var confirationClasses;
(function (confirationClasses) {
    confirationClasses.defaultTenant = _default__WEBPACK_IMPORTED_MODULE_0__["defaultTenant"];
    confirationClasses.linkrez = _linkrez__WEBPACK_IMPORTED_MODULE_1__["linkrez"];
    confirationClasses.opentravel = _opentravel__WEBPACK_IMPORTED_MODULE_2__["opentravel"];
    confirationClasses.fullofdreams = _fullofdreams__WEBPACK_IMPORTED_MODULE_3__["fullofdreams"];
    confirationClasses.simplenight = _simplenight__WEBPACK_IMPORTED_MODULE_4__["simplenight"];
    confirationClasses.military = _military__WEBPACK_IMPORTED_MODULE_5__["military"];
    confirationClasses.travel = _travel__WEBPACK_IMPORTED_MODULE_6__["travel"];
    confirationClasses.cwt = _cwt__WEBPACK_IMPORTED_MODULE_7__["cwt"];
    confirationClasses.golfhero = _golfhero__WEBPACK_IMPORTED_MODULE_8__["golfhero"];
    confirationClasses.golfnational = _golfnational__WEBPACK_IMPORTED_MODULE_9__["golfnational"];
    confirationClasses.golfopen = _golfopen__WEBPACK_IMPORTED_MODULE_10__["golfopen"];
    confirationClasses.mykey = _mykey__WEBPACK_IMPORTED_MODULE_11__["mykey"];
    confirationClasses.catale = _catale__WEBPACK_IMPORTED_MODULE_12__["catale"];
})(confirationClasses || (confirationClasses = {}));


/***/ }),

/***/ "y2W6":
/*!***********************************************************!*\
  !*** ./src/app/shared/tenant/configuration/opentravel.ts ***!
  \***********************************************************/
/*! exports provided: opentravel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opentravel", function() { return opentravel; });
const opentravel = {
    "env": "stg",
    "tenant": "opentravel",
    "logo": "opentravel.svg",
    "whiteLogo": "opentravelWhite.svg",
    "favIcon": "openTravelFavicon.ico",
    "title": "Open Travel",
    "theme": "opentravel",
    "loginLogos": ["Linksrez", "Opentravel", "AmericanAirlines", "Marriott", "AVIS", "IBM", "RedHat"],
    "authorizedModules": ["Airlines", "Hotels", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "modulesOrder": ["Airlines", "Hotels", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 25,
            "batchSize": 10
        }
    }
};


/***/ }),

/***/ "z3G2":
/*!****************************************************!*\
  !*** ./src/app/shared/tenant/configuration/cwt.ts ***!
  \****************************************************/
/*! exports provided: cwt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cwt", function() { return cwt; });
const cwt = {
    "env": "stg",
    "tenant": "cwt",
    "logo": "cwtDark.png",
    "whiteLogo": "cwtTransparent.png",
    "favIcon": "cwtFavIcon.ico",
    "title": "CWT",
    "theme": "cwt",
    "loginLogos": [],
    "authorizedModules": ["Airlines", "Hotels", "CarRental", "Golf"],
    "modulesOrder": ["Hotels", "Airlines", "CarRental", "Golf", "Spa", "Rail", "Cruise", "Transportation"],
    "module": {
        "airline": {
            "carrierAirlineID": ["AA"],
        },
        "hotel": {
            "chainCode": [],
            "skipHotelSearchSelectionStep": true,
            "distance": 25,
            "batchSize": 20
        }
    }
};


/***/ }),

/***/ "zPlH":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/array-helper.service.ts ***!
  \*********************************************************/
/*! exports provided: ArrayHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayHelperService", function() { return ArrayHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ArrayHelperService {
    constructor() { }
    sum(data) {
        let total = 0;
        if (data) {
            data.forEach(i => total += i);
        }
        return total;
    }
    groupBy(data, key, value, total) {
        let isKeyFunction = key && typeof (key) === 'function';
        let isValueFunction = value && typeof (value) === 'function';
        let isTotalFunction = total && typeof (total) === 'function';
        let keyFunc = key;
        const groupedObj = data.reduce((prev, cur) => {
            if (isKeyFunction) {
                (prev[keyFunc(cur)] = prev[keyFunc(cur)] || []).push(cur);
            }
            else {
                (prev[cur[key]] = prev[cur[key]] || []).push(cur);
            }
            return prev;
        }, {});
        return Object.keys(groupedObj).map(key => ({ key, value: isValueFunction ? groupedObj[key].map(el => value(el)) : groupedObj[key], total: isTotalFunction ? total(groupedObj[key]) : null }));
    }
    sortBy(data, valFunc, dir) {
        let multiplier = (dir || "asc") === "asc" ? 1 : -1;
        return data.sort((a, b) => {
            let aValue = 0;
            let bValue = 0;
            valFunc.every(val => {
                aValue = val(a) * multiplier;
                bValue = val(b) * multiplier;
                if (aValue !== bValue) {
                    return false;
                }
            });
            let result = aValue > bValue ? 1 : aValue === bValue ? 0 : -1;
            return result;
        });
    }
    removeMatching(data, match) {
        let result = data.reduce((p, c) => (!match(c) && p.push(c), p), []);
        return result;
    }
}
ArrayHelperService.ɵfac = function ArrayHelperService_Factory(t) { return new (t || ArrayHelperService)(); };
ArrayHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArrayHelperService, factory: ArrayHelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrayHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map