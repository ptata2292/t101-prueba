(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-rail-rail-module"],{

/***/ "36t+":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-order-status/rail-order-status.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RailOrderStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailOrderStatusComponent", function() { return RailOrderStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rail */ "GaOi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/storage/local-storage */ "ADqn");
/* harmony import */ var _rail_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rail-order.service */ "XeCr");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");











function RailOrderStatusComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function RailOrderStatusComponent_div_1_h6_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.orderId);
} }
function RailOrderStatusComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ticket: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Failed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RailOrderStatusComponent_div_1_h6_10_Template, 4, 1, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderId != null);
} }
function RailOrderStatusComponent_div_2_div_13_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrderStatusComponent_div_2_div_13_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.index, " ");
} }
function RailOrderStatusComponent_div_2_div_13_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrderStatusComponent_div_2_div_13_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.getName(element_r17), " ");
} }
function RailOrderStatusComponent_div_2_div_13_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrderStatusComponent_div_2_div_13_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.individual.gender, " ");
} }
function RailOrderStatusComponent_div_2_div_13_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DOB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrderStatusComponent_div_2_div_13_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r19.individual.birthdate, "mediumDate"), " ");
} }
function RailOrderStatusComponent_div_2_div_13_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 44);
} }
function RailOrderStatusComponent_div_2_div_13_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 45);
} }
function RailOrderStatusComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function RailOrderStatusComponent_div_2_div_13_Template_img_error_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RailOrderStatusComponent_div_2_div_13_th_44_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RailOrderStatusComponent_div_2_div_13_td_45_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RailOrderStatusComponent_div_2_div_13_th_47_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, RailOrderStatusComponent_div_2_div_13_td_48_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, RailOrderStatusComponent_div_2_div_13_th_50_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, RailOrderStatusComponent_div_2_div_13_td_51_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RailOrderStatusComponent_div_2_div_13_th_53_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RailOrderStatusComponent_div_2_div_13_td_54_Template, 3, 4, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, RailOrderStatusComponent_div_2_div_13_tr_55_Template, 1, 0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, RailOrderStatusComponent_div_2_div_13_tr_56_Template, 1, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightSegment_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.getImageName(flightSegment_r5.marketingCarrier.railID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r5.marketingCarrier.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flightSegment_r5.marketingCarrier.railID + flightSegment_r5.marketingCarrier.flightNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r5.equipment.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r5.departure.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 16, flightSegment_r5.departure.date, "mediumDate"));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 19, flightSegment_r5.arrival.date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r5.arrival.airportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r4.order.passengerList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
} }
function RailOrderStatusComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ticket: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Confirmed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Order Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RailOrderStatusComponent_div_2_div_13_Template, 57, 22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.order.flightSegment);
} }
class RailOrderStatusComponent extends _rail__WEBPACK_IMPORTED_MODULE_1__["Rail"] {
    constructor(router, loginService, localStorage, railOrderService, _snackBar, activatedRoute) {
        super(loginService);
        this.router = router;
        this.localStorage = localStorage;
        this.railOrderService = railOrderService;
        this._snackBar = _snackBar;
        this.activatedRoute = activatedRoute;
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
            this.railOrderService.gerOrderById(this.orderId).subscribe((data) => {
                // console.log('gerOrderByName');
                // console.log(data);
                this.isLoading = false;
                this.order = this.getOrderData(data, this.order);
            });
        }
    }
}
RailOrderStatusComponent.ɵfac = function RailOrderStatusComponent_Factory(t) { return new (t || RailOrderStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rail_order_service__WEBPACK_IMPORTED_MODULE_5__["RailOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
RailOrderStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RailOrderStatusComponent, selectors: [["app-rail-order-status"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "d-flex flex-column-fluid", 4, "ngIf"], [1, "spinner", 3, "diameter"], [1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "brdSmallBlock", "gutter-b", "d-flex"], [1, "brdSmallBlock_inner", "pt-2", "flex-column", "align-items-center"], [1, "text-white"], [1, "opacity-70", "font-weight-normal"], [1, "fas", "fa-times-circle", "text-danger", "icon-xl"], ["class", "text-white", 4, "ngIf"], [1, "opacity-70"], [1, "fas", "fa-check-circle", "text-success", "icon-xl"], ["class", "gutter-b", 4, "ngFor", "ngForOf"], [1, "gutter-b"], [1, "card", "card-custom", "mb-3"], [1, "card-body", "p-0"], [1, "d-flex", "align-items-start", "flex-wrap", "p-5"], [1, "col-5", "d-flex", "align-items-center", "flex-lg-fill", "pl-0"], [1, "symbol", "symbol-50", "bg-gray-300", "mr-4"], ["alt", "image", 3, "src", "error"], [1, "d-flex", "flex-column", "flex-wrap"], [1, "mb-1"], [1, "d-flex"], [1, "text-dark-50", "font-weight-bold", "mr-2"], [1, "col-7", "d-flex", "align-items-center", "justify-content-center", "flex-lg-fill", "pl-0"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-end"], [1, "text-dark-50", "font-weight-bold"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-center", "min-w-150px", "ml-3", "mr-3"], [1, "hr-text", "font-size-sm", "text-dark-50", "mb-1"], [1, "text-primary", "font-weight-bold", "mb-1"], [1, "text-dark-65"], [1, "separator", "separator-solid"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "Gender"], ["matColumnDef", "DOB"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function RailOrderStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RailOrderStatusComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RailOrderStatusComponent_div_1_Template, 11, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RailOrderStatusComponent_div_2_Template, 14, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.order.flightSegment.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.orderId != null && ctx.order.flightSegment.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmFpbC9yYWlsLW9yZGVyLXN0YXR1cy9yYWlsLW9yZGVyLXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvcmFpbC9yYWlsLW9yZGVyLXN0YXR1cy9yYWlsLW9yZGVyLXN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailOrderStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rail-order-status',
                templateUrl: './rail-order-status.component.html',
                styleUrls: ['./rail-order-status.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"] }, { type: _rail_order_service__WEBPACK_IMPORTED_MODULE_5__["RailOrderService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "GaOi":
/*!******************************************!*\
  !*** ./src/app/views/pages/rail/rail.ts ***!
  \******************************************/
/*! exports provided: Rail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rail", function() { return Rail; });
/* harmony import */ var _core_object_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/object-base */ "JXbo");

class Rail extends _core_object_base__WEBPACK_IMPORTED_MODULE_0__["ObjectBase"] {
    constructor(loginService) {
        super(loginService);
        this.defaultTo = {
            "id": "ORD",
            "icao": "KORD",
            "iata": "ORD",
            "name": "ORD - Chicago OHare International Airport",
            "city": "Chicago",
            "state": "Illinois",
            "country": "US",
            "elevation": 672,
            "lat": 41.97859955,
            "lon": -87.90480042,
            "tz": "America/Chicago",
            "value": "ORD - Chicago OHare International Airport",
            "data": "ORD"
        };
        this.defaultFrom = {
            "id": "DFW",
            "icao": "KDFW",
            "iata": "DFW",
            "name": "DFW - Dallas Fort Worth International Airport",
            "city": "Dallas-Fort Worth",
            "state": "Texas",
            "country": "US",
            "elevation": 607,
            "lat": 32.89680099,
            "lon": -97.03800201,
            "tz": "America/Chicago",
            "value": "DFW - Dallas Fort Worth International Airport",
            "data": "DFW"
        };
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.wholeNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.countries = ["United States", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mcdonald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis"];
        this.gender = ["Male", "Female"];
        this.paymentTypes = ["On Hold", "Credit Card"];
        this.yearArray = Array(10).fill(null).map((_, i) => new Date().getFullYear() + i);
        this.monthArray = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    }
    getAirPortDisplayName(suggestion) {
        const value = suggestion.value || suggestion.name || '';
        const data = suggestion.data || suggestion.id || '';
        if (value == '' && data == '') {
            return 'Please Select';
        }
        else {
            const AirPortDisplayName = value + '(' + data + ')';
            return AirPortDisplayName;
        }
    }
    sameToFromValidator(form) {
        if ((form.value.from || {}).data != null && (form.value.to || {}).data != null) {
            const condition = form.value.from.data == form.value.to.data;
            return condition ? { toFromMatch: true } : null;
        }
        return null;
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
    toSelected(form) {
        const formGroupValue = form.value;
        if (formGroupValue.to != '' && (formGroupValue.to.data == null && formGroupValue.to.id == null)) {
            return { toSelected: true };
        }
        return null;
    }
    fromSelected(form) {
        const formGroupValue = form.value;
        if (formGroupValue.from != '' && (formGroupValue.from.data == null && formGroupValue.from.id == null)) {
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
    getFares(flightFares) {
        let amount = {
            fareAmount: 0,
            baseAmount: 0,
            facilityCharge: 0,
            securityServiceFee: 0
        };
        amount.fareAmount = flightFares[0].totalPrice;
        amount = this.getTaxes(flightFares[0], amount);
        for (let flightFare of flightFares) {
            if (flightFare.selectedFare == true) {
                amount = this.getTaxes(flightFares[0], amount);
                amount.fareAmount = flightFare.totalPrice;
                return amount;
            }
            if (flightFare.totalPrice < amount.fareAmount) {
                amount = this.getTaxes(flightFares[0], amount);
                amount.fareAmount = flightFare.totalPrice;
            }
        }
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
    getImageName(railID) {
        let imagePath = "assets/media/Rails/" + railID + ".png";
        // console.log('railID:' + railID);
        return imagePath;
    }
    onImgError(event) {
        // console.log(event);
        event.target.src = "assets/media/Rails/noImage2.png";
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
}


/***/ }),

/***/ "IBTb":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-dashboard/rail-subheader/rail-subheader.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RailSubheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailSubheaderComponent", function() { return RailSubheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../animations */ "Ql4B");
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rail */ "GaOi");
/* harmony import */ var ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-daterangepicker */ "B01t");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rail_retrieve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rail-retrieve.service */ "QotO");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");





















function RailSubheaderComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r13.value + "-" + option_r13.data, " ");
} }
function RailSubheaderComponent_mat_spinner_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 30);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 15);
} }
function RailSubheaderComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r14.value + "-" + option_r14.data, " ");
} }
function RailSubheaderComponent_mat_spinner_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 30);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 15);
} }
function RailSubheaderComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailSubheaderComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailSubheaderComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function RailSubheaderComponent_div_44_Template_div_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.singleSelect($event); });
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
function RailSubheaderComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function RailSubheaderComponent_div_45_Template_div_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.selectedDate($event, ctx_r17.mainInput); });
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
function RailSubheaderComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function RailSubheaderComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
class RailSubheaderComponent extends _rail__WEBPACK_IMPORTED_MODULE_3__["Rail"] {
    constructor(router, railRetrieveService, loginService, daterangepickerOptions) {
        super(loginService);
        this.router = router;
        this.railRetrieveService = railRetrieveService;
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
            start: moment__WEBPACK_IMPORTED_MODULE_5__(),
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
        this.railSearchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.daterangepickerOptions.settings = {
            autoApply: true,
            minDate: new Date(),
            maxDate: moment__WEBPACK_IMPORTED_MODULE_5__().add(2, 'month'),
            startDate: new Date(),
            endDate: new Date()
        };
        this.singleDate = Date.now();
        this.railSearchFormGroup.controls['start'].setValue(new Date());
    }
    ngOnInit() {
        this.filteredFromOptions = this.railSearchFormGroup.get('from').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((keyWord) => keyWord != null && keyWord.length >= 3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((keyWord) => {
            this.loadingLeavingFrom = true;
            return this.railRetrieveService.searchAirport(keyWord)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((data) => {
                this.loadingLeavingFrom = false;
                return data.suggestions;
            }));
        }));
        this.filteredToOptions = this.railSearchFormGroup.get('to').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((keyWord) => keyWord != null && keyWord.length >= 3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((keyWord) => {
            this.loadingLeavingTo = true;
            return this.railRetrieveService.searchAirport(keyWord)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((data) => {
                this.loadingLeavingTo = false;
                return data.suggestions;
            }));
        }));
    }
    displayFn(airport) {
        return airport && airport.data ? airport.data : '';
    }
    serachRailService() {
        this.railRetrieveService.searchRails(this.qry).subscribe((data) => {
            this.response = data;
        });
    }
    radioChange(event) {
        if (event.value === 'one') {
            this.singleDatePicker = true;
            this.mainInput.end = '';
            this.railSearchFormGroup.controls['end'].setValue('');
        }
        else if (event.value === 'round') {
            this.singleDatePicker = false;
            this.mainInput.end = this.mainInput.start;
            this.railSearchFormGroup.controls['end'].setValue(this.railSearchFormGroup.get('start').value);
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
RailSubheaderComponent.ɵfac = function RailSubheaderComponent_Factory(t) { return new (t || RailSubheaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rail_retrieve_service__WEBPACK_IMPORTED_MODULE_8__["RailRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_4__["DaterangepickerConfig"])); };
RailSubheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RailSubheaderComponent, selectors: [["app-rail-subheader"]], viewQuery: function RailSubheaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_4__["DaterangepickerComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.picker = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 59, vars: 38, consts: [[2, "margin-left", "100px", "margin-top", "50px"], ["aria-label", "Select an option", 3, "ngModel", "ngModelChange"], ["value", "one", 3, "change"], ["value", "round", 3, "change"], [1, "example-form"], [1, "row"], [1, "col-2"], [1, "example-full-width"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith"], ["autoTo", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "diameter", 4, "ngIf"], ["autoFrom", "matAutocomplete"], ["appearance", "fill"], [3, "formGroup", "min", "max", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date", 3, "dateChange"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], [1, "form-group", "row"], ["class", "input-group col-4", "daterangepicker", "", 3, "options", "selected", 4, "ngIf"], ["class", "input-group col-4", "daterangepicker", "", 3, "selected", 4, "ngIf"], ["daterangepicker", "", 1, "input-group", "col-4", 3, "click", "selected"], ["name", "daterange", 1, "form-control", "uneditable-input"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-default"], [1, "material-icons"], [3, "value"], [3, "diameter"], ["daterangepicker", "", 1, "input-group", "col-4", 3, "options", "selected"], ["daterangepicker", "", 1, "input-group", "col-4", 3, "selected"]], template: function RailSubheaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RailSubheaderComponent_Template_mat_radio_group_ngModelChange_1_listener($event) { return ctx.radioSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RailSubheaderComponent_Template_mat_radio_button_change_2_listener($event) { return ctx.radioChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "One Way");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RailSubheaderComponent_Template_mat_radio_button_change_4_listener($event) { return ctx.radioChange($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RailSubheaderComponent_mat_option_15_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RailSubheaderComponent_mat_spinner_17_Template, 1, 1, "mat-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Leaving From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-autocomplete", 9, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RailSubheaderComponent_mat_option_25_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RailSubheaderComponent_mat_spinner_31_Template, 1, 1, "mat-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-date-range-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function RailSubheaderComponent_Template_input_dateChange_36_listener($event) { return ctx.startDateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function RailSubheaderComponent_Template_input_dateChange_37_listener($event) { return ctx.endDateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-datepicker-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-date-range-picker", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RailSubheaderComponent_mat_error_41_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RailSubheaderComponent_mat_error_42_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RailSubheaderComponent_div_44_Template, 8, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RailSubheaderComponent_div_45_Template, 8, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailSubheaderComponent_Template_div_click_46_listener() { return ctx.enableEndDate(); })("selected", function RailSubheaderComponent_Template_div_selected_46_listener($event) { return ctx.selectedDate($event, ctx.mainInput); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RailSubheaderComponent_div_54_Template, 1, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, RailSubheaderComponent_div_55_Template, 1, 0, "div", 20);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.railSearchFormGroup.get("to"))("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 25, ctx.filteredToOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingLeavingTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.railSearchFormGroup.get("from"))("matAutocomplete", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 27, ctx.filteredFromOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 31, ctx.filteredFromOptions)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingLeavingFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.railSearchFormGroup)("min", ctx.minDate)("max", ctx.maxDate)("rangePicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.railSearchFormGroup.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.railSearchFormGroup.controls.end.hasError("matEndDateInvalid"));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected range: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 36, ctx.railSearchFormGroup.value), "");
    } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDateRangeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDateRangePicker"], ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_4__["DaterangepickerComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JhaWwvcmFpbC1kYXNoYm9hcmQvcmFpbC1zdWJoZWFkZXIvcmFpbC1zdWJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [
            _animations__WEBPACK_IMPORTED_MODULE_2__["slideInOutAnimation"],
            _animations__WEBPACK_IMPORTED_MODULE_2__["slideUpDownAnimation"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailSubheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rail-subheader',
                templateUrl: './rail-subheader.component.html',
                styleUrls: ['./rail-subheader.component.css'],
                animations: [
                    _animations__WEBPACK_IMPORTED_MODULE_2__["slideInOutAnimation"],
                    _animations__WEBPACK_IMPORTED_MODULE_2__["slideUpDownAnimation"]
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _rail_retrieve_service__WEBPACK_IMPORTED_MODULE_8__["RailRetrieveService"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"] }, { type: ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_4__["DaterangepickerConfig"] }]; }, { picker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ng2_daterangepicker__WEBPACK_IMPORTED_MODULE_4__["DaterangepickerComponent"]]
        }] }); })();


/***/ }),

/***/ "M13y":
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-dashboard/rail-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RailDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailDashboardComponent", function() { return RailDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rail */ "GaOi");
/* harmony import */ var _store_rail_rail_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/rail/rail.actions */ "II1b");
/* harmony import */ var _shared_models_rail_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/models/rail.model */ "TgxU");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _rail_retrieve_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rail-retrieve.service */ "QotO");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");





















