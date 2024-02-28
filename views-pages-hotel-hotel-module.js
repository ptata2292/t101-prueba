(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-hotel-hotel-module"],{

/***/ "1cWd":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/hotel/partials/hotel-list/hotel-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HotelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelListComponent", function() { return HotelListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/animations */ "Ql4B");
/* harmony import */ var src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/tenant/tenant */ "lWHP");
/* harmony import */ var _hotel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hotel */ "ZNpG");
/* harmony import */ var _services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/hotel-retrieve.service */ "9lgk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/array-helper.service */ "zPlH");
/* harmony import */ var src_app_views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/views/pages/auth/login/login.service */ "0Xdg");
/* harmony import */ var src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/storage/local-storage */ "ADqn");
/* harmony import */ var _services_extra_fees_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/extra-fees.service */ "2ddI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
















function HotelListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 30);
} }
function HotelListComponent_div_1_div_5_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 39);
} if (rf & 2) {
    const hotel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", hotel_r5.hotelImageURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HotelListComponent_div_1_div_5_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 40);
} }
function HotelListComponent_div_1_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", hotel_r5.contactInformation[0].address[0].street, ", ", hotel_r5.contactInformation[0].address[0].city, ", ", hotel_r5.contactInformation[0].address[0].stateProv.value || hotel_r5.contactInformation[0].address[0].stateProv.name, " ", hotel_r5.contactInformation[0].address[0].country.value || hotel_r5.contactInformation[0].address[0].country.name, "");
} }
function HotelListComponent_div_1_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", hotel_r5.contactInformation[0].address[0].addressLine[0], ", ", hotel_r5.contactInformation[0].address[0].city, ", ", hotel_r5.contactInformation[0].address[0].stateProv.value || hotel_r5.contactInformation[0].address[0].stateProv.name, " ", hotel_r5.contactInformation[0].address[0].country.value || hotel_r5.contactInformation[0].address[0].country.name, "");
} }
function HotelListComponent_div_1_div_5_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", hotel_r5.relativePosition.distance, " Miles From City Center");
} }
function HotelListComponent_div_1_div_5_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HotelListComponent_div_1_div_5_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+ $", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r12.extraFeeCalculateTotal(hotel_r5, hotel_r5.rooms[0]), "1.2-2"), " extras");
} }
function HotelListComponent_div_1_div_5_div_40_div_1_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roomDescription_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, roomDescription_r25.value));
} }
function HotelListComponent_div_1_div_5_div_40_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HotelListComponent_div_1_div_5_div_40_div_1_div_10_div_1_Template, 7, 3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", room_r20.product.roomStay.roomType.description.text);
} }
function HotelListComponent_div_1_div_5_div_40_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HotelListComponent_div_1_div_5_div_40_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const hotel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+ $", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r23.extraFeeCalculateTotal(hotel_r5, room_r20), "1.2-2"), " extras");
} }
function HotelListComponent_div_1_div_5_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HotelListComponent_div_1_div_5_div_40_div_1_div_10_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HotelListComponent_div_1_div_5_div_40_div_1_div_11_Template, 4, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HotelListComponent_div_1_div_5_div_40_div_1_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const room_r20 = ctx.$implicit; const hotel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.bookNow(room_r20, hotel_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HotelListComponent_div_1_div_5_div_40_div_1_div_18_Template, 3, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r20 = ctx.$implicit;
    const hotel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, room_r20.product.roomName));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", room_r20.product.roomStay.roomType.description.text.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", room_r20.product.roomStay.roomType.description.text.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 7, room_r20.productPrice.roomRate[0].rate.amountBeforeTax, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.extraFeeCalculateTotal(hotel_r5, room_r20));
} }
function HotelListComponent_div_1_div_5_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HotelListComponent_div_1_div_5_div_40_div_1_Template, 19, 10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", hotel_r5.rooms);
} }
function HotelListComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HotelListComponent_div_1_div_5_img_4_Template, 1, 1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HotelListComponent_div_1_div_5_img_5_Template, 1, 0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HotelListComponent_div_1_div_5_div_10_Template, 2, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HotelListComponent_div_1_div_5_div_11_Template, 2, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HotelListComponent_div_1_div_5_div_17_Template, 5, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HotelListComponent_div_1_div_5_div_18_Template, 4, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "4.0/5 Very Good");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " 15 Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HotelListComponent_div_1_div_5_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const hotel_r5 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r34.toggleRooms(hotel_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Total Stay before Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, HotelListComponent_div_1_div_5_div_37_Template, 3, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HotelListComponent_div_1_div_5_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const hotel_r5 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r36.bookNow(hotel_r5.rooms[0], hotel_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, HotelListComponent_div_1_div_5_div_40_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", hotel_r5.hotelImageURL != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", hotel_r5.hotelImageURL === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](hotel_r5.basicPropertyInfo.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", hotel_r5.contactInformation[0].address[0].addressLine.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", hotel_r5.contactInformation[0].address[0].addressLine.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.formatPhoneNumber(hotel_r5.contactInformation[0].telephone[0].phoneNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", hotel_r5.relativePosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !hotel_r5.relativePosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (!hotel_r5.showRooms ? "Show" : "Hide") + " All Rooms", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !hotel_r5.showRooms ? "fas fa-chevron-down" : "fas fa-chevron-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](hotel_r5.rooms[0].termsAndConditions[0].cancelPenalties[0].description[0].text[0].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](34, 14, hotel_r5.rooms[0].productPrice.roomRate[0].rate.amountBeforeTax, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.extraFeeCalculateTotal(hotel_r5, hotel_r5.rooms[0]) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", hotel_r5.showRooms);
} }
function HotelListComponent_div_1_mat_spinner_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 62);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 30);
} }
function HotelListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Filter by");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function HotelListComponent_div_1_Template_div_scrolled_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.onScroll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HotelListComponent_div_1_div_5_Template, 41, 17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HotelListComponent_div_1_mat_spinner_6_Template, 1, 1, "mat-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.hotelList.hotels);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.hotelList.spinner);
} }
function HotelListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
} }
class HotelListComponent extends _hotel__WEBPACK_IMPORTED_MODULE_5__["Hotel"] {
    constructor(hotelRetrieveService, router, arrayHelperService, loginService, localStorage, extraFeeService) {
        super(loginService);
        this.hotelRetrieveService = hotelRetrieveService;
        this.router = router;
        this.arrayHelperService = arrayHelperService;
        this.localStorage = localStorage;
        this.extraFeeService = extraFeeService;
        this.radioSelected = "one";
        this.hotelOfferQuery = {
            "basicPropertyInfo": [],
            "baseHospitalityFacilityQuery": {
                "dateTimeSpan": {
                    "start": "",
                    "end": ""
                },
                "guestCount": [],
                "numberOfRooms": 1
            }
        };
        this.errorMessage = '';
        this.hotelList = new HotelList();
        this.lastUpdateSize = 0;
        this.skipCount = 0;
        this.batchSize = 5;
        this.hotelNamesList = [];
        this.isLoadNext = false;
        this.isLoadingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isHotelListFetchingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        let tenantConfig = Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_4__["getTenantModule"])();
        this.batchSize = tenantConfig.hotel && tenantConfig.hotel.batchSize ? tenantConfig.hotel.batchSize : this.batchSize;
        //this.selectedHotels = window.history.state.hotelList;
        this.searchSubscription = this.search.subscribe((searchList) => {
            if (searchList.selectedHotelList != null && searchList.selectedHotelList.length > 0) {
                this.isLoading = true;
                this.isLoadNext = false;
                this.hotelNamesList = searchList.selectedHotelList || [];
                this.hotelSearchFormGroup = searchList.searchForm;
                this.loadInitPost(true);
                //this.searchHotels();
            }
        });
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        this.searchSubscription.unsubscribe();
    }
    onScroll() {
        //console.log('onScroll');
        if (this.hotelList.notscrolly && this.hotelList.notEmptyPost && this.hotelList.hotels.length !== 0) {
            this.hotelList.spinner = true;
            this.hotelList.notscrolly = false;
            this.loadNextPost();
        }
    }
    extraFeeCalculateTotal(hotelData, offer) {
        return this.extraFeeService.calculateTotal(hotelData, offer);
    }
    clearData(hotelList) {
        hotelList.hotels = [];
        hotelList.notEmptyPost = true;
        hotelList.notscrolly = true;
        hotelList.spinner = false;
        hotelList.retrieveFrom = null;
    }
    loadInitPost(resetSkipCount = false) {
        resetSkipCount ? this.skipCount = 0 : null;
        this.clearData(this.hotelList);
        this.searchHotels();
    }
    loadNextPost() {
        this.searchHotels(true);
    }
    searchHotels(loadNextPost = false) {
        if (!loadNextPost) {
            this.lastUpdateSize = 0;
        }
        this.getHotelOffersQuery();
        this.errorMessage = '';
        if (this.hotelOfferQuery.basicPropertyInfo.length > 0) {
            this.getHotelFares(loadNextPost);
        }
        else {
            this.hotelList.spinner = false;
            this.hotelList.notscrolly = true;
            this.isLoading = false;
        }
    }
    getHotelRoomInfo(hotelFareData, loadNextPost) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let response = [];
            if (hotelFareData.offers != null && hotelFareData.offers.length > 0) {
                response = yield this.getHotelData(hotelFareData, loadNextPost);
            }
            else if (hotelFareData.extensionPoint != null && hotelFareData.extensionPoint.any
                && hotelFareData.extensionPoint.any.length > 0) {
                if (hotelFareData.offers != null && hotelFareData.offers.length == 0) {
                    if (this.hotelList.hotels.length == 0) {
                        if (loadNextPost) {
                            this.hotelList.notEmptyPost = false;
                        }
                        this.isHotelListFetchingChange.emit(false);
                        this.errorMessage = 'No rooms available for your criteria. Please try again.'; //hotelFareData.extensionPoint.any[0].errors[0].notifications[0].message;
                    }
                }
                else {
                    if (this.hotelList.hotels.length == 0) {
                        if (loadNextPost) {
                            this.hotelList.notEmptyPost = false;
                        }
                        this.isHotelListFetchingChange.emit(false);
                        this.errorMessage = 'No rooms available for your criteria. Please try again.'; //hotelFareData.extensionPoint.any[0].errors[0].shortText || hotelFareData.extensionPoint.any[0].errors[0].value ;
                    }
                }
            }
            else {
                if (hotelFareData.offers != null && hotelFareData.offers.length == 0) {
                    if (this.hotelList.hotels.length == 0) {
                        if (loadNextPost) {
                            this.hotelList.notEmptyPost = false;
                        }
                        this.isHotelListFetchingChange.emit(false);
                        this.errorMessage = 'No rooms available for your criteria. Please try again.';
                    }
                }
                console.log('response is not correct format');
            }
            return response;
        });
    }
    getHotelFares(loadNextPost) {
        this.isHotelListFetchingChange.emit(true);
        this.hotelRetrieveService.getHotelFare(this.hotelOfferQuery).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(hotelData => { return this.getHotelRoomInfo(hotelData, loadNextPost); })).subscribe((hotelFareData) => {
            if (loadNextPost) {
                this.hotelList.spinner = false;
                this.hotelList.notscrolly = true;
            }
            if (this.isLoadNext || hotelFareData.length <= this.batchSize) {
                this.skipCount = this.skipCount + this.batchSize;
                this.hotelList.hotels.push(...hotelFareData);
                this.lastUpdateSize += hotelFareData.length;
            }
            if ((this.hotelList.hotels.length < this.batchSize || hotelFareData.length == 0 || this.lastUpdateSize < this.batchSize / 2) && this.skipCount < this.hotelNamesList.length) {
                this.loadNextPost();
            }
            else if (this.hotelList.hotels.length < this.batchSize && this.skipCount > this.hotelNamesList.length) {
                this.hotelList.spinner = false;
                this.hotelList.notscrolly = true;
                this.isLoading = false;
                this.lastUpdateSize = 0;
                this.isLoadingChange.emit(this.isLoading);
            }
            else {
                this.lastUpdateSize = 0;
                this.isLoadNext = true;
                this.isLoading = false;
                this.isLoadingChange.emit(this.isLoading);
            }
            this.isHotelListFetchingChange.emit(false);
            // console.log(hotelFareData);
        }, error => {
            this.isHotelListFetchingChange.emit(false);
            this.isLoading = false;
            console.log(error);
            if (error.Error.extensionPoint) {
                this.errorMessage = 'No rooms available for your criteria. Please try again.'; //error.Error.extensionPoint.any[0].errors[0].notifications[0].message;
            }
            else {
                this.errorMessage = 'No rooms available for your criteria. Please try again.';
            }
        });
    }
    getHotelOffersQuery() {
        this.hotelOfferQuery.baseHospitalityFacilityQuery.guestCount = [];
        this.hotelOfferQuery.basicPropertyInfo = [];
        let guestCount = {
            "ageQualifyingCode": "",
            "value": ""
        };
        let i = 0;
        for (let index = this.skipCount; index < this.hotelNamesList.length; index++) {
            if (i < this.batchSize) {
                if (this.hotelNamesList[index].basicPropertyInfo != null) {
                    this.hotelOfferQuery.basicPropertyInfo.push(this.hotelNamesList[index].basicPropertyInfo);
                }
            }
            else {
                break;
            }
            i = i + 1;
        }
        // for(let hotel of this.hotelNamesList || []){
        //   if(hotel.basicPropertyInfo != null){
        //     this.hotelOfferQuery.basicPropertyInfo.push(hotel.basicPropertyInfo)
        //   }
        // }
        this.hotelOfferQuery.baseHospitalityFacilityQuery.dateTimeSpan.start = typeof (this.hotelSearchFormGroup.start) == 'object' ? (this.hotelSearchFormGroup.start.toISOString()).split('T')[0] : this.hotelSearchFormGroup.start.split('T')[0];
        this.hotelOfferQuery.baseHospitalityFacilityQuery.dateTimeSpan.end = typeof (this.hotelSearchFormGroup.end) == 'object' ? (this.hotelSearchFormGroup.end.toISOString()).split('T')[0] : this.hotelSearchFormGroup.end.split('T')[0];
        if (this.hotelSearchFormGroup.adults > 0) {
            guestCount.ageQualifyingCode = "ADULT";
            guestCount.value = "" + this.hotelSearchFormGroup.count; //need to change when dropdown is done in UI
        }
        this.hotelOfferQuery.baseHospitalityFacilityQuery.guestCount.push(guestCount);
        this.hotelOfferQuery.baseHospitalityFacilityQuery.numberOfRooms = this.hotelSearchFormGroup.rooms;
    }
    getHotelData(hotelFareData, loadNextPost) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let hotelObj = {};
            let hotelList = [];
            if (!loadNextPost) {
                this.hotelList.hotels = [];
            }
            let offers = hotelFareData.offers.filter(o => o.facilityIdentifier && o.facilityIdentifier.facilityKey && o.facilityIdentifier.facilityKey.facilityCode);
            let grouppedHotelFares = this.arrayHelperService.groupBy(offers, h => h.facilityIdentifier.facilityKey.facilityCode, v => v);
            let fareHotels = grouppedHotelFares.map(g => this.hotelNamesList.filter(h => h.basicPropertyInfo).find(h => h.basicPropertyInfo.code == g.key));
            let descriptions = yield this.hotelRetrieveService.getHotelDescriptions(fareHotels);
            for (let g of grouppedHotelFares) {
                let hotel = this.hotelNamesList.filter(h => h.basicPropertyInfo).find(h => h.basicPropertyInfo.code == g.key);
                try {
                    let rooms = this.createFinalHotelOffers(g.value);
                    let hotelDetailInfo = descriptions.find(d => d.basicPropertyInfo.code == g.key);
                    // let hotelImageURL = "";
                    // let multiMediaArray = hotelDetailInfo && hotelDetailInfo.multimediaCollection && hotelDetailInfo.multimediaCollection.multimedia || [];
                    // for (let multiMedia of multiMediaArray) {
                    //   if (multiMedia.imageCategory && multiMedia.imageCategory.image && multiMedia.imageCategory.image.length > 0) {
                    //     hotelImageURL = multiMedia.imageCategory.image[0].url;
                    //     break;
                    //   }
                    // }
                    hotelDetailInfo["hotelImageURL"] = yield this.hotelRetrieveService.getHotelImage(hotelDetailInfo.basicPropertyInfo.chainCode, hotel.basicPropertyInfo.code);
                    hotelObj = Object.assign(Object.assign(Object.assign(Object.assign({}, hotel), { rooms: rooms }), hotelDetailInfo), { showRooms: false });
                    // console.log(this.isLoadNext, this.hotelList.hotels.length, this.batchSize, this.skipCount, hotelObj['basicPropertyInfo'].code);
                    // if(this.isLoadNext || this.hotelList.hotels.length < this.batchSize){
                    //   this.hotelList.hotels.push(hotelObj);
                    // }
                    hotelList.push(hotelObj);
                }
                catch (ex) {
                    console.log(ex);
                }
            }
            //this.isLoading = false;
            return hotelList;
            //console.log(JSON.stringify(this.hotelList));
        });
    }
    createFinalHotelOffers(rooms) {
        let roomsArray = [];
        for (let roomObj of rooms) {
            for (let index = 0; index < roomObj.product.length; index++) {
                if (roomObj.product[index] != null && roomObj.totalPrice.productPrice[index] != null) {
                    let finalRoomObj = roomObj;
                    finalRoomObj.product = roomObj.product[index] || {};
                    finalRoomObj.productPrice = roomObj.totalPrice.productPrice[index] || {};
                    let roomName = finalRoomObj.product.roomStay.roomType.description.text.splice(0, 1);
                    finalRoomObj.product.roomName = roomName[0].value;
                    roomsArray.push(finalRoomObj);
                }
            }
        }
        roomsArray = roomsArray.sort((a, b) => a.productPrice.roomRate[0].rate.value - b.productPrice.roomRate[0].rate.value);
        return roomsArray;
    }
    toggleRooms(hotelObj) {
        if (hotelObj.showRooms == null) {
            hotelObj.showRooms = false;
        }
        hotelObj.showRooms = !hotelObj.showRooms;
    }
    changeCheckinCheckOut(hotelPolicies) {
        for (let hotelPolicy of hotelPolicies.hotelPolicy || []) {
            let checkInTime = this.changeTimeFormat(hotelPolicy.hotelPolicyInformation.checkInTime.split(' ')[1]);
            let checkOutTime = this.changeTimeFormat(hotelPolicy.hotelPolicyInformation.checkOutTime.split(' ')[1]);
            hotelPolicy.hotelPolicyInformation['validCheckInTime'] = checkInTime;
            hotelPolicy.hotelPolicyInformation['validCheckOutTime'] = checkOutTime;
        }
    }
    changeTimeFormat(time) {
        let timeArray = time.split(':');
        let validTime = '';
        if (timeArray[0] == 0) {
            validTime = '12:' + timeArray[1] + ' AM';
        }
        else if (timeArray[0] > 12) {
            validTime = (timeArray[0] - 12 > 9 ? timeArray[0] - 12 : '0' + (timeArray[0] - 12)) + ':' + timeArray[1] + ' PM';
        }
        else if (timeArray[0] < 12) {
            validTime = timeArray[0] + ':' + timeArray[1] + ' AM';
        }
        else if (timeArray[0] == 12) {
            validTime = timeArray[0] + ':' + timeArray[1] + ' PM';
        }
        return validTime;
    }
    bookNow(selectedRoom, hotel) {
        // console.log('Book Now');
        let finalSelectedRoom = {};
        finalSelectedRoom['rooms'] = [selectedRoom];
        finalSelectedRoom['hotelImageURL'] = hotel.hotelImageURL;
        finalSelectedRoom['basicPropertyInfo'] = hotel.basicPropertyInfo;
        finalSelectedRoom['contactInformation'] = hotel.contactInformation;
        finalSelectedRoom['relativePosition'] = hotel.relativePosition;
        finalSelectedRoom['extraFees'] = hotel.extraFees;
        finalSelectedRoom['dateTimeSpan'] = this.hotelOfferQuery.baseHospitalityFacilityQuery.dateTimeSpan;
        if (hotel.hotelPolicies) {
            this.changeCheckinCheckOut(hotel.hotelPolicies);
            finalSelectedRoom['hotelPolicies'] = hotel.hotelPolicies;
        }
        this.localStorage.setItem('selectedRoom', JSON.stringify(finalSelectedRoom));
        this.router.navigateByUrl('/Hotels/Booking');
    }
}
HotelListComponent.ɵfac = function HotelListComponent_Factory(t) { return new (t || HotelListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_6__["HotelRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_8__["ArrayHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_10__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_extra_fees_service__WEBPACK_IMPORTED_MODULE_11__["ExtraFeesService"])); };
HotelListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HotelListComponent, selectors: [["app-hotel-list"]], inputs: { search: "search", isLoading: "isLoading", isHotelListFetching: "isHotelListFetching" }, outputs: { isLoadingChange: "isLoadingChange", isHotelListFetchingChange: "isHotelListFetchingChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "row gutter-b m-0 mt-5", 4, "ngIf"], ["class", "alert alert-custom alert-outline-info fade show text-center mt-20 mb-5 border-0", "role", "alert", 4, "ngIf"], [1, "spinner", 3, "diameter"], [1, "row", "gutter-b", "m-0", "mt-5"], [1, "col-2", "pr-0"], [1, "text-black-50"], ["infiniteScroll", "", 1, "col-10", "pr-0", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], ["class", "card card-custom mb-3", 4, "ngFor", "ngForOf"], ["class", "spinner-bottom", 3, "diameter", 4, "ngIf"], [1, "card", "card-custom", "mb-3"], [1, "card-body", "p-0"], [1, "d-flex"], [1, "htlImgBlock", "d-flex", "align-items-center", "justify-content-center"], ["class", "w-100", "style", "height: 183px;", 3, "src", 4, "ngIf"], ["class", "w-100", "src", "assets/media/Hotels/noImageBW.png", "style", "height: 183px;", 4, "ngIf"], [1, "d-flex", "align-items-start", "flex-lg-fill", "border-right"], [1, "d-flex", "flex-column", "flex-wrap", "p-5", "w-100"], [1, "mb-1"], ["class", "text-muted font-size-lg font-weight-bold", 4, "ngIf"], [1, "d-inline-block", "pt-4"], [1, "btn", "btn-icon", "btn-outline-secondary", "btn-circle", "btn-xs", "mr-2"], [1, "fas", "fa-phone-alt", "icon-1x", "opacity-50"], [1, "font-size-lg"], ["class", "d-inline-block pt-2", 4, "ngIf"], ["class", "d-inline-block pt-2 invisible", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "w-auto", "pr-2", "pt-3"], [1, "label", "label-light-info", "label-inline", "font-weight-bold", "p-4", "d-none"], [1, "font-size-base", "text-muted", "mr-1", "d-none"], [1, "btn", "btn-outline-dark", "btn-sm", "font-weight-bold", "font-size-h6", "opacity-60", 3, "click"], [3, "ngClass"], [1, "htlPriceBlock", "justify-content-between", "text-center", "align-items-center", "pt-5", "pb-5"], [1, "text-muted", "font-size-sm"], [1, "pt-3", "mr-4", "mb-0"], [1, "font-size-xs"], ["class", "text-muted", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "font-weight-bold", "font-size-h5", "w-75", 3, "click"], ["class", "bgLightyellow", 4, "ngIf"], [1, "w-100", 2, "height", "183px", 3, "src"], ["src", "assets/media/Hotels/noImageBW.png", 1, "w-100", 2, "height", "183px"], [1, "text-muted", "font-size-lg", "font-weight-bold"], [1, "d-inline-block", "pt-2"], [1, "fas", "fa-map-marker-alt", "opacity-50"], [1, "d-inline-block", "pt-2", "invisible"], [1, "text-muted"], [1, "bgLightyellow"], [4, "ngFor", "ngForOf"], [1, "separator", "separator-dashed", "border-dark", "opacity-15"], [1, "htlImgBlock2", "d-flex", "align-items-center", "justify-content-center"], [1, "fas", "fa-bed", "icon-4x", "opacity-50"], [1, "d-flex", "align-items-center", "flex-lg-fill", "border-right"], [1, "mb-1", "font-weight-normal"], ["class", "d-flex flex-wrap align-items-baseline pt-2", 4, "ngIf"], [1, "htlPriceBlock", "align-items-center", "justify-content-center"], [1, "btn", "btn-primary", "btn-xs", "font-size-h6", "w-75", 3, "click"], [1, "d-flex", "flex-wrap", "align-items-baseline", "pt-2"], ["class", "d-inline-block mt-1 mr-9 mb-1", 4, "ngFor", "ngForOf"], [1, "d-inline-block", "mt-1", "mr-9", "mb-1"], [1, "btn", "btn-icon", "btn-outline-primary", "btn-circle", "btn-xs"], [1, "material-icons"], [1, "font-size-lg", "pl-1"], [1, "spinner-bottom", 3, "diameter"], ["role", "alert", 1, "alert", "alert-custom", "alert-outline-info", "fade", "show", "text-center", "mt-20", "mb-5", "border-0"], [1, "alert-text", "h2"], [1, "fas", "fa-bed", "icon-2x", "text-info", "pr-2"]], template: function HotelListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HotelListComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HotelListComponent_div_1_Template, 7, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HotelListComponent_div_2_Template, 4, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.errorMessage == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.errorMessage != "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["TitleCasePipe"]], styles: ["[_nghost-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n    stroke: blueviolet !important;\n}\n\n.htlImgBlock[_ngcontent-%COMP%] {\n    width: 230px;\n    min-width: 230px;\n    outline: none;\n    background-color: #ddd;\n  }\n\n.htlImgBlock2[_ngcontent-%COMP%] {\n    width: 230px;\n    min-width: 230px;\n    outline: none;\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n\n.htlPriceBlock[_ngcontent-%COMP%] {\n    width: 200px;\n    min-width: 200px;\n    display: flex;\n    flex-flow: column;  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvaG90ZWwvcGFydGlhbHMvaG90ZWwtbGlzdC9ob3RlbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQ0FBcUM7RUFDdkM7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9ob3RlbC9wYXJ0aWFscy9ob3RlbC1saXN0L2hvdGVsLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcbiAgICBzdHJva2U6IGJsdWV2aW9sZXQgIWltcG9ydGFudDtcbn1cblxuLmh0bEltZ0Jsb2NrIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgbWluLXdpZHRoOiAyMzBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIH1cbiAgLmh0bEltZ0Jsb2NrMiB7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIG1pbi13aWR0aDogMjMwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG4gIC5odGxQcmljZUJsb2NrIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uOyAgXG4gIH1cbiAgIl19 */"], data: { animation: [
            src_app_animations__WEBPACK_IMPORTED_MODULE_3__["collapseAnimation"]
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HotelListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-hotel-list',
                templateUrl: './hotel-list.component.html',
                styleUrls: ['./hotel-list.component.css'],
                animations: [
                    src_app_animations__WEBPACK_IMPORTED_MODULE_3__["collapseAnimation"]
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_6__["HotelRetrieveService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_8__["ArrayHelperService"] }, { type: src_app_views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"] }, { type: src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_10__["LocalStorage"] }, { type: _services_extra_fees_service__WEBPACK_IMPORTED_MODULE_11__["ExtraFeesService"] }]; }, { search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isHotelListFetching: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isLoadingChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], isHotelListFetchingChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();
class HotelList {
    constructor() {
        this.hotels = [];
        this.notEmptyPost = true;
        this.notscrolly = true;
        this.spinner = false;
        this.retrieveFrom = null;
    }
}


/***/ }),

/***/ "2ddI":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/hotel/services/extra-fees.service.ts ***!
  \******************************************************************/
/*! exports provided: ExtraFeesService, ExtraFeeCalculation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraFeesService", function() { return ExtraFeesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraFeeCalculation", function() { return ExtraFeeCalculation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ExtraFeesService {
    constructor() { }
    calculateTotal(hotelData, offer) {
        if (!hotelData.extraFees || !hotelData.extraFees.length) {
            return 0;
        }
        let total = 0;
        hotelData.extraFees.forEach((val) => {
            total += this.calculateTotalForExtraFee(val, offer);
        });
        return total;
    }
    getDesctiptionWithCalculation(hotelData, offer) {
        if (!hotelData.extraFees || !hotelData.extraFees.length) {
            return [];
        }
        let resultItems = [];
        hotelData.extraFees.forEach((val) => {
            let data = {
                total: this.calculateTotalForExtraFee(val, offer),
                offerPrice: this.offerPrice(offer),
                chargeBasisCoeff: this.chargeBasisCoeff(val, offer),
                chargePeriodCoeff: this.chargePeriodCoeff(val, offer),
                extraFee: val
            };
            data.showCalculation = (val.chargeType == "Percent" || data.chargeBasisCoeff > 1 || data.chargePeriodCoeff > 1);
            resultItems.push(data);
        });
        return resultItems;
    }
    calculateTotalForExtraFee(val, offer) {
        let total = this.chargeAmount(val, offer) *
            this.chargeBasisCoeff(val, offer) *
            this.chargePeriodCoeff(val, offer);
        return total;
    }
    chargeAmount(val, offer) {
        let total = val.chargeAmount;
        if (val.chargeType === "Percent") {
            total = this.offerPrice(offer) * val.chargeAmount / 100;
        }
        return total;
    }
    chargePeriodCoeff(val, offer) {
        let chargePeriodCoeff = 1;
        if (val.chargePeriod === "Per Night") {
            let numberOfDays = Math.floor((new Date(offer.product.roomStay.dateTimeSpan.timeSpan.end).getTime() -
                new Date(offer.product.roomStay.dateTimeSpan.timeSpan.start).getTime()) / (1000 * 60 * 60 * 24));
            chargePeriodCoeff = numberOfDays;
        }
        return chargePeriodCoeff;
    }
    chargeBasisCoeff(val, offer) {
        let chargeBasisCoeff = 1;
        switch (val.chargeBasis) {
            case "By Person":
                let total = 0;
                offer.product.guestCount.forEach((i) => total += i.value);
                chargeBasisCoeff = total;
                break;
            case "By Room":
            case "Per Room":
                chargeBasisCoeff = 1; //TODO: number of rooms seems unsupported yet. offer.product.numberOfRooms shows sometimes strange numbers like 9 rooms for $50 offer
                // TODO: change to when it will be possible
                break;
        }
        return chargeBasisCoeff;
    }
    offerPrice(offer) {
        return offer.totalPrice.productPrice[0].roomRate[0].rate.amountBeforeTax;
    }
}
ExtraFeesService.ɵfac = function ExtraFeesService_Factory(t) { return new (t || ExtraFeesService)(); };
ExtraFeesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExtraFeesService, factory: ExtraFeesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtraFeesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
class ExtraFeeCalculation {
}


/***/ }),

/***/ "9lgk":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/hotel/services/hotel-retrieve.service.ts ***!
  \**********************************************************************/
/*! exports provided: HotelRetrieveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelRetrieveService", function() { return HotelRetrieveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/tenant/tenant */ "lWHP");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/login/login.service */ "0Xdg");



// import { map, catchError } from 'rxjs/operators';






class HotelRetrieveService {
    constructor(httpClient, loginService) {
        this.httpClient = httpClient;
        this.loginService = loginService;
    }
    getHotelFare(hotelOffersQuery) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('access-control-allow-origin', '*')
            .set('api_key', 'c8b129c2e8c53de7adc8e2d1ede8d5d3');
        return this.httpClient.post('https://hotel-api-2445583353637.production.gw.apicast.io:443/api/v2/hotel/offers', hotelOffersQuery, { headers }).pipe(
        // catchError(this.handleError)
        );
    }
    searchCity(cityString) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('input', cityString);
        params = params.append('key', 'AIzaSyAGFsQyzAPZ4hzlfTK8Vi5CIxFCg0SE9UE');
        params = params.append('types', '(cities)');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('access-control-allow-origin', '*');
        return this.httpClient.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=boston&key=AIzaSyAGFsQyzAPZ4hzlfTK8Vi5CIxFCg0SE9UE&types=(cities)', { headers }).pipe(
        // catchError(this.handleError)
        );
    }
    getHotelDescriptions(hotels) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let query = {
                    hotelDescriptionRQArray: hotels.map(i => {
                        return {
                            chainCode: i.basicPropertyInfo.chainCode,
                            brandCode: i.basicPropertyInfo.brandCode,
                            facilityCode: i.basicPropertyInfo.code
                        };
                    })
                };
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('access-control-allow-origin', '*')
                    .set('api_key', 'c8b129c2e8c53de7adc8e2d1ede8d5d3');
                const res = yield this.httpClient.post('https://hotel-api-2445583353637.production.gw.apicast.io:443/api/v2/hotel/description', query, { headers }).pipe(
                // catchError(this.handleError)
                ).toPromise();
                return JSON.parse(JSON.stringify(res));
            }
            catch (ex) {
                throw ex;
            }
        });
    }
    getHotelDescription(hotelQuery) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('access-control-allow-origin', '*')
                .set('api_key', 'c8b129c2e8c53de7adc8e2d1ede8d5d3');
            try {
                let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                params = params.append('chainCode', hotelQuery.chainCode);
                params = params.append('facilityCode', hotelQuery.code);
                if (hotelQuery.brandCode != undefined) {
                    params = params.append('brandCode', hotelQuery.brandCode);
                }
                // const headers = new HttpHeaders().set('access-control-allow-origin', '*')
                // .set('api_key', 'c8b129c2e8c53de7adc8e2d1ede8d5d3');
                const res = yield this.httpClient.get(Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__["getHotelsAPI"])() + 'hotel/description', { params, headers }).pipe(
                // catchError(this.handleError)
                ).toPromise();
                return JSON.parse(JSON.stringify(res));
            }
            catch (ex) {
                throw ex;
            }
        });
    }
    searchHotels(hotelQuery) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('access-control-allow-origin', '*')
            .set('api_key', 'c8b129c2e8c53de7adc8e2d1ede8d5d3');
        return this.httpClient.get('https://hotel-api-2445583353637.production.gw.apicast.io:443/api/v2/hotel?city=' + hotelQuery.city + '&state=FL&country=US&distance=35&distanceunit=M', { headers }).pipe(
        // catchError(this.handleError)
        );
    }
    getAllAirport() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('access-control-allow-origin', '*')
            .set('api_key', 'c8b129c2e8c53de7adc8e2d1ede8d5d3');
        return this.httpClient.get('https://hotel-api-2445583353637.production.gw.apicast.io:443/api/v2/airport/all', { headers }).pipe(
        // catchError(this.handleError)
        );
    }
    // Hotel Image
    isHilton(code) {
        return code.toUpperCase() === 'EH';
    }
    isBW(code) {
        return ['BW', 'UR'].includes(code.toUpperCase());
    }
    getHotelImageURL(chain, facility) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!chain || !facility) {
                return null;
            }
            try {
                let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
                params = params.append('chain_code', chain);
                params = params.append('hotel_code', facility);
                const res = yield this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hotelsImgEndpoint, { params }).pipe(
                // catchError(this.handleError)
                ).toPromise();
                if (typeof res === 'string') {
                    const resObj = JSON.parse(res);
                    if (resObj.Success.toUpperCase() === 'Y') {
                        return resObj.PicUrl || resObj.ThumbUrl;
                    }
                }
                // no image was there
                return null;
            }
            catch (ex) {
                return null;
            }
        });
    }
    getFakePropertyImage(chain) {
        let logoBW = "assets/media/Hotels/images.png";
        let logoHE = "assets/media/Hotels/noImageHilton.png";
        let logoOther = "assets/media/Hotels/images.png";
        return this.isHilton(chain) ? logoHE : (this.isBW(chain) ? logoBW : logoOther);
    }
    getHotelImage(chain, facility) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const img = yield this.getHotelImageURL(chain, facility);
            return img ? this.getFakePropertyImage('XE') : this.getFakePropertyImage(chain);
        });
    }
    handleError(error) {
        console.log(error);
        let errorMessage = {};
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = { code: '-1', Error: `${error.error.message}` };
        }
        else {
            // server-side error
            errorMessage = { code: '-1', status: error.status, Error: error.message };
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
}
HotelRetrieveService.ɵfac = function HotelRetrieveService_Factory(t) { return new (t || HotelRetrieveService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"])); };
HotelRetrieveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HotelRetrieveService, factory: HotelRetrieveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HotelRetrieveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "BuiL":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/hotel/pages/hotel-create-order/hotel-create-order.component.ts ***!
  \********************************************************************************************/
/*! exports provided: HotelCreateOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelCreateOrderComponent", function() { return HotelCreateOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/tenant/tenant */ "lWHP");
/* harmony import */ var _hotel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hotel */ "ZNpG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/storage/local-storage */ "ADqn");
/* harmony import */ var _services_hotel_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/hotel-order.service */ "XddN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var _services_extra_fees_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/extra-fees.service */ "2ddI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/dialog/dialog.component */ "d/rN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _shared_directives_credit_card_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../shared/directives/credit-card.directive */ "GG7F");
/* harmony import */ var _shared_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../shared/directives/only-number.directive */ "2Goh");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");























const _c0 = ["appDialog"];
function HotelCreateOrderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function HotelCreateOrderComponent_div_1_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 109);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.selectedRoom.hotelImageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HotelCreateOrderComponent_div_1_img_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 110);
} }
function HotelCreateOrderComponent_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", ctx_r5.selectedRoom.contactInformation[0].address[0].street, ", ", ctx_r5.selectedRoom.contactInformation[0].address[0].city, ", ", ctx_r5.selectedRoom.contactInformation[0].address[0].stateProv.value || ctx_r5.selectedRoom.contactInformation[0].address[0].stateProv.name, " ", ctx_r5.selectedRoom.contactInformation[0].address[0].country.value || ctx_r5.selectedRoom.contactInformation[0].address[0].country.name, "");
} }
function HotelCreateOrderComponent_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", ctx_r6.selectedRoom.contactInformation[0].address[0].addressLine[0], ", ", ctx_r6.selectedRoom.contactInformation[0].address[0].city, ", ", ctx_r6.selectedRoom.contactInformation[0].address[0].stateProv.value || ctx_r6.selectedRoom.contactInformation[0].address[0].stateProv.name, " ", ctx_r6.selectedRoom.contactInformation[0].address[0].country.value || ctx_r6.selectedRoom.contactInformation[0].address[0].country.name, "");
} }
function HotelCreateOrderComponent_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.selectedRoom.relativePosition.distance, " Miles From City Center");
} }
function HotelCreateOrderComponent_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r9.selectedRoom.dateTimeSpan.start, "mediumDate"), " - ", ctx_r9.selectedRoom.hotelPolicies.hotelPolicy[0].hotelPolicyInformation.validCheckInTime, "");
} }
function HotelCreateOrderComponent_div_1_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r10.selectedRoom.dateTimeSpan.start, "mediumDate"));
} }
function HotelCreateOrderComponent_div_1_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r11.selectedRoom.dateTimeSpan.end, "mediumDate"), " - ", ctx_r11.selectedRoom.hotelPolicies.hotelPolicy[0].hotelPolicyInformation.validCheckOutTime, "");
} }
function HotelCreateOrderComponent_div_1_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r12.selectedRoom.dateTimeSpan.end, "mediumDate"));
} }
function HotelCreateOrderComponent_div_1_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r52 = ctx.dataIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Room-", i_r52 + 1, " ");
} }
function HotelCreateOrderComponent_div_1_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r53.product.roomName), " ");
} }
function HotelCreateOrderComponent_div_1_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rate ($) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r54.productPrice.roomRate[0].rate.amountBeforeTax, "1.2-2"), " ");
} }
function HotelCreateOrderComponent_div_1_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tax ($) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r55.productPrice.roomRate[0].taxes.total.value, "1.2-2"), " ");
} }
function HotelCreateOrderComponent_div_1_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fees ($) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_td_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 0.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_th_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total ($) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r57.productPrice.roomRate[0].rate.value, "1.2-2"), " ");
} }
function HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tax excl.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tax incl.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const extraFeeCalculation_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, extraFeeCalculation_r60.offerPrice, "1.2-2"), " x ", extraFeeCalculation_r60.extraFee.chargeAmount, "% ");
} }
function HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const extraFeeCalculation_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, extraFeeCalculation_r60.extraFee.chargeAmount, "1.2-2"), " ");
} }
function HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_ng_container_4_ng_container_2_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_ng_container_4_ng_container_3_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const extraFeeCalculation_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" x ", extraFeeCalculation_r60.chargeBasisCoeff, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extraFeeCalculation_r60.extraFee.chargeBasis === "By Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extraFeeCalculation_r60.extraFee.chargeBasis === "By Room" || extraFeeCalculation_r60.extraFee.chargeBasis === "Per Room");
} }
function HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const extraFeeCalculation_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" x ", extraFeeCalculation_r60.chargePeriodCoeff, " nights ");
} }
function HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_ng_container_2_Template, 3, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_ng_container_3_Template, 3, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_ng_container_4_Template, 4, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_ng_container_5_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const extraFeeCalculation_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extraFeeCalculation_r60.extraFee.chargeType === "Percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extraFeeCalculation_r60.extraFee.chargeType === "Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extraFeeCalculation_r60.chargeBasisCoeff > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extraFeeCalculation_r60.extraFee.chargePeriod === "Per Night" && extraFeeCalculation_r60.chargePeriodCoeff > 1);
} }
function HotelCreateOrderComponent_div_1_td_73_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_5_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_6_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HotelCreateOrderComponent_div_1_td_73_div_1_ng_container_7_Template, 7, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extraFeeCalculation_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, extraFeeCalculation_r60.total, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extraFeeCalculation_r60.extraFee.chargeTaxable === "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extraFeeCalculation_r60.extraFee.chargeTaxable === "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extraFeeCalculation_r60.showCalculation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", extraFeeCalculation_r60.extraFee.details, " ");
} }
function HotelCreateOrderComponent_div_1_td_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HotelCreateOrderComponent_div_1_td_73_div_1_Template, 9, 8, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r58 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r25.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.extraFeeDesctiptionWithCalculation(ctx_r25.selectedRoom, element_r58));
} }
function HotelCreateOrderComponent_div_1_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 120);
} }
function HotelCreateOrderComponent_div_1_tr_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 121);
} }
function HotelCreateOrderComponent_div_1_tr_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 122);
} }
function HotelCreateOrderComponent_div_1_mat_error_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_error_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_error_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_error_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "City is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_select_117_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r78.shortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r78.fullName);
} }
function HotelCreateOrderComponent_div_1_mat_select_117_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HotelCreateOrderComponent_div_1_mat_select_117_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.onStateKey($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HotelCreateOrderComponent_div_1_mat_select_117_mat_option_2_Template, 2, 2, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.selectedStates);
} }
function HotelCreateOrderComponent_div_1_input_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 126);
} }
function HotelCreateOrderComponent_div_1_mat_error_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "State is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_error_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zip Code is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_option_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r81.countryCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r81.fullName);
} }
function HotelCreateOrderComponent_div_1_mat_error_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Country is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_error_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_div_146_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_div_146_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_div_146_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", number_r88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", number_r88, " ");
} }
function HotelCreateOrderComponent_div_1_div_146_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Number of Occupants is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_div_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First Name Of Occupant for Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HotelCreateOrderComponent_div_1_div_146_mat_error_13_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name Of Occupant for Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HotelCreateOrderComponent_div_1_div_146_mat_error_19_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "No. of Occupants for Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HotelCreateOrderComponent_div_1_div_146_mat_option_25_Template, 2, 2, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HotelCreateOrderComponent_div_1_div_146_mat_error_26_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r83 = ctx.index;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Occupant for Room-", i_r83 + 1, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.roomOccupantFG.get("GivenName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.roomOccupantFG.get("Surname").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.roomOccupantFG.get("count").hasError("required"));
} }
function HotelCreateOrderComponent_div_1_mat_option_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r89.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r89.name, " ");
} }
function HotelCreateOrderComponent_div_1_mat_error_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose Credit Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_error_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name on Card is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_error_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Credit Card Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_error_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Security Code is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_option_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r90 = ctx.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r46.isMonthDisable(m_r90))("value", m_r90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r90, " ");
} }
function HotelCreateOrderComponent_div_1_mat_error_187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_option_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", y_r91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r91, " ");
} }
function HotelCreateOrderComponent_div_1_mat_error_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelCreateOrderComponent_div_1_mat_error_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please agree with terms and conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["extraFees"]; };
function HotelCreateOrderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Booking Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Review Fare and provide booking details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HotelCreateOrderComponent_div_1_img_16_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HotelCreateOrderComponent_div_1_img_17_Template, 1, 0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HotelCreateOrderComponent_div_1_div_22_Template, 2, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HotelCreateOrderComponent_div_1_div_23_Template, 2, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HotelCreateOrderComponent_div_1_div_26_Template, 5, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HotelCreateOrderComponent_div_1_div_27_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HotelCreateOrderComponent_div_1_span_41_Template, 3, 5, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HotelCreateOrderComponent_div_1_span_42_Template, 3, 4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HotelCreateOrderComponent_div_1_span_45_Template, 3, 5, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HotelCreateOrderComponent_div_1_span_46_Template, 3, 4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, HotelCreateOrderComponent_div_1_th_55_Template, 2, 0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HotelCreateOrderComponent_div_1_td_56_Template, 2, 1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, HotelCreateOrderComponent_div_1_th_58_Template, 2, 0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, HotelCreateOrderComponent_div_1_td_59_Template, 3, 3, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, HotelCreateOrderComponent_div_1_th_61_Template, 2, 0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, HotelCreateOrderComponent_div_1_td_62_Template, 3, 4, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, HotelCreateOrderComponent_div_1_th_64_Template, 2, 0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, HotelCreateOrderComponent_div_1_td_65_Template, 3, 4, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](66, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HotelCreateOrderComponent_div_1_th_67_Template, 2, 0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, HotelCreateOrderComponent_div_1_td_68_Template, 2, 0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](69, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, HotelCreateOrderComponent_div_1_th_70_Template, 2, 0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, HotelCreateOrderComponent_div_1_td_71_Template, 3, 4, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](72, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, HotelCreateOrderComponent_div_1_td_73_Template, 2, 2, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, HotelCreateOrderComponent_div_1_tr_74_Template, 1, 0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, HotelCreateOrderComponent_div_1_tr_75_Template, 1, 0, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, HotelCreateOrderComponent_div_1_tr_76_Template, 1, 0, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "form", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Payment Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HotelCreateOrderComponent_div_1_Template_input_change_88_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.changeFirstName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, HotelCreateOrderComponent_div_1_mat_error_89_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HotelCreateOrderComponent_div_1_Template_input_change_94_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.changeSurname(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, HotelCreateOrderComponent_div_1_mat_error_95_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, HotelCreateOrderComponent_div_1_mat_error_101_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, HotelCreateOrderComponent_div_1_mat_error_112_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, HotelCreateOrderComponent_div_1_mat_select_117_Template, 3, 1, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, HotelCreateOrderComponent_div_1_input_118_Template, 1, 0, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, HotelCreateOrderComponent_div_1_mat_error_119_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Zip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, HotelCreateOrderComponent_div_1_mat_error_125_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HotelCreateOrderComponent_div_1_Template_input_keyup_131_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.onCountryKey($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, HotelCreateOrderComponent_div_1_mat_option_132_Template, 2, 2, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, HotelCreateOrderComponent_div_1_mat_error_133_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, HotelCreateOrderComponent_div_1_mat_error_139_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "form", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, HotelCreateOrderComponent_div_1_div_146_Template, 27, 6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "form", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Payment Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "mat-form-field", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Credit Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-select", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, HotelCreateOrderComponent_div_1_mat_option_159_Template, 2, 2, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](160, HotelCreateOrderComponent_div_1_mat_error_160_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Name on Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](167, HotelCreateOrderComponent_div_1_mat_error_167_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Credit Card Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](174, HotelCreateOrderComponent_div_1_mat_error_174_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Security Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](180, HotelCreateOrderComponent_div_1_mat_error_180_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Exp Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](186, HotelCreateOrderComponent_div_1_mat_option_186_Template, 2, 3, "mat-option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](187, HotelCreateOrderComponent_div_1_mat_error_187_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Exp Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "mat-select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function HotelCreateOrderComponent_div_1_Template_mat_select_selectionChange_192_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.yearChange($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](193, HotelCreateOrderComponent_div_1_mat_option_193_Template, 2, 2, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](194, HotelCreateOrderComponent_div_1_mat_error_194_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " By checking this box I hereby agree to the terms and conditions set forth. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](202, HotelCreateOrderComponent_div_1_mat_error_202_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotelCreateOrderComponent_div_1_Template_button_click_205_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.showDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotelCreateOrderComponent_div_1_Template_button_click_207_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.bookRoom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Book Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Fare Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Total Room Charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](221, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Total Taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](228, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Total Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](235, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](241, "number");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedRoom.hotelImageURL != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedRoom.hotelImageURL === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedRoom.basicPropertyInfo.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedRoom.contactInformation[0].address[0].addressLine.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedRoom.contactInformation[0].address[0].addressLine.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedRoom.relativePosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.selectedRoom.relativePosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatPhoneNumber(ctx_r1.selectedRoom.contactInformation[0].telephone[0].phoneNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.searchCriteria.rooms, " Rooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedRoom.hotelPolicies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.selectedRoom.hotelPolicies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedRoom.hotelPolicies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.selectedRoom.hotelPolicies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedRoom.rooms[0].termsAndConditions[0].cancelPenalties[0].description[0].text[0].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r1.selectedRoom.rooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.passengerFG);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.passengerFG.get("GivenName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.passengerFG.get("Surname").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.passengerFG.get("Email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.passengerFG.get("City").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedStates.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedStates.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.passengerFG.get("State").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.passengerFG.get("Zip").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.selectedCountries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.passengerFG.get("Country").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.passengerFG.get("Phone").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.roomOccupantAFG);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.roomOccupantAFG.get("roomOccupants")["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.creditCardFG);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cardTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("CreditType").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("NameonCard").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("CreditCardNumber").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("SecurityCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.monthArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("ExpMonth").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.yearArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("ExpYear").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("termsAndConditions").hasError("required") && ctx_r1.creditCardFG.get("termsAndConditions").dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](221, 47, ctx_r1.totalRoomCharges, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](228, 50, ctx_r1.totalTaxes, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](235, 53, ctx_r1.totalFees, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](241, 56, ctx_r1.totalAmount, "1.2-2"), "");
} }
class HotelCreateOrderComponent extends _hotel__WEBPACK_IMPORTED_MODULE_3__["Hotel"] {
    constructor(router, loginService, localStorage, hotelOrderService, _snackBar, dialogService, cdRef, extraFeesService) {
        super(loginService);
        this.router = router;
        this.localStorage = localStorage;
        this.hotelOrderService = hotelOrderService;
        this._snackBar = _snackBar;
        this.dialogService = dialogService;
        this.cdRef = cdRef;
        this.extraFeesService = extraFeesService;
        this.selectedRoom = {};
        this.searchCriteria = {};
        this.query = {
            "createOrderRQ": [
                {
                    "payloadStdAttributes": {
                        "target": Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_2__["getReservationType"])(),
                        "version": 5.000,
                        "transactionStatusCode": "START",
                        "retransmissionIndicatorInd": false
                    },
                    "order": {
                        "offer": [],
                        "primaryTraveler": {
                            "personName": {
                                "given": [
                                    ""
                                ],
                                "surname": ""
                            },
                            "address": [
                                {
                                    "addressLine": [
                                        ""
                                    ],
                                    "city": "",
                                    "stateProv": {
                                        "value": ""
                                    },
                                    "country": {
                                        "value": ""
                                    },
                                    "postalCode": "",
                                    "extensionPointDetail": {
                                        "any": [
                                            {
                                                "addressType": "business",
                                                "company": "HILTON"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "telephone": [
                                {
                                    "phoneNumber": "",
                                    "remark": "business"
                                }
                            ],
                            "email": [
                                {
                                    "address": "",
                                    "remark": "business"
                                }
                            ]
                        },
                        "payment": []
                    }
                }
            ]
        };
        this.displayedColumns = ['Item', 'Description', 'Rate', 'Tax', 'Fees', 'Total'];
        this.passengerFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            GivenName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            City: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            State: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.roomOccupantAFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            roomOccupants: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
        this.roomOccupantFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            GivenName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            count: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.creditCardFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            CreditType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            CreditCardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            SecurityCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ExpMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ExpYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            NameonCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            termsAndConditions: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue)
        });
        this.isSubmitted = false;
        this.totalRoomCharges = 0;
        this.totalTaxes = 0;
        this.totalFees = 0;
        this.totalAmount = 0;
        this.maxDate = new Date();
        this.paymentType = this.paymentTypes[0];
        this.isLoading = false;
        this.selectedStates = [];
        this.selectedCountries = [];
        document.body.style.backgroundSize = "100% 165px";
        const selectedRoomTxt = this.localStorage.getItem('selectedRoom');
        const searchCriteriaTxt = this.localStorage.getItem('hotelSearchFormGroup');
        if (selectedRoomTxt != null && searchCriteriaTxt != null) {
            this.selectedRoom = JSON.parse(selectedRoomTxt);
            this.searchCriteria = JSON.parse(searchCriteriaTxt);
            console.log(this.searchCriteria.rooms);
            for (let index = 1; index <= this.searchCriteria.rooms; index++) {
                this.addItem(index, this.searchCriteria);
            }
            const amount = this.getFares(this.selectedRoom.rooms);
            this.totalRoomCharges = amount.totalRoomCharges;
            this.totalTaxes = amount.totalTaxes;
            this.totalFees = amount.totalFees;
            this.totalAmount = amount.totalAmount;
        }
        else {
            this.router.navigateByUrl('/Hotels/Search');
        }
    }
    ngOnInit() {
        this.selectedCountries = this.countries;
        this.passengerFG.controls.Country.setValue(this.countries[0].countryCode);
        this.selectedStates = this.states.filter(state => state.countryCode === this.countries[0].countryCode);
        this.passengerFG.get('Country').valueChanges.subscribe((country) => {
            if (country) {
                this.selectedStates = this.states.filter(state => state.countryCode === country);
                this.passengerFG.controls.State.setValue('');
            }
        });
    }
    ngAfterViewInit() {
        this.dialogService.register(this.appDialog, "Alert", "Do you want to cancel the Hotel Booking?");
        this.cdRef.detectChanges();
    }
    extraFeeDesctiptionWithCalculation(hotelData, offer) {
        return this.extraFeesService.getDesctiptionWithCalculation(hotelData, offer);
    }
    onStateKey(value) {
        this.selectedStates = this.stateSearch(value);
    }
    onCountryKey(value) {
        this.selectedCountries = this.countrySearch(value);
    }
    createItem(index, searchCriteria) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Index: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](index, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            GivenName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            count: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](searchCriteria.count, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    addItem(index, searchCriteria) {
        this.roomOccupantsArr = this.roomOccupantAFG.get('roomOccupants');
        this.roomOccupantsArr.push(this.createItem(index, searchCriteria));
    }
    isMonthDisable(month) {
        if (this.creditCardFG.value.ExpYear == new Date().getFullYear()) {
            if (new Date().getMonth() >= Number(month)) {
                return true;
            }
        }
        return false;
    }
    changeFirstName() {
        let json = this.roomOccupantAFG.value;
        json.roomOccupants[0].GivenName = this.passengerFG.value.GivenName;
        this.roomOccupantAFG.patchValue(json);
        console.log('firstName: ' + this.passengerFG.value.GivenName);
    }
    changeSurname() {
        let json = this.roomOccupantAFG.value;
        json.roomOccupants[0].Surname = this.passengerFG.value.Surname;
        this.roomOccupantAFG.patchValue(json);
    }
    showDialog() {
        this.dialogService.show()
            .then((res) => {
            console.log('ok clicked');
            this.cancel();
        })
            .catch((err) => {
            console.log('cancel clicked');
        });
    }
    cancel() {
        this.localStorage.removeItem('selectedRoom');
        this.router.navigateByUrl('/Hotels/Search');
    }
    bookRoom() {
        this.isSubmitted = true;
        if (this.passengerFG.valid && this.roomOccupantAFG.valid && this.creditCardFG.valid) {
            console.log('valid');
            this.isLoading = true;
            this.prepareQuery();
            //console.log(JSON.stringify(this.query));
            this.hotelOrderService.createOrder(this.query).subscribe((data) => {
                this.isLoading = false;
                if (data != null && data.createOrderRS && data.createOrderRS[0].result != null && data.createOrderRS[0].result.errors != null
                    && data.createOrderRS[0].result.errors.length > 0) {
                    let errorMessage = '';
                    for (let error of data.createOrderRS[0].result.errors) {
                        if (error.shortText || error.value) {
                            errorMessage = errorMessage + (error.shortText || error.value);
                        }
                    }
                    if (errorMessage == '') {
                        errorMessage = data.createOrderRS[0].result.status.value;
                    }
                    console.log('createOrder error');
                    console.log(errorMessage);
                    this._snackBar.open(errorMessage, "OK");
                }
                else {
                    console.log('createOrder success');
                    console.log(data);
                    if (data != null && data.createOrderRS && data.createOrderRS[0] != null && data.createOrderRS[0].result != null && data.createOrderRS[0].result.status != null
                        && data.createOrderRS[0].result.status.value == 'COMPLETE'
                        && (data.createOrderRS[0].result.errors != null && data.createOrderRS[0].result.errors.length == 0)) {
                        if (data.createOrderRS[0].order != {} && data.createOrderRS[0].order.confirmationID != null) {
                            // this._snackBar.open("Order Id:" + data.response.order.orderID, "OK");
                            console.log(data.createOrderRS[0].order.confirmationID);
                            let confirmationID = data.createOrderRS[0].order.confirmationID.value;
                            let surname = data.createOrderRS[0].order.primaryTraveler.personName.surname;
                            let chainCode = data.createOrderRS[0].order.offer[0].facilityIdentifier.facilityKey.chainCode;
                            //this.router.navigateByUrl('/Hotels/Orders');
                            //this.router.navigateByUrl('/');
                            this.router.navigateByUrl('/Hotels/Status/' + confirmationID + '/' + chainCode + '/' + surname);
                        }
                    }
                }
            }, error => {
                this.isLoading = false;
                let errorMessage = '';
                if (error.Error.extensionPoint) {
                    errorMessage = error.Error.extensionPoint.any[0].errors[0].notifications[0].message;
                }
                else {
                    errorMessage = 'Booking Failed';
                }
                this._snackBar.open(errorMessage, "OK");
            });
        }
        else {
            this.passengerFG.markAllAsTouched();
            this.roomOccupantAFG.markAllAsTouched();
            this.creditCardFG.markAllAsTouched();
            this.creditCardFG.get('termsAndConditions').markAsDirty();
        }
    }
    prepareQuery() {
        this.query.createOrderRQ[0].order.payment = [];
        const room = this.selectedRoom.rooms[0];
        let startDate = this.selectedRoom.dateTimeSpan.start;
        let endDate = this.selectedRoom.dateTimeSpan.end;
        let offer = {
            "product": [
                {
                    "@type": "ProductHospitality",
                    "roomStay": {
                        "roomType": {
                            "code": {
                                "value": room.product.roomStay.roomType.code.value
                            }
                        },
                        "ratePlan": {
                            "ratePlanCode": {
                                "value": room.product.roomStay.ratePlan.ratePlanCode.value
                            },
                            "ratePlanName": room.product.roomStay.ratePlan.ratePlanName
                        },
                        "extensionPoint": {
                            "any": [
                                {
                                    "bookingCode": room.product.roomStay.extensionPoint && room.product.roomStay.extensionPoint.any[0].bookingCode || ''
                                }
                            ]
                        }
                    },
                    "guestCount": [
                        {
                            "ageQualifyingCode": "ADULT",
                            "value": this.roomOccupantAFG.value.roomOccupants[0].count
                        }
                    ],
                    "dateTimeSpan": {
                        "timeSpan": {
                            "start": startDate,
                            "end": endDate
                        }
                    }
                }
            ],
            "facilityIdentifier": {
                "@type": "FacilityHotel",
                "facilityKey": {
                    "@type": "FacilityKeyHotel",
                    "facilityCode": room.facilityIdentifier.facilityKey.facilityCode,
                    "chainCode": room.facilityIdentifier.facilityKey.chainCode,
                    "brandCode": room.facilityIdentifier.facilityKey.brandCode
                }
            },
            "extensionPoint": room.extensionPoint
        };
        this.query.createOrderRQ[0].order.offer = [];
        this.query.createOrderRQ[0].order.offer.push(offer);
        let passengerFGValue = this.passengerFG.value;
        let passenger = {
            "personName": {
                "given": [
                    passengerFGValue.GivenName
                ],
                "surname": passengerFGValue.Surname
            },
            "address": [
                {
                    "addressLine": passengerFGValue.Address ? [passengerFGValue.Address] : [],
                    "city": passengerFGValue.City,
                    "stateProv": {
                        "value": passengerFGValue.State
                    },
                    "country": {
                        "value": passengerFGValue.Country
                    },
                    "postalCode": passengerFGValue.Zip,
                    "extensionPointDetail": {
                        "any": [
                            {
                                "addressType": "business",
                                "company": "HILTON"
                            }
                        ]
                    }
                }
            ],
            "telephone": [
                {
                    "phoneNumber": passengerFGValue.Phone,
                    "remark": "business"
                }
            ],
            "email": [
                {
                    "address": passengerFGValue.Email,
                    "remark": "business"
                }
            ]
        };
        this.query.createOrderRQ[0].order.primaryTraveler = passenger;
        let creditCardFGValue = this.creditCardFG.value;
        let payment = {
            "formOfPayment": {
                "paymentCard": {
                    "cardCode": creditCardFGValue.CreditType,
                    "cardHolderName": creditCardFGValue.NameonCard,
                    "cardNumber": {
                        "plainText": creditCardFGValue.CreditCardNumber.replace(/ /g, '')
                    },
                    "seriesCode": {
                        "plainText": creditCardFGValue.SecurityCode
                    },
                    "expireDate": creditCardFGValue.ExpMonth + (creditCardFGValue.ExpYear + "").substring(2, 4)
                },
                "guaranteeTypeCode": room.guaranteeTypeCode || {
                    "value": "CREDIT_CARD"
                }
            }
        };
        this.query.createOrderRQ[0].order.payment.push(payment);
    }
    //   const contactValue = this.contactFG.value;
    //   let contactProvidedEmail = {
    //     EmailAddress: {
    //       EmailAddressValue: contactValue.EmailAddressValue
    //     }
    //   };
    //   let contactProvidedPhone = {
    //     Phone: {
    //       Label: contactValue.Label,
    //       CountryDialingCode: contactValue.CountryDialingCode,
    //       AreaCode: contactValue.AreaCode,
    //       PhoneNumber: contactValue.PhoneNumber
    //     }
    //   };
    //   this.query.Query.DataLists.ContactList.ContactInformation.ContactProvided = [];
    //   this.query.Query.DataLists.ContactList.ContactInformation.ContactProvided.push(contactProvidedEmail);
    //   this.query.Query.DataLists.ContactList.ContactInformation.ContactProvided.push(contactProvidedPhone);
    //   /*this.hotelOrderService.gerOrderById('AA0018281EC52').subscribe((data: any) => {
    //     console.log('gerOrderById');
    //     console.log(data)
    //   });*/
    //   /*this.hotelOrderService.createOrder(this.query).subscribe((data: any) => {
    //     if(data.errors!= null && data.errors.error!= null) {
    //       console.log('createOrder error');
    //       console.log(data.errors.error.text);
    //     } else {
    //       console.log('createOrder success');
    //       console.log(data);
    //     }
    //   });*/
    // }
    yearChange(event) {
        let date = new Date();
        if (event == date.getFullYear()) {
            let json = this.creditCardFG.value;
            if (json.ExpMonth == null || date.getMonth() >= Number(json.ExpMonth)) {
                const month = date.getMonth() + 1;
                json.ExpMonth = month <= 9 ? "0" + month : "" + month;
                this.creditCardFG.patchValue(json);
            }
        }
    }
}
HotelCreateOrderComponent.ɵfac = function HotelCreateOrderComponent_Factory(t) { return new (t || HotelCreateOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hotel_order_service__WEBPACK_IMPORTED_MODULE_7__["HotelOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_extra_fees_service__WEBPACK_IMPORTED_MODULE_10__["ExtraFeesService"])); };
HotelCreateOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotelCreateOrderComponent, selectors: [["app-hotel-create-order"]], viewQuery: function HotelCreateOrderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appDialog = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[4, "ngIf"], ["class", "d-flex flex-column-fluid", 4, "ngIf"], ["appDialog", ""], [1, "spinner", 3, "diameter"], [1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "gutter-b"], [1, "brdSmallBlock_inner", "pt-4", "flex-column"], [1, "text-white", "pl-2", "opacity-70"], [1, "text-white-50", "pl-2"], [1, "row", "gutter-b"], [1, "col-9"], [1, "card", "card-custom", "mb-3"], [1, "card-body", "p-0"], [1, "d-flex"], [1, "htlImgBlock", "d-flex", "align-items-center", "justify-content-center"], ["class", "w-100", "style", "height: 183px;", 3, "src", 4, "ngIf"], ["class", "w-100", "src", "assets/media/Hotels/noImageBW.png", "style", "height: 183px;", 4, "ngIf"], [1, "d-flex", "flex-lg-fill", "border-right"], [1, "d-flex", "flex-column", "flex-wrap", "p-5", "w-100"], [1, "mb-1"], ["class", "text-muted font-size-lg font-weight-bold", 4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "pr-2"], ["class", "d-block pt-4", 4, "ngIf"], [1, "d-block", "pt-3"], [1, "btn", "btn-icon", "btn-outline-secondary", "btn-circle", "btn-xs", "mr-2"], [1, "fas", "fa-phone-alt", "icon-1x", "opacity-50"], [1, "font-size-lg"], [1, "mr-10"], [1, "d-block", "pt-4"], [1, "fas", "fa-house-user", "text-primary", "pr-1"], [1, "d-flex", "pt-4"], [1, "fas", "fa-door-open", "text-success", "pr-1"], ["class", "font-size-lg", 4, "ngIf"], [1, "ml-4"], [1, "fas", "fa-door-closed", "text-danger", "pr-1"], [1, "fas", "fa-slash", "icon-1x", "opacity-50"], ["mat-table", "", "multiTemplateDataRows", "", 1, "table", "table-checkable", 3, "dataSource"], ["matColumnDef", "Item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Description"], ["matColumnDef", "Rate"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["matColumnDef", "Tax"], ["matColumnDef", "Fees"], ["matColumnDef", "Total"], ["matColumnDef", "extraFees"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "multiple-row-first", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "multiple-row-last", 4, "matRowDef", "matRowDefColumns"], [1, "card", "card-custom", 3, "formGroup"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "row", "mt-2"], [1, "col-4", "form-group"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "GivenName", "placeholder", "Enter First Name", "required", "", 3, "change"], ["matInput", "", "formControlName", "Surname", "placeholder", "Enter Last Name", "required", "", 3, "change"], ["matInput", "", "formControlName", "Email", "placeholder", "Enter Email", "required", ""], ["matInput", "", "formControlName", "Address", "placeholder", "Enter Address"], ["matInput", "", "formControlName", "City", "placeholder", "Enter City", "required", ""], ["formControlName", "State", "placeholder", "Enter State", "required", "", 4, "ngIf"], ["matInput", "", "formControlName", "State", "placeholder", "Enter State (Abbreviations Only)", "required", "", 4, "ngIf"], ["matInput", "", "formControlName", "Zip", "placeholder", "Enter Zip", "required", ""], ["formControlName", "Country", "placeholder", "Enter Country", "required", ""], ["appearance", "outline", 1, "form-group", "w-100", "p-2", "pl-4", 3, "keyup"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "Phone", "placeholder", "Enter Phone Number", "maxlength", "13", "required", ""], [1, "col-8", "form-group"], ["matInput", "", "formControlName", "Comments", "placeholder", "Enter Comments"], [1, "card", "card-custom", "mt-3", 3, "formGroup"], ["formArrayName", "roomOccupants", 4, "ngFor", "ngForOf"], [1, "col-6", "form-group"], ["appearance", "outline"], ["formControlName", "CreditType", "required", ""], [1, "col-6"], ["matInput", "", "formControlName", "NameonCard", "placeholder", "Enter Name Credit Card", "required", ""], ["matInput", "", "appCreditCard", "", "autocomplete", "off", "formControlName", "CreditCardNumber", "placeholder", "Enter Credit Card Number", "required", ""], [1, "col-2", "form-group"], ["matInput", "", "appOnlyNumber", "", "formControlName", "SecurityCode", "maxlength", "3", "placeholder", "Enter Security Code", "required", ""], ["formControlName", "ExpMonth", "required", ""], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["formControlName", "ExpYear", "required", "", 3, "selectionChange"], [1, "col-12", "form-group"], [1, "checkbox-list"], [1, "checkbox"], ["type", "checkbox", "formControlName", "termsAndConditions", "name", "Checkboxes1", "required", ""], [1, "row", "mt-4", "align-items-end"], [1, "col-12", "ml-lg-auto", "text-right"], ["type", "button", "title", "Booking Cancel", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "ml-2", 3, "click"], [1, "col-3"], [1, "card", "card-custom"], [1, "d-flex", "pt-3", "justify-content-around"], [1, "col-7", "font-size-lg", "text-left"], [1, "col-5", "font-size-lg", "font-weight-bold", "text-right"], [1, "separator", "separator-dashed", "pt-3", "mb-3"], [1, "d-flex", "justify-content-around"], [1, "d-flex", "pb-3", "justify-content-around"], [1, "d-flex", "border-top", "border-2", "pt-2", "pb-2", "justify-content-around"], [1, "col-6", "text-left", "font-size-h4"], [1, "col-6", "text-right", "font-weight-bold", "font-size-h3"], [1, "w-100", 2, "height", "183px", 3, "src"], ["src", "assets/media/Hotels/noImageBW.png", 1, "w-100", 2, "height", "183px"], [1, "text-muted", "font-size-lg", "font-weight-bold"], [1, "fas", "fa-map-marker-alt", "opacity-50"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right"], ["class", "text-muted font-size-sm", 4, "ngFor", "ngForOf"], [1, "text-muted", "font-size-sm"], [1, "fa", "fa-sm", "fa-certificate"], ["mat-header-row", ""], ["mat-row", "", 1, "multiple-row-first"], ["mat-row", "", 1, "multiple-row-last"], ["formControlName", "State", "placeholder", "Enter State", "required", ""], [1, "form-group", "w-100", "p-2", "pl-4", 3, "keyup"], [3, "value"], ["matInput", "", "formControlName", "State", "placeholder", "Enter State (Abbreviations Only)", "required", ""], ["formArrayName", "roomOccupants"], [1, "card", "card-custom", "mb-3", 3, "formGroupName"], ["matInput", "", "formControlName", "GivenName", "placeholder", "Enter First Name Of Occupant", "required", ""], ["matInput", "", "formControlName", "Surname", "placeholder", "Enter Last Name Of Occupant", "required", ""], ["placeholder", "Enter No. of Occupants", "formControlName", "count", "required", ""], [3, "disabled", "value"]], template: function HotelCreateOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HotelCreateOrderComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HotelCreateOrderComponent_div_1_Template, 242, 60, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-dialog", null, 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.selectedRoom != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRowDef"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _shared_directives_credit_card_directive__WEBPACK_IMPORTED_MODULE_18__["CreditCardDirective"], _shared_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_19__["OnlyNumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxRequiredValidator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["TitleCasePipe"]], styles: [".form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0rem;\n}\n.mat-radio-button[_ngcontent-%COMP%] {\n    margin-right: 1.25rem;\n}\n.mat-input-element[_ngcontent-%COMP%], .mat-select-value[_ngcontent-%COMP%], .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-infix {\n    padding: 0.5em 0 0.7em 0;\n}\n[_nghost-%COMP%]     .mat-form-field-subscript-wrapper {\n    font-size: 60%; top: calc(100% - 2.5em);\n}\n[_nghost-%COMP%]     .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n    border-color: #3f51b5;\n}\n[_nghost-%COMP%]     .mat-radio-button.mat-accent .mat-radio-inner-circle {\n    background-color: #3f51b5;\n}\n[_nghost-%COMP%]     .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n    background-color:#3f51b5;\n}\n[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n    opacity: 0.03 !important;\n    background-color: #3f51b5!important;\n}\n[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n    background-color: #3f51b5;\n}\n.htlImgBlock[_ngcontent-%COMP%] {\n    width: 230px;\n    min-width: 230px;\n    outline: none;\n    background-color: #ddd;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-top: 0.75rem;\n}\n.table[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n}\ntr.multiple-row-first[_ngcontent-%COMP%]{\n    height: auto;\n}\ntr.multiple-row-first[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\n    border-bottom: 0px none;\n}\n.multiple-row-last[_ngcontent-%COMP%]{\n    height: auto;\n}\ntr.multiple-row-last[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\n    border-top: 0px none;\n    padding-top: 0;\n    padding-bottom: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvaG90ZWwvcGFnZXMvaG90ZWwtY3JlYXRlLW9yZGVyL2hvdGVsLWNyZWF0ZS1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxjQUFjLEVBQUUsdUJBQXVCO0FBQzNDO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9ob3RlbC9wYWdlcy9ob3RlbC1jcmVhdGUtb3JkZXIvaG90ZWwtY3JlYXRlLW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XG59XG4ubWF0LWlucHV0LWVsZW1lbnQsIC5tYXQtc2VsZWN0LXZhbHVlLCAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAwLjVlbSAwIDAuN2VtIDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6IDYwJTsgdG9wOiBjYWxjKDEwMCUgLSAyLjVlbSk7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgb3BhY2l0eTogMC4wMyAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjUhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG5cbi5odGxJbWdCbG9jayB7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIG1pbi13aWR0aDogMjMwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLnRhYmxlIHRkIHtcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbn1cbi50YWJsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG50ci5tdWx0aXBsZS1yb3ctZmlyc3R7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxudHIubXVsdGlwbGUtcm93LWZpcnN0IHRke1xuICAgIGJvcmRlci1ib3R0b206IDBweCBub25lO1xufVxuLm11bHRpcGxlLXJvdy1sYXN0e1xuICAgIGhlaWdodDogYXV0bztcbn1cblxudHIubXVsdGlwbGUtcm93LWxhc3QgdGR7XG4gICAgYm9yZGVyLXRvcDogMHB4IG5vbmU7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelCreateOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hotel-create-order',
                templateUrl: './hotel-create-order.component.html',
                styleUrls: ['./hotel-create-order.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }, { type: src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"] }, { type: _services_hotel_order_service__WEBPACK_IMPORTED_MODULE_7__["HotelOrderService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }, { type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_extra_fees_service__WEBPACK_IMPORTED_MODULE_10__["ExtraFeesService"] }]; }, { appDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['appDialog']
        }] }); })();


/***/ }),

/***/ "JDc1":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/hotel/partials/hotel-item/hotel-item.ts ***!
  \*********************************************************************/
/*! exports provided: HotelItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelItem", function() { return HotelItem; });
/* harmony import */ var _hotel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hotel */ "ZNpG");