const _c0 = ["picker1"];
const _c1 = ["picker2"];
const _c2 = ["travellersSelect"];
const _c3 = ["fromDiv"];
const _c4 = ["toDiv"];
const _c5 = ["countPopupDiv"];
const _c6 = ["travellersDiv"];
const _c7 = ["fromInput"];
const _c8 = ["toInput"];
function RailDashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function RailDashboardComponent_div_1_input_25_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_input_25_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.clickChange("from"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.getAirPortDisplayName(ctx_r4.searchFormGroup.value.from));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.getAirPortDisplayName(ctx_r4.searchFormGroup.value.from));
} }
function RailDashboardComponent_div_1_div_26_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (option_r31.value || option_r31.name) + "-" + (option_r31.data || option_r31.id || ""), " ");
} }
function RailDashboardComponent_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function RailDashboardComponent_div_1_div_26_Template_mat_autocomplete_optionSelected_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.fromChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RailDashboardComponent_div_1_div_26_mat_option_6_Template, 2, 2, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.searchFormGroup.get("from"))("matAutocomplete", _r29)("errorStateMatcher", ctx_r5.errorMatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r5.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r5.filteredFromOptions));
} }
function RailDashboardComponent_div_1_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Leaving From is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailDashboardComponent_div_1_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Select From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailDashboardComponent_div_1_input_36_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_input_36_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.clickChange("to"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r9.getAirPortDisplayName(ctx_r9.searchFormGroup.value.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r9.getAirPortDisplayName(ctx_r9.searchFormGroup.value.to));
} }
function RailDashboardComponent_div_1_div_37_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (option_r39.value || option_r39.name) + "-" + (option_r39.data || option_r39.id || ""), " ");
} }
function RailDashboardComponent_div_1_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 52, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", 54, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function RailDashboardComponent_div_1_div_37_Template_mat_autocomplete_optionSelected_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.toChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RailDashboardComponent_div_1_div_37_mat_option_6_Template, 2, 2, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r10.searchFormGroup.get("to"))("matAutocomplete", _r37)("errorStateMatcher", ctx_r10.errorMatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r10.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r10.filteredToOptions));
} }
function RailDashboardComponent_div_1_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Going To is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailDashboardComponent_div_1_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Select To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailDashboardComponent_div_1_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "To and From are Same");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailDashboardComponent_div_1_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_div_46_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.clickChange("start"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r14.searchFormGroup.value.start, "dd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx_r14.searchFormGroup.value.start, "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 9, ctx_r14.searchFormGroup.value.start, "yyyy"), " ");
} }
function RailDashboardComponent_div_1_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_div_47_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r44.open(); })("dateChange", function RailDashboardComponent_div_1_div_47_Template_input_dateChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.startDateChange("change", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-datepicker-toggle", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker", null, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r15.minToDate)("max", ctx_r15.maxToDate)("errorStateMatcher", ctx_r15.errorMatcher)("matDatepicker", _r44)("formControl", ctx_r15.searchFormGroup.get("start"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r44);
} }
function RailDashboardComponent_div_1_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Depature Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailDashboardComponent_div_1_input_54_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_input_54_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.clickChange("end"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailDashboardComponent_div_1_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_div_55_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.clickChange("end"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r18.searchFormGroup.value.end, "dd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx_r18.searchFormGroup.value.end, "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 9, ctx_r18.searchFormGroup.value.end, "yyyy"), " ");
} }
function RailDashboardComponent_div_1_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_div_56_Template_mat_form_field_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.enableRoundTrip(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_div_56_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r52.open(); })("dateChange", function RailDashboardComponent_div_1_div_56_Template_input_dateChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.endDateChange("change", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-datepicker-toggle", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker", null, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r19.minFromDate)("max", ctx_r19.maxFromDate)("errorStateMatcher", ctx_r19.errorMatcher)("matDatepicker", _r52)("formControl", ctx_r19.searchFormGroup.get("end"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r52);
} }
function RailDashboardComponent_div_1_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Return Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailDashboardComponent_div_1_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Return date cannot be earlier than Depature date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailDashboardComponent_div_1_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Traveller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r23.searchFormGroup.value.count, " ");
} }
function RailDashboardComponent_div_1_div_66_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", number_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", number_r59, " ");
} }
function RailDashboardComponent_div_1_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function RailDashboardComponent_div_1_div_66_Template_mat_select_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r60.countChange($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RailDashboardComponent_div_1_div_66_mat_option_4_Template, 2, 2, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r24.searchFormGroup.get("count"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.numbers);
} }
function RailDashboardComponent_div_1_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailDashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_Template_li_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.toggleTrip(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "One Way");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.toggleTrip(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Round Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.clickChange("from"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Leaving From");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RailDashboardComponent_div_1_input_25_Template, 1, 2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RailDashboardComponent_div_1_div_26_Template, 8, 7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RailDashboardComponent_div_1_mat_error_27_Template, 4, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RailDashboardComponent_div_1_mat_error_28_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_Template_span_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.swipBtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_Template_div_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.clickChange("to"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Going To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RailDashboardComponent_div_1_input_36_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RailDashboardComponent_div_1_div_37_Template, 8, 7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RailDashboardComponent_div_1_mat_error_38_Template, 4, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RailDashboardComponent_div_1_mat_error_39_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RailDashboardComponent_div_1_mat_error_40_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_Template_div_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.clickChange("start"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Depature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RailDashboardComponent_div_1_div_46_Template, 7, 12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RailDashboardComponent_div_1_div_47_Template, 6, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, RailDashboardComponent_div_1_mat_error_48_Template, 4, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_Template_div_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.enableRoundTrip(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Return ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RailDashboardComponent_div_1_input_54_Template, 1, 0, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, RailDashboardComponent_div_1_div_55_Template, 7, 12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, RailDashboardComponent_div_1_div_56_Template, 6, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, RailDashboardComponent_div_1_mat_error_57_Template, 4, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, RailDashboardComponent_div_1_mat_error_58_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_Template_div_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.clickChange("count"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Travellers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, RailDashboardComponent_div_1_div_65_Template, 4, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, RailDashboardComponent_div_1_div_66_Template, 5, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, RailDashboardComponent_div_1_mat_error_67_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailDashboardComponent_div_1_Template_button_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.serach(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.radioSelected == "one" ? "rounded-pill colorBg active" : "nav-pills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.radioSelected == "round" ? "rounded-pill colorBg active" : "nav-pills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.click.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.get("from").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.hasError("fromSelected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.click.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.get("to").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.hasError("toSelected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.hasError("toFromMatch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.start);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.click.start);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.get("start").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.radioSelected == "one" ? "bg-gray-200" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.end && ctx_r1.radioSelected == "one");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.end && ctx_r1.radioSelected == "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.click.end);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.get("end").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.hasError("startEndMatch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.click.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.click.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.get("count").hasError("required"));
} }
class RailDashboardComponent extends _rail__WEBPACK_IMPORTED_MODULE_4__["Rail"] {
    constructor(loginService, railRetrieveService, renderer, store, router) {
        super(loginService);
        this.railRetrieveService = railRetrieveService;
        this.renderer = renderer;
        this.store = store;
        this.router = router;
        this.response = {};
        this.railData = {};
        this.railLoading = false;
        this.radioSelected = "one";
        this.loadingLeavingFrom = false;
        this.loadingLeavingTo = false;
        this.minToDate = new Date();
        this.maxToDate = new Date(this.minToDate.getTime() + 1000 * 60 * 60 * 24 * 150);
        this.minFromDate = new Date();
        this.maxFromDate = new Date(this.minFromDate.getTime() + 1000 * 60 * 60 * 24 * 150);
        this.errorMatcher = new _shared_models_rail_model__WEBPACK_IMPORTED_MODULE_6__["MyErrorStateMatcher"]();
        this.searchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            count: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            adults: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            childrens: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            infants: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        }, {
            validators: [this.sameToFromValidator, this.sameStartEndValidator, this.toSelected, this.fromSelected]
        });
        this.query = {};
        this.airPortList = [];
        this.click = {
            to: true,
            from: true,
            start: true,
            end: true,
            count: true
        };
        this.isLoading = false;
        this.isSubmitted = false;
        // this.searchFormGroup.get('from').disable();
        this.searchFormGroup.get('end').disable();
    }
    ngOnInit() {
        this.getAllAirportSearchService();
        this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
        this.filteredToOptions = this.searchFormGroup.get('to').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((railCode) => {
            if (this.filter(railCode)) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }
            else {
                this.loadingLeavingTo = true;
                return this.serachAirportSearchService(railCode);
            }
        }));
        this.filteredFromOptions = this.searchFormGroup.get('from').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((railCode) => {
            if (this.filter(railCode)) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }
            else {
                this.loadingLeavingFrom = true;
                return this.serachAirportSearchService(railCode);
            }
        }));
        /* this.filteredToOptions = this.searchFormGroup.get('to').valueChanges
          .pipe(
            switchMap((railCode) => {
              if(railCode == '' || railCode == null ) {
                return of(this.airPortList);
              } else {
                this.loadingLeavingTo = true;
                return this.serachOfflineAirportSearch(railCode);
              }
          }));
        this.filteredFromOptions = this.searchFormGroup.get('from').valueChanges
          .pipe(
            switchMap((railCode) => {
              if(railCode == '' || railCode == null ) {
                return of(this.airPortList);
              } else {
                this.loadingLeavingFrom = true;
                return this.serachOfflineAirportSearch(railCode);
              }
          })); */
        this.searchFormGroup.get('start').valueChanges.subscribe(val => {
            this.minFromDate = val;
        });
        this.searchFormGroup.get('end').valueChanges.subscribe(val => {
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
        }
        else if (event.target.className.indexOf("cdk-overlay-backdrop") != -1) {
            // console.log("overlay clicks");
            this.startDateChange(null, null);
            this.endDateChange(null, null);
            // has to uncomment after travel popup
            this.countChange(null);
        }
        else if (event.target.id == "fromCity"
            || event.target.id == "fromCityDiv"
            || this.fromDiv.nativeElement.contains(event.target)) {
            // console.log("search_inputField from clicks");
            let json = this.searchFormGroup.value;
            const fromValue = json.from;
            json.from = '';
            this.searchFormGroup.patchValue(json);
            json.from = fromValue;
            this.searchFormGroup.patchValue(json);
            this.fromInput.first.nativeElement.focus();
            this.toChange(null);
        }
        else if (event.target.id == "toCity"
            || event.target.id == "toCityDiv"
            || this.toDiv.nativeElement.contains(event.target)) {
            // console.log("search_inputField to clicks");
            let json = this.searchFormGroup.value;
            const toValue = json.to;
            json.to = '';
            this.searchFormGroup.patchValue(json);
            json.to = toValue;
            this.searchFormGroup.patchValue(json);
            this.toInput.first.nativeElement.focus();
            this.fromChange(null);
        } /* else if (event.target.className.indexOf("mat-option-text dismiss") == -1) {
          // console.log("mat-option-text dismiss clicks");
          this.fromChange(null);
          this.toChange(null);
        } */
        else if (!this.fromDiv.nativeElement.contains(event.target) || !this.toDiv.nativeElement.contains(event.target)) {
            if (!this.fromDiv.nativeElement.contains(event.target)) {
                // console.log("outside fromDiv");
                this.fromChange(null);
            }
            if (!this.toDiv.nativeElement.contains(event.target)) {
                // console.log("outside toDiv");
                this.toChange(null);
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
        this.fromChange(null);
        this.toChange(null);
        this.countChange(null);
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
    }
    openTravellers() {
        let self = this;
        setTimeout(() => {
            self.travellersSelect.open();
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
        if (!this.searchFormGroup.get('start').hasError('required')) {
            this.click.start = true;
        }
    }
    endDateChange(type, event) {
        if (!this.searchFormGroup.get('end').hasError('required')
            && !this.searchFormGroup.hasError('startEndMatch')) {
            this.click.end = true;
        }
    }
    fromChange($event) {
        if (!this.searchFormGroup.get('from').hasError('required')) {
            this.click.from = true;
        }
    }
    toChange($event) {
        if (!this.searchFormGroup.get('to').hasError('required') &&
            !this.searchFormGroup.get('to').hasError('toFromMatch')) {
            this.click.to = true;
        }
    }
    countChange($event) {
        // has to uncomment after travel popup
        if (!this.searchFormGroup.get('count').hasError('required')) {
            this.click.count = true;
        }
        /*let json = this.searchFormGroup.value;
        json.count = json.adults + json.childrens + json.infants;
        this.searchFormGroup.patchValue(json);
        this.click.count = true;*/
    }
    swipBtn() {
        let json = this.searchFormGroup.value;
        const fromValue = json.from;
        json.from = json.to;
        json.to = fromValue;
        this.searchFormGroup.patchValue(json);
    }
    serachAirportSearchService(railCode) {
        const code = railCode.data != null ? railCode.data : railCode;
        return this.railRetrieveService.searchAirport(code)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            this.loadingLeavingTo = false;
            this.loadingLeavingFrom = false;
            return data.suggestions;
        }));
    }
    serachOfflineAirportSearch(railCode) {
        let suggestions = [];
        if (this.airPortList.length == 0) {
            const code = railCode.data != null ? railCode.data : railCode;
            return this.railRetrieveService.searchAirport(code)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                this.loadingLeavingTo = false;
                this.loadingLeavingFrom = false;
                return data.suggestions;
            }));
        }
        else {
            this.loadingLeavingTo = false;
            this.loadingLeavingFrom = false;
            const filterAirports = this.filterAirport(railCode);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(filterAirports);
        }
    }
    filterAirport(railCode) {
        let suggestions = [];
        let airPortCode = railCode.name || railCode.value;
        airPortCode = airPortCode == null ? railCode : airPortCode;
        for (const airPort of this.airPortList) {
            if (airPort.name.toLowerCase().indexOf(airPortCode.toLowerCase()) === 0
                || airPort.id.toLowerCase().includes(airPortCode.toLowerCase())) {
                suggestions.push(airPort);
            }
        }
        return suggestions;
    }
    getAllAirportSearchService() {
        this.railRetrieveService.getAllAirport().
            subscribe((data) => {
            this.airPortList = data;
            this.isLoading = false;
        });
    }
    serachRailsService() {
        this.railLoading = true;
        this.railRetrieveService.searchRails(this.getSearchQuery()).
            subscribe((data) => {
            this.railData = data;
            this.railLoading = false;
        });
    }
    filter(railCode) {
        if (railCode == '' || railCode == null) {
            return true;
        }
        else if (railCode.data != null) {
            return false;
        }
        else if (railCode.length >= 1) {
            return false;
        }
        else {
            return true;
        }
    }
    radioChange(event) {
        const value = event.value || event;
        if (value === 'one') {
            // this.searchFormGroup.get('from').disable();
            this.searchFormGroup.get('end').disable();
            this.searchFormGroup.controls['end'].setValue('');
            this.click.end = true;
        }
        else if (value === 'round') {
            // this.searchFormGroup.get('from').enable();
            this.searchFormGroup.get('end').enable();
            if (this.searchFormGroup.get('end').value == '') {
                this.searchFormGroup.controls['end'].setValue(this.searchFormGroup.get('start').value);
            }
        }
    }
    enableRoundTrip() {
        this.radioSelected = "round";
        this.radioChange("round");
        this.click.end = false;
        this.openEnd();
    }
    toggleTrip() {
        this.radioSelected = this.radioSelected == "round" ? "one" : "round";
        this.radioChange(this.radioSelected);
    }
    getSearchQuery() {
        let qry = {
            Flights: [],
            Passengers: [
                {
                    PassengerID: "T1"
                }
            ]
        };
        const formGroupValue = this.searchFormGroup.value;
        const toAirPortCode = formGroupValue.to.data || formGroupValue.to.id || formGroupValue.to;
        const fromAirPortCode = formGroupValue.from.data || formGroupValue.from.id || formGroupValue.from;
        qry.Flights.push({
            "DepartureAirportCode": toAirPortCode,
            "ArrivalAirportCode": fromAirPortCode,
            "TravelDate": this.truncateTime(formGroupValue.start)
        });
        if (this.radioSelected == 'round') {
            qry.Flights.push({
                "DepartureAirportCode": fromAirPortCode,
                "ArrivalAirportCode": toAirPortCode,
                "TravelDate": this.truncateTime(formGroupValue.end)
            });
        }
        this.query = qry;
        return qry;
    }
    truncateTime(time) {
        const timeStr = time.toISOString();
        return timeStr.substring(0, timeStr.lastIndexOf('T')) + 'T00:00:00';
    }
    serach() {
        if (this.searchFormGroup.valid) {
            // this.serachRailsService();
            let searchFormGroupValue = this.searchFormGroup.value;
            searchFormGroupValue.trip = this.radioSelected;
            this.store.dispatch(new _store_rail_rail_actions__WEBPACK_IMPORTED_MODULE_5__["SetSearchCriteriaData"](searchFormGroupValue));
            this.router.navigateByUrl('/Rail/Search');
        }
        else {
            this.searchFormGroup.markAllAsTouched();
            this.isSubmitted = true;
        }
    }
}
RailDashboardComponent.ɵfac = function RailDashboardComponent_Factory(t) { return new (t || RailDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rail_retrieve_service__WEBPACK_IMPORTED_MODULE_8__["RailRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
RailDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RailDashboardComponent, selectors: [["app-rail-dashboard"]], viewQuery: function RailDashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.picker1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.picker2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.travellersSelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fromDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.countPopupDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.travellersDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fromInput = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toInput = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["class", "spinnerBg", 4, "ngIf"], ["class", "d-flex flex-column-fluid", 4, "ngIf"], [1, "spinnerBg"], [1, "spinner", 3, "diameter"], [1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "row"], [1, "col-12"], [1, "card", "card-custom", "gutter-b", "card-stretch", "rounded-xl"], [1, "card-header", "border-0"], [1, "card-toolbar"], [1, "nav", "nav-bold", "nav-pills"], [1, "nav-item", 3, "click"], [1, "nav-link", 3, "ngClass"], [1, "card-body", "pt-0", "pl-6", "pr-6"], ["searchForm", ""], [1, "tab-content"], ["id", "lr_tab_pane_1", "role", "tabpanel", 1, "tab-pane", "fade", "active", "show"], [1, "brdBigBlock"], [1, "brdBigBlock_inner"], ["id", "fromCityDiv", 1, "searchCity", 2, "width", "26%", 3, "click"], ["fromDiv", ""], [1, "searchContent"], [1, "search_lbl", "text-dark-50", "pb-2"], ["id", "fromCity", "type", "text", "class", "search_inputField h1 text-truncate from", "readonly", "", 3, "value", "title", "click", 4, "ngIf"], ["class", "lessMlr-1", 4, "ngIf"], [4, "ngIf"], [1, "swipBtn", 3, "click"], [1, "fas", "fa-exchange-alt", "text-primary"], ["id", "toCityDiv", 1, "searchCity", 3, "click"], ["toDiv", ""], [1, "search_lbl", "text-dark-50", "pb-2", "to"], ["id", "toCity", "type", "text", "class", "search_inputField h1 text-truncate to", "readonly", "", 3, "value", "title", "click", 4, "ngIf"], [1, "searchDate", 3, "click"], ["id", "startDate", 1, "searchContent"], [1, "search_lbl", "text-dark-50", "pb-2", "from"], [1, "far", "fa-calendar-alt", "text-primary"], ["class", "search_inputField h1", 3, "click", 4, "ngIf"], [1, "searchDate", 3, "ngClass", "click"], ["id", "endDate", 1, "searchContent"], ["type", "text", "class", "search_inputField h2 text-dark-50", "readonly", "", "value", "One Way", 3, "click", 4, "ngIf"], [1, "searchContent", 3, "click"], ["travellersDiv", ""], [1, "fas", "fa-angle-down", "text-primary"], ["id", "count", "class", "search_inputField h2 count", 4, "ngIf"], [1, "d-flex", "justify-content-center", "pt-5"], ["type", "button", 1, "btn", "btn-primary", "btn-pill", "btn-lg", "colorBg", "font-size-h3", "w-200px", "btn-shadow", 3, "click"], [1, "far", "fa-arrow-alt-circle-right"], ["id", "lr_tab_pane_2", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "fromCity", "type", "text", "readonly", "", 1, "search_inputField", "h1", "text-truncate", "from", 3, "value", "title", "click"], [1, "lessMlr-1"], ["appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete", "errorStateMatcher"], ["fromInput", ""], [3, "displayWith", "optionSelected"], ["autoFrom", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "toCity", "type", "text", "readonly", "", 1, "search_inputField", "h1", "text-truncate", "to", 3, "value", "title", "click"], ["toInput", ""], ["autoTo", "matAutocomplete"], [1, "search_inputField", "h1", 3, "click"], [1, "search_inputField", "display6"], ["matInput", "", 3, "min", "max", "errorStateMatcher", "matDatepicker", "formControl", "click", "dateChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["type", "text", "readonly", "", "value", "One Way", 1, "search_inputField", "h2", "text-dark-50", 3, "click"], ["appearance", "outline", 1, "w-100", 3, "click"], ["picker2", ""], ["id", "count", 1, "search_inputField", "h2", "count"], [1, "display6", "count"], [3, "formControl", "selectionChange"], ["travellersSelect", ""]], template: function RailDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RailDashboardComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RailDashboardComponent_div_1_Template, 74, 23, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".product[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    max-height: none;\r\n    max-width: none;\r\n    min-height: 450px;\r\n    padding: 30px;\r\n    border-radius: 20px;\r\n    background-color: #000;\r\n    text-align: center;\r\n  }\r\n  .product.green[_ngcontent-%COMP%] {\r\n    min-height: 450px;\r\n    background-image: url(\"/assets/media/green-arrows.svg\");\r\n    background-color: #58bd89; \r\n    background-position: 0px 140px;\r\n    background-size: 870px;\r\n    background-repeat: no-repeat;\r\n  }\r\n  .product.blue[_ngcontent-%COMP%]{\r\n    min-height: 450px;\r\n    display: flex;\r\n    background-color: #2196f3;\r\n    background-image: url(\"/assets/media/white-lines.svg\");\r\n    background-position: -290px -670px;\r\n    background-size: auto;\r\n    background-repeat: no-repeat;\r\n  }\r\n  .product-text[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    max-width: 500px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    flex: 1;\r\n  }\r\n  .heading-30[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    color: #fff;\r\n    font-size: 30px;\r\n    line-height: 36px;\r\n  }\r\n  .para-20[_ngcontent-%COMP%] {\r\n      color: #fff;\r\n      font-size: 18px;\r\n      line-height: 26px;\r\n      font-weight: 300;\r\n  }\r\n  .card.card-custom.card-stretch.gutter-b[_ngcontent-%COMP%] {\r\n    height: calc(100% - 75px);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmFpbC9yYWlsLWRhc2hib2FyZC9yYWlsLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLHVEQUF1RDtJQUN2RCx5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNEQUFzRDtJQUN0RCxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBS2pCLHNCQUFzQjtJQUl0Qix1QkFBdUI7SUFDdkIsT0FBTztFQUNUO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7RUFDQTtNQUNJLFdBQVc7TUFDWCxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGdCQUFnQjtFQUNwQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvcmFpbC9yYWlsLWRhc2hib2FyZC9yYWlsLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAucHJvZHVjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LWhlaWdodDogbm9uZTtcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucHJvZHVjdC5ncmVlbiB7XHJcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbWVkaWEvZ3JlZW4tYXJyb3dzLnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OGJkODk7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDE0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4NzBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gIC5wcm9kdWN0LmJsdWV7XHJcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9tZWRpYS93aGl0ZS1saW5lcy5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjkwcHggLTY3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgLnByb2R1Y3QtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgLmhlYWRpbmctMzAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgfVxyXG4gIC5wYXJhLTIwIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5jYXJkLmNhcmQtY3VzdG9tLmNhcmQtc3RyZXRjaC5ndXR0ZXItYiB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDc1cHgpO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rail-dashboard',
                templateUrl: './rail-dashboard.component.html',
                styleUrls: ['./rail-dashboard.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] }, { type: _rail_retrieve_service__WEBPACK_IMPORTED_MODULE_8__["RailRetrieveService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_9__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, { picker1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['picker1']
        }], picker2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['picker2']
        }], travellersSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['travellersSelect']
        }], fromDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fromDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }], toDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['toDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }], countPopupDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['countPopupDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }], travellersDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['travellersDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }], fromInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['fromInput']
        }], toInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['toInput']
        }] }); })();