class HotelItem extends _hotel__WEBPACK_IMPORTED_MODULE_0__["Hotel"] {
    constructor(router, loginService) {
        super(loginService);
        this.router = router;
    }
}


/***/ }),

/***/ "XddN":
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/hotel/services/hotel-order.service.ts ***!
  \*******************************************************************/
/*! exports provided: HotelOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelOrderService", function() { return HotelOrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/tenant/tenant */ "lWHP");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/login/login.service */ "0Xdg");


// import { catchError } from 'rxjs/operators';





class HotelOrderService {
    constructor(httpClient, loginService) {
        this.httpClient = httpClient;
        this.loginService = loginService;
    }
    getOrderById(orderQuery) {
        console.log(orderQuery);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('access-control-allow-origin', '*')
            .set('api_key', 'c8b129c2e8c53de7adc8e2d1ede8d5d3');
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('confirmationId', orderQuery);
        params = params.append('surname', orderQuery);
        params = params.append('chainCode', orderQuery);
        return this.httpClient.get(Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__["getHotelsAPI"])() + 'hotel/order', { params: params, headers }).pipe(
        // catchError(this.handleError)
        );
    }
    cancelOrderById(orderId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('access-control-allow-origin', '*')
            .set('api_key', 'c8b129c2e8c53de7adc8e2d1ede8d5d3');
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        // params = params.append('query', airportCode);
        return this.httpClient.delete(Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__["getHotelsAPI"])() + 'hotel/order' + orderId, { params: params, headers }).pipe(
        // catchError(this.handleError)
        );
    }
    getOrderByName(firstName, lastName) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('access-control-allow-origin', '*')
            .set('api_key', 'c8b129c2e8c53de7adc8e2d1ede8d5d3');
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('firstName', firstName);
        params = params.append('lastName', lastName);
        return this.httpClient.get(Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__["getHotelsAPI"])() + 'orders/name', { params: params, headers }).pipe(
        // catchError(this.handleError)
        );
    }
    createOrder(hotelOrderQuery) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('access-control-allow-origin', '*')
            .set('api_key', 'c8b129c2e8c53de7adc8e2d1ede8d5d3');
        return this.httpClient.post(Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_3__["getHotelsAPI"])() + 'hotel/order', hotelOrderQuery, { headers }).pipe(
        // catchError(this.handleError)
        );
    }
    handleError(error) {
        console.log(error);
        let errorMessage = {};
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = { code: '-1', Error: `${error.error.message}` };
        }
        else {
            // server-side error
            errorMessage = { code: '-1', status: error.status, Error: error.message };
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
}
HotelOrderService.ɵfac = function HotelOrderService_Factory(t) { return new (t || HotelOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"])); };
HotelOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HotelOrderService, factory: HotelOrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelOrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "YfZJ":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/hotel/pages/hotel-container/hotel.component.ts ***!
  \****************************************************************************/
/*! exports provided: HotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelComponent", function() { return HotelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HotelComponent {
    constructor() { }
    ngOnInit() {
    }
}
HotelComponent.ɵfac = function HotelComponent_Factory(t) { return new (t || HotelComponent)(); };
HotelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotelComponent, selectors: [["app-hotel"]], decls: 1, vars: 0, template: function HotelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hvdGVsL3BhZ2VzL2hvdGVsLWNvbnRhaW5lci9ob3RlbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hotel',
                templateUrl: './hotel.component.html',
                styleUrls: ['./hotel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ylm/":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/hotel/pages/hotel-order/hotel-order.component.ts ***!
  \******************************************************************************/
/*! exports provided: HotelOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelOrderComponent", function() { return HotelOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _hotel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hotel */ "ZNpG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/storage/local-storage */ "ADqn");
/* harmony import */ var _services_hotel_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/hotel-order.service */ "XddN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/dialog/dialog.component */ "d/rN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");













const _c0 = ["appDialog"];
function HotelOrderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function HotelOrderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your Ticket has been cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.orderId);
} }
function HotelOrderComponent_div_2_div_19_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrderComponent_div_2_div_19_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.index, " ");
} }
function HotelOrderComponent_div_2_div_19_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrderComponent_div_2_div_19_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.getName(element_r17), " ");
} }
function HotelOrderComponent_div_2_div_19_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrderComponent_div_2_div_19_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.individual.gender, " ");
} }
function HotelOrderComponent_div_2_div_19_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DOB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrderComponent_div_2_div_19_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.individual.birthdate, " ");
} }
function HotelOrderComponent_div_2_div_19_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 48);
} }
function HotelOrderComponent_div_2_div_19_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 49);
} }
function HotelOrderComponent_div_2_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function HotelOrderComponent_div_2_div_19_Template_img_error_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, HotelOrderComponent_div_2_div_19_th_43_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HotelOrderComponent_div_2_div_19_td_44_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HotelOrderComponent_div_2_div_19_th_46_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, HotelOrderComponent_div_2_div_19_td_47_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, HotelOrderComponent_div_2_div_19_th_49_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, HotelOrderComponent_div_2_div_19_td_50_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, HotelOrderComponent_div_2_div_19_th_52_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, HotelOrderComponent_div_2_div_19_td_53_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, HotelOrderComponent_div_2_div_19_tr_54_Template, 1, 0, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, HotelOrderComponent_div_2_div_19_tr_55_Template, 1, 0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightSegment_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.getImageName(flightSegment_r5.marketingCarrier.hotelID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r5.marketingCarrier.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flightSegment_r5.marketingCarrier.hotelID + flightSegment_r5.marketingCarrier.flightNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r5.equipment.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r5.departure.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 16, flightSegment_r5.departure.date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flightSegment_r5.departure.airportCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getDuration(flightSegment_r5.flightDetail.flightDuration.value), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getStops(flightSegment_r5.flightDetail.stops.stopQuantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getClass(flightSegment_r5.classOfService.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r5.arrival.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 19, flightSegment_r5.arrival.date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r5.arrival.airportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r4.order.passengerList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
} }
function HotelOrderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your Ticket has been confirmed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotelOrderComponent_div_2_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.showDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HotelOrderComponent_div_2_div_19_Template, 56, 22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.order.flightSegment);
} }
class HotelOrderComponent extends _hotel__WEBPACK_IMPORTED_MODULE_1__["Hotel"] {
    constructor(router, loginService, localStorage, hotelOrderService, _snackBar, activatedRoute, dialogService, cdRef) {
        super(loginService);
        this.router = router;
        this.localStorage = localStorage;
        this.hotelOrderService = hotelOrderService;
        this._snackBar = _snackBar;
        this.activatedRoute = activatedRoute;
        this.dialogService = dialogService;
        this.cdRef = cdRef;
        this.isSubmitted = false;
        this.isLoading = false;
        this.order = {
            flightSegment: [],
            passengerList: [],
            contactList: []
        };
        this.flightSegmentList = [];
        this.displayedColumns = ['Index', 'Name', 'Gender', 'DOB'];
        document.body.style.backgroundSize = "100% 165px";
        this.activatedRoute.params.subscribe(params => {
            this.orderId = params.id;
            //this.ngOnInit();
        });
    }
    ngOnInit() {
        if (this.orderId != null) {
            this.isLoading = true;
            this.hotelOrderService.getOrderById(this.orderId).subscribe((data) => {
                // console.log('gerOrderByName');
                // console.log(data);
                this.isLoading = false;
                this.order = this.getOrderData(data, this.order);
            });
        }
    }
    ngAfterViewInit() {
        this.dialogService.register(this.appDialog, "Alert", "Do you want to cancel the order?");
        this.cdRef.detectChanges();
    }
    showDialog() {
        this.dialogService.show()
            .then((res) => {
            console.log('ok clicked');
            this.cancelOrder();
        })
            .catch((err) => {
            console.log('cancel clicked');
        });
    }
    cancelOrder() {
        this.isLoading = true;
        this.hotelOrderService.cancelOrderById(this.orderId).subscribe((data) => {
            // console.log('gerOrderByName');
            // console.log(data);
            this.isLoading = false;
            this.order = {
                flightSegment: [],
                passengerList: [],
                contactList: []
            };
            this.order = this.getOrderData(data, this.order);
        });
    }
}
HotelOrderComponent.ɵfac = function HotelOrderComponent_Factory(t) { return new (t || HotelOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hotel_order_service__WEBPACK_IMPORTED_MODULE_5__["HotelOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
HotelOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotelOrderComponent, selectors: [["app-hotel-order"]], viewQuery: function HotelOrderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appDialog = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[4, "ngIf"], ["appDialog", ""], [1, "spinner", 3, "diameter"], ["id", "lr_content", 1, "content", "d-flex", "flex-column", "flex-column-fluid", "pt-0"], [1, "d-flex", "flex-column-fluid", "borderHeader"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "gutter-b", "d-flex"], [1, "brdSmallBlock_inner", "pt-4", "flex-column"], [1, "text-white", "pl-2"], [1, "opacity-70"], [1, "text-white-50", "pl-2"], [1, "fas", "fa-times-circle", "text-danger", "icon-xl"], [1, "fas", "fa-check-circle", "text-success", "icon-xl"], [1, "gutter-b"], [1, "d-flex", "justify-content-end", "mb-3", "mr-3"], ["type", "reset", "title", "Order Cancel", 1, "btn", "btn-primary", 3, "click"], ["class", "card card-custom mb-3", 4, "ngFor", "ngForOf"], [1, "card", "card-custom", "mb-3"], [1, "card-body", "p-0"], [1, "d-flex", "align-items-start", "flex-wrap", "p-5"], [1, "col-5", "d-flex", "align-items-center", "flex-lg-fill", "pl-0"], [1, "symbol", "symbol-50", "bg-gray-300", "mr-4"], ["alt", "image", 3, "src", "error"], [1, "d-flex", "flex-column", "flex-wrap"], [1, "mb-1"], [1, "d-flex"], [1, "text-dark-50", "font-weight-bold", "mr-2"], [1, "col-7", "d-flex", "align-items-center", "justify-content-center", "flex-lg-fill", "pl-0"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-end"], [1, "text-dark-50", "font-weight-bold"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-center", "min-w-150px", "ml-3", "mr-3"], [1, "hr-text", "font-size-sm", "text-dark-50", "mb-1"], [1, "text-primary", "font-weight-bold", "mb-1"], [1, "text-dark-65"], [1, "separator", "separator-solid"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "Gender"], ["matColumnDef", "DOB"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function HotelOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HotelOrderComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HotelOrderComponent_div_1_Template, 15, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HotelOrderComponent_div_2_Template, 20, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-dialog", null, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.order.flightSegment.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.orderId != null && ctx.order.flightSegment.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvaG90ZWwvcGFnZXMvaG90ZWwtb3JkZXIvaG90ZWwtb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hvdGVsL3BhZ2VzL2hvdGVsLW9yZGVyL2hvdGVsLW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hotel-order',
                templateUrl: './hotel-order.component.html',
                styleUrls: ['./hotel-order.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"] }, { type: _services_hotel_order_service__WEBPACK_IMPORTED_MODULE_5__["HotelOrderService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { appDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['appDialog']
        }] }); })();


/***/ }),

/***/ "ZNpG":
/*!********************************************!*\
  !*** ./src/app/views/pages/hotel/hotel.ts ***!
  \********************************************/
/*! exports provided: Hotel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hotel", function() { return Hotel; });
/* harmony import */ var _core_object_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/object-base */ "JXbo");

class Hotel extends _core_object_base__WEBPACK_IMPORTED_MODULE_0__["ObjectBase"] {
    constructor(loginService) {
        super(loginService);
        this.defaultPlace = {
            "id": "New York",
            "city": "New York",
            "state": "NY",
            "country": "US",
            "value": "New York, NY, US",
            "data": "New York"
        };
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.wholeNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.countries = [
            {
                "countryCode": "US",
                "fullName": "United States"
            },
            {
                "countryCode": "AF",
                "fullName": "Afghanistan"
            },
            {
                "countryCode": "AL",
                "fullName": "Albania"
            },
            {
                "countryCode": "DZ",
                "fullName": "Algeria"
            },
            {
                "countryCode": "AX",
                "fullName": "Aland Islands"
            },
            {
                "countryCode": "AS",
                "fullName": "American Samoa"
            },
            {
                "countryCode": "AI",
                "fullName": "Anguilla"
            },
            {
                "countryCode": "AD",
                "fullName": "Andorra"
            },
            {
                "countryCode": "AO",
                "fullName": "Angola"
            },
            {
                "countryCode": "AN",
                "fullName": "Antilles - Netherlands"
            },
            {
                "countryCode": "AG",
                "fullName": "Antigua and Barbuda"
            },
            {
                "countryCode": "AQ",
                "fullName": "Antarctica"
            },
            {
                "countryCode": "AR",
                "fullName": "Argentina"
            },
            {
                "countryCode": "AM",
                "fullName": "Armenia"
            },
            {
                "countryCode": "AU",
                "fullName": "Australia"
            },
            {
                "countryCode": "AT",
                "fullName": "Austria"
            },
            {
                "countryCode": "AW",
                "fullName": "Aruba"
            },
            {
                "countryCode": "AZ",
                "fullName": "Azerbaijan"
            },
            {
                "countryCode": "BA",
                "fullName": "Bosnia and Herzegovina"
            },
            {
                "countryCode": "BB",
                "fullName": "Barbados"
            },
            {
                "countryCode": "BD",
                "fullName": "Bangladesh"
            },
            {
                "countryCode": "BE",
                "fullName": "Belgium"
            },
            {
                "countryCode": "BF",
                "fullName": "Burkina Faso"
            },
            {
                "countryCode": "BG",
                "fullName": "Bulgaria"
            },
            {
                "countryCode": "BH",
                "fullName": "Bahrain"
            },
            {
                "countryCode": "BI",
                "fullName": "Burundi"
            },
            {
                "countryCode": "BJ",
                "fullName": "Benin"
            },
            {
                "countryCode": "BM",
                "fullName": "Bermuda"
            },
            {
                "countryCode": "BN",
                "fullName": "Brunei Darussalam"
            },
            {
                "countryCode": "BO",
                "fullName": "Bolivia"
            },
            {
                "countryCode": "BR",
                "fullName": "Brazil"
            },
            {
                "countryCode": "BS",
                "fullName": "Bahamas"
            },
            {
                "countryCode": "BT",
                "fullName": "Bhutan"
            },
            {
                "countryCode": "BV",
                "fullName": "Bouvet Island"
            },
            {
                "countryCode": "BW",
                "fullName": "Botswana"
            },
            {
                "countryCode": "BV",
                "fullName": "Belarus"
            },
            {
                "countryCode": "BZ",
                "fullName": "Belize"
            },
            {
                "countryCode": "KH",
                "fullName": "Cambodia"
            },
            {
                "countryCode": "CM",
                "fullName": "Cameroon"
            },
            {
                "countryCode": "CA",
                "fullName": "Canada"
            },
            {
                "countryCode": "CV",
                "fullName": "Cape Verde"
            },
            {
                "countryCode": "CF",
                "fullName": "Central African Republic"
            },
            {
                "countryCode": "TD",
                "fullName": "Chad"
            },
            {
                "countryCode": "CL",
                "fullName": "Chile"
            },
            {
                "countryCode": "CN",
                "fullName": "China"
            },
            {
                "countryCode": "CX",
                "fullName": "Christmas Island"
            },
            {
                "countryCode": "CC",
                "fullName": "Cocos (Keeling) Islands"
            },
            {
                "countryCode": "CO",
                "fullName": "Colombia"
            },
            {
                "countryCode": "CG",
                "fullName": "Congo"
            },
            {
                "countryCode": "CI",
                "fullName": "Cote D'Ivoire (Ivory Coast)"
            },
            {
                "countryCode": "CK",
                "fullName": "Cook Islands"
            },
            {
                "countryCode": "CR",
                "fullName": "Costa Rica"
            },
            {
                "countryCode": "HR",
                "fullName": "Croatia (Hrvatska)"
            },
            {
                "countryCode": "CU",
                "fullName": "Cuba"
            },
            {
                "countryCode": "CY",
                "fullName": "Cyprus"
            },
            {
                "countryCode": "CZ",
                "fullName": "Czech Republic"
            },
            {
                "countryCode": "CD",
                "fullName": "Democratic Republic of the Congo"
            },
            {
                "countryCode": "DJ",
                "fullName": "Djibouti"
            },
            {
                "countryCode": "DK",
                "fullName": "Denmark"
            },
            {
                "countryCode": "DM",
                "fullName": "Dominica"
            },
            {
                "countryCode": "DO",
                "fullName": "Dominican Republic"
            },
            {
                "countryCode": "EC",
                "fullName": "Ecuador"
            },
            {
                "countryCode": "EG",
                "fullName": "Egypt"
            },
            {
                "countryCode": "SV",
                "fullName": "El Salvador"
            },
            {
                "countryCode": "TP",
                "fullName": "East Timor"
            },
            {
                "countryCode": "EE",
                "fullName": "Estonia"
            },
            {
                "countryCode": "GQ",
                "fullName": "Equatorial Guinea"
            },
            {
                "countryCode": "ER",
                "fullName": "Eritrea"
            },
            {
                "countryCode": "ET",
                "fullName": "Ethiopia"
            },
            {
                "countryCode": "FI",
                "fullName": "Finland"
            },
            {
                "countryCode": "FJ",
                "fullName": "Fiji"
            },
            {
                "countryCode": "FK",
                "fullName": "Falkland Islands (Malvinas)"
            },
            {
                "countryCode": "FM",
                "fullName": "Federated States of Micronesia"
            },
            {
                "countryCode": "FO",
                "fullName": "Faroe Islands"
            },
            {
                "countryCode": "FR",
                "fullName": "France"
            },
            {
                "countryCode": "FX",
                "fullName": "France, Metropolitan"
            },
            {
                "countryCode": "GF",
                "fullName": "French Guiana"
            },
            {
                "countryCode": "PF",
                "fullName": "French Polynesia"
            },
            {
                "countryCode": "GA",
                "fullName": "Gabon"
            },
            {
                "countryCode": "GM",
                "fullName": "Gambia"
            },
            {
                "countryCode": "DE",
                "fullName": "Germany"
            },
            {
                "countryCode": "GH",
                "fullName": "Ghana"
            },
            {
                "countryCode": "GI",
                "fullName": "Gibraltar"
            },
            {
                "countryCode": "GB",
                "fullName": "Great Britain (UK)"
            },
            {
                "countryCode": "GD",
                "fullName": "Grenada"
            },
            {
                "countryCode": "GE",
                "fullName": "Georgia"
            },
            {
                "countryCode": "GR",
                "fullName": "Greece"
            },
            {
                "countryCode": "GL",
                "fullName": "Greenland"
            },
            {
                "countryCode": "GN",
                "fullName": "Guinea"
            },
            {
                "countryCode": "GP",
                "fullName": "Guadeloupe"
            },
            {
                "countryCode": "GS",
                "fullName": "S. Georgia and S. Sandwich Islands"
            },
            {
                "countryCode": "GT",
                "fullName": "Guatemala"
            },
            {
                "countryCode": "GU",
                "fullName": "Guam"
            },
            {
                "countryCode": "GW",
                "fullName": "Guinea-Bissau"
            },
            {
                "countryCode": "GY",
                "fullName": "Guyana"
            },
            {
                "countryCode": "HK",
                "fullName": "Hong Kong"
            },
            {
                "countryCode": "HM",
                "fullName": "Heard Island and McDonald Islands"
            },
            {
                "countryCode": "HN",
                "fullName": "Honduras"
            },
            {
                "countryCode": "HT",
                "fullName": "Haiti"
            },
            {
                "countryCode": "HU",
                "fullName": "Hungary"
            },
            {
                "countryCode": "ID",
                "fullName": "Indonesia"
            },
            {
                "countryCode": "IE",
                "fullName": "Ireland"
            },
            {
                "countryCode": "IL",
                "fullName": "Israel"
            },
            {
                "countryCode": "IN",
                "fullName": "India"
            },
            {
                "countryCode": "IO",
                "fullName": "British Indian Ocean Territory"
            },
            {
                "countryCode": "IQ",
                "fullName": "Iraq"
            },
            {
                "countryCode": "IR",
                "fullName": "Iran"
            },
            {
                "countryCode": "IT",
                "fullName": "Italy"
            },
            {
                "countryCode": "JM",
                "fullName": "Jamaica"
            },
            {
                "countryCode": "JO",
                "fullName": "Jordan"
            },
            {
                "countryCode": "JP",
                "fullName": "Japan"
            },
            {
                "countryCode": "KE",
                "fullName": "Kenya"
            },
            {
                "countryCode": "KG",
                "fullName": "Kyrgyzstan"
            },
            {
                "countryCode": "KI",
                "fullName": "Kiribati"
            },
            {
                "countryCode": "KM",
                "fullName": "Comoros"
            },
            {
                "countryCode": "KN",
                "fullName": "Saint Kitts and Nevis"
            },
            {
                "countryCode": "KP",
                "fullName": "Korea (North)"
            },
            {
                "countryCode": "KR",
                "fullName": "Korea (South)"
            },
            {
                "countryCode": "KW",
                "fullName": "Kuwait"
            },
            {
                "countryCode": "KY",
                "fullName": "Cayman Islands"
            },
            {
                "countryCode": "KZ",
                "fullName": "Kazakhstan"
            },
            {
                "countryCode": "LA",
                "fullName": "Laos"
            },
            {
                "countryCode": "LB",
                "fullName": "Lebanon"
            },
            {
                "countryCode": "LC",
                "fullName": "Saint Lucia"
            },
            {
                "countryCode": "LI",
                "fullName": "Liechtenstein"
            },
            {
                "countryCode": "LK",
                "fullName": "Sri Lanka"
            },
            {
                "countryCode": "LR",
                "fullName": "Liberia"
            },
            {
                "countryCode": "LS",
                "fullName": "Lesotho"
            },
            {
                "countryCode": "LT",
                "fullName": "Lithuania"
            },
            {
                "countryCode": "LU",
                "fullName": "Luxembourg"
            },
            {
                "countryCode": "LV",
                "fullName": "Latvia"
            },
            {
                "countryCode": "LY",
                "fullName": "Libya"
            },
            {
                "countryCode": "MK",
                "fullName": "Macedonia"
            },
            {
                "countryCode": "MO",
                "fullName": "Macao"
            },
            {
                "countryCode": "MG",
                "fullName": "Madagascar"
            },
            {
                "countryCode": "MY",
                "fullName": "Malaysia"
            },
            {
                "countryCode": "ML",
                "fullName": "Mali"
            },
            {
                "countryCode": "MW",
                "fullName": "Malawi"
            },
            {
                "countryCode": "MR",
                "fullName": "Mauritania"
            },
            {
                "countryCode": "MH",
                "fullName": "Marshall Islands"
            },
            {
                "countryCode": "MQ",
                "fullName": "Martinique"
            },
            {
                "countryCode": "MU",
                "fullName": "Mauritius"
            },
            {
                "countryCode": "YT",
                "fullName": "Mayotte"
            },
            {
                "countryCode": "MT",
                "fullName": "Malta"
            },
            {
                "countryCode": "MX",
                "fullName": "Mexico"
            },
            {
                "countryCode": "MA",
                "fullName": "Morocco"
            },
            {
                "countryCode": "MC",
                "fullName": "Monaco"
            },
            {
                "countryCode": "MD",
                "fullName": "Moldova"
            },
            {
                "countryCode": "MN",
                "fullName": "Mongolia"
            },
            {
                "countryCode": "MM",
                "fullName": "Myanmar"
            },
            {
                "countryCode": "MP",
                "fullName": "Northern Mariana Islands"
            },
            {
                "countryCode": "MS",
                "fullName": "Montserrat"
            },
            {
                "countryCode": "MV",
                "fullName": "Maldives"
            },
            {
                "countryCode": "MZ",
                "fullName": "Mozambique"
            },
            {
                "countryCode": "NA",
                "fullName": "Namibia"
            },
            {
                "countryCode": "NC",
                "fullName": "New Caledonia"
            },
            {
                "countryCode": "NE",
                "fullName": "Niger"
            },
            {
                "countryCode": "NF",
                "fullName": "Norfolk Island"
            },
            {
                "countryCode": "NG",
                "fullName": "Nigeria"
            },
            {
                "countryCode": "NI",
                "fullName": "Nicaragua"
            },
            {
                "countryCode": "NL",
                "fullName": "Netherlands"
            },
            {
                "countryCode": "NO",
                "fullName": "Norway"
            },
            {
                "countryCode": "NP",
                "fullName": "Nepal"
            },
            {
                "countryCode": "NR",
                "fullName": "Nauru"
            },
            {
                "countryCode": "NU",
                "fullName": "Niue"
            },
            {
                "countryCode": "NZ",
                "fullName": "New Zealand (Aotearoa)"
            },
            {
                "countryCode": "OM",
                "fullName": "Oman"
            },
            {
                "countryCode": "PA",
                "fullName": "Panama"
            },
            {
                "countryCode": "PE",
                "fullName": "Peru"
            },
            {
                "countryCode": "PG",
                "fullName": "Papua New Guinea"
            },
            {
                "countryCode": "PH",
                "fullName": "Philippines"
            },
            {
                "countryCode": "PK",
                "fullName": "Pakistan"
            },
            {
                "countryCode": "PL",
                "fullName": "Poland"
            },
            {
                "countryCode": "PM",
                "fullName": "Saint Pierre and Miquelon"
            },
            {
                "countryCode": "CS",
                "fullName": "Serbia and Montenegro"
            },
            {
                "countryCode": "PN",
                "fullName": "Pitcairn"
            },
            {
                "countryCode": "PR",
                "fullName": "Puerto Rico"
            },
            {
                "countryCode": "PS",
                "fullName": "Palestinian Territory"
            },
            {
                "countryCode": "PT",
                "fullName": "Portugal"
            },
            {
                "countryCode": "PW",
                "fullName": "Palau"
            },
            {
                "countryCode": "PY",
                "fullName": "Paraguay"
            },
            {
                "countryCode": "QA",
                "fullName": "Qatar"
            },
            {
                "countryCode": "RE",
                "fullName": "Reunion"
            },
            {
                "countryCode": "RO",
                "fullName": "Romania"
            },
            {
                "countryCode": "RU",
                "fullName": "Russian Federation"
            },
            {
                "countryCode": "RW",
                "fullName": "Rwanda"
            },
            {
                "countryCode": "SA",
                "fullName": "Saudi Arabia"
            },
            {
                "countryCode": "WS",
                "fullName": "Samoa"
            },
            {
                "countryCode": "SH",
                "fullName": "Saint Helena"
            },
            {
                "countryCode": "VC",
                "fullName": "Saint Vincent and the Grenadines"
            },
            {
                "countryCode": "SM",
                "fullName": "San Marino"
            },
            {
                "countryCode": "ST",
                "fullName": "Sao Tome and Principe"
            },
            {
                "countryCode": "SN",
                "fullName": "Senegal"
            },
            {
                "countryCode": "SC",
                "fullName": "Seychelles"
            },
            {
                "countryCode": "SL",
                "fullName": "Sierra Leone"
            },
            {
                "countryCode": "SG",
                "fullName": "Singapore"
            },
            {
                "countryCode": "SK",
                "fullName": "Slovakia"
            },
            {
                "countryCode": "SI",
                "fullName": "Slovenia"
            },
            {
                "countryCode": "SB",
                "fullName": "Solomon Islands"
            },
            {
                "countryCode": "SO",
                "fullName": "Somalia"
            },
            {
                "countryCode": "ZA",
                "fullName": "South Africa"
            },
            {
                "countryCode": "ES",
                "fullName": "Spain"
            },
            {
                "countryCode": "SD",
                "fullName": "Sudan"
            },
            {
                "countryCode": "SR",
                "fullName": "Suriname"
            },
            {
                "countryCode": "SJ",
                "fullName": "Svalbard and Jan Mayen"
            },
            {
                "countryCode": "SE",
                "fullName": "Sweden"
            },
            {
                "countryCode": "CH",
                "fullName": "Switzerland"
            },
            {
                "countryCode": "SY",
                "fullName": "Syria"
            },
            {
                "countryCode": "SU",
                "fullName": "USSR (former)"
            },
            {
                "countryCode": "SZ",
                "fullName": "Swaziland"
            },
            {
                "countryCode": "TW",
                "fullName": "Taiwan"
            },
            {
                "countryCode": "TZ",
                "fullName": "Tanzania"
            },
            {
                "countryCode": "TJ",
                "fullName": "Tajikistan"
            },
            {
                "countryCode": "TH",
                "fullName": "Thailand"
            },
            {
                "countryCode": "TL",
                "fullName": "Timor-Leste"
            },
            {
                "countryCode": "TG",
                "fullName": "Togo"
            },
            {
                "countryCode": "TK",
                "fullName": "Tokelau"
            },
            {
                "countryCode": "TO",
                "fullName": "Tonga"
            },
            {
                "countryCode": "TT",
                "fullName": "Trinidad and Tobago"
            },
            {
                "countryCode": "TN",
                "fullName": "Tunisia"
            },
            {
                "countryCode": "TR",
                "fullName": "Turkey"
            },
            {
                "countryCode": "TM",
                "fullName": "Turkmenistan"
            },
            {
                "countryCode": "TC",
                "fullName": "Turks and Caicos Islands"
            },
            {
                "countryCode": "TV",
                "fullName": "Tuvalu"
            },
            {
                "countryCode": "UA",
                "fullName": "Ukraine"
            },
            {
                "countryCode": "UG",
                "fullName": "Uganda"
            },
            {
                "countryCode": "AE",
                "fullName": "United Arab Emirates"
            },
            {
                "countryCode": "UK",
                "fullName": "United Kingdom"
            },
            {
                "countryCode": "UM",
                "fullName": "United States Minor Outlying Islands"
            },
            {
                "countryCode": "UY",
                "fullName": "Uruguay"
            },
            {
                "countryCode": "UZ",
                "fullName": "Uzbekistan"
            },
            {
                "countryCode": "VU",
                "fullName": "Vanuatu"
            },
            {
                "countryCode": "VA",
                "fullName": "Vatican City State"
            },
            {
                "countryCode": "VE",
                "fullName": "Venezuela"
            },
            {
                "countryCode": "VG",
                "fullName": "Virgin Islands (British)"
            },
            {
                "countryCode": "VI",
                "fullName": "Virgin Islands (U.S.)"
            },
            {
                "countryCode": "VN",
                "fullName": "Viet Nam"
            },
            {
                "countryCode": "WF",
                "fullName": "Wallis and Futuna"
            },
            {
                "countryCode": "EH",
                "fullName": "Western Sahara"
            },
            {
                "countryCode": "YE",
                "fullName": "Yemen"
            },
            {
                "countryCode": "YU",
                "fullName": "Yugoslavia (former)"
            },
            {
                "countryCode": "ZM",
                "fullName": "Zambia"
            },
            {
                "countryCode": "ZR",
                "fullName": "Zaire (former)"
            },
            {
                "countryCode": "ZW",
                "fullName": "Zimbabwe"
            }
        ];
        //   public city = [
        //     New York, "state:" New York"
        // Los Angeles, "state:" California"
        // Chicago, "state:" Illinois"
        // Houston, "state:" Texas"14
        // Philadelphia, "state:" Pennsylvania 1553165
        // Phoenix, "state:" Arizona 1513367
        // San Antonio, "state:" Texas 1409019
        // San Diego, "state:" California 1355896
        // Dallas, "state:" Texas 1257676
        // San Jose, "state:" California 998537
        // Austin, "state:" Texas"0
        // Indianapolis, "state:" Indiana"3
        // Jacksonville, "state:" Florida"3
        // San Francisco, "state:" California"2
        // Columbus, "state:" Ohio"3
        // Charlotte, "state:" North Carolina 792862
        // Fort Worth, "state:" Texas 792727
        // Detroit, "state:" Michigan 688701
        // El Paso, "state:" Texas 674433
        // Memphis, "state:" Tennessee 653450
        // Seattle, "state:" Washington 652405
        // Denver, "state:" Colorado 649495
        // Washington, "state:" District of Columbia 646449
        // Boston, "state:" Massachusetts 645966
        // Nashville-Davidson, "state:" Tennessee 634464
        // Baltimore, "state:" Maryland 622104
        // Oklahoma City, "state:" Oklahoma 610613
        // Louisville/Jefferson County, "state:" Kentucky 609893
        // Portland, "state:" Oregon 609456
        // Las Vegas, "state:" Nevada 603488
        // Milwaukee, "state:" Wisconsin 599164
        // Albuquerque, "state:" New Mexico 556495
        // Tucson, "state:" Arizona 526116
        // Fresno, "state:" California 509924
        // Sacramento, "state:" California"6
        // Long Beach, "state:" California"8
        // Kansas City, "state:" Missouri"7
        // Mesa, "state:" Arizona"7
        // Virginia Beach, "state:" Virginia"9
        // Atlanta, "state:" Georgia"1
        // Colorado Springs, "state:" Colorado"6
        // Omaha, "state:" Nebraska"3
        // Raleigh, "state:" North Carolina"6
        // Miami, "state:" Florida"0
        // Oakland, "state:" California"3
        // Minneapolis, "state:" Minnesota"0
        // Tulsa, "state:" Oklahoma"1
        // Cleveland, "state:" Ohio"3
        // Wichita, "state:" Kansas"2
        // Arlington, "state:" Texas"7
        // New Orleans, "state:" Louisiana"5
        // Bakersfield, "state:" California"0
        // Tampa, "state:" Florida"7
        // Honolulu, "state:" Hawaii"4
        // Aurora, "state:" Colorado"3
        // Anaheim, "state:" California"2
        // Santa Ana, "state:" California"7
        // St. Louis, "state:" Missouri"6
        // Riverside, "state:" California"9
        // Corpus Christi, "state:" Texas"1
        // Lexington-Fayette, "state:" Kentucky"8
        // Pittsburgh, "state:" Pennsylvania"1
        // Anchorage, "state:" Alaska"0
        // Stockton, "state:" California"8
        // Cincinnati, "state:" Ohio"7
        // St. Paul, "state:" Minnesota"3
        // Toledo, "state:" Ohio"3
        // Greensboro, "state:" North Carolina"9
        // Newark, "state:" New Jersey"7
        // Plano, "state:" Texas"9
        // Henderson, "state:" Nevada"1
        // Lincoln, "state:" Nebraska"8
        // Buffalo, "state:" New York"9
        // Jersey City, "state:" New Jersey"2
        // Chula Vista, "state:" California"0
        // Fort Wayne, "state:" Indiana"6
        // Orlando, "state:" Florida"3
        // St. Petersburg, "state:" Florida"8
        // Chandler, "state:" Arizona"6
        // Laredo, "state:" Texas"2
        // Norfolk, "state:" Virginia"9
        // Durham, "state:" North Carolina"5
        // Madison, "state:" Wisconsin"4
        // Lubbock, "state:" Texas"8
        // Irvine, "state:" California"6
        // Winston-Salem, "state:" North Carolina"1
        // Glendale, "state:" Arizona"2
        // Garland, "state:" Texas"6
        // Hialeah, "state:" Florida"4
        // Reno, "state:" Nevada"4
        // Chesapeake, "state:" Virginia"1
        // Gilbert, "state:" Arizona"2
        // Baton Rouge, "state:" Louisiana"6
        // Irving, "state:" Texas"3
        // Scottsdale, "state:" Arizona"8
        // North Las Vegas, "state:" Nevada"7
        // Fremont, "state:" California"2
        // Boise City, "state:" Idaho"7
        // Richmond, "state:" Virginia"4
        // San Bernardino, "state:" California"8
        // Birmingham, "state:" Alabama"3
        // Spokane, "state:" Washington"1
        // Rochester, "state:" New York"8
        // Des Moines, "state:" Iowa"0
        // Modesto, "state:" California"3
        // Fayetteville, "state:" North Carolina"8
        // Tacoma, "state:" Washington"6
        // Oxnard, "state:" California"7
        // Fontana, "state:" California"3
        // Columbus, "state:" Georgia"4
        // Montgomery, "state:" Alabama"2
        // Moreno Valley, "state:" California"5
        // Shreveport, "state:" Louisiana"7
        // Aurora, "state:" Illinois 199963
        // Yonkers, "state:" New York 199766
        // Akron, "state:" Ohio 198100
        // Huntington Beach, "state:" California 197575
        // Little Rock, "state:" Arkansas 197357
        // Augusta-Richmond County, "state:" Georgia 197350
        // Amarillo, "state:" Texas 196429
        // Glendale, "state:" California 196021
        // Mobile, "state:" Alabama 194899
        // Grand Rapids, "state:" Michigan 192294
        // Salt Lake City, "state:" Utah 191180
        // Tallahassee, "state:" Florida 186411
        // Huntsville, "state:" Alabama 186254
        // Grand Prairie, "state:" Texas 183372
        // Knoxville, "state:" Tennessee 183270
        // Worcester, "state:" Massachusetts 182544
        // Newport News, "state:" Virginia 182020
        // Brownsville, "state:" Texas 181860
        // Overland Park, "state:" Kansas 181260
        // Santa Clarita, "state:" California 179590
        // Providence, "state:" Rhode Island 177994
        // Garden Grove, "state:" California 175140
        // Chattanooga, "state:" Tennessee 173366
        // Oceanside, "state:" California 172794
        // Jackson, "state:" Mississippi 172638
        // Fort Lauderdale, "state:" Florida 172389
        // Santa Rosa, "state:" California 171990
        // Rancho Cucamonga, "state:" California 171386
        // Port St. Lucie, "state:" Florida 171016
        // Tempe, "state:" Arizona 168228
        // Ontario, "state:" California 167500
        // Vancouver, "state:" Washington 167405
        // Cape Coral, "state:" Florida 165831
        // Sioux Falls, "state:" South Dakota 164676
        // Springfield, "state:" Missouri 164122
        // Peoria, "state:" Arizona 162592
        // Pembroke Pines, "state:" Florida 162329
        // Elk Grove, "state:" California 161007
        // Salem, "state:" Oregon 160614
        // Lancaster, "state:" California 159523
        // Corona, "state:" California 159503
        // Eugene, "state:" Oregon 159190
        // Palmdale, "state:" California 157161
        // Salinas, "state:" California 155662
        // Springfield, "state:" Massachusetts 153703
        // Pasadena, "state:" Texas 152735
        // Fort Collins, "state:" Colorado 152061
        // Hayward, "state:" California 151574
        // Pomona, "state:" California 151348
        // Cary, "state:" North Carolina 151088
        // Rockford, "state:" Illinois 150251
        // Alexandria, "state:" Virginia 148892
        // Escondido, "state:" California 148738
        // McKinney, "state:" Texas 148559
        // Kansas City, "state:" Kansas 148483
        // Joliet, "state:" Illinois 147806
        // Sunnyvale, "state:" California 147559
        // Torrance, "state:" California 147478
        // Bridgeport, "state:" Connecticut 147216
        // Lakewood, "state:" Colorado 147214
        // Hollywood, "state:" Florida 146526
        // Paterson, "state:" New Jersey 145948
        // Naperville, "state:" Illinois 144864
        // Syracuse, "state:" New York 144669
        // Mesquite, "state:" Texas 143484
        // Dayton, "state:" Ohio 143355
        // Savannah, "state:" Georgia 142772
        // Clarksville, "state:" Tennessee 142357
        // Orange, "state:" California 139969
        // Pasadena, "state:" California 139731
        // Fullerton, "state:" California 138981
        // Killeen, "state:" Texas 137147
        // Frisco, "state:" Texas 136791
        // Hampton, "state:" Virginia 136699
        // McAllen, "state:" Texas 136639
        // Warren, "state:" Michigan 134873
        // Bellevue, "state:" Washington 133992
        // West Valley City, "state:" Utah 133579
        // Columbia, "state:" South Carolina 133358
        // Olathe, "state:" Kansas 131885
        // Sterling Heights, "state:" Michigan 131224
        // New Haven, "state:" Connecticut 130660
        // Miramar, "state:" Florida 130288
        // Waco, "state:" Texas 129030
        // Thousand Oaks, "state:" California 128731
        // Cedar Rapids, "state:" Iowa 128429
        // Charleston, "state:" South Carolina 127999
        // Visalia, "state:" California 127763
        // Topeka, "state:" Kansas 127679
        // Elizabeth, "state:" New Jersey 127558
        // Gainesville, "state:" Florida 127488
        // Thornton, "state:" Colorado 127359
        // Roseville, "state:" California 127035
        // Carrollton, "state:" Texas 126700
        // Coral Springs, "state:" Florida 126604
        // Stamford, "state:" Connecticut 126456
        // Simi Valley, "state:" California 126181
        // Concord, "state:" California 125880
        // Hartford, "state:" Connecticut 125017
        // Kent, "state:" Washington 124435
        // Lafayette, "state:" Louisiana 124276
        // Midland, "state:" Texas 123933
        // Surprise, "state:" Arizona 123546
        // Denton, "state:" Texas 123099
        // Victorville, "state:" California 121096
        // Evansville, "state:" Indiana 120310
        // Santa Clara, "state:" California 120245
        // Abilene, "state:" Texas 120099
        // Athens-Clarke County, "state:" Georgia 119980
        // Vallejo, "state:" California 118837
        // Allentown, "state:" Pennsylvania 118577
        // Norman, "state:" Oklahoma 118197
        // Beaumont, "state:" Texas 117796
        // Independence, "state:" Missouri 117240
        // Murfreesboro, "state:" Tennessee 117044
        // Ann Arbor, "state:" Michigan 117025
        // Springfield, "state:" Illinois 117006
        // Berkeley, "state:" California 116768
        // Peoria, "state:" Illinois 116513
        // Provo, "state:" Utah 116288
        // El Monte, "state:" California 115708
        // Columbia, "state:" Missouri 115276
        // Lansing, "state:" Michigan 113972
        // Fargo, "state:" North Dakota 113658
        // Downey, "state:" California 113242
        // Costa Mesa, "state:" California 112174
        // Wilmington, "state:" North Carolina 112067
        // Arvada, "state:" Colorado 111707
        // Inglewood, "state:" California 111542
        // Miami Gardens, "state:" Florida 111378
        // Carlsbad, "state:" California 110972
        // Westminster, "state:" Colorado 110945
        // Rochester, "state:" Minnesota 110742
        // Odessa, "state:" Texas 110720
        // Manchester, "state:" New Hampshire 110378
        // Elgin, "state:" Illinois 110145
        // West Jordan, "state:" Utah 110077
        // Round Rock, "state:" Texas 109821
        // Clearwater, "state:" Florida 109703
        // Waterbury, "state:" Connecticut 109676
        // Gresham, "state:" Oregon 109397
        // Fairfield, "state:" California 109320
        // Billings, "state:" Montana 109059
        // Lowell, "state:" Massachusetts 108861
        // San Buenaventura (Ventura), "state:" California 108817
        // Pueblo, "state:" Colorado 108249
        // High Point, "state:" North Carolina 107741
        // West Covina, "state:" California 107740
        // Richmond, "state:" California 107571
        // Murrieta, "state:" California 107479
        // Cambridge, "state:" Massachusetts 107289
        // Antioch, "state:" California 107100
        // Temecula, "state:" California 106780
        // Norwalk, "state:" California 106589
        // Centennial, "state:" Colorado 106114
        // Everett, "state:" Washington 105370
        // Palm Bay, "state:" Florida 104898
        // Wichita Falls, "state:" Texas 104898
        // Green Bay, "state:" Wisconsin 104779
        // Daly City, "state:" California 104739
        // Burbank, "state:" California 104709
        // Richardson, "state:" Texas 104475
        // Pompano Beach, "state:" Florida 104410
        // North Charleston, "state:" South Carolina 104054
        // Broken Arrow, "state:" Oklahoma 103500
        // Boulder, "state:" Colorado 103166
        // West Palm Beach, "state:" Florida 102436
        // Santa Maria, "state:" California 102216
        // El Cajon, "state:" California 102211
        // Davenport, "state:" Iowa 102157
        // Rialto, "state:" California 101910
        // Las Cruces, "state:" New Mexico 101324
        // San Mateo, "state:" California 101128
        // Lewisville, "state:" Texas 101074
        // South Bend, "state:" Indiana 100886
        // Lakeland, "state:" Florida 100710
        // Erie, "state:" Pennsylvania 100671
        // Tyler, "state:" Texas 100223
        // Pearland, "state:" Texas 100065
        // College Station, "state:" Texas 100050
        // Kenosha, "state:" Wisconsin 99889
        // Sandy Springs, "state:" Georgia 99770
        // Clovis, "state:" California 99769
        // Flint, "state:" Michigan 99763
        // Roanoke, "state:" Virginia 98465
        // Albany, "state:" New York 98424
        // Jurupa Valley, "state:" California 98030
        // Compton, "state:" California 97877
        // San Angelo, "state:" Texas 97492
        // Hillsboro, "state:" Oregon 97368
        // Lawton, "state:" Oklahoma 97151
        // Renton, "state:" Washington 97003
        // Vista, "state:" California 96929
        // Davie, "state:" Florida 96830
        // Greeley, "state:" Colorado 96539
        // Mission Viejo, "state:" California 96346
        // Portsmouth, "state:" Virginia 96205
        // Dearborn, "state:" Michigan 95884
        // South Gate, "state:" California 95677
        // Tuscaloosa, "state:" Alabama 95334
        // Livonia, "state:" Michigan 95208
        // New Bedford, "state:" Massachusetts 95078
        // Vacaville, "state:" California 94275
        // Brockton, "state:" Massachusetts 94089
        // Roswell, "state:" Georgia 94034
        // Beaverton, "state:" Oregon 93542
        // Quincy, "state:" Massachusetts 93494
        // Sparks, "state:" Nevada 93282
        // Yakima, "state:" Washington 93257
        // Lee's Summit, "state:" Missouri 93184
        // Federal Way, "state:" Washington 92734
        // Carson, "state:" California 92599
        // Santa Monica, "state:" California 92472
        // Hesperia, "state:" California 92147
        // Allen, "state:" Texas 92020
        // Rio Rancho, "state:" New Mexico 91956
        // Yuma, "state:" Arizona 91923
        // Westminster, "state:" California 91739
        // Orem, "state:" Utah 91648
        // Lynn, "state:" Massachusetts 91589
        // Redding, "state:" California 91119
        // Spokane Valley, "state:" Washington 91113
        // Miami Beach, "state:" Florida 91026
        // League City, "state:" Texas 90983
        // Lawrence, "state:" Kansas 90811
        // Santa Barbara, "state:" California 90412
        // Plantation, "state:" Florida 90268
        // Sandy, "state:" Utah 90231
        // Sunrise, "state:" Florida 90116
        // Macon, "state:" Georgia"
        // Longmont, "state:" Colorado"
        // Boca Raton, "state:" Florida"
        // San Marcos, "state:" California"
        // Greenville, "state:" North Carolina"
        // Waukegan, "state:" Illinois"
        // Fall River, "state:" Massachusetts"
        // Chico, "state:" California"
        // Newton, "state:" Massachusetts"
        // San Leandro, "state:" California"
        // Reading, "state:" Pennsylvania"
        // Norwalk, "state:" Connecticut"
        // Fort Smith, "state:" Arkansas"
        // Newport Beach, "state:" California"
        // Asheville, "state:" North Carolina"
        // Nashua, "state:" New Hampshire"
        // Edmond, "state:" Oklahoma"
        // Whittier, "state:" California"
        // Nampa, "state:" Idaho"
        // Bloomington, "state:" Minnesota"
        // Deltona, "state:" Florida"
        // Hawthorne, "state:" California"
        // Duluth, "state:" Minnesota"
        // Carmel, "state:" Indiana"
        // Suffolk, "state:" Virginia"
        // Clifton, "state:" New Jersey"
        // Citrus Heights, "state:" California"
        // Livermore, "state:" California"
        // Tracy, "state:" California"
        // Alhambra, "state:" California"
        // Kirkland, "state:" Washington"
        // Trenton, "state:" New Jersey"
        // Ogden, "state:" Utah"
        // Hoover, "state:" Alabama"
        // Cicero, "state:" Illinois"
        // Fishers, "state:" Indiana"
        // Sugar Land, "state:" Texas"
        // Danbury, "state:" Connecticut"
        // Meridian, "state:" Idaho"
        // Indio, "state:" California"
        // Concord, "state:" North Carolina"
        // Menifee, "state:" California"
        // Champaign, "state:" Illinois"
        // Buena Park, "state:" California"
        // Troy, "state:" Michigan"
        // O'Fallon, "state:" Missouri"
        // Johns Creek, "state:" Georgia"
        // Bellingham, "state:" Washington"
        // Westland, "state:" Michigan"
        // Bloomington, "state:" Indiana"
        // Sioux City, "state:" Iowa"
        // Warwick, "state:" Rhode Island"
        // Hemet, "state:" California"
        // Longview, "state:" Texas"
        // Farmington Hills, "state:" Michigan"
        // Bend, "state:" Oregon"
        // Lakewood, "state:" California"
        // Merced, "state:" California"
        // Mission, "state:" Texas"
        // Chino, "state:" California"
        // Redwood City, "state:" California"
        // Edinburg, "state:" Texas"
        // Cranston, "state:" Rhode Island"
        // Parma, "state:" Ohio"
        // New Rochelle, "state:" New York 79446
        // Lake Forest, "state:" California 79312
        // Napa, "state:" California 79068
        // Hammond, "state:" Indiana 78967
        // Fayetteville, "state:" Arkansas 78960
        // Bloomington, "state:" Illinois 78902
        // Avondale, "state:" Arizona 78822
        // Somerville, "state:" Massachusetts 78804
        // Palm Coast, "state:" Florida 78740
        // Bryan, "state:" Texas 78709
        // Gary, "state:" Indiana 78450
        // Largo, "state:" Florida 78409
        // Brooklyn Park, "state:" Minnesota 78373
        // Tustin, "state:" California 78327
        // Racine, "state:" Wisconsin 78199
        // Deerfield Beach, "state:" Florida 78041
        // Lynchburg, "state:" Virginia 78014
        // Mountain View, "state:" California 77846
        // Medford, "state:" Oregon 77677
        // Lawrence, "state:" Massachusetts 77657
        // Bellflower, "state:" California 77593
        // Melbourne, "state:" Florida 77508
        // St. Joseph, "state:" Missouri 77147
        // Camden, "state:" New Jersey 76903
        // St. George, "state:" Utah 76817
        // Kennewick, "state:" Washington 76762
        // Baldwin Park, "state:" California 76635
        // Chino Hills, "state:" California 76572
        // Alameda, "state:" California 76419
        // Albany, "state:" Georgia 76185
        // Arlington Heights, "state:" Illinois 75994
        // Scranton, "state:" Pennsylvania 75806
        // Evanston, "state:" Illinois 75570
        // Kalamazoo, "state:" Michigan 75548
        // Baytown, "state:" Texas 75418
        // Upland, "state:" California 75413
        // Springdale, "state:" Arkansas 75229
        // Bethlehem, "state:" Pennsylvania 75018
        // Schaumburg, "state:" Illinois 74907
        // Mount Pleasant, "state:" South Carolina 74885
        // Auburn, "state:" Washington 74860
        // Decatur, "state:" Illinois 74710
        // San Ramon, "state:" California 74513
        // Pleasanton, "state:" California 74110
        // Wyoming, "state:" Michigan 74100
        // Lake Charles, "state:" Louisiana 74024
        // Plymouth, "state:" Minnesota 73987
        // Bolingbrook, "state:" Illinois 73936
        // Pharr, "state:" Texas 73790
        // Appleton, "state:" Wisconsin 73596
        // Gastonia, "state:" North Carolina 73209
        // Folsom, "state:" California 73098
        // Southfield, "state:" Michigan 73006
        // Rochester Hills, "state:" Michigan 72952
        // New Britain, "state:" Connecticut 72939
        // Goodyear, "state:" Arizona 72864
        // Canton, "state:" Ohio 72535
        // Warner Robins, "state:" Georgia 72531
        // Union City, "state:" California 72528
        // Perris, "state:" California 72326
        // Manteca, "state:" California 71948
        // Iowa City, "state:" Iowa 71591
        // Jonesboro, "state:" Arkansas 71551
        // Wilmington, "state:" Delaware 71525
        // Lynwood, "state:" California 71371
        // Loveland, "state:" Colorado 71334
        // Pawtucket, "state:" Rhode Island 71172
        // Boynton Beach, "state:" Florida 71097
        // Waukesha, "state:" Wisconsin 71016
        // Gulfport, "state:" Mississippi 71012
        // Apple Valley, "state:" California 70924
        // Passaic, "state:" New Jersey 70868
        // Rapid City, "state:" South Dakota 70812
        // Layton, "state:" Utah 70790
        // Lafayette, "state:" Indiana 70373
        // Turlock, "state:" California 70365
        // Muncie, "state:" Indiana 70316
        // Temple, "state:" Texas 70190
        // Missouri City, "state:" Texas 70185
        // Redlands, "state:" California 69999
        // Santa Fe, "state:" New Mexico 69976
        // Lauderhill, "state:" Florida 69813
        // Milpitas, "state:" California 69783
        // Palatine, "state:" Illinois 69350
        // Missoula, "state:" Montana 69122
        // Rock Hill, "state:" South Carolina 69103
        // Jacksonville, "state:" North Carolina 69079
        // Franklin, "state:" Tennessee 68886
        // Flagstaff, "state:" Arizona 68667
        // Flower Mound, "state:" Texas 68609
        // Weston, "state:" Florida 68388
        // Waterloo, "state:" Iowa 68366
        // Union City, "state:" New Jersey 68247
        // Mount Vernon, "state:" New York 68224
        // Fort Myers, "state:" Florida 68190
        // Dothan, "state:" Alabama 68001
        // Rancho Cordova, "state:" California 67911
        // Redondo Beach, "state:" California 67815
        // Jackson, "state:" Tennessee 67685
        // Pasco, "state:" Washington 67599
        // St. Charles, "state:" Missouri 67569
        // Eau Claire, "state:" Wisconsin 67545
        // North Richland Hills, "state:" Texas 67317
        // Bismarck, "state:" North Dakota 67034
        // Yorba Linda, "state:" California 67032
        // Kenner, "state:" Louisiana 66975
        // Walnut Creek, "state:" California 66900
        // Frederick, "state:" Maryland 66893
        // Oshkosh, "state:" Wisconsin 66778
        // Pittsburg, "state:" California 66695
        // Palo Alto, "state:" California 66642
        // Bossier City, "state:" Louisiana 66333
        // Portland, "state:" Maine 66318
        // St. Cloud, "state:" Minnesota 66297
        // Davis, "state:" California 66205
        // South San Francisco, "state:" California 66174
        // Camarillo, "state:" California 66086
        // North Little Rock, "state:" Arkansas 66075
        // Schenectady, "state:" New York 65902
        // Gaithersburg, "state:" Maryland 65690
        // Harlingen, "state:" Texas 65665
        // Woodbury, "state:" Minnesota 65656
        // Eagan, "state:" Minnesota 65453
        // Yuba City, "state:" California 65416
        // Maple Grove, "state:" Minnesota 65415
        // Youngstown, "state:" Ohio 65184
        // Skokie, "state:" Illinois 65176
        // Kissimmee, "state:" Florida 65173
        // Johnson City, "state:" Tennessee 65123
        // Victoria, "state:" Texas 65098
        // San Clemente, "state:" California 65040
        // Bayonne, "state:" New Jersey 65028
        // Laguna Niguel, "state:" California 64652
        // East Orange, "state:" New Jersey 64544
        // Shawnee, "state:" Kansas 64323
        // Homestead, "state:" Florida 64079
        // Rockville, "state:" Maryland 64072
        // Delray Beach, "state:" Florida 64072
        // Janesville, "state:" Wisconsin 63820
        // Conway, "state:" Arkansas 63816
        // Pico Rivera, "state:" California 63771
        // Lorain, "state:" Ohio 63710
        // Montebello, "state:" California 63495
        // Lodi, "state:" California 63338
        // New Braunfels, "state:" Texas 63279
        // Marysville, "state:" Washington 63269
        // Tamarac, "state:" Florida 63155
        // Madera, "state:" California 63105
        // Conroe, "state:" Texas 63032
        // Santa Cruz, "state:" California 62864
        // Eden Prairie, "state:" Minnesota 62603
        // Cheyenne, "state:" Wyoming 62448
        // Daytona Beach, "state:" Florida 62316
        // Alpharetta, "state:" Georgia 62298
        // Hamilton, "state:" Ohio 62258
        // Waltham, "state:" Massachusetts 62227
        // Coon Rapids, "state:" Minnesota 62103
        // Haverhill, "state:" Massachusetts 62088
        // Council Bluffs, "state:" Iowa 61969
        // Taylor, "state:" Michigan 61817
        // Utica, "state:" New York 61808
        // Ames, "state:" Iowa 61792
        // La Habra, "state:" California 61653
        // Encinitas, "state:" California 61588
        // Bowling Green, "state:" Kentucky 61488
        // Burnsville, "state:" Minnesota 61434
        // Greenville, "state:" South Carolina 61397
        // West Des Moines, "state:" Iowa 61255
        // Cedar Park, "state:" Texas 61238
        // Tulare, "state:" California 61170
        // Monterey Park, "state:" California 61085
        // Vineland, "state:" New Jersey 61050
        // Terre Haute, "state:" Indiana 61025
        // North Miami, "state:" Florida 61007
        // Mansfield, "state:" Texas 60872
        // West Allis, "state:" Wisconsin 60697
        // Bristol, "state:" Connecticut 60568
        // Taylorsville, "state:" Utah 60519
        // Malden, "state:" Massachusetts 60509
        // Meriden, "state:" Connecticut 60456
        // Blaine, "state:" Minnesota 60407
        // Wellington, "state:" Florida 60202
        // Cupertino, "state:" California 60189
        // Springfield, "state:" Oregon 60177
        // Rogers, "state:" Arkansas 60112
        // St. Clair Shores, "state:" Michigan 60070
        // Gardena, "state:" California 59957
        // Pontiac, "state:" Michigan 59887
        // National City, "state:" California 59834
        // Grand Junction, "state:" Colorado 59778
        // Rocklin, "state:" California 59738
        // Chapel Hill, "state:" North Carolina 59635
        // Casper, "state:" Wyoming 59628
        // Broomfield, "state:" Colorado 59471
        // Petaluma, "state:" California 59440
        // South Jordan, "state:" Utah 59366
        // Springfield, "state:" Ohio 59357
        // Great Falls, "state:" Montana 59351
        // Lancaster, "state:" Pennsylvania 59325
        // North Port, "state:" Florida 59212
        // Lakewood, "state:" Washington 59097
        // Marietta, "state:" Georgia 59089
        // San Rafael, "state:" California 58994
        // Royal Oak, "state:" Michigan 58946
        // Des Plaines, "state:" Illinois 58918
        // Huntington Park, "state:" California 58879
        // La Mesa, "state:" California 58642
        // Orland Park, "state:" Illinois 58590
        // Auburn, "state:" Alabama 58582
        // Lakeville, "state:" Minnesota 58562
        // Owensboro, "state:" Kentucky 58416
        // Moore, "state:" Oklahoma 58414
        // Jupiter, "state:" Florida 58298
        // Idaho Falls, "state:" Idaho 58292
        // Dubuque, "state:" Iowa 58253
        // Bartlett, "state:" Tennessee 58226
        // Rowlett, "state:" Texas 58043
        // Novi, "state:" Michigan 57960
        // White Plains, "state:" New York 57866
        // Arcadia, "state:" California 57639
        // Redmond, "state:" Washington 57530
        // Lake Elsinore, "state:" California 57525
        // Ocala, "state:" Florida 57468
        // Tinley Park, "state:" Illinois 57282
        // Port Orange, "state:" Florida 57203
        // Medford, "state:" Massachusetts 57170
        // Oak Lawn, "state:" Illinois 57073
        // Rocky Mount, "state:" North Carolina 56954
        // Kokomo, "state:" Indiana 56895
        // Coconut Creek, "state:" Florida 56792
        // Bowie, "state:" Maryland 56759
        // Berwyn, "state:" Illinois 56758
        // Midwest City, "state:" Oklahoma 56756
        // Fountain Valley, "state:" California 56707
        // Buckeye, "state:" Arizona 56683
        // Dearborn Heights, "state:" Michigan 56620
        // Woodland, "state:" California 56590
        // Noblesville, "state:" Indiana 56540
        // Valdosta, "state:" Georgia 56481
        // Diamond Bar, "state:" California 56449
        // Manhattan, "state:" Kansas 56143
        // Santee, "state:" California 56105
        // Taunton, "state:" Massachusetts 56069
        // Sanford, "state:" Florida 56002
        // Kettering, "state:" Ohio 55870
        // New Brunswick, "state:" New Jersey 55831
        // Decatur, "state:" Alabama 55816
        // Chicopee, "state:" Massachusetts 55717
        // Anderson, "state:" Indiana 55670
        // Margate, "state:" Florida 55456
        // Weymouth Town, "state:" Massachusetts 55419
        // Hempstead, "state:" New York 55361
        // Corvallis, "state:" Oregon 55298
        // Eastvale, "state:" California 55191
        // Porterville, "state:" California 55174
        // West Haven, "state:" Connecticut 55046
        // Brentwood, "state:" California 55000
        // Paramount, "state:" California 54980
        // Grand Forks, "state:" North Dakota 54932
        // Georgetown, "state:" Texas 54898
        // St. Peters, "state:" Missouri 54842
        // Shoreline, "state:" Washington 54790
        // Mount Prospect, "state:" Illinois 54771
        // Hanford, "state:" California 54686
        // Normal, "state:" Illinois 54664
        // Rosemead, "state:" California 54561
        // Lehi, "state:" Utah 54382
        // Pocatello, "state:" Idaho 54350
        // Highland, "state:" California 54291
        // Novato, "state:" California 54194
        // Port Arthur, "state:" Texas 54135
        // Carson City, "state:" Nevada 54080
        // San Marcos, "state:" Texas 54076
        // Hendersonville, "state:" Tennessee 54068
        // Elyria, "state:" Ohio 53956
        // Revere, "state:" Massachusetts 53756
        // Pflugerville, "state:" Texas 53752
        // Greenwood, "state:" Indiana 53665
        // Bellevue, "state:" Nebraska 53663
        // Wheaton, "state:" Illinois 53648
        // Smyrna, "state:" Georgia 53438
        // Sarasota, "state:" Florida 53326
        // Blue Springs, "state:" Missouri 53294
        // Colton, "state:" California 53243
        // Euless, "state:" Texas 53224
        // Castle Rock, "state:" Colorado 53063
        // Cathedral City, "state:" California 52977
        // Kingsport, "state:" Tennessee 52962
        // Lake Havasu City, "state:" Arizona 52844
        // Pensacola, "state:" Florida 52703
        // Hoboken, "state:" New Jersey 52575
        // Yucaipa, "state:" California 52536
        // Watsonville, "state:" California 52477
        // Richland, "state:" Washington 52413
        // Delano, "state:" California 52403
        // Hoffman Estates, "state:" Illinois 52398
        // Florissant, "state:" Missouri 52363
        // Placentia, "state:" California 52206
        // West New York, "state:" New Jersey 52122
        // Dublin, "state:" California 52105
        // Oak Park, "state:" Illinois 52066
        // Peabody, "state:" Massachusetts 52044
        // Perth Amboy, "state:" New Jersey 51982
        // Battle Creek, "state:" Michigan 51848
        // Bradenton, "state:" Florida 51763
        // Gilroy, "state:" California 51701
        // Milford, "state:" Connecticut 51644
        // Albany, "state:" Oregon 51583
        // Ankeny, "state:" Iowa 51567
        // La Crosse, "state:" Wisconsin 51522
        // Burlington, "state:" North Carolina 51510
        // DeSoto, "state:" Texas 51483
        // Harrisonburg, "state:" Virginia 51395
        // Minnetonka, "state:" Minnesota 51368
        // Elkhart, "state:" Indiana 51265
        // Lakewood, "state:" Ohio 51143
        // Glendora, "state:" California 51074
        // Southaven, "state:" Mississippi 50997
        // Charleston, "state:" West Virginia 50821
        // Joplin, "state:" Missouri 50789
        // Enid, "state:" Oklahoma 50725
        // Palm Beach Gardens, "state:" Florida 50699
        // Brookhaven, "state:" Georgia 50603
        // Plainfield, "state:" New Jersey 50588
        // Grand Island, "state:" Nebraska 50550
        // Palm Desert, "state:" California 50508
        // Huntersville, "state:" North Carolina 50458
        // Tigard, "state:" Oregon 50444
        // Lenexa, "state:" Kansas 50344
        // Saginaw, "state:" Michigan 50303
        // Kentwood, "state:" Michigan 50233
        // Doral, "state:" Florida 50213
        // Apple Valley, "state:" Minnesota 50201
        // Grapevine, "state:" Texas 50195
        // Aliso Viejo, "state:" California 50175
        // Sammamish, "state:" Washington 50169
        // Casa Grande, "state:" Arizona 50111
        // Pinellas Park, "state:" Florida"
        // Troy, "state:" New York"
        // West Sacramento, "state:" California"
        // Burien, "state:" Washington"
        // Commerce City, "state:" Colorado"
        // Monroe, "state:" Louisiana"
        // Cerritos, "state:" California"
        // Downers Grove, "state:" Illinois"
        // Coral Gables, "state:" Florida"
        // Wilson, "state:" North Carolina"
        // Niagara Falls, "state:" New York"
        // Poway, "state:" California"
        // Edina, "state:" Minnesota"
        // Cuyahoga Falls, "state:" Ohio"
        // Rancho Santa Margarita, "state:" California"
        // Harrisburg, "state:" Pennsylvania"
        // Huntington, "state:" West Virginia"
        // La Mirada, "state:" California"
        // Cypress, "state:" California"
        // Caldwell, "state:" Idaho"
        // Logan, "state:" Utah"
        // Galveston, "state:" Texas"
        // Sheboygan, "state:" Wisconsin"
        // Middletown, "state:" Ohio"
        // Murray, "state:" Utah"
        // Roswell, "state:" New Mexico"
        // Parker, "state:" Colorado"
        // Bedford, "state:" Texas"
        // East Lansing, "state:" Michigan"
        // Methuen, "state:" Massachusetts"
        // Covina, "state:" California"
        // Alexandria, "state:" Louisiana"
        // Olympia, "state:" Washington"
        // Euclid, "state:" Ohio"
        // Mishawaka, "state:" Indiana"
        // Salina, "state:" Kansas"
        // Azusa, "state:" California"
        // Newark, "state:" Ohio"
        // Chesterfield, "state:" Missouri"
        // Leesburg, "state:" Virginia"
        // Dunwoody, "state:" Georgia"
        // Hattiesburg, "state:" Mississippi"
        // Roseville, "state:" Michigan"
        // Bonita Springs, "state:" Florida"
        // Portage, "state:" Michigan"
        // St. Louis Park, "state:" Minnesota"
        // Collierville, "state:" Tennessee"
        // Middletown, "state:" Connecticut"
        // Stillwater, "state:" Oklahoma"
        // East Providence, "state:" Rhode Island"
        // Lawrence, "state:" Indiana"
        // Wauwatosa, "state:" Wisconsin"
        // Mentor, "state:" Ohio"
        // Ceres, "state:" California"
        // Cedar Hill, "state:" Texas"
        // Mansfield, "state:" Ohio"
        // Binghamton, "state:" New York"
        // Coeur d'Alene, "state:" Idaho"
        // San Luis Obispo, "state:" California"
        // Minot, "state:" North Dakota"
        // Palm Springs, "state:" California"
        // Pine Bluff, "state:" Arkansas"
        // Texas City, "state:" Texas"
        // Summerville, "state:" South Carolina"
        // Twin Falls, "state:" Idaho"
        // Jeffersonville, "state:" Indiana"
        // San Jacinto, "state:" California"
        // Madison, "state:" Alabama"
        // Altoona, "state:" Pennsylvania"
        // Columbus, "state:" Indiana"
        // Beavercreek, "state:" Ohio"
        // Apopka, "state:" Florida"
        // Elmhurst, "state:" Illinois"
        // Maricopa, "state:" Arizona"
        // Farmington, "state:" New Mexico"
        // Glenview, "state:" Illinois"
        // Cleveland Heights, "state:" Ohio"
        // Draper, "state:" Utah"
        // Lincoln, "state:" California"
        // Sierra Vista, "state:" Arizona"
        // Lacey, "state:" Washington"
        // Biloxi, "state:" Mississippi"
        // Strongsville, "state:" Ohio"
        // Barnstable Town, "state:" Massachusetts"
        // Wylie, "state:" Texas"
        // Sayreville, "state:" New Jersey"
        // Kannapolis, "state:" North Carolina"
        // Charlottesville, "state:" Virginia"
        // Littleton, "state:" Colorado"
        // Titusville, "state:" Florida"
        // Hackensack, "state:" New Jersey"
        // Newark, "state:" California"
        // Pittsfield, "state:" Massachusetts"
        // York, "state:" Pennsylvania"
        // Lombard, "state:" Illinois"
        // Attleboro, "state:" Massachusetts"
        // DeKalb, "state:" Illinois"
        // Blacksburg, "state:" Virginia"
        // Dublin, "state:" Ohio"
        // Haltom City, "state:" Texas"
        // Lompoc, "state:" California"
        // El Centro, "state:" California"
        // Danville, "state:" California"
        // Jefferson City, "state:" Missouri"
        // Cutler Bay, "state:" Florida"
        // Oakland Park, "state:" Florida"
        // North Miami Beach, "state:" Florida"
        // Freeport, "state:" New York"
        // Moline, "state:" Illinois"
        // Coachella, "state:" California"
        // Fort Pierce, "state:" Florida"
        // Smyrna, "state:" Tennessee"
        // Bountiful, "state:" Utah"
        // Fond du Lac, "state:" Wisconsin"
        // Everett, "state:" Massachusetts"
        // Danville, "state:" Virginia"
        // Keller, "state:" Texas"
        // Belleville, "state:" Illinois"
        // Bell Gardens, "state:" California"
        // Cleveland, "state:" Tennessee"
        // North Lauderdale, "state:" Florida"
        // Fairfield, "state:" Ohio"
        // Salem, "state:" Massachusetts"
        // Rancho Palos Verdes, "state:" California"
        // San Bruno, "state:" California"
        // Concord, "state:" New Hampshire"
        // Burlington, "state:" Vermont"
        // Apex, "state:" North Carolina"
        // Midland, "state:" Michigan"
        // Altamonte Springs, "state:" Florida"
        // Hutchinson, "state:" Kansas"
        // Buffalo Grove, "state:" Illinois"
        // Urbandale, "state:" Iowa"
        // State College, "state:" Pennsylvania"
        // Urbana, "state:" Illinois"
        // Plainfield, "state:" Illinois"
        // Manassas, "state:" Virginia"
        // Bartlett, "state:" Illinois"
        // Kearny, "state:" New Jersey"
        // Oro Valley, "state:" Arizona"
        // Findlay, "state:" Ohio"
        // Rohnert Park, "state:" California"
        // Westfield, "state:" Massachusetts"
        // Linden, "state:" New Jersey"
        // Sumter, "state:" South Carolina"
        // Wilkes-Barre, "state:" Pennsylvania"
        // Woonsocket, "state:" Rhode Island"
        // Leominster, "state:" Massachusetts"
        // Shelton, "state:" Connecticut"
        // Brea, "state:" California"
        // Covington, "state:" Kentucky"
        // Rockwall, "state:" Texas"
        // Meridian, "state:" Mississippi"
        // Riverton, "state:" Utah"
        // St. Cloud, "state:" Florida"
        // Quincy, "state:" Illinois"
        // Morgan Hill, "state:" California"
        // Warren, "state:" Ohio"
        // Edmonds, "state:" Washington"
        // Burleson, "state:" Texas"
        // Beverly, "state:" Massachusetts"
        // Mankato, "state:" Minnesota"
        // Hagerstown, "state:" Maryland"
        // Prescott, "state:" Arizona"
        // Campbell, "state:" California"
        // Cedar Falls, "state:" Iowa"
        // Beaumont, "state:" California"
        // La Puente, "state:" California"
        // Crystal Lake, "state:" Illinois"
        // Fitchburg, "state:" Massachusetts"
        // Carol Stream, "state:" Illinois"
        // Hickory, "state:" North Carolina"
        // Streamwood, "state:" Illinois"
        // Norwich, "state:" Connecticut"
        // Coppell, "state:" Texas"
        // San Gabriel, "state:" California"
        // Holyoke, "state:" Massachusetts"
        // Bentonville, "state:" Arkansas"
        // Florence, "state:" Alabama"
        // Peachtree Corners, "state:" Georgia"
        // Brentwood, "state:" Tennessee"
        // Bozeman, "state:" Montana"
        // New Berlin, "state:" Wisconsin"
        // Goose Creek, "state:" South Carolina"
        // Huntsville, "state:" Texas"
        // Prescott Valley, "state:" Arizona"
        // Maplewood, "state:" Minnesota"
        // Romeoville, "state:" Illinois"
        // Duncanville, "state:" Texas"
        // Atlantic City, "state:" New Jersey"
        // Clovis, "state:" New Mexico"
        // The Colony, "state:" Texas"
        // Culver City, "state:" California"
        // Marlborough, "state:" Massachusetts"
        // Hilton Head Island, "state:" South Carolina"
        // Moorhead, "state:" Minnesota"
        // Calexico, "state:" California"
        // Bullhead City, "state:" Arizona"
        // Germantown, "state:" Tennessee"
        // La Quinta, "state:" California"
        // Lancaster, "state:" Ohio"
        // Wausau, "state:" Wisconsin"
        // Sherman, "state:" Texas"
        // Ocoee, "state:" Florida"
        // Shakopee, "state:" Minnesota"
        // Woburn, "state:" Massachusetts"
        // Bremerton, "state:" Washington"
        // Rock Island, "state:" Illinois"
        // Muskogee, "state:" Oklahoma"
        // Cape Girardeau, "state:" Missouri"
        // Annapolis, "state:" Maryland"
        // Greenacres, "state:" Florida"
        // Ormond Beach, "state:" Florida"
        // Hallandale Beach, "state:" Florida"
        // Stanton, "state:" California"
        // Puyallup, "state:" Washington"
        // Pacifica, "state:" California"
        // Hanover Park, "state:" Illinois"
        // Hurst, "state:" Texas"
        // Lima, "state:" Ohio"
        // Marana, "state:" Arizona"
        // Carpentersville, "state:" Illinois"
        // Oakley, "state:" California"
        // Huber Heights, "state:" Ohio"
        // Lancaster, "state:" Texas"
        // Montclair, "state:" California"
        // Wheeling, "state:" Illinois"
        // Brookfield, "state:" Wisconsin"
        // Park Ridge, "state:" Illinois"
        // Florence, "state:" South Carolina"
        // Roy, "state:" Utah"
        // Winter Garden, "state:" Florida"
        // Chelsea, "state:" Massachusetts"
        // Valley Stream, "state:" New York"
        // Spartanburg, "state:" South Carolina"
        // Lake Oswego, "state:" Oregon"
        // Friendswood, "state:" Texas"
        // Westerville, "state:" Ohio"
        // Northglenn, "state:" Colorado"
        // Phenix City, "state:" Alabama"
        // Grove City, "state:" Ohio"
        // Texarkana, "state:" Texas"
        // Addison, "state:" Illinois"
        // Dover, "state:" Delaware"
        // Lincoln Park, "state:" Michigan"
        // Calumet City, "state:" Illinois"
        // Muskegon, "state:" Michigan"
        // Aventura, "state:" Florida"
        // Martinez, "state:" California"
        // Greenfield, "state:" Wisconsin"
        // Apache Junction, "state:" Arizona"
        // Monrovia, "state:" California"
        // Weslaco, "state:" Texas"
        // Keizer, "state:" Oregon"
        // Spanish Fork, "state:" Utah"
        // Beloit, "state:" Wisconsin"
        // Panama City, "state:" Florida"
        //   ]
        this.countriesOld = ["United States", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mcdonald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis"];
        this.states = [{ "fullName": "Alabama", "shortName": "AL", "countryCode": "US" }, { "fullName": "Alaska", "shortName": "AK", "countryCode": "US" }, { "fullName": "Arizona", "shortName": "AZ", "countryCode": "US" }, { "fullName": "Arkansas", "shortName": "AR", "countryCode": "US" }, { "fullName": "California", "shortName": "CA", "countryCode": "US" }, { "fullName": "Colorado", "shortName": "CO", "countryCode": "US" }, { "fullName": "Connecticut", "shortName": "CT", "countryCode": "US" }, { "fullName": "Delaware", "shortName": "DE", "countryCode": "US" }, { "fullName": "Florida", "shortName": "FL", "countryCode": "US" }, { "fullName": "Georgia", "shortName": "GA", "countryCode": "US" }, { "fullName": "Hawaii", "shortName": "HI", "countryCode": "US" }, { "fullName": "Idaho", "shortName": "ID", "countryCode": "US" }, { "fullName": "Illinois", "shortName": "IL", "countryCode": "US" }, { "fullName": "Indiana", "shortName": "IN", "countryCode": "US" }, { "fullName": "Iowa", "shortName": "IA", "countryCode": "US" }, { "fullName": "Kansas", "shortName": "KS", "countryCode": "US" }, { "fullName": "Kentucky", "shortName": "KY", "countryCode": "US" }, { "fullName": "Louisiana", "shortName": "LA", "countryCode": "US" }, { "fullName": "Maine", "shortName": "ME", "countryCode": "US" }, { "fullName": "Maryland", "shortName": "MD", "countryCode": "US" }, { "fullName": "Massachusetts", "shortName": "MA", "countryCode": "US" }, { "fullName": "Michigan", "shortName": "MI", "countryCode": "US" }, { "fullName": "Minnesota", "shortName": "MN", "countryCode": "US" }, { "fullName": "Mississippi", "shortName": "MS", "countryCode": "US" }, { "fullName": "Missouri", "shortName": "MO", "countryCode": "US" }, { "fullName": "Montana", "shortName": "MT", "countryCode": "US" }, { "fullName": "Nebraska", "shortName": "NE", "countryCode": "US" }, { "fullName": "Nevada", "shortName": "NV", "countryCode": "US" }, { "fullName": "New Hampshire", "shortName": "NH", "countryCode": "US" }, { "fullName": "New Jersey", "shortName": "NJ", "countryCode": "US" }, { "fullName": "New Mexico", "shortName": "NM", "countryCode": "US" }, { "fullName": "New York", "shortName": "NY", "countryCode": "US" }, { "fullName": "North Carolina", "shortName": "NC", "countryCode": "US" }, { "fullName": "North Dakota", "shortName": "ND", "countryCode": "US" }, { "fullName": "Ohio", "shortName": "OH", "countryCode": "US" }, { "fullName": "Oklahoma", "shortName": "OK", "countryCode": "US" }, { "fullName": "Oregon", "shortName": "OR", "countryCode": "US" }, { "fullName": "Pennsylvania", "shortName": "PA", "countryCode": "US" }, { "fullName": "Rhode Island", "shortName": "RI", "countryCode": "US" }, { "fullName": "South Carolina", "shortName": "SC", "countryCode": "US" }, { "fullName": "South Dakota", "shortName": "SD", "countryCode": "US" }, { "fullName": "Tennessee", "shortName": "TN", "countryCode": "US" }, { "fullName": "Texas", "shortName": "TX", "countryCode": "US" }, { "fullName": "Utah", "shortName": "UT", "countryCode": "US" }, { "fullName": "Vermont", "shortName": "VT", "countryCode": "US" }, { "fullName": "Virginia", "shortName": "VA", "countryCode": "US" }, { "fullName": "Washington", "shortName": "WA", "countryCode": "US" }, { "fullName": "West Virginia", "shortName": "WV", "countryCode": "US" }, { "fullName": "Wisconsin", "shortName": "WI", "countryCode": "US" }, { "fullName": "Wyoming", "shortName": "WY", "countryCode": "US" }];
        this.gender = ["Male", "Female"];
        this.paymentTypes = ["On Hold", "Credit Card"];
        this.yearArray = Array(10).fill(null).map((_, i) => new Date().getFullYear() + i);
        this.monthArray = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    }
    // Filter the states list and send back to populate the selectedStates**
    stateSearch(value) {
        let filter = value.toLowerCase();
        return this.states.filter(option => option.fullName.toLowerCase().startsWith(filter));
    }
    countrySearch(value) {
        let filter = value.toLowerCase();
        return this.countries.filter(option => option.fullName.toLowerCase().startsWith(filter));
    }
    getHotelDisplayName(suggestion, isIntial = true) {
        if (suggestion == '') {
            return isIntial ? 'Please Select' : '';
        }
        else {
            const HotelDisplayName = suggestion.locality + ', ' + suggestion.admin_area_l1 + ', ' + suggestion.country;
            return HotelDisplayName;
        }
    }
    sameStartEndValidator(form) {
        const start = form.value.start;
        const end = form.value.end;
        if (start != null && end != null) {
            const condition = new Date(start).getTime() > new Date(end).getTime();
            return condition ? { startEndMatch: true } : null;
        }
        return null;
    }
    fromSelected(form) {
        const formGroupValue = form.value;
        if (formGroupValue.place != '' && (formGroupValue.place.formatted_address == null)) {
            return { fromSelected: true };
        }
        return null;
    }
    displayFn(airport) {
        return airport && airport.data ? airport.data : (airport && airport.name ? airport.name : '');
    }
    getFare(flightFares) {
        let fare = flightFares[0].totalPrice;
        for (let flightFare of flightFares) {
            if (flightFare.selectedFare == true) {
                return flightFare.totalPrice;
            }
            if (flightFare.totalPrice < fare) {
                fare = flightFare.totalPrice;
            }
        }
        return fare;
    }
    getFares(rooms) {
        let amount = {
            totalRoomCharges: 0,
            totalTaxes: 0,
            totalFees: 0,
            totalAmount: 0
        };
        for (let room of rooms) {
            amount.totalRoomCharges = amount.totalRoomCharges + room.productPrice.roomRate[0].rate.amountBeforeTax;
            amount.totalTaxes = amount.totalTaxes + room.productPrice.roomRate[0].taxes.total.value;
            amount.totalAmount = amount.totalAmount + room.productPrice.roomRate[0].rate.value;
        }
        // for(let flightFare of roomFares) {
        //   if(flightFare.selectedFare == true) {
        //     amount = this.getTaxes(roomFares[0], amount);
        //     amount.totalRoomCharges = flightFare.totalPrice
        //     return amount;
        //   }
        //   if(flightFare.totalPrice < amount.totalRoomCharges){
        //     amount = this.getTaxes(roomFares[0], amount);
        //     amount.totalRoomCharges = flightFare.totalPrice;
        //   }
        // }
        return amount;
    }
    getTaxes(flightFare, amount) {
        amount.baseAmount = flightFare.baseAmount;
        amount.facilityCharge = 0;
        amount.securityServiceFee = 0;
        for (let tax of flightFare.tax) {
            if (tax.description == 'U.S Passenger Facility Charge') {
                amount.facilityCharge = amount.facilityCharge + (Number(tax.amount.text) * 0.01);
            }
            else if (tax.description == 'Passenger Civil Aviation Security Service Fee') {
                amount.securityServiceFee = amount.securityServiceFee + (Number(tax.amount.text) * 0.01);
            }
        }
        return amount;
    }
    getOrderData(data, order) {
        if (data != null && data.response != null && data.response.dataLists != null) {
            if (data.response.dataLists.flightSegmentList != null && data.response.dataLists.flightSegmentList.flightSegment != null) {
                order.flightSegment = data.response.dataLists.flightSegmentList.flightSegment || [];
            }
            if (data.response.dataLists.passengerList != null && data.response.dataLists.passengerList.passenger != null) {
                order.passengerList = data.response.dataLists.passengerList.passenger || [];
                let index = 1;
                for (let passenger of order.passengerList) {
                    passenger.index = index++;
                }
            }
            if (data.response.dataLists.contactList != null && data.response.dataLists.contactList.contactInformation != null
                && data.response.dataLists.contactList.contactInformation.contactProvided != null) {
                order.contactList = data.response.dataLists.contactList.contactInformation.contactProvided || [];
            }
        }
        order.OrderID = order.OrderID || ((data.response || {}).order || {}).orderID || 'NA';
        let travelAgencyRecipient = (((data.party || {}).recipient || {}).travelAgencyRecipient || {});
        order.Agency = order.Agency || (travelAgencyRecipient.agentUser || {}).agentUserID || 'NA';
        order.AgencyId = order.AgencyId || travelAgencyRecipient.agencyID || 'NA';
        return order;
    }
    getDuration(flightDuration) {
        // const flightDurationStr =  `${flightDuration.substring(2,5)} ${flightDuration.substring(5)}`;
        const flightDurationStr = flightDuration.replace("PT", "");
        return flightDurationStr;
    }
    getStops(stops) {
        const stopsStr = stops == 0 ? "Nonstop" : `${stops} Stop(s)`;
        return stopsStr;
    }
    getClass(code) {
        return code == 'I' ? 'Economy' : 'First Class';
    }
    getName(passenger) {
        const name = (passenger.individual.nameTitle || "") + " " +
            (passenger.individual.givenName || "") + " " +
            (passenger.individual.middleName || "") + " " +
            (passenger.individual.surname || "");
        return name;
    }
    getImageName(hotelID) {
        let imagePath = "assets/media/Hotels/" + hotelID + ".png";
        // console.log('hotelID:' + hotelID);
        return imagePath;
    }
    onImgError(event) {
        // console.log(event);
        event.target.src = "assets/media/Hotels/noImage2.png";
    }
    getNameOnly(passenger) {
        const name = (passenger.individual.givenName || "") + " " +
            (passenger.individual.middleName || "") + " " +
            (passenger.individual.surname || "");
        return name;
    }
    changeOrderData(orderObj) {
        let date, airportCode;
        if (orderObj != null && orderObj.flightSegment != null
            && orderObj.flightSegment[0] != null && orderObj.flightSegment[0].departure != null) {
            date = orderObj.flightSegment[0].departure.date;
            airportCode = orderObj.flightSegment[0].departure.airportCode;
        }
        let order = {
            OrderId: orderObj.orderID || orderObj.OrderID,
            PassengerName: this.getNameOnly(orderObj.passengerList[0]) || 'NA',
            Depature: date || 'NA',
            Airport: airportCode || 'NA',
            Creation: orderObj.creationDate || 'NA',
            Agency: orderObj.Agency || (orderObj.agency || {}).name || 'NA',
            AgencyId: orderObj.AgencyId || ((orderObj.agency || {}).agencyID || {}).text || 'NA'
        };
        orderObj = Object.assign(Object.assign({}, orderObj), order);
        return orderObj;
    }
    getRoomInfo(roomCount) {
        if (roomCount == 1) {
            return '1 Room';
        }
        else if (roomCount > 1) {
            return roomCount + ' Rooms';
        }
        else {
            return '';
        }
    }
    getGuestInfo(guestArray) {
        let guestInfo = '';
        let adult = guestArray.filter(function (item) {
            if (item.ageQualifyingCode.toUpperCase() == 'ADULT') {
                if (item.value == 1) {
                    item.Code = 'adult';
                }
                else {
                    item.Code = 'adults';
                }
                return item;
            }
        })[0] || {};
        let child = guestArray.filter(function (item) {
            if (item.ageQualifyingCode.toUpperCase() == 'CHILD') {
                if (item.value == 1) {
                    item.Code = 'children';
                }
                else {
                    item.Code = 'childrens';
                }
                return item;
            }
        })[0] || {};
        if (adult.value != 0) {
            guestInfo = guestInfo + adult.value + ' ' + adult.Code;
        }
        if (child.value != 0) {
            guestInfo = guestInfo + ', ' + child.value + ' ' + child.Code;
        }
        return guestInfo;
    }
}


/***/ }),