/***/ }),

/***/ "PM+h":
/*!****************************************************!*\
  !*** ./src/app/views/pages/rail/rail.component.ts ***!
  \****************************************************/
/*! exports provided: RailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailComponent", function() { return RailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class RailComponent {
    constructor() { }
    ngOnInit() {
    }
}
RailComponent.ɵfac = function RailComponent_Factory(t) { return new (t || RailComponent)(); };
RailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RailComponent, selectors: [["app-rail"]], decls: 1, vars: 0, template: function RailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JhaWwvcmFpbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rail',
                templateUrl: './rail.component.html',
                styleUrls: ['./rail.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QotO":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-dashboard/rail-retrieve.service.ts ***!
  \**************************************************************************/
/*! exports provided: RailRetrieveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailRetrieveService", function() { return RailRetrieveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/login/login.service */ "0Xdg");








class RailRetrieveService {
    constructor(httpClient, loginService) {
        this.httpClient = httpClient;
        this.loginService = loginService;
    }
    getRails(railQuery) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].railApiEndpoint + 'railing/retrieveAll', railQuery).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    searchAirport(airportCode) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('query', airportCode);
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].railApiEndpoint + 'airport/dropdown', { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    searchRails(railQuery) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].railApiEndpoint + 'airshopping', railQuery).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getAllAirport() {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].railApiEndpoint + 'airport/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    saveFavoriteRails(railingId) {
        // console.log('favourite' + railingId);
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].railApiEndpoint + 'railing/favorite', { favoriteRailing: railingId });
    }
    saveUnfavoriteRails(railingId) {
        // console.log('unfavourite' + railingId);
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].railApiEndpoint + 'railing/unfavorite', { unfavoriteRailing: railingId });
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
RailRetrieveService.ɵfac = function RailRetrieveService_Factory(t) { return new (t || RailRetrieveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"])); };
RailRetrieveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RailRetrieveService, factory: RailRetrieveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailRetrieveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "TYfF":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-create-order/rail-create-order.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RailCreateOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailCreateOrderComponent", function() { return RailCreateOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rail */ "GaOi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/storage/local-storage */ "ADqn");
/* harmony import */ var _rail_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rail-order.service */ "XeCr");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _shared_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/directives/tooltip.directive */ "++hd");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_directives_credit_card_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/directives/credit-card.directive */ "GG7F");
/* harmony import */ var _shared_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/directives/only-number.directive */ "2Goh");






















function RailCreateOrderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function RailCreateOrderComponent_div_1_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedFlight.departureFlight.popUpMessage);
} }
function RailCreateOrderComponent_div_1_div_46_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.selectedFlight.returnFlight.popUpMessage);
} }
function RailCreateOrderComponent_div_1_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function RailCreateOrderComponent_div_1_div_46_Template_img_error_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RailCreateOrderComponent_div_1_div_46_div_24_Template, 4, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.getImageName(ctx_r3.selectedFlight.returnFlight.flightSegments[0].railID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.selectedFlight.returnFlight.flightSegments[0].railName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.selectedFlight.returnFlight.flightSegments[0].railID + ctx_r3.selectedFlight.returnFlight.flightSegments[0].flightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedFlight.returnFlight.flightSegments[0].aircraftName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.selectedFlight.returnFlight.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r3.selectedFlight.returnFlight.departureAirportName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.selectedFlight.returnFlight.departureAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appTooltip", ctx_r3.selectedFlight.returnFlight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.selectedFlight.returnFlight.flightDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedFlight.returnFlight.isPopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.selectedFlight.returnFlight.numberOfStops);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.selectedFlight.returnFlight.arrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r3.selectedFlight.returnFlight.arrivalAirportName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.selectedFlight.returnFlight.arrivalAirportCode);
} }
function RailCreateOrderComponent_div_1_div_48_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_div_48_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Middle Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_div_48_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_div_48_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date of Birth is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_div_48_mat_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gen_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gen_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gen_r29, " ");
} }
function RailCreateOrderComponent_div_1_div_48_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_div_48_mat_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r30, " ");
} }
function RailCreateOrderComponent_div_1_div_48_mat_error_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_div_48_mat_error_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Frequent Flyer Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_div_48_mat_error_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Known Traveler Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_div_48_mat_error_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Redress Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-checkbox", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "WheelChair ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(Add special assistance for passenger)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-radio-group", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-radio-button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-radio-button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-radio-button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Miss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RailCreateOrderComponent_div_1_div_48_mat_error_30_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Middle Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RailCreateOrderComponent_div_1_div_48_mat_error_36_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RailCreateOrderComponent_div_1_div_48_mat_error_42_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "mat-datepicker-toggle", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-datepicker", 88, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, RailCreateOrderComponent_div_1_div_48_mat_error_51_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, RailCreateOrderComponent_div_1_div_48_mat_option_57_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, RailCreateOrderComponent_div_1_div_48_mat_error_58_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, RailCreateOrderComponent_div_1_div_48_mat_option_64_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, RailCreateOrderComponent_div_1_div_48_mat_error_65_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Frequent Flyer Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, RailCreateOrderComponent_div_1_div_48_mat_error_71_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Known Traveler Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, RailCreateOrderComponent_div_1_div_48_mat_error_77_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Redress Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, RailCreateOrderComponent_div_1_div_48_mat_error_83_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Passenger-", i_r16 + 1, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.passengerFG.get("GivenName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.passengerFG.get("MiddleName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.passengerFG.get("Surname").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r4.maxDate)("matDatepicker", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.passengerFG.get("Birthdate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.passengerFG.get("Gender").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.countries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.passengerFG.get("Country").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.passengerFG.get("FrequentFlyerNumber").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.passengerFG.get("KnownTravelerNumber").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.passengerFG.get("RegressNumber").hasError("required"));
} }
function RailCreateOrderComponent_div_1_mat_error_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Primary Email is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not a Valid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_mat_error_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Country Code is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_mat_error_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Primary phone is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_mat_option_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r31, " ");
} }
function RailCreateOrderComponent_div_1_mat_error_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_form_90_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Credit Card Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_form_90_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Security Code is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_form_90_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r44 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r34.isMonthDisable(m_r44))("value", m_r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r44, " ");
} }
function RailCreateOrderComponent_div_1_form_90_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_form_90_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", y_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r45, " ");
} }
function RailCreateOrderComponent_div_1_form_90_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_form_90_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name on Card is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_form_90_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name on Card is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_form_90_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Street is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_form_90_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "City is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_form_90_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Postal Code is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_form_90_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Country Code is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailCreateOrderComponent_div_1_form_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Credit Card Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RailCreateOrderComponent_div_1_form_90_mat_error_6_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Security Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RailCreateOrderComponent_div_1_form_90_mat_error_12_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Exp Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RailCreateOrderComponent_div_1_form_90_mat_option_18_Template, 2, 3, "mat-option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RailCreateOrderComponent_div_1_form_90_mat_error_19_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Exp Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RailCreateOrderComponent_div_1_form_90_mat_option_25_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RailCreateOrderComponent_div_1_form_90_mat_error_26_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "First Name on Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RailCreateOrderComponent_div_1_form_90_mat_error_32_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Last Name on Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RailCreateOrderComponent_div_1_form_90_mat_error_38_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Street");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RailCreateOrderComponent_div_1_form_90_mat_error_44_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, RailCreateOrderComponent_div_1_form_90_mat_error_50_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Postal Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, RailCreateOrderComponent_div_1_form_90_mat_error_56_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Country Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, RailCreateOrderComponent_div_1_form_90_mat_error_62_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r11.creditCardFG);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.creditCardFG.get("CreditCardNumber").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.creditCardFG.get("SecurityCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.monthArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.creditCardFG.get("ExpMonth").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.yearArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.creditCardFG.get("ExpYear").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.creditCardFG.get("FirstNameonCard").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.creditCardFG.get("LastNameonCard").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.creditCardFG.get("Street").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.creditCardFG.get("City").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.creditCardFG.get("PostalCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.creditCardFG.get("CountryCode").hasError("required"));
} }
function RailCreateOrderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Review your booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Booking your information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function RailCreateOrderComponent_div_1_Template_img_error_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RailCreateOrderComponent_div_1_div_37_Template, 4, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RailCreateOrderComponent_div_1_div_46_Template, 33, 14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, RailCreateOrderComponent_div_1_div_48_Template, 84, 16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "form", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Trip contact Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Primary Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, RailCreateOrderComponent_div_1_mat_error_61_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, RailCreateOrderComponent_div_1_mat_error_62_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Country Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, RailCreateOrderComponent_div_1_mat_error_68_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Primary phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, RailCreateOrderComponent_div_1_mat_error_74_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Payment Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Payment Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RailCreateOrderComponent_div_1_Template_mat_select_valueChange_86_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.paymentType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, RailCreateOrderComponent_div_1_mat_option_87_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, RailCreateOrderComponent_div_1_mat_error_88_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, RailCreateOrderComponent_div_1_form_90_Template, 63, 13, "form", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailCreateOrderComponent_div_1_Template_button_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailCreateOrderComponent_div_1_Template_button_click_95_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.bookFlight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Book Flight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Fare Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Adult (per passenger)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](109, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "U.S Passenger Facility Charge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](116, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Passenger Civil Aviation Security Service Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](123, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](129, "number");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.getImageName(ctx_r1.selectedFlight.departureFlight.flightSegments[0].railID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedFlight.departureFlight.flightSegments[0].railName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedFlight.departureFlight.flightSegments[0].railID + ctx_r1.selectedFlight.departureFlight.flightSegments[0].flightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedFlight.departureFlight.flightSegments[0].aircraftName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedFlight.departureFlight.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r1.selectedFlight.departureFlight.departureAirportName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedFlight.departureFlight.departureAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appTooltip", ctx_r1.selectedFlight.departureFlight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedFlight.departureFlight.flightDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedFlight.departureFlight.isPopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedFlight.departureFlight.numberOfStops);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedFlight.departureFlight.arrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r1.selectedFlight.departureFlight.arrivalAirportName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedFlight.departureFlight.arrivalAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedFlight.radioSelected == "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.passengerAFG);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.passengerAFG.get("passengers")["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.contactFG);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contactFG.get("EmailAddressValue").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contactFG.get("EmailAddressValue").hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contactFG.get("AreaCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.contactFG.get("PhoneNumber").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.paymentTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.passengerFG.get("Gender").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.paymentType == ctx_r1.paymentTypes[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](109, 30, ctx_r1.baseAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](116, 33, ctx_r1.facilityCharge, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](123, 36, ctx_r1.securityServiceFee, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](129, 39, ctx_r1.fareAmount, "1.2-2"), "");
} }
class RailCreateOrderComponent extends _rail__WEBPACK_IMPORTED_MODULE_2__["Rail"] {
    constructor(router, loginService, localStorage, railOrderService, _snackBar) {
        super(loginService);
        this.router = router;
        this.localStorage = localStorage;
        this.railOrderService = railOrderService;
        this._snackBar = _snackBar;
        this.selectedFlight = {};
        this.searchCriteria = {};
        this.queryOld = {
            "Query": {
                "Order": {
                    "Offer": [
                        {
                            "OfferItem": [
                                {
                                    "PassengerRefs": "T1",
                                    "OfferItemID": "X9DC4432-6BAE-4B3C-AFF7-1-1"
                                }
                            ],
                            "OfferID": "X9DC4432-6BAE-4B3C-AFF7-1",
                            "Owner": "AA",
                            "ResponseID": "X9DC4432-6BAE-4B3C-AFF7",
                            "OrderItem": null
                        }
                    ]
                },
                "Payments": null,
                "DataLists": {
                    "PassengerList": {
                        "Passenger": [
                            {
                                "PTC": "ADT",
                                "Individual": {
                                    "Birthdate": "1983-02-02",
                                    "Gender": "Female",
                                    "NameTitle": "MRS",
                                    "GivenName": "Nithya",
                                    "MiddleName": null,
                                    "Surname": "Venkatesan"
                                },
                                "ContactInfoRef": "ContactInfo-T1",
                                "PassengerID": "T1"
                            }
                        ]
                    },
                    "ContactList": {
                        "ContactInformation": {
                            "ContactProvided": [
                                {
                                    "EmailAddress": {
                                        "EmailAddressValue": "m.g@gmail.com"
                                    }
                                },
                                {
                                    "Phone": {
                                        "Label": "mobile",
                                        "CountryDialingCode": "1",
                                        "AreaCode": "+1",
                                        "PhoneNumber": "6176427743"
                                    }
                                }
                            ],
                            "ContactID": "ContactInfo-T1"
                        }
                    }
                },
                "Metadata": null
            },
            "OfferItem": null,
            "SpecialServiceRequest": null
        };
        this.query = {
            Query: {
                Order: {
                    Offer: []
                },
                Payments: null,
                DataLists: {
                    PassengerList: {
                        Passenger: []
                    },
                    ContactList: {
                        ContactInformation: {
                            ContactProvided: [],
                            ContactID: "ContactInfo-T1"
                        }
                    }
                },
                Metadata: null
            },
            OfferItem: null,
            SpecialServiceRequest: null
        };
        this.passengerFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            WheelChair: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            NameTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Mr', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            GivenName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            FrequentFlyerNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            KnownTravelerNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            RegressNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.passengerAFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            passengers: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
        this.contactFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            EmailAddressValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Label: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('mobile'),
            CountryDialingCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1'),
            AreaCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            PhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.creditCardFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // CreditType: new FormControl('', Validators.required), 
            CreditCardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            SecurityCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ExpMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ExpYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            FirstNameonCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            LastNameonCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            City: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            PostalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            CountryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.isSubmitted = false;
        this.fareAmount = 0;
        this.baseAmount = 0;
        this.facilityCharge = 0;
        this.securityServiceFee = 0;
        this.maxDate = new Date();
        this.paymentType = this.paymentTypes[0];
        this.isLoading = false;
        document.body.style.backgroundSize = "100% 165px";
        const selectedFlightTxt = this.localStorage.getItem('selectedFlight');
        const searchCriteriaTxt = this.localStorage.getItem('searchFormGroup');
        if (selectedFlightTxt != null && searchCriteriaTxt != null) {
            this.selectedFlight = JSON.parse(selectedFlightTxt);
            this.searchCriteria = JSON.parse(searchCriteriaTxt);
            console.log(this.searchCriteria.count);
            for (let index = 1; index <= this.searchCriteria.count; index++) {
                this.addItem(index);
            }
            const amount = this.getFares(this.selectedFlight.departureFlight.flightFares);
            this.fareAmount = amount.fareAmount;
            this.baseAmount = amount.baseAmount;
            this.facilityCharge = amount.facilityCharge;
            this.securityServiceFee = amount.securityServiceFee;
        }
        else {
            this.router.navigateByUrl('/Rail/Search');
        }
    }
    ngOnInit() {
    }
    createItem(index) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Index: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](index, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            WheelChair: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            NameTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Mr', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            GivenName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            FrequentFlyerNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            KnownTravelerNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            RegressNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    addItem(index) {
        this.passengerArr = this.passengerAFG.get('passengers');
        this.passengerArr.push(this.createItem(index));
    }
    isMonthDisable(month) {
        if (this.creditCardFG.value.ExpYear == new Date().getFullYear()) {
            if (new Date().getMonth() >= Number(month)) {
                return true;
            }
        }
        return false;
    }
    cancel() {
    }
    bookFlight() {
        this.isSubmitted = true;
        if (this.passengerAFG.valid && this.contactFG.valid && (this.paymentType == this.paymentTypes[0] || this.creditCardFG.valid)) {
            console.log('valid');
            this.prepareQuery();
            this.isLoading = true;
            this.railOrderService.createOrder(this.query).subscribe((data) => {
                this.isLoading = false;
                if (data.errors != null && data.errors.error != null) {
                    console.log('createOrder error');
                    console.log(data.errors.error.text);
                    this._snackBar.open(data.errors.error.text, "OK");
                }
                else {
                    console.log('createOrder success');
                    console.log(data);
                    if (data != null && data.response != null && data.response.order != null && data.response.order.orderID != null) {
                        // this._snackBar.open("Order Id:" + data.response.order.orderID, "OK");
                        console.log(data.response.order.orderID);
                        //this.router.navigateByUrl('/Rails/Orders');
                        //this.router.navigateByUrl('/');
                        this.router.navigateByUrl('/Rails/Status/' + data.response.order.orderID);
                    }
                }
            });
        }
        else {
            this.passengerAFG.markAllAsTouched();
            this.contactFG.markAllAsTouched();
            if (this.paymentType == this.paymentTypes[1]) {
                this.creditCardFG.markAllAsTouched();
            }
        }
    }
    prepareQuery() {
        const flightFare = this.selectedFlight.departureFlight.flightFares.filter((flightFare) => flightFare.selectedFare)[0];
        let offer = {
            OfferItem: [
                {
                    PassengerRefs: "T1",
                    OfferItemID: flightFare.offerItemID
                }
            ],
            OfferID: flightFare.offerID,
            Owner: this.selectedFlight.departureFlight.shoppingResponseID.owner,
            ResponseID: this.selectedFlight.departureFlight.shoppingResponseID.responseID,
            OrderItem: null
        };
        this.query.Query.Order.Offer = [];
        this.query.Query.Order.Offer.push(offer);
        this.query.Query.DataLists.PassengerList.Passenger = [];
        for (let passenger of this.passengerAFG.value.passengers) {
            const d = passenger.Birthdate.toISOString().slice(0, 10).split('-');
            const Birthdate = d[0] + '-' + d[1] + '-' + d[2];
            let passengerObj = {
                PTC: "ADT",
                Individual: {
                    Birthdate: Birthdate,
                    Gender: passenger.Gender,
                    NameTitle: passenger.NameTitle,
                    GivenName: passenger.GivenName,
                    MiddleName: passenger.MiddleName,
                    Surname: passenger.Surname
                },
                // ContactInfoRef: "ContactInfo-T" + passenger.Index,
                ContactInfoRef: "ContactInfo-T1",
                PassengerID: "T" + passenger.Index
            };
            this.query.Query.DataLists.PassengerList.Passenger.push(passengerObj);
        }
        const contactValue = this.contactFG.value;
        let contactProvidedEmail = {
            EmailAddress: {
                EmailAddressValue: contactValue.EmailAddressValue
            }
        };
        let contactProvidedPhone = {
            Phone: {
                Label: contactValue.Label,
                CountryDialingCode: contactValue.CountryDialingCode,
                AreaCode: contactValue.AreaCode,
                PhoneNumber: contactValue.PhoneNumber
            }
        };
        this.query.Query.DataLists.ContactList.ContactInformation.ContactProvided = [];
        this.query.Query.DataLists.ContactList.ContactInformation.ContactProvided.push(contactProvidedEmail);
        this.query.Query.DataLists.ContactList.ContactInformation.ContactProvided.push(contactProvidedPhone);
        /*this.railOrderService.gerOrderById('AA0018281EC52').subscribe((data: any) => {
          console.log('gerOrderById');
          console.log(data)
        });*/
        /*this.railOrderService.createOrder(this.query).subscribe((data: any) => {
          if(data.errors!= null && data.errors.error!= null) {
            console.log('createOrder error');
            console.log(data.errors.error.text);
          } else {
            console.log('createOrder success');
            console.log(data);
          }
        });*/
    }
}
RailCreateOrderComponent.ɵfac = function RailCreateOrderComponent_Factory(t) { return new (t || RailCreateOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rail_order_service__WEBPACK_IMPORTED_MODULE_6__["RailOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
RailCreateOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RailCreateOrderComponent, selectors: [["app-rail-create-order"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "d-flex flex-column-fluid", 4, "ngIf"], [1, "spinner", 3, "diameter"], [1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "gutter-b"], [1, "brdSmallBlock_inner", "pt-4", "flex-column"], [1, "text-white", "pl-2", "opacity-70"], [1, "text-white-50", "pl-2"], [1, "row", "gutter-b"], [1, "col-9"], [1, "card", "card-custom", "mb-3"], [1, "card-body", "p-0"], [1, "d-flex", "align-items-center", "flex-wrap", "p-5"], [1, "col-6", "d-flex", "align-items-center", "flex-lg-fill", "pl-0"], [1, "symbol", "symbol-50", "bg-gray-300", "mr-4"], ["alt", "image", 3, "src", "error"], [1, "d-flex", "flex-column", "flex-wrap"], [1, "mb-1"], [1, "d-flex"], [1, "text-dark-50", "font-weight-bold", "mr-2"], [1, "text-dark-50", "font-weight-bold"], [1, "col-6", "d-flex", "align-items-center", "justify-content-center", "flex-lg-fill", "pl-0"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-end"], [1, "text-dark-50", "font-weight-bold", 3, "title"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-center", "min-w-150px", "ml-3", "mr-3", 3, "appTooltip"], [1, "hr-text", "font-size-sm", "text-dark-50", "mb-1"], ["id", "popover", "class", "popover fade show bs-popover-bottom", "style", "top: 45px; left: auto;", "role", "tooltip", "x-placement", "bottom", 4, "ngIf"], [1, "text-primary", "font-weight-bold"], [1, "separator", "separator-solid"], ["class", "card-body p-0", 4, "ngIf"], [3, "formGroup"], ["formArrayName", "passengers", 4, "ngFor", "ngForOf"], [1, "card", "card-custom", "mt-3", 3, "formGroup"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "col-4", "form-group"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "EmailAddressValue", "type", "email", "name", "email", "email", "true", "required", ""], ["matInput", "", "formControlName", "AreaCode", "required", ""], ["matInput", "", "formControlName", "PhoneNumber", "required", ""], [1, "card", "card-custom", "mt-3"], ["required", "", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-8", "form-group"], ["class", "row", 3, "formGroup", 4, "ngIf"], [1, "row", "mt-4", "align-items-end"], [1, "col-12", "ml-lg-auto", "text-right"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "font-weight-bold", "ml-2", 3, "click"], [1, "col-3", "pl-0"], [1, "card", "card-custom"], [1, "d-flex", "pt-3", "justify-content-around"], [1, "col-8", "font-size-lg", "text-left", "pl-6"], [1, "col-4", "font-size-lg", "font-weight-bold", "text-right"], [1, "separator", "separator-dashed", "pt-3", "mb-3"], [1, "d-flex", "justify-content-around"], [1, "d-flex", "pb-3", "justify-content-around"], [1, "d-flex", "border-top", "border-2", "pt-2", "pb-2", "justify-content-around"], [1, "col-7", "text-left", "font-size-h4", "pl-6"], [1, "col-5", "text-right", "font-weight-bold", "font-size-h3"], ["id", "popover", "role", "tooltip", "x-placement", "bottom", 1, "popover", "fade", "show", "bs-popover-bottom", 2, "top", "45px", "left", "auto"], [1, "arrow", 2, "bottom", "-7px", "left", "45%"], [1, "popover-body", "font-size-lg", "text-center"], ["id", "popover2", "class", "popover fade show bs-popover-bottom", "style", "top: 45px; left: auto;", "role", "tooltip", "x-placement", "bottom", 4, "ngIf"], [1, "text-primary", "mb-1", "font-weight-bold"], ["id", "popover2", "role", "tooltip", "x-placement", "bottom", 1, "popover", "fade", "show", "bs-popover-bottom", 2, "top", "45px", "left", "auto"], ["formArrayName", "passengers"], [1, "card", "card-custom", "mb-3", 3, "formGroupName"], [1, "card-toolbar"], [1, "form-group", "mb-0"], [1, "col-form-label"], [1, "checkbox-inline"], ["formControlName", "WheelChair"], [1, "pl-1", "text-black-50"], ["formControlName", "NameTitle", "aria-label", "Select an option"], ["value", "Mr", 1, "mat-primary"], ["value", "Mrs"], ["value", "Miss"], ["matInput", "", "formControlName", "GivenName", "required", ""], ["matInput", "", "formControlName", "MiddleName", "required", ""], ["matInput", "", "formControlName", "Surname", "required", ""], ["matInput", "", "formControlName", "Birthdate", "required", "", 3, "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["startView", "multi-year"], ["picker", ""], ["formControlName", "Gender", "required", ""], ["formControlName", "Country", "required", ""], ["matInput", "", "formControlName", "FrequentFlyerNumber"], ["matInput", "", "formControlName", "KnownTravelerNumber"], ["matInput", "", "formControlName", "RegressNumber"], [3, "value"], [1, "row", 3, "formGroup"], ["matInput", "", "appCreditCard", "", "formControlName", "CreditCardNumber", "required", ""], [1, "col-3", "form-group"], ["matInput", "", "appOnlyNumber", "", "formControlName", "SecurityCode", "maxlength", "4", "required", ""], [1, "col-2", "form-group"], ["formControlName", "ExpMonth", "required", ""], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["formControlName", "ExpYear", "required", ""], [1, "col-6", "form-group"], ["matInput", "", "formControlName", "FirstNameonCard", "required", ""], ["matInput", "", "formControlName", "LastNameonCard", "required", ""], [1, "col-12", "form-group"], ["matInput", "", "formControlName", "Street", "required", ""], ["matInput", "", "formControlName", "City", "required", ""], ["matInput", "", "formControlName", "PostalCode", "required", ""], ["matInput", "", "formControlName", "CountryCode", "required", ""], [3, "disabled", "value"]], template: function RailCreateOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RailCreateOrderComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RailCreateOrderComponent_div_1_Template, 130, 42, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.selectedFlight != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _shared_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioButton"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _shared_directives_credit_card_directive__WEBPACK_IMPORTED_MODULE_18__["CreditCardDirective"], _shared_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_19__["OnlyNumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]], styles: [".form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0rem;\n}\n.mat-radio-button[_ngcontent-%COMP%] {\n    margin-right: 1.25rem;\n}\n.mat-input-element[_ngcontent-%COMP%], .mat-select-value[_ngcontent-%COMP%], .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-infix {\n    padding: 0.5em 0 0.7em 0;\n}\n[_nghost-%COMP%]     .mat-form-field-subscript-wrapper {\n    font-size: 60%; top: calc(100% - 2.5em);\n}\n[_nghost-%COMP%]     .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n    border-color: #3f51b5;\n}\n[_nghost-%COMP%]     .mat-radio-button.mat-accent .mat-radio-inner-circle {\n    background-color: #3f51b5;\n}\n[_nghost-%COMP%]     .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n    background-color:#3f51b5;\n}\n[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n    opacity: 0.03 !important;\n    background-color: #3f51b5!important;\n}\n[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n    background-color: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmFpbC9yYWlsLWNyZWF0ZS1vcmRlci9yYWlsLWNyZWF0ZS1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxjQUFjLEVBQUUsdUJBQXVCO0FBQzNDO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9yYWlsL3JhaWwtY3JlYXRlLW9yZGVyL3JhaWwtY3JlYXRlLW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XG59XG4ubWF0LWlucHV0LWVsZW1lbnQsIC5tYXQtc2VsZWN0LXZhbHVlLCAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAwLjVlbSAwIDAuN2VtIDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6IDYwJTsgdG9wOiBjYWxjKDEwMCUgLSAyLjVlbSk7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzZjUxYjU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgb3BhY2l0eTogMC4wMyAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjUhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailCreateOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rail-create-order',
                templateUrl: './rail-create-order.component.html',
                styleUrls: ['./rail-create-order.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"] }, { type: _rail_order_service__WEBPACK_IMPORTED_MODULE_6__["RailOrderService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "TgxU":
/*!*********************************************!*\
  !*** ./src/app/shared/models/rail.model.ts ***!
  \*********************************************/
/*! exports provided: MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const invalidCtrl = !!(control && control.invalid);
        const invalidParent = !!(control && control.parent && control.parent.invalid);
        const errors = control.parent.errors;
        const controlName = this.getControlName(control);
        if (errors != null && errors.toFromMatch == true && controlName == 'to') {
            return true;
        }
        else if (errors != null && errors.startEndMatch == true && controlName == 'end') {
            return true;
        }
        else {
            return invalidCtrl && control.touched;
        }
    }
    getControlName(c) {
        const formGroup = c.parent.controls;
        return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
    }
}


/***/ }),

/***/ "Tp9U":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-orders/rail-orders.component.ts ***!
  \***********************************************************************/
/*! exports provided: RailOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailOrdersComponent", function() { return RailOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rail */ "GaOi");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/storage/local-storage */ "ADqn");
/* harmony import */ var _rail_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rail-order.service */ "XeCr");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");


















function RailOrdersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function RailOrdersComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrdersComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrdersComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OrderId is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrdersComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrdersComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Rails/Orders/", element_r20.OrderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.OrderId, " ");
} }
function RailOrdersComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passenger Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrdersComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.PassengerName, " ");
} }
function RailOrdersComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Depature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrdersComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.Depature, " ");
} }
function RailOrdersComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Airport ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrdersComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.Airport, " ");
} }
function RailOrdersComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Creation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrdersComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.Creation, " ");
} }
function RailOrdersComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Agency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrdersComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.Agency, " ");
} }
function RailOrdersComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Agency Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrdersComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r26.AgencyId, " ");
} }
function RailOrdersComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
} }
function RailOrdersComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 39);
} }
class RailOrdersComponent extends _rail__WEBPACK_IMPORTED_MODULE_3__["Rail"] {
    constructor(router, loginService, localStorage, railOrderService, _snackBar) {
        super(loginService);
        this.router = router;
        this.localStorage = localStorage;
        this.railOrderService = railOrderService;
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
            this.railOrderService.gerOrderByName(value.FirstName, value.LastName).subscribe((data) => {
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
            this.railOrderService.gerOrderById(value.OrderId).subscribe((data) => {
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
                this.sortedOrders = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.orders.slice());
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
        this.sortedOrders = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.orders.slice());
        this.sortedOrders.sort = this.sort;
    }
}
RailOrdersComponent.ɵfac = function RailOrdersComponent_Factory(t) { return new (t || RailOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rail_order_service__WEBPACK_IMPORTED_MODULE_8__["RailOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"])); };
RailOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RailOrdersComponent, selectors: [["app-rail-orders"]], viewQuery: function RailOrdersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 65, vars: 10, consts: [[4, "ngIf"], [1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "gutter-b", "d-flex"], [1, "brdSmallBlock_inner", "pt-4", "flex-column"], [1, "text-white", "pl-2", "opacity-70"], [1, "text-white-50", "pl-2"], [1, "card", "card-custom"], [1, "card-header"], [1, "card-title"], [1, "d-flex", 3, "formGroup"], ["appearance", "outline", 1, ""], ["matInput", "", "formControlName", "FirstName", "required", ""], ["appearance", "outline", 1, "ml-2"], ["matInput", "", "formControlName", "LastName", "required", ""], ["type", "button", 1, "btn", "btn-primary", "font-size-h5", "ml-2", "mt-2", "h-40px", 3, "click"], [1, "card-header", "justify-content-center"], [1, "row", "align-items-center"], ["matInput", "", "formControlName", "OrderId", "required", ""], [1, "card-body", "p-0"], ["mat-table", "", "matSort", "", 1, "w-100", 3, "dataSource", "ngClass"], ["matColumnDef", "OrderId"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "PassengerName"], ["matColumnDef", "Depature"], ["matColumnDef", "Airport"], ["matColumnDef", "Creation"], ["matColumnDef", "Agency"], ["matColumnDef", "AgencyId"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "spinner", 3, "diameter"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]], template: function RailOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RailOrdersComponent_div_0_Template, 2, 1, "div", 0);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RailOrdersComponent_mat_error_19_Template, 2, 0, "mat-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RailOrdersComponent_mat_error_24_Template, 2, 0, "mat-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailOrdersComponent_Template_button_click_25_listener() { return ctx.search(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RailOrdersComponent_mat_error_37_Template, 2, 0, "mat-error", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailOrdersComponent_Template_button_click_38_listener() { return ctx.searchById(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RailOrdersComponent_th_43_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RailOrdersComponent_td_44_Template, 3, 2, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RailOrdersComponent_th_46_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RailOrdersComponent_td_47_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, RailOrdersComponent_th_49_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, RailOrdersComponent_td_50_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, RailOrdersComponent_th_52_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RailOrdersComponent_td_53_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, RailOrdersComponent_th_55_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, RailOrdersComponent_td_56_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, RailOrdersComponent_th_58_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, RailOrdersComponent_td_59_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, RailOrdersComponent_th_61_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, RailOrdersComponent_td_62_Template, 2, 1, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, RailOrdersComponent_tr_63_Template, 1, 0, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, RailOrdersComponent_tr_64_Template, 1, 0, "tr", 33);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: ["[_nghost-%COMP%]     .mat-input-element {\r\n    font-size: 1.1rem;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field {\r\n    line-height: 2;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-infix {\r\n    padding: 0.5em 0 0.5em 0;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-subscript-wrapper {\r\n    font-size: 60%; top: calc(100% - 2.5em);\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-infix {\r\n    border-top: .5em;\r\n}\r\n[_nghost-%COMP%]     .mat-error {\r\n    line-height: 1;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-label-wrapper {\r\n    top: -0.5em;\r\n    padding-top: 0.5em;\r\n}\r\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-label {\r\n    top: 1.2em;\r\n    margin-top: .2em;\r\n}\r\n.card.card-custom[_ngcontent-%COMP%]    > .card-header[_ngcontent-%COMP%] {\r\n    height: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmFpbC9yYWlsLW9yZGVycy9yYWlsLW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGNBQWMsRUFBRSx1QkFBdUI7QUFDM0M7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JhaWwvcmFpbC1vcmRlcnMvcmFpbC1vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMC41ZW0gMCAwLjVlbSAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xyXG4gICAgZm9udC1zaXplOiA2MCU7IHRvcDogY2FsYygxMDAlIC0gMi41ZW0pO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgYm9yZGVyLXRvcDogLjVlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1lcnJvciB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xyXG4gICAgdG9wOiAtMC41ZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIHRvcDogMS4yZW07XHJcbiAgICBtYXJnaW4tdG9wOiAuMmVtO1xyXG59XHJcbi5jYXJkLmNhcmQtY3VzdG9tID4gLmNhcmQtaGVhZGVyIHtcclxuICAgIGhlaWdodDogNzBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rail-orders',
                templateUrl: './rail-orders.component.html',
                styleUrls: ['./rail-orders.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"] }, { type: _rail_order_service__WEBPACK_IMPORTED_MODULE_8__["RailOrderService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "XeCr":
/*!********************************************************!*\
  !*** ./src/app/views/pages/rail/rail-order.service.ts ***!
  \********************************************************/
/*! exports provided: RailOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailOrderService", function() { return RailOrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/login/login.service */ "0Xdg");








class RailOrderService {
    constructor(httpClient, loginService) {
        this.httpClient = httpClient;
        this.loginService = loginService;
    }
    gerOrderById(orderId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        // params = params.append('query', airportCode);
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].railApiEndpoint + 'orders/' + orderId, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    cancelOrderById(orderId) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        // params = params.append('query', airportCode);
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].railApiEndpoint + 'orders/' + orderId, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    gerOrderByName(firstName, lastName) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('firstName', firstName);
        params = params.append('lastName', lastName);
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].railApiEndpoint + 'orders/name', { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    createOrder(railOrderQuery) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].railApiEndpoint + 'orders', railOrderQuery).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
RailOrderService.ɵfac = function RailOrderService_Factory(t) { return new (t || RailOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"])); };
RailOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RailOrderService, factory: RailOrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailOrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "YBcZ":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-search/rail-list/rail-item/rail-item.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RailItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailItemComponent", function() { return RailItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rail_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rail-item */ "Zy3Y");
/* harmony import */ var _rail_dashboard_rail_retrieve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../rail-dashboard/rail-retrieve.service */ "QotO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../auth/login/login.service */ "0Xdg");






class RailItemComponent extends _rail_item__WEBPACK_IMPORTED_MODULE_1__["RailItem"] {
    constructor(railRetrieveService, router, loginService) {
        super(router, loginService);
        this.railRetrieveService = railRetrieveService;
    }
    ngOnInit() {
    }
}
RailItemComponent.ɵfac = function RailItemComponent_Factory(t) { return new (t || RailItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rail_dashboard_rail_retrieve_service__WEBPACK_IMPORTED_MODULE_2__["RailRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"])); };
RailItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RailItemComponent, selectors: [["app-rail-item"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, template: function RailItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "air line item works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JhaWwvcmFpbC1zZWFyY2gvcmFpbC1saXN0L3JhaWwtaXRlbS9yYWlsLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rail-item',
                templateUrl: './rail-item.component.html',
                styleUrls: ['./rail-item.component.css']
            }]
    }], function () { return [{ type: _rail_dashboard_rail_retrieve_service__WEBPACK_IMPORTED_MODULE_2__["RailRetrieveService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "Zy3Y":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-search/rail-list/rail-item/rail-item.ts ***!
  \*******************************************************************************/
/*! exports provided: RailItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailItem", function() { return RailItem; });
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../rail */ "GaOi");

class RailItem extends _rail__WEBPACK_IMPORTED_MODULE_0__["Rail"] {
    constructor(router, loginService) {
        super(loginService);
        this.router = router;
    }
}


/***/ }),

/***/ "j9lb":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-search/rail-list/rail-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailListComponent", function() { return RailListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../animations */ "Ql4B");
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rail */ "GaOi");
/* harmony import */ var _rail_dashboard_rail_retrieve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rail-dashboard/rail-retrieve.service */ "QotO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/storage/local-storage */ "ADqn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _shared_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/directives/tooltip.directive */ "++hd");











function RailListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function RailListComponent_div_1_div_2_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r6.departureFlight.popUpMessage);
} }
function RailListComponent_div_1_div_2_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 34);
} }
function RailListComponent_div_1_div_2_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailListComponent_div_1_div_2_div_42_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const flightFare_r11 = ctx.$implicit; const flight_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.selectFare(flight_r6, flightFare_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightFare_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", flightFare_r11.selectedFare == true ? "bg-primary text-white" : "bg-hover-primary text-hover-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightFare_r11.cabinType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, flightFare_r11.totalPrice, "1.2-2"), "");
} }
function RailListComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function RailListComponent_div_1_div_2_Template_img_error_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RailListComponent_div_1_div_2_div_25_Template, 4, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailListComponent_div_1_div_2_Template_a_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const flight_r6 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.toggleFare(flight_r6.departureFlight); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RailListComponent_div_1_div_2_div_40_Template, 1, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RailListComponent_div_1_div_2_div_42_Template, 8, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", flight_r6.selected ? "border-solid border-2 border-success rounded" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.getImageName(flight_r6.departureFlight.flightSegments[0].railID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r6.departureFlight.flightSegments[0].railName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r6.departureFlight.flightSegments[0].railID + flight_r6.departureFlight.flightSegments[0].flightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r6.departureFlight.flightSegments[0].aircraftName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flight_r6.departureFlight.departureTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flight_r6.departureFlight.departureAirportCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appTooltip", flight_r6.departureFlight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r6.departureFlight.flightDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flight_r6.departureFlight.isPopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r6.departureFlight.numberOfStops);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flight_r6.departureFlight.arrivalTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flight_r6.departureFlight.arrivalAirportCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 19, ctx_r5.getFare(flight_r6.departureFlight.flightFares), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (!flight_r6.departureFlight.showPrices ? "Show" : "Hide") + " Prices", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !flight_r6.departureFlight.showPrices ? "fa-chevron-down" : "fa-chevron-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flight_r6.departureFlight.showPrices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapse", !flight_r6.departureFlight.showPrices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", flight_r6.departureFlight.flightFares);
} }
function RailListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RailListComponent_div_1_div_2_Template, 43, 22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.flightList);
} }
function RailListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function RailListComponent_div_2_Template_img_error_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailListComponent_div_2_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.bookNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getImageName(ctx_r2.selectedFlight.departureFlight.flightSegments[0].railID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedFlight.departureFlight.flightSegments[0].railName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedFlight.departureFlight.flightSegments[0].railID + ctx_r2.selectedFlight.departureFlight.flightSegments[0].flightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedFlight.departureFlight.flightSegments[0].aircraftName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedFlight.departureFlight.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedFlight.departureFlight.departureAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedFlight.departureFlight.arrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedFlight.departureFlight.arrivalAirportCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 9, ctx_r2.getFare(ctx_r2.selectedFlight.departureFlight.flightFares), "1.2-2"), "");
} }
function RailListComponent_div_3_div_2_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.departureFlight.popUpMessage);
} }
function RailListComponent_div_3_div_2_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.returnFlight.popUpMessage);
} }
function RailListComponent_div_3_div_2_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 34);
} }
function RailListComponent_div_3_div_2_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailListComponent_div_3_div_2_div_77_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const flightFare_r29 = ctx.$implicit; const flight_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.selectFare(flight_r22, flightFare_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightFare_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", flightFare_r29.selectedFare == true ? "bg-primary text-white" : "bg-hover-primary text-hover-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightFare_r29.cabinType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, flightFare_r29.totalPrice, "1.2-2"), "");
} }
function RailListComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function RailListComponent_div_3_div_2_Template_img_error_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RailListComponent_div_3_div_2_div_27_Template, 4, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function RailListComponent_div_3_div_2_Template_img_error_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, RailListComponent_div_3_div_2_div_59_Template, 4, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailListComponent_div_3_div_2_Template_a_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const flight_r22 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.toggleFare(flight_r22.departureFlight); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, RailListComponent_div_3_div_2_div_75_Template, 1, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, RailListComponent_div_3_div_2_div_77_Template, 8, 6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", flight_r22.selected ? "border-solid border-2 border-success rounded" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r21.getImageName(flight_r22.departureFlight.flightSegments[0].railID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.departureFlight.flightSegments[0].railName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.departureFlight.flightSegments[0].railID + flight_r22.departureFlight.flightSegments[0].flightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.departureFlight.flightSegments[0].aircraftName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.departureFlight.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.departureFlight.departureAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appTooltip", flight_r22.departureFlight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.departureFlight.flightDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flight_r22.departureFlight.isPopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.departureFlight.numberOfStops);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.departureFlight.arrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.departureFlight.arrivalAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r21.getImageName(flight_r22.returnFlight.flightSegments[0].railID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.returnFlight.flightSegments[0].railName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.returnFlight.flightSegments[0].railID + flight_r22.returnFlight.flightSegments[0].flightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.returnFlight.flightSegments[0].aircraftName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.returnFlight.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.returnFlight.departureAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appTooltip", flight_r22.returnFlight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.returnFlight.flightDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flight_r22.returnFlight.isPopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.returnFlight.numberOfStops);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.returnFlight.arrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r22.returnFlight.arrivalAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](71, 31, ctx_r21.getFare(flight_r22.departureFlight.flightFares), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (!flight_r22.departureFlight.showPrices ? "Show" : "Hide") + " Prices", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !flight_r22.departureFlight.showPrices ? "fa-chevron-down" : "fa-chevron-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flight_r22.departureFlight.showPrices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapse", !flight_r22.departureFlight.showPrices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", flight_r22.departureFlight.flightFares);
} }
function RailListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RailListComponent_div_3_div_2_Template, 78, 34, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.flightList);
} }
function RailListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function RailListComponent_div_4_Template_img_error_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function RailListComponent_div_4_Template_img_error_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h1", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailListComponent_div_4_Template_a_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.bookNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.getImageName(ctx_r4.selectedFlight.departureFlight.flightSegments[0].railID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedFlight.departureFlight.flightSegments[0].railName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedFlight.departureFlight.flightSegments[0].railID + ctx_r4.selectedFlight.departureFlight.flightSegments[0].flightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedFlight.departureFlight.flightSegments[0].aircraftName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedFlight.departureFlight.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedFlight.departureFlight.departureAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedFlight.departureFlight.arrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.selectedFlight.departureFlight.arrivalAirportCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.getImageName(ctx_r4.selectedFlight.returnFlight.flightSegments[0].railID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedFlight.returnFlight.flightSegments[0].railName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedFlight.returnFlight.flightSegments[0].railID + ctx_r4.selectedFlight.returnFlight.flightSegments[0].flightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedFlight.returnFlight.flightSegments[0].aircraftName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedFlight.returnFlight.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedFlight.returnFlight.departureAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.selectedFlight.returnFlight.arrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.selectedFlight.returnFlight.arrivalAirportCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](68, 17, ctx_r4.getFare(ctx_r4.selectedFlight.departureFlight.flightFares), "1.2-2"), "");
} }
class RailListComponent extends _rail__WEBPACK_IMPORTED_MODULE_2__["Rail"] {
    constructor(railRetrieveService, router, loginService, localStorage) {
        super(loginService);
        this.railRetrieveService = railRetrieveService;
        this.router = router;
        this.localStorage = localStorage;
        this.flightList = [];
        this.isLoading = false;
        this.radioSelected = "one";
    }
    ngOnInit() {
        this.searchSubscription = this.search.subscribe((query) => {
            if (query != null) {
                this.searchRail(query);
            }
        });
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        this.searchSubscription.unsubscribe();
    }
    searchRail(query) {
        this.isLoading = true;
        this.selectedFlight = null;
        this.flightList = [];
        if (query.Flights.length > 1) {
            this.radioSelected = "round";
        }
        else {
            this.radioSelected = "one";
        }
        this.railRetrieveService.searchRails(query).
            subscribe((data) => {
            const offersWithDetails = data.offersWithDetails;
            if (offersWithDetails != null && offersWithDetails.length > 0
                && offersWithDetails[0].flightsPlusSegments != null && offersWithDetails[0].flightsPlusSegments.length > 0) {
                this.getSortedData(data);
                // console.log('flightList' + this.flightList.length);        
            }
            else {
                console.log('response is not correct format');
            }
            this.isLoading = false;
        });
    }
    toggleFare(flightObj) {
        if (flightObj.showPrices == null) {
            flightObj.showPrices = false;
        }
        flightObj.showPrices = !flightObj.showPrices;
    }
    selectFare(flight, flightFare) {
        if (this.selectedFlight != null) {
            for (let selectedFlight of this.selectedFlight.departureFlight.flightFares) {
                selectedFlight.selectedFare = false;
            }
            this.selectedFlight.selected = false;
        }
        this.selectedFlight = flight;
        this.selectedFlight.selected = true;
        this.selectedFlight.radioSelected = this.radioSelected;
        for (let selectedFlight of this.selectedFlight.departureFlight.flightFares) {
            selectedFlight.selectedFare = false;
        }
        flightFare.selectedFare = true;
    }
    getSortedData(data) {
        this.props = {
            flightSearchResult: data
        };
        let list = [];
        list = this.filterAirOffers(this.props.flightSearchResult.offersWithDetails);
        list = list.sort((a, b) => a.departureFlight.flightFares[0].totalPrice - b.departureFlight.flightFares[0].totalPrice);
        for (let flight of list) {
            if (flight.departureFlight.flightSegments.length > 1) {
                // console.log(flight.departureFlight.flightSegments);
                flight.departureFlight.popUpMessage = "";
                let departureStops = [];
                let popUpMessage = [];
                for (let i = 1; i < flight.departureFlight.flightSegments.length; i++) {
                    const flightSegment = flight.departureFlight.flightSegments[i];
                    const pFlightSegment = flight.departureFlight.flightSegments[i - 1];
                    departureStops.push(flightSegment.departureAirportCode);
                    popUpMessage.push(this.getTimeDiff(pFlightSegment, flightSegment));
                }
                flight.departureFlight.numberOfStops = flight.departureFlight.numberOfStops + " via " + departureStops.join(", ");
                flight.departureFlight.popUpMessage = popUpMessage.join("\n");
            }
            if (this.radioSelected == 'round' && flight.returnFlight.flightSegments.length > 1) {
                // console.log(flight.returnFlight.flightSegments);
                flight.returnFlight.popUpMessage = "";
                let returnStops = [];
                let popUpMessage = [];
                for (let i = 1; i < flight.returnFlight.flightSegments.length; i++) {
                    const flightSegment = flight.returnFlight.flightSegments[i];
                    const pFlightSegment = flight.departureFlight.flightSegments[i - 1];
                    returnStops.push(flightSegment.departureAirportCode);
                    popUpMessage.push(this.getTimeDiff(pFlightSegment, flightSegment));
                }
                flight.returnFlight.numberOfStops = flight.returnFlight.numberOfStops + " via " + returnStops.join(", ");
                flight.returnFlight.popUpMessage = popUpMessage.join("\n");
            }
            /*
            aircraftName: "Embraer 175"
            railID: "AA"
            arrivalAirportCode: "STL"
            arrivalAirportName: "St Louis Lambert Intl Apt, US"
            arrivalDate: "2020-10-01"
            arrivalTerminal: {name: "1"}
            arrivalTime: "16:42"
            departureAirportCode: "DFW"
            departureAirportName: "Dallas Dallas-Fort Worth Intl Apt, US"
            departureDate: "2020-10-01"
            departureTerminal: {name: "0"}
            departureTime: "15:00"
            flightNumber: "3400"
            
            Plane change
            New Delhi (DEL) | 7hr 5mins Layover
            
            Terminal change
            Rome - Fiumicino Apt (FCO) ( 3 to 1 ) | 9hr 10mins Layover */
            this.getSortedCabinTypeData(flight, 'departureFlight');
            /*if(this.radioSelected == "round"){
              this.getSortedCabinTypeData(flight, 'returnFlight');
            }*/
        }
        this.flightList = list;
    }
    getTimeDiff(pFlightSegment, flightSegment) {
        const pFlightSegmentDate = new Date(pFlightSegment.arrivalDate + "T" + pFlightSegment.arrivalTime + ":00");
        const FlightSegmentDate = new Date(flightSegment.departureDate + "T" + flightSegment.departureTime + ":00");
        var diff = pFlightSegmentDate.getTime() - FlightSegmentDate.getTime();
        var diff_as_date = new Date(diff);
        // diff_as_date.getSeconds(); // second
        const hours = diff_as_date.getHours() < 9 ? "0" + diff_as_date.getHours() : diff_as_date.getHours();
        const minutes = diff_as_date.getMinutes() < 9 ? "0" + diff_as_date.getMinutes() : diff_as_date.getMinutes();
        const timeDiff = hours + "H " + minutes + "M";
        /*
        Plane change
        New Delhi (DEL) | 7hr 5mins Layover
        
        Terminal change
        Rome - Fiumicino Apt (FCO) ( 3 to 1 ) | 9hr 10mins Layover
        */
        //const str = "Stop:" + flightSegment.departureAirportCode + " waiting time:" + timeDiff;
        const str = flightSegment.departureAirportCode + " | " + timeDiff + " Layover";
        // console.log(str);
        return str;
    }
    getSortedCabinTypeData(flight, type) {
        let flightFares = flight[type].flightFares;
        let fares = {
            "Economy": [],
            "First Class": []
        };
        for (const flightFare of flightFares) {
            flightFare.cabinType = flightFare.cabinType == "Coach Economy" ? "Economy" : flightFare.cabinType;
            fares[flightFare.cabinType] = fares[flightFare.cabinType] || [];
            fares[flightFare.cabinType].push(flightFare);
        }
        for (const fare in fares) {
            fares[fare] = fares[fare].sort((a, b) => a.totalPrice - b.totalPrice);
        }
        let sortedFlightFares = [];
        sortedFlightFares.push(...fares["Economy"]);
        sortedFlightFares.push(...fares["First Class"]);
        flight[type].flightFares = sortedFlightFares;
    }
    bookNow() {
        console.log('Book Now');
        this.localStorage.setItem('selectedFlight', JSON.stringify(this.selectedFlight));
        this.router.navigateByUrl('/Rails/Booking');
    }
    filterAirOffers(offers) {
        const offersMap = {};
        if (offers[0].flightsPlusSegments.length === 1) {
            for (let offer of offers) {
                if (offer.flightsPlusSegments[0].flight.flightKey in offersMap) {
                    offersMap[offer.flightsPlusSegments[0].flight.flightKey].departureFlight.flightFares.push(this.getFlightFare(offer));
                }
                else {
                    offersMap[offer.flightsPlusSegments[0].flight.flightKey] = this.createFinalizedOffers(offer);
                }
            }
        }
        else {
            for (let offer of offers) {
                if (offer.flightsPlusSegments[0].flight.flightKey.concat(offer.flightsPlusSegments[1].flight.flightKey) in offersMap) {
                    offersMap[offer.flightsPlusSegments[0].flight.flightKey.concat(offer.flightsPlusSegments[1].flight.flightKey)].departureFlight.flightFares.push(this.getFlightFare(offer));
                }
                else {
                    offersMap[offer.flightsPlusSegments[0].flight.flightKey.concat(offer.flightsPlusSegments[1].flight.flightKey)] = this.createFinalizedOffers(offer);
                }
            }
        }
        //console.log(offersMap);
        const offersMapKeys = Object.keys(offersMap);
        let filteredAirOffers = [];
        for (let offerKey of offersMapKeys) {
            filteredAirOffers = filteredAirOffers.concat(offersMap[offerKey]);
        }
        // console.log(filteredAirOffers);
        return filteredAirOffers;
    }
    getFlightFare(offer) {
        let flightFare = {
            totalPrice: (Number(offer.totalPrice.detailCurrencyPrice.total.text) * 0.01),
            cabinType: offer.offerItem.fareDetail.fareComponent[0].fareBasis.cabinType.cabinTypeName.includes("COACH") ? "Coach Economy" : "First Class",
            offerID: offer.offerID,
            offerItemID: offer.offerItem.offerItemID
        };
        /*for(let t of offer.offerItem.fareDetail.price.taxes.breakdown.tax) {
          t.amount.text =(Number(t.amount.text) * 0.01)
        }
        let flightFare = {
          totalPrice: (Number(offer.offerItem.totalPriceDetail.totalAmount.detailCurrencyPrice.total.text) * 0.01),
          priceCode: Number(offer.offerItem.totalPriceDetail.totalAmount.detailCurrencyPrice.total.code),
          cabinType: offer.offerItem.fareDetail.fareComponent[0].fareBasis.cabinType.cabinTypeName.includes("COACH") ? "Coach Economy" : "First Class",
          offerID: offer.offerID,
          offerItemID: offer.offerItem.offerItemID,
          baseAmount: (Number(offer.offerItem.fareDetail.price.baseAmount.text) * 0.01),
          tax: offer.offerItem.fareDetail.price.taxes.breakdown.tax
        };*/
        return flightFare;
    }
    createFinalizedOffers(offer) {
        let finalizedOffers = [];
        for (let flightsPlusSegment of offer.flightsPlusSegments) {
            let flightSegments = flightsPlusSegment.flightSegments.map(segment => {
                return {
                    railID: segment.flightSegment.marketingCarrier.railID,
                    flightNumber: segment.flightSegment.marketingCarrier.flightNumber,
                    aircraftName: segment.flightSegment.equipment.name,
                    departureAirportCode: segment.flightSegment.departure.airportCode,
                    arrivalAirportCode: segment.flightSegment.arrival.airportCode,
                    departureDate: segment.flightSegment.departure.date,
                    departureTime: segment.flightSegment.departure.time,
                    departureAirportName: segment.flightSegment.departure.airportName,
                    departureTerminal: segment.flightSegment.departure.terminal,
                    arrivalDate: segment.flightSegment.arrival.date,
                    arrivalTime: segment.flightSegment.arrival.time,
                    arrivalAirportName: segment.flightSegment.arrival.airportName,
                    arrivalTerminal: segment.flightSegment.arrival.terminal,
                    railName: segment.flightSegment.marketingCarrier.name
                };
            });
            let flightFareOld = {
                totalPrice: (Number(offer.totalPrice.detailCurrencyPrice.total.text) * 0.01),
                cabinType: offer.offerItem.fareDetail.fareComponent[0].fareBasis.cabinType.cabinTypeName.includes("COACH") ? "Coach Economy" : "First Class",
                offerID: offer.offerID,
                offerItemID: offer.offerItem.offerItemID
            };
            let flightFare = {
                totalPrice: (Number(offer.totalPrice.detailCurrencyPrice.total.text) * 0.01),
                cabinType: offer.offerItem.fareDetail.fareComponent[0].fareBasis.cabinType.cabinTypeName.includes("COACH") ? "Coach Economy" : "First Class",
                offerID: offer.offerID,
                offerItemID: offer.offerItem.offerItemID,
                baseAmount: (Number(offer.offerItem.fareDetail.price.baseAmount.text) * 0.01),
                tax: offer.offerItem.fareDetail.price.taxes.breakdown.tax
            };
            let flightFares = [];
            flightFares.push(flightFare);
            let finalizedOffer = {
                flightKey: flightsPlusSegment.flight.flightKey,
                shoppingResponseID: this.props.flightSearchResult.shoppingResponseID,
                departureAirportCode: flightsPlusSegment.flight.segmentReferences.onPoint,
                arrivalAirportCode: flightsPlusSegment.flight.segmentReferences.offPoint,
                departureTime: flightsPlusSegment.flightSegments[0].flightSegment.departure.time,
                arrivalTime: flightsPlusSegment.flightSegments.length > 1 ?
                    flightsPlusSegment.flightSegments[flightsPlusSegment.flightSegments.length - 1].flightSegment.arrival.time :
                    flightsPlusSegment.flightSegments[0].flightSegment.arrival.time,
                flightDuration: `${flightsPlusSegment.flight.journey.time.substring(2, 5)} ${flightsPlusSegment.flight.journey.time.substring(5)}`,
                numberOfStops: flightsPlusSegment.flightSegments.length === 1 ? "Nonstop" : `${flightsPlusSegment.flightSegments.length - 1} Stop(s)`,
                flightSegments: flightSegments,
                flightFares: flightFares,
                departureAirportName: flightsPlusSegment.flightSegments[0].flightSegment.departure.airportName,
                arrivalAirportName: flightsPlusSegment.flightSegments[flightsPlusSegment.flightSegments.length - 1].flightSegment.arrival.airportName
            };
            finalizedOffers.push(finalizedOffer);
        }
        if (finalizedOffers.length > 1) {
            return {
                departureFlight: finalizedOffers[0],
                returnFlight: finalizedOffers[1]
            };
        }
        else {
            return {
                departureFlight: finalizedOffers[0]
            };
        }
    }
}
RailListComponent.ɵfac = function RailListComponent_Factory(t) { return new (t || RailListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rail_dashboard_rail_retrieve_service__WEBPACK_IMPORTED_MODULE_3__["RailRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"])); };
RailListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RailListComponent, selectors: [["app-rail-list"]], inputs: { search: "search" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 5, consts: [[4, "ngIf"], ["class", "row gutter-b mt-5", 4, "ngIf"], ["class", "colorBlock", 4, "ngIf"], [1, "spinner", 3, "diameter"], [1, "row", "gutter-b", "mt-5"], [1, "col-12"], ["class", "card card-custom mb-3", 4, "ngFor", "ngForOf"], [1, "card", "card-custom", "mb-3"], [1, "card-body", "p-0"], [1, "d-flex", "align-items-center", "flex-wrap", "p-5", 3, "ngClass"], [1, "d-flex", "align-items-center", "flex-lg-fill", "w-35"], [1, "symbol", "symbol-50", "bg-gray-300", "mr-4"], ["alt", "image", 3, "src", "error"], [1, "d-flex", "flex-column", "flex-wrap"], [1, "mb-1"], [1, "d-flex"], [1, "text-dark-50", "font-weight-bold", "mr-2"], [1, "text-dark-50", "font-weight-bold", "mr-2", "text-truncate"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-end"], [1, "text-dark-50", "font-weight-bold"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-center", "min-w-150px", "pl-2", "pr-2", 3, "appTooltip"], [1, "hr-text", "mb-2", "text-dark-50"], ["id", "popover", "class", "popover fade show bs-popover-bottom", "style", "top: 65px; left: auto;", "role", "tooltip", "x-placement", "bottom", 4, "ngIf"], [1, "text-primary", "font-weight-bold"], [1, "d-flex", "align-items-right"], [1, "pt-3", "mr-4"], [1, "btn", "btn-outline-primary", "font-weight-bold", "font-size-h4", 3, "click"], [1, "fas", 3, "ngClass"], ["class", "separator separator-dashed border-secondary", 4, "ngIf"], [1, "d-flex", "justify-content-end", "flex-wrap"], [4, "ngFor", "ngForOf"], ["id", "popover", "role", "tooltip", "x-placement", "bottom", 1, "popover", "fade", "show", "bs-popover-bottom", 2, "top", "65px", "left", "auto"], [1, "arrow", 2, "bottom", "-7px", "left", "45%"], [1, "popover-body", "font-size-lg", "text-center"], [1, "separator", "separator-dashed", "border-secondary"], [1, "d-flex", "bgLightyellow", "cursor-pointer", "text-center", "pl-5", "pr-5", "pt-3", "pb-3", 3, "ngClass", "click"], [1, "d-flex", "flex-column"], [1, "font-weight-bold", "opacity-60"], [1, "font-size-h2"], [1, "colorBlock"], [1, "d-flex", "align-items-center", "flex-wrap", "p-3"], [1, "d-flex", "align-items-center", "flex-lg-fill"], [1, "symbol", "symbol-50", "bg-white-o-30", "mr-4"], [1, "text-white-50", "font-weight-bold", "mr-2"], [1, "text-white-50", "font-weight-bold"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-center", "pl-2", "pr-2"], [1, "btn", "btn-outline-primary", "font-weight-bold", "font-size-h4", "bg-white", "text-dark-75", 3, "click"], [1, "d-flex", "align-items-center", "flex-wrap", 3, "ngClass"], [1, "d-flex", "flex-column", "flex-fill"], [1, "d-flex", "flex-fill", "pt-4", "pl-5"], [1, "d-flex", "align-items-center", "w-450px"], ["id", "popover2", "class", "popover fade show bs-popover-bottom", "style", "top: 65px; left: auto;", "role", "tooltip", "x-placement", "bottom", 4, "ngIf"], [1, "w-100"], [1, "d-flex", "flex-fill", "pb-4", "pl-5"], ["id", "popover3", "class", "popover fade show bs-popover-bottom", "style", "top: 140px; left: auto;", "role", "tooltip", "x-placement", "bottom", 4, "ngIf"], [1, "hrVertical", "h-150px"], [1, "d-flex", "align-items-right", "pl-5", "pr-5"], ["id", "popover2", "role", "tooltip", "x-placement", "bottom", 1, "popover", "fade", "show", "bs-popover-bottom", 2, "top", "65px", "left", "auto"], ["id", "popover3", "role", "tooltip", "x-placement", "bottom", 1, "popover", "fade", "show", "bs-popover-bottom", 2, "top", "140px", "left", "auto"], [1, "d-flex", "flex-fill"], [1, "d-flex", "flex-row", "flex-fill"], [1, "hrVerticalLight", "mr-5", "h-50px"], [3, "src", "error"]], template: function RailListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RailListComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RailListComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RailListComponent_div_2_Template, 37, 12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RailListComponent_div_3_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RailListComponent_div_4_Template, 71, 20, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.radioSelected == "one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.radioSelected == "one" && ctx.selectedFlight != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.radioSelected == "round");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.radioSelected == "round" && ctx.selectedFlight != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _shared_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__["TooltipDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["[_nghost-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n    stroke: blueviolet !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmFpbC9yYWlsLXNlYXJjaC9yYWlsLWxpc3QvcmFpbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9yYWlsL3JhaWwtc2VhcmNoL3JhaWwtbGlzdC9yYWlsLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcbiAgICBzdHJva2U6IGJsdWV2aW9sZXQgIWltcG9ydGFudDtcbn0iXX0= */"], data: { animation: [
            _animations__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"]
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rail-list',
                templateUrl: './rail-list.component.html',
                styleUrls: ['./rail-list.component.css'],
                animations: [
                    _animations__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"]
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _rail_dashboard_rail_retrieve_service__WEBPACK_IMPORTED_MODULE_3__["RailRetrieveService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }, { type: _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"] }]; }, { search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "lP/z":
/*!*************************************************!*\
  !*** ./src/app/views/pages/rail/rail.module.ts ***!
  \*************************************************/
/*! exports provided: RailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailModule", function() { return RailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _rail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rail.component */ "PM+h");
/* harmony import */ var _rail_dashboard_rail_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rail-dashboard/rail-dashboard.component */ "M13y");
/* harmony import */ var _rail_dashboard_rail_subheader_rail_subheader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rail-dashboard/rail-subheader/rail-subheader.component */ "IBTb");
/* harmony import */ var _rail_search_rail_list_rail_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rail-search/rail-list/rail-list.component */ "j9lb");
/* harmony import */ var _rail_view_rail_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rail-view/rail-view.component */ "sUDl");
/* harmony import */ var _rail_search_rail_list_rail_item_rail_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rail-search/rail-list/rail-item/rail-item.component */ "YBcZ");
/* harmony import */ var _rail_search_rail_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rail-search/rail-search.component */ "wcjV");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../material.module */ "vvyD");
/* harmony import */ var _rail_create_order_rail_create_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rail-create-order/rail-create-order.component */ "TYfF");
/* harmony import */ var _rail_orders_rail_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rail-orders/rail-orders.component */ "Tp9U");
/* harmony import */ var _rail_order_rail_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rail-order/rail-order.component */ "u0Uy");
/* harmony import */ var _rail_order_status_rail_order_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rail-order-status/rail-order-status.component */ "36t+");


