/***/ "bKsr":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/hotel/pages/hotel-orders/hotel-orders.component.ts ***!
  \********************************************************************************/
/*! exports provided: HotelOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelOrdersComponent", function() { return HotelOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _hotel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hotel */ "ZNpG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/storage/local-storage */ "ADqn");
/* harmony import */ var _services_hotel_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/hotel-order.service */ "XddN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");


















function HotelOrdersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function HotelOrdersComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrdersComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrdersComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OrderId is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrdersComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrdersComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Hotels/Orders/", element_r20.OrderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.OrderId, " ");
} }
function HotelOrdersComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passenger Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrdersComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.PassengerName, " ");
} }
function HotelOrdersComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Depature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrdersComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.Depature, " ");
} }
function HotelOrdersComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Airport ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrdersComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.Airport, " ");
} }
function HotelOrdersComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Creation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrdersComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.Creation, " ");
} }
function HotelOrdersComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Agency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrdersComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.Agency, " ");
} }
function HotelOrdersComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Agency Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelOrdersComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r26.AgencyId, " ");
} }
function HotelOrdersComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
} }
function HotelOrdersComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 39);
} }
class HotelOrdersComponent extends _hotel__WEBPACK_IMPORTED_MODULE_4__["Hotel"] {
    constructor(router, loginService, localStorage, hotelOrderService, _snackBar) {
        super(loginService);
        this.router = router;
        this.localStorage = localStorage;
        this.hotelOrderService = hotelOrderService;
        this._snackBar = _snackBar;
        this.searchOrderFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.searchOrderIdFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            OrderId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.isSubmitted = false;
        this.isLoading = false;
        this.orders = [];
        this.displayedColumns = ['OrderId', 'PassengerName', 'Depature', 'Airport', 'Creation', 'Agency', 'AgencyId'];
        document.body.style.backgroundSize = "100% 165px";
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    search() {
        this.isSubmitted = true;
        if (this.searchOrderFG.valid) {
            const value = this.searchOrderFG.value;
            this.searchOrderIdFG.reset();
            this.isLoading = true;
            this.hotelOrderService.getOrderByName(value.FirstName, value.LastName).subscribe((data) => {
                // console.log('gerOrderByName');
                // console.log(data);
                this.isLoading = false;
                this.prepareOrders(data);
            });
        }
        else {
            this.searchOrderFG.markAllAsTouched();
        }
    }
    searchById() {
        this.isSubmitted = true;
        if (this.searchOrderIdFG.valid) {
            const value = this.searchOrderIdFG.value;
            this.searchOrderFG.reset();
            this.isLoading = true;
            this.hotelOrderService.getOrderById(value.OrderId).subscribe((data) => {
                // console.log('gerOrderByName');
                // console.log(data);
                this.isLoading = false;
                let order = {
                    flightSegment: [],
                    passengerList: [],
                    contactList: [],
                    OrderId: data.response.order.orderID,
                };
                order = this.getOrderData(data, order);
                order = this.changeOrderData(order);
                this.orders = [];
                this.orders.push(order);
                this.sortedOrders = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.orders.slice());
                this.sortedOrders.sort = this.sort;
            });
        }
        else {
            this.searchOrderFG.markAllAsTouched();
        }
    }
    prepareOrders(data) {
        this.orders = [];
        if (data != null && data.response != null && data.response.orders != null && data.response.orders.order != null) {
            for (let orderObj of data.response.orders.order) {
                let order = {
                    OrderId: orderObj.orderID || orderObj.OrderID,
                    PassengerName: ((orderObj.passengers || {}).fullName || {}).text || 'NA',
                    Depature: ((orderObj.departure || {}).date || {}).text || 'NA',
                    Airport: ((orderObj.departure || {}).airportCode || {}).text || 'NA',
                    Creation: orderObj.creationDate || 'NA',
                    Agency: (orderObj.agency || {}).name || 'NA',
                    AgencyId: ((orderObj.agency || {}).agencyID || {}).text || 'NA'
                };
                this.orders.push(order);
            }
        }
        this.sortedOrders = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.orders.slice());
        this.sortedOrders.sort = this.sort;
    }
}
HotelOrdersComponent.ɵfac = function HotelOrdersComponent_Factory(t) { return new (t || HotelOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hotel_order_service__WEBPACK_IMPORTED_MODULE_8__["HotelOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"])); };
HotelOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotelOrdersComponent, selectors: [["app-hotel-orders"]], viewQuery: function HotelOrdersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 65, vars: 10, consts: [[4, "ngIf"], [1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "gutter-b", "d-flex"], [1, "brdSmallBlock_inner", "pt-4", "flex-column"], [1, "text-white", "pl-2", "opacity-70"], [1, "text-white-50", "pl-2"], [1, "card", "card-custom"], [1, "card-header"], [1, "card-title"], [1, "d-flex", 3, "formGroup"], ["appearance", "outline", 1, ""], ["matInput", "", "formControlName", "FirstName", "required", ""], ["appearance", "outline", 1, "ml-2"], ["matInput", "", "formControlName", "LastName", "required", ""], ["type", "button", 1, "btn", "btn-primary", "font-size-h5", "ml-2", "mt-2", "h-40px", 3, "click"], [1, "card-header", "justify-content-center"], [1, "row", "align-items-center"], ["matInput", "", "formControlName", "OrderId", "required", ""], [1, "card-body", "p-0"], ["mat-table", "", "matSort", "", 1, "w-100", 3, "dataSource", "ngClass"], ["matColumnDef", "OrderId"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "PassengerName"], ["matColumnDef", "Depature"], ["matColumnDef", "Airport"], ["matColumnDef", "Creation"], ["matColumnDef", "Agency"], ["matColumnDef", "AgencyId"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "spinner", 3, "diameter"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]], template: function HotelOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HotelOrdersComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order details are displayed here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HotelOrdersComponent_mat_error_19_Template, 2, 0, "mat-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HotelOrdersComponent_mat_error_24_Template, 2, 0, "mat-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotelOrdersComponent_Template_button_click_25_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " (OR) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "OrderId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HotelOrdersComponent_mat_error_37_Template, 2, 0, "mat-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotelOrdersComponent_Template_button_click_38_listener() { return ctx.searchById(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, HotelOrdersComponent_th_43_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HotelOrdersComponent_td_44_Template, 3, 2, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HotelOrdersComponent_th_46_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, HotelOrdersComponent_td_47_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, HotelOrdersComponent_th_49_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, HotelOrdersComponent_td_50_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, HotelOrdersComponent_th_52_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, HotelOrdersComponent_td_53_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, HotelOrdersComponent_th_55_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HotelOrdersComponent_td_56_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, HotelOrdersComponent_th_58_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, HotelOrdersComponent_td_59_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, HotelOrdersComponent_th_61_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, HotelOrdersComponent_td_62_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, HotelOrdersComponent_tr_63_Template, 1, 0, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, HotelOrdersComponent_tr_64_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchOrderFG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchOrderFG.get("FirstName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchOrderFG.get("LastName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchOrderIdFG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchOrderIdFG.get("OrderId").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.sortedOrders)("ngClass", ctx.isSubmitted && !ctx.isLoading ? "" : "d-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["[_nghost-%COMP%]     .mat-input-element {\n    font-size: 1.1rem;\n}\n[_nghost-%COMP%]     .mat-form-field {\n    line-height: 2;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-infix {\n    padding: 0.5em 0 0.5em 0;\n}\n[_nghost-%COMP%]     .mat-form-field-subscript-wrapper {\n    font-size: 60%; top: calc(100% - 2.5em);\n}\n[_nghost-%COMP%]     .mat-form-field-infix {\n    border-top: .5em;\n}\n[_nghost-%COMP%]     .mat-error {\n    line-height: 1;\n}\n[_nghost-%COMP%]     .mat-form-field-label-wrapper {\n    top: -0.5em;\n    padding-top: 0.5em;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-label {\n    top: 1.2em;\n    margin-top: .2em;\n}\n.card.card-custom[_ngcontent-%COMP%]    > .card-header[_ngcontent-%COMP%] {\n    height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvaG90ZWwvcGFnZXMvaG90ZWwtb3JkZXJzL2hvdGVsLW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGNBQWMsRUFBRSx1QkFBdUI7QUFDM0M7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hvdGVsL3BhZ2VzL2hvdGVsLW9yZGVycy9ob3RlbC1vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogNjAlOyB0b3A6IGNhbGMoMTAwJSAtIDIuNWVtKTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIGJvcmRlci10b3A6IC41ZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1lcnJvciB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgIHRvcDogLTAuNWVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdG9wOiAxLjJlbTtcbiAgICBtYXJnaW4tdG9wOiAuMmVtO1xufVxuLmNhcmQuY2FyZC1jdXN0b20gPiAuY2FyZC1oZWFkZXIge1xuICAgIGhlaWdodDogNzBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hotel-orders',
                templateUrl: './hotel-orders.component.html',
                styleUrls: ['./hotel-orders.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"] }, { type: _services_hotel_order_service__WEBPACK_IMPORTED_MODULE_8__["HotelOrderService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "hObm":
/*!***************************************************!*\
  !*** ./src/app/views/pages/hotel/hotel.module.ts ***!
  \***************************************************/
/*! exports provided: HotelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelModule", function() { return HotelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../material.module */ "vvyD");
/* harmony import */ var _pages_hotel_container_hotel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/hotel-container/hotel.component */ "YfZJ");
/* harmony import */ var _pages_hotel_create_order_hotel_create_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/hotel-create-order/hotel-create-order.component */ "BuiL");
/* harmony import */ var _pages_hotel_dashboard_hotel_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/hotel-dashboard/hotel-dashboard.component */ "rD+a");
/* harmony import */ var _pages_hotel_dashboard_hotel_subheader_hotel_subheader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/hotel-dashboard/hotel-subheader/hotel-subheader.component */ "s1fO");
/* harmony import */ var _pages_hotel_order_status_hotel_order_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/hotel-order-status/hotel-order-status.component */ "nytM");
/* harmony import */ var _pages_hotel_order_hotel_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/hotel-order/hotel-order.component */ "Ylm/");
/* harmony import */ var _pages_hotel_orders_hotel_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/hotel-orders/hotel-orders.component */ "bKsr");
/* harmony import */ var _partials_hotel_item_hotel_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./partials/hotel-item/hotel-item.component */ "w6aj");
/* harmony import */ var _partials_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./partials/hotel-list/hotel-list.component */ "1cWd");
/* harmony import */ var _pages_hotel_search_hotel_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/hotel-search/hotel-search.component */ "hrda");

















const secondaryRoutes = [
    {
        path: '',
        component: _pages_hotel_container_hotel_component__WEBPACK_IMPORTED_MODULE_5__["HotelComponent"],
        children: [
            {
                path: '', component: _pages_hotel_dashboard_hotel_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["HotelDashboardComponent"]
            },
            {
                path: 'Search', component: _pages_hotel_search_hotel_search_component__WEBPACK_IMPORTED_MODULE_14__["HotelSearchComponent"]
            },
            {
                path: 'Booking', component: _pages_hotel_create_order_hotel_create_order_component__WEBPACK_IMPORTED_MODULE_6__["HotelCreateOrderComponent"]
            },
            {
                path: 'Orders', component: _pages_hotel_orders_hotel_orders_component__WEBPACK_IMPORTED_MODULE_11__["HotelOrdersComponent"]
            },
            {
                path: 'Orders/:id', component: _pages_hotel_order_hotel_order_component__WEBPACK_IMPORTED_MODULE_10__["HotelOrderComponent"]
            },
            {
                path: 'Status', component: _pages_hotel_order_status_hotel_order_status_component__WEBPACK_IMPORTED_MODULE_9__["HotelOrderStatusComponent"]
            },
            {
                path: 'Status/:id/:chainCode/:surname', component: _pages_hotel_order_status_hotel_order_status_component__WEBPACK_IMPORTED_MODULE_9__["HotelOrderStatusComponent"]
            }
        ]
    }
];
class HotelModule {
}
HotelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HotelModule });
HotelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HotelModule_Factory(t) { return new (t || HotelModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(secondaryRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HotelModule, { declarations: [_pages_hotel_container_hotel_component__WEBPACK_IMPORTED_MODULE_5__["HotelComponent"], _pages_hotel_dashboard_hotel_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["HotelDashboardComponent"], _pages_hotel_dashboard_hotel_subheader_hotel_subheader_component__WEBPACK_IMPORTED_MODULE_8__["HotelSubheaderComponent"], _partials_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_13__["HotelListComponent"],
        _partials_hotel_item_hotel_item_component__WEBPACK_IMPORTED_MODULE_12__["HotelItemComponent"], _pages_hotel_search_hotel_search_component__WEBPACK_IMPORTED_MODULE_14__["HotelSearchComponent"], _pages_hotel_create_order_hotel_create_order_component__WEBPACK_IMPORTED_MODULE_6__["HotelCreateOrderComponent"],
        _pages_hotel_orders_hotel_orders_component__WEBPACK_IMPORTED_MODULE_11__["HotelOrdersComponent"], _pages_hotel_order_hotel_order_component__WEBPACK_IMPORTED_MODULE_10__["HotelOrderComponent"], _pages_hotel_order_status_hotel_order_status_component__WEBPACK_IMPORTED_MODULE_9__["HotelOrderStatusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_hotel_container_hotel_component__WEBPACK_IMPORTED_MODULE_5__["HotelComponent"], _pages_hotel_dashboard_hotel_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["HotelDashboardComponent"], _pages_hotel_dashboard_hotel_subheader_hotel_subheader_component__WEBPACK_IMPORTED_MODULE_8__["HotelSubheaderComponent"], _partials_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_13__["HotelListComponent"],
                    _partials_hotel_item_hotel_item_component__WEBPACK_IMPORTED_MODULE_12__["HotelItemComponent"], _pages_hotel_search_hotel_search_component__WEBPACK_IMPORTED_MODULE_14__["HotelSearchComponent"], _pages_hotel_create_order_hotel_create_order_component__WEBPACK_IMPORTED_MODULE_6__["HotelCreateOrderComponent"],
                    _pages_hotel_orders_hotel_orders_component__WEBPACK_IMPORTED_MODULE_11__["HotelOrdersComponent"], _pages_hotel_order_hotel_order_component__WEBPACK_IMPORTED_MODULE_10__["HotelOrderComponent"], _pages_hotel_order_status_hotel_order_status_component__WEBPACK_IMPORTED_MODULE_9__["HotelOrderStatusComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(secondaryRoutes)
                ],
                entryComponents: [_partials_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_13__["HotelListComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "hrda":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/hotel/pages/hotel-search/hotel-search.component.ts ***!
  \********************************************************************************/
/*! exports provided: HotelSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelSearchComponent", function() { return HotelSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/tenant/tenant */ "lWHP");
/* harmony import */ var src_app_store_hotel_hotel_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/hotel/hotel.state */ "P4iX");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../auth/login/login.component */ "/2yL");
/* harmony import */ var _hotel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hotel */ "ZNpG");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/hotel-retrieve.service */ "9lgk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/storage/local-storage */ "ADqn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _shared_components_datepicker_range_datepicker_range_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../shared/components/datepicker-range/datepicker-range.component */ "WJVJ");
/* harmony import */ var _partials_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../partials/hotel-list/hotel-list.component */ "1cWd");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


























const _c0 = ["picker1"];
const _c1 = ["picker2"];
const _c2 = ["travellersSelect"];
const _c3 = ["travellersSelectRooms"];
const _c4 = ["hotelPlaceDiv"];
const _c5 = ["countPopupDiv"];
const _c6 = ["travellersDiv"];
const _c7 = ["hotelListComponent"];
const _c8 = ["placeInput"];
function HotelSearchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 30);
} }
function HotelSearchComponent_div_1_input_11_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HotelSearchComponent_div_1_input_11_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.clickChange("place"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r3.hotelSearchFormGroup.value.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r3.hotelSearchFormGroup.value.place);
} }
function HotelSearchComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function HotelSearchComponent_div_1_div_12_Template_input_onSelect_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.setAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r4.hotelSearchFormGroup.value.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r4.hotelSearchFormGroup.get("place"))("errorStateMatcher", ctx_r4.errorMatcher);
} }
function HotelSearchComponent_div_1_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Destination/Airport/Landmark/Hotel is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HotelSearchComponent_div_1_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please Select From");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HotelSearchComponent_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.hotelSearchFormGroup.value.rooms, "");
} }
function HotelSearchComponent_div_1_div_24_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", number_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", number_r26, " ");
} }
function HotelSearchComponent_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function HotelSearchComponent_div_1_div_24_Template_mat_select_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.roomsChange($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HotelSearchComponent_div_1_div_24_mat_option_4_Template, 2, 2, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r10.hotelSearchFormGroup.get("rooms"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.numbers);
} }
function HotelSearchComponent_div_1_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please choose a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HotelSearchComponent_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Guests");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r13.hotelSearchFormGroup.value.count, "");
} }
function HotelSearchComponent_div_1_div_33_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", number_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", number_r31, " ");
} }
function HotelSearchComponent_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 38, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function HotelSearchComponent_div_1_div_33_Template_mat_select_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r32.countChange($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HotelSearchComponent_div_1_div_33_mat_option_4_Template, 2, 2, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r14.hotelSearchFormGroup.get("count"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.numbers);
} }
function HotelSearchComponent_div_1_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please choose a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HotelSearchComponent_div_1_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 30);
} }
function HotelSearchComponent_div_1_div_40_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HotelSearchComponent_div_1_div_40_tr_22_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const hotel_r35 = ctx.$implicit; return hotel_r35.selected = $event; })("change", function HotelSearchComponent_div_1_div_40_tr_22_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r38.checkIfAllSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", hotel_r35.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](hotel_r35.basicPropertyInfo.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", hotel_r35.location.address.street, ", ", hotel_r35.location.address.city, ", ", hotel_r35.location.address.stateProv.value, ", ", hotel_r35.location.address.country.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", hotel_r35.relativePosition.distance, " Miles From City Center");
} }
function HotelSearchComponent_div_1_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function HotelSearchComponent_div_1_div_40_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r39.searchHotelName($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HotelSearchComponent_div_1_div_40_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r41.selectedAll = $event; })("change", function HotelSearchComponent_div_1_div_40_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r42.selectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Hotel Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Distance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HotelSearchComponent_div_1_div_40_tr_22_Template, 11, 7, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r17.selectedAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.searchList);
} }
function HotelSearchComponent_div_1_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HotelSearchComponent_div_1_div_41_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r43.toggleShowFare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Check Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HotelSearchComponent_div_1_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r19.errorMessage, " ");
} }
function HotelSearchComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HotelSearchComponent_div_1_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.clickChange("place"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Destination/Airport/Landmark/Hotel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HotelSearchComponent_div_1_input_11_Template, 1, 2, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HotelSearchComponent_div_1_div_12_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HotelSearchComponent_div_1_mat_error_13_Template, 4, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HotelSearchComponent_div_1_mat_error_14_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "datepicker-range", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("searchFormGroupChange", function HotelSearchComponent_div_1_Template_datepicker_range_searchFormGroupChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r47.hotelSearchFormGroup = $event; })("clickChange", function HotelSearchComponent_div_1_Template_datepicker_range_clickChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.click = $event; })("isSubmittedChange", function HotelSearchComponent_div_1_Template_datepicker_range_isSubmittedChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.isSubmitted = $event; })("isSearchPageChange", function HotelSearchComponent_div_1_Template_datepicker_range_isSearchPageChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.isSearchPage = $event; })("nameChange", function HotelSearchComponent_div_1_Template_datepicker_range_nameChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r51.rangeNames = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HotelSearchComponent_div_1_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.clickChange("rooms"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Rooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HotelSearchComponent_div_1_div_23_Template, 4, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HotelSearchComponent_div_1_div_24_Template, 5, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HotelSearchComponent_div_1_mat_error_25_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HotelSearchComponent_div_1_Template_div_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.clickChange("count"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Guests ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, HotelSearchComponent_div_1_div_32_Template, 4, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HotelSearchComponent_div_1_div_33_Template, 5, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, HotelSearchComponent_div_1_mat_error_34_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HotelSearchComponent_div_1_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, HotelSearchComponent_div_1_div_39_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, HotelSearchComponent_div_1_div_40_Template, 23, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, HotelSearchComponent_div_1_div_41_Template, 3, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, HotelSearchComponent_div_1_div_42_Template, 4, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "app-hotel-list", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("isLoadingChange", function HotelSearchComponent_div_1_Template_app_hotel_list_isLoadingChange_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r55.isLoadingChange($event); })("isHotelListFetchingChange", function HotelSearchComponent_div_1_Template_app_hotel_list_isHotelListFetchingChange_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.isHotelListFetchingChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.click.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.click.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.hotelSearchFormGroup.get("place").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.hotelSearchFormGroup.hasError("fromSelected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("searchFormGroup", ctx_r1.hotelSearchFormGroup)("click", ctx_r1.click)("isSubmitted", ctx_r1.isSubmitted)("isSearchPage", ctx_r1.isSearchPage)("name", ctx_r1.rangeNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.click.rooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.click.rooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.hotelSearchFormGroup.get("rooms").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.click.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.click.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.hotelSearchFormGroup.get("count").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.isHotelListFetching);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isHotelsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.hotelList.length > 0 && !ctx_r1.showFares && !ctx_r1.isHotelsLoading && ctx_r1.errorMessage == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.hotelList.length > 0 && !ctx_r1.showFares && !ctx_r1.isHotelsLoading && ctx_r1.errorMessage == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading && ctx_r1.errorMessage != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r1.showFares && !ctx_r1.isHotelListLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isLoading", ctx_r1.isHotelListLoading)("isHotelListFetching", ctx_r1.isHotelListFetching)("search", ctx_r1.searchSubject.asObservable());
} }
class HotelSearchComponent extends _hotel__WEBPACK_IMPORTED_MODULE_9__["Hotel"] {
    constructor(loginService, hotelRetrieveService, renderer, httpClient, store, router, localStorage) {
        super(loginService);
        this.hotelRetrieveService = hotelRetrieveService;
        this.renderer = renderer;
        this.httpClient = httpClient;
        this.store = store;
        this.router = router;
        this.localStorage = localStorage;
        this.hotelData = {};
        this.hotelLoading = false;
        this.loadingLeavingFrom = false;
        this.loadingLeavingTo = false;
        this.isHotelListLoading = true;
        this.isSearchPage = true;
        this.rangeNames = [
            "Check-In",
            "Check-Out"
        ];
        this.hotelList = [];
        this.searchList = [];
        this.errorMessage = '';
        this.showFares = false;
        this.minToDate = new Date();
        this.maxToDate = new Date(this.minToDate.getTime() + 1000 * 60 * 60 * 24 * 150);
        this.minFromDate = new Date();
        this.maxFromDate = new Date(this.minFromDate.getTime() + 1000 * 60 * 60 * 24 * 150);
        this.errorMatcher = new _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["MyErrorStateMatcher"]();
        this.hotelSearchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //trip: new FormControl(this.tripType[0], Validators.required),
            place: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(new Date().getTime() + 1000 * 60 * 60 * 24).toISOString(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            count: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            adults: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            childrens: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rooms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, {
            validators: [this.sameStartEndValidator, this.fromSelected]
        });
        this.query = {};
        this.airPortList = [];
        this.click = {
            place: true,
            start: true,
            end: true,
            count: true,
            trip: true,
            rooms: true,
        };
        this.isLoading = false;
        this.isHotelsLoading = false;
        this.isHotelListFetching = true;
        this.isSubmitted = false;
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        document.body.style.backgroundSize = "100% 165px";
        this.searchCriteria$.subscribe((searchCriteria) => {
            if (searchCriteria != null) {
                this.updateFormGroup(searchCriteria);
                this.localStorage.setItem('hotelSearchFormGroup', JSON.stringify(searchCriteria));
            }
            else {
                const searchCriteriaTxt = this.localStorage.getItem('hotelSearchFormGroup');
                if (searchCriteriaTxt != null) {
                    let searchCriteriaJSON = JSON.parse(searchCriteriaTxt);
                    searchCriteriaJSON = this.checkDate(searchCriteriaJSON);
                    this.updateFormGroup(searchCriteriaJSON);
                }
            }
        });
    }
    //Method to be invoked everytime we receive a new instance
    //of the address object from the onSelect event emitter.
    setAddress(addrObj) {
        //We are wrapping this in a zone method to reflect the changes
        //to the object in the DOM.
        this.click.place = true;
        this.placeChange(null);
        let json = this.hotelSearchFormGroup.value;
        json.place = addrObj;
        this.hotelSearchFormGroup.patchValue(json);
        this.placeInput.first.nativeElement.focus();
    }
    ngOnInit() {
        this.showFares = false;
        //this.getAllAirportSearchService(); //need to uncomment when location search available
        this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
        this.filteredPlaceOptions = this.hotelSearchFormGroup.get('place').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((hotelCode) => {
            if (this.filter(hotelCode)) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                //this.loadingLeavingFrom = true;
                //return this.searchAirportSearchService(hotelCode);
            }
        }));
        /*
        this.filteredFromOptions = this.hotelSearchFormGroup.get('place').valueChanges
          .pipe(
            switchMap((hotelCode) => {
              if(hotelCode == '' || hotelCode == null ) {
                return of(this.airPortList);
              } else {
                this.loadingLeavingFrom = true;
                return this.searchOfflineAirportSearch(hotelCode);
              }
          })); */
        this.hotelSearchFormGroup.get('start').valueChanges.subscribe(val => {
            this.minFromDate = val;
        });
        this.hotelSearchFormGroup.get('end').valueChanges.subscribe(val => {
        });
        this.search();
    }
    ngAfterViewInit() {
        // this.hotelListComponentRef.searchHotels(this.getSearchQuery());
        // console.log('ngAfterViewInit');
        this.emitEventToHotelList();
    }
    ngOnDestroy() {
        this.docClickSubscription();
    }
    checkDate(searchCriteriaJSON) {
        const time = this.truncateTime(null);
        let dateChange = false;
        if (Date.parse(this.truncateTime(searchCriteriaJSON.start)) < Date.parse(time)) {
            searchCriteriaJSON.start = time;
            dateChange = true;
        }
        if (Date.parse(this.truncateTime(searchCriteriaJSON.end)) < Date.parse(time)) {
            searchCriteriaJSON.end = time;
            dateChange = true;
        }
        if (Date.parse(searchCriteriaJSON.end) < Date.parse(searchCriteriaJSON.start)) {
            searchCriteriaJSON.start = searchCriteriaJSON.end;
            dateChange = true;
        }
        if (dateChange) {
            this.localStorage.setItem('hotelSearchFormGroup', JSON.stringify(searchCriteriaJSON));
        }
        return searchCriteriaJSON;
    }
    updateFormGroup(searchCriteria) {
        let json = this.hotelSearchFormGroup.value;
        json = Object.assign(Object.assign({}, json), searchCriteria);
        /* this.radioSelected = json.trip == "round"  ? "round" : "one";
        if(this.radioSelected == 'one'){
          this.hotelSearchFormGroup.get('end').disable();
        } */
        this.hotelSearchFormGroup.patchValue(json);
    }
    emitEventToHotelList() {
        let searchObj = {
            selectedHotelList: this.selectHotels(),
            searchForm: this.hotelSearchFormGroup.value
        };
        this.searchSubject.next(searchObj);
    }
    onDocumentClick(event) {
        // console.log(event.target.className);
        if (event.target.className.indexOf("mat-calendar-body-cell-content") != -1) {
            // console.log("mat-calendar clicks");
            this.startDateChange(null, null);
            this.endDateChange(null, null);
        }
        else if (event.target.className.indexOf("mat-option-text") != -1) {
            // console.log("mat-option clicks");
            // has to uncomment after travel popup
            this.countChange(null);
            this.roomsChange(null);
            //this.tripChange(null);
        }
        else if (event.target.className.indexOf("cdk-overlay-backdrop") != -1) {
            // console.log("overlay clicks");
            this.startDateChange(null, null);
            this.endDateChange(null, null);
            // has to uncomment after travel popup
            this.countChange(null);
            this.roomsChange(null);
            //this.tripChange(null);
        }
        else if (event.target.id == "place"
            || event.target.id == "placeDiv"
            || this.hotelPlaceDiv.nativeElement.contains(event.target)) {
            // console.log("search_inputField from clicks");
            let json = this.hotelSearchFormGroup.value;
            const fromValue = json.from;
            json.from = '';
            this.hotelSearchFormGroup.patchValue(json);
            json.from = fromValue;
            this.hotelSearchFormGroup.patchValue(json);
            this.placeInput.first.nativeElement.focus();
        } /*else if (event.target.className.indexOf("mat-option-text dismiss") == -1) {
          // console.log("mat-option-text dismiss clicks");
          this.placeChange(null);
          this.toChange(null);
        } */
        else if (!this.hotelPlaceDiv.nativeElement.contains(event.target)) {
            if (!this.hotelPlaceDiv.nativeElement.contains(event.target)) {
                // console.log("outside hotelPlaceDiv");
                this.placeChange(null);
            }
        }
        // has to uncomment after travel popup
        /*if(this.countPopupDiv != null && (this.countPopupDiv.nativeElement.contains(event.target)
           || event.target.className.indexOf("mat-option-text") != -1)
           || event.target.className.indexOf("search_inputField h2 count") != -1
           || event.target.className.indexOf("display6 count") != -1
           || this.travellersDiv.nativeElement.contains(event.target)) {
          // console.log("inside countPopupDiv");
        } else {
          // console.log("outside countPopupDiv");
          this.countChange(null);
        }*/
    }
    changeEvents() {
        console.log("changeEvents");
        this.startDateChange(null, null);
        this.endDateChange(null, null);
        this.placeChange(null);
        this.countChange(null);
        this.roomsChange(null);
        //this.tripChange(null);
    }
    clickChange(objType) {
        this.click[objType] = false;
        if (objType == 'start') {
            this.openStart();
        }
        else if (objType == 'end') {
            this.openEnd();
        }
        else if (objType == 'count') {
            this.openTravellers();
        }
        else if (objType == 'rooms') {
            this.openTravellersRooms();
        }
    }
    openTravellers() {
        let self = this;
        setTimeout(() => {
            self.travellersSelect.open();
        }, 50);
    }
    openTravellersRooms() {
        let self = this;
        setTimeout(() => {
            self.travellersSelectRooms.open();
        }, 50);
    }
    // openTrip(){
    //   let self = this;
    //      setTimeout(
    //          ()=>{
    //              self.tripSelect.open();
    //          },
    //          50
    //      );
    // }
    openStart() {
        let self = this;
        setTimeout(() => {
            self.picker1.open();
        }, 50);
    }
    openEnd() {
        let self = this;
        setTimeout(() => {
            self.picker2.open();
        }, 50);
    }
    startDateChange(type, event) {
        if (!this.hotelSearchFormGroup.get('start').hasError('required')) {
            this.click.start = true;
            let json = this.hotelSearchFormGroup.value;
            if (new Date(json.start).getTime() > new Date(json.end).getTime()) {
                json.end = new Date(json.start.getTime() + 1000 * 60 * 60 * 24);
                this.hotelSearchFormGroup.patchValue(json);
            }
        }
    }
    endDateChange(type, event) {
        if (!this.hotelSearchFormGroup.get('end').hasError('required')
            && !this.hotelSearchFormGroup.hasError('startEndMatch')) {
            this.click.end = true;
        }
    }
    placeChange($event) {
        if (!this.hotelSearchFormGroup.get('place').hasError('required')) {
            this.click.place = true;
        }
    }
    countChange($event) {
        if (!this.hotelSearchFormGroup.get('count').hasError('required')) {
            this.click.count = true;
        }
    }
    roomsChange($event) {
        if (!this.hotelSearchFormGroup.get('rooms').hasError('required')) {
            this.click.rooms = true;
        }
    }
    searchAirportSearchService(hotelCode) {
        const code = hotelCode.data != null ? hotelCode.data : hotelCode;
        return this.hotelRetrieveService.searchCity(code)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            this.loadingLeavingTo = false;
            this.loadingLeavingFrom = false;
            return data.predictions;
        }));
    }
    filterAirport(hotelCode) {
        let suggestions = [];
        let airPortCode = hotelCode.name || hotelCode.value;
        airPortCode = airPortCode == null ? hotelCode : airPortCode;
        for (const airPort of this.airPortList) {
            if (airPort.name.toLowerCase().indexOf(airPortCode.toLowerCase()) === 0
                || airPort.id.toLowerCase().includes(airPortCode.toLowerCase())) {
                suggestions.push(airPort);
            }
        }
        return suggestions;
    }
    getAllAirportSearchService() {
        this.hotelRetrieveService.getAllAirport().
            subscribe((data) => {
            this.airPortList = data;
            this.isLoading = false;
        });
    }
    searchHotelsService() {
        this.hotelLoading = true;
        this.hotelRetrieveService.searchHotels(this.getSearchQuery()).
            subscribe((data) => {
            this.hotelData = data;
            this.hotelLoading = false;
        });
    }
    filter(hotelCode) {
        if (hotelCode == '' || hotelCode == null) {
            return true;
        }
        else if (hotelCode.data != null) {
            return false;
        }
        else if (hotelCode.length >= 1) {
            return false;
        }
        else {
            return true;
        }
    }
    isUS(country) {
        return country.toUpperCase() === 'US' || country.toUpperCase() === 'UNITED STATES';
    }
    getSearchQuery() {
        const searchCriteriaTxt = this.localStorage.getItem('hotelSearchFormGroup');
        const formGroupValue = this.hotelSearchFormGroup.value;
        let qry = {
            city: formGroupValue.place ? formGroupValue.place : 'miami',
            state: 'FL',
            country: 'US',
            chainCode: ''
        };
        // const place = formGroupValue.place; // formGroupValue.place.data || formGroupValue.place.id|| formGroupValue.place;
        // qry.city = place.locality;
        // qry.state =  this.isUS(place.country) ? place.admin_area_l1 : place.country;
        // qry.country = place.country;
        // this.query = qry;
        return qry;
    }
    truncateTime(time) {
        if (time == null) {
            time = new Date();
        }
        else {
            time = new Date(time);
            var userTimezoneOffset = time.getTimezoneOffset() * 60000;
            time = new Date(time.getTime() - userTimezoneOffset);
            // time = new Date(time)
        }
        const timeStr = time.toISOString();
        return timeStr.substring(0, timeStr.lastIndexOf('T')) + 'T00:00:00';
    }
    search() {
        let tenantConfig = Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_6__["getTenantModule"])();
        this.selectedAll = false;
        // if(this.hotelSearchFormGroup.valid) {
        this.isHotelsLoading = true;
        this.isHotelListLoading = true;
        // this.searchHotelsService();
        // let hotelSearchFormGroupValue = this.hotelSearchFormGroup.value;
        // this.localStorage.setItem('hotelSearchFormGroup', JSON.stringify(hotelSearchFormGroupValue));
        // this.store.dispatch(new SetSearchCriteriaData(hotelSearchFormGroupValue));
        //this.hotelListComponentRef.searchHotels(this.getSearchQuery());
        this.hotelList = [];
        this.errorMessage = '';
        return this.hotelRetrieveService.searchHotels(this.getSearchQuery()).subscribe((hotelData) => {
            this.showFares = false;
            if (hotelData.length == 0) {
                this.errorMessage = 'No Hotels Are Available In Specified Location';
                this.isHotelListLoading = false;
                this.isHotelsLoading = false;
                this.isHotelListFetching = false;
            }
            else {
                for (let hotel of hotelData) {
                    hotel.selected = false;
                    this.hotelList.push(hotel);
                }
                this.searchList = this.hotelList;
                if (tenantConfig.hotel && tenantConfig.hotel.skipHotelSearchSelectionStep) {
                    this.toggleShowFare();
                }
                this.isHotelsLoading = false;
                //console.log(this.hotelList);
            }
        }, error => {
            this.isHotelListLoading = false;
            this.isLoading = false;
            this.isHotelListFetching = false;
            if (error.Error.extensionPoint) {
                this.errorMessage = error.Error.extensionPoint.any[0].errors[0].notifications[0].message;
            }
            else {
                this.errorMessage = 'No Hotels Are Available In Specified Location';
            }
        });
        // } else {
        //   this.hotelSearchFormGroup.markAllAsTouched();
        //   this.isSubmitted = true;
        // }
    }
    toggleShowFare() {
        this.showFares = !this.showFares;
        if (this.showFares) {
            this.emitEventToHotelList();
        }
    }
    selectHotels() {
        let selectedHotels = [];
        for (let hotel of this.hotelList) {
            if (hotel.selected) {
                selectedHotels.push(hotel);
            }
        }
        return selectedHotels.length == 0 ? this.hotelList : selectedHotels;
    }
    selectAll() {
        for (var i = 0; i < this.searchList.length; i++) {
            this.searchList[i].selected = this.selectedAll;
        }
    }
    checkIfAllSelected() {
        this.selectedAll = this.searchList.every(function (item) {
            return item.selected == true;
        });
    }
    searchHotelName(hotelString) {
        this.searchList = this.hotelList.filter(function (item) {
            if (item.basicPropertyInfo.name.toLowerCase().indexOf(hotelString.toLowerCase()) != -1) {
                return item;
            }
        });
        this.checkIfAllSelected();
        //console.log(this.searchList);
    }
    isLoadingChange(loading) {
        this.isHotelListLoading = loading;
    }
    isHotelListFetchingChange(loading) {
        this.isHotelListFetching = loading;
    }
}
HotelSearchComponent.ɵfac = function HotelSearchComponent_Factory(t) { return new (t || HotelSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_11__["HotelRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_14__["LocalStorage"])); };
HotelSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HotelSearchComponent, selectors: [["app-hotel-search"]], viewQuery: function HotelSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c8, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.picker1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.picker2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.travellersSelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.travellersSelectRooms = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.hotelPlaceDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.countPopupDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.travellersDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.hotelListComponentRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.placeInput = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["class", "spinnerBg", 4, "ngIf"], ["class", "d-flex flex-column-fluid", 4, "ngIf"], [1, "spinnerBg"], [1, "spinner", 3, "diameter"], [1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "bg-white", "gutter-b"], [1, "brdSmallBlock_inner"], ["id", "hotelDiv", 1, "searchCity", 2, "width", "30%", 3, "click"], ["hotelPlaceDiv", ""], [1, "searchContent"], [1, "search_lbl", "text-dark-50", "pb-2"], ["id", "place", "type", "text", "class", "search_inputField h4 text-truncate from", "readonly", "", 3, "title", "value", "click", 4, "ngIf"], ["class", "lessMtlr", 4, "ngIf"], [4, "ngIf"], [1, "searchDate", 2, "width", "24%", 3, "searchFormGroup", "click", "isSubmitted", "isSearchPage", "name", "searchFormGroupChange", "clickChange", "isSubmittedChange", "isSearchPageChange", "nameChange"], ["datePickerMultiple", ""], [1, "searchDate", 2, "width", "18%"], [1, "searchContent", 3, "click"], ["travellersDiv", ""], [1, "fas", "fa-angle-down", "text-primary"], ["id", "count", "class", "search_inputField h4 count", 4, "ngIf"], [1, "bg-primary", "rounded-top-right", "rounded-bottom-right", 2, "width", "11%"], ["type", "button", 1, "btn", "btn-text-white", "btn-hover-text-white", "h3", "border-0", "font-weight-bold", "pt-6", "pl-6", "pb-5", 3, "disabled", "click"], [1, "far", "fa-arrow-alt-circle-right", "text-white"], ["class", "row", 4, "ngIf"], ["class", "fixed-btm", 4, "ngIf"], ["class", "alert alert-custom alert-outline-info fade show text-center mt-20 mb-5 border-0", "role", "alert", 4, "ngIf"], [3, "hidden"], [3, "isLoading", "isHotelListFetching", "search", "isLoadingChange", "isHotelListFetchingChange"], ["id", "place", "type", "text", "readonly", "", 1, "search_inputField", "h4", "text-truncate", "from", 3, "title", "value", "click"], [1, "lessMtlr"], ["appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", 3, "formControl", "value", "errorStateMatcher", "onSelect"], ["id", "count", 1, "search_inputField", "h4", "count"], [1, "display6", "text-dark-65", "pl-1", "count"], [3, "formControl", "selectionChange"], ["travellersSelectRooms", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["travellersSelect", ""], [1, "card", "card-custom", "card-transparent", "card-shadowless"], [1, "card-header", "flex-wrap", "pl-0"], [1, "card-title"], ["type", "text", "placeholder", "Enter Hotel Name", 1, "form-control", "min-w-500px", 3, "input"], [1, "card-toolbar"], [1, "card-body", "p-0"], ["id", "kt_datatable", 1, "table", "table-checkable", "font-size-lg", "bg-white"], ["aria-label", "Record ID", 1, "dt-left", "sorting_disabled", 2, "width", "30px"], [1, "checkbox", "checkbox-single"], ["type", "checkbox", 1, "group-checkable", 3, "ngModel", "ngModelChange", "change"], [4, "ngFor", "ngForOf"], [1, "dt-left", "dtr-control"], ["type", "checkbox", 1, "checkable", 3, "ngModel", "ngModelChange", "change"], [1, "fixed-btm"], [1, "btn", "btn-primary", "btn-lg", "font-weight-bolder", "mb-2", 3, "click"], ["role", "alert", 1, "alert", "alert-custom", "alert-outline-info", "fade", "show", "text-center", "mt-20", "mb-5", "border-0"], [1, "alert-text", "h2"], [1, "fas", "fa-bed", "icon-2x", "text-info", "pr-2"]], template: function HotelSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HotelSearchComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HotelSearchComponent_div_1_Template, 45, 24, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"], _shared_components_datepicker_range_datepicker_range_component__WEBPACK_IMPORTED_MODULE_17__["DatepickerRangeComponent"], _partials_hotel_list_hotel_list_component__WEBPACK_IMPORTED_MODULE_18__["HotelListComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["[_nghost-%COMP%]     .mat-form-field-flex {\n    background-color: #fff;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 1rem; border-top: 3px solid #EBEDF3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvaG90ZWwvcGFnZXMvaG90ZWwtc2VhcmNoL2hvdGVsLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhLEVBQUUsNkJBQTZCO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvaG90ZWwvcGFnZXMvaG90ZWwtc2VhcmNoL2hvdGVsLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAxcmVtOyBib3JkZXItdG9wOiAzcHggc29saWQgI0VCRURGMztcbn0iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(src_app_store_hotel_hotel_state__WEBPACK_IMPORTED_MODULE_7__["HotelStateModule"].getSearchCriteria)
], HotelSearchComponent.prototype, "searchCriteria$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HotelSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-hotel-search',
                templateUrl: './hotel-search.component.html',
                styleUrls: ['./hotel-search.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"] }, { type: _services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_11__["HotelRetrieveService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }, { type: src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_14__["LocalStorage"] }]; }, { picker1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['picker1']
        }], picker2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['picker2']
        }], travellersSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['travellersSelect']
        }], travellersSelectRooms: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['travellersSelectRooms']
        }], hotelPlaceDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['hotelPlaceDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }]
        }], countPopupDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['countPopupDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }]
        }], travellersDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['travellersDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }]
        }], placeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['placeInput']
        }], hotelListComponentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['hotelListComponent', { static: false }]
        }], searchCriteria$: [] }); })();