;
const secondaryRoutes = [
    {
        path: '',
        component: _rail_component__WEBPACK_IMPORTED_MODULE_4__["RailComponent"],
        children: [
            {
                path: '', component: _rail_dashboard_rail_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["RailDashboardComponent"]
            },
            {
                path: 'Search', component: _rail_search_rail_search_component__WEBPACK_IMPORTED_MODULE_10__["RailSearchComponent"]
            },
            {
                path: 'Booking', component: _rail_create_order_rail_create_order_component__WEBPACK_IMPORTED_MODULE_12__["RailCreateOrderComponent"]
            },
            {
                path: 'Orders', component: _rail_orders_rail_orders_component__WEBPACK_IMPORTED_MODULE_13__["RailOrdersComponent"]
            },
            {
                path: 'Orders/:id', component: _rail_order_rail_order_component__WEBPACK_IMPORTED_MODULE_14__["RailOrderComponent"]
            },
            {
                path: 'Status', component: _rail_order_status_rail_order_status_component__WEBPACK_IMPORTED_MODULE_15__["RailOrderStatusComponent"]
            },
            {
                path: 'Status/:id', component: _rail_order_status_rail_order_status_component__WEBPACK_IMPORTED_MODULE_15__["RailOrderStatusComponent"]
            }
        ]
    }
];
class RailModule {
}
RailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RailModule });
RailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RailModule_Factory(t) { return new (t || RailModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_11__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(secondaryRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RailModule, { declarations: [_rail_component__WEBPACK_IMPORTED_MODULE_4__["RailComponent"], _rail_dashboard_rail_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["RailDashboardComponent"], _rail_dashboard_rail_subheader_rail_subheader_component__WEBPACK_IMPORTED_MODULE_6__["RailSubheaderComponent"], _rail_search_rail_list_rail_list_component__WEBPACK_IMPORTED_MODULE_7__["RailListComponent"],
        _rail_view_rail_view_component__WEBPACK_IMPORTED_MODULE_8__["RailViewComponent"], _rail_search_rail_list_rail_item_rail_item_component__WEBPACK_IMPORTED_MODULE_9__["RailItemComponent"], _rail_search_rail_search_component__WEBPACK_IMPORTED_MODULE_10__["RailSearchComponent"], _rail_create_order_rail_create_order_component__WEBPACK_IMPORTED_MODULE_12__["RailCreateOrderComponent"],
        _rail_orders_rail_orders_component__WEBPACK_IMPORTED_MODULE_13__["RailOrdersComponent"], _rail_order_rail_order_component__WEBPACK_IMPORTED_MODULE_14__["RailOrderComponent"], _rail_order_status_rail_order_status_component__WEBPACK_IMPORTED_MODULE_15__["RailOrderStatusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_11__["AngularMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _rail_component__WEBPACK_IMPORTED_MODULE_4__["RailComponent"], _rail_dashboard_rail_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["RailDashboardComponent"], _rail_dashboard_rail_subheader_rail_subheader_component__WEBPACK_IMPORTED_MODULE_6__["RailSubheaderComponent"], _rail_search_rail_list_rail_list_component__WEBPACK_IMPORTED_MODULE_7__["RailListComponent"],
                    _rail_view_rail_view_component__WEBPACK_IMPORTED_MODULE_8__["RailViewComponent"], _rail_search_rail_list_rail_item_rail_item_component__WEBPACK_IMPORTED_MODULE_9__["RailItemComponent"], _rail_search_rail_search_component__WEBPACK_IMPORTED_MODULE_10__["RailSearchComponent"], _rail_create_order_rail_create_order_component__WEBPACK_IMPORTED_MODULE_12__["RailCreateOrderComponent"],
                    _rail_orders_rail_orders_component__WEBPACK_IMPORTED_MODULE_13__["RailOrdersComponent"], _rail_order_rail_order_component__WEBPACK_IMPORTED_MODULE_14__["RailOrderComponent"], _rail_order_status_rail_order_status_component__WEBPACK_IMPORTED_MODULE_15__["RailOrderStatusComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_11__["AngularMaterialModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(secondaryRoutes)
                ],
                entryComponents: [_rail_search_rail_list_rail_list_component__WEBPACK_IMPORTED_MODULE_7__["RailListComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "qHv+":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-view/rail-view.service.ts ***!
  \*****************************************************************/
/*! exports provided: RailViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailViewService", function() { return RailViewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/login/login.service */ "0Xdg");







class RailViewService {
    constructor(httpClient, loginService) {
        this.httpClient = httpClient;
        this.loginService = loginService;
    }
    getRailByID(codeVersion, skipACL = false) {
        const userinfo = this.loginService.getUserSession();
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].railApiEndpoint + 'railing/railByID', { user: userinfo.userCode, objectCode: codeVersion, skipACL: skipACL });
    }
    railSave(rail) {
        const userinfo = this.loginService.getUserSession();
        let reqbody = {
            user: userinfo.userCode,
            objectCode: rail.objectCode,
            version: rail.version,
            saveMode: '0',
            Railing: rail
        };
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].railApiEndpoint + 'railing/save', reqbody);
    }
    searchRails(railQuery) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].railApiEndpoint + 'railing/search', railQuery).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getObjectList() {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].railApiEndpoint + 'railing/objectList').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    searchProperties(propertyQuery) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].railApiEndpoint + 'property/search', propertyQuery).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = {};
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = { code: '-1', Error: `${error.error.message}` };
        }
        else {
            // server-side error
            errorMessage = { code: '-1', status: error.status, Error: error.message };
        }
        //window.alert(errorMessage);
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
}
RailViewService.ɵfac = function RailViewService_Factory(t) { return new (t || RailViewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"])); };
RailViewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RailViewService, factory: RailViewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailViewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "sUDl":
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-view/rail-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: RailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailViewComponent", function() { return RailViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rail */ "GaOi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rail_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rail-view.service */ "qHv+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/login/login.service */ "0Xdg");







const railJson = {
    _id: '',
    objectCode: '',
    name: '',
    description: '',
    railingType: '',
    deleteMark: 0,
    isActive: 1,
    changeCount: 0,
    acl: [],
    railingCodes: [],
    objectLinks: []
};
class RailViewComponent extends _rail__WEBPACK_IMPORTED_MODULE_1__["Rail"] {
    constructor(router, activatedRoute, railViewService, _snackBar, loginService) {
        super(loginService);
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.railViewService = railViewService;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
    }
}
RailViewComponent.ɵfac = function RailViewComponent_Factory(t) { return new (t || RailViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rail_view_service__WEBPACK_IMPORTED_MODULE_3__["RailViewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"])); };
RailViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RailViewComponent, selectors: [["app-rail-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function RailViewComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JhaWwvcmFpbC12aWV3L3JhaWwtdmlldy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rail-view',
                templateUrl: './rail-view.component.html',
                styleUrls: ['./rail-view.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _rail_view_service__WEBPACK_IMPORTED_MODULE_3__["RailViewService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "u0Uy":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-order/rail-order.component.ts ***!
  \*********************************************************************/
/*! exports provided: RailOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailOrderComponent", function() { return RailOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rail */ "GaOi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/storage/local-storage */ "ADqn");
/* harmony import */ var _rail_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rail-order.service */ "XeCr");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/dialog/dialog.component */ "d/rN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");













const _c0 = ["appDialog"];
function RailOrderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
} }
function RailOrderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
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
function RailOrderComponent_div_2_div_19_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrderComponent_div_2_div_19_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.index, " ");
} }
function RailOrderComponent_div_2_div_19_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrderComponent_div_2_div_19_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.getName(element_r17), " ");
} }
function RailOrderComponent_div_2_div_19_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrderComponent_div_2_div_19_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.individual.gender, " ");
} }
function RailOrderComponent_div_2_div_19_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DOB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RailOrderComponent_div_2_div_19_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.individual.birthdate, " ");
} }
function RailOrderComponent_div_2_div_19_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 48);
} }
function RailOrderComponent_div_2_div_19_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 49);
} }
function RailOrderComponent_div_2_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function RailOrderComponent_div_2_div_19_Template_img_error_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.onImgError($event); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RailOrderComponent_div_2_div_19_th_43_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RailOrderComponent_div_2_div_19_td_44_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RailOrderComponent_div_2_div_19_th_46_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RailOrderComponent_div_2_div_19_td_47_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, RailOrderComponent_div_2_div_19_th_49_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, RailOrderComponent_div_2_div_19_td_50_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, RailOrderComponent_div_2_div_19_th_52_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RailOrderComponent_div_2_div_19_td_53_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RailOrderComponent_div_2_div_19_tr_54_Template, 1, 0, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, RailOrderComponent_div_2_div_19_tr_55_Template, 1, 0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightSegment_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.getImageName(flightSegment_r5.marketingCarrier.railID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r5.marketingCarrier.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flightSegment_r5.marketingCarrier.railID + flightSegment_r5.marketingCarrier.flightNumber, "");
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
function RailOrderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RailOrderComponent_div_2_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.showDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RailOrderComponent_div_2_div_19_Template, 56, 22, "div", 18);
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
class RailOrderComponent extends _rail__WEBPACK_IMPORTED_MODULE_1__["Rail"] {
    constructor(router, loginService, localStorage, railOrderService, _snackBar, activatedRoute, dialogService, cdRef) {
        super(loginService);
        this.router = router;
        this.localStorage = localStorage;
        this.railOrderService = railOrderService;
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
            this.railOrderService.gerOrderById(this.orderId).subscribe((data) => {
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
        this.railOrderService.cancelOrderById(this.orderId).subscribe((data) => {
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
RailOrderComponent.ɵfac = function RailOrderComponent_Factory(t) { return new (t || RailOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rail_order_service__WEBPACK_IMPORTED_MODULE_5__["RailOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RailOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RailOrderComponent, selectors: [["app-rail-order"]], viewQuery: function RailOrderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appDialog = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[4, "ngIf"], ["appDialog", ""], [1, "spinner", 3, "diameter"], ["id", "lr_content", 1, "content", "d-flex", "flex-column", "flex-column-fluid", "pt-0"], [1, "d-flex", "flex-column-fluid", "borderHeader"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "gutter-b", "d-flex"], [1, "brdSmallBlock_inner", "pt-4", "flex-column"], [1, "text-white", "pl-2"], [1, "opacity-70"], [1, "text-white-50", "pl-2"], [1, "fas", "fa-times-circle", "text-danger", "icon-xl"], [1, "fas", "fa-check-circle", "text-success", "icon-xl"], [1, "gutter-b"], [1, "d-flex", "justify-content-end", "mb-3", "mr-3"], ["type", "reset", "title", "Order Cancel", 1, "btn", "btn-primary", 3, "click"], ["class", "card card-custom mb-3", 4, "ngFor", "ngForOf"], [1, "card", "card-custom", "mb-3"], [1, "card-body", "p-0"], [1, "d-flex", "align-items-start", "flex-wrap", "p-5"], [1, "col-5", "d-flex", "align-items-center", "flex-lg-fill", "pl-0"], [1, "symbol", "symbol-50", "bg-gray-300", "mr-4"], ["alt", "image", 3, "src", "error"], [1, "d-flex", "flex-column", "flex-wrap"], [1, "mb-1"], [1, "d-flex"], [1, "text-dark-50", "font-weight-bold", "mr-2"], [1, "col-7", "d-flex", "align-items-center", "justify-content-center", "flex-lg-fill", "pl-0"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-end"], [1, "text-dark-50", "font-weight-bold"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-center", "min-w-150px", "ml-3", "mr-3"], [1, "hr-text", "font-size-sm", "text-dark-50", "mb-1"], [1, "text-primary", "font-weight-bold", "mb-1"], [1, "text-dark-65"], [1, "separator", "separator-solid"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "Gender"], ["matColumnDef", "DOB"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function RailOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RailOrderComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RailOrderComponent_div_1_Template, 15, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RailOrderComponent_div_2_Template, 20, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-dialog", null, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.order.flightSegment.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.orderId != null && ctx.order.flightSegment.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmFpbC9yYWlsLW9yZGVyL3JhaWwtb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3JhaWwvcmFpbC1vcmRlci9yYWlsLW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RailOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rail-order',
                templateUrl: './rail-order.component.html',
                styleUrls: ['./rail-order.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"] }, { type: _rail_order_service__WEBPACK_IMPORTED_MODULE_5__["RailOrderService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { appDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['appDialog']
        }] }); })();


/***/ }),

/***/ "wcjV":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/rail/rail-search/rail-search.component.ts ***!
  \***********************************************************************/
/*! exports provided: RailSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailSearchComponent", function() { return RailSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rail */ "GaOi");
/* harmony import */ var _store_rail_rail_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/rail/rail.actions */ "II1b");
/* harmony import */ var _store_rail_rail_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../store/rail/rail.state */ "p2+c");
/* harmony import */ var _shared_models_rail_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/models/rail.model */ "TgxU");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _rail_dashboard_rail_retrieve_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rail-dashboard/rail-retrieve.service */ "QotO");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/storage/local-storage */ "ADqn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _rail_list_rail_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rail-list/rail-list.component */ "j9lb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");



