/***/ }),

/***/ "nytM":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/hotel/pages/hotel-order-status/hotel-order-status.component.ts ***!
  \********************************************************************************************/
/*! exports provided: HotelOrderStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelOrderStatusComponent", function() { return HotelOrderStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _hotel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hotel */ "ZNpG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/storage/local-storage */ "ADqn");
/* harmony import */ var _services_hotel_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/hotel-order.service */ "XddN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/hotel-retrieve.service */ "9lgk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");













function HotelOrderStatusComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 30);
} }
function HotelOrderStatusComponent_div_1_h6_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Order Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.orderId);
} }
function HotelOrderStatusComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Hotel: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Failed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HotelOrderStatusComponent_div_1_h6_10_Template, 4, 1, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.orderId != null);
} }
function HotelOrderStatusComponent_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"](" ", ctx_r4.hotelInfo.contactInformation[0].address[0].street, ", ", ctx_r4.hotelInfo.contactInformation[0].address[0].city, ", ", ctx_r4.hotelInfo.contactInformation[0].address[0].stateProv.value || ctx_r4.hotelInfo.contactInformation[0].address[0].stateProv.name, " ", ctx_r4.hotelInfo.contactInformation[0].address[0].country.value || ctx_r4.hotelInfo.contactInformation[0].address[0].country.name, "");
} }
function HotelOrderStatusComponent_div_2_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"](" ", ctx_r5.hotelInfo.contactInformation[0].address[0].addressLine[0], ", ", ctx_r5.hotelInfo.contactInformation[0].address[0].city, ", ", ctx_r5.hotelInfo.contactInformation[0].address[0].stateProv.value || ctx_r5.hotelInfo.contactInformation[0].address[0].stateProv.name, " ", ctx_r5.hotelInfo.contactInformation[0].address[0].country.value || ctx_r5.hotelInfo.contactInformation[0].address[0].country.name, "");
} }
function HotelOrderStatusComponent_div_2_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HotelOrderStatusComponent_div_2_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Room ", i_r15 + 1, " ");
} }
function HotelOrderStatusComponent_div_2_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HotelOrderStatusComponent_div_2_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r16.product[0].roomStay.roomType.description.text[0].value), " ");
} }
function HotelOrderStatusComponent_div_2_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Guests ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HotelOrderStatusComponent_div_2_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r11.getGuestInfo(element_r17.product[0].guestCount), " ");
} }
function HotelOrderStatusComponent_div_2_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 43);
} }
function HotelOrderStatusComponent_div_2_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 44);
} }
function HotelOrderStatusComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Hotel: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Confirmed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Order Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function HotelOrderStatusComponent_div_2_Template_img_error_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HotelOrderStatusComponent_div_2_div_22_Template, 3, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HotelOrderStatusComponent_div_2_div_23_Template, 3, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](42, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, HotelOrderStatusComponent_div_2_th_43_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, HotelOrderStatusComponent_div_2_td_44_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](45, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, HotelOrderStatusComponent_div_2_th_46_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, HotelOrderStatusComponent_div_2_td_47_Template, 3, 3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](48, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, HotelOrderStatusComponent_div_2_th_49_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, HotelOrderStatusComponent_div_2_td_50_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, HotelOrderStatusComponent_div_2_tr_51_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, HotelOrderStatusComponent_div_2_tr_52_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.hotelInfo.hotelImageURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.hotelInfo.basicPropertyInfo.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.hotelInfo.contactInformation[0].address[0].addressLine.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.hotelInfo.contactInformation[0].address[0].addressLine.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.orderResponse.order.offer[0].termsAndConditions[0].cancelPenalties[0].description[0].text[0].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getRoomInfo(ctx_r2.orderResponse.order.offer[0].product[0].numberOfRooms));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](38, 12, ctx_r2.orderResponse.order.offer[0].product[0].roomStay.dateTimeSpan.timeSpan.start, "mediumDate"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](39, 15, ctx_r2.orderResponse.order.offer[0].product[0].roomStay.dateTimeSpan.timeSpan.end, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r2.orderResponse.order.offer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
} }
class HotelOrderStatusComponent extends _hotel__WEBPACK_IMPORTED_MODULE_2__["Hotel"] {
    constructor(router, loginService, localStorage, hotelOrderService, _snackBar, activatedRoute, hotelRetrieveService) {
        super(loginService);
        this.router = router;
        this.localStorage = localStorage;
        this.hotelOrderService = hotelOrderService;
        this._snackBar = _snackBar;
        this.activatedRoute = activatedRoute;
        this.hotelRetrieveService = hotelRetrieveService;
        this.isSubmitted = false;
        this.isLoading = false;
        this.orderResponse = {
            "payloadStdAttributes": {
                "timeStamp": "2020-11-02 10:27 AM UTC",
                "targetName": "Test",
                "version": 5.0,
                "transactionIdentifier": "f186d848-e756-4f8a-abc4-e0db37c2f39b",
                "transactionStatusCode": "END"
            },
            "result": {
                "errors": [],
                "warnings": [],
                "status": {
                    "value": "COMPLETE"
                }
            },
            "order": {
                "offer": [],
                "primaryTraveler": {
                    "personName": {
                        "prefix": [],
                        "given": [],
                        "middle": [],
                        "surname": "",
                        "suffix": [],
                        "title": []
                    },
                    "address": [],
                    "telephone": [],
                    "email": []
                },
                "payment": [],
                "confirmationID": {
                    "value": ""
                },
                "extensionPoint": {
                    "any": []
                },
                "objID": ""
            }
        };
        this.flightSegmentList = [];
        this.displayedColumns = ['Item', 'Description', 'Guests'];
        document.body.style.backgroundSize = "100% 165px";
        this.activatedRoute.params.subscribe(params => {
            this.orderId = params.id;
            this.surname = params.surname;
            this.chainCode = params.chainCode;
            //this.ngOnInit();
        });
    }
    ngOnInit() {
        this.isLoading = true;
        if (this.orderId != null && this.surname != null && this.chainCode != null) {
            let query = {
                confirmationId: this.orderId,
                surname: this.surname,
                chainCode: this.chainCode
            };
            this.hotelOrderService.getOrderById(query).subscribe((data) => {
                // console.log('gerOrderByName');
                // console.log(data);
                this.orderResponse = data.createOrderRS[0]; //this.getOrderData(data, this.order);
                if (this.orderResponse.result.errors.length == 0 && this.orderResponse.result.status.value == 'COMPLETE') {
                    this.getHotelInfo();
                }
                else {
                    this.isLoading = false;
                }
            });
        }
    }
    getHotelInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let query = {
                chainCode: this.orderResponse.order.offer[0].facilityIdentifier.facilityKey.chainCode,
                brandCode: '',
                code: this.orderResponse.order.offer[0].facilityIdentifier.facilityKey.facilityCode
            };
            this.hotelInfo = yield this.hotelRetrieveService.getHotelDescription(query);
            // let multiMediaArray = this.hotelInfo && this.hotelInfo.multimediaCollection && this.hotelInfo.multimediaCollection.multimedia;
            // for(let multiMedia of multiMediaArray){
            //   if(multiMedia.imageCategory && multiMedia.imageCategory.image && multiMedia.imageCategory.image.length > 0){
            //     hotelImageURL = multiMedia.imageCategory.image[0].url;
            //   }
            // }
            this.hotelInfo["hotelImageURL"] = yield this.hotelRetrieveService.getHotelImage(query.chainCode, query.code);
            this.isLoading = false;
        });
    }
}
HotelOrderStatusComponent.ɵfac = function HotelOrderStatusComponent_Factory(t) { return new (t || HotelOrderStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_hotel_order_service__WEBPACK_IMPORTED_MODULE_6__["HotelOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_8__["HotelRetrieveService"])); };
HotelOrderStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HotelOrderStatusComponent, selectors: [["app-hotel-order-status"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "d-flex flex-column-fluid", 4, "ngIf"], [1, "spinner", 3, "diameter"], [1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "brdSmallBlock", "gutter-b", "d-flex"], [1, "brdSmallBlock_inner", "pt-2", "flex-column", "align-items-center"], [1, "text-white"], [1, "opacity-70", "font-weight-normal"], [1, "fas", "fa-times-circle", "text-danger", "icon-xl"], ["class", "text-white", 4, "ngIf"], [1, "opacity-70"], [1, "fas", "fa-check-circle", "text-success", "icon-xl"], [1, "gutter-b"], [1, "card", "card-custom", "mb-3"], [1, "card-body", "p-0"], [1, "d-flex"], [1, "htlImgBlock", "d-flex", "align-items-center", "justify-content-center"], ["alt", "image", 1, "w-100", 2, "height", "150px", 3, "src", "error"], [1, "d-flex", "flex-column", "flex-wrap", "flex-lg-fill", "p-5", "w-100"], [1, "mb-1"], ["class", "d-flex text-muted font-weight-bold font-size-lg", 4, "ngIf"], [1, "d-block", "pt-3"], [1, "btn", "btn-icon", "btn-outline-secondary", "btn-circle", "btn-xs", "mr-2"], [1, "fas", "fa-slash", "icon-1x", "opacity-50"], [1, "font-size-lg"], [1, "d-flex", "font-size-lg", "font-weight-bold"], [1, "d-block", "pt-4"], [1, "fas", "fa-house-user", "text-primary", "pr-2"], [1, "d-block", "pt-4", "ml-10"], [1, "fas", "fa-door-open", "text-success", "pr-2"], [1, "separator", "separator-solid"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Description"], ["matColumnDef", "Guests"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "d-flex", "text-muted", "font-weight-bold", "font-size-lg"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function HotelOrderStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HotelOrderStatusComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HotelOrderStatusComponent_div_1_Template, 11, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HotelOrderStatusComponent_div_2_Template, 53, 18, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.orderResponse.result.errors.length != 0 && ctx.orderResponse.result.status.value != "COMPLETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.orderId != null && ctx.orderResponse.result.errors.length == 0 && ctx.orderResponse.result.status.value == "COMPLETE");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.htlImgBlock[_ngcontent-%COMP%] {\n  width: 230px;\n  min-width: 230px;\n  outline: none;\n  background-color: #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvaG90ZWwvcGFnZXMvaG90ZWwtb3JkZXItc3RhdHVzL2hvdGVsLW9yZGVyLXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9ob3RlbC9wYWdlcy9ob3RlbC1vcmRlci1zdGF0dXMvaG90ZWwtb3JkZXItc3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmh0bEltZ0Jsb2NrIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBtaW4td2lkdGg6IDIzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HotelOrderStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-hotel-order-status',
                templateUrl: './hotel-order-status.component.html',
                styleUrls: ['./hotel-order-status.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"] }, { type: _services_hotel_order_service__WEBPACK_IMPORTED_MODULE_6__["HotelOrderService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_8__["HotelRetrieveService"] }]; }, null); })();


/***/ }),

/***/ "rD+a":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/hotel/pages/hotel-dashboard/hotel-dashboard.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HotelDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelDashboardComponent", function() { return HotelDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/login/login.component */ "/2yL");
/* harmony import */ var _hotel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hotel */ "ZNpG");
/* harmony import */ var src_app_store_hotel_hotel_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/hotel/hotel.actions */ "kx4g");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/hotel-retrieve.service */ "9lgk");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _shared_components_datepicker_range_datepicker_range_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/datepicker-range/datepicker-range.component */ "WJVJ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");




















const _c0 = ["picker1"];
const _c1 = ["picker2"];
const _c2 = ["travellersSelect"];
const _c3 = ["travellersSelectRooms"];
const _c4 = ["hotelPlaceDiv"];
const _c5 = ["countPopupDiv"];
const _c6 = ["travellersDiv"];
const _c7 = ["placeInput"];
function HotelDashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function HotelDashboardComponent_div_1_input_20_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotelDashboardComponent_div_1_input_20_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.clickChange("place"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.hotelSearchFormGroup.value.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.hotelSearchFormGroup.value.place);
} }
function HotelDashboardComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function HotelDashboardComponent_div_1_div_21_Template_input_onSelect_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.setAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r5.hotelSearchFormGroup.value.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.hotelSearchFormGroup.get("place"))("errorStateMatcher", ctx_r5.errorMatcher);
} }
function HotelDashboardComponent_div_1_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Destination/Airport/Landmark/Hotel is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelDashboardComponent_div_1_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Select From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelDashboardComponent_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.hotelSearchFormGroup.value.rooms, "");
} }
function HotelDashboardComponent_div_1_div_34_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", number_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", number_r23, " ");
} }
function HotelDashboardComponent_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function HotelDashboardComponent_div_1_div_34_Template_mat_select_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.roomsChange($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HotelDashboardComponent_div_1_div_34_mat_option_4_Template, 2, 2, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r11.hotelSearchFormGroup.get("rooms"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.numbers);
} }
function HotelDashboardComponent_div_1_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelDashboardComponent_div_1_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Guests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.hotelSearchFormGroup.value.count, "");
} }
function HotelDashboardComponent_div_1_div_44_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", number_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", number_r28, " ");
} }
function HotelDashboardComponent_div_1_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 43, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function HotelDashboardComponent_div_1_div_44_Template_mat_select_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.countChange($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HotelDashboardComponent_div_1_div_44_mat_option_4_Template, 2, 2, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r15.hotelSearchFormGroup.get("count"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.numbers);
} }
function HotelDashboardComponent_div_1_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelDashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Try searching for a Destination, Airport, a specific hotel, or even a landmark!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotelDashboardComponent_div_1_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.clickChange("place"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Destination/Airport/Landmark/Hotel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HotelDashboardComponent_div_1_input_20_Template, 1, 2, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HotelDashboardComponent_div_1_div_21_Template, 3, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HotelDashboardComponent_div_1_mat_error_22_Template, 4, 0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HotelDashboardComponent_div_1_mat_error_23_Template, 2, 0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "datepicker-range", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchFormGroupChange", function HotelDashboardComponent_div_1_Template_datepicker_range_searchFormGroupChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.hotelSearchFormGroup = $event; })("clickChange", function HotelDashboardComponent_div_1_Template_datepicker_range_clickChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.click = $event; })("isSubmittedChange", function HotelDashboardComponent_div_1_Template_datepicker_range_isSubmittedChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.isSubmitted = $event; })("isSearchPageChange", function HotelDashboardComponent_div_1_Template_datepicker_range_isSearchPageChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.isSearchPage = $event; })("nameChange", function HotelDashboardComponent_div_1_Template_datepicker_range_nameChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.rangeNames = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 27, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotelDashboardComponent_div_1_Template_div_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.clickChange("rooms"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Rooms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HotelDashboardComponent_div_1_div_33_Template, 4, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HotelDashboardComponent_div_1_div_34_Template, 5, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HotelDashboardComponent_div_1_mat_error_35_Template, 2, 0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 31, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotelDashboardComponent_div_1_Template_div_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.clickChange("count"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Guests ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, HotelDashboardComponent_div_1_div_43_Template, 4, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HotelDashboardComponent_div_1_div_44_Template, 5, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HotelDashboardComponent_div_1_mat_error_45_Template, 2, 0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotelDashboardComponent_div_1_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.click.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.hotelSearchFormGroup.get("place").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.hotelSearchFormGroup.hasError("fromSelected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchFormGroup", ctx_r1.hotelSearchFormGroup)("click", ctx_r1.click)("isSubmitted", ctx_r1.isSubmitted)("isSearchPage", ctx_r1.isSearchPage)("name", ctx_r1.rangeNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.rooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.click.rooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.hotelSearchFormGroup.get("rooms").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.click.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.hotelSearchFormGroup.get("count").hasError("required"));
} }
class HotelDashboardComponent extends _hotel__WEBPACK_IMPORTED_MODULE_5__["Hotel"] {
    constructor(loginService, hotelRetrieveService, renderer, store, router) {
        super(loginService);
        this.hotelRetrieveService = hotelRetrieveService;
        this.renderer = renderer;
        this.store = store;
        this.router = router;
        this.hotelData = {};
        this.hotelLoading = false;
        this.loadingPlace = false;
        this.loadingLeavingTo = false;
        this.minToDate = new Date();
        this.maxToDate = new Date(this.minToDate.getTime() + 1000 * 60 * 60 * 24 * 150);
        this.minFromDate = new Date();
        this.maxFromDate = new Date(this.minFromDate.getTime() + 1000 * 60 * 60 * 24 * 150);
        this.errorMatcher = new _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["MyErrorStateMatcher"]();
        this.hotelSearchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            place: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(new Date().getTime() + 1000 * 60 * 60 * 24), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            count: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            adults: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            childrens: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rooms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        }, {
            validators: [this.sameStartEndValidator, this.fromSelected]
        });
        this.query = {};
        this.airPortList = [];
        this.click = {
            place: true,
            start: true,
            end: true,
            count: true,
            rooms: true,
        };
        this.isLoading = false;
        this.isSubmitted = false;
        this.isSearchPage = false;
        this.rangeNames = [
            "Check-In",
            "Check-Out"
        ];
        // this.hotelSearchFormGroup.get('place').disable();
        // this.hotelSearchFormGroup.get('end').disable();
    }
    //Method to be invoked everytime we receive a new instance 
    //of the address object from the onSelect event emitter.
    setAddress(addrObj) {
        //We are wrapping this in a zone method to reflect the changes
        //to the object in the DOM.
        this.click.place = true;
        this.placeChange(null);
        let json = this.hotelSearchFormGroup.value;
        json.place = addrObj;
        this.hotelSearchFormGroup.patchValue(json);
        this.placeInput.first.nativeElement.focus();
    }
    ngOnInit() {
        //this.getAllAirportSearchService(); //need to uncomment when location search available
        this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
        this.filteredPlaceOptions = this.hotelSearchFormGroup.get('place').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((hotelCode) => {
            if (this.filter(hotelCode)) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                //this.loadingLeavingFrom = true;
                //return this.searchHotelCity(hotelCode);
            }
        }));
        /*
        this.filteredFromOptions = this.hotelSearchFormGroup.get('place').valueChanges
          .pipe(
            switchMap((hotelCode) => {
              if(hotelCode == '' || hotelCode == null ) {
                return of(this.airPortList);
              } else {
                this.loadingLeavingFrom = true;
                return this.searchOfflineAirportSearch(hotelCode);
              }
          })); */
        this.hotelSearchFormGroup.get('start').valueChanges.subscribe(val => {
            this.minFromDate = val;
        });
        this.hotelSearchFormGroup.get('end').valueChanges.subscribe(val => {
        });
    }
    ngOnDestroy() {
        this.docClickSubscription();
    }
    onDocumentClick(event) {
        // console.log(event.target.className);
        if (event.target.className.indexOf("mat-calendar-body-cell-content") != -1) {
            // console.log("mat-calendar clicks");
            this.startDateChange(null, null);
            this.endDateChange(null, null);
        }
        else if (event.target.className.indexOf("mat-option-text") != -1) {
            // console.log("mat-option clicks");
            // has to uncomment after travel popup 
            this.countChange(null);
            this.roomsChange(null);
        }
        else if (event.target.className.indexOf("cdk-overlay-backdrop") != -1) {
            // console.log("overlay clicks");
            this.startDateChange(null, null);
            this.endDateChange(null, null);
            // has to uncomment after travel popup
            this.countChange(null);
            this.roomsChange(null);
        }
        else if (event.target.id == "place"
            || event.target.id == "hotelDiv"
            || this.hotelPlaceDiv.nativeElement.contains(event.target)) {
            // console.log("search_inputField from clicks");
            let json = this.hotelSearchFormGroup.value;
            const placeValue = json.place;
            json.place = '';
            this.hotelSearchFormGroup.patchValue(json);
            json.place = placeValue;
            this.hotelSearchFormGroup.patchValue(json);
            this.placeInput.first.nativeElement.focus();
        } /* else if (event.target.className.indexOf("mat-option-text dismiss") == -1) {
          // console.log("mat-option-text dismiss clicks");
          this.placeChange(null);
          this.toChange(null);
        } */
        else if (!this.hotelPlaceDiv.nativeElement.contains(event.target)) {
            if (!this.hotelPlaceDiv.nativeElement.contains(event.target)) {
                // console.log("outside hotelPlaceDiv");
                this.placeChange(null);
            }
        }
        // has to uncomment after travel popup
        /*if(this.countPopupDiv != null && (this.countPopupDiv.nativeElement.contains(event.target)
           || event.target.className.indexOf("mat-option-text") != -1)
           || event.target.className.indexOf("search_inputField h2 count") != -1
           || event.target.className.indexOf("display6 count") != -1
           || this.travellersDiv.nativeElement.contains(event.target)) {
          // console.log("inside countPopupDiv");
        } else {
          // console.log("outside countPopupDiv");
          this.countChange(null);
        }*/
    }
    changeEvents() {
        console.log("changeEvents");
        this.startDateChange(null, null);
        this.endDateChange(null, null);
        this.placeChange(null);
        this.countChange(null);
        this.roomsChange(null);
    }
    clickChange(objType) {
        this.click[objType] = false;
        if (objType == 'start') {
            this.openStart();
        }
        else if (objType == 'end') {
            this.openEnd();
        }
        else if (objType == 'count') {
            // has to uncomment after travel popup  
            this.openTravellers();
        }
        else if (objType == 'rooms') {
            // has to uncomment after travel popup  
            this.openTravellersRooms();
        }
    }
    openTravellers() {
        let self = this;
        setTimeout(() => {
            self.travellersSelect.open();
        }, 50);
    }
    openTravellersRooms() {
        let self = this;
        setTimeout(() => {
            self.travellersSelectRooms.open();
        }, 50);
    }
    openStart() {
        let self = this;
        setTimeout(() => {
            self.picker1.open();
        }, 50);
    }
    openEnd() {
        let self = this;
        setTimeout(() => {
            self.picker2.open();
        }, 50);
    }
    startDateChange(type, event) {
        if (!this.hotelSearchFormGroup.get('start').hasError('required')) {
            this.click.start = true;
            let json = this.hotelSearchFormGroup.value;
            if (new Date(json.start).getTime() > new Date(json.end).getTime()) {
                json.end = new Date(json.start.getTime() + 1000 * 60 * 60 * 24);
                this.hotelSearchFormGroup.patchValue(json);
            }
        }
    }
    endDateChange(type, event) {
        if (!this.hotelSearchFormGroup.get('end').hasError('required')
            && !this.hotelSearchFormGroup.hasError('startEndMatch')) {
            this.click.end = true;
        }
    }
    placeChange($event) {
        if (!this.hotelSearchFormGroup.get('place').hasError('required')) {
            this.click.place = true;
        }
    }
    countChange($event) {
        if (!this.hotelSearchFormGroup.get('count').hasError('required')) {
            this.click.count = true;
        }
    }
    roomsChange($event) {
        if (!this.hotelSearchFormGroup.get('rooms').hasError('required')) {
            this.click.rooms = true;
        }
    }
    searchHotelCity(cityString) {
        const code = cityString.data != null ? cityString.data : cityString;
        return this.hotelRetrieveService.searchCity(code)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            this.loadingLeavingTo = false;
            this.loadingPlace = false;
            return data.predictions;
        }));
    }
    filterAirport(hotelCode) {
        let suggestions = [];
        let airPortCode = hotelCode.name || hotelCode.value;
        airPortCode = airPortCode == null ? hotelCode : airPortCode;
        for (const airPort of this.airPortList) {
            if (airPort.name.toLowerCase().indexOf(airPortCode.toLowerCase()) === 0
                || airPort.id.toLowerCase().includes(airPortCode.toLowerCase())) {
                suggestions.push(airPort);
            }
        }
        return suggestions;
    }
    getAllAirportSearchService() {
        this.hotelRetrieveService.getAllAirport().
            subscribe((data) => {
            this.airPortList = data;
            this.isLoading = false;
        });
    }
    filter(hotelCode) {
        if (hotelCode == '' || hotelCode == null) {
            return true;
        }
        else if (hotelCode.data != null) {
            return false;
        }
        else if (hotelCode.length >= 1) {
            return false;
        }
        else {
            return true;
        }
    }
    truncateTime(time) {
        const timeStr = time.toISOString();
        return timeStr.substring(0, timeStr.lastIndexOf('T')) + 'T00:00:00';
    }
    search() {
        // if(this.hotelSearchFormGroup.valid) {
        // this.searchHotelsService();
        // console.log(this.hotelSearchFormGroup.value)
        let hotelSearchFormGroupValue = this.hotelSearchFormGroup.value;
        if (hotelSearchFormGroupValue.place) {
            this.store.dispatch(new src_app_store_hotel_hotel_actions__WEBPACK_IMPORTED_MODULE_6__["SetSearchCriteriaData"](hotelSearchFormGroupValue));
            this.router.navigateByUrl('/Hotels/Search');
        }
        // } else {
        //   this.hotelSearchFormGroup.markAllAsTouched();
        //   this.isSubmitted = true;
        // }
    }
}
HotelDashboardComponent.ɵfac = function HotelDashboardComponent_Factory(t) { return new (t || HotelDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_8__["HotelRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
HotelDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotelDashboardComponent, selectors: [["app-hotel-dashboard"]], viewQuery: function HotelDashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.picker1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.picker2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.travellersSelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.travellersSelectRooms = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hotelPlaceDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.countPopupDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.travellersDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.placeInput = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["class", "spinnerBg", 4, "ngIf"], ["class", "d-flex flex-column-fluid", 4, "ngIf"], [1, "spinnerBg"], [1, "spinner", 3, "diameter"], [1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "row"], [1, "col-12"], [1, "card", "card-custom", "gutter-b", "card-stretch", "rounded-xl"], [1, "card-header", "border-0"], [1, "card-toolbar"], [1, "text-muted", "mb-0"], [1, "card-body", "pt-0", "pl-6", "pr-6"], ["searchForm", ""], [1, "tab-content"], ["id", "lr_tab_pane_1", "role", "tabpanel", 1, "tab-pane", "fade", "active", "show"], [1, "brdBigBlock"], [1, "brdBigBlock_inner"], ["id", "hotelDiv", 1, "searchCity", 2, "width", "30%", 3, "click"], ["hotelPlaceDiv", ""], [1, "searchContent"], [1, "search_lbl", "text-dark-50", "pb-2"], ["id", "place", "type", "text", "class", "search_inputField h1 text-truncate from", "readonly", "", 3, "value", "title", "click", 4, "ngIf"], ["class", "lessMlr-1", 4, "ngIf"], [4, "ngIf"], [1, "searchDate", 2, "width", "32%", 3, "searchFormGroup", "click", "isSubmitted", "isSearchPage", "name", "searchFormGroupChange", "clickChange", "isSubmittedChange", "isSearchPageChange", "nameChange"], ["datePickerMultiple", ""], ["id", "hotelDiv", 1, "searchCity", 2, "width", "19%"], [3, "click"], [1, "fas", "fa-angle-down", "text-primary"], ["id", "rooms", "class", "search_inputField h2 count", 4, "ngIf"], ["id", "hotelDiv", 1, "searchCity", 2, "width", "19%", "border-right", "solid 0px #dbede3"], ["id", "count", "class", "search_inputField h2 count", 4, "ngIf"], [1, "d-flex", "justify-content-center", "pt-5"], ["type", "button", 1, "btn", "btn-primary", "btn-pill", "btn-lg", "colorBg", "font-size-h3", "w-200px", "btn-shadow", 3, "click"], [1, "far", "fa-arrow-alt-circle-right"], ["id", "lr_tab_pane_2", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "place", "type", "text", "readonly", "", 1, "search_inputField", "h1", "text-truncate", "from", 3, "value", "title", "click"], [1, "lessMlr-1"], ["appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", 3, "value", "formControl", "errorStateMatcher", "onSelect"], ["id", "rooms", 1, "search_inputField", "h2", "count"], [1, "display6", "text-dark-65", "pl-1", "count"], [3, "formControl", "selectionChange"], ["travellersSelectRooms", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "count", 1, "search_inputField", "h2", "count"], ["travellersSelect", ""]], template: function HotelDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HotelDashboardComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HotelDashboardComponent_div_1_Template, 52, 15, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _shared_components_datepicker_range_datepicker_range_component__WEBPACK_IMPORTED_MODULE_13__["DatepickerRangeComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], styles: [".product[_ngcontent-%COMP%] {\n    display: flex;\n    max-height: none;\n    max-width: none;\n    min-height: 450px;\n    padding: 30px;\n    border-radius: 20px;\n    background-color: #000;\n    text-align: center;\n  }\n  .product.green[_ngcontent-%COMP%] {\n    min-height: 450px;\n    background-image: url(\"/assets/media/green-arrows.svg\");\n    background-color: #58bd89; \n    background-position: 0px 140px;\n    background-size: 870px;\n    background-repeat: no-repeat;\n  }\n  .product.blue[_ngcontent-%COMP%]{\n    min-height: 450px;\n    display: flex;\n    background-color: #2196f3;\n    background-image: url(\"/assets/media/white-lines.svg\");\n    background-position: -290px -670px;\n    background-size: auto;\n    background-repeat: no-repeat;\n  }\n  .product-text[_ngcontent-%COMP%] {\n    display: flex;\n    max-width: 500px;\n    margin-right: auto;\n    margin-left: auto;\n    flex-direction: column;\n    justify-content: center;\n    flex: 1;\n  }\n  .heading-30[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    color: #fff;\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .para-20[_ngcontent-%COMP%] {\n      color: #fff;\n      font-size: 18px;\n      line-height: 26px;\n      font-weight: 300;\n  }\n  .card.card-custom.card-stretch.gutter-b[_ngcontent-%COMP%] {\n    height: calc(100% - 65px);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvaG90ZWwvcGFnZXMvaG90ZWwtZGFzaGJvYXJkL2hvdGVsLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLHVEQUF1RDtJQUN2RCx5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNEQUFzRDtJQUN0RCxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBS2pCLHNCQUFzQjtJQUl0Qix1QkFBdUI7SUFDdkIsT0FBTztFQUNUO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7RUFDQTtNQUNJLFdBQVc7TUFDWCxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGdCQUFnQjtFQUNwQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvaG90ZWwvcGFnZXMvaG90ZWwtZGFzaGJvYXJkL2hvdGVsLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAucHJvZHVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnByb2R1Y3QuZ3JlZW4ge1xuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbWVkaWEvZ3JlZW4tYXJyb3dzLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNThiZDg5OyBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMTQwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4NzBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG4gIC5wcm9kdWN0LmJsdWV7XG4gICAgbWluLWhlaWdodDogNDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbWVkaWEvd2hpdGUtbGluZXMuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yOTBweCAtNjcwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cbiAgLnByb2R1Y3QtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC5oZWFkaW5nLTMwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgfVxuICAucGFyYS0yMCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICAuY2FyZC5jYXJkLWN1c3RvbS5jYXJkLXN0cmV0Y2guZ3V0dGVyLWIge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XG4gIH1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hotel-dashboard',
                templateUrl: './hotel-dashboard.component.html',
                styleUrls: ['./hotel-dashboard.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] }, { type: _services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_8__["HotelRetrieveService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, { picker1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['picker1']
        }], picker2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['picker2']
        }], travellersSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['travellersSelect']
        }], travellersSelectRooms: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['travellersSelectRooms']
        }], hotelPlaceDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['hotelPlaceDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }], countPopupDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['countPopupDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }], travellersDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['travellersDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }], placeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['placeInput']
        }] }); })();


/***/ }),

/***/ "s1fO":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/hotel/pages/hotel-dashboard/hotel-subheader/hotel-subheader.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: HotelSubheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelSubheaderComponent", function() { return HotelSubheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-daterangepicker */ "B01t");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/animations */ "Ql4B");
/* harmony import */ var _hotel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hotel */ "ZNpG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/hotel-retrieve.service */ "9lgk");
/* harmony import */ var src_app_views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/views/pages/auth/login/login.service */ "0Xdg");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");





















function HotelSubheaderComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r13.value + "-" + option_r13.data, " ");
} }
function HotelSubheaderComponent_mat_spinner_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 30);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 15);
} }
function HotelSubheaderComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r14.value + "-" + option_r14.data, " ");
} }
function HotelSubheaderComponent_mat_spinner_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 30);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 15);
} }
function HotelSubheaderComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelSubheaderComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HotelSubheaderComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function HotelSubheaderComponent_div_44_Template_div_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.singleSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r9.singlePicker);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, ctx_r9.singleDate, "M/dd/y"), " ");
} }
function HotelSubheaderComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function HotelSubheaderComponent_div_45_Template_div_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.selectedDate($event, ctx_r17.mainInput); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r10.mainInput.start, "M/dd/y"), " ");
} }
function HotelSubheaderComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function HotelSubheaderComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
class HotelSubheaderComponent extends _hotel__WEBPACK_IMPORTED_MODULE_6__["Hotel"] {
    constructor(router, hotelRetrieveService, loginService, daterangepickerOptions) {
        super(loginService);
        this.router = router;
        this.hotelRetrieveService = hotelRetrieveService;
        this.daterangepickerOptions = daterangepickerOptions;
        this.response = {};
        this.radioSelected = "one";
        this.qry = {
            "Flights": [
                {
                    "DepartureAirportCode": "ORD",
                    "ArrivalAirportCode": "DFW",
                    "TravelDate": "2021-01-13T00:00:00"
                },
                {
                    "DepartureAirportCode": "DFW",
                    "ArrivalAirportCode": "ORD",
                    "TravelDate": "2021-01-21T00:00:00"
                }
            ],
            "Passengers": [
                {
                    "PassengerID": "T1"
                }
            ]
        };
        this.loadingLeavingFrom = false;
        this.loadingLeavingTo = false;
        this.mainInput = {
            start: moment__WEBPACK_IMPORTED_MODULE_3__(),
            end: ''
        };
        this.singleDatePicker = true;
        this.singlePicker = {
            singleDatePicker: true,
            showDropdowns: false,
            opens: "left"
        };
        this.minDate = new Date();
        this.maxDate = new Date(this.minDate.getTime() + 1000 * 60 * 60 * 24 * 90);
        this.hotelSearchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.daterangepickerOptions.settings = {
            autoApply: true,
            minDate: new Date(),
            maxDate: moment__WEBPACK_IMPORTED_MODULE_3__().add(2, 'month'),
            startDate: new Date(),
            endDate: new Date()
        };
        this.singleDate = Date.now();
        this.hotelSearchFormGroup.controls['start'].setValue(new Date());
    }
    ngOnInit() {
        this.filteredFromOptions = this.hotelSearchFormGroup.get('from').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((keyWord) => keyWord != null && keyWord.length >= 3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((keyWord) => {
            this.loadingLeavingFrom = true;
            return this.hotelRetrieveService.searchCity(keyWord)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                this.loadingLeavingFrom = false;
                return data.predictions;
            }));
        }));
        this.filteredToOptions = this.hotelSearchFormGroup.get('to').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((keyWord) => keyWord != null && keyWord.length >= 3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((keyWord) => {
            this.loadingLeavingTo = true;
            return this.hotelRetrieveService.searchCity(keyWord)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                this.loadingLeavingTo = false;
                return data.suggestions;
            }));
        }));
    }
    displayFn(airport) {
        return airport && airport.data ? airport.data : '';
    }
    searchHotelService() {
        this.hotelRetrieveService.searchHotels(this.qry).subscribe((data) => {
            this.response = data;
        });
    }
    radioChange(event) {
        if (event.value === 'one') {
            this.singleDatePicker = true;
            this.mainInput.end = '';
            this.hotelSearchFormGroup.controls['end'].setValue('');
        }
        else if (event.value === 'round') {
            this.singleDatePicker = false;
            this.mainInput.end = this.mainInput.start;
            this.hotelSearchFormGroup.controls['end'].setValue(this.hotelSearchFormGroup.get('start').value);
        }
    }
    enableEndDate() {
        this.singleDatePicker = false;
        this.radioSelected = "round";
    }
    selectedDate(value, dateInput) {
        dateInput.start = value.start;
        if (this.singleDatePicker == true) {
            dateInput.end = '';
        }
        else {
            dateInput.end = value.end;
        }
    }
    singleSelect(value) {
        this.singleDate = value.start;
        this.mainInput.start = value.start;
    }
    startDateChange(event) {
        console.log(event);
    }
    endDateChange(event) {
        console.log(event);
    }
}
HotelSubheaderComponent.ɵfac = function HotelSubheaderComponent_Factory(t) { return new (t || HotelSubheaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_8__["HotelRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_2__["DaterangepickerConfig"])); };
HotelSubheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotelSubheaderComponent, selectors: [["app-hotel-subheader"]], viewQuery: function HotelSubheaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_2__["DaterangepickerComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.picker = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 59, vars: 38, consts: [[2, "margin-left", "100px", "margin-top", "50px"], ["aria-label", "Select an option", 3, "ngModel", "ngModelChange"], ["value", "one", 3, "change"], ["value", "round", 3, "change"], [1, "example-form"], [1, "row"], [1, "col-2"], [1, "example-full-width"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith"], ["autoTo", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "diameter", 4, "ngIf"], ["autoFrom", "matAutocomplete"], ["appearance", "fill"], [3, "formGroup", "min", "max", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date", 3, "dateChange"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], [1, "form-group", "row"], ["class", "input-group col-4", "daterangepicker", "", 3, "options", "selected", 4, "ngIf"], ["class", "input-group col-4", "daterangepicker", "", 3, "selected", 4, "ngIf"], ["daterangepicker", "", 1, "input-group", "col-4", 3, "click", "selected"], ["name", "daterange", 1, "form-control", "uneditable-input"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-default"], [1, "material-icons"], [3, "value"], [3, "diameter"], ["daterangepicker", "", 1, "input-group", "col-4", 3, "options", "selected"], ["daterangepicker", "", 1, "input-group", "col-4", 3, "selected"]], template: function HotelSubheaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HotelSubheaderComponent_Template_mat_radio_group_ngModelChange_1_listener($event) { return ctx.radioSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HotelSubheaderComponent_Template_mat_radio_button_change_2_listener($event) { return ctx.radioChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "One Way");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HotelSubheaderComponent_Template_mat_radio_button_change_4_listener($event) { return ctx.radioChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Round Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Leaving To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-autocomplete", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HotelSubheaderComponent_mat_option_15_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HotelSubheaderComponent_mat_spinner_17_Template, 1, 1, "mat-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Leaving From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-autocomplete", 9, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HotelSubheaderComponent_mat_option_25_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HotelSubheaderComponent_mat_spinner_31_Template, 1, 1, "mat-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-date-range-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function HotelSubheaderComponent_Template_input_dateChange_36_listener($event) { return ctx.startDateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function HotelSubheaderComponent_Template_input_dateChange_37_listener($event) { return ctx.endDateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-datepicker-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-date-range-picker", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HotelSubheaderComponent_mat_error_41_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HotelSubheaderComponent_mat_error_42_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HotelSubheaderComponent_div_44_Template, 8, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HotelSubheaderComponent_div_45_Template, 8, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HotelSubheaderComponent_Template_div_click_46_listener() { return ctx.enableEndDate(); })("selected", function HotelSubheaderComponent_Template_div_selected_46_listener($event) { return ctx.selectedDate($event, ctx.mainInput); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, HotelSubheaderComponent_div_54_Template, 1, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, HotelSubheaderComponent_div_55_Template, 1, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.hotelSearchFormGroup.get("to"))("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 25, ctx.filteredToOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingLeavingTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.hotelSearchFormGroup.get("from"))("matAutocomplete", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 27, ctx.filteredFromOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 31, ctx.filteredFromOptions)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingLeavingFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.hotelSearchFormGroup)("min", ctx.minDate)("max", ctx.maxDate)("rangePicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hotelSearchFormGroup.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hotelSearchFormGroup.controls.end.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleDatePicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.singleDatePicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mainInput.end != "" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](49, 33, ctx.mainInput.end, "M/dd/y") : "Tap to add a return date", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.radioSelected == "one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.radioSelected == "round");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected range: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 36, ctx.hotelSearchFormGroup.value), "");
    } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDateRangeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDateRangePicker"], ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_2__["DaterangepickerComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hvdGVsL3BhZ2VzL2hvdGVsLWRhc2hib2FyZC9ob3RlbC1zdWJoZWFkZXIvaG90ZWwtc3ViaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"], data: { animation: [
            src_app_animations__WEBPACK_IMPORTED_MODULE_5__["slideInOutAnimation"],
            src_app_animations__WEBPACK_IMPORTED_MODULE_5__["slideUpDownAnimation"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelSubheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hotel-subheader',
                templateUrl: './hotel-subheader.component.html',
                styleUrls: ['./hotel-subheader.component.css'],
                animations: [
                    src_app_animations__WEBPACK_IMPORTED_MODULE_5__["slideInOutAnimation"],
                    src_app_animations__WEBPACK_IMPORTED_MODULE_5__["slideUpDownAnimation"]
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_8__["HotelRetrieveService"] }, { type: src_app_views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"] }, { type: ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_2__["DaterangepickerConfig"] }]; }, { picker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_2__["DaterangepickerComponent"]]
        }] }); })();


/***/ }),

/***/ "w6aj":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/hotel/partials/hotel-item/hotel-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HotelItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelItemComponent", function() { return HotelItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _hotel_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hotel-item */ "JDc1");
/* harmony import */ var _services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hotel-retrieve.service */ "9lgk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/pages/auth/login/login.service */ "0Xdg");






class HotelItemComponent extends _hotel_item__WEBPACK_IMPORTED_MODULE_1__["HotelItem"] {
    constructor(hotelRetrieveService, router, loginService) {
        super(router, loginService);
        this.hotelRetrieveService = hotelRetrieveService;
    }
    ngOnInit() {
    }
}
HotelItemComponent.ɵfac = function HotelItemComponent_Factory(t) { return new (t || HotelItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_2__["HotelRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"])); };
HotelItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotelItemComponent, selectors: [["app-hotel-item"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, template: function HotelItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "air line item works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2hvdGVsL3BhcnRpYWxzL2hvdGVsLWl0ZW0vaG90ZWwtaXRlbS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hotel-item',
                templateUrl: './hotel-item.component.html',
                styleUrls: ['./hotel-item.component.css']
            }]
    }], function () { return [{ type: _services_hotel_retrieve_service__WEBPACK_IMPORTED_MODULE_2__["HotelRetrieveService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_views_pages_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=views-pages-hotel-hotel-module.js.map