const _c0 = ["picker1"];
const _c1 = ["picker2"];
const _c2 = ["travellersSelect"];
const _c3 = ["tripSelect"];
const _c4 = ["fromDiv"];
const _c5 = ["toDiv"];
const _c6 = ["countPopupDiv"];
const _c7 = ["travellersDiv"];
const _c8 = ["railListComponent"];
const _c9 = ["fromInput"];
const _c10 = ["toInput"];
function RailSearchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 30);
} }
function RailSearchComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.clickChange("trip"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Way");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r2.searchFormGroup.value.trip), " ");
} }
function RailSearchComponent_div_1_div_12_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tripObj_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tripObj_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, tripObj_r32), " ", " Way", " ");
} }
function RailSearchComponent_div_1_div_12_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please Select Trip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RailSearchComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function RailSearchComponent_div_1_div_12_Template_mat_select_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.tripSelectionChange($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RailSearchComponent_div_1_div_12_mat_option_4_Template, 3, 5, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RailSearchComponent_div_1_div_12_mat_error_5_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r3.searchFormGroup.get("trip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.tripType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isSubmitted && ctx_r3.searchFormGroup.get("trip").hasError("required"));
} }
function RailSearchComponent_div_1_input_18_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_input_18_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r35.clickChange("from"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r5.getAirPortDisplayName(ctx_r5.searchFormGroup.value.from));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r5.getAirPortDisplayName(ctx_r5.searchFormGroup.value.from));
} }
function RailSearchComponent_div_1_div_19_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (option_r40.value || option_r40.name) + "-" + (option_r40.data || option_r40.id || ""), " ");
} }
function RailSearchComponent_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-autocomplete", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function RailSearchComponent_div_1_div_19_Template_mat_autocomplete_optionSelected_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r41.fromChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RailSearchComponent_div_1_div_19_mat_option_6_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r6.searchFormGroup.get("from"))("matAutocomplete", _r38)("errorStateMatcher", ctx_r6.errorMatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx_r6.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, ctx_r6.filteredFromOptions));
} }
function RailSearchComponent_div_1_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Leaving From is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RailSearchComponent_div_1_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please Select From");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RailSearchComponent_div_1_input_29_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_input_29_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r43.clickChange("to"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r10.getAirPortDisplayName(ctx_r10.searchFormGroup.value.to));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r10.getAirPortDisplayName(ctx_r10.searchFormGroup.value.to));
} }
function RailSearchComponent_div_1_div_30_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (option_r48.value || option_r48.name) + "-" + (option_r48.data || option_r48.id || ""), " ");
} }
function RailSearchComponent_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 49, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-autocomplete", 51, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function RailSearchComponent_div_1_div_30_Template_mat_autocomplete_optionSelected_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r49.toChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RailSearchComponent_div_1_div_30_mat_option_6_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r11.searchFormGroup.get("to"))("matAutocomplete", _r46)("errorStateMatcher", ctx_r11.errorMatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx_r11.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, ctx_r11.filteredToOptions));
} }
function RailSearchComponent_div_1_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Going To is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RailSearchComponent_div_1_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please Select To");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RailSearchComponent_div_1_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "To and From are Same");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RailSearchComponent_div_1_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_div_39_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r51.clickChange("start"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 3, ctx_r15.searchFormGroup.value.start, "dd"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 6, ctx_r15.searchFormGroup.value.start, "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 9, ctx_r15.searchFormGroup.value.start, "yyyy"), " ");
} }
function RailSearchComponent_div_1_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_div_40_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r53.open(); })("dateChange", function RailSearchComponent_div_1_div_40_Template_input_dateChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r56.startDateChange("change", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-datepicker-toggle", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-datepicker", null, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r16.minToDate)("max", ctx_r16.maxToDate)("errorStateMatcher", ctx_r16.errorMatcher)("matDatepicker", _r53)("formControl", ctx_r16.searchFormGroup.get("start"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r53);
} }
function RailSearchComponent_div_1_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Depature Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RailSearchComponent_div_1_input_47_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_input_47_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r57.clickChange("end"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RailSearchComponent_div_1_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_div_48_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r59.clickChange("end"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 3, ctx_r19.searchFormGroup.value.end, "dd"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 6, ctx_r19.searchFormGroup.value.end, "MMM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 9, ctx_r19.searchFormGroup.value.end, "yyyy"), " ");
} }
function RailSearchComponent_div_1_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_div_49_Template_mat_form_field_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r62.enableRoundTrip(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_div_49_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r61.open(); })("dateChange", function RailSearchComponent_div_1_div_49_Template_input_dateChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r65.endDateChange("change", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-datepicker-toggle", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-datepicker", null, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r20.minFromDate)("max", ctx_r20.maxFromDate)("errorStateMatcher", ctx_r20.errorMatcher)("matDatepicker", _r61)("formControl", ctx_r20.searchFormGroup.get("end"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r61);
} }
function RailSearchComponent_div_1_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Return Date is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RailSearchComponent_div_1_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Return date cannot be earlier than Depature date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RailSearchComponent_div_1_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Traveller");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r24.searchFormGroup.value.count, " ");
} }
function RailSearchComponent_div_1_div_59_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", number_r68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", number_r68, " ");
} }
function RailSearchComponent_div_1_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 44, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function RailSearchComponent_div_1_div_59_Template_mat_select_selectionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r69.countChange($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RailSearchComponent_div_1_div_59_mat_option_4_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r25.searchFormGroup.get("count"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r25.numbers);
} }
function RailSearchComponent_div_1_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please choose a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RailSearchComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Trip Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RailSearchComponent_div_1_div_11_Template, 5, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RailSearchComponent_div_1_div_12_Template, 6, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r71.clickChange("from"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Leaving From");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RailSearchComponent_div_1_input_18_Template, 1, 2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RailSearchComponent_div_1_div_19_Template, 8, 7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RailSearchComponent_div_1_mat_error_20_Template, 4, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RailSearchComponent_div_1_mat_error_21_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_Template_span_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r73.swipBtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_Template_div_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r74.clickChange("to"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Going To");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RailSearchComponent_div_1_input_29_Template, 1, 2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RailSearchComponent_div_1_div_30_Template, 8, 7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RailSearchComponent_div_1_mat_error_31_Template, 4, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RailSearchComponent_div_1_mat_error_32_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RailSearchComponent_div_1_mat_error_33_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_Template_div_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r75.clickChange("start"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Depature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, RailSearchComponent_div_1_div_39_Template, 5, 12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, RailSearchComponent_div_1_div_40_Template, 6, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, RailSearchComponent_div_1_mat_error_41_Template, 4, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_Template_div_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r76.enableRoundTrip(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Return ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, RailSearchComponent_div_1_input_47_Template, 1, 0, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, RailSearchComponent_div_1_div_48_Template, 5, 12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, RailSearchComponent_div_1_div_49_Template, 6, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, RailSearchComponent_div_1_mat_error_50_Template, 4, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, RailSearchComponent_div_1_mat_error_51_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_Template_div_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r77.clickChange("count"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Travellers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, RailSearchComponent_div_1_div_58_Template, 4, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, RailSearchComponent_div_1_div_59_Template, 5, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, RailSearchComponent_div_1_mat_error_60_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RailSearchComponent_div_1_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r78.serach(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "app-rail-list", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.click.trip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.click.trip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.click.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.click.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.get("from").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.hasError("fromSelected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.click.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.click.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.get("to").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.hasError("toSelected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.hasError("toFromMatch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.click.start);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.click.start);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.get("start").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.radioSelected == "one" ? "bg-gray-200" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.click.end && ctx_r1.radioSelected == "one");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.click.end && ctx_r1.radioSelected == "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.click.end);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.get("end").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.hasError("startEndMatch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.click.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.click.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.searchFormGroup.get("count").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("search", ctx_r1.searchSubject.asObservable());
} }
class RailSearchComponent extends _rail__WEBPACK_IMPORTED_MODULE_6__["Rail"] {
    constructor(loginService, railRetrieveService, renderer, httpClient, store, router, localStorage) {
        super(loginService);
        this.railRetrieveService = railRetrieveService;
        this.renderer = renderer;
        this.httpClient = httpClient;
        this.store = store;
        this.router = router;
        this.localStorage = localStorage;
        this.response = {};
        this.railData = {};
        this.railLoading = false;
        this.radioSelected = "one";
        this.loadingLeavingFrom = false;
        this.loadingLeavingTo = false;
        this.minToDate = new Date();
        this.maxToDate = new Date(this.minToDate.getTime() + 1000 * 60 * 60 * 24 * 150);
        this.minFromDate = new Date();
        this.maxFromDate = new Date(this.minFromDate.getTime() + 1000 * 60 * 60 * 24 * 150);
        this.errorMatcher = new _shared_models_rail_model__WEBPACK_IMPORTED_MODULE_9__["MyErrorStateMatcher"]();
        this.tripType = ['one', 'round'];
        this.searchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            trip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.tripType[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.defaultFrom, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.defaultTo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            count: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            adults: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            childrens: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            infants: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, {
            validators: [this.sameToFromValidator, this.sameStartEndValidator, this.toSelected, this.fromSelected]
        });
        this.query = {};
        this.airPortList = [];
        this.click = {
            to: true,
            from: true,
            start: true,
            end: true,
            count: true,
            trip: true
        };
        this.isLoading = false;
        this.isSubmitted = false;
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        document.body.style.backgroundSize = "100% 165px";
        this.searchCriteria$.subscribe((searchCriteria) => {
            if (searchCriteria != null) {
                this.updateFromGroup(searchCriteria);
                this.localStorage.setItem('searchFormGroup', JSON.stringify(searchCriteria));
            }
            else {
                const searchCriteriaTxt = this.localStorage.getItem('searchFormGroup');
                if (searchCriteriaTxt != null) {
                    let searchCriteriaJSON = JSON.parse(searchCriteriaTxt);
                    searchCriteriaJSON = this.checkDate(searchCriteriaJSON);
                    this.updateFromGroup(searchCriteriaJSON);
                }
            }
        });
    }
    ngOnInit() {
        this.getAllAirportSearchService();
        this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
        this.filteredToOptions = this.searchFormGroup.get('to').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((railCode) => {
            if (this.filter(railCode)) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }
            else {
                this.loadingLeavingTo = true;
                return this.serachAirportSearchService(railCode);
            }
        }));
        this.filteredFromOptions = this.searchFormGroup.get('from').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((railCode) => {
            if (this.filter(railCode)) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }
            else {
                this.loadingLeavingFrom = true;
                return this.serachAirportSearchService(railCode);
            }
        }));
        /* this.filteredToOptions = this.searchFormGroup.get('to').valueChanges
          .pipe(
            switchMap((railCode) => {
              if(railCode == '' || railCode == null ) {
                return of(this.airPortList);
              } else {
                this.loadingLeavingTo = true;
                return this.serachOfflineAirportSearch(railCode);
              }
          }));
        this.filteredFromOptions = this.searchFormGroup.get('from').valueChanges
          .pipe(
            switchMap((railCode) => {
              if(railCode == '' || railCode == null ) {
                return of(this.airPortList);
              } else {
                this.loadingLeavingFrom = true;
                return this.serachOfflineAirportSearch(railCode);
              }
          })); */
        this.searchFormGroup.get('start').valueChanges.subscribe(val => {
            this.minFromDate = val;
        });
        this.searchFormGroup.get('end').valueChanges.subscribe(val => {
        });
    }
    ngAfterViewInit() {
        // this.railListComponentRef.searchRail(this.getSearchQuery());
        // console.log('ngAfterViewInit');
        this.emitEventToRailList();
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
            this.localStorage.setItem('searchFormGroup', JSON.stringify(searchCriteriaJSON));
        }
        return searchCriteriaJSON;
    }
    updateFromGroup(searchCriteria) {
        let json = this.searchFormGroup.value;
        json = Object.assign(Object.assign({}, json), searchCriteria);
        this.radioSelected = json.trip == "round" ? "round" : "one";
        if (this.radioSelected == 'one') {
            this.searchFormGroup.get('end').disable();
        }
        this.searchFormGroup.patchValue(json);
    }
    emitEventToRailList() {
        this.searchSubject.next(this.getSearchQuery());
    }
    onDocumentClick(event) {
        console.log(event.target.className);
        if (event.target.className.indexOf("mat-calendar-body-cell-content") != -1) {
            // console.log("mat-calendar clicks");
            this.startDateChange(null, null);
            this.endDateChange(null, null);
        }
        else if (event.target.className.indexOf("mat-option-text") != -1) {
            // console.log("mat-option clicks");
            // has to uncomment after travel popup
            this.countChange(null);
            this.tripChange(null);
        }
        else if (event.target.className.indexOf("cdk-overlay-backdrop") != -1) {
            // console.log("overlay clicks");
            this.startDateChange(null, null);
            this.endDateChange(null, null);
            // has to uncomment after travel popup
            this.countChange(null);
            this.tripChange(null);
        }
        else if (event.target.id == "fromCity"
            || event.target.id == "fromCityDiv"
            || this.fromDiv.nativeElement.contains(event.target)) {
            // console.log("search_inputField from clicks");
            let json = this.searchFormGroup.value;
            const fromValue = json.from;
            json.from = '';
            this.searchFormGroup.patchValue(json);
            json.from = fromValue;
            this.searchFormGroup.patchValue(json);
            this.fromInput.first.nativeElement.focus();
            this.toChange(null);
        }
        else if (event.target.id == "toCity"
            || event.target.id == "toCityDiv"
            || this.toDiv.nativeElement.contains(event.target)) {
            // console.log("search_inputField to clicks");
            let json = this.searchFormGroup.value;
            const toValue = json.to;
            json.to = '';
            this.searchFormGroup.patchValue(json);
            json.to = toValue;
            this.searchFormGroup.patchValue(json);
            this.toInput.first.nativeElement.focus();
            this.fromChange(null);
        } /*else if (event.target.className.indexOf("mat-option-text dismiss") == -1) {
          // console.log("mat-option-text dismiss clicks");
          this.fromChange(null);
          this.toChange(null);
        } */
        else if (!this.fromDiv.nativeElement.contains(event.target) || !this.toDiv.nativeElement.contains(event.target)) {
            if (!this.fromDiv.nativeElement.contains(event.target)) {
                // console.log("outside fromDiv");
                this.fromChange(null);
            }
            if (!this.toDiv.nativeElement.contains(event.target)) {
                // console.log("outside toDiv");
                this.toChange(null);
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
        this.fromChange(null);
        this.toChange(null);
        this.countChange(null);
        this.tripChange(null);
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
        else if (objType == 'trip') {
            this.openTrip();
        }
    }
    openTravellers() {
        let self = this;
        setTimeout(() => {
            self.travellersSelect.open();
        }, 50);
    }
    openTrip() {
        let self = this;
        setTimeout(() => {
            self.tripSelect.open();
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
        if (!this.searchFormGroup.get('start').hasError('required')) {
            this.click.start = true;
        }
    }
    endDateChange(type, event) {
        if (!this.searchFormGroup.get('end').hasError('required')
            && !this.searchFormGroup.hasError('startEndMatch')) {
            this.click.end = true;
        }
    }
    fromChange($event) {
        if (!this.searchFormGroup.get('from').hasError('required')) {
            this.click.from = true;
        }
    }
    toChange($event) {
        if (!this.searchFormGroup.get('to').hasError('required') &&
            !this.searchFormGroup.get('to').hasError('toFromMatch')) {
            this.click.to = true;
        }
    }
    countChange($event) {
        // has to uncomment after travel popup
        if (!this.searchFormGroup.get('count').hasError('required')) {
            this.click.count = true;
        }
        /*let json = this.searchFormGroup.value;
        json.count = json.adults + json.childrens + json.infants;
        this.searchFormGroup.patchValue(json);
        this.click.count = true;*/
    }
    tripSelectionChange($event) {
        this.radioSelected = $event;
        this.radioChange($event);
    }
    tripChange($event) {
        if (!this.searchFormGroup.get('trip').hasError('required')) {
            this.click.trip = true;
        }
    }
    swipBtn() {
        let json = this.searchFormGroup.value;
        const fromValue = json.from;
        json.from = json.to;
        json.to = fromValue;
        this.searchFormGroup.patchValue(json);
    }
    serachAirportSearchService(railCode) {
        const code = railCode.data != null ? railCode.data : railCode;
        return this.railRetrieveService.searchAirport(code)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            this.loadingLeavingTo = false;
            this.loadingLeavingFrom = false;
            return data.suggestions;
        }));
    }
    serachOfflineAirportSearch(railCode) {
        let suggestions = [];
        if (this.airPortList.length == 0) {
            const code = railCode.data != null ? railCode.data : railCode;
            return this.railRetrieveService.searchAirport(code)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
                this.loadingLeavingTo = false;
                this.loadingLeavingFrom = false;
                return data.suggestions;
            }));
        }
        else {
            this.loadingLeavingTo = false;
            this.loadingLeavingFrom = false;
            const filterAirports = this.filterAirport(railCode);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(filterAirports);
        }
    }
    filterAirport(railCode) {
        let suggestions = [];
        let airPortCode = railCode.name || railCode.value;
        airPortCode = airPortCode == null ? railCode : airPortCode;
        for (const airPort of this.airPortList) {
            if (airPort.name.toLowerCase().indexOf(airPortCode.toLowerCase()) === 0
                || airPort.id.toLowerCase().includes(airPortCode.toLowerCase())) {
                suggestions.push(airPort);
            }
        }
        return suggestions;
    }
    getAllAirportSearchService() {
        this.railRetrieveService.getAllAirport().
            subscribe((data) => {
            this.airPortList = data;
            this.isLoading = false;
        });
    }
    serachRailsService() {
        this.railLoading = true;
        this.railRetrieveService.searchRails(this.getSearchQuery()).
            subscribe((data) => {
            this.railData = data;
            this.railLoading = false;
        });
    }
    filter(railCode) {
        if (railCode == '' || railCode == null) {
            return true;
        }
        else if (railCode.data != null) {
            return false;
        }
        else if (railCode.length >= 1) {
            return false;
        }
        else {
            return true;
        }
    }
    radioChange(event) {
        const value = event.value || event;
        if (value === 'one') {
            // this.searchFormGroup.get('from').disable();
            this.searchFormGroup.get('end').disable();
            this.searchFormGroup.controls['end'].setValue('');
            this.click.end = true;
        }
        else if (value === 'round') {
            let json = this.searchFormGroup.value;
            json.trip = 'round';
            this.searchFormGroup.patchValue(json);
            // this.searchFormGroup.get('from').enable();
            this.searchFormGroup.get('end').enable();
            if (this.searchFormGroup.get('end').value == '') {
                this.searchFormGroup.controls['end'].setValue(this.searchFormGroup.get('start').value);
            }
        }
    }
    enableRoundTrip() {
        this.radioSelected = "round";
        this.radioChange("round");
        this.click.end = false;
        this.openEnd();
    }
    toggleTrip() {
        this.radioSelected = this.radioSelected == "round" ? "one" : "round";
        this.radioChange(this.radioSelected);
    }
    getSearchQuery() {
        let qry = {
            Flights: [],
            Passengers: [
                {
                    PassengerID: "T1"
                }
            ]
        };
        const formGroupValue = this.searchFormGroup.value;
        const toAirPortCode = formGroupValue.to.data || formGroupValue.to.id || formGroupValue.to;
        const fromAirPortCode = formGroupValue.from.data || formGroupValue.from.id || formGroupValue.from;
        qry.Flights.push({
            "DepartureAirportCode": fromAirPortCode,
            "ArrivalAirportCode": toAirPortCode,
            "TravelDate": this.truncateTime(formGroupValue.start)
        });
        if (this.radioSelected == 'round') {
            qry.Flights.push({
                "DepartureAirportCode": toAirPortCode,
                "ArrivalAirportCode": fromAirPortCode,
                "TravelDate": this.truncateTime(formGroupValue.end)
            });
        }
        this.query = qry;
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
    serach() {
        if (this.searchFormGroup.valid) {
            // this.serachRailsService();
            let searchFormGroupValue = this.searchFormGroup.value;
            this.localStorage.setItem('searchFormGroup', JSON.stringify(searchFormGroupValue));
            this.store.dispatch(new _store_rail_rail_actions__WEBPACK_IMPORTED_MODULE_7__["SetSearchCriteriaData"](searchFormGroupValue));
            //this.railListComponentRef.searchRail(this.getSearchQuery());
            this.emitEventToRailList();
        }
        else {
            this.searchFormGroup.markAllAsTouched();
            this.isSubmitted = true;
        }
    }
}
RailSearchComponent.ɵfac = function RailSearchComponent_Factory(t) { return new (t || RailSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rail_dashboard_rail_retrieve_service__WEBPACK_IMPORTED_MODULE_11__["RailRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_14__["LocalStorage"])); };
RailSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RailSearchComponent, selectors: [["app-rail-search"]], viewQuery: function RailSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c7, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c8, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c9, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c10, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.picker1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.picker2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.travellersSelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tripSelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fromDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.toDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.countPopupDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.travellersDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.railListComponentRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fromInput = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.toInput = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["class", "spinnerBg", 4, "ngIf"], ["class", "d-flex flex-column-fluid", 4, "ngIf"], [1, "spinnerBg"], [1, "spinner", 3, "diameter"], [1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "bg-white", "gutter-b"], [1, "brdSmallBlock_inner"], [1, "searchDate"], [1, "searchContent"], [1, "search_lbl", "text-dark-50", "pb-2"], [1, "fas", "fa-angle-down", "text-primary"], ["id", "trip", "class", "search_inputField h4", 3, "click", 4, "ngIf"], ["class", "lessMtlr", 4, "ngIf"], ["id", "fromCityDiv", 1, "searchCity", 2, "width", "21%", 3, "click"], ["fromDiv", ""], ["id", "fromCity", "type", "text", "class", "search_inputField h4 text-truncate from", "readonly", "", 3, "value", "title", "click", 4, "ngIf"], [4, "ngIf"], [1, "swipBtn", 3, "click"], [1, "fas", "fa-exchange-alt", "text-primary"], ["id", "toCityDiv", 1, "searchCity", 3, "click"], ["toDiv", ""], [1, "search_lbl", "text-dark-50", "pb-2", "to"], ["id", "toCity", "type", "text", "class", "search_inputField h4 text-truncate to", "readonly", "", 3, "value", "title", "click", 4, "ngIf"], [1, "searchDate", 3, "click"], ["id", "startDate", 1, "searchContent"], [1, "search_lbl", "text-dark-50", "pb-2", "from"], [1, "far", "fa-calendar-alt", "text-primary"], ["class", "search_inputField h4", 3, "click", 4, "ngIf"], [1, "searchDate", 3, "ngClass", "click"], ["id", "endDate", 1, "searchContent"], ["type", "text", "class", "search_inputField h4 text-dark-50", "readonly", "", "value", "One Way", 3, "click", 4, "ngIf"], [1, "searchContent", 3, "click"], ["travellersDiv", ""], ["id", "count", "class", "search_inputField h4 count", 4, "ngIf"], [1, "bg-primary", "rounded-top-right", "rounded-bottom-right", 2, "width", "11%"], ["type", "button", 1, "btn", "btn-text-white", "btn-hover-text-white", "h3", "border-0", "font-weight-bold", "pt-6", "pl-6", "pb-5", 3, "click"], [1, "far", "fa-arrow-alt-circle-right", "text-white"], [3, "search"], ["id", "trip", 1, "search_inputField", "h4", 3, "click"], [1, "lessMtlr"], ["appearance", "outline", 1, "w-100"], [3, "formControl", "selectionChange"], ["tripSelect", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "fromCity", "type", "text", "readonly", "", 1, "search_inputField", "h4", "text-truncate", "from", 3, "value", "title", "click"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete", "errorStateMatcher"], ["fromInput", ""], [3, "displayWith", "optionSelected"], ["autoFrom", "matAutocomplete"], ["id", "toCity", "type", "text", "readonly", "", 1, "search_inputField", "h4", "text-truncate", "to", 3, "value", "title", "click"], ["toInput", ""], ["autoTo", "matAutocomplete"], [1, "search_inputField", "h4", 3, "click"], ["matInput", "", 3, "min", "max", "errorStateMatcher", "matDatepicker", "formControl", "click", "dateChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["type", "text", "readonly", "", "value", "One Way", 1, "search_inputField", "h4", "text-dark-50", 3, "click"], ["appearance", "outline", 1, "w-100", 3, "click"], ["picker2", ""], ["id", "count", 1, "search_inputField", "h4", "count"], [1, "count"], ["travellersSelect", ""]], template: function RailSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RailSearchComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RailSearchComponent_div_1_Template, 66, 24, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _rail_list_rail_list_component__WEBPACK_IMPORTED_MODULE_17__["RailListComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatError"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocomplete"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepicker"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]], styles: ["[_nghost-%COMP%]     .mat-form-field-flex {\n    background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmFpbC9yYWlsLXNlYXJjaC9yYWlsLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvcmFpbC9yYWlsLXNlYXJjaC9yYWlsLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_rail_rail_state__WEBPACK_IMPORTED_MODULE_8__["RailStateModule"].getSearchCriteria)
], RailSearchComponent.prototype, "searchCriteria$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RailSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-rail-search',
                templateUrl: './rail-search.component.html',
                styleUrls: ['./rail-search.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"] }, { type: _rail_dashboard_rail_retrieve_service__WEBPACK_IMPORTED_MODULE_11__["RailRetrieveService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }, { type: _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_14__["LocalStorage"] }]; }, { picker1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['picker1']
        }], picker2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['picker2']
        }], travellersSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['travellersSelect']
        }], tripSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tripSelect']
        }], fromDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['fromDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }]
        }], toDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['toDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }]
        }], countPopupDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['countPopupDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }]
        }], travellersDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['travellersDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }]
        }], fromInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['fromInput']
        }], toInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['toInput']
        }], railListComponentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['railListComponent', { static: false }]
        }], searchCriteria$: [] }); })();


/***/ })

}]);
//# sourceMappingURL=views-pages-rail-rail-module.js.map