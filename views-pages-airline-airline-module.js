(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-airline-airline-module"],{

/***/ "1QvV":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-seat-availability/airline-seat-availability.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AirlineSeatAvailabilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineSeatAvailabilityComponent", function() { return AirlineSeatAvailabilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/airline-change-order.service */ "RTrV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/directives/tooltip.directive */ "++hd");







function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const cabin_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", cabin_r2.width, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r4.number != null ? row_r4.number.value : "");
} }
function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} if (rf & 2) {
    const cabin_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", cabin_r2.width, "%");
} }
function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seatElement_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const cabin_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", cabin_r2.width, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](seatElement_r7.value);
} }
function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} if (rf & 2) {
    const cabin_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", cabin_r2.width, "%");
} }
function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seatElement_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const cabin_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", cabin_r2.width, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/media/flightSeat/" + seatElement_r7.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seatElement_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r26.isSeatSelected(seatElement_r7) ? " text-light" : "text-muted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r26.getSeatPrice(seatElement_r7), "1.2-2"), " ");
} }
function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_6_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seatElement_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r29.getSeatPrice(seatElement_r7), "1.2-2"), " ");
} }
function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_6_div_2_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); false; return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_6_div_2_div_8_Template, 4, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seatElement_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", seatElement_r7.rowNumber + seatElement_r7.column, " Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.isSeatAvailable(seatElement_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r27.getTooltipText(seatElement_r7), " ");
} }
function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_6_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const seatElement_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r34.seatClick(seatElement_r7, row_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_6_span_1_Template, 3, 5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_6_div_2_Template, 11, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seatElement_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const cabin_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", cabin_r2.width, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appTooltip", seatElement_r7)("ngClass", ctx_r16.getSeatClass(seatElement_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx_r16.rowspanSeat(seatElement_r7))("colspan", ctx_r16.colspanSeat(seatElement_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", seatElement_r7.seatStatus == "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", seatElement_r7.isPopUp);
} }
function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const cabin_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", cabin_r2.width, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r4.number != null ? row_r4.number.value : "");
} }
function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_1_Template, 2, 3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_2_Template, 1, 2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_3_Template, 2, 3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_4_Template, 1, 2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_5_Template, 2, 3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_6_Template, 3, 8, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_td_7_Template, 2, 3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const seatElement_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const isFirst_r9 = ctx.first;
    const isLast_r10 = ctx.last;
    const cabin_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isFirst_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cabin_r2.aisleIndexes.includes(i_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", seatElement_r7.isSeatNumberDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", seatElement_r7.notSeat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", seatElement_r7.icon != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isSeat(seatElement_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isLast_r10);
} }
function AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_ng_container_1_Template, 8, 7, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r4.seat);
} }
function AirlineSeatAvailabilityComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AirlineSeatAvailabilityComponent_div_0_ng_container_2_tr_4_Template, 2, 1, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cabin_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cabinTypes[cabin_r2.cabinType.code]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cabin_r2.row);
} }
function AirlineSeatAvailabilityComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AirlineSeatAvailabilityComponent_div_0_ng_container_2_Template, 5, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.flightSegment.seatMap.cabin);
} }
class AirlineSeatAvailabilityComponent extends _airline__WEBPACK_IMPORTED_MODULE_1__["Airline"] {
    constructor(loginService, airlineChangeOrderService) {
        super(loginService);
        this.airlineChangeOrderService = airlineChangeOrderService;
        this.isSubmitted = false;
        this.seatChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.seatCharacteristics = {
            '1': 'Restricted Seat- General',
            '2': 'Leg rest available',
            '3': 'Individual video screen - Choice of movies',
            '4': 'Not a window seat',
            '5': 'Not an aisle seat',
            '6': 'Near galley seat',
            '7': 'Near toilet seat',
            '8': 'No seat at this location',
            '9': 'Center seat (not window, not aisle)',
            '10': 'Seat designated for RBD "A"',
            '11': 'Seat designated for RBD "B"',
            '12': 'Seat designated for RBD "C"',
            '13': 'Seat designated for RBD "D"',
            '14': 'Seat designated for RBD "F"',
            '15': 'Seat designated for RBD "H"',
            '16': 'Seat designated for RBD "J"',
            '17': 'Seat designated for RBD "K"',
            '18': 'Seat designated for RBD "L"',
            '19': 'Seat designated for RBD "M"',
            '20': 'Seat designated for RBD "P"',
            '21': 'Seat designated for RBD "Q"',
            '22': 'Seat designated for RBD "R"',
            '23': 'Seat designated for RBD "S"',
            '24': 'Seat designated for RBD "T"',
            '25': 'Seat designated for RBD "V"',
            '26': 'Seat designated for RBD "W"',
            '27': 'Seat designated for RBD "Y"',
            'A': 'Aisle seat',
            'AA': 'All available aisle seats',
            'AB': 'Seat adjacent to bar',
            'AC': 'Seat adjacent to closet',
            'AG': 'Seat adjacent to galley',
            'AJ': 'Adjacent aisle seats',
            'AL': 'Seat adjacent to lavatory',
            'AM': 'Individual movie screen - No choice of movie selection',
            'AR': 'No seat - airphone',
            'AS': 'Individual airphone',
            'AT': 'Seat adjacent to table',
            'AU': 'Seat adjacent to stairs to upper deck',
            'AV': 'Only available seats',
            'AW': 'All available window seats',
            'B': 'Seat with bassinet facility',
            'BA': 'No seat - bar',
            'BK': 'Blocked Seat for preferred passenger in adjacent seat',
            'C': 'Crew seat',
            'CC': 'Center section seat(s)',
            'CL': 'No seat - closet',
            'CS': 'Conditional seat - contact airline',
            'D': 'No seat - exit door',
            'DE': 'Deportee',
            'E': 'Exit row seat',
            'EA': 'S Not an exit seat',
            'EC': 'Electronic connection for lap top or FAX machine',
            'EX': 'No seat - emergency Exit',
            'F': 'Added seat',
            'FC': 'Front of cabin class/compartment',
            'G': 'Seat at forward end of cabin',
            'GF': 'General facility',
            'GN': 'No seat - galley',
            'GR': 'Group seat - offered to travellers belonging to a group',
            'H': 'Seat with facilities for handicapped/incapacitated passenger',
            'I': 'Seat suitable for adult with an infant',
            'IA': 'Inside aisle seats',
            'IE': 'Seat not suitable for child',
            'J': 'Rear facing seat',
            'K': 'Bulkhead seat',
            'KA': 'Bulkhead seat with movie screen',
            'KN': 'Bulkhead, no seat',
            'L': 'Leg space seat',
            'LA': 'No seat - lavatory',
            'LG': 'No seat - luggage storage',
            'LH': 'Restricted seat - offered on long-haul segments',
            'LS': 'Left side of aircraft',
            'M': 'Seat without a movie view',
            'MA': 'Medically OK to travel',
            'N': 'No smoking seat',
            'O': 'Preferential seat',
            'OW': 'Over wing seat(s)',
            'P': 'Priority Seat',
            'PC': 'Pet cabin',
            'PP': 'Power Port',
            'Q': 'Seat in a quiet zone',
            'RS': 'Right side of aircraft',
            'S': 'Smoking seat',
            'SO': 'No seat - storage space',
            'ST': 'No seat - stairs to upper deck',
            'T': 'Rear/Tail section of aircraft',
            'TA': 'No seat - table',
            'U': 'Seat suitable for unaccompanied minors',
            'UP': 'Upper deck',
            'V': 'Seat to be left vacant or offered last',
            'W': 'Window seat',
            'WA': 'Window and aisle together',
            'X': 'No facility seat (indifferent seat)',
            'Z': 'Buffer zone seat',
            '1A': 'Seat not allowed for infant',
            '1B': 'Seat not allowed for medical',
            '1C': 'Seat not allowed for unaccompanied minor',
            '1D': 'Restricted recline seat',
            '1M': 'Seat with movie view',
            '1W': 'Window seat without window',
            '3A': 'Individual video screen - No choice of movie',
            '3B': 'Individual video screen - Choice of movies, games, information, etc.',
            '6A': 'In front of galley seat',
            '6B': 'Behind galley seat',
            '7A': 'In front of toilet seat',
            '7B': 'Behind toilet seat',
            '700': 'Individual video screen - services unspecified',
            '701': 'No seat - access to handicapped lavatory',
        };
        // AirAvailabilityRS/OriginDestination/Flight/Segment/Classes/ClassOfService/@Status
        // TimeTableRS/TimeTable/OriginDestination/Flight/Segment/Classes/ClassOfService/@Status
        this.seatStatus = {
            'A': 'Seats are available',
            'L': 'Waitlist open for the segment and class',
            'C': 'Waitlist closed',
            'R': 'Seats on request only to airline',
            'S': 'Waitlist closed',
            '0': 'number of at least available seats',
            '1': 'number of at least available seats',
            '2': 'number of at least available seats',
            '3': 'number of at least available seats',
            '4': 'number of at least available seats',
            '5': 'number of at least available seats',
            '6': 'number of at least available seats',
            '7': 'number of at least available seats',
            '8': 'number of at least available seats',
            '9': 'number of at least available seats'
        };
        this.cabinTypes = {
            'F': 'First Class',
            'J': 'Premium Business Class',
            'C': 'Business Class',
            'W': 'Premium Economy Class',
            'Y': 'Coach (Economy) Class'
        };
    }
    ngOnInit() {
    }
    rowspanSeat(seat) {
        return seat.rowspan == null ? 1 : seat.rowspan;
    }
    colspanSeat(seat) {
        return seat.colspan == null ? 1 : seat.colspan;
    }
    isSeat(seat) {
        return !seat.notSeat && !seat.hidden
            && !seat.isSeatNumberDisplay && !seat.icon;
    }
    getSeatClass(seat) {
        if (this.isSeatSelected(seat)) {
            return "bg-success border-1 border-light border-solid";
        }
        if (this.isSeatAvailable(seat)) {
            return "bg-light-white border-1 border-secondary border-solid";
        }
        return "bg-complete border-1 border-light border-solid";
    }
    isSeatSelected(seat) {
        return this.passengers.find(p => p.orderSummary.selectedSeats.find(s => s.seat.column == seat.column && s.seat.row == seat.rowNumber && s.segment.segmentKey == this.flightSegment.segmentKey));
    }
    seatClick(seat) {
        let passengerOnSeat = this.isSeatSelected(seat);
        if (!passengerOnSeat && this.isSeatAvailable(seat)) {
            let passenger = this.getNextPassengerForSeatSelection();
            if (!passenger) {
                return;
            }
            let currentPassengerSeat = passenger.orderSummary.selectedSeats.find(s => s.segment.segmentKey == this.flightSegment.segmentKey);
            if (currentPassengerSeat) {
                passenger.orderSummary.selectedSeats.splice(passenger.orderSummary.selectedSeats.indexOf(currentPassengerSeat), 1);
            }
            let offerItem = seat.offerItemRefs.find(i => i.eligibility.passengerRefs.value.find(p => p.passengerID == passenger.data.passengerID));
            let selectedSeat = {
                column: seat.column,
                row: seat.rowNumber,
                passenger: passenger.data,
                offerItemID: offerItem.offerItemID,
                price: {
                    currency: offerItem.unitPriceDetail.totalAmount.detailCurrencyPrice.total.code,
                    value: offerItem.unitPriceDetail.totalAmount.detailCurrencyPrice.total.value * 0.01
                }
            };
            passenger.orderSummary.selectedSeats.push({ segment: this.flightSegment, seat: selectedSeat });
        }
        else if (passengerOnSeat) {
            let selectedSeat = passengerOnSeat.orderSummary.selectedSeats.find(s => s.seat.column == seat.column && s.seat.row == seat.rowNumber && s.segment.segmentKey == this.flightSegment.segmentKey);
            if (selectedSeat.seat.offerItemID) {
                passengerOnSeat.orderSummary.selectedSeats.splice(passengerOnSeat.orderSummary.selectedSeats.indexOf(selectedSeat), 1);
            }
        }
        let anyChanges = this.passengers.find(p => p.orderSummary.selectedSeats.find(s => s.seat.offerItemID));
        this.seatChanged.emit(anyChanges);
    }
    getNextPassengerForSeatSelection() {
        let passenger = this.passengers.find(p => !p.orderSummary.selectedSeats.find(s => s.segment.segmentKey == this.flightSegment.segmentKey));
        if (!passenger) {
            passenger = this.passengers.find(p => p.orderSummary.selectedSeats.find(s => s.segment.segmentKey == this.flightSegment.segmentKey && s.seat.offerItemID));
        }
        return passenger;
    }
    getSeatPrice(seat) {
        let nextPassenger = this.getNextPassengerForSeatSelection();
        let offer = nextPassenger ?
            seat.offerItemRefs.find(i => i.eligibility.passengerRefs.value.find(p => p.passengerID == nextPassenger.data.passengerID)) :
            seat.offerItemRefs[0];
        let price = offer.unitPriceDetail.totalAmount.detailCurrencyPrice.total.value * 0.01;
        return price;
    }
    isSeatAvailable(seat) {
        if (seat.seatStatus == 'A') {
            return true;
        }
        return false;
    }
    getTooltipText(seat) {
        if (seat.seatCharacteristics != null && seat.seatCharacteristics.code != null) {
            // return seat.seatCharacteristics.code;
            if (!this.isSeatAvailable(seat)) {
                return "Seat is not available";
            }
            let codes = [];
            for (let c of seat.seatCharacteristics.code) {
                if (c != 'LS' && c != 'RS' && codes.indexOf(this.seatCharacteristics[c]) < 0) {
                    codes.push(this.seatCharacteristics[c]);
                }
            }
            return codes.join(', ');
        }
        return '';
    }
    isExitRowPositions(exitRowPositions, num) {
        if (exitRowPositions != null) {
            for (let exitRowPosition of exitRowPositions) {
                let first = Number(exitRowPosition.rowPosition[0].first.value);
                let last = Number(exitRowPosition.rowPosition[0].last.value);
                if (first <= num && last >= num) {
                    return true;
                }
            }
        }
        return false;
    }
}
AirlineSeatAvailabilityComponent.ɵfac = function AirlineSeatAvailabilityComponent_Factory(t) { return new (t || AirlineSeatAvailabilityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_3__["AirlineChangeOrderService"])); };
AirlineSeatAvailabilityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineSeatAvailabilityComponent, selectors: [["app-airline-seat-availability"]], inputs: { flightSegment: "flightSegment", passengers: "passengers" }, outputs: { seatChanged: "seatChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 64, vars: 1, consts: [["class", "d-flex flex-column flex-nowrap w-50 m-auto", 4, "ngIf"], [1, "d-none", "flex-column", "flex-nowrap", "overflow-auto"], [1, "businessClass", "mt-5"], [1, "font-size-h4", "text-center"], [1, "seat-row", "d-flex", "flex-row", "p-0"], [1, "seat", "bg-white"], [1, "seat", "bg-primary"], [1, "seat", "bg-success"], [1, "seat", "bg-complete"], [1, "seat", "bg-danger"], [1, "mainClass", "mt-5"], [1, "d-flex", "flex-column", "flex-nowrap", "w-50", "m-auto"], [1, "economyClass", "mt-5", "text-center"], [4, "ngFor", "ngForOf"], ["colspan", "20", 1, "h5", "p-4"], ["class", "d-flex justify-content-center align-items-center", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "align-items-center"], [3, "width", 4, "ngIf"], ["class", "pointer", 3, "appTooltip", "ngClass", "width", "click", 4, "ngIf"], [1, "w-50px", 3, "src"], [1, "pointer", 3, "appTooltip", "ngClass", "click"], [3, "ngClass", 4, "ngIf"], ["id", "popover", "class", "popover fade show bs-popover-bottom", "role", "tooltip", "x-placement", "bottom", 3, "click", 4, "ngIf"], [3, "ngClass"], ["id", "popover", "role", "tooltip", "x-placement", "bottom", 1, "popover", "fade", "show", "bs-popover-bottom", 3, "click"], [1, "arrow", 2, "bottom", "-2px", "left", "3%"], [1, "popover-body", "font-size-lg", "p-0"], [1, "d-flex", "align-items-center", "flex-wrap", "justify-content-around", "p-3"], [1, "d-flex", "align-items-center", "flex-lg-fill", "w-35"], [1, "d-flex", "flex-column", "flex-wrap"], [1, "mb-1"], ["class", "d-flex", 4, "ngIf"], [1, "border-0", "border-top-sm", "border-top-secondary", "border-solid", "p-3"], [1, "d-flex"], [1, "text-dark-50", "font-weight-bold", "mr-2"]], template: function AirlineSeatAvailabilityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AirlineSeatAvailabilityComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Business class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Main class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flightSegment.seatMap);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_5__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".card-body[_ngcontent-%COMP%] {\n    min-height: 300px;\n    min-width: 300px;\n    margin-right: 5px;\n}\ntable[_ngcontent-%COMP%] {\n    border-collapse: separate;\n    table-layout: fixed;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    position: relative;\n    border-radius: 3px;\n}\ntable.businessClass[_ngcontent-%COMP%] {\n    border-spacing: 10px 15px;\n}\ntable.businessClass[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    height: 38px;\n}\ntable.economyClass[_ngcontent-%COMP%] {\n    border-spacing: 5px 10px;\n}\ntable.economyClass[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    height: 38px;\n}\n.popover[_ngcontent-%COMP%] {\n    top: 50px; left: auto; width: 350px;\n}\n.seat-row[_ngcontent-%COMP%] {\n    position: relative; margin: 0px auto; width: 500px; \n}\n.seat-row[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%] {\n    height: 35px; vertical-align: middle; border: 2px #fff solid; border-radius: 3px; text-align: center; line-height: 30px; cursor: pointer;\n}\n.mainClass[_ngcontent-%COMP%] { \n    position: relative;\n}\n.mainClass[_ngcontent-%COMP%]    > .seat-row[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%] {\n    width: calc(100% / 7); \n}\n.businessClass[_ngcontent-%COMP%] {\n    position: relative;\n}\n.businessClass[_ngcontent-%COMP%]    > .seat-row[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%] {\n    width: calc(100% / 5); height: 45px; border: 4px #fff solid;\n}\n.bg-complete[_ngcontent-%COMP%] {\n    background-color: #ddd; cursor: default; \n}\n.bg-complete[_ngcontent-%COMP%]:after, .bg-complete[_ngcontent-%COMP%]:before {\n    content: \"\"; \n    width: 1px; \n    height: 35px; \n    top: 1px;\n    background: #bbb;\n    position: absolute;\n    transform: rotate(-45deg);\n}\n.bg-complete[_ngcontent-%COMP%]:after { \n    transform: rotate(45deg); \n}\n.pointer[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLXNlYXQtYXZhaWxhYmlsaXR5L2FpcmxpbmUtc2VhdC1hdmFpbGFiaWxpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZO0FBQ3ZDO0FBQ0E7SUFDSSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZO0FBQ3REO0FBQ0E7SUFDSSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZTtBQUM1STtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCLEVBQUUsWUFBWSxFQUFFLHNCQUFzQjtBQUMvRDtBQUNBO0lBQ0ksc0JBQXNCLEVBQUUsZUFBZTtBQUMzQztBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9haXJsaW5lL3BhcnRpYWxzL2FpcmxpbmUtc2VhdC1hdmFpbGFiaWxpdHkvYWlybGluZS1zZWF0LWF2YWlsYWJpbGl0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keSB7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG50YWJsZSB0ZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbnRhYmxlLmJ1c2luZXNzQ2xhc3Mge1xuICAgIGJvcmRlci1zcGFjaW5nOiAxMHB4IDE1cHg7XG59XG50YWJsZS5idXNpbmVzc0NsYXNzIHRkIHtcbiAgICBoZWlnaHQ6IDM4cHg7XG59XG50YWJsZS5lY29ub215Q2xhc3Mge1xuICAgIGJvcmRlci1zcGFjaW5nOiA1cHggMTBweDtcbn1cbnRhYmxlLmVjb25vbXlDbGFzcyB0ZCB7XG4gICAgaGVpZ2h0OiAzOHB4O1xufVxuICBcbi5wb3BvdmVyIHtcbiAgICB0b3A6IDUwcHg7IGxlZnQ6IGF1dG87IHdpZHRoOiAzNTBweDtcbn1cbi5zZWF0LXJvdyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBtYXJnaW46IDBweCBhdXRvOyB3aWR0aDogNTAwcHg7IFxufSBcbi5zZWF0LXJvdyAuc2VhdCB7XG4gICAgaGVpZ2h0OiAzNXB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBib3JkZXI6IDJweCAjZmZmIHNvbGlkOyBib3JkZXItcmFkaXVzOiAzcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgbGluZS1oZWlnaHQ6IDMwcHg7IGN1cnNvcjogcG9pbnRlcjtcbn0gXG4ubWFpbkNsYXNzIHsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSBcbi5tYWluQ2xhc3MgPiAuc2VhdC1yb3cgLnNlYXQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA3KTsgXG59XG4uYnVzaW5lc3NDbGFzcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSBcbi5idXNpbmVzc0NsYXNzID4gLnNlYXQtcm93IC5zZWF0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7IGhlaWdodDogNDVweDsgYm9yZGVyOiA0cHggI2ZmZiBzb2xpZDtcbn1cbi5iZy1jb21wbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgY3Vyc29yOiBkZWZhdWx0OyBcbn0gXG4uYmctY29tcGxldGU6YWZ0ZXIsIC5iZy1jb21wbGV0ZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7IFxuICAgIHdpZHRoOiAxcHg7IFxuICAgIGhlaWdodDogMzVweDsgXG4gICAgdG9wOiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2JiYjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5iZy1jb21wbGV0ZTphZnRlciB7IFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgXG59XG5cbi5wb2ludGVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineSeatAvailabilityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-seat-availability',
                templateUrl: './airline-seat-availability.component.html',
                styleUrls: ['./airline-seat-availability.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_3__["AirlineChangeOrderService"] }]; }, { flightSegment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], passengers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], seatChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "1jwl":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/airline/services/airline-retrieve.service.ts ***!
  \**************************************************************************/
/*! exports provided: AirlineRetrieveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineRetrieveService", function() { return AirlineRetrieveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/tenant/tenant */ "lWHP");
/* harmony import */ var _airline_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./airline-loader.service */ "qVcs");
/* harmony import */ var _airline_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./airline-error.service */ "z3KZ");










class AirlineRetrieveService {
    constructor(httpClient, airlineLoaderService, errorService) {
        this.httpClient = httpClient;
        this.airlineLoaderService = airlineLoaderService;
        this.errorService = errorService;
        this.maxRetryCount = 4;
    }
    // GET methods
    searchAirport(airportCode) {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].airlinesApiEndpointNET + 'airport/dropdown';
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('query', airportCode);
        this.errorService.hideErrors();
        return this.httpClient.get(url, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => this.catchFailResponse(data, url)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(this.maxRetryCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(e => this.handleError(e)));
    }
    getOrderByName(firstName, lastName) {
        let url = Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__["getAirAPI"])() + 'orders/name';
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (!firstName) {
            firstName = ' ';
        }
        if (!lastName) {
            lastName = ' ';
        }
        params = params.append('firstName', firstName);
        params = params.append('lastName', lastName);
        this.errorService.hideErrors();
        this.airlineLoaderService.showSearchResultLoader("Loading orders...");
        return this.httpClient.get(url, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => this.catchFailResponse(data, url)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(this.maxRetryCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(e => this.handleError(e)));
    }
    getOrderById(orderId) {
        let url = Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__["getAirAPI"])() + 'orders/' + orderId;
        this.errorService.hideErrors();
        this.airlineLoaderService.showLoader("Loading order info...");
        return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => this.catchFailResponse(data, url)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(this.maxRetryCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(e => this.handleError(e)));
    }
    getOrderByRefId(aaId, firelogixId) {
        let url = Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__["getAirAPI"])() + 'orders/refid';
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('AAID', aaId);
        params = params.append('FLXID', firelogixId);
        this.errorService.hideErrors();
        this.airlineLoaderService.showLoader();
        return this.httpClient.get(url, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => this.catchFailResponse(data, url)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(this.maxRetryCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(e => this.handleError(e)));
    }
    // POST methods
    searchAirlines(query) {
        let url = Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__["getAirAPI"])() + 'airshopping';
        this.errorService.hideErrors();
        this.airlineLoaderService.showSearchResultLoader("Searching best flights...");
        return this.httpClient.post(url, query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => this.catchFailResponse(data, url, query)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(this.maxRetryCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(e => this.handleError(e)));
    }
    getOfferPrice(query) {
        let url = Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__["getAirAPI"])() + 'offerprice';
        this.errorService.hideErrors();
        this.airlineLoaderService.showLoader("Booking selected offer...");
        return this.httpClient.post(url, query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => this.catchFailResponse(data, url, query)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(this.maxRetryCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(e => this.handleError(e)));
    }
    createOrder(query) {
        let url = Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__["getAirAPI"])() + 'orders';
        this.errorService.hideErrors();
        this.airlineLoaderService.showLoader("Creating order...");
        return this.httpClient.post(url, query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => this.catchFailResponse(data, url, query)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(this.maxRetryCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(e => this.handleError(e)));
    }
    orderChange(query, text, skipHideLoader) {
        let url = Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__["getAirAPI"])() + 'orderchange';
        this.airlineLoaderService.showLoader(text);
        return this.httpClient.post(url, query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => this.catchFailResponse(data, url, query, skipHideLoader)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(this.maxRetryCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(e => this.handleError(e)));
    }
    orderReshop(query) {
        let url = Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__["getAirAPI"])() + 'reshop';
        this.errorService.hideErrors();
        this.airlineLoaderService.showSearchResultLoader("Searching best flights...");
        return this.httpClient.post(url, query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => this.catchFailResponse(data, url, query)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(this.maxRetryCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(e => this.handleError(e)));
    }
    getSeatAvailability(query) {
        let url = Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__["getAirAPI"])() + 'seatavailability';
        this.errorService.hideErrors();
        this.airlineLoaderService.showSearchResultLoader("Loading available seats...");
        return this.httpClient.post(url, query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => this.catchFailResponse(data, url, query)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(this.maxRetryCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(e => this.handleError(e)));
    }
    // DELETE methods
    cancelOrderById(orderId) {
        let url = Object(src_app_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_5__["getAirAPI"])() + 'orders/' + orderId;
        this.errorService.hideErrors();
        this.airlineLoaderService.showLoader("Cancelling order...");
        return this.httpClient.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(data => this.catchFailResponse(data, url)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(this.maxRetryCount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(e => this.handleError(e)));
    }
    // helpers
    catchFailResponse(data, url, query, skipHideLoader) {
        let warnings = [];
        let errors = [];
        let generalErrors = [];
        let showErrorInfo = false;
        let throwErrorRequired = false;
        if (!data) {
            generalErrors.push({ value: "Empty response from " + url, data: query });
            showErrorInfo = true;
            throwErrorRequired = true;
        }
        if (data && data.errors) {
            showErrorInfo = true;
            throwErrorRequired = true;
            data.errors.error.forEach(e => errors.push(e));
        }
        if (data && data.warnings) {
            showErrorInfo = true;
            data.warnings.warning.forEach(w => warnings.push(w));
        }
        if (showErrorInfo) {
            if (throwErrorRequired) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ linksrezError: { errors, warnings, generalErrors } });
            }
            this.errorService.showErrors(errors, warnings, generalErrors);
        }
        if (!skipHideLoader) {
            this.airlineLoaderService.hideLoader();
            this.airlineLoaderService.hideSearchResultLoader();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(data);
    }
    handleError(error) {
        this.airlineLoaderService.hideLoader();
        this.airlineLoaderService.hideSearchResultLoader();
        if (!error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }
        if (error.linksrezError) {
            this.errorService.showErrors(error.linksrezError.errors, error.linksrezError.warnings, error.linksrezError.generalErrors);
            return;
        }
        let errors = [];
        let warnings = [];
        let generalErrors = [];
        if (error.error instanceof ErrorEvent) {
            // client-side error
            generalErrors.push({ value: `${error.error.message}` });
        }
        else {
            // server-side error
            errors.push({ status: error.status, value: error.message });
        }
        this.errorService.showErrors(errors, warnings, generalErrors);
    }
}
AirlineRetrieveService.ɵfac = function AirlineRetrieveService_Factory(t) { return new (t || AirlineRetrieveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_loader_service__WEBPACK_IMPORTED_MODULE_6__["AirlineLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_error_service__WEBPACK_IMPORTED_MODULE_7__["AirlineErrorService"])); };
AirlineRetrieveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirlineRetrieveService, factory: AirlineRetrieveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineRetrieveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _airline_loader_service__WEBPACK_IMPORTED_MODULE_6__["AirlineLoaderService"] }, { type: _airline_error_service__WEBPACK_IMPORTED_MODULE_7__["AirlineErrorService"] }]; }, null); })();


/***/ }),

/***/ "4wIO":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/airline/pages/airline-reshop/airline-reshop.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AirlineReshopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineReshopComponent", function() { return AirlineReshopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/airline-search-header/airline-search-header.component */ "ni+9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_airline_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/airline-order.service */ "utjK");
/* harmony import */ var _services_airline_offer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/airline-offer.service */ "SVyy");
/* harmony import */ var _services_airline_datetime_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/airline-datetime.service */ "TGhc");
/* harmony import */ var _services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/airline-change-order.service */ "RTrV");
/* harmony import */ var _services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/airline-retrieve.service */ "1jwl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _partials_airline_search_result_airline_search_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../partials/airline-search-result/airline-search-result.component */ "Xdau");












function AirlineReshopComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Change flights");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select new departure / arriaval or change flight date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineReshopComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.backToOrderDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back to order details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-airline-search-header", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function AirlineReshopComponent_div_0_Template_app_airline_search_header_search_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.searchAirlines(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-airline-search-result", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionDone", function AirlineReshopComponent_div_0_Template_app_airline_search_result_selectionDone_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.reshop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockClass", "brdSmallBlock")("airlineSearch", ctx_r0.search)("fontStyle", "h4")("hidePtc", true)("showSearchButton", true)("loadLatestSearch", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchResult", ctx_r0.searchResult)("selectButtonText", "Confirm");
} }
class AirlineReshopComponent {
    constructor(router, airlineOrderService, activatedRoute, offerService, airlineDatetimeService, airlineChangeOrderService, airlineRetrieveService) {
        this.router = router;
        this.airlineOrderService = airlineOrderService;
        this.activatedRoute = activatedRoute;
        this.offerService = offerService;
        this.airlineDatetimeService = airlineDatetimeService;
        this.airlineChangeOrderService = airlineChangeOrderService;
        this.airlineRetrieveService = airlineRetrieveService;
        document.body.style.backgroundSize = "100% 165px";
        this.activatedRoute.params.subscribe(params => {
            this.orderId = params.id;
        });
        if (this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.orderViewModel) {
            this.orderViewModel = this.router.getCurrentNavigation().extras.state.orderViewModel;
            this.initAirlineSearch();
        }
        else {
            this.airlineRetrieveService.getOrderById(this.orderId).subscribe((data) => {
                this.orderViewModel = this.airlineOrderService.getOrderViewModel(data);
                this.initAirlineSearch();
            });
        }
    }
    ngOnInit() {
        this.searchResult = {
            isSearchCompleted: false,
            timeFormat: localStorage.getItem('timeFormat') || '24',
            selectedOffer: null,
            grouppedFlightList: null,
            airlineSearch: null,
            dataLists: null
        };
    }
    initAirlineSearch() {
        let flights = this.orderViewModel.flights.map(f => {
            let from = {
                id: f.departureAirportCode,
                data: f.departureAirportCode,
                value: f.departureAirportName
            };
            let to = {
                id: f.arrivalAirportCode,
                data: f.arrivalAirportCode,
                value: f.arrivalAirportName
            };
            let departureDate = new Date(f.departureDate);
            let flight = {
                from: from,
                to: to,
                departureDate: departureDate
            };
            return flight;
        });
        this.search = {
            flights: flights,
            travellers: this.orderViewModel.passengers.map((p, i) => ({ ptc: p.data.ptc, index: i })),
            isLoyaltyAccountEnabled: false,
            loyaltyAccountNumber: '',
            tripType: this.orderViewModel.flights.length === 1 ? "one" :
                this.orderViewModel.flights.length == 2 &&
                    this.orderViewModel.flights[0].departureAirportCode == this.orderViewModel.flights[1].arrivalAirportCode &&
                    this.orderViewModel.flights[0].arrivalAirportCode == this.orderViewModel.flights[1].departureAirportCode ? "round" : "multi"
        };
    }
    backToOrderDetails() {
        this.router.navigateByUrl('/Airlines/Orders/' + this.orderId, { state: { orderViewModel: this.orderViewModel } });
    }
    searchAirlines() {
        this.searchResult.selectedOffer = null;
        this.searchResult.grouppedFlightList = null;
        let query = {
            query: {
                orderID: this.orderId,
                reshop: {
                    orderServicing: {
                        add: {
                            flightQuery: {
                                originDestinations: {
                                    originDestination: this.search.flights.map(i => ({ departure: { airportCode: { value: i.from.data }, date: this.airlineDatetimeService.truncateTime(i.departureDate) }, arrival: { airportCode: { value: i.to.data } } }))
                                }
                            }
                        },
                        delete: {
                            orderItem: this.orderViewModel.originalOrderItems.map(i => ({ orderItemID: i.orderItemID }))
                        }
                    }
                }
            }
        };
        this.airlineRetrieveService.orderReshop(query).subscribe((data) => {
            this.searchResult.responseID = data.response.reShoppingResponseID.responseID.value;
            this.searchResult.dataLists = data.response.dataLists;
            this.searchResult.grouppedFlightList = this.offerService.groupReshopOffers(data.response.reshopOffers.reshopOffer, this.searchResult.timeFormat);
            this.searchResult.isSearchCompleted = true;
        });
    }
    reshop() {
        let responseID = this.searchResult.responseID;
        let selectedReshop = this.searchResult.selectedOffer.originalOffer;
        let offerViewModel = this.offerService.getReshopOfferViewModel(selectedReshop, this.searchResult.dataLists, responseID);
        this.orderViewModel.changedOrder = offerViewModel;
        this.airlineChangeOrderService.addChange("ChangeFlight", this.orderId);
        this.router.navigateByUrl('/Airlines/Orders/' + this.orderId, { state: { orderViewModel: this.orderViewModel } });
    }
}
AirlineReshopComponent.ɵfac = function AirlineReshopComponent_Factory(t) { return new (t || AirlineReshopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_order_service__WEBPACK_IMPORTED_MODULE_3__["AirlineOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_offer_service__WEBPACK_IMPORTED_MODULE_4__["AirlineOfferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_datetime_service__WEBPACK_IMPORTED_MODULE_5__["AirlineDatetimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_6__["AirlineChangeOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_7__["AirlineRetrieveService"])); };
AirlineReshopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineReshopComponent, selectors: [["app-airline-reshop"]], viewQuery: function AirlineReshopComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_1__["AirlineSearchHeaderComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.airlineSearchHeader = _t.first);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "lr_content", 1, "content", "d-flex", "flex-column", "flex-column-fluid", "pt-0"], [1, "d-flex", "flex-column-fluid", "borderHeader"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "gutter-b", "d-flex"], [1, "brdSmallBlock_inner", "pt-4", "flex-column"], [1, "text-white", "h3", "pl-2"], [1, "text-white-50", "pl-2"], [1, "gutter-b"], [1, "d-flex", "justify-content-end", "mb-3"], ["title", "Back to order details", 1, "btn", "btn-primary", "ml-5", 3, "click"], [3, "blockClass", "airlineSearch", "fontStyle", "hidePtc", "showSearchButton", "loadLatestSearch", "search"], [3, "searchResult", "selectButtonText", "selectionDone"]], template: function AirlineReshopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AirlineReshopComponent_div_0_Template, 19, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderId != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_1__["AirlineSearchHeaderComponent"], _partials_airline_search_result_airline_search_result_component__WEBPACK_IMPORTED_MODULE_9__["AirlineSearchResultComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFnZXMvYWlybGluZS1yZXNob3AvYWlybGluZS1yZXNob3AuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineReshopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-reshop',
                templateUrl: './airline-reshop.component.html',
                styleUrls: ['./airline-reshop.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_airline_order_service__WEBPACK_IMPORTED_MODULE_3__["AirlineOrderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_airline_offer_service__WEBPACK_IMPORTED_MODULE_4__["AirlineOfferService"] }, { type: _services_airline_datetime_service__WEBPACK_IMPORTED_MODULE_5__["AirlineDatetimeService"] }, { type: _services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_6__["AirlineChangeOrderService"] }, { type: _services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_7__["AirlineRetrieveService"] }]; }, { airlineSearchHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_1__["AirlineSearchHeaderComponent"]]
        }] }); })();


/***/ }),

/***/ "8gIF":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/airline/pages/airline-order/airline-order.component.ts ***!
  \************************************************************************************/
/*! exports provided: AirlineOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineOrderComponent", function() { return AirlineOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _partials_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/airline-passenger-form/airline-passenger-form.component */ "yOU+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/storage/local-storage */ "ADqn");
/* harmony import */ var _services_airline_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/airline-order.service */ "utjK");
/* harmony import */ var _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/airline-loader.service */ "qVcs");
/* harmony import */ var _shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var _services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/airline-retrieve.service */ "1jwl");
/* harmony import */ var _services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/airline-change-order.service */ "RTrV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/dialog/dialog.component */ "d/rN");
/* harmony import */ var _partials_airline_order_rloc_airline_order_rloc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../partials/airline-order-rloc/airline-order-rloc.component */ "iDR2");
/* harmony import */ var _partials_airline_flight_item_airline_flight_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../partials/airline-flight-item/airline-flight-item.component */ "cQZ/");
/* harmony import */ var _partials_airline_passenger_list_airline_passenger_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../partials/airline-passenger-list/airline-passenger-list.component */ "EoCE");
/* harmony import */ var _partials_airline_order_changes_airline_order_changes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../partials/airline-order-changes/airline-order-changes.component */ "LnPy");
/* harmony import */ var _partials_airline_order_summary_airline_order_summary_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../partials/airline-order-summary/airline-order-summary.component */ "yJtm");
/* harmony import */ var _partials_airline_payment_summary_airline_payment_summary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../partials/airline-payment-summary/airline-payment-summary.component */ "vY2y");





















const _c0 = ["appDialog"];
function AirlineOrderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your Order has been cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.navigateToSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderComponent_div_0_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.navigateToOrderList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "View Order List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.orderId);
} }
function AirlineOrderComponent_div_1_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderComponent_div_1_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.editOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrderComponent_div_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderComponent_div_1_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.navigateToOrderList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrderComponent_div_1_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderComponent_div_1_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.showDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrderComponent_div_1_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderComponent_div_1_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.isSaveChangesEnabled() ? "" : "disabled");
} }
function AirlineOrderComponent_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderComponent_div_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.cancelChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrderComponent_div_1_div_18_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderComponent_div_1_div_18_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.editFlights(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Select other flights ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrderComponent_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Changed Flights");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AirlineOrderComponent_div_1_div_18_div_5_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-airline-flight-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.orderViewModel && ctx_r11.orderViewModel.editMode && ctx_r11.orderViewModel.changedOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flights", ctx_r11.orderViewModel.changedOrder.flights);
} }
function AirlineOrderComponent_div_1_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Original ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AirlineOrderComponent_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderComponent_div_1_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.editFlights(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Select other flights ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrderComponent_div_1_div_26_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrderComponent_div_1_div_26_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrderComponent_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderComponent_div_1_div_26_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.orderViewModel.changedOrder.showOriginal = !ctx_r39.orderViewModel.changedOrder.showOriginal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " view ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirlineOrderComponent_div_1_div_26_i_3_Template, 2, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AirlineOrderComponent_div_1_div_26_i_4_Template, 2, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.orderViewModel.changedOrder.showOriginal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.orderViewModel.changedOrder.showOriginal);
} }
function AirlineOrderComponent_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-airline-flight-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderViewModel", ctx_r15.orderViewModel)("orderId", ctx_r15.orderId);
} }
function AirlineOrderComponent_div_1_app_airline_passenger_list_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-airline-passenger-list", 41);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderViewModel", ctx_r16.orderViewModel)("orderId", ctx_r16.orderId);
} }
function AirlineOrderComponent_div_1_app_airline_passenger_form_35_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-airline-passenger-form", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("passengerChanges", function AirlineOrderComponent_div_1_app_airline_passenger_form_35_Template_app_airline_passenger_form_passengerChanges_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.passengerChanges($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("passengers", ctx_r17.orderViewModel.passengers);
} }
function AirlineOrderComponent_div_1_app_airline_order_changes_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-airline-order-changes", 43);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderId", ctx_r18.orderId);
} }
function AirlineOrderComponent_div_1_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-airline-order-summary", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("passengers", ctx_r19.orderViewModel.changedOrder.passengers);
} }
function AirlineOrderComponent_div_1_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-airline-order-summary", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("passengers", ctx_r20.orderViewModel.passengers);
} }
function AirlineOrderComponent_div_1_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-airline-payment-summary", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("makePayment", function AirlineOrderComponent_div_1_div_40_Template_app_airline_payment_summary_makePayment_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.makePayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderViewModel", ctx_r21.orderViewModel)("payments", ctx_r21.orderViewModel.payments)("passengers", ctx_r21.orderViewModel.passengers);
} }
function AirlineOrderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-airline-order-rloc", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AirlineOrderComponent_div_1_button_11_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AirlineOrderComponent_div_1_button_12_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AirlineOrderComponent_div_1_button_13_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AirlineOrderComponent_div_1_button_14_Template, 2, 1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AirlineOrderComponent_div_1_button_15_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AirlineOrderComponent_div_1_div_18_Template, 8, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AirlineOrderComponent_div_1_ng_container_23_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Flights ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AirlineOrderComponent_div_1_div_25_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AirlineOrderComponent_div_1_div_26_Template, 5, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AirlineOrderComponent_div_1_div_27_Template, 2, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Passengers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AirlineOrderComponent_div_1_app_airline_passenger_list_34_Template, 1, 2, "app-airline-passenger-list", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AirlineOrderComponent_div_1_app_airline_passenger_form_35_Template, 1, 1, "app-airline-passenger-form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AirlineOrderComponent_div_1_app_airline_order_changes_37_Template, 1, 1, "app-airline-order-changes", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AirlineOrderComponent_div_1_ng_container_38_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AirlineOrderComponent_div_1_ng_container_39_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AirlineOrderComponent_div_1_div_40_Template, 2, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payments", ctx_r1.orderViewModel.payments)("bookingReferences", ctx_r1.orderViewModel.bookingReferences)("orderId", ctx_r1.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.orderViewModel.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.orderViewModel.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.orderViewModel.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderViewModel.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderViewModel.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderViewModel.editMode && ctx_r1.orderViewModel.changedOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderViewModel.changedOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderViewModel && ctx_r1.orderViewModel.editMode && !ctx_r1.orderViewModel.changedOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderViewModel && ctx_r1.orderViewModel.editMode && ctx_r1.orderViewModel.changedOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.orderViewModel.changedOrder || ctx_r1.orderViewModel.changedOrder.showOriginal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.orderViewModel.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderViewModel.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderViewModel.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderViewModel.changedOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.orderViewModel.changedOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.orderViewModel.editMode);
} }
class AirlineOrderComponent extends _airline__WEBPACK_IMPORTED_MODULE_1__["Airline"] {
    constructor(router, loginService, localStorage, airlineOrderService, airlineLoaderService, activatedRoute, dialogService, retrieveService, airlineChangeOrderService, cdRef) {
        super(loginService);
        this.router = router;
        this.localStorage = localStorage;
        this.airlineOrderService = airlineOrderService;
        this.airlineLoaderService = airlineLoaderService;
        this.activatedRoute = activatedRoute;
        this.dialogService = dialogService;
        this.retrieveService = retrieveService;
        this.airlineChangeOrderService = airlineChangeOrderService;
        this.cdRef = cdRef;
        this.isSubmitted = false;
        this.displayedColumns = ['Index', 'Name', 'Gender', 'DOB', 'TicketNo'];
        document.body.style.backgroundSize = "100% 165px";
        this.activatedRoute.params.subscribe(params => {
            this.orderId = params.id;
        });
        if (this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.orderViewModel) {
            this.orderViewModel = this.router.getCurrentNavigation().extras.state.orderViewModel;
        }
        else {
            this.retrieveService.getOrderById(this.orderId).subscribe((data) => {
                this.orderViewModel = this.airlineOrderService.getOrderViewModel(data);
                this.orderChanged(data);
            });
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.dialogService.register(this.appDialog, "Cancel order", "Are you sure you want to cancel the current order?", "Yes", "No");
        this.cdRef.detectChanges();
    }
    passengerChanges(data) {
        if (data) {
            this.orderViewModel.changedPassengerList = {
                passenger: this.airlinePassengerFormComponent.getPassengers()
            };
            this.airlineChangeOrderService.addChange('ChangePassengerInfo', this.orderId);
        }
        else {
            this.orderViewModel.changedPassengerList = null;
            this.airlineChangeOrderService.clearPassengerChanges(this.orderId);
        }
    }
    getTotalPassengerCount() {
        return this.orderViewModel.passengers.length;
    }
    orderChanged(data) {
        this.orderViewModel = this.airlineOrderService.getOrderViewModel(data);
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
        this.retrieveService.cancelOrderById(this.orderId).subscribe((data) => {
            this.orderViewModel = null;
        });
    }
    cancelChanges() {
        this.orderViewModel.editMode = false;
        this.airlineChangeOrderService.clearChanges(this.orderId, this.orderViewModel);
    }
    saveChanges() {
        if (!this.isSaveChangesEnabled()) {
            return;
        }
        let result = null;
        this.airlineChangeOrderService.acceptChanges(this.orderId, this.orderViewModel).subscribe((data) => {
            result = data;
        }, () => { }, () => {
            this.airlineChangeOrderService.clearChanges(this.orderId, this.orderViewModel);
            this.airlineLoaderService.hideLoader();
            if (result) {
                this.orderViewModel = this.airlineOrderService.getOrderViewModel(result);
            }
        });
    }
    editOrder() {
        this.orderViewModel.editMode = true;
    }
    editFlights() {
        this.router.navigateByUrl('/Airlines/Reshop/' + this.orderId, { state: { orderViewModel: this.orderViewModel } });
    }
    isSaveChangesEnabled() {
        return this.airlineChangeOrderService.anyChanges(this.orderId);
    }
    makePayment() {
        this.router.navigateByUrl('/Airlines/Payment/' + this.orderId, { state: { orderViewModel: this.orderViewModel } });
    }
    navigateToOrderList() {
        this.router.navigateByUrl('/Airlines/Orders');
    }
    navigateToSearch() {
        this.router.navigateByUrl('/Airlines/Search');
    }
}
AirlineOrderComponent.ɵfac = function AirlineOrderComponent_Factory(t) { return new (t || AirlineOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_order_service__WEBPACK_IMPORTED_MODULE_6__["AirlineOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_loader_service__WEBPACK_IMPORTED_MODULE_7__["AirlineLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_9__["AirlineRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_10__["AirlineChangeOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AirlineOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineOrderComponent, selectors: [["app-airline-order"]], viewQuery: function AirlineOrderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_partials_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_2__["AirlinePassengerFormComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.airlinePassengerFormComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appDialog = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[4, "ngIf"], ["appDialog", ""], ["id", "lr_content", 1, "content", "d-flex", "flex-column", "flex-column-fluid", "pt-0"], [1, "d-flex", "flex-column-fluid", "borderHeader"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "gutter-b", "d-flex"], [1, "brdSmallBlock_inner", "pt-4", "flex-column"], [1, "text-white", "pl-2"], [1, "opacity-70"], [1, "text-white-50", "pl-2"], [1, "fas", "fa-times-circle", "text-danger", "icon-xl"], [1, "gutter-b"], [1, "d-flex", "justify-content-end", "mb-3"], [1, "btn", "btn-primary", "ml-5", 3, "click"], [1, "pl-2", 3, "payments", "bookingReferences", "orderId"], ["class", "btn btn-primary ml-5", 3, "click", 4, "ngIf"], ["class", "btn btn-danger ml-10", "title", "Cancel Order", 3, "click", 4, "ngIf"], ["class", "btn btn-success ml-5", 3, "ngClass", "click", 4, "ngIf"], [1, "col-9"], ["class", "card card-custom mb-5", 4, "ngIf"], [1, "card", "card-custom", "mb-5"], [1, "card-header"], [1, "card-title"], [1, "card-label"], ["class", "card-title", 4, "ngIf"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [3, "orderViewModel", "orderId", 4, "ngIf"], [3, "passengers", "passengerChanges", 4, "ngIf"], [1, "col-3"], [3, "orderId", 4, "ngIf"], ["class", "mb-5", 4, "ngIf"], ["title", "Cancel Order", 1, "btn", "btn-danger", "ml-10", 3, "click"], [1, "btn", "btn-success", "ml-5", 3, "ngClass", "click"], [3, "flights"], [1, "btn", "btn-primary", 3, "click"], [1, "text-primary", "font-weight-bold", "cursor-pointer", 3, "click"], ["class", "material-icons text-primary align-middle icon-md", 4, "ngIf"], [1, "material-icons", "text-primary", "align-middle", "icon-md"], [3, "orderViewModel", "orderId"], [3, "passengers", "passengerChanges"], [3, "orderId"], [3, "passengers"], [1, "mb-5"], [3, "orderViewModel", "payments", "passengers", "makePayment"]], template: function AirlineOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AirlineOrderComponent_div_0_Template, 21, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlineOrderComponent_div_1_Template, 41, 19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-dialog", null, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.orderViewModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderId != null && ctx.orderViewModel && ctx.orderViewModel.flights && ctx.orderViewModel.flights.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"], _partials_airline_order_rloc_airline_order_rloc_component__WEBPACK_IMPORTED_MODULE_13__["AirlineOrderRlocComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _partials_airline_flight_item_airline_flight_item_component__WEBPACK_IMPORTED_MODULE_14__["AirlineFlightItemComponent"], _partials_airline_passenger_list_airline_passenger_list_component__WEBPACK_IMPORTED_MODULE_15__["AirlinePassengerListComponent"], _partials_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_2__["AirlinePassengerFormComponent"], _partials_airline_order_changes_airline_order_changes_component__WEBPACK_IMPORTED_MODULE_16__["AirlineOrderChangesComponent"], _partials_airline_order_summary_airline_order_summary_component__WEBPACK_IMPORTED_MODULE_17__["AirlineOrderSummaryComponent"], _partials_airline_payment_summary_airline_payment_summary_component__WEBPACK_IMPORTED_MODULE_18__["AirlinePaymentSummaryComponent"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .flight-fare-info-container[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n  padding-bottom: 1.25rem;\n  font-size: 1.25rem;\n}\n\n.pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYWdlcy9haXJsaW5lLW9yZGVyL2FpcmxpbmUtb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtBQUNKOztBQUdJO0VBQ0ksVUFBQTtBQUFSOztBQUVRO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQVo7O0FBS0E7RUFDSSxZQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9haXJsaW5lL3BhZ2VzL2FpcmxpbmUtb3JkZXIvYWlybGluZS1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNhcmQge1xuICAgIC5jYXJkLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIC5mbGlnaHQtZmFyZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnB1bGwtcmlnaHR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-order',
                templateUrl: './airline-order.component.html',
                styleUrls: ['./airline-order.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"] }, { type: _services_airline_order_service__WEBPACK_IMPORTED_MODULE_6__["AirlineOrderService"] }, { type: _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_7__["AirlineLoaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_9__["AirlineRetrieveService"] }, { type: _services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_10__["AirlineChangeOrderService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { airlinePassengerFormComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_partials_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_2__["AirlinePassengerFormComponent"]]
        }], appDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['appDialog']
        }] }); })();


/***/ }),

/***/ "97hE":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-contact-form/airline-contact-form.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AirlineContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineContactFormComponent", function() { return AirlineContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AirlineContactFormComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Primary Email is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineContactFormComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not a Valid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineContactFormComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Country Code is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineContactFormComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Primary phone is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AirlineContactFormComponent {
    constructor() {
        this.dummyContactData = {
            "EmailAddress": "sai@sai.com",
            "Label": "mobile",
            "CountryDialingCode": "1",
            "AreaCode": "+1",
            "PhoneNumber": "09490977779"
        };
        this.contactFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            EmailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Label: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('mobile'),
            CountryDialingCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1'),
            AreaCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            PhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            this.contactFG.patchValue(this.dummyContactData);
        }
    }
    markAllAsTouched() {
        this.contactFG.markAllAsTouched();
    }
    getContacts() {
        let contacts = {
            phone: {
                areaCode: this.contactFG.value.AreaCode,
                phoneNumber: this.contactFG.value.PhoneNumber,
                countryDialingCode: this.contactFG.value.CountryDialingCode,
                label: this.contactFG.value.Label
            },
            email: {
                emailAddress: this.contactFG.value.EmailAddress
            }
        };
        return contacts;
    }
}
AirlineContactFormComponent.ɵfac = function AirlineContactFormComponent_Factory(t) { return new (t || AirlineContactFormComponent)(); };
AirlineContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineContactFormComponent, selectors: [["app-airline-contact-form"]], decls: 26, vars: 5, consts: [[1, "card", "card-custom", "mt-3", 3, "formGroup"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "row"], [1, "col-4", "form-group"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "EmailAddress", "type", "email", "name", "email", "email", "true", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "AreaCode", "required", ""], ["matInput", "", "formControlName", "PhoneNumber", "maxlength", "13", "required", ""]], template: function AirlineContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Trip contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Primary Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AirlineContactFormComponent_mat_error_12_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AirlineContactFormComponent_mat_error_13_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Country Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AirlineContactFormComponent_mat_error_19_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Primary phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AirlineContactFormComponent_mat_error_25_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactFG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactFG.get("EmailAddress").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactFG.get("EmailAddress").hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactFG.get("AreaCode").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactFG.get("PhoneNumber").hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFydGlhbHMvYWlybGluZS1jb250YWN0LWZvcm0vYWlybGluZS1jb250YWN0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-contact-form',
                templateUrl: './airline-contact-form.component.html',
                styleUrls: ['./airline-contact-form.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EoCE":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-passenger-list/airline-passenger-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AirlinePassengerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlinePassengerListComponent", function() { return AirlinePassengerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../airline-passenger-form/airline-passenger-form.component */ "yOU+");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _services_airline_passenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/airline-passenger.service */ "TPXw");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AirlinePassengerListComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePassengerListComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.label, " ");
} }
function AirlinePassengerListComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePassengerListComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getName(element_r14.data), " ");
} }
function AirlinePassengerListComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePassengerListComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.data.individual.gender, " ");
} }
function AirlinePassengerListComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DOB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePassengerListComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r16.data.individual.birthdate, "mediumDate"), " ");
} }
function AirlinePassengerListComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ticket No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePassengerListComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.ticketNo, "");
} }
function AirlinePassengerListComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
function AirlinePassengerListComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
class AirlinePassengerListComponent extends _airline__WEBPACK_IMPORTED_MODULE_1__["Airline"] {
    constructor(loginService, passengerService) {
        super(loginService);
        this.passengerService = passengerService;
        this.displayedColumns = ['Index', 'Name', 'Gender', 'DOB', 'TicketNo'];
    }
    ngOnInit() {
    }
    getName(passenger) {
        const name = (passenger.individual.nameTitle || "") + " " +
            (passenger.individual.givenName || "") + " " +
            (passenger.individual.middleName || "") + " " +
            (passenger.individual.surname || "");
        return name;
    }
}
AirlinePassengerListComponent.ɵfac = function AirlinePassengerListComponent_Factory(t) { return new (t || AirlinePassengerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_passenger_service__WEBPACK_IMPORTED_MODULE_4__["AirlinePassengerService"])); };
AirlinePassengerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlinePassengerListComponent, selectors: [["app-airline-passenger-list"]], viewQuery: function AirlinePassengerListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_2__["AirlinePassengerFormComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.airlinePassengerFormComponent = _t.first);
    } }, inputs: { orderViewModel: "orderViewModel", orderId: "orderId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "Gender"], ["matColumnDef", "DOB"], ["matColumnDef", "TicketNo"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function AirlinePassengerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AirlinePassengerListComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirlinePassengerListComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AirlinePassengerListComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AirlinePassengerListComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AirlinePassengerListComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AirlinePassengerListComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AirlinePassengerListComponent_th_11_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AirlinePassengerListComponent_td_12_Template, 3, 4, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AirlinePassengerListComponent_th_14_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AirlinePassengerListComponent_td_15_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AirlinePassengerListComponent_tr_16_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AirlinePassengerListComponent_tr_17_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.orderViewModel.passengers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLXBhc3Nlbmdlci1saXN0L2FpcmxpbmUtcGFzc2VuZ2VyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFydGlhbHMvYWlybGluZS1wYXNzZW5nZXItbGlzdC9haXJsaW5lLXBhc3Nlbmdlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlinePassengerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-passenger-list',
                templateUrl: './airline-passenger-list.component.html',
                styleUrls: ['./airline-passenger-list.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _services_airline_passenger_service__WEBPACK_IMPORTED_MODULE_4__["AirlinePassengerService"] }]; }, { orderViewModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orderId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], airlinePassengerFormComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_2__["AirlinePassengerFormComponent"]]
        }] }); })();


/***/ }),

/***/ "Gtix":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-payment-form/airline-payment-form.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AirlinePaymentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlinePaymentFormComponent", function() { return AirlinePaymentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../environments/environment */ "AytR");
/* harmony import */ var _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/airline-payment.service */ "dAfP");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/credit-card.service */ "Kceb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _shared_directives_credit_card_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/directives/credit-card.directive */ "GG7F");
/* harmony import */ var _shared_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/directives/only-number.directive */ "2Goh");

















function AirlinePaymentFormComponent_div_6_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r3, " ");
} }
function AirlinePaymentFormComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Payment Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AirlinePaymentFormComponent_div_6_Template_mat_select_valueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.paymentType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AirlinePaymentFormComponent_div_6_mat_option_6_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.paymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.paymentTypes);
} }
function AirlinePaymentFormComponent_form_7_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r21.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r21.name, " ");
} }
function AirlinePaymentFormComponent_form_7_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose Credit Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentFormComponent_form_7_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Credit Card Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentFormComponent_form_7_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Security Code is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentFormComponent_form_7_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r22 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.isMonthDisable(m_r22))("value", m_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r22, " ");
} }
function AirlinePaymentFormComponent_form_7_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentFormComponent_form_7_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", y_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r23, " ");
} }
function AirlinePaymentFormComponent_form_7_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentFormComponent_form_7_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name on Card is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentFormComponent_form_7_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name on Card is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentFormComponent_form_7_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Street is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentFormComponent_form_7_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "City is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentFormComponent_form_7_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "State is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentFormComponent_form_7_mat_error_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Postal Code is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentFormComponent_form_7_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Country Code is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentFormComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Credit Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AirlinePaymentFormComponent_form_7_mat_option_6_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AirlinePaymentFormComponent_form_7_mat_error_7_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Credit Card Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AirlinePaymentFormComponent_form_7_mat_error_13_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Security Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AirlinePaymentFormComponent_form_7_mat_error_19_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Exp Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AirlinePaymentFormComponent_form_7_mat_option_25_Template, 2, 3, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AirlinePaymentFormComponent_form_7_mat_error_26_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Exp Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AirlinePaymentFormComponent_form_7_Template_mat_select_selectionChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.yearChange($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AirlinePaymentFormComponent_form_7_mat_option_32_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AirlinePaymentFormComponent_form_7_mat_error_33_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "First Name on Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AirlinePaymentFormComponent_form_7_mat_error_39_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Last Name on Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AirlinePaymentFormComponent_form_7_mat_error_45_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Street");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AirlinePaymentFormComponent_form_7_mat_error_51_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AirlinePaymentFormComponent_form_7_mat_error_57_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AirlinePaymentFormComponent_form_7_mat_error_63_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Postal Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AirlinePaymentFormComponent_form_7_mat_error_69_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Country Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AirlinePaymentFormComponent_form_7_mat_error_75_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.creditCardFG);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cardTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("CreditType").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("FirstNameonCard").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("LastNameonCard").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("Street").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("City").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("State").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("PostalCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.creditCardFG.get("CountryCode").hasError("required"));
} }
class AirlinePaymentFormComponent extends _airline__WEBPACK_IMPORTED_MODULE_2__["Airline"] {
    constructor(loginService, creditCardService, paymentService) {
        super(loginService);
        this.creditCardService = creditCardService;
        this.paymentService = paymentService;
        this.yearArray = Array(20).fill(null).map((_, i) => new Date().getFullYear() + i);
        this.monthArray = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        this.creditCardFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            CreditType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            CreditCardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            SecurityCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ExpMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ExpYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            FirstNameonCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            LastNameonCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            City: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            State: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            PostalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            CountryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.paymentTypeCreditCard = _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_4__["AirlinePaymentService"].paymentTypeCreditCard;
        this.paymentTypes = this.paymentService.paymentTypes;
        this.cardTypes = this.creditCardService.cardTypes;
        this.paymentType = _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_4__["AirlinePaymentService"].paymentTypeCreditCard;
    }
    ngOnInit() {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            this.creditCardFG.patchValue(this.creditCardService.dummyCreditCardData);
        }
    }
    isMonthDisable(month) {
        if (this.creditCardFG.value.ExpYear == new Date().getFullYear()) {
            if (new Date().getMonth() >= Number(month)) {
                return true;
            }
        }
        return false;
    }
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
    isPaymentFormValid() {
        return (this.paymentType == _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_4__["AirlinePaymentService"].paymentTypeOnHold || this.creditCardFG.valid);
    }
    markAllAsTouched() {
        if (this.paymentType == _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_4__["AirlinePaymentService"].paymentTypeCreditCard) {
            this.creditCardFG.markAllAsTouched();
        }
    }
}
AirlinePaymentFormComponent.ɵfac = function AirlinePaymentFormComponent_Factory(t) { return new (t || AirlinePaymentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_6__["CreditCardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_payment_service__WEBPACK_IMPORTED_MODULE_4__["AirlinePaymentService"])); };
AirlinePaymentFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlinePaymentFormComponent, selectors: [["app-airline-payment-form"]], inputs: { hidePaymentTypeSelection: "hidePaymentTypeSelection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 2, consts: [[1, "card", "card-custom"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["class", "row", 4, "ngIf"], ["class", "row", 3, "formGroup", 4, "ngIf"], [1, "row"], [1, "col-4", "form-group"], ["appearance", "outline", 1, "w-100"], ["required", "", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-8", "form-group"], [3, "value"], [1, "row", 3, "formGroup"], [1, "col-12", "form-group"], ["appearance", "outline"], ["formControlName", "CreditType", "required", ""], [4, "ngIf"], ["matInput", "", "appCreditCard", "", "autocomplete", "off", "formControlName", "CreditCardNumber", "required", ""], [1, "col-3", "form-group"], ["matInput", "", "appOnlyNumber", "", "formControlName", "SecurityCode", "maxlength", "3", "required", ""], [1, "col-2", "form-group"], ["formControlName", "ExpMonth", "required", ""], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["formControlName", "ExpYear", "required", "", 3, "selectionChange"], [1, "col-6", "form-group"], ["matInput", "", "formControlName", "FirstNameonCard", "required", ""], ["matInput", "", "formControlName", "LastNameonCard", "required", ""], ["matInput", "", "formControlName", "Street", "required", ""], ["matInput", "", "formControlName", "City", "required", ""], ["matInput", "", "formControlName", "State", "required", ""], ["matInput", "", "formControlName", "PostalCode", "required", ""], ["matInput", "", "formControlName", "CountryCode", "required", ""], [3, "disabled", "value"]], template: function AirlinePaymentFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Payment Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AirlinePaymentFormComponent_div_6_Template, 8, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AirlinePaymentFormComponent_form_7_Template, 76, 16, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidePaymentTypeSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paymentType == ctx.paymentTypeCreditCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _shared_directives_credit_card_directive__WEBPACK_IMPORTED_MODULE_12__["CreditCardDirective"], _shared_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_13__["OnlyNumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFydGlhbHMvYWlybGluZS1wYXltZW50LWZvcm0vYWlybGluZS1wYXltZW50LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlinePaymentFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-payment-form',
                templateUrl: './airline-payment-form.component.html',
                styleUrls: ['./airline-payment-form.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }, { type: src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_6__["CreditCardService"] }, { type: _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_4__["AirlinePaymentService"] }]; }, { hidePaymentTypeSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Kceb":
/*!********************************************************!*\
  !*** ./src/app/shared/services/credit-card.service.ts ***!
  \********************************************************/
/*! exports provided: CreditCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardService", function() { return CreditCardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CreditCardService {
    constructor() {
        this.cardTypes = [
            {
                "name": "American Express",
                "code": "AX"
            },
            {
                "name": "Diners Club International",
                "code": "DC"
            },
            {
                "name": "Discover Card",
                "code": "DS"
            },
            {
                "name": "Japan Credit Bureau",
                "code": "JC"
            },
            {
                "name": "Mastercard",
                "code": "CA"
            },
            {
                "name": "UATP",
                "code": "TP"
            },
            {
                "name": "Visa",
                "code": "VI"
            }
        ];
        // TEST credit cards detals:
        // https://farelogixpartnersupport.zendesk.com/hc/en-us/articles/4402363072269-Test-Credit-Cards-for-Sandbox
        // expired: 01/39 Transaction approved (code 0)
        // expired: 02/23 Transaction could not be processed (code 1)
        // expired: 05/22 Transaction declined - contact issuing bank (code 2)
        // expired: 08/28 No reply from Processing Host (code 3)
        // expired: 04/27 Card has expired (code 4)
        // expired: 01/27 Insufficient credit (code 5)
        this.dummyCreditCardData = {
            City: "Miami",
            CountryCode: "US",
            CreditCardNumber: "30123400000000",
            CreditType: "DC",
            ExpMonth: "01",
            ExpYear: 2039,
            FirstNameonCard: "John",
            LastNameonCard: "Brown",
            PostalCode: "33160",
            SecurityCode: "100",
            State: "FL",
            Street: "123 Street Building"
        };
    }
    findNameByCode(code) {
        let cardTypeObj = this.cardTypes.find(i => i.code == code);
        return cardTypeObj ? cardTypeObj.name : code;
    }
}
CreditCardService.ɵfac = function CreditCardService_Factory(t) { return new (t || CreditCardService)(); };
CreditCardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreditCardService, factory: CreditCardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditCardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LSaV":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-loader/airline-loader.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AirlineLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineLoaderComponent", function() { return AirlineLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/airline-loader.service */ "qVcs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");





class AirlineLoaderComponent {
    constructor(airlineLoaderService) {
        this.airlineLoaderService = airlineLoaderService;
        this.spinnerClass = "spinner";
    }
    ngOnInit() {
    }
}
AirlineLoaderComponent.ɵfac = function AirlineLoaderComponent_Factory(t) { return new (t || AirlineLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_loader_service__WEBPACK_IMPORTED_MODULE_1__["AirlineLoaderService"])); };
AirlineLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineLoaderComponent, selectors: [["app-airline-loader"]], inputs: { spinnerClass: "spinnerClass" }, decls: 5, vars: 3, consts: [[3, "ngClass"], [1, "spinner-container"], [3, "diameter"]], template: function AirlineLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.spinnerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.airlineLoaderService.loaderText, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"]], styles: [".spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-items: center;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  left: calc(50% - 100px);\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLWxvYWRlci9haXJsaW5lLWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLWxvYWRlci9haXJsaW5lLWxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uc3Bpbm5lcntcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbiAgICB3aWR0aDogMjAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-loader',
                templateUrl: './airline-loader.component.html',
                styleUrls: ['./airline-loader.component.scss']
            }]
    }], function () { return [{ type: _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_1__["AirlineLoaderService"] }]; }, { spinnerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LnPy":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-order-changes/airline-order-changes.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AirlineOrderChangesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineOrderChangesComponent", function() { return AirlineOrderChangesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/airline-change-order.service */ "RTrV");
/* harmony import */ var _shared_directives_var_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/directives/var.directive */ "TSMZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AirlineOrderChangesComponent_ng_container_0_div_1_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const change_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", change_r4.label, " ");
} }
function AirlineOrderChangesComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AirlineOrderChangesComponent_ng_container_0_div_1_li_7_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const changes_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Order changes (", changes_r1.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", changes_r1);
} }
function AirlineOrderChangesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlineOrderChangesComponent_ng_container_0_div_1_Template, 8, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const changes_r1 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", changes_r1.length);
} }
class AirlineOrderChangesComponent {
    constructor(airlineChangeOrderService) {
        this.airlineChangeOrderService = airlineChangeOrderService;
    }
    orderChanges() {
        return this.airlineChangeOrderService.viewOrderChanges(this.orderId);
    }
    ngOnInit() {
    }
}
AirlineOrderChangesComponent.ɵfac = function AirlineOrderChangesComponent_Factory(t) { return new (t || AirlineOrderChangesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_1__["AirlineChangeOrderService"])); };
AirlineOrderChangesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineOrderChangesComponent, selectors: [["app-airline-order-changes"]], inputs: { orderId: "orderId" }, decls: 1, vars: 1, consts: [[4, "ngVar"], ["class", "card card-custom mb-5", 4, "ngIf"], [1, "card", "card-custom", "mb-5"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "pl-4"], [4, "ngFor", "ngForOf"]], template: function AirlineOrderChangesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AirlineOrderChangesComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngVar", ctx.orderChanges());
    } }, directives: [_shared_directives_var_directive__WEBPACK_IMPORTED_MODULE_2__["VarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFydGlhbHMvYWlybGluZS1vcmRlci1jaGFuZ2VzL2FpcmxpbmUtb3JkZXItY2hhbmdlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineOrderChangesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-order-changes',
                templateUrl: './airline-order-changes.component.html',
                styleUrls: ['./airline-order-changes.component.scss']
            }]
    }], function () { return [{ type: _services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_1__["AirlineChangeOrderService"] }]; }, { orderId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Lq6Y":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/airline/pages/airline-search/airline-search.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AirlineSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineSearchComponent", function() { return AirlineSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/airline-search-header/airline-search-header.component */ "ni+9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _services_airline_offer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/airline-offer.service */ "SVyy");
/* harmony import */ var _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/storage/local-storage */ "ADqn");
/* harmony import */ var _partials_airline_search_result_airline_search_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../partials/airline-search-result/airline-search-result.component */ "Xdau");










class AirlineSearchComponent extends _airline__WEBPACK_IMPORTED_MODULE_1__["Airline"] {
    constructor(router, loginService, offerService, localStorage) {
        super(loginService);
        this.router = router;
        this.offerService = offerService;
        this.localStorage = localStorage;
        document.body.style.backgroundSize = "100% 165px";
    }
    ngOnInit() {
        this.searchResult = {
            dataLists: null,
            isSearchCompleted: false,
            timeFormat: localStorage.getItem('timeFormat') || '24',
            selectedOffer: null,
            grouppedFlightList: null,
            airlineSearch: null,
        };
    }
    searchAirlines() {
        this.searchResult.selectedOffer = null;
        this.searchResult.grouppedFlightList = null;
        let airlineSearch = this.airlineSearchHeader.getAirlineSearch();
        this.offerService.findOffers(airlineSearch).subscribe((data) => {
            this.searchResult.responseID = data.ShoppingResponseID.responseID.value;
            this.searchResult.airlineSearch = airlineSearch;
            this.searchResult.dataLists = data.dataLists;
            let offersWithDetails = data.OffersWithDetails;
            if (offersWithDetails != null && offersWithDetails.length > 0
                && offersWithDetails[0].flightsPlusSegments != null && offersWithDetails[0].flightsPlusSegments.length > 0) {
                this.searchResult.grouppedFlightList = this.offerService.groupOffersByFlights(offersWithDetails, this.searchResult.timeFormat);
            }
            this.searchResult.isSearchCompleted = true;
        });
    }
    bookNow() {
        this.offerService.getPricedOffer(this.searchResult).subscribe((data) => {
            let offerViewModel = this.offerService.getPricedOfferViewModel(data);
            this.localStorage.setItem(this.localStorage.keys.airline.offerViewModel, JSON.stringify(offerViewModel));
            this.router.navigateByUrl('/Airlines/Booking');
        });
    }
}
AirlineSearchComponent.ɵfac = function AirlineSearchComponent_Factory(t) { return new (t || AirlineSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_offer_service__WEBPACK_IMPORTED_MODULE_5__["AirlineOfferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"])); };
AirlineSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineSearchComponent, selectors: [["app-airline-search"]], viewQuery: function AirlineSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_2__["AirlineSearchHeaderComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.airlineSearchHeader = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [[1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "row"], [1, "col-12"], [3, "blockClass", "fontStyle", "showSearchButton", "loadLatestSearch", "search"], [3, "searchResult", "selectButtonText", "selectionDone"]], template: function AirlineSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-airline-search-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function AirlineSearchComponent_Template_app_airline_search_header_search_4_listener() { return ctx.searchAirlines(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-airline-search-result", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionDone", function AirlineSearchComponent_Template_app_airline_search_result_selectionDone_5_listener() { return ctx.bookNow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockClass", "brdSmallBlock")("fontStyle", "h4")("showSearchButton", true)("loadLatestSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchResult", ctx.searchResult)("selectButtonText", "Book now");
    } }, directives: [_partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_2__["AirlineSearchHeaderComponent"], _partials_airline_search_result_airline_search_result_component__WEBPACK_IMPORTED_MODULE_7__["AirlineSearchResultComponent"]], styles: ["[_nghost-%COMP%]     .mat-form-field-flex {\n    background-color: #fff;\n}\n\n.traveller-details-icon[_ngcontent-%COMP%]{\n    float: right;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYWdlcy9haXJsaW5lLXNlYXJjaC9haXJsaW5lLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9haXJsaW5lL3BhZ2VzL2FpcmxpbmUtc2VhcmNoL2FpcmxpbmUtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi50cmF2ZWxsZXItZGV0YWlscy1pY29ue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-search',
                templateUrl: './airline-search.component.html',
                styleUrls: ['./airline-search.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _services_airline_offer_service__WEBPACK_IMPORTED_MODULE_5__["AirlineOfferService"] }, { type: _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"] }]; }, { airlineSearchHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_2__["AirlineSearchHeaderComponent"]]
        }] }); })();


/***/ }),

/***/ "MTiZ":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airport-code-search/airport-code-search.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AirportCodeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirportCodeSearchComponent", function() { return AirportCodeSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/airline-retrieve.service */ "1jwl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












const _c0 = ["airportCodeInput"];
function AirportCodeSearchComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function AirportCodeSearchComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirportCodeSearchComponent_input_2_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showAutocomplete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.getAirPortDisplayName(ctx_r1.flight[ctx_r1.field]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r1.getAirPortDisplayName(ctx_r1.flight[ctx_r1.field]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.fontStyle);
} }
function AirportCodeSearchComponent_div_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (option_r8.value || option_r8.name) + "-" + (option_r8.data || option_r8.id || ""), " ");
} }
function AirportCodeSearchComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AirportCodeSearchComponent_div_3_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r9.flight[ctx_r9.field] = $event); })("input", function AirportCodeSearchComponent_div_3_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onSearchChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function AirportCodeSearchComponent_div_3_Template_mat_autocomplete_optionSelected_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.isAutocompleteShown = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AirportCodeSearchComponent_div_3_mat_option_6_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r6)("ngModel", ctx_r2.flight[ctx_r2.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r2.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r2.filteredOptions));
} }
class AirportCodeSearchComponent {
    constructor(loginService, renderer, airlineRetrieveService) {
        this.renderer = renderer;
        this.airlineRetrieveService = airlineRetrieveService;
        this.isLoading = false;
        this.isAutocompleteShown = false;
    }
    ngOnInit() {
        this.filteredOptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            this.searchChangeSubscriber = subscriber;
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), // wait 300ms after the last event before emitting last event
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((airlineCode) => {
            if (this.filter(airlineCode)) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }
            else {
                this.isLoading = true;
                return this.searchAirportSearchService(airlineCode);
            }
        }));
        this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
    }
    ngOnDestroy() {
        this.docClickSubscription();
    }
    onDocumentClick(event) {
        if (event.target.className.indexOf("cdk-overlay-container") != -1) {
            this.hideAutocomplete();
        }
    }
    onSearchChange(searchValue) {
        this.searchChangeSubscriber.next(searchValue);
    }
    searchAirportSearchService(airlineCode) {
        const code = airlineCode.data != null ? airlineCode.data : airlineCode;
        return this.airlineRetrieveService.searchAirport(code)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            this.isLoading = false;
            return data.suggestions;
        }));
    }
    displayFn(airport) {
        return airport && airport.data ? airport.data : (airport && airport.name ? airport.name : '');
    }
    getAirPortDisplayName(suggestion) {
        const value = suggestion ? suggestion.value || suggestion.name || '' : '';
        const data = suggestion ? suggestion.data || suggestion.id || '' : '';
        if (value == '' && data == '') {
            return 'Please Select';
        }
        else {
            const AirPortDisplayName = value + '(' + data + ')';
            return AirPortDisplayName;
        }
    }
    filter(airlineCode) {
        if (airlineCode == '' || airlineCode == null) {
            return true;
        }
        else if (airlineCode.data != null) {
            return false;
        }
        else if (airlineCode.length >= 1) {
            return false;
        }
        else {
            return true;
        }
    }
    showAutocomplete() {
        this.isAutocompleteShown = true;
        setTimeout(() => {
            this.airportCodeInput.first.nativeElement.focus();
        }, 10);
    }
    hideAutocomplete() {
        this.isAutocompleteShown = false;
    }
}
AirportCodeSearchComponent.ɵfac = function AirportCodeSearchComponent_Factory(t) { return new (t || AirportCodeSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_4__["AirlineRetrieveService"])); };
AirportCodeSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirportCodeSearchComponent, selectors: [["airport-code-search"]], viewQuery: function AirportCodeSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.airportCodeInput = _t);
    } }, inputs: { flight: "flight", field: "field", isSubmitted: "isSubmitted", fontStyle: "fontStyle", label: "label", showLabel: "showLabel" }, decls: 4, vars: 3, consts: [[1, "searchContent"], ["class", "search_lbl text-dark-50 pb-2 to", 4, "ngIf"], ["class", "search_inputField text-truncate", "type", "text", 3, "ngClass", "value", "title", "click", 4, "ngIf"], ["class", "lessMtlr", 4, "ngIf"], [1, "search_lbl", "text-dark-50", "pb-2", "to"], ["type", "text", 1, "search_inputField", "text-truncate", 3, "ngClass", "value", "title", "click"], [1, "lessMtlr"], ["appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", 3, "matAutocomplete", "ngModel", "ngModelChange", "input"], ["airportCodeInput", ""], [3, "displayWith", "optionSelected"], ["autoTo", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AirportCodeSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirportCodeSearchComponent_span_1_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AirportCodeSearchComponent_input_2_Template, 1, 3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirportCodeSearchComponent_div_3_Template, 8, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAutocompleteShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAutocompleteShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFydGlhbHMvYWlycG9ydC1jb2RlLXNlYXJjaC9haXJwb3J0LWNvZGUtc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirportCodeSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'airport-code-search',
                templateUrl: './airport-code-search.component.html',
                styleUrls: ['./airport-code-search.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_4__["AirlineRetrieveService"] }]; }, { flight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSubmitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fontStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], airportCodeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['airportCodeInput']
        }] }); })();


/***/ }),

/***/ "Pzxz":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/airline/services/airline-flight.service.ts ***!
  \************************************************************************/
/*! exports provided: AirlineFlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineFlightService", function() { return AirlineFlightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline_datetime_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airline-datetime.service */ "TGhc");



class AirlineFlightService {
    constructor(airlineDatetimeService) {
        this.airlineDatetimeService = airlineDatetimeService;
    }
    createFlightViewModel(flightSegments, fareComponent) {
        let segments = flightSegments.map((item) => this.createFlightSegment(item, fareComponent));
        let totalDays = this.airlineDatetimeService.getTotalDays(segments);
        let popUpMessage = "";
        let flightDuration = this.airlineDatetimeService.getTotalTravelTime(segments);
        let numberOfStops = flightSegments.length === 1 ? "Nonstop" : `${flightSegments.length - 1} Stop(s)`;
        if (flightSegments.length > 1) {
            let departureStops = [];
            let popUpMessageElement = [];
            for (let i = 1; i < segments.length; i++) {
                const flightSegment = segments[i];
                const pFlightSegment = segments[i - 1];
                departureStops.push(flightSegment.departureAirportCode);
                flightSegment.layover = this.airlineDatetimeService.getTimeDiff(pFlightSegment, flightSegment);
                let message = pFlightSegment.departureAirportCode + " | " + this.airlineDatetimeService.getTimeDiff(pFlightSegment, flightSegment) + " Layover " + pFlightSegment.arrivalAirportCode + " | ";
                popUpMessageElement.push(message);
            }
            numberOfStops = numberOfStops + " via " + departureStops.join(", ");
            popUpMessage = popUpMessageElement.join(" ") + segments[segments.length - 1].arrivalAirportCode + "\n" + numberOfStops;
        }
        let vm = {
            departureAirportCode: flightSegments[0].departure.airportCode.value,
            arrivalAirportCode: flightSegments[flightSegments.length - 1].arrival.airportCode.value,
            departureTime: flightSegments[0].departure.time,
            arrivalTime: flightSegments[flightSegments.length - 1].arrival.time,
            numberOfStops: numberOfStops,
            departureAirportName: flightSegments[0].departure.airportName,
            arrivalAirportName: flightSegments[flightSegments.length - 1].arrival.airportName,
            departureDate: flightSegments[0].departure.date,
            arrivalDate: flightSegments[flightSegments.length - 1].arrival.date,
            flightDuration: flightDuration,
            flightSegments: segments,
            popUpMessage: popUpMessage,
            totalDays: totalDays,
        };
        return vm;
    }
    createFlightSegment(segment, fareComponent) {
        var _a, _b;
        let flightDuration = this.airlineDatetimeService.flightDuration(segment.flightDetail.flightDuration.value);
        let rules = fareComponent ? this.getPriceRules([fareComponent]) : null;
        let vm = {
            flightRules: rules,
            airlineID: segment.marketingCarrier.airlineID.value,
            flightNumber: segment.marketingCarrier.flightNumber.value,
            aircraftName: segment.equipment.name.replace(/Passenger /g, '').replace(/ Passenger/g, ''),
            departureAirportCode: segment.departure.airportCode.value,
            arrivalAirportCode: segment.arrival.airportCode.value,
            departureDate: segment.departure.date,
            departureTime: segment.departure.time,
            departureAirportName: segment.departure.airportName,
            departureTerminal: (_a = segment.departure.terminal) === null || _a === void 0 ? void 0 : _a.name,
            arrivalDate: segment.arrival.date,
            arrivalTime: segment.arrival.time,
            arrivalAirportName: segment.arrival.airportName,
            arrivalTerminal: (_b = segment.arrival.terminal) === null || _b === void 0 ? void 0 : _b.name,
            airlineName: segment.marketingCarrier.name,
            segmentKey: segment.segmentKey,
            flightDuration: flightDuration.hours + "H " + flightDuration.minutes + "M",
        };
        return vm;
    }
    getPriceRules(fareComponents = []) {
        return fareComponents.map(({ segmentRefs, fareRules, fareBasis }) => {
            var _a, _b;
            let fareCode = fareBasis.fareBasisCode.refs[0].fare.fareCode;
            const instructions = fareRules.penalty.details.detail.filter(item => item.refs).map(({ refs }) => {
                const [refInfo] = refs;
                const [instructionInfo] = refInfo.values.value;
                return {
                    name: refInfo.ruleID.value,
                    info: instructionInfo.instruction.value,
                };
            });
            let rule = {
                segmentRefs: segmentRefs,
                fareCode: fareCode,
                allowCancel: ((_a = instructions.find(i => i.name === "Cancel")) === null || _a === void 0 ? void 0 : _a.info) === "Allowed",
                allowChange: ((_b = instructions.find(i => i.name === "Change")) === null || _b === void 0 ? void 0 : _b.info) === "Allowed",
                other: instructions.filter(i => i.name !== "Cancel" && i.name !== "Change")
            };
            return rule;
        });
    }
}
AirlineFlightService.ɵfac = function AirlineFlightService_Factory(t) { return new (t || AirlineFlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_datetime_service__WEBPACK_IMPORTED_MODULE_1__["AirlineDatetimeService"])); };
AirlineFlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirlineFlightService, factory: AirlineFlightService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineFlightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _airline_datetime_service__WEBPACK_IMPORTED_MODULE_1__["AirlineDatetimeService"] }]; }, null); })();


/***/ }),

/***/ "QsbY":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airport-search-date/airport-search-date.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AirportSearchDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirportSearchDateComponent", function() { return AirportSearchDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









const _c0 = ["datepicker"];
function AirportSearchDateComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.label, " ");
} }
function AirportSearchDateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirportSearchDateComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showPicker(ctx_r3.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.fontStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r1.flight[ctx_r1.field], "dd MMM yyyy"), " ");
} }
function AirportSearchDateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirportSearchDateComponent_div_3_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r5.open(); })("ngModelChange", function AirportSearchDateComponent_div_3_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r8.flight[ctx_r8.field] = $event); })("dateChange", function AirportSearchDateComponent_div_3_Template_input_dateChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hidePicker(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-datepicker-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r2.minDate)("max", ctx_r2.maxDate)("errorStateMatcher", ctx_r2.errorMatcher)("matDatepicker", _r5)("ngModel", ctx_r2.flight[ctx_r2.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);
} }
class AirportSearchDateComponent extends _airline__WEBPACK_IMPORTED_MODULE_1__["Airline"] {
    constructor(loginService, renderer) {
        super(loginService);
        this.renderer = renderer;
    }
    ngOnInit() {
        this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
    }
    showPicker() {
        let self = this;
        this.isDateEditorShown = true;
        setTimeout(() => self.datepicker.open(), 100);
    }
    hidePicker() {
        this.isDateEditorShown = false;
    }
    ngOnDestroy() {
        this.docClickSubscription();
    }
    onDocumentClick(event) {
        if (event.target.className.indexOf("mat-calendar-body-cell-content") != -1) {
            this.hidePicker();
        }
        else if (event.target.className.indexOf("cdk-overlay-backdrop") != -1) {
            this.hidePicker();
        }
    }
}
AirportSearchDateComponent.ɵfac = function AirportSearchDateComponent_Factory(t) { return new (t || AirportSearchDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AirportSearchDateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirportSearchDateComponent, selectors: [["app-airport-search-date"]], viewQuery: function AirportSearchDateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datepicker = _t.first);
    } }, inputs: { minDate: "minDate", maxDate: "maxDate", flight: "flight", field: "field", showLabel: "showLabel", label: "label", fontStyle: "fontStyle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[1, "searchContent", 3, "click"], ["class", "search_lbl text-dark-50 pb-2 from", 4, "ngIf"], ["class", "search_inputField text-truncate", 3, "ngClass", "click", 4, "ngIf"], ["class", "lessMtlr", 4, "ngIf"], [1, "search_lbl", "text-dark-50", "pb-2", "from"], [1, "far", "fa-calendar-alt", "text-primary"], [1, "search_inputField", "text-truncate", 3, "ngClass", "click"], [1, "lessMtlr"], ["appearance", "outline", 1, "w-100"], ["matInput", "", 3, "min", "max", "errorStateMatcher", "matDatepicker", "ngModel", "click", "ngModelChange", "dateChange"], ["matSuffix", "", 3, "for"], ["datepicker", ""]], template: function AirportSearchDateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirportSearchDateComponent_Template_div_click_0_listener() { return ctx.showPicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirportSearchDateComponent_span_1_Template, 3, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AirportSearchDateComponent_div_2_Template, 3, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirportSearchDateComponent_div_3_Template, 6, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDateEditorShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDateEditorShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepicker"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFydGlhbHMvYWlycG9ydC1zZWFyY2gtZGF0ZS9haXJwb3J0LXNlYXJjaC1kYXRlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirportSearchDateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airport-search-date',
                templateUrl: './airport-search-date.component.html',
                styleUrls: ['./airport-search-date.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['datepicker']
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fontStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RTrV":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/airline/services/airline-change-order.service.ts ***!
  \******************************************************************************/
/*! exports provided: AirlineChangeOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineChangeOrderService", function() { return AirlineChangeOrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _airline_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./airline-order.service */ "utjK");
/* harmony import */ var _airline_seat_availability_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./airline-seat-availability.service */ "hQt1");
/* harmony import */ var _airline_passenger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./airline-passenger.service */ "TPXw");
/* harmony import */ var _airline_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./airline-error.service */ "z3KZ");
/* harmony import */ var src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/array-helper.service */ "zPlH");









class AirlineChangeOrderService {
    constructor(airlineOrderService, seatAvailabilityService, passengerService, errorService, arrayHelperService) {
        this.airlineOrderService = airlineOrderService;
        this.seatAvailabilityService = seatAvailabilityService;
        this.passengerService = passengerService;
        this.errorService = errorService;
        this.arrayHelperService = arrayHelperService;
        this.changes = [];
    }
    addChange(type, orderID) {
        let label = "";
        switch (type) {
            case 'ChangeFlight': {
                label = "Flights changed";
                this.clearSeatAvailabilityChanges(orderID);
                this.clearChangeFlightChanges(orderID);
                break;
            }
            case 'ChangePassengerInfo': {
                label = "Passenger information changed";
                this.clearPassengerChanges(orderID);
                break;
            }
            case 'SeatAvailability': {
                label = "Seats changed";
                this.clearSeatAvailabilityChanges(orderID);
                break;
            }
        }
        this.changes.push({ type: type, orderID: orderID, label: label });
    }
    acceptChanges(orderID, orderViewModel) {
        let orderChanges = this.changes.filter(i => i.orderID == orderID);
        if (orderChanges.length) {
            this.errorService.hideErrors();
            this.arrayHelperService.sortBy(orderChanges, [i => ["ChangeFlight", "SeatAvailability", "ChangePassengerInfo"].indexOf(i.type)]);
            let observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(orderChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(change => this.getChangeAction(change, orderID, orderViewModel))
            // switchMap(data => this.catchFailResponse(data, url, query, skipHideLoader)),
            // catchError(e => this.handleError(e))
            );
            return observable;
        }
    }
    getChangeAction(change, orderID, orderViewModel) {
        switch (change.type) {
            case "ChangeFlight": {
                return this.airlineOrderService.acceptReshop(orderID, orderViewModel);
            }
            case "SeatAvailability": {
                return this.seatAvailabilityService.bookSelectedSeats(orderID, orderViewModel);
            }
            case "ChangePassengerInfo": {
                return this.passengerService.diffAndSaveChanges(orderID, orderViewModel);
            }
        }
    }
    clearChanges(orderID, orderViewModel) {
        this.changes = this.arrayHelperService.removeMatching(this.changes, i => i.orderID == orderID);
        orderViewModel.changedOrder = null;
        orderViewModel.changedPassengerList = null;
        orderViewModel.passengers.forEach(i => i.orderSummary.selectedSeats = this.arrayHelperService.removeMatching(i.orderSummary.selectedSeats, s => s.seat.offerItemID != null));
    }
    clearChangeFlightChanges(orderID) {
        this.changes = this.arrayHelperService.removeMatching(this.changes, i => i.orderID == orderID && i.type === "ChangeFlight");
    }
    clearSeatAvailabilityChanges(orderID) {
        this.changes = this.arrayHelperService.removeMatching(this.changes, i => {
            return i.orderID == orderID && i.type === "SeatAvailability";
        });
    }
    clearPassengerChanges(orderID) {
        this.changes = this.arrayHelperService.removeMatching(this.changes, i => i.orderID == orderID && i.type === "ChangePassengerInfo");
    }
    anyChanges(orderID) {
        return this.changes.filter(i => i.orderID == orderID).length > 0;
    }
    viewOrderChanges(orderID) {
        return this.changes.filter(i => i.orderID == orderID);
    }
}
AirlineChangeOrderService.ɵfac = function AirlineChangeOrderService_Factory(t) { return new (t || AirlineChangeOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_order_service__WEBPACK_IMPORTED_MODULE_3__["AirlineOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_seat_availability_service__WEBPACK_IMPORTED_MODULE_4__["AirlineSeatAvailabilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_passenger_service__WEBPACK_IMPORTED_MODULE_5__["AirlinePassengerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_error_service__WEBPACK_IMPORTED_MODULE_6__["AirlineErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_7__["ArrayHelperService"])); };
AirlineChangeOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirlineChangeOrderService, factory: AirlineChangeOrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineChangeOrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _airline_order_service__WEBPACK_IMPORTED_MODULE_3__["AirlineOrderService"] }, { type: _airline_seat_availability_service__WEBPACK_IMPORTED_MODULE_4__["AirlineSeatAvailabilityService"] }, { type: _airline_passenger_service__WEBPACK_IMPORTED_MODULE_5__["AirlinePassengerService"] }, { type: _airline_error_service__WEBPACK_IMPORTED_MODULE_6__["AirlineErrorService"] }, { type: src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_7__["ArrayHelperService"] }]; }, null); })();


/***/ }),

/***/ "SVyy":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/airline/services/airline-offer.service.ts ***!
  \***********************************************************************/
/*! exports provided: AirlineOfferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineOfferService", function() { return AirlineOfferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline_datetime_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airline-datetime.service */ "TGhc");
/* harmony import */ var _airline_passenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airline-passenger.service */ "TPXw");
/* harmony import */ var _airline_flight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./airline-flight.service */ "Pzxz");
/* harmony import */ var _airline_fare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./airline-fare.service */ "aN7V");
/* harmony import */ var _airline_retrieve_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./airline-retrieve.service */ "1jwl");
/* harmony import */ var src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/array-helper.service */ "zPlH");








class AirlineOfferService {
    constructor(airlineDatetimeService, passengerService, airlineFlightService, airlineFareService, airlineRetrieveService, arrayHelperService) {
        this.airlineDatetimeService = airlineDatetimeService;
        this.passengerService = passengerService;
        this.airlineFlightService = airlineFlightService;
        this.airlineFareService = airlineFareService;
        this.airlineRetrieveService = airlineRetrieveService;
        this.arrayHelperService = arrayHelperService;
        this.sortByCabinTypeAndPrice = [
            el => ["Economy", "First Class"].indexOf(el.cabinType),
            el => el.totalPrice,
        ];
    }
    findOffers(airlineSearch) {
        let passengers = [];
        this.arrayHelperService.groupBy(airlineSearch.travellers, k => k.ptc).forEach(group => {
            group.value.forEach((el, idx) => {
                passengers.push({ passengerID: this.passengerService.titleByPtc(group.key, idx + 1), ptc: group.key });
            });
        });
        let query = {
            Flights: [],
            Passengers: this.passengerService.setLoyaltyProgramPassengers(passengers, airlineSearch)
        };
        airlineSearch.flights.forEach((item) => {
            let departureAirportCode = item.from.data || item.from.id || item.from;
            let arrivalAirportCode = item.to.data || item.to.id || item.to;
            let departureDate = this.airlineDatetimeService.truncateTime(item.departureDate);
            query.Flights.push({
                "departure": {
                    airportCode: {
                        value: departureAirportCode
                    },
                    date: departureDate,
                },
                "arrival": {
                    airportCode: {
                        value: arrivalAirportCode
                    }
                }
            });
        });
        return this.airlineRetrieveService.searchAirlines(query);
    }
    getPricedOffer(searchResult) {
        let offer = {
            offerItem: [],
            offerID: searchResult.selectedOffer.offerID,
            owner: searchResult.selectedOffer.originalOffer.owner,
            responseID: searchResult.responseID
        };
        let offerQuery = {
            "query": {
                "offer": []
            },
            "dataLists": {
                "passengerList": {
                    "passenger": []
                },
            }
        };
        let passengers = [];
        this.arrayHelperService.groupBy(searchResult.airlineSearch.travellers, k => k.ptc).forEach(group => {
            let offerItem = {
                offerItemID: searchResult.selectedOffer.offerID + "-" + (offer.offerItem.length + 1),
                passengerRefs: []
            };
            group.value.forEach((el, idx) => {
                let passengerObj = {
                    ptc: group.key,
                    passengerID: this.passengerService.titleByPtc(group.key, idx + 1)
                };
                passengers.push(passengerObj);
                offerItem.passengerRefs.push(passengerObj.passengerID);
            });
            offer.offerItem.push(offerItem);
        });
        offerQuery.dataLists.passengerList.passenger = passengers;
        offerQuery.query.offer.push(offer);
        return this.airlineRetrieveService.getOfferPrice(offerQuery);
    }
    groupReshopOffers(reshopOffers, timeFormat) {
        let list = this.arrayHelperService.groupBy(reshopOffers, (k) => k.flightsOverview.flightRef.map(fl => fl.value.flightKey).join(''), (val) => val, (group) => {
            return {
                flightList: group[0].flightsOverview.flightRef.map(i => this.airlineFlightService.createFlightViewModel(i.value.segmentReferences.value)),
                flightFares: this.arrayHelperService.sortBy(group.map(i => this.airlineFareService.flightFareFromReshop(i)), this.sortByCabinTypeAndPrice)
            };
        }).map(i => ({
            key: i.key,
            flightFares: i.total.flightFares,
            flightList: i.total.flightList,
        }));
        if (timeFormat === '12') {
            this.changeFlightTimeFormat(list, timeFormat);
        }
        list = list.sort((a, b) => a.flightFares[0].totalPrice - b.flightFares[0].totalPrice);
        return list;
    }
    groupOffersByFlights(offersWithDetails, timeFormat) {
        let list = this.arrayHelperService.groupBy(offersWithDetails, (key) => key.flightsPlusSegments.map((segment) => segment.flight.flightKey).join(''), (val) => val, (group) => {
            return {
                flightList: group[0].flightsPlusSegments.map(i => this.airlineFlightService.createFlightViewModel(i.flight.segmentReferences.value)),
                flightFares: this.arrayHelperService.sortBy(group.map(i => this.airlineFareService.flightFareFromOffer(i)), this.sortByCabinTypeAndPrice),
            };
        }).map(i => ({
            key: i.key,
            flightFares: i.total.flightFares,
            flightList: i.total.flightList,
        }));
        if (timeFormat === '12') {
            this.changeFlightTimeFormat(list, timeFormat);
        }
        list = list.sort((a, b) => a.flightFares[0].totalPrice - b.flightFares[0].totalPrice);
        return list;
    }
    changeFlightTimeFormat(data, timeFormat) {
        data.forEach(group => group.flightList.forEach(flight => {
            flight.departureTime = this.airlineDatetimeService.changeTimeFormat(flight.departureTime, timeFormat);
            flight.arrivalTime = this.airlineDatetimeService.changeTimeFormat(flight.arrivalTime, timeFormat);
            if (flight.flightSegments && flight.flightSegments.length) {
                flight.flightSegments.forEach(segment => {
                    segment.departureTime = this.airlineDatetimeService.changeTimeFormat(segment.departureTime, timeFormat);
                    segment.arrivalTime = this.airlineDatetimeService.changeTimeFormat(segment.arrivalTime, timeFormat);
                });
            }
        }));
    }
    getPricedOfferViewModel(data) {
        return this.getOfferViewModel(data.pricedOffer.offerItem, data.dataLists, data.shoppingResponseID.responseID.value, data.pricedOffer.owner, data.pricedOffer.offerID);
    }
    getReshopOfferViewModel(offer, dataLists, responseID) {
        return this.getOfferViewModel(offer.addOfferItem, dataLists, responseID, offer.owner, offer.offerID);
    }
    getOfferViewModel(offerItems, dataLists, responseID, owner, offerID) {
        let flights = this.airlineFareService.getFlightList(offerItems[0].fareDetail[0].fareComponent);
        let passengers = dataLists.passengerList.passenger.map(i => this.getPassengerViewModel(i, offerItems));
        let viewModel = {
            dataLists: dataLists,
            responseID: responseID,
            offerID: offerID,
            owner: owner,
            flights: flights,
            passengers: passengers,
            offerItems: offerItems
        };
        if (passengers.length) {
            passengers[0].showDetails = true;
        }
        return viewModel;
    }
    getPassengerViewModel(passenger, offerItems) {
        let fare = this.getPassengerFlightFare(passenger, offerItems);
        let result = {
            data: passenger,
            label: passenger.passengerID,
            orderSummary: {
                fare: fare,
                selectedSeats: []
            }
        };
        return result;
    }
    getPassengerFlightFare(passenger, offerItems) {
        let offerItem = offerItems.find(i => i.fareDetail && i.fareDetail[0].passengerRefs.value.find(p => p.passengerID == passenger.passengerID));
        let vm = null;
        if (offerItem) {
            vm = this.airlineFareService.fromPricedOfferItem(offerItem);
        }
        return vm;
    }
}
AirlineOfferService.ɵfac = function AirlineOfferService_Factory(t) { return new (t || AirlineOfferService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_datetime_service__WEBPACK_IMPORTED_MODULE_1__["AirlineDatetimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_passenger_service__WEBPACK_IMPORTED_MODULE_2__["AirlinePassengerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_flight_service__WEBPACK_IMPORTED_MODULE_3__["AirlineFlightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_fare_service__WEBPACK_IMPORTED_MODULE_4__["AirlineFareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_5__["AirlineRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_6__["ArrayHelperService"])); };
AirlineOfferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirlineOfferService, factory: AirlineOfferService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineOfferService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _airline_datetime_service__WEBPACK_IMPORTED_MODULE_1__["AirlineDatetimeService"] }, { type: _airline_passenger_service__WEBPACK_IMPORTED_MODULE_2__["AirlinePassengerService"] }, { type: _airline_flight_service__WEBPACK_IMPORTED_MODULE_3__["AirlineFlightService"] }, { type: _airline_fare_service__WEBPACK_IMPORTED_MODULE_4__["AirlineFareService"] }, { type: _airline_retrieve_service__WEBPACK_IMPORTED_MODULE_5__["AirlineRetrieveService"] }, { type: src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_6__["ArrayHelperService"] }]; }, null); })();


/***/ }),

/***/ "TGhc":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/airline/services/airline-datetime.service.ts ***!
  \**************************************************************************/
/*! exports provided: AirlineDatetimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineDatetimeService", function() { return AirlineDatetimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AirlineDatetimeService {
    constructor() { }
    truncateTime(datetime) {
        if (datetime == null) {
            datetime = new Date();
        }
        else {
            datetime = new Date(datetime);
            var userTimezoneOffset = datetime.getTimezoneOffset() * 60000;
            datetime = new Date(datetime.getTime() - userTimezoneOffset);
            // time = new Date(time)  
        }
        const timeStr = datetime.toISOString();
        return timeStr.substring(0, timeStr.lastIndexOf('T')) + 'T00:00:00';
    }
    flightDuration(val) {
        let regex = new RegExp(/(?<hours>\d+)H(\s)*(?<minutes>\d+)M/gi);
        let result = regex.exec(val);
        return { hours: Number(result.groups['hours']), minutes: Number(result.groups['minutes']) };
    }
    getTotalTravelTime(flightSegments) {
        // total = sum('flight duration') + sum('pause between flights')
        let totalInSeconds = 0;
        // flight duration 
        flightSegments.forEach(i => {
            let duration = this.flightDuration(i.flightDuration);
            let durationInSeconds = duration.hours * 3600 + duration.minutes * 60;
            totalInSeconds += durationInSeconds;
        });
        // pause between flights
        for (let i = 1; i < flightSegments.length; i++) {
            let pFlightSegment = flightSegments[i - 1];
            let flightSegment = flightSegments[i];
            const arrivalTime = new Date(pFlightSegment.arrivalDate + "T" + pFlightSegment.arrivalTime);
            const nextDepartureTime = new Date(flightSegment.departureDate + "T" + flightSegment.departureTime);
            const timeMS = nextDepartureTime.getTime() - arrivalTime.getTime();
            totalInSeconds += timeMS / 1000;
        }
        const hours = Math.floor(totalInSeconds / 3600);
        const minutes = (Math.floor(totalInSeconds / (60)) % 60);
        return hours + "H " + minutes + "M";
    }
    getTotalDays(flightSegments) {
        const firstFlightSegment = flightSegments[0];
        const lastFlightSegment = flightSegments.length > 1 ? flightSegments[flightSegments.length - 1] : flightSegments[0];
        return this.getDayDiff(firstFlightSegment.departureDate, lastFlightSegment.arrivalDate);
    }
    getDayDiff(startDateStr, endDateStr) {
        const startDate = new Date(startDateStr);
        const endDate = new Date(endDateStr);
        const timeMS = endDate.getTime() - startDate.getTime();
        const days = Math.floor(timeMS / (60 * 60 * 1000 * 24));
        return days;
    }
    getTimeDiff(pFlightSegment, flightSegment) {
        const pFlightSegmentDate = new Date(pFlightSegment.arrivalDate + "T" + pFlightSegment.arrivalTime + ":00");
        const flightSegmentDate = new Date(flightSegment.departureDate + "T" + flightSegment.departureTime + ":00");
        var diff = flightSegmentDate.getTime() - pFlightSegmentDate.getTime();
        return this.msToTime(diff);
    }
    msToTime(duration) {
        let seconds = Math.floor((duration / 1000) % 60);
        let minutes = Math.floor((duration / (1000 * 60)) % 60);
        let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        //return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
        if (parseInt(hours) == 0) {
            return minutes + "M";
        }
        else {
            return hours + "H " + minutes + "M";
        }
    }
    changeTimeFormat(time, timeFormat) {
        return timeFormat == '12' ? this.changeTimeFormatTo12(time) : this.changeTimeFormatTo24(time);
    }
    changeTimeFormatTo12(time) {
        const match = (time || '').match(/^([0-9]{1,2}):([0-9]{1,2})$/);
        if (!match) {
            console.log(`Invalid 24-time value: ${time}`);
            return time;
        }
        let hour = parseInt(match[1]);
        const amOrPm = hour >= 12 ? 'pm' : 'am';
        hour = (hour % 12) || 12;
        return `${hour}:${match[2]} ${amOrPm}`;
    }
    changeTimeFormatTo24(time) {
        const match = (time || '').match(/^([0-9]{1,2}):([0-9]{1,2}) (am|pm)$/i);
        if (!match) {
            console.log(`Invalid 12-time value: ${time}`);
            return time;
        }
        let [_, hour, minute, amOrPm] = match;
        if (hour === '12') {
            hour = '00';
        }
        if (amOrPm.toLowerCase() === 'pm') {
            hour = (parseInt(hour) + 12).toString();
        }
        return `${hour}:${minute}`;
    }
}
AirlineDatetimeService.ɵfac = function AirlineDatetimeService_Factory(t) { return new (t || AirlineDatetimeService)(); };
AirlineDatetimeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirlineDatetimeService, factory: AirlineDatetimeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineDatetimeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TPXw":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/airline/services/airline-passenger.service.ts ***!
  \***************************************************************************/
/*! exports provided: AirlinePassengerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlinePassengerService", function() { return AirlinePassengerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _airline_retrieve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airline-retrieve.service */ "1jwl");




class AirlinePassengerService {
    constructor(airlineRetrieveService) {
        this.airlineRetrieveService = airlineRetrieveService;
        this.empty = "NA";
        this.supportedPtcs = [{
                ptcCode: "ADT",
                ageFrom: 16,
                ageTo: 64,
                title: "Adult"
            }, {
                ptcCode: "CNN",
                ageFrom: 2,
                ageTo: 15,
                title: "Child"
            }, {
                ptcCode: "INS",
                ageFrom: null,
                ageTo: 2,
                title: "Infant"
            }, {
                ptcCode: "SRC",
                ageFrom: 65,
                ageTo: null,
                title: "Senior"
            }];
    }
    diffAndSaveChanges(orderID, orderViewModel) {
        let newPassengers = orderViewModel.changedPassengerList.passenger;
        let namePassengerServicing = [];
        let otherPassengerServicing = [];
        let oldPassengers = orderViewModel.passengers;
        newPassengers.forEach(p => {
            let newPassenger = p;
            let oldPassenger = oldPassengers.find(i => i.data.passengerID == newPassenger.passengerID).data;
            this.updatePassengerBeforeSending(newPassenger);
            this.updatePassengerBeforeSending(oldPassenger);
            if (oldPassenger.individual.givenName != newPassenger.individual.givenName || oldPassenger.individual.middleName != newPassenger.individual.middleName ||
                oldPassenger.individual.nameTitle != newPassenger.individual.nameTitle || oldPassenger.individual.surname != newPassenger.individual.surname) {
                namePassengerServicing.push({
                    new: {
                        passengerID: newPassenger.passengerID,
                        individual: {
                            nameTitle: newPassenger.individual.nameTitle,
                            givenName: newPassenger.individual.givenName,
                            middleName: newPassenger.individual.middleName,
                            surname: newPassenger.individual.surname
                        },
                        actionType: "name"
                    },
                    previous: {
                        passengerID: oldPassenger.passengerID,
                        individual: {
                            nameTitle: oldPassenger.individual.nameTitle,
                            givenName: oldPassenger.individual.givenName,
                            middleName: oldPassenger.individual.middleName,
                            surname: oldPassenger.individual.surname
                        },
                        actionType: "name"
                    }
                });
            }
            if (oldPassenger.individual.birthdate != newPassenger.individual.birthdate || oldPassenger.individual.gender != newPassenger.individual.gender) {
                otherPassengerServicing.push({
                    new: {
                        passengerID: newPassenger.passengerID,
                        individual: {
                            surname: newPassenger.individual.surname,
                            gender: newPassenger.individual.gender,
                            birthdate: newPassenger.individual.birthdate
                        },
                        actionType: "other"
                    },
                    previous: {
                        passengerID: oldPassenger.passengerID,
                        individual: {
                            surname: newPassenger.individual.surname,
                            gender: oldPassenger.individual.gender,
                            birthdate: oldPassenger.individual.birthdate
                        },
                        actionType: "other"
                    }
                });
            }
        });
        let changeNamesQuery = {
            query: {
                orderID: orderID,
                passengerServicing: namePassengerServicing
            }
        };
        let otherChangeQuery = {
            query: {
                orderID: orderID,
                passengerServicing: otherPassengerServicing
            }
        };
        if (namePassengerServicing.length && otherPassengerServicing.length) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(this.airlineRetrieveService.orderChange(changeNamesQuery, "Changing passenger details...", true), this.airlineRetrieveService.orderChange(otherChangeQuery, "Changing passenger details...", true));
        }
        else if (namePassengerServicing.length) {
            return this.airlineRetrieveService.orderChange(changeNamesQuery, "Changing passenger details...", true);
        }
        else if (otherPassengerServicing.length) {
            return this.airlineRetrieveService.orderChange(otherChangeQuery, "Changing passenger details...", true);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
    }
    getSupportedPtcs() {
        return this.supportedPtcs.map(i => i.ptcCode);
    }
    getAdult() {
        let adult = this.supportedPtcs.find(i => i.ptcCode == "ADT");
        let copy = JSON.parse(JSON.stringify(adult));
        return copy;
    }
    titleByPtc(ptcCode, index) {
        let title = this.supportedPtcs.find(i => i.ptcCode == ptcCode).title;
        if (index) {
            title += "-" + index;
        }
        return title;
    }
    getPassengerLabel(passenger) {
        return passenger.passengerID;
    }
    getPtcLabel(ptcCode) {
        let ptc = this.supportedPtcs.find(i => i.ptcCode == ptcCode);
        let label = ptc.title;
        if (ptc.ageTo && ptc.ageFrom) {
            label += ` (${ptc.ageFrom}-${ptc.ageTo})`;
        }
        if (ptc.ageFrom && !ptc.ageTo) {
            label += ` (${ptc.ageFrom}+)`;
        }
        if (!ptc.ageFrom && ptc.ageTo) {
            label += ` (under ${ptc.ageTo})`;
        }
        return label;
    }
    getTotal(ptcCount) {
        let total = 0;
        this.supportedPtcs.forEach(ptc => {
            var _a;
            total += (_a = ptcCount.ptcCount[ptc.ptcCode]) !== null && _a !== void 0 ? _a : 0;
        });
        return total;
    }
    updatePassengerAfterReceiving(p) {
        if (p.individual.middleName && p.individual.middleName.length && p.individual.middleName[0] == this.empty) {
            p.individual.middleName = [""];
        }
    }
    updatePassengerBeforeSending(p) {
        if (p.contactInfoRef) {
            p.contactInfoRef = (p.contactInfoRef.contactID || p.contactInfoRef);
        }
        if (p.individual.middleName && (!p.individual.middleName.length || (p.individual.middleName.length === 1 && p.individual.middleName[0].trim() === ""))) {
            p.individual.middleName = [this.empty];
        }
    }
    setLoyaltyProgramPassengers(passengers, airlineSearch) {
        if (!(airlineSearch.loyaltyAccountNumber) && airlineSearch.isLoyaltyAccountEnabled) {
            passengers.forEach(passenger => {
                passenger.loyaltyProgramAccount = [
                    {
                        "airline": {
                            "airlineDesignator": "AA"
                        },
                        "accountNumber": airlineSearch.loyaltyAccountNumber
                    }
                ];
            });
        }
        else {
            passengers.forEach(passenger => {
                delete passenger.loyaltyProgramAccount;
            });
        }
        return passengers;
    }
}
AirlinePassengerService.ɵfac = function AirlinePassengerService_Factory(t) { return new (t || AirlinePassengerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_2__["AirlineRetrieveService"])); };
AirlinePassengerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirlinePassengerService, factory: AirlinePassengerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlinePassengerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _airline_retrieve_service__WEBPACK_IMPORTED_MODULE_2__["AirlineRetrieveService"] }]; }, null); })();


/***/ }),

/***/ "Xdau":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-search-result/airline-search-result.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AirlineSearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineSearchResultComponent", function() { return AirlineSearchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../animations */ "Ql4B");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _enums_flight_fare_price_info_view_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/flight-fare-price-info-view.enum */ "cM4w");
/* harmony import */ var _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/airline-loader.service */ "qVcs");
/* harmony import */ var _services_airline_offer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/airline-offer.service */ "SVyy");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/storage/local-storage */ "ADqn");
/* harmony import */ var _airline_loader_airline_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../airline-loader/airline-loader.component */ "LSaV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _airline_flight_item_airline_flight_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../airline-flight-item/airline-flight-item.component */ "cQZ/");
/* harmony import */ var _airline_flight_fare_info_airline_flight_fare_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../airline-flight-fare-info/airline-flight-fare-info.component */ "dKJ1");
/* harmony import */ var _shared_directives_var_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/directives/var.directive */ "TSMZ");














function AirlineSearchResultComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No Flights Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " No flights found on this route for the requested date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineSearchResultComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Time format:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AirlineSearchResultComponent_div_4_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeFlightsTimeFormat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "12-hour am/pm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AirlineSearchResultComponent_div_4_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeFlightsTimeFormat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "24-hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.searchResult.timeFormat == 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.searchResult.timeFormat == 24);
} }
function AirlineSearchResultComponent_div_5_div_11_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 41);
} }
const _c0 = function (a0) { return { fare: a0 }; };
function AirlineSearchResultComponent_div_5_div_11_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineSearchResultComponent_div_5_div_11_div_19_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const flightFare_r13 = ctx.$implicit; const groupFlight_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.selectFare(groupFlight_r10, flightFare_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-airline-flight-fare-info", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightFare_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r12.searchResult.selectedOffer && flightFare_r13 == ctx_r12.selectedFare ? "bg-primary text-white" : "bg-hover-primary text-hover-white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightFare_r13.cabinType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, flightFare_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flightRules", flightFare_r13.flightRules)("viewType", ctx_r12.FlightFarePriceInfoViewType.Popup);
} }
function AirlineSearchResultComponent_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-airline-flight-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](8, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineSearchResultComponent_div_5_div_11_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const groupFlight_r10 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.toggleFare(groupFlight_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "book flight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AirlineSearchResultComponent_div_5_div_11_div_17_Template, 1, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AirlineSearchResultComponent_div_5_div_11_div_19_Template, 8, 8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const groupFlight_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.searchResult.selectedOffer != null && groupFlight_r10.flightList == ctx_r9.searchResult.selectedOffer.flightList ? "border-solid border-2 border-success rounded" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flights", groupFlight_r10.flightList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r9.searchResult.selectedOffer != null && groupFlight_r10.flightList == ctx_r9.searchResult.selectedOffer.flightList ? ctx_r9.selectedFare : groupFlight_r10.flightFares[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((!groupFlight_r10.showPrices ? "Show" : "Hide") + " Prices");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !groupFlight_r10.showPrices ? "fa-chevron-down" : "fa-chevron-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", groupFlight_r10.showPrices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapse", !groupFlight_r10.showPrices);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", groupFlight_r10.flightFares);
} }
function AirlineSearchResultComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Airline / Flt # and type of airplane");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Departure / Time of flight / Arrival");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AirlineSearchResultComponent_div_5_div_11_Template, 20, 11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.searchResult.grouppedFlightList);
} }
function AirlineSearchResultComponent_div_6_ng_container_3_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", flight_r20.totalDays, " day");
} }
function AirlineSearchResultComponent_div_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function AirlineSearchResultComponent_div_6_ng_container_3_Template_img_error_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AirlineSearchResultComponent_div_6_ng_container_3_span_29_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const flight_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r19.getImageName(flight_r20.flightSegments[0].airlineID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r20.flightSegments[0].airlineName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r20.flightSegments[0].airlineID + flight_r20.flightSegments[0].flightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r20.flightSegments[0].aircraftName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r20.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r20.departureAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", flight_r20.arrivalTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.nonZero(flight_r20.totalDays));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flight_r20.arrivalAirportCode, "");
} }
function AirlineSearchResultComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirlineSearchResultComponent_div_6_ng_container_3_Template, 33, 9, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](6, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineSearchResultComponent_div_6_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.bookNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.searchResult.selectedOffer.flightList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r3.selectedFare));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.selectButtonText, " ");
} }
function AirlineSearchResultComponent_ng_template_7_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const due_r30 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", due_r30 >= 0 ? "text-danger" : "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("$", due_r30 >= 0 ? "+" : "", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, due_r30, "1.2-2"), "");
} }
function AirlineSearchResultComponent_ng_template_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlineSearchResultComponent_ng_template_7_div_2_span_1_Template, 3, 6, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fare_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().fare;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngVar", ctx_r28.getDuePrice(fare_r27));
} }
function AirlineSearchResultComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AirlineSearchResultComponent_ng_template_7_div_2_Template, 2, 1, "div", 68);
} if (rf & 2) {
    const fare_r27 = ctx.fare;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, fare_r27.totalPrice, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", fare_r27.reshopPrices);
} }
class AirlineSearchResultComponent extends _airline__WEBPACK_IMPORTED_MODULE_2__["Airline"] {
    constructor(airlineLoaderService, airlineOfferService, loginService, localStorage) {
        super(loginService);
        this.airlineLoaderService = airlineLoaderService;
        this.airlineOfferService = airlineOfferService;
        this.localStorage = localStorage;
        this.FlightFarePriceInfoViewType = _enums_flight_fare_price_info_view_enum__WEBPACK_IMPORTED_MODULE_3__["FlightFarePriceInfoViewType"];
        this.selectionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    toggleFare(groupFlight) {
        if (groupFlight.showPrices === null) {
            groupFlight.showPrices = false;
        }
        if (groupFlight.showPrices === false) {
            groupFlight.flightList.forEach(i => i.stopShow = false);
        }
        groupFlight.showPrices = !groupFlight.showPrices;
    }
    selectFare(groupFlight, flightFare) {
        this.selectedFare = flightFare;
        this.searchResult.selectedOffer = {
            originalOffer: this.selectedFare.originalOffer,
            flightList: groupFlight.flightList,
            offerID: flightFare.offerID,
        };
    }
    bookNow() {
        this.removeStopShowDisplay();
        this.selectionDone.emit();
    }
    removeStopShowDisplay() {
        if (this.searchResult.selectedOffer) {
            this.searchResult.selectedOffer.flightList.forEach(flight => flight.stopShow = false);
        }
    }
    changeFlightsTimeFormat(e) {
        this.searchResult.timeFormat = e.target.value;
        localStorage.setItem('timeFormat', this.searchResult.timeFormat);
        this.airlineOfferService.changeFlightTimeFormat(this.searchResult.grouppedFlightList, this.searchResult.timeFormat);
    }
    getDuePrice(fare) {
        if (!fare.reshopPrices) {
            return fare.totalPrice;
        }
        return fare.reshopPrices.reshopDue - fare.reshopPrices.original;
    }
}
AirlineSearchResultComponent.ɵfac = function AirlineSearchResultComponent_Factory(t) { return new (t || AirlineSearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_loader_service__WEBPACK_IMPORTED_MODULE_4__["AirlineLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_offer_service__WEBPACK_IMPORTED_MODULE_5__["AirlineOfferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"])); };
AirlineSearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineSearchResultComponent, selectors: [["app-airline-search-result"]], inputs: { searchResult: "searchResult", selectButtonText: "selectButtonText" }, outputs: { selectionDone: "selectionDone" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 6, consts: [[3, "hidden"], ["class", "alert alert-custom alert-outline-info fade show text-center border-0", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["class", "row gutter-b mt-5", 4, "ngIf"], ["class", "colorBlock", 4, "ngIf"], ["farePrice", ""], ["role", "alert", 1, "alert", "alert-custom", "alert-outline-info", "fade", "show", "text-center", "border-0"], [1, "alert-text", "h2"], [1, "fas", "fa-plane", "icon-2x", "text-info", "pr-2"], [1, "mt-3"], ["id", "tf-selector", 1, "d-flex", "flex-row", "justify-content-end"], [1, "font-size-h5"], ["type", "radio", "id", "tf12", "name", "time-format", "value", "12", 3, "checked", "change"], ["for", "tf12"], ["type", "radio", "id", "tf24", "name", "time-format", "value", "24", 3, "checked", "change"], ["for", "tf24"], [1, "row", "gutter-b", "mt-5"], [1, "col-12"], ["id", "list-header", 1, "col-12", "card", "card-custom", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "p-5"], [1, "d-flex", "flex-fill", "first-column-width-r"], [1, "w-50"], [1, "d-flex", "justify-content-end", "flex-grow-100"], ["class", "card card-custom mb-3", 4, "ngFor", "ngForOf"], [1, "card", "card-custom", "mb-3"], [1, "card-body", "p-0"], [1, "d-flex", "align-items-center", "flex-wrap", 3, "ngClass"], [1, "d-flex", "flex-column", "first-column-width-r"], [3, "flights"], [1, "hrVertical", "h-150px"], [1, "d-flex", "justify-content-end", "flex-grow-100", "align-self-baseline", "mt-15", "pl-5", "pr-5"], [1, "pt-3", "mr-4"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "btn", "btn-outline-primary", "font-weight-bold", "font-size-h4", "price-ctrl", 3, "click"], [1, "d-flex", "flex-row"], [1, "text-right"], [1, "font-size-sm"], [1, "fas", "ml-2", "mt-1", 3, "ngClass"], ["class", "separator separator-dashed border-secondary", 4, "ngIf"], [1, "d-flex", "justify-content-end", "flex-wrap"], ["class", "flight-fare bgLightyellow pl-5 pr-5 pt-3 pb-3", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "separator", "separator-dashed", "border-secondary"], [1, "flight-fare", "bgLightyellow", "pl-5", "pr-5", "pt-3", "pb-3", 3, "ngClass", "click"], [1, "cabin-type-container"], [1, "cabin-type", "font-weight-bold", "opacity-60"], [1, "font-size-h2"], [3, "flightRules", "viewType"], [1, "colorBlock"], [1, "d-flex", "align-items-center", "flex-wrap", "p-3"], [1, "d-flex", "flex-fill"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-right"], [1, "btn", "btn-outline-primary", "font-weight-bold", "font-size-h4", "bg-white", "text-dark-75", 3, "click"], [1, "d-flex", "flex-row", "flex-fill"], [1, "d-flex", "align-items-center", "flex-lg-fill"], [1, "symbol", "symbol-50", "bg-white-o-30", "mr-4"], ["alt", "image", 3, "src", "error"], [1, "d-flex", "flex-column", "flex-wrap"], [1, "mb-1"], [1, "d-flex"], [1, "text-white-50", "font-weight-bold", "mr-2"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-end"], [1, "text-white-50", "font-weight-bold"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-center", "pl-2", "pr-2"], [1, "text-primary", "font-weight-bold"], ["class", "label label-light-danger label-inline font-weight-bold align-top", 4, "ngIf"], [1, "hrVerticalLight", "mr-5", "h-50px"], [1, "label", "label-light-danger", "label-inline", "font-weight-bold", "align-top"], ["class", "text-right", 4, "ngIf"], ["class", "font-size-h5", 3, "ngClass", 4, "ngVar"], [1, "font-size-h5", 3, "ngClass"]], template: function AirlineSearchResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-airline-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirlineSearchResultComponent_div_3_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AirlineSearchResultComponent_div_4_Template, 10, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AirlineSearchResultComponent_div_5_Template, 12, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AirlineSearchResultComponent_div_6_Template, 9, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AirlineSearchResultComponent_ng_template_7_Template, 3, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.airlineLoaderService.isSearchResultLoaderShown());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.airlineLoaderService.isSearchResultLoaderShown());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResult.isSearchCompleted && (ctx.searchResult.grouppedFlightList == null || ctx.searchResult.grouppedFlightList.length == 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResult.grouppedFlightList != null && ctx.searchResult.grouppedFlightList.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResult.grouppedFlightList && ctx.searchResult.grouppedFlightList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResult.selectedOffer != null);
    } }, directives: [_airline_loader_airline_loader_component__WEBPACK_IMPORTED_MODULE_8__["AirlineLoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _airline_flight_item_airline_flight_item_component__WEBPACK_IMPORTED_MODULE_10__["AirlineFlightItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], _airline_flight_fare_info_airline_flight_fare_info_component__WEBPACK_IMPORTED_MODULE_11__["AirlineFlightFareInfoComponent"], _shared_directives_var_directive__WEBPACK_IMPORTED_MODULE_12__["VarDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["[_nghost-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: blueviolet !important;\n}\n\n.timeline.timeline-4[_ngcontent-%COMP%]   .timeline-items[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:after {\n  top: 1.5rem;\n}\n\n.timeline.timeline-4[_ngcontent-%COMP%]   .timeline-items[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .timeline-badge[_ngcontent-%COMP%] {\n  top: 2rem;\n}\n\n.price-ctrl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#tf-selector[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n#list-header[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n\n.first-column-width[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.flight-fare[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  flex-direction: column;\n  align-items: center;\n}\n\n.flight-fare[_ngcontent-%COMP%]   .cabin-type-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n@media screen and (min-width: 1200px) and (max-width: 1360px) {\n  .first-column-width[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .first-column-width[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n\n.first-column-width-r[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n@media screen and (max-width: 1300px) {\n  .first-column-width-r[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .first-column-width-r[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLXNlYXJjaC1yZXN1bHQvYWlybGluZS1zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNSOztBQUdBO0VBQ0k7SUFDSSxVQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJO0lBQ0ksVUFBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSSxVQUFBO0FBRko7O0FBS0E7RUFDSTtJQUNJLFVBQUE7RUFGTjtBQUNGOztBQUtBO0VBQ0k7SUFDSSxVQUFBO0VBSE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFydGlhbHMvYWlybGluZS1zZWFyY2gtcmVzdWx0L2FpcmxpbmUtc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcbiAgICBzdHJva2U6IGJsdWV2aW9sZXQgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLnRpbWVsaW5lLTQgLnRpbWVsaW5lLWl0ZW1zIC50aW1lbGluZS1pdGVtOmFmdGVyIHtcbiAgICB0b3A6IDEuNXJlbTtcbn1cblxuLnRpbWVsaW5lLnRpbWVsaW5lLTQgLnRpbWVsaW5lLWl0ZW1zIC50aW1lbGluZS1pdGVtIC50aW1lbGluZS1iYWRnZSB7XG4gICAgdG9wOiAycmVtO1xufVxuXG4ucHJpY2UtY3RybCBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4jdGYtc2VsZWN0b3IgPiAqIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59XG5cbiNsaXN0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5maXJzdC1jb2x1bW4td2lkdGgge1xuICAgIHdpZHRoOiA0MCU7XG59XG5cbi5mbGlnaHQtZmFyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmNhYmluLXR5cGUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzNjBweCkge1xuICAgIC5maXJzdC1jb2x1bW4td2lkdGgge1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmZpcnN0LWNvbHVtbi13aWR0aCB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxufVxuXG4uZmlyc3QtY29sdW1uLXdpZHRoLXIge1xuICAgIHdpZHRoOiA3NSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgIC5maXJzdC1jb2x1bW4td2lkdGgtciB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuZmlyc3QtY29sdW1uLXdpZHRoLXIge1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgIH1cbn1cbiJdfQ== */"], data: { animation: [
            _animations__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineSearchResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-search-result',
                templateUrl: './airline-search-result.component.html',
                styleUrls: ['./airline-search-result.component.scss'],
                animations: [
                    _animations__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"]
                ],
            }]
    }], function () { return [{ type: _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_4__["AirlineLoaderService"] }, { type: _services_airline_offer_service__WEBPACK_IMPORTED_MODULE_5__["AirlineOfferService"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"] }]; }, { searchResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "aBeU":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/airline/pages/airline-orders/airline-orders.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AirlineOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineOrdersComponent", function() { return AirlineOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/airline-retrieve.service */ "1jwl");
/* harmony import */ var _services_airline_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/airline-order.service */ "utjK");
/* harmony import */ var _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/airline-loader.service */ "qVcs");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _partials_airline_loader_airline_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../partials/airline-loader/airline-loader.component */ "LSaV");


















function AirlineOrdersComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrdersComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrdersComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OrderId is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrdersComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrdersComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/Airlines/Orders/", element_r19.OrderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.OrderId, " ");
} }
function AirlineOrdersComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passenger Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrdersComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.PassengerName, " ");
} }
function AirlineOrdersComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Departure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrdersComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.Departure, " ");
} }
function AirlineOrdersComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Airport ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrdersComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.Airport, " ");
} }
function AirlineOrdersComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Created ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrdersComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.CreationDate, " ");
} }
function AirlineOrdersComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Agency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrdersComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.AgencyName, " ");
} }
function AirlineOrdersComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Agency Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrdersComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.AgencyId, " ");
} }
function AirlineOrdersComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 40);
} }
function AirlineOrdersComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 41);
} }
class AirlineOrdersComponent extends _airline__WEBPACK_IMPORTED_MODULE_3__["Airline"] {
    constructor(router, loginService, retrieveService, airlineOrderService, airlineLoaderService) {
        super(loginService);
        this.router = router;
        this.retrieveService = retrieveService;
        this.airlineOrderService = airlineOrderService;
        this.airlineLoaderService = airlineLoaderService;
        this.searchOrderFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.searchOrderIdFG = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            OrderId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.isSubmitted = false;
        this.orders = [];
        this.displayedColumns = ['OrderId', 'PassengerName', 'Departure', 'Airport', 'CreationDate', 'AgencyName', 'AgencyId'];
        document.body.style.backgroundSize = "100% 165px";
        this.search();
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
            this.retrieveService.getOrderByName(value.FirstName, value.LastName).subscribe((data) => {
                this.orders = this.airlineOrderService.getOrderByNameViewModel(data);
                this.sortedOrders = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.orders.slice());
                this.sortedOrders.sort = this.sort;
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
            this.retrieveService.getOrderById(value.OrderId).subscribe((data) => {
                // console.log('gerOrderByName');
                // console.log(data);
                let order = this.airlineOrderService.getOrderByIdViewModel(data);
                this.orders = [order];
                this.sortedOrders = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.orders.slice());
                this.sortedOrders.sort = this.sort;
            });
        }
        else {
            this.searchOrderFG.markAllAsTouched();
        }
    }
}
AirlineOrdersComponent.ɵfac = function AirlineOrdersComponent_Factory(t) { return new (t || AirlineOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_7__["AirlineRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_order_service__WEBPACK_IMPORTED_MODULE_8__["AirlineOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_loader_service__WEBPACK_IMPORTED_MODULE_9__["AirlineLoaderService"])); };
AirlineOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineOrdersComponent, selectors: [["app-airline-orders"]], viewQuery: function AirlineOrdersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 65, vars: 11, consts: [[1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "gutter-b", "d-flex"], [1, "brdSmallBlock_inner", "pt-4", "flex-column"], [1, "text-white", "pl-2", "opacity-70"], [1, "text-white-50", "pl-2"], [1, "card", "card-custom"], [1, "card-header"], [1, "card-title", "w-100"], [1, "row", "w-100"], [1, "align-items-center", "col-6"], [1, "d-flex", 3, "formGroup"], ["appearance", "outline", 1, ""], ["matInput", "", "formControlName", "FirstName"], [4, "ngIf"], ["appearance", "outline", 1, "ml-2"], ["matInput", "", "formControlName", "LastName"], ["type", "button", 1, "btn", "btn-primary", "font-size-h5", "ml-2", "mt-2", "h-40px", 3, "click"], [1, "mb-5", "justify-content-center", "align-self-center", "col-1"], [1, "align-items-center", "col-5"], ["matInput", "", "formControlName", "OrderId", "required", ""], [1, "card-body", "p-0"], ["mat-table", "", "matSort", "", "matSortActive", "CreationDate", "matSortDirection", "desc", 1, "w-100", 3, "hidden", "dataSource", "ngClass"], ["matColumnDef", "OrderId"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "PassengerName"], ["matColumnDef", "Departure"], ["matColumnDef", "Airport"], ["matColumnDef", "CreationDate"], ["matColumnDef", "AgencyName"], ["matColumnDef", "AgencyId"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "hidden"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]], template: function AirlineOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "List of Orders based on search criteria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AirlineOrdersComponent_mat_error_20_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AirlineOrdersComponent_mat_error_25_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrdersComponent_Template_button_click_26_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " (OR) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "OrderId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AirlineOrdersComponent_mat_error_36_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrdersComponent_Template_button_click_37_listener() { return ctx.searchById(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AirlineOrdersComponent_th_42_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AirlineOrdersComponent_td_43_Template, 3, 2, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AirlineOrdersComponent_th_45_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AirlineOrdersComponent_td_46_Template, 2, 1, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AirlineOrdersComponent_th_48_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AirlineOrdersComponent_td_49_Template, 2, 1, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AirlineOrdersComponent_th_51_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AirlineOrdersComponent_td_52_Template, 2, 1, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](53, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AirlineOrdersComponent_th_54_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AirlineOrdersComponent_td_55_Template, 2, 1, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](56, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AirlineOrdersComponent_th_57_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AirlineOrdersComponent_td_58_Template, 2, 1, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](59, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AirlineOrdersComponent_th_60_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AirlineOrdersComponent_td_61_Template, 2, 1, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AirlineOrdersComponent_tr_62_Template, 1, 0, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AirlineOrdersComponent_tr_63_Template, 1, 0, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "app-airline-loader", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchOrderFG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchOrderFG.get("FirstName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchOrderFG.get("LastName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchOrderIdFG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchOrderIdFG.get("OrderId").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.airlineLoaderService.isSearchResultLoaderShown())("dataSource", ctx.sortedOrders)("ngClass", ctx.isSubmitted ? "" : "d-none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.airlineLoaderService.isSearchResultLoaderHidden());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _partials_airline_loader_airline_loader_component__WEBPACK_IMPORTED_MODULE_13__["AirlineLoaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: ["[_nghost-%COMP%]     .mat-input-element {\n    font-size: 1.1rem;\n}\n[_nghost-%COMP%]     .mat-form-field {\n    line-height: 2;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-infix {\n    padding: 0.5em 0 0.5em 0;\n}\n[_nghost-%COMP%]     .mat-form-field-subscript-wrapper {\n    font-size: 60%; top: calc(100% - 2.5em);\n}\n[_nghost-%COMP%]     .mat-form-field-infix {\n    border-top: .5em;\n}\n[_nghost-%COMP%]     .mat-error {\n    line-height: 1;\n}\n[_nghost-%COMP%]     .mat-form-field-label-wrapper {\n    top: -0.5em;\n    padding-top: 0.5em;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-label {\n    top: 1.2em;\n    margin-top: .2em;\n}\n.card.card-custom[_ngcontent-%COMP%]    > .card-header[_ngcontent-%COMP%] {\n    height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYWdlcy9haXJsaW5lLW9yZGVycy9haXJsaW5lLW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGNBQWMsRUFBRSx1QkFBdUI7QUFDM0M7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFnZXMvYWlybGluZS1vcmRlcnMvYWlybGluZS1vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogNjAlOyB0b3A6IGNhbGMoMTAwJSAtIDIuNWVtKTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIGJvcmRlci10b3A6IC41ZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1lcnJvciB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgIHRvcDogLTAuNWVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdG9wOiAxLjJlbTtcbiAgICBtYXJnaW4tdG9wOiAuMmVtO1xufVxuLmNhcmQuY2FyZC1jdXN0b20gPiAuY2FyZC1oZWFkZXIge1xuICAgIGhlaWdodDogNzBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-orders',
                templateUrl: './airline-orders.component.html',
                styleUrls: ['./airline-orders.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: _services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_7__["AirlineRetrieveService"] }, { type: _services_airline_order_service__WEBPACK_IMPORTED_MODULE_8__["AirlineOrderService"] }, { type: _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_9__["AirlineLoaderService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "aN7V":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/airline/services/airline-fare.service.ts ***!
  \**********************************************************************/
/*! exports provided: AirlineFareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineFareService", function() { return AirlineFareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline_datetime_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airline-datetime.service */ "TGhc");
/* harmony import */ var _airline_flight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airline-flight.service */ "Pzxz");
/* harmony import */ var src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/array-helper.service */ "zPlH");





class AirlineFareService {
    constructor(airlineDatetimeService, airlineFlightService, arrayHelper) {
        this.airlineDatetimeService = airlineDatetimeService;
        this.airlineFlightService = airlineFlightService;
        this.arrayHelper = arrayHelper;
    }
    flightFareFromOffer(offer) {
        const [fareDetail] = offer.offerItem[0].fareDetail;
        return {
            originalOffer: offer,
            totalPrice: Number(offer.totalPrice.detailCurrencyPrice.total.value) * 0.01,
            cabinType: fareDetail.fareComponent[0].fareBasis.cabinType.cabinTypeName.includes('COACH') ? 'Economy' : 'First Class',
            offerID: offer.offerID,
            flightRules: this.airlineFlightService.getPriceRules(fareDetail.fareComponent),
        };
    }
    flightFareFromReshop(offer) {
        const [fareDetail] = offer.addOfferItem[0].fareDetail;
        return {
            originalOffer: offer,
            reshopPrices: {
                original: this.arrayHelper.sum(offer.addOfferItem.map(i => i.reshopDifferential.originalOrderItem.total.amount.value * 0.01 + i.reshopDifferential.originalOrderItem.taxes.total.value * 0.01)),
                newItem: this.arrayHelper.sum(offer.addOfferItem.map(i => i.reshopDifferential.newOfferItem.total.amount.value * 0.01)),
                reshopDue: this.arrayHelper.sum(offer.addOfferItem.map(i => i.reshopDifferential.reshopDue.byPassenger.total.amount.value * 0.01)),
            },
            totalPrice: Number(offer.totalPrice.detailCurrencyPrice.total.value) * 0.01,
            cabinType: fareDetail.fareComponent[0].fareBasis.cabinType.cabinTypeName.includes('Economy') ? 'Economy' : 'First Class',
            offerID: offer.offerID,
            flightRules: this.airlineFlightService.getPriceRules(fareDetail.fareComponent),
        };
    }
    getFlightList(fares) {
        return fares.map(i => this.airlineFlightService.createFlightViewModel(i.segmentRefs.value, i));
    }
    fromPricedOfferItem(offerItem) {
        let fare = offerItem.fareDetail[0].price;
        let taxes = fare.taxes.breakdown.tax.map(tax => {
            return {
                description: tax.description,
                amount: {
                    value: tax.amount.value * 0.01,
                    currency: tax.amount.code
                },
            };
        });
        var vm = {
            baseAmount: {
                value: fare.baseAmount.value * 0.01,
                currency: fare.baseAmount.code
            },
            taxes: {
                total: {
                    value: fare.taxes.total.value * 0.01,
                    currency: fare.taxes.total.code
                },
                taxBreakdown: this.grouppedTaxBreakdown(taxes)
            }
        };
        return vm;
    }
    fromOrderItem(orderItem) {
        let fare = orderItem.fareDetail[0].price;
        let taxes = fare.taxes.breakdown.tax.map(tax => {
            return {
                description: tax.description,
                amount: {
                    value: tax.amount.value * 0.01,
                    currency: tax.amount.code
                },
            };
        });
        var vm = {
            orderItemID: orderItem.orderItemID,
            baseAmount: {
                value: fare.baseAmount.value * 0.01,
                currency: fare.baseAmount.code
            },
            taxes: {
                total: {
                    value: fare.taxes.total.value * 0.01,
                    currency: fare.taxes.total.code
                },
                taxBreakdown: this.grouppedTaxBreakdown(taxes)
            }
        };
        return vm;
    }
    grouppedTaxBreakdown(taxes) {
        let grouppedTaxes = this.arrayHelper.groupBy(taxes, k => k.description, v => v, t => this.calculateTaxTotal(t));
        this.arrayHelper.sortBy(grouppedTaxes, [i => i.total.value], 'desc');
        let taxBreakdown = grouppedTaxes.map(i => {
            return {
                description: i.key,
                amount: {
                    value: i.total.value,
                    currency: i.total.currency
                },
            };
        });
        return taxBreakdown;
    }
    calculateTaxTotal(data) {
        let total = 0;
        data.forEach((tax) => {
            total += tax.amount.value;
        });
        return { value: total, currency: data[0].amount.currency };
    }
}
AirlineFareService.ɵfac = function AirlineFareService_Factory(t) { return new (t || AirlineFareService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_datetime_service__WEBPACK_IMPORTED_MODULE_1__["AirlineDatetimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_flight_service__WEBPACK_IMPORTED_MODULE_2__["AirlineFlightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_3__["ArrayHelperService"])); };
AirlineFareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirlineFareService, factory: AirlineFareService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineFareService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _airline_datetime_service__WEBPACK_IMPORTED_MODULE_1__["AirlineDatetimeService"] }, { type: _airline_flight_service__WEBPACK_IMPORTED_MODULE_2__["AirlineFlightService"] }, { type: src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_3__["ArrayHelperService"] }]; }, null); })();


/***/ }),

/***/ "aUhX":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/airline/pages/airline-container/airline.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AirlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineComponent", function() { return AirlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_airline_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/airline-error.service */ "z3KZ");
/* harmony import */ var _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/airline-loader.service */ "qVcs");
/* harmony import */ var _partials_airline_loader_airline_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/airline-loader/airline-loader.component */ "LSaV");
/* harmony import */ var _partials_airline_errors_airline_errors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/airline-errors/airline-errors.component */ "tX8+");







class AirlineComponent {
    constructor(router, airlineErrorService, airlineLoaderService) {
        this.router = router;
        this.airlineErrorService = airlineErrorService;
        this.airlineLoaderService = airlineLoaderService;
        this.router.events.subscribe(val => {
            this.airlineErrorService.hideErrors();
            //this.airlineLoaderService.hideLoader();
        });
    }
    ngOnInit() {
    }
}
AirlineComponent.ɵfac = function AirlineComponent_Factory(t) { return new (t || AirlineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_error_service__WEBPACK_IMPORTED_MODULE_2__["AirlineErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_loader_service__WEBPACK_IMPORTED_MODULE_3__["AirlineLoaderService"])); };
AirlineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineComponent, selectors: [["app-airline"]], decls: 4, vars: 2, consts: [[3, "hidden"]], template: function AirlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-airline-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-airline-errors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.airlineLoaderService.isLoaderHidden());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.airlineLoaderService.isLoaderShown());
    } }, directives: [_partials_airline_loader_airline_loader_component__WEBPACK_IMPORTED_MODULE_4__["AirlineLoaderComponent"], _partials_airline_errors_airline_errors_component__WEBPACK_IMPORTED_MODULE_5__["AirlineErrorsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFnZXMvYWlybGluZS1jb250YWluZXIvYWlybGluZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline',
                templateUrl: './airline.component.html',
                styleUrls: ['./airline.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_airline_error_service__WEBPACK_IMPORTED_MODULE_2__["AirlineErrorService"] }, { type: _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_3__["AirlineLoaderService"] }]; }, null); })();


/***/ }),

/***/ "aUsF":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "cM4w":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/airline/enums/flight-fare-price-info-view.enum.ts ***!
  \*******************************************************************************/
/*! exports provided: FlightFarePriceInfoViewType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightFarePriceInfoViewType", function() { return FlightFarePriceInfoViewType; });
var FlightFarePriceInfoViewType;
(function (FlightFarePriceInfoViewType) {
    FlightFarePriceInfoViewType[FlightFarePriceInfoViewType["Popup"] = 0] = "Popup";
    FlightFarePriceInfoViewType[FlightFarePriceInfoViewType["Plain"] = 1] = "Plain";
})(FlightFarePriceInfoViewType || (FlightFarePriceInfoViewType = {}));


/***/ }),

/***/ "cQZ/":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-flight-item/airline-flight-item.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AirlineFlightItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineFlightItemComponent", function() { return AirlineFlightItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/animations */ "Ql4B");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_airline_seat_availability_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/airline-seat-availability.service */ "hQt1");
/* harmony import */ var _services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/airline-change-order.service */ "RTrV");
/* harmony import */ var _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/airline-loader.service */ "qVcs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _airline_flight_fare_info_airline_flight_fare_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../airline-flight-fare-info/airline-flight-fare-info.component */ "dKJ1");
/* harmony import */ var _shared_directives_var_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/directives/var.directive */ "TSMZ");
/* harmony import */ var _airline_loader_airline_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../airline-loader/airline-loader.component */ "LSaV");
/* harmony import */ var _airline_seat_availability_airline_seat_availability_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../airline-seat-availability/airline-seat-availability.component */ "1QvV");














function AirlineFlightItemComponent_ng_container_0_h5_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getOperatedCarrierText(flight_r1.flightSegments[0].airlineID, flight_r1.flightSegments[0].airlineName));
} }
function AirlineFlightItemComponent_ng_container_0_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineFlightItemComponent_ng_container_0_i_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineFlightItemComponent_ng_container_0_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.popUpMessage);
} }
function AirlineFlightItemComponent_ng_container_0_i_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineFlightItemComponent_ng_container_0_i_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineFlightItemComponent_ng_container_0_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", flight_r1.totalDays, " day");
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_h5_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightSegment_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.getOperatedCarrierText(flightSegment_r16.airlineID, flightSegment_r16.airlineName));
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_ng_contrainer_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "not selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_ng_contrainer_3_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const seat_r31 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", seat_r31.row, "", seat_r31.column, " (", ctx_r30.getPassengerLabel(seat_r31.passenger), ")");
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_ng_contrainer_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_ng_contrainer_3_ng_container_3_span_1_Template, 4, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const flightSegment_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.getSelectedSeats(flightSegment_r16));
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_ng_contrainer_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-contrainer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Seats: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_ng_contrainer_3_ng_container_2_Template, 3, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_ng_contrainer_3_ng_container_3_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedSeats_r27 = ctx.ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !selectedSeats_r27.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", selectedSeats_r27.length);
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_div_4_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_div_4_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_div_4_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const flightSegment_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.showHideSelectSeats(flightSegment_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " View aircraft seat map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_div_4_i_3_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_div_4_i_4_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-airline-loader", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightSegment_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r26.airlineLoaderService.isSearchResultLoaderShown());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !flightSegment_r16.showSeatMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flightSegment_r16.showSeatMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spinnerClass", "d-flex")("hidden", ctx_r26.airlineLoaderService.isSearchResultLoaderHidden());
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_ng_contrainer_3_Template, 4, 2, "ng-contrainer", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_div_4_Template, 6, 5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightSegment_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngVar", ctx_r19.getSelectedSeats(flightSegment_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.orderViewModel);
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightSegment_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", flightSegment_r16.changeOfDay, " day ");
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Layover: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const flight_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.flightSegments[i_r17 + 1].layover);
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Teminal Change: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const flight_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.flightSegments[i_r17 + 1].departureTerminal + "->" + flight_r1.flightSegments[i_r17 + 1].arrivalTerminal);
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_46_app_airline_seat_availability_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-airline-seat-availability", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("seatChanged", function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_46_app_airline_seat_availability_1_Template_app_airline_seat_availability_seatChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r46.seatChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightSegment_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flightSegment", flightSegment_r16)("passengers", ctx_r45.passengers);
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_46_app_airline_seat_availability_1_Template, 1, 2, "app-airline-seat-availability", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightSegment_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flightSegment_r16.showSeatMap && ctx_r23.orderViewModel.seatMapLoaded);
} }
function AirlineFlightItemComponent_ng_container_0_div_45_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function AirlineFlightItemComponent_ng_container_0_div_45_div_9_Template_img_error_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r50.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AirlineFlightItemComponent_ng_container_0_div_45_div_9_h5_14_Template, 2, 1, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-airline-flight-fare-info", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_24_Template, 5, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AirlineFlightItemComponent_ng_container_0_div_45_div_9_span_41_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_44_Template, 5, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_45_Template, 6, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AirlineFlightItemComponent_ng_container_0_div_45_div_9_div_46_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightSegment_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const flight_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.getImageName(flightSegment_r16.airlineID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.getOperatedCarrierText(flightSegment_r16.airlineID, flightSegment_r16.airlineName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.getOperatedCarrierText(flightSegment_r16.airlineID, flightSegment_r16.airlineName) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r16.airlineID + flightSegment_r16.flightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r16.aircraftName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flightRules", flightSegment_r16.flightRules);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r16.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r16.departureDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r16.departureAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r16.flightDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r16.arrivalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flightSegment_r16.arrivalDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flightSegment_r16.changeOfDay != null && flightSegment_r16.changeOfDay != "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightSegment_r16.arrivalAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r17 != flight_r1.flightSegments.length - 1 && flight_r1.flightSegments[i_r17 + 1].layover != null && !flightSegment_r16.showSeatMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r17 != flight_r1.flightSegments.length - 1 && flight_r1.flightSegments[i_r17 + 1].departureTerminal != null && flight_r1.flightSegments[i_r17 + 1].arrivalTerminal != null && !flightSegment_r16.showSeatMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.orderId);
} }
function AirlineFlightItemComponent_ng_container_0_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total Travel Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AirlineFlightItemComponent_ng_container_0_div_45_div_9_Template, 47, 18, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.flightDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", flight_r1.flightSegments);
} }
function AirlineFlightItemComponent_ng_container_0_hr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 54);
} }
function AirlineFlightItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function AirlineFlightItemComponent_ng_container_0_Template_img_error_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.onImgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AirlineFlightItemComponent_ng_container_0_h5_8_Template, 2, 1, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineFlightItemComponent_ng_container_0_Template_span_click_17_listener() { const flight_r1 = ctx.$implicit; return flight_r1.stopShow = !flight_r1.stopShow; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Flight details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AirlineFlightItemComponent_ng_container_0_i_19_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AirlineFlightItemComponent_ng_container_0_i_20_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AirlineFlightItemComponent_ng_container_0_div_32_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineFlightItemComponent_ng_container_0_Template_span_click_33_listener() { const flight_r1 = ctx.$implicit; return flight_r1.stopShow = !flight_r1.stopShow; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AirlineFlightItemComponent_ng_container_0_i_35_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AirlineFlightItemComponent_ng_container_0_i_36_Template, 2, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AirlineFlightItemComponent_ng_container_0_span_40_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AirlineFlightItemComponent_ng_container_0_div_45_Template, 10, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AirlineFlightItemComponent_ng_container_0_hr_46_Template, 1, 0, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const flight_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.flights.length == 1 ? "pt-4 pb-4" : i_r2 == 0 ? "pt-4" : i_r2 == ctx_r0.flights.length - 1 ? "pb-4" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImageName(flight_r1.flightSegments[0].airlineID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getOperatedCarrierText(flight_r1.flightSegments[0].airlineID, flight_r1.flightSegments[0].airlineName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getOperatedCarrierText(flight_r1.flightSegments[0].airlineID, flight_r1.flightSegments[0].airlineName) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.flightSegments[0].airlineID + flight_r1.flightSegments[0].flightNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.flightSegments[0].aircraftName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !flight_r1.stopShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flight_r1.stopShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.departureTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.departureDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.departureAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.flightDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flight_r1.isPopUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flight_r1.numberOfStops, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flight_r1.numberOfStops != "Nonstop" && !flight_r1.stopShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flight_r1.numberOfStops != "Nonstop" && flight_r1.stopShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", flight_r1.arrivalTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nonZero(flight_r1.totalDays));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.arrivalDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r1.arrivalAirportCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", flight_r1.stopShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 != ctx_r0.flights.length - 1);
} }
class AirlineFlightItemComponent extends _airline__WEBPACK_IMPORTED_MODULE_2__["Airline"] {
    constructor(loginService, router, airlineSeatAvailabilityService, airlineChangeOrderService, airlineLoaderService) {
        super(loginService);
        this.router = router;
        this.airlineSeatAvailabilityService = airlineSeatAvailabilityService;
        this.airlineChangeOrderService = airlineChangeOrderService;
        this.airlineLoaderService = airlineLoaderService;
    }
    ngOnChanges() {
        if (this.orderViewModel) {
            this.flights = this.orderViewModel.flights;
        }
        if (this.orderViewModel) {
            this.passengers = this.orderViewModel.passengers;
        }
    }
    seatChanged(anyChanges) {
        if (anyChanges) {
            this.airlineChangeOrderService.addChange("SeatAvailability", this.orderId);
        }
        else {
            this.airlineChangeOrderService.clearSeatAvailabilityChanges(this.orderId);
        }
    }
    getPassengerLabel(passenger) {
        return this.passengers.find(i => i.data.passengerID == passenger.passengerID).label;
    }
    getSelectedSeats(segment) {
        let selectedSeats = [];
        this.passengers.forEach(i => {
            let selectedSeat = i.orderSummary.selectedSeats.find(s => s.segment.segmentKey == segment.segmentKey);
            if (selectedSeat) {
                selectedSeats.push(selectedSeat.seat);
            }
        });
        return selectedSeats;
    }
    showHideSelectSeats(flightSegment) {
        this.orderViewModel.editMode = true;
        if (this.orderViewModel.seatMapLoaded) {
            flightSegment.showSeatMap = !flightSegment.showSeatMap;
            return;
        }
        if (!this.seatMapLoading) {
            this.seatMapLoading = true;
            this.airlineSeatAvailabilityService.loadSeats(this.orderId, flightSegment.airlineID).subscribe((data) => {
                this.seatMapLoading = false;
                this.orderViewModel.seatMapLoaded = true;
                this.orderViewModel.seatSelectionRQ = {
                    offerID: data.alaCarteOffer.offerID,
                    owner: data.alaCarteOffer.owner,
                    responseID: data.shoppingResponseID.responseID.value,
                };
                this.airlineSeatAvailabilityService.updateFlightsWithSeats(this.flights, data);
                flightSegment.showSeatMap = true;
            });
        }
    }
}
AirlineFlightItemComponent.ɵfac = function AirlineFlightItemComponent_Factory(t) { return new (t || AirlineFlightItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_seat_availability_service__WEBPACK_IMPORTED_MODULE_5__["AirlineSeatAvailabilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_6__["AirlineChangeOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_loader_service__WEBPACK_IMPORTED_MODULE_7__["AirlineLoaderService"])); };
AirlineFlightItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineFlightItemComponent, selectors: [["app-airline-flight-item"]], inputs: { flights: "flights", passengers: "passengers", orderId: "orderId", orderViewModel: "orderViewModel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "d-flex", "flex-fill", "pl-5", 3, "ngClass"], [1, "d-flex", "align-items-center", "w-50"], [1, "symbol", "symbol-50", "bg-gray-300", "mr-4"], ["alt", "image", 3, "src", "error"], [1, "d-flex", "flex-column", "flex-wrap"], [1, "mb-1"], ["class", "mb-1 d-none", 4, "ngIf"], [1, "d-flex"], [1, "text-dark-50", "font-weight-bold", "mr-2"], [1, "text-primary", "font-weight-bold", "cursor-pointer", 3, "click"], ["class", "material-icons text-primary align-middle icon-md", 4, "ngIf"], [1, "d-flex", "align-items-center", "flex-lg-fill"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-end"], [1, "text-dark-50", "font-weight-bold"], [1, "d-flex", "flex-column", "flex-wrap", "align-items-center", "min-w-150px", "pl-2", "pr-2"], [1, "hr-text", "mb-2", "text-dark-50"], ["id", "popover2", "class", "popover fade show bs-popover-bottom", "style", "top: 65px; left: auto;", "role", "tooltip", "x-placement", "bottom", 4, "ngIf"], ["class", "label label-light-danger label-inline font-weight-bold align-top", 4, "ngIf"], [4, "ngIf"], ["class", "w-100", 4, "ngIf"], [1, "mb-1", "d-none"], [1, "material-icons", "text-primary", "align-middle", "icon-md"], ["id", "popover2", "role", "tooltip", "x-placement", "bottom", 1, "popover", "fade", "show", "bs-popover-bottom", 2, "top", "65px", "left", "auto"], [1, "arrow", 2, "bottom", "-7px", "left", "45%"], [1, "popover-body", "font-size-lg", "text-center"], [1, "label", "label-light-danger", "label-inline", "font-weight-bold", "align-top"], [1, "pl-15", "pt-2", "pb-2", "rounded-0"], [1, "timeline-label", "text-center", "mb-3"], [1, "font-size-h3", "text-secondary"], [1, "text-primary"], [1, "timeline", "timeline-justified", "timeline-4"], [1, "timeline-bar"], [1, "timeline-items"], [1, "timeline-item"], [1, "timeline-badge"], [1, "bg-success"], [1, "timeline-content"], [1, "d-flex", "align-items-center", "flex-wrap"], [1, "align-items-center", "w-50"], [3, "flightRules"], [1, "hr-text", "text-dark-50"], ["class", "timeline-label text-center mt-5 mb-0", 4, "ngIf"], ["class", "timeline-label text-center mt-5", 4, "ngIf"], [4, "ngVar"], ["class", "mt-3", 4, "ngIf"], [1, "mt-3"], [1, "text-primary", "font-weight-bold", "cursor-pointer", 3, "hidden", "click"], [3, "spinnerClass", "hidden"], [1, "timeline-label", "text-center", "mt-5", "mb-0"], [1, "timeline-label", "text-center", "mt-5"], [1, "fa", "fa-exclamation-triangle", "text-danger", "icon-xl"], [3, "flightSegment", "passengers", "seatChanged", 4, "ngIf"], [3, "flightSegment", "passengers", "seatChanged"], [1, "w-100"]], template: function AirlineFlightItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AirlineFlightItemComponent_ng_container_0_Template, 47, 22, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.flights);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _airline_flight_fare_info_airline_flight_fare_info_component__WEBPACK_IMPORTED_MODULE_9__["AirlineFlightFareInfoComponent"], _shared_directives_var_directive__WEBPACK_IMPORTED_MODULE_10__["VarDirective"], _airline_loader_airline_loader_component__WEBPACK_IMPORTED_MODULE_11__["AirlineLoaderComponent"], _airline_seat_availability_airline_seat_availability_component__WEBPACK_IMPORTED_MODULE_12__["AirlineSeatAvailabilityComponent"]], styles: [".seatMapLoader[_ngcontent-%COMP%]{\n    display: inline-block;\n}\n.relative[_ngcontent-%COMP%]{\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLWZsaWdodC1pdGVtL2FpcmxpbmUtZmxpZ2h0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLWZsaWdodC1pdGVtL2FpcmxpbmUtZmxpZ2h0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWF0TWFwTG9hZGVye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5yZWxhdGl2ZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"], data: { animation: [
            src_app_animations__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineFlightItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-flight-item',
                templateUrl: './airline-flight-item.component.html',
                styleUrls: ['./airline-flight-item.component.css'],
                animations: [
                    src_app_animations__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"]
                ]
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_airline_seat_availability_service__WEBPACK_IMPORTED_MODULE_5__["AirlineSeatAvailabilityService"] }, { type: _services_airline_change_order_service__WEBPACK_IMPORTED_MODULE_6__["AirlineChangeOrderService"] }, { type: _services_airline_loader_service__WEBPACK_IMPORTED_MODULE_7__["AirlineLoaderService"] }]; }, { flights: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], passengers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orderId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orderViewModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "dAfP":
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/airline/services/airline-payment.service.ts ***!
  \*************************************************************************/
/*! exports provided: AirlinePaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlinePaymentService", function() { return AirlinePaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline_retrieve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airline-retrieve.service */ "1jwl");
/* harmony import */ var src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/credit-card.service */ "Kceb");




class AirlinePaymentService {
    constructor(airlineRetrieveService, creditCardService) {
        this.airlineRetrieveService = airlineRetrieveService;
        this.creditCardService = creditCardService;
        this.paymentTypes = [AirlinePaymentService.paymentTypeOnHold, AirlinePaymentService.paymentTypeCreditCard];
    }
    pay(creditCard, orderId) {
        let paymentBody = this.preparePaymentRequestBody(creditCard);
        // console.log(query);
        let paymentReqBody = {
            "version": "17.2",
            "query": {
                "orderID": orderId,
                "payments": paymentBody
            }
        };
        return this.airlineRetrieveService.orderChange(paymentReqBody, "Process payment...");
    }
    // amount = 0.00 will request pay full order, paying multiple transactions for one order item is not possible
    // specifying different value does not affect (at least now) 
    preparePaymentRequestBody(creditCardJSON, amount = "0.00") {
        let paymentObj = {
            "type": "CC",
            "method": {
                "paymentCard": {
                    "cardCode": creditCardJSON.CreditType,
                    "cardNumber": {
                        "value": creditCardJSON.CreditCardNumber.replace(/ /g, '')
                    },
                    "seriesCode": {
                        "value": creditCardJSON.SecurityCode
                    },
                    "cardHolderName": {
                        "value": creditCardJSON.FirstNameonCard + " " + creditCardJSON.LastNameonCard
                    },
                    "cardHolderBillingAddress": {
                        "street": [
                            creditCardJSON.Street
                        ],
                        "cityName": creditCardJSON.City,
                        "stateProv": creditCardJSON.State,
                        "countryCode": {
                            "value": creditCardJSON.CountryCode
                        },
                        "postalCode": creditCardJSON.PostalCode
                    },
                    "effectiveExpireDate": {
                        "expiration": creditCardJSON.ExpMonth + (creditCardJSON.ExpYear + "").substring(2, 4)
                    }
                }
            },
            "amount": {
                "value": amount
            }
        };
        const payment = {
            "payment": [
                paymentObj
            ]
        };
        return payment;
    }
    getPaymentViewModel(payments) {
        if (!payments) {
            return;
        }
        let result = payments.map(i => {
            let vm = {
                orderItemID: i.orderItemID,
                creditCardType: this.creditCardService.findNameByCode(i.method.paymentCardMethod.cardCode),
                creditCardNumber: i.method.paymentCardMethod.maskedCardNumber.value,
                creditCardHolder: i.method.paymentCardMethod.cardHolderName.value,
                amount: i.amount.simpleCurrencyPrice.value * 0.01
            };
            return vm;
        });
        return result;
    }
    calculateDue(payments, passengers) {
        let due = 0;
        passengers.forEach(i => {
            if (i.orderSummary.fare.orderItemID && !payments.find(p => p.orderItemID.indexOf(i.orderSummary.fare.orderItemID) > -1)) {
                due += i.orderSummary.fare.baseAmount.value + i.orderSummary.fare.taxes.total.value;
            }
            i.orderSummary.selectedSeats.forEach(seat => {
                if (seat.seat.offerItemID || (seat.seat.orderItemID && !payments.find(p => p.orderItemID.indexOf(seat.seat.orderItemID) > -1))) {
                    due += seat.seat.price.value;
                }
            });
        });
        return due;
    }
}
AirlinePaymentService.paymentTypeOnHold = "On Hold";
AirlinePaymentService.paymentTypeCreditCard = "Credit Card";
AirlinePaymentService.ɵfac = function AirlinePaymentService_Factory(t) { return new (t || AirlinePaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_1__["AirlineRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_2__["CreditCardService"])); };
AirlinePaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirlinePaymentService, factory: AirlinePaymentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlinePaymentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _airline_retrieve_service__WEBPACK_IMPORTED_MODULE_1__["AirlineRetrieveService"] }, { type: src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_2__["CreditCardService"] }]; }, null); })();


/***/ }),

/***/ "dKJ1":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-flight-fare-info/airline-flight-fare-info.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AirlineFlightFareInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineFlightFareInfoComponent", function() { return AirlineFlightFareInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../animations */ "Ql4B");
/* harmony import */ var _enums_flight_fare_price_info_view_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/flight-fare-price-info-view.enum */ "cM4w");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






function AirlineFlightFareInfoComponent_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-success", ctx_r7.flightRules[0].allowChange)("text-danger", !ctx_r7.flightRules[0].allowChange);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-success", ctx_r7.flightRules[0].allowCancel)("text-danger", !ctx_r7.flightRules[0].allowCancel);
} }
function AirlineFlightFareInfoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineFlightFareInfoComponent_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleInfoPopup($event, _r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AirlineFlightFareInfoComponent_div_1_span_2_Template, 5, 8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r4)("popoverTitle", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.flightRules && ctx_r0.flightRules.length);
} }
function AirlineFlightFareInfoComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function AirlineFlightFareInfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlineFlightFareInfoComponent_div_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
} }
function AirlineFlightFareInfoComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Flight info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineFlightFareInfoComponent_ng_template_5_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instruction_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", instruction_r14.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instruction_r14.info);
} }
function AirlineFlightFareInfoComponent_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Changes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Cancel: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AirlineFlightFareInfoComponent_ng_template_5_div_1_div_16_Template, 5, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Fare code: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightRule_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nonstop", (ctx_r11.flightRules == null ? null : ctx_r11.flightRules.length) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", flightRule_r12.segmentRefs.onpoint, " - ", flightRule_r12.segmentRefs.offpoint, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-success", flightRule_r12.allowChange)("text-danger", !flightRule_r12.allowChange);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightRule_r12.allowChange ? "Allowed" : "Not allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-success", flightRule_r12.allowCancel)("text-danger", !flightRule_r12.allowCancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightRule_r12.allowCancel ? "Allowed" : "Not allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", flightRule_r12.others);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flightRule_r12.fareCode);
} }
function AirlineFlightFareInfoComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlineFlightFareInfoComponent_ng_template_5_div_1_Template, 22, 16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.flightRules);
} }
class AirlineFlightFareInfoComponent {
    constructor() {
        this.viewType = _enums_flight_fare_price_info_view_enum__WEBPACK_IMPORTED_MODULE_2__["FlightFarePriceInfoViewType"].Plain;
        this.collapseLabel = 'Flight info';
        this.FlightFarePriceInfoViewType = _enums_flight_fare_price_info_view_enum__WEBPACK_IMPORTED_MODULE_2__["FlightFarePriceInfoViewType"];
        this.collapsed = true;
    }
    toggleInfoPopup(event, popover) {
        event.stopPropagation();
        popover.toggle();
    }
    toggleCollapse() {
        this.collapsed = !this.collapsed;
    }
}
AirlineFlightFareInfoComponent.ɵfac = function AirlineFlightFareInfoComponent_Factory(t) { return new (t || AirlineFlightFareInfoComponent)(); };
AirlineFlightFareInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineFlightFareInfoComponent, selectors: [["app-airline-flight-fare-info"]], inputs: { flightRules: "flightRules", viewType: "viewType", collapseLabel: "collapseLabel" }, decls: 7, vars: 3, consts: [[3, "ngSwitch"], ["class", "toggle-container icon-popup", "triggers", "manual", 3, "ngbPopover", "popoverTitle", "click", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["flightFareTitle", ""], ["flightRuleTemplate", ""], ["triggers", "manual", 1, "toggle-container", "icon-popup", 3, "ngbPopover", "popoverTitle", "click"], ["popoverRef", "ngbPopover"], [4, "ngIf"], [1, "fas", "fa-calendar-day"], [1, "fas", "fa-plane-slash"], [4, "ngTemplateOutlet"], [1, "flight-fare-container"], ["class", "info-item", 3, "nonstop", 4, "ngFor", "ngForOf"], [1, "info-item"], [1, "flight-direction"], [1, "instructions"], [1, "instruction"], [1, "instruction-name"], [1, "instruction-info"], ["class", "instruction", 4, "ngFor", "ngForOf"]], template: function AirlineFlightFareInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlineFlightFareInfoComponent_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AirlineFlightFareInfoComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirlineFlightFareInfoComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AirlineFlightFareInfoComponent_ng_template_5_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.viewType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.FlightFarePriceInfoViewType.Popup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.FlightFarePriceInfoViewType.Plain);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPopover"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".flight-fare-container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.flight-fare-container[_ngcontent-%COMP%]   .info-item.nonstop[_ngcontent-%COMP%]   .flight-direction[_ngcontent-%COMP%] {\n  display: none;\n}\n.flight-fare-container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n}\n.flight-fare-container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 2px 0;\n}\n.flight-fare-container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%]   .instruction-info[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.flight-fare-container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]    + .info-item[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n.toggle-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n}\n.toggle-container.icon-popup[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.toggle-container[_ngcontent-%COMP%]   .chevron-icon[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.info-collapse-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.info-collapse-container[_ngcontent-%COMP%]   .toggle-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.fas[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLWZsaWdodC1mYXJlLWluZm8vYWlybGluZS1mbGlnaHQtZmFyZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQVI7QUFHWTtFQUNJLGFBQUE7QUFEaEI7QUFLUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFIWjtBQUtZO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFIaEI7QUFLZ0I7RUFDSSxpQkFBQTtBQUhwQjtBQVNJO0VBQ0ksZ0JBQUE7QUFQUjtBQVdBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFSSjtBQVVJO0VBQ0ksWUFBQTtBQVJSO0FBV0k7RUFDSSxpQkFBQTtBQVRSO0FBYUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFWSjtBQVlJO0VBQ0ksbUJBQUE7QUFWUjtBQWNBO0VBQ0ksa0JBQUE7QUFYSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFydGlhbHMvYWlybGluZS1mbGlnaHQtZmFyZS1pbmZvL2FpcmxpbmUtZmxpZ2h0LWZhcmUtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGlnaHQtZmFyZS1jb250YWluZXIge1xuICAgIC5pbmZvLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICYubm9uc3RvcCB7XG4gICAgICAgICAgICAuZmxpZ2h0LWRpcmVjdGlvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnN0cnVjdGlvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAgICAgICAgIC5pbnN0cnVjdGlvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggMDtcblxuICAgICAgICAgICAgICAgICYtaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbmZvLWl0ZW0gKyAuaW5mby1pdGVtIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG59XG5cbi50b2dnbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICYuaWNvbi1wb3B1cCB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG5cbiAgICAuY2hldnJvbi1pY29uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgfVxufVxuXG4uaW5mby1jb2xsYXBzZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLnRvZ2dsZS13cmFwcGVye1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbn1cblxuLmZhcyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufSJdfQ== */"], data: { animation: [
            _animations__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"],
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineFlightFareInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-flight-fare-info',
                templateUrl: './airline-flight-fare-info.component.html',
                styleUrls: ['./airline-flight-fare-info.component.scss'],
                animations: [
                    _animations__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"],
                ],
            }]
    }], null, { flightRules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collapseLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "e4ho":
/*!************************************************!*\
  !*** ./src/app/views/pages/airline/airline.ts ***!
  \************************************************/
/*! exports provided: Airline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airline", function() { return Airline; });
/* harmony import */ var _core_object_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/object-base */ "JXbo");
/* harmony import */ var _shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/tenant/tenant */ "lWHP");


class Airline extends _core_object_base__WEBPACK_IMPORTED_MODULE_0__["ObjectBase"] {
    constructor(loginService) {
        super(loginService);
    }
    getImageName(airlineID) {
        let imagePath = "assets/media/Airlines/" + airlineID + ".png";
        // console.log('airlineID:' + airlineID);
        return imagePath;
    }
    onImgError(event) {
        // console.log(event);
        event.target.src = "assets/media/Airlines/noImage2.png";
    }
    getOperatedCarrierText(airlineID, airlineName) {
        let carrierAirlineIDs = Object(_shared_tenant_tenant__WEBPACK_IMPORTED_MODULE_1__["getTenantModule"])().airline.carrierAirlineID || ["AA"];
        if (carrierAirlineIDs.includes(airlineID)) {
            return airlineName;
        }
        else {
            return "Operated by " + airlineName;
        }
    }
    nonZero(num) {
        return  false && false;
    }
    setLoyaltyProgramPassenger(passenger, FrequentFlyerNumber) {
        if (!this.isNullOrWhiteSpace(FrequentFlyerNumber)) {
            passenger.loyaltyProgramAccount = [
                {
                    "airline": {
                        "airlineDesignator": "AA"
                    },
                    "accountNumber": FrequentFlyerNumber
                }
            ];
        }
        return passenger;
    }
}


/***/ }),

/***/ "eJoU":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-search-travellers/airline-search-travellers.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AirlineSearchTravellersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineSearchTravellersComponent", function() { return AirlineSearchTravellersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _services_airline_passenger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/airline-passenger.service */ "TPXw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");










const _c0 = ["travellersSelect"];
const _c1 = ["countPopupDiv"];
const _c2 = ["travellersDiv"];
function AirlineSearchTravellersComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AirlineSearchTravellersComponent_div_9_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", number_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", number_r6, " ");
} }
function AirlineSearchTravellersComponent_div_9_div_11_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ptcCode_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ptcCode_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.getPtcLabel(ptcCode_r10), " ");
} }
function AirlineSearchTravellersComponent_div_9_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AirlineSearchTravellersComponent_div_9_div_11_Template_mat_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r8 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.airlineSearch.travellers[i_r8].ptc = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AirlineSearchTravellersComponent_div_9_div_11_mat_option_5_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Traveller-", i_r8 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.airlineSearch.travellers[i_r8].ptc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.supportedPtcs);
} }
function AirlineSearchTravellersComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AirlineSearchTravellersComponent_div_9_Template_mat_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.airlineSearch.travellers.length = $event; })("selectionChange", function AirlineSearchTravellersComponent_div_9_Template_mat_select_selectionChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.totalNumberChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AirlineSearchTravellersComponent_div_9_mat_option_8_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AirlineSearchTravellersComponent_div_9_div_11_Template, 6, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.airlineSearch.travellers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.airlineSearch.travellers)("ngForTrackBy", ctx_r2.index);
} }
class AirlineSearchTravellersComponent extends _airline__WEBPACK_IMPORTED_MODULE_1__["Airline"] {
    constructor(loginService, renderer, passengerService) {
        super(loginService);
        this.renderer = renderer;
        this.passengerService = passengerService;
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.supportedPtcs = this.passengerService.getSupportedPtcs();
    }
    ngOnInit() {
        this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this));
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
        this.docClickSubscription();
    }
    onDocumentClick(event) {
        if (this.countPopupDiv != null && (this.countPopupDiv.nativeElement.contains(event.target)
            || event.target.className.indexOf("mat-option-text") != -1)
            || event.target.className.indexOf("search_inputField h2 count") != -1
            || event.target.className.indexOf("display6 count") != -1
            || this.travellersDiv.nativeElement.contains(event.target)) {
        }
        else {
            this.showPTC = false;
        }
    }
    totalNumberChanged(t) {
        for (let i = 0; i < this.airlineSearch.travellers.length; i++) {
            if (!this.airlineSearch.travellers[i]) {
                this.airlineSearch.travellers[i] = {
                    index: i,
                    ptc: this.passengerService.getAdult().ptcCode
                };
            }
        }
    }
    travellerPtcChanged($event, index) {
        this.airlineSearch.travellers[index] = $event.value;
    }
    getPtcLabel(ptcCode) {
        return this.passengerService.getPtcLabel(ptcCode);
    }
}
AirlineSearchTravellersComponent.ɵfac = function AirlineSearchTravellersComponent_Factory(t) { return new (t || AirlineSearchTravellersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_passenger_service__WEBPACK_IMPORTED_MODULE_3__["AirlinePassengerService"])); };
AirlineSearchTravellersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineSearchTravellersComponent, selectors: [["app-airline-search-travellers"]], viewQuery: function AirlineSearchTravellersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.travellersSelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.countPopupDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.travellersDiv = _t.first);
    } }, inputs: { airlineSearch: "airlineSearch", fontStyle: "fontStyle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 4, consts: [[1, "relative"], [1, "searchContent", 3, "click"], ["travellersDiv", ""], [1, "search_lbl", "text-dark-50", "pb-2"], [1, "fas", "fa-users", "text-primary"], ["id", "count", 1, "search_inputField", "count", "text-truncate", 3, "ngClass"], [4, "ngIf"], ["class", "card card-custom popoverCustom1 count-popover w-auto", 4, "ngIf"], [1, "card", "card-custom", "popoverCustom1", "count-popover", "w-auto"], ["countPopupDiv", ""], [1, "card-header", "mt-1"], [1, "form-group", "mb-0", "mr-3"], [1, "font-size-h2", "mb-0"], ["appearance", "outline", 1, "max-width-150", "ml-5"], [3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "card-body", "p-5", "max-width-350"], [1, "d-flex", "flex-wrap"], ["class", "form-group max-width-150 p-1", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "value"], [1, "form-group", "max-width-150", "p-1"], [1, "font-size-h5", "mb-0"], ["appearance", "outline", 1, "w-100"], [3, "ngModel", "ngModelChange"]], template: function AirlineSearchTravellersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineSearchTravellersComponent_Template_div_click_1_listener() { return ctx.showPTC = !ctx.showPTC; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Travellers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AirlineSearchTravellersComponent_ng_container_8_Template, 2, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AirlineSearchTravellersComponent_div_9_Template, 12, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.fontStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.airlineSearch.travellers.length, " Traveller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.airlineSearch.travellers.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPTC);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: [".count-popover[_ngcontent-%COMP%]{\n    top: 75px;\n    left: 15px;\n    min-width: 350px;\n    box-shadow: 0px 4px 20px rgb(0 0 0 / 15%) !important;\n}\n\n.max-width-150[_ngcontent-%COMP%]{\n    max-width: 150px;\n}\n\n.max-width-350[_ngcontent-%COMP%]{\n    max-width: 350px;\n}\n\n.form-group[_ngcontent-%COMP%]{\n    margin-bottom: 0;\n}\n\n .mat-form-field-wrapper {\n    padding-bottom: 0.5em;\n}\n\n.relative[_ngcontent-%COMP%]{\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLXNlYXJjaC10cmF2ZWxsZXJzL2FpcmxpbmUtc2VhcmNoLXRyYXZlbGxlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFydGlhbHMvYWlybGluZS1zZWFyY2gtdHJhdmVsbGVycy9haXJsaW5lLXNlYXJjaC10cmF2ZWxsZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnQtcG9wb3ZlcntcbiAgICB0b3A6IDc1cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2IoMCAwIDAgLyAxNSUpICFpbXBvcnRhbnQ7XG59XG5cbi5tYXgtd2lkdGgtMTUwe1xuICAgIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5tYXgtd2lkdGgtMzUwe1xuICAgIG1heC13aWR0aDogMzUwcHg7XG59XG5cbi5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xufVxuLnJlbGF0aXZle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineSearchTravellersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-search-travellers',
                templateUrl: './airline-search-travellers.component.html',
                styleUrls: ['./airline-search-travellers.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _services_airline_passenger_service__WEBPACK_IMPORTED_MODULE_3__["AirlinePassengerService"] }]; }, { airlineSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fontStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], travellersSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['travellersSelect']
        }], countPopupDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['countPopupDiv']
        }], travellersDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['travellersDiv']
        }] }); })();


/***/ }),

/***/ "hQt1":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/airline/services/airline-seat-availability.service.ts ***!
  \***********************************************************************************/
/*! exports provided: AirlineSeatAvailabilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineSeatAvailabilityService", function() { return AirlineSeatAvailabilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline_retrieve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airline-retrieve.service */ "1jwl");
/* harmony import */ var _airline_passenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airline-passenger.service */ "TPXw");




class AirlineSeatAvailabilityService {
    constructor(airlineRetrieveService, passengerService) {
        this.airlineRetrieveService = airlineRetrieveService;
        this.passengerService = passengerService;
    }
    loadSeats(orderID, owner) {
        let query = {
            query: {
                order: {
                    orderID: orderID,
                    owner: owner,
                }
            }
        };
        return this.airlineRetrieveService.getSeatAvailability(query);
    }
    bookSelectedSeats(orderID, orderViewModel) {
        let passengers = orderViewModel.passengers;
        let passengerList = orderViewModel.passengerList;
        passengerList.passenger.forEach(p => this.passengerService.updatePassengerBeforeSending(p));
        let offerItems = [];
        passengers.forEach(p => {
            let selectedSeats = p.orderSummary.selectedSeats.filter(s => s.seat.offerItemID);
            if (selectedSeats.length) {
                selectedSeats.forEach(selectedSeat => {
                    offerItems.push({
                        passengerRefs: [p.data.passengerID],
                        offerItemID: selectedSeat.seat.offerItemID,
                        seatSelection: {
                            row: selectedSeat.seat.row,
                            column: selectedSeat.seat.column
                        }
                    });
                });
            }
        });
        let request = {
            query: {
                orderServicing: {
                    acceptOffer: {
                        offer: [{
                                offerID: orderViewModel.seatSelectionRQ.offerID,
                                responseID: orderViewModel.seatSelectionRQ.responseID,
                                owner: orderViewModel.seatSelectionRQ.owner,
                                offerItem: offerItems
                            }]
                    }
                },
                orderID: orderID
            },
            dataLists: {
                passengerList: passengerList,
                contactList: orderViewModel.contactList
            },
        };
        return this.airlineRetrieveService.orderChange(request, "Booking seats...", true);
    }
    updateFlightsWithSeats(flights, data) {
        flights.forEach(flight => {
            flight.flightSegments.forEach(segment => {
                let seatMaps = data.seatMap.filter(i => i.segmentRef.value.segmentKey == segment.segmentKey);
                if (seatMaps && seatMaps.length) {
                    segment.seatMap = this.initSeatMaps(seatMaps);
                }
            });
        });
    }
    initSeatMaps(seatMaps) {
        let result = seatMaps[0];
        seatMaps.forEach(map => {
            if (map != result) {
                map.cabin.forEach(c => result.cabin.push(c));
            }
        });
        for (let cabin of result.cabin) {
            let components = cabin.component;
            let columns = cabin.cabinLayout.columns;
            this.setWidth(columns, cabin);
            for (let i = 0; i < cabin.row.length; i++) {
                let row = cabin.row[i];
                let rowNumber = row.number != null ? row.number.value : '';
                for (let j = 0; j < row.seat.length; j++) {
                    let seat = row.seat[j];
                    if (rowNumber != '') {
                        seat.rowNumber = Number(rowNumber);
                    }
                }
            }
            for (let component of components) {
                let type = component.type;
                let beforeOrAfter = component.location.rowPosition.beforeOrAfter;
                let begin = component.location.rowPosition.begin;
                // let end = component.location.rowPosition.end;
                let columnPosition = component.location.rowPosition.columnPosition;
                if (["BK"].includes(type)) {
                    continue;
                }
                if (beforeOrAfter != null) {
                    let emptyRow = this.getEmptyRow(columns, type, columnPosition);
                    let index = cabin.row.findIndex(i => i.number && Number(i.number.value) == begin);
                    if (beforeOrAfter == 'AFTER') {
                        index += 1;
                    }
                    if (index === cabin.row.length || ((index === 0 || (index > 0 && index < cabin.row.length && !cabin.row[index - 1].notSeat)) && !cabin.row[index].notSeat)) {
                        cabin.row.splice(index, 0, emptyRow);
                    }
                }
            }
            for (let i = 0; i < cabin.row.length; i++) {
                let row = cabin.row[i];
                if (!row.notSeat) {
                    let seatNumberRow = this.getSeatNumberRow(columns);
                    cabin.row.splice(i, 0, seatNumberRow);
                    break;
                }
            }
        }
        /*let obj = {} as any;
        for(let segment of this.segmentArr) {
          console.log(segment.segmentKey);
          for(let seats of segment.seats) {
            for(let cabin of seats.cabin) {
              let exitRowPositions = cabin.cabinLayout.exitRowPosition;
              let rowsLayout = cabin.cabinLayout.rows;
              let components = cabin.component;
              // console.log(exitRowPositions);
              for(let row of cabin.row) {
                // console.log(row.number.value);
                      let columns = [];
                for(let seat of row.seat) {
                  columns.push(seat.column);
                  // console.log(seat.column);
                  // console.log(seat.seatCharacteristics.code.join(","));
                  obj[seat.column] = obj[seat.column] || [];
                  let code = seat.seatCharacteristics.code;
                  let codes = [];
                  for(let c of code) {
                    if(c != 'LS' && c!= 'RS') {
                      codes.push(this.seatCharacteristics[c]);
                    }
                  }
                  // if(this.isExitRowPositions(exitRowPositions, row.number.value)) {
                  //   codes.push('Exit');
                  // }
                  obj[seat.column].push(codes.join(","));
                  if(row.number.value == rowsLayout.last) {
                    obj[seat.column].push('');
                  }
                }
                      // console.log(columns.join(","));
              }
            }
          }
          break;
        }
        console.log(obj);*/
        return result;
    }
    getSeatNumberRow(columns) {
        let row = {
            "seat": [],
            isSeatNumberDisplay: true
        };
        row.seat = JSON.parse(JSON.stringify(columns));
        for (let seat of row.seat) {
            seat.isSeatNumberDisplay = true;
        }
        return row;
    }
    getEmptyRow(columns, type, columnPosition) {
        let row = {
            "seat": [],
            notSeat: true
        };
        row.seat = JSON.parse(JSON.stringify(columns));
        let i = 0;
        for (let seat of row.seat) {
            if (columnPosition.includes(seat.value)) {
                seat.type = type;
            }
            if (type == 'D' && (i == 0 || i == (row.seat.length - 1))) {
                if (i == 0) {
                    seat.icon = 'exitL.svg';
                }
                else {
                    seat.icon = 'exitR.svg';
                }
            }
            else {
                seat.notSeat = true;
            }
            i++;
        }
        return row;
    }
    setWidth(columns, cabin) {
        let aisleCount = 0;
        let spacesCount = 0;
        let index = 0;
        let aisleIndexes = [];
        for (let row of columns) {
            if (row.position == "A") {
                aisleCount++;
            }
            else {
                aisleCount = 0;
            }
            if (aisleCount == 2) {
                spacesCount++;
                aisleIndexes.push(index);
            }
            index++;
        }
        let width = 100 / (columns.length + spacesCount + 2);
        cabin.width = width;
        cabin.aisleIndexes = aisleIndexes;
        // console.log('setWidth', columns.length+spacesCount+2, width);
    }
}
AirlineSeatAvailabilityService.ɵfac = function AirlineSeatAvailabilityService_Factory(t) { return new (t || AirlineSeatAvailabilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_1__["AirlineRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_passenger_service__WEBPACK_IMPORTED_MODULE_2__["AirlinePassengerService"])); };
AirlineSeatAvailabilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirlineSeatAvailabilityService, factory: AirlineSeatAvailabilityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineSeatAvailabilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _airline_retrieve_service__WEBPACK_IMPORTED_MODULE_1__["AirlineRetrieveService"] }, { type: _airline_passenger_service__WEBPACK_IMPORTED_MODULE_2__["AirlinePassengerService"] }]; }, null); })();


/***/ }),

/***/ "i911":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/airline/pages/airline-payment/airline-payment.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AirlinePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlinePaymentComponent", function() { return AirlinePaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _partials_airline_payment_form_airline_payment_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/airline-payment-form/airline-payment-form.component */ "Gtix");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _services_airline_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/airline-order.service */ "utjK");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/airline-retrieve.service */ "1jwl");
/* harmony import */ var _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/airline-payment.service */ "dAfP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _partials_airline_errors_airline_errors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../partials/airline-errors/airline-errors.component */ "tX8+");
/* harmony import */ var _partials_airline_order_summary_airline_order_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../partials/airline-order-summary/airline-order-summary.component */ "yJtm");
/* harmony import */ var _partials_airline_payment_summary_airline_payment_summary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../partials/airline-payment-summary/airline-payment-summary.component */ "vY2y");















function AirlinePaymentComponent_div_0_app_airline_order_summary_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-airline-order-summary", 21);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("passengers", ctx_r1.orderViewModel.passengers);
} }
function AirlinePaymentComponent_div_0_app_airline_payment_summary_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-airline-payment-summary", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("makePayment", function AirlinePaymentComponent_div_0_app_airline_payment_summary_24_Template_app_airline_payment_summary_makePayment_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.pay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderViewModel", ctx_r2.orderViewModel)("payments", ctx_r2.orderViewModel.payments)("passengers", ctx_r2.orderViewModel.passengers);
} }
function AirlinePaymentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Provide Payment Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlinePaymentComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.backToOrderDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back to order details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-airline-errors", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-airline-payment-form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AirlinePaymentComponent_div_0_app_airline_order_summary_22_Template, 1, 1, "app-airline-order-summary", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AirlinePaymentComponent_div_0_app_airline_payment_summary_24_Template, 1, 3, "app-airline-payment-summary", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidePaymentTypeSelection", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.orderViewModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.orderViewModel);
} }
class AirlinePaymentComponent extends _airline__WEBPACK_IMPORTED_MODULE_1__["Airline"] {
    constructor(router, loginService, airlineOrderService, _snackBar, activatedRoute, airlineRetrieveService, airlinePaymentService) {
        super(loginService);
        this.router = router;
        this.airlineOrderService = airlineOrderService;
        this._snackBar = _snackBar;
        this.activatedRoute = activatedRoute;
        this.airlineRetrieveService = airlineRetrieveService;
        this.airlinePaymentService = airlinePaymentService;
        this.isSubmitted = false;
        this.order = {
            flightSegment: [],
            passengerList: [],
            contactList: []
        };
        document.body.style.backgroundSize = "100% 165px";
        this.activatedRoute.params.subscribe(params => {
            this.orderId = params.id;
        });
        if (this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.orderViewModel) {
            this.orderViewModel = this.router.getCurrentNavigation().extras.state.orderViewModel;
        }
        else {
            this.airlineRetrieveService.getOrderById(this.orderId).subscribe((data) => {
                this.orderViewModel = this.airlineOrderService.getOrderViewModel(data);
            });
        }
    }
    backToOrderDetails() {
        this.router.navigateByUrl('/Airlines/Orders/' + this.orderId, { state: { orderViewModel: this.orderViewModel } });
    }
    pay() {
        this.isSubmitted = true;
        if (this.airlinePaymentFormComponent.isPaymentFormValid()) {
            this.airlinePaymentService.pay(this.airlinePaymentFormComponent.creditCardFG.value, this.orderId).subscribe((data) => {
                let orderViewModel = this.airlineOrderService.getOrderViewModel(data);
                this.router.navigateByUrl('/Airlines/Orders/' + this.orderId, { state: { orderViewModel: orderViewModel } });
            });
        }
        else {
            this.airlinePaymentFormComponent.markAllAsTouched();
        }
    }
}
AirlinePaymentComponent.ɵfac = function AirlinePaymentComponent_Factory(t) { return new (t || AirlinePaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_order_service__WEBPACK_IMPORTED_MODULE_5__["AirlineOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_7__["AirlineRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_payment_service__WEBPACK_IMPORTED_MODULE_8__["AirlinePaymentService"])); };
AirlinePaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlinePaymentComponent, selectors: [["app-airline-payment"]], viewQuery: function AirlinePaymentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_partials_airline_payment_form_airline_payment_form_component__WEBPACK_IMPORTED_MODULE_2__["AirlinePaymentFormComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.airlinePaymentFormComponent = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "lr_content", 1, "content", "d-flex", "flex-column", "flex-column-fluid", "pt-0"], [1, "d-flex", "flex-column-fluid", "borderHeader"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "gutter-b", "d-flex"], [1, "brdSmallBlock_inner", "pt-4", "flex-column"], [1, "text-white", "pl-2"], [1, "text-white-50", "pl-2"], [1, "gutter-b"], [1, "d-flex", "justify-content-end", "mb-3"], ["title", "Back to order details", 1, "btn", "btn-primary", "ml-5", 3, "click"], [1, "mb-3"], [3, "errors"], [1, "col-9"], [3, "hidePaymentTypeSelection"], [1, "col-3"], [3, "passengers", 4, "ngIf"], [1, "mt-5"], [3, "orderViewModel", "payments", "passengers", "makePayment", 4, "ngIf"], [3, "passengers"], [3, "orderViewModel", "payments", "passengers", "makePayment"]], template: function AirlinePaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AirlinePaymentComponent_div_0_Template, 25, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderId != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _partials_airline_errors_airline_errors_component__WEBPACK_IMPORTED_MODULE_10__["AirlineErrorsComponent"], _partials_airline_payment_form_airline_payment_form_component__WEBPACK_IMPORTED_MODULE_2__["AirlinePaymentFormComponent"], _partials_airline_order_summary_airline_order_summary_component__WEBPACK_IMPORTED_MODULE_11__["AirlineOrderSummaryComponent"], _partials_airline_payment_summary_airline_payment_summary_component__WEBPACK_IMPORTED_MODULE_12__["AirlinePaymentSummaryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFnZXMvYWlybGluZS1wYXltZW50L2FpcmxpbmUtcGF5bWVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlinePaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-payment',
                templateUrl: './airline-payment.component.html',
                styleUrls: ['./airline-payment.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _services_airline_order_service__WEBPACK_IMPORTED_MODULE_5__["AirlineOrderService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_7__["AirlineRetrieveService"] }, { type: _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_8__["AirlinePaymentService"] }]; }, { airlinePaymentFormComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_partials_airline_payment_form_airline_payment_form_component__WEBPACK_IMPORTED_MODULE_2__["AirlinePaymentFormComponent"]]
        }] }); })();


/***/ }),

/***/ "iDR2":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-order-rloc/airline-order-rloc.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AirlineOrderRlocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineOrderRlocComponent", function() { return AirlineOrderRlocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/storage/local-storage */ "ADqn");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");









function AirlineOrderRlocComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.orderId);
} }
function AirlineOrderRlocComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Firelogix: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.firelogixRloc);
} }
function AirlineOrderRlocComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const airline_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", airline_r7.text, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", airline_r7.id, " \u00A0 ");
} }
function AirlineOrderRlocComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlineOrderRlocComponent_ng_container_5_ng_container_1_Template, 4, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.airlineRlocs);
} }
function AirlineOrderRlocComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your Order has been confirmed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrderRlocComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your Order is on Hold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineOrderRlocComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rloc_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rloc_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rloc_r8.text, " ");
} }
class AirlineOrderRlocComponent extends _airline__WEBPACK_IMPORTED_MODULE_1__["Airline"] {
    constructor(localStorage, loginService) {
        super(loginService);
        this.localStorage = localStorage;
        this.rlocs = [{
                id: 'OrderId',
                text: 'Order Id'
            }, {
                id: 'Firelogix',
                text: 'Firelogix',
            }, {
                id: 'Airline',
                text: 'Airline'
            }];
    }
    ngOnInit() {
        var _a;
        let selectedRlocId = this.localStorage.getItem(this.localStorage.keys.airline.selectedRlocId);
        if (selectedRlocId) {
            this.selectedRloc = this.rlocs.find(i => i.id == selectedRlocId);
        }
        if (!this.selectedRloc) {
            this.selectedRloc = this.rlocs[0];
        }
        this.firelogixRloc = (_a = this.bookingReferences.find(i => i.otherID && i.otherID.value == 'F1')) === null || _a === void 0 ? void 0 : _a.id;
        this.airlineRlocs = this.bookingReferences
            .filter(i => i.airlineID)
            .map(i => {
            return {
                id: i.id,
                text: this.getOperatedCarrierText(i.airlineID.value, i.airlineID.name)
            };
        });
    }
    selectedRlocChanged() {
        if (this.selectedRloc) {
            this.localStorage.setItem(this.localStorage.keys.airline.selectedRlocId, this.selectedRloc.id);
        }
    }
}
AirlineOrderRlocComponent.ɵfac = function AirlineOrderRlocComponent_Factory(t) { return new (t || AirlineOrderRlocComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
AirlineOrderRlocComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineOrderRlocComponent, selectors: [["app-airline-order-rloc"]], inputs: { bookingReferences: "bookingReferences", orderId: "orderId", payments: "payments" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 7, consts: [[1, "row"], [1, "col-9"], [1, "text-white", "h3"], [4, "ngIf"], ["class", "text-white-50", 4, "ngIf"], [1, "col-3", "text-right"], [1, "text-white", "pr-2"], ["appearance", "fill", 1, "rloc"], [3, "value", "selectionChange", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "opacity-70"], [4, "ngFor", "ngForOf"], [1, "text-white-50"], [1, "fas", "fa-check-circle", "text-success", "icon-xl"], [1, "fas", "fa-pause-circle", "text-warning", "icon-xl"], [3, "value"]], template: function AirlineOrderRlocComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirlineOrderRlocComponent_ng_container_3_Template, 4, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AirlineOrderRlocComponent_ng_container_4_Template, 4, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AirlineOrderRlocComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AirlineOrderRlocComponent_div_6_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AirlineOrderRlocComponent_div_7_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PNR Locator:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AirlineOrderRlocComponent_Template_mat_select_selectionChange_12_listener() { return ctx.selectedRlocChanged(); })("valueChange", function AirlineOrderRlocComponent_Template_mat_select_valueChange_12_listener($event) { return ctx.selectedRloc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AirlineOrderRlocComponent_mat_option_13_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedRloc.id == "OrderId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedRloc.id == "Firelogix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedRloc.id == "Airline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.payments != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.payments == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedRloc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rlocs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: [".rloc.mat-form-field-appearance-fill .mat-form-field-flex{\n    border-radius: 4px;\n    padding: 0.5em 0.75em;\n    background-color: rgba(0,0,0,.24);\n  }\n\n  .rloc .mat-form-field-wrapper{\n    padding: 0;\n}\n\n  .rloc.mat-form-field-appearance-fill .mat-form-field-infix {\n    padding: 0;\n}\n\n  .rloc .mat-form-field-underline{\n    display: none;\n}\n\n  .rloc.mat-form-field{\n    width: 100px;\n}\n\n  .rloc .mat-select-value,   .rloc .mat-select-arrow {\n    color: #ffffff;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLW9yZGVyLXJsb2MvYWlybGluZS1vcmRlci1ybG9jLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlDQUFpQztFQUNuQzs7QUFFRjtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFydGlhbHMvYWlybGluZS1vcmRlci1ybG9jL2FpcmxpbmUtb3JkZXItcmxvYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5ybG9jLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMC41ZW0gMC43NWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjI0KTtcbiAgfVxuXG46Om5nLWRlZXAgLnJsb2MgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gICAgcGFkZGluZzogMDtcbn1cblxuOjpuZy1kZWVwIC5ybG9jLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDA7XG59XG46Om5nLWRlZXAgLnJsb2MgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIC5ybG9jLm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDBweDtcbn1cbjo6bmctZGVlcCAucmxvYyAubWF0LXNlbGVjdC12YWx1ZSwgOjpuZy1kZWVwIC5ybG9jIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineOrderRlocComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-order-rloc',
                templateUrl: './airline-order-rloc.component.html',
                styleUrls: ['./airline-order-rloc.component.css']
            }]
    }], function () { return [{ type: src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }]; }, { bookingReferences: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orderId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], payments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ivhT":
/*!*****************************************!*\
  !*** ./src/app/operators/dirtyCheck.ts ***!
  \*****************************************/
/*! exports provided: dirtyCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirtyCheck", function() { return dirtyCheck; });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "aUsF");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



function dirtyCheck(source) {
    return function (valueChanges) {
        const isDirty$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([source,
            valueChanges]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([a, b]) => fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__(a, b) === false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(false));
        return isDirty$;
    };
}


/***/ }),

/***/ "ni+9":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-search-header/airline-search-header.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AirlineSearchHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineSearchHeaderComponent", function() { return AirlineSearchHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _store_airline_airline_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../store/airline/airline.actions */ "wJS7");
/* harmony import */ var src_app_store_airline_airline_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/airline/airline.state */ "YYlJ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/storage/local-storage */ "ADqn");
/* harmony import */ var _services_airline_passenger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/airline-passenger.service */ "TPXw");
/* harmony import */ var _services_airline_datetime_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/airline-datetime.service */ "TGhc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _airport_code_search_airport_code_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../airport-code-search/airport-code-search.component */ "MTiZ");
/* harmony import */ var _airport_search_date_airport_search_date_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../airport-search-date/airport-search-date.component */ "QsbY");
/* harmony import */ var _airline_search_travellers_airline_search_travellers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../airline-search-travellers/airline-search-travellers.component */ "eJoU");

















const _c0 = ["tripSelect"];
function AirlineSearchHeaderComponent_ng_container_16_div_1_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AirlineSearchHeaderComponent_ng_container_16_div_1_div_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.removeFlight(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", i_r5 == 0 ? ctx_r11.from == "dashboard" ? "mt-12" : "mt-7" : ctx_r11.from == "dashboard" ? "mt-3" : "");
} }
function AirlineSearchHeaderComponent_ng_container_16_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AirlineSearchHeaderComponent_ng_container_16_div_1_div_1_button_1_Template, 2, 1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.airlineSearch.flights.length > 1);
} }
function AirlineSearchHeaderComponent_ng_container_16_div_1_app_airport_search_date_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-airport-search-date", 25);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const i_r5 = ctx_r16.index;
    const flight_r4 = ctx_r16.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Return")("showLabel", i_r5 == 0)("fontStyle", ctx_r8.fontStyle)("minDate", flight_r4.departureDate)("maxDate", ctx_r8.maxToDate)("flight", ctx_r8.airlineSearch.flights[1])("field", "departureDate");
} }
function AirlineSearchHeaderComponent_ng_container_16_div_1_app_airline_search_travellers_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-airline-search-travellers", 33);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fontStyle", ctx_r9.fontStyle)("airlineSearch", ctx_r9.airlineSearch);
} }
function AirlineSearchHeaderComponent_ng_container_16_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AirlineSearchHeaderComponent_ng_container_16_div_1_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r17.validateAndSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AirlineSearchHeaderComponent_ng_container_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AirlineSearchHeaderComponent_ng_container_16_div_1_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "airport-code-search", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("isSubmittedChange", function AirlineSearchHeaderComponent_ng_container_16_div_1_Template_airport_code_search_isSubmittedChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.isSubmitted = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AirlineSearchHeaderComponent_ng_container_16_div_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const flight_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.swipBtn(flight_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "airport-code-search", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("isSubmittedChange", function AirlineSearchHeaderComponent_ng_container_16_div_1_Template_airport_code_search_isSubmittedChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.isSubmitted = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-airport-search-date", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AirlineSearchHeaderComponent_ng_container_16_div_1_app_airport_search_date_7_Template, 1, 7, "app-airport-search-date", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AirlineSearchHeaderComponent_ng_container_16_div_1_app_airline_search_travellers_8_Template, 1, 2, "app-airline-search-travellers", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AirlineSearchHeaderComponent_ng_container_16_div_1_div_9_Template, 4, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r5 = ctx_r24.index;
    const flight_r4 = ctx_r24.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r6.blockClass + "_inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.airlineSearch.tripType == "multi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showLabel", i_r5 == 0)("fontStyle", ctx_r6.fontStyle)("flight", flight_r4)("field", "from")("label", ctx_r6.displayLabel.from)("isSubmitted", ctx_r6.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", i_r5 == 0 ? "mt-8" : "mt-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showLabel", i_r5 == 0)("label", ctx_r6.displayLabel.to)("fontStyle", ctx_r6.fontStyle)("flight", flight_r4)("field", "to")("isSubmitted", ctx_r6.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Departure")("showLabel", i_r5 == 0)("fontStyle", ctx_r6.fontStyle)("minDate", ctx_r6.minFromDate)("maxDate", ctx_r6.maxFromDate)("flight", flight_r4)("field", "departureDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.airlineSearch.tripType == "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r5 == 0 && !ctx_r6.hidePtc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.showSearchButton && i_r5 == 0);
} }
function AirlineSearchHeaderComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AirlineSearchHeaderComponent_ng_container_16_div_1_Template, 10, 25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(i_r5 > 0 && ctx_r0.airlineSearch.tripType == "round"));
} }
function AirlineSearchHeaderComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AirlineSearchHeaderComponent_div_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.addFlight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Add flight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AirlineSearchHeaderComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Max ", ctx_r2.maxNumberOfFlights, " flights supported. ");
} }
function AirlineSearchHeaderComponent_input_24_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AirlineSearchHeaderComponent_input_24_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.airlineSearch.loyaltyAccountNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.airlineSearch.loyaltyAccountNumber);
} }
class AirlineSearchHeaderComponent {
    constructor(loginService, renderer, localStorage, passengerService, airlineDatetimeService, store) {
        this.renderer = renderer;
        this.localStorage = localStorage;
        this.passengerService = passengerService;
        this.airlineDatetimeService = airlineDatetimeService;
        this.store = store;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.maxNumberOfFlights = 5;
        this.airLinesData = {};
        this.airlineLoading = false;
        this.loadingLeavingFrom = false;
        this.loadingLeavingTo = false;
        this.minToDate = new Date();
        this.maxToDate = new Date(this.minToDate.getTime() + 1000 * 60 * 60 * 24 * 150);
        this.minFromDate = new Date();
        this.maxFromDate = new Date(this.minFromDate.getTime() + 1000 * 60 * 60 * 24 * 150);
        this.isSubmitted = false;
        this.displayLabel = {
            to: 'Going To',
            from: 'Leaving From'
        };
        document.body.style.backgroundSize = "100% 165px";
    }
    defaultTo() {
        return {
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
    }
    defaultFrom() {
        return { "id": "DFW",
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
    }
    getAirlineSearch() {
        return JSON.parse(JSON.stringify(this.airlineSearch));
    }
    ngAfterViewInit() {
        if (this.loadLatestSearch && this.airlineSearch) {
            setTimeout(() => this.validateAndSearch(), 100);
        }
    }
    ngOnInit() {
        if (this.airlineSearch) {
            return;
        }
        this.airlineSearch = {
            flights: [],
            travellers: [{
                    index: 0,
                    ptc: this.passengerService.getAdult().ptcCode
                }],
            tripType: "one",
            loyaltyAccountNumber: '',
            isLoyaltyAccountEnabled: false
        };
        this.addFlight();
        this.searchCriteria$.subscribe((airlineSearch) => {
            if (!this.loadLatestSearch) {
                return;
            }
            if (airlineSearch != null) {
                this.airlineSearch = JSON.parse(JSON.stringify(airlineSearch));
                this.localStorage.setItem(this.localStorage.keys.airline.search, JSON.stringify(airlineSearch));
            }
            else {
                let airlineSearchTxt = this.localStorage.getItem(this.localStorage.keys.airline.search);
                if (airlineSearchTxt != null) {
                    let airlineSearch = JSON.parse(airlineSearchTxt);
                    this.checkDate(airlineSearch);
                    this.airlineSearch = airlineSearch;
                }
            }
        });
    }
    setTripType(tripType) {
        this.airlineSearch.tripType = tripType;
        switch (tripType) {
            case "one":
                this.airlineSearch.flights.splice(1);
                break;
            case "round":
                this.airlineSearch.flights.splice(1);
                this.addFlight();
                break;
            case "multi":
                break;
        }
    }
    addFlight() {
        if (this.airlineSearch.flights.length >= this.maxNumberOfFlights) {
            return;
        }
        if (this.airlineSearch.flights.length == 0) {
            this.airlineSearch.flights.push({
                from: !src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? this.defaultFrom() : null,
                to: !src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? this.defaultTo() : null,
                departureDate: new Date()
            });
        }
        else {
            let lastAirport = this.airlineSearch.flights[this.airlineSearch.flights.length - 1].to;
            let firstAirport = this.airlineSearch.flights[0].from;
            this.airlineSearch.flights.push({
                from: JSON.parse(JSON.stringify(lastAirport)),
                to: JSON.parse(JSON.stringify(firstAirport)),
                departureDate: this.airlineSearch.flights[this.airlineSearch.flights.length - 1].departureDate
            });
        }
    }
    removeFlight(index) {
        this.airlineSearch.flights.splice(index, 1);
    }
    validateAndSearch() {
        // if(this.searchFormGroup.valid) {
        // let searchFormGroupValue = this.searchFormGroup.value;
        this.localStorage.setItem(this.localStorage.keys.airline.search, JSON.stringify(this.airlineSearch));
        // copy to avoid read-only problems
        this.store.dispatch(new _store_airline_airline_actions__WEBPACK_IMPORTED_MODULE_3__["SetSearchCriteriaData"](JSON.parse(JSON.stringify(this.airlineSearch))));
        this.search.emit();
        // } else {
        // this.searchFormGroup.markAllAsTouched();
        // this.isSubmitted = true;
        // }
    }
    checkDate(airlineSearch) {
        var now = new Date();
        const time = this.airlineDatetimeService.truncateTime(now);
        let dateChange = false;
        airlineSearch.flights.forEach((flight) => {
            if (Date.parse(this.airlineDatetimeService.truncateTime(flight.departureDate)) < Date.parse(time)) {
                flight.departureDate = now;
                dateChange = true;
            }
        });
        if (dateChange) {
            this.localStorage.setItem('searchFormGroup', JSON.stringify(airlineSearch));
        }
    }
    swipBtn(flight) {
        if (this.airlineSearch.tripType === 'round') {
            this.airlineSearch.flights.forEach(i => this.switchFromTo(i));
        }
        else {
            this.switchFromTo(flight);
        }
    }
    switchFromTo(flight) {
        let fromValue = flight.from;
        flight.from = flight.to;
        flight.to = fromValue;
    }
}
AirlineSearchHeaderComponent.ɵfac = function AirlineSearchHeaderComponent_Factory(t) { return new (t || AirlineSearchHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_airline_passenger_service__WEBPACK_IMPORTED_MODULE_8__["AirlinePassengerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_airline_datetime_service__WEBPACK_IMPORTED_MODULE_9__["AirlineDatetimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AirlineSearchHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AirlineSearchHeaderComponent, selectors: [["app-airline-search-header"]], viewQuery: function AirlineSearchHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tripSelect = _t.first);
    } }, inputs: { showSearchButton: "showSearchButton", fontStyle: "fontStyle", blockClass: "blockClass", loadLatestSearch: "loadLatestSearch", hidePtc: "hidePtc", from: "from", airlineSearch: "airlineSearch" }, outputs: { search: "search" }, decls: 25, vars: 9, consts: [[1, "card", "card-custom", "gutter-b", "card-stretch", "rounded-xl"], [1, "card-header", "border-0"], [1, "card-toolbar"], [1, "nav", "nav-bold", "nav-pills"], [1, "nav-item", 3, "click"], [1, "nav-link", "cursor-pointer", 3, "ngClass"], [1, "nav-item", "cursor-pointer", 3, "click"], [1, "nav-link", 3, "ngClass"], [1, "card-body", "pt-0", "pl-6", "pr-6"], [1, "card", "card-custom", "mb-3"], [3, "ngClass"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "bg-warning p-3 h6", 4, "ngIf"], [1, "d-flex", "pt-3", "mt-3"], [1, "checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "mr-1"], ["type", "text", "class", "form-control w-200px ml-2", "placeholder", "Enter Frequent Flyer Code", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "text-centerrounded-top-right rounded-bottom-right", 4, "ngIf"], [1, "searchCity", 3, "showLabel", "fontStyle", "flight", "field", "label", "isSubmitted", "isSubmittedChange"], [1, "swipBtn", 3, "ngClass", "click"], [1, "fas", "fa-exchange-alt", "text-primary"], [1, "searchCity", 3, "showLabel", "label", "fontStyle", "flight", "field", "isSubmitted", "isSubmittedChange"], [1, "searchDate", 3, "label", "showLabel", "fontStyle", "minDate", "maxDate", "flight", "field"], ["class", "searchDate", 3, "label", "showLabel", "fontStyle", "minDate", "maxDate", "flight", "field", 4, "ngIf"], ["class", "searchDate no-right-border", 3, "fontStyle", "airlineSearch", 4, "ngIf"], ["class", "bg-primary rounded-top-right rounded-bottom-right", 4, "ngIf"], [1, "text-centerrounded-top-right", "rounded-bottom-right"], ["type", "button", "class", "airline-multi-button ml-2 pb-2 btn btn-danger btn-text-white btn-hover-text-white", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "airline-multi-button", "ml-2", "pb-2", "btn", "btn-danger", "btn-text-white", "btn-hover-text-white", 3, "ngClass", "click"], [1, "fas", "fa-minus-circle", "text-white", "pr-0"], [1, "searchDate", "no-right-border", 3, "fontStyle", "airlineSearch"], [1, "bg-primary", "rounded-top-right", "rounded-bottom-right"], ["type", "button", 1, "btn", "btn-text-white", "btn-hover-text-white", "h3", "border-0", "font-weight-bold", "pt-4", "pl-6", "pb-4", 3, "click"], [1, "far", "fa-arrow-alt-circle-right", "text-white"], ["type", "button", 1, "airline-multi-button", "ml-2", "mt-7", "btn", "btn-success", "btn-text-white", "btn-hover-text-white", 3, "click"], [1, "fas", "fa-plus-circle", "text-white", "pr-0"], [1, "bg-warning", "p-3", "h6"], ["type", "text", "placeholder", "Enter Frequent Flyer Code", 1, "form-control", "w-200px", "ml-2", 3, "ngModel", "ngModelChange"]], template: function AirlineSearchHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AirlineSearchHeaderComponent_Template_li_click_4_listener() { return ctx.setTripType("one"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "One Way");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AirlineSearchHeaderComponent_Template_li_click_7_listener() { return ctx.setTripType("round"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Round Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AirlineSearchHeaderComponent_Template_li_click_10_listener() { return ctx.setTripType("multi"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Multi city");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AirlineSearchHeaderComponent_ng_container_16_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AirlineSearchHeaderComponent_div_17_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AirlineSearchHeaderComponent_div_18_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AirlineSearchHeaderComponent_Template_input_ngModelChange_21_listener($event) { return ctx.airlineSearch.isLoyaltyAccountEnabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Do you have Frequent flyer number? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AirlineSearchHeaderComponent_input_24_Template, 1, 1, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.airlineSearch.tripType == "one" ? "rounded-pill colorBg active" : "nav-pills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.airlineSearch.tripType == "round" ? "rounded-pill colorBg active" : "nav-pills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.airlineSearch.tripType == "multi" ? "rounded-pill colorBg active" : "nav-pills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.blockClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.airlineSearch.flights);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.airlineSearch.tripType == "multi" && ctx.airlineSearch.flights.length < ctx.maxNumberOfFlights);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.airlineSearch.flights.length >= ctx.maxNumberOfFlights);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.airlineSearch.isLoyaltyAccountEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.airlineSearch.isLoyaltyAccountEnabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _airport_code_search_airport_code_search_component__WEBPACK_IMPORTED_MODULE_12__["AirportCodeSearchComponent"], _airport_search_date_airport_search_date_component__WEBPACK_IMPORTED_MODULE_13__["AirportSearchDateComponent"], _airline_search_travellers_airline_search_travellers_component__WEBPACK_IMPORTED_MODULE_14__["AirlineSearchTravellersComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]], styles: [".no-right-border[_ngcontent-%COMP%]{\n    border-right: none;\n}\n\n\n.brdSmallBlock_inner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    display: flex;\n  }\n\n\n.brdBigBlock_inner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    display: flex;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLXNlYXJjaC1oZWFkZXIvYWlybGluZS1zZWFyY2gtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtFQUNmOzs7QUFHRjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLXNlYXJjaC1oZWFkZXIvYWlybGluZS1zZWFyY2gtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uby1yaWdodC1ib3JkZXJ7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG5cbi5icmRTbWFsbEJsb2NrX2lubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIFxuLmJyZEJpZ0Jsb2NrX2lubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuIl19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(src_app_store_airline_airline_state__WEBPACK_IMPORTED_MODULE_4__["AirlineStateModule"].getSearchCriteria)
], AirlineSearchHeaderComponent.prototype, "searchCriteria$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AirlineSearchHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-airline-search-header',
                templateUrl: './airline-search-header.component.html',
                styleUrls: ['./airline-search-header.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: src_app_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"] }, { type: _services_airline_passenger_service__WEBPACK_IMPORTED_MODULE_8__["AirlinePassengerService"] }, { type: _services_airline_datetime_service__WEBPACK_IMPORTED_MODULE_9__["AirlineDatetimeService"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { showSearchButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fontStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], blockClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loadLatestSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hidePtc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], from: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], tripSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tripSelect']
        }], airlineSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchCriteria$: [] }); })();


/***/ }),

/***/ "pnBo":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/airline/pages/airline-dashboard/airline-dashboard.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AirlineDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineDashboardComponent", function() { return AirlineDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/airline-search-header/airline-search-header.component */ "ni+9");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/airline-retrieve.service */ "1jwl");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









class AirlineDashboardComponent extends _airline__WEBPACK_IMPORTED_MODULE_1__["Airline"] {
    constructor(loginService, airlineRetrieveService, renderer, store, router) {
        super(loginService);
        this.airlineRetrieveService = airlineRetrieveService;
        this.renderer = renderer;
        this.store = store;
        this.router = router;
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        // this.getAllAirportSearchService();
    }
    btnSearchClick() {
        this.airlineSearchHeader.validateAndSearch();
    }
    search() {
        this.router.navigateByUrl('/Airlines/Search');
    }
}
AirlineDashboardComponent.ɵfac = function AirlineDashboardComponent_Factory(t) { return new (t || AirlineDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_4__["AirlineRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AirlineDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineDashboardComponent, selectors: [["app-airline-dashboard"]], viewQuery: function AirlineDashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_2__["AirlineSearchHeaderComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.airlineSearchHeader = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 4, consts: [[1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "row"], [1, "col-12"], [3, "loadLatestSearch", "from", "blockClass", "fontStyle", "search"], [1, "d-flex", "justify-content-center", "pt-5"], ["type", "button", 1, "btn", "btn-primary", "btn-pill", "btn-lg", "colorBg", "font-size-h3", "w-200px", "btn-shadow", 3, "click"], [1, "far", "fa-arrow-alt-circle-right"]], template: function AirlineDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-airline-search-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function AirlineDashboardComponent_Template_app_airline_search_header_search_4_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineDashboardComponent_Template_button_click_6_listener() { return ctx.btnSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loadLatestSearch", false)("from", "dashboard")("blockClass", "brdBigBlock")("fontStyle", "h1");
    } }, directives: [_partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_2__["AirlineSearchHeaderComponent"]], styles: [".product[_ngcontent-%COMP%] {\n    display: flex;\n    max-height: none;\n    max-width: none;\n    min-height: 450px;\n    padding: 30px;\n    border-radius: 20px;\n    background-color: #000;\n    text-align: center;\n  }\n  .product.green[_ngcontent-%COMP%] {\n    min-height: 450px;\n    background-image: url(\"/assets/media/green-arrows.svg\");\n    background-color: #58bd89; \n    background-position: 0px 140px;\n    background-size: 870px;\n    background-repeat: no-repeat;\n  }\n  .product.blue[_ngcontent-%COMP%]{\n    min-height: 450px;\n    display: flex;\n    background-color: #2196f3;\n    background-image: url(\"/assets/media/white-lines.svg\");\n    background-position: -290px -670px;\n    background-size: auto;\n    background-repeat: no-repeat;\n  }\n  .product-text[_ngcontent-%COMP%] {\n    display: flex;\n    max-width: 500px;\n    margin-right: auto;\n    margin-left: auto;\n    flex-direction: column;\n    justify-content: center;\n    flex: 1;\n  }\n  .heading-30[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    color: #fff;\n    font-size: 30px;\n    line-height: 36px;\n  }\n  .para-20[_ngcontent-%COMP%] {\n      color: #fff;\n      font-size: 18px;\n      line-height: 26px;\n      font-weight: 300;\n  }\n  .card.card-custom.card-stretch.gutter-b[_ngcontent-%COMP%] {\n    height: calc(100% - 65px);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYWdlcy9haXJsaW5lLWRhc2hib2FyZC9haXJsaW5lLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLHVEQUF1RDtJQUN2RCx5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNEQUFzRDtJQUN0RCxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBS2pCLHNCQUFzQjtJQUl0Qix1QkFBdUI7SUFDdkIsT0FBTztFQUNUO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7RUFDQTtNQUNJLFdBQVc7TUFDWCxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGdCQUFnQjtFQUNwQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYWdlcy9haXJsaW5lLWRhc2hib2FyZC9haXJsaW5lLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAucHJvZHVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnByb2R1Y3QuZ3JlZW4ge1xuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbWVkaWEvZ3JlZW4tYXJyb3dzLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNThiZDg5OyBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMTQwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4NzBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG4gIC5wcm9kdWN0LmJsdWV7XG4gICAgbWluLWhlaWdodDogNDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbWVkaWEvd2hpdGUtbGluZXMuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yOTBweCAtNjcwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cbiAgLnByb2R1Y3QtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC5oZWFkaW5nLTMwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgfVxuICAucGFyYS0yMCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICAuY2FyZC5jYXJkLWN1c3RvbS5jYXJkLXN0cmV0Y2guZ3V0dGVyLWIge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-dashboard',
                templateUrl: './airline-dashboard.component.html',
                styleUrls: ['./airline-dashboard.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _services_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_4__["AirlineRetrieveService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { airlineSearchHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_2__["AirlineSearchHeaderComponent"]]
        }] }); })();


/***/ }),

/***/ "qVcs":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/airline/services/airline-loader.service.ts ***!
  \************************************************************************/
/*! exports provided: AirlineLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineLoaderService", function() { return AirlineLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AirlineLoaderService {
    constructor() { }
    isLoaderShown() {
        return this.isLoading;
    }
    isLoaderHidden() {
        return !this.isLoading;
    }
    showLoader(text) {
        this.isLoading = true;
        this.loaderText = text || "";
    }
    hideLoader() {
        this.isLoading = false;
    }
    showSearchResultLoader(text) {
        this.isSearchResultLoading = true;
        this.loaderText = text || "";
    }
    hideSearchResultLoader() {
        this.isSearchResultLoading = false;
    }
    isSearchResultLoaderShown() {
        return this.isSearchResultLoading;
    }
    isSearchResultLoaderHidden() {
        return !this.isSearchResultLoading;
    }
}
AirlineLoaderService.ɵfac = function AirlineLoaderService_Factory(t) { return new (t || AirlineLoaderService)(); };
AirlineLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirlineLoaderService, factory: AirlineLoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "t5U4":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/pages/airline-create-order/airline-create-order.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AirlineCreateOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineCreateOrderComponent", function() { return AirlineCreateOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../animations */ "Ql4B");
/* harmony import */ var _partials_airline_order_summary_airline_order_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/airline-order-summary/airline-order-summary.component */ "yJtm");
/* harmony import */ var _partials_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/airline-passenger-form/airline-passenger-form.component */ "yOU+");
/* harmony import */ var _partials_airline_payment_form_airline_payment_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/airline-payment-form/airline-payment-form.component */ "Gtix");
/* harmony import */ var _partials_airline_contact_form_airline_contact_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../partials/airline-contact-form/airline-contact-form.component */ "97hE");
/* harmony import */ var _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/airline-payment.service */ "dAfP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/storage/local-storage */ "ADqn");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_airline_order_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/airline-order.service */ "utjK");
/* harmony import */ var _services_airline_flight_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/airline-flight.service */ "Pzxz");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _partials_airline_flight_item_airline_flight_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../partials/airline-flight-item/airline-flight-item.component */ "cQZ/");






















function AirlineCreateOrderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Booking Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Review Fare and provide booking details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-airline-flight-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-airline-passenger-form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-airline-contact-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-airline-payment-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineCreateOrderComponent_div_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineCreateOrderComponent_div_0_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.bookFlight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Book Flight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-airline-order-summary", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flights", ctx_r0.offerViewModel.flights);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("passengers", ctx_r0.offerViewModel.passengers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("passengers", ctx_r0.offerViewModel.passengers);
} }
class AirlineCreateOrderComponent extends _airline__WEBPACK_IMPORTED_MODULE_1__["Airline"] {
    constructor(router, localStorage, _snackBar, orderService, flightService, paymentService, loginService) {
        super(loginService);
        this.router = router;
        this.localStorage = localStorage;
        this._snackBar = _snackBar;
        this.orderService = orderService;
        this.flightService = flightService;
        this.paymentService = paymentService;
        this.isSubmitted = false;
        this.maxDate = new Date();
        document.body.style.backgroundSize = "100% 165px";
    }
    ngOnInit() {
        var _a, _b;
        let offerViewModelTxt = this.localStorage.getItem(this.localStorage.keys.airline.offerViewModel);
        if (!offerViewModelTxt) {
            this.router.navigateByUrl('/Airlines/Search');
            return;
        }
        this.offerViewModel = JSON.parse(offerViewModelTxt);
        const [fareDetail] = ((_b = (_a = this.offerViewModel.offerItems) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.fareDetail) || [];
        this.flightFaresInfo = this.flightService.getPriceRules(fareDetail === null || fareDetail === void 0 ? void 0 : fareDetail.fareComponent);
    }
    cancel() {
        this.router.navigateByUrl('/Airlines/Search');
    }
    bookFlight() {
        this.isSubmitted = true;
        if (this.airlinePassengerFormComponent.passengersFormGroup.valid && this.airlineContactFormComponent.contactFG.valid && this.airlinePaymentFormComponent.isPaymentFormValid()) {
            let payments = this.airlinePaymentFormComponent.paymentType === _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_7__["AirlinePaymentService"].paymentTypeCreditCard ? this.paymentService.preparePaymentRequestBody(this.airlinePaymentFormComponent.creditCardFG.value) : null;
            let passengers = this.airlinePassengerFormComponent.getPassengers();
            let contacts = this.airlineContactFormComponent.getContacts();
            this.orderService.bookFlight(this.offerViewModel, passengers, contacts, payments).subscribe((data) => {
                let orderViewModel = this.orderService.getOrderViewModel(data);
                this.router.navigateByUrl('/Airlines/Orders/' + data.response.order[0].orderID, { state: { orderViewModel: orderViewModel } });
            });
        }
        else {
            this.airlineContactFormComponent.markAllAsTouched();
            this.airlinePassengerFormComponent.markAllAsTouched();
            this.airlinePaymentFormComponent.markAllAsTouched();
        }
    }
}
AirlineCreateOrderComponent.ɵfac = function AirlineCreateOrderComponent_Factory(t) { return new (t || AirlineCreateOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_order_service__WEBPACK_IMPORTED_MODULE_11__["AirlineOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_flight_service__WEBPACK_IMPORTED_MODULE_12__["AirlineFlightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_payment_service__WEBPACK_IMPORTED_MODULE_7__["AirlinePaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"])); };
AirlineCreateOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineCreateOrderComponent, selectors: [["app-airline-create-order"]], viewQuery: function AirlineCreateOrderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_partials_airline_order_summary_airline_order_summary_component__WEBPACK_IMPORTED_MODULE_3__["AirlineOrderSummaryComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_partials_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_4__["AirlinePassengerFormComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_partials_airline_payment_form_airline_payment_form_component__WEBPACK_IMPORTED_MODULE_5__["AirlinePaymentFormComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_partials_airline_contact_form_airline_contact_form_component__WEBPACK_IMPORTED_MODULE_6__["AirlineContactFormComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.airlineOrderSummaryComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.airlinePassengerFormComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.airlinePaymentFormComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.airlineContactFormComponent = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "d-flex flex-column-fluid", 4, "ngIf"], [1, "d-flex", "flex-column-fluid"], [1, "container"], [1, "row"], [1, "col-12"], [1, "brdSmallBlock", "gutter-b"], [1, "brdSmallBlock_inner", "pt-4", "flex-column"], [1, "text-white", "pl-2", "opacity-70"], [1, "text-white-50", "pl-2"], [1, "row", "gutter-b"], [1, "col-9"], [1, "card", "card-custom", "mb-3"], [1, "card-body", "p-0"], [3, "flights"], [3, "passengers"], [1, "mt-3"], [1, "row", "mt-4", "align-items-end"], [1, "col-12", "ml-lg-auto", "text-right"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "font-weight-bold", "ml-2", 3, "click"], [1, "col-3"]], template: function AirlineCreateOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AirlineCreateOrderComponent_div_0_Template, 27, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.offerViewModel != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _partials_airline_flight_item_airline_flight_item_component__WEBPACK_IMPORTED_MODULE_15__["AirlineFlightItemComponent"], _partials_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_4__["AirlinePassengerFormComponent"], _partials_airline_contact_form_airline_contact_form_component__WEBPACK_IMPORTED_MODULE_6__["AirlineContactFormComponent"], _partials_airline_payment_form_airline_payment_form_component__WEBPACK_IMPORTED_MODULE_5__["AirlinePaymentFormComponent"], _partials_airline_order_summary_airline_order_summary_component__WEBPACK_IMPORTED_MODULE_3__["AirlineOrderSummaryComponent"]], styles: [".form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n\n.mat-radio-button[_ngcontent-%COMP%] {\n  margin-right: 1.25rem;\n}\n\n.mat-input-element[_ngcontent-%COMP%], .mat-select-value[_ngcontent-%COMP%], .mat-form-field[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 0.5em 0 0.7em 0;\n}\n\n[_nghost-%COMP%]     .mat-form-field-subscript-wrapper {\n  font-size: 60%;\n  top: calc(100% - 2.5em);\n}\n\n[_nghost-%COMP%]     .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #3f51b5;\n}\n\n[_nghost-%COMP%]     .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #3f51b5;\n}\n\n[_nghost-%COMP%]     .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: #3f51b5;\n}\n\n[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  opacity: 0.03 !important;\n  background-color: #3f51b5 !important;\n}\n\n[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .flight-fare-info-container[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n  padding-bottom: 1.25rem;\n  font-size: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYWdlcy9haXJsaW5lLWNyZWF0ZS1vcmRlci9haXJsaW5lLWNyZWF0ZS1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7QUFHSjs7QUFEQTtFQUNJLHdCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQWdCLHVCQUFBO0FBTXBCOztBQUpBO0VBQ0kscUJBQUE7QUFPSjs7QUFMQTtFQUNJLHlCQUFBO0FBUUo7O0FBTkE7RUFDSSx5QkFBQTtBQVNKOztBQVBBO0VBQ0ksd0JBQUE7RUFDQSxvQ0FBQTtBQVVKOztBQVJBO0VBQ0kseUJBQUE7QUFXSjs7QUFOUTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVNaIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYWdlcy9haXJsaW5lLWNyZWF0ZS1vcmRlci9haXJsaW5lLWNyZWF0ZS1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xufVxuLm1hdC1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudCwgLm1hdC1zZWxlY3QtdmFsdWUsIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDAuNWVtIDAgMC43ZW0gMDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogNjAlOyB0b3A6IGNhbGMoMTAwJSAtIDIuNWVtKTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6ICMzZjUxYjU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzNmNTFiNTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBvcGFjaXR5OiAwLjAzICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNSFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cblxuLmNhcmQge1xuICAgIC5jYXJkLWJvZHkge1xuICAgICAgICAuZmxpZ2h0LWZhcmUtaW5mby1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"], data: { animation: [
            _animations__WEBPACK_IMPORTED_MODULE_2__["collapseAnimation"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineCreateOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-create-order',
                templateUrl: './airline-create-order.component.html',
                styleUrls: ['./airline-create-order.component.scss'],
                animations: [
                    _animations__WEBPACK_IMPORTED_MODULE_2__["collapseAnimation"]
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _shared_storage_local_storage__WEBPACK_IMPORTED_MODULE_9__["LocalStorage"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }, { type: _services_airline_order_service__WEBPACK_IMPORTED_MODULE_11__["AirlineOrderService"] }, { type: _services_airline_flight_service__WEBPACK_IMPORTED_MODULE_12__["AirlineFlightService"] }, { type: _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_7__["AirlinePaymentService"] }, { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"] }]; }, { airlineOrderSummaryComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_partials_airline_order_summary_airline_order_summary_component__WEBPACK_IMPORTED_MODULE_3__["AirlineOrderSummaryComponent"]]
        }], airlinePassengerFormComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_partials_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_4__["AirlinePassengerFormComponent"]]
        }], airlinePaymentFormComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_partials_airline_payment_form_airline_payment_form_component__WEBPACK_IMPORTED_MODULE_5__["AirlinePaymentFormComponent"]]
        }], airlineContactFormComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_partials_airline_contact_form_airline_contact_form_component__WEBPACK_IMPORTED_MODULE_6__["AirlineContactFormComponent"]]
        }] }); })();


/***/ }),

/***/ "tX8+":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-errors/airline-errors.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AirlineErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineErrorsComponent", function() { return AirlineErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_airline_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/airline-error.service */ "z3KZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AirlineErrorsComponent_div_0_h3_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineErrorsComponent_div_0_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r7.value.replace("Document issuance failed. Root cause: ", ""), " ");
} }
function AirlineErrorsComponent_div_0_h3_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "General Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineErrorsComponent_div_0_li_15_pre_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const generalError_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, generalError_r8.data));
} }
function AirlineErrorsComponent_div_0_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AirlineErrorsComponent_div_0_li_15_pre_3_Template, 3, 3, "pre", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const generalError_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](generalError_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", generalError_r8.data);
} }
function AirlineErrorsComponent_div_0_h3_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Warnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlineErrorsComponent_div_0_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const warning_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", warning_r11.value, " ");
} }
function AirlineErrorsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineErrorsComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Errors and Warnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AirlineErrorsComponent_div_0_h3_10_Template, 2, 0, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AirlineErrorsComponent_div_0_li_12_Template, 2, 1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AirlineErrorsComponent_div_0_h3_13_Template, 2, 0, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AirlineErrorsComponent_div_0_li_15_Template, 4, 2, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AirlineErrorsComponent_div_0_h3_16_Template, 2, 0, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AirlineErrorsComponent_div_0_li_18_Template, 2, 1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.airlineErrorService.errors && ctx_r0.airlineErrorService.errors.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.airlineErrorService.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.airlineErrorService.generalErrors && ctx_r0.airlineErrorService.generalErrors.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.airlineErrorService.generalErrors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.airlineErrorService.warnings && ctx_r0.airlineErrorService.warnings.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.airlineErrorService.warnings);
} }
class AirlineErrorsComponent {
    constructor(airlineErrorService) {
        this.airlineErrorService = airlineErrorService;
    }
    ngOnInit() {
    }
    hide() {
        this.airlineErrorService.hideErrors();
    }
}
AirlineErrorsComponent.ɵfac = function AirlineErrorsComponent_Factory(t) { return new (t || AirlineErrorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_error_service__WEBPACK_IMPORTED_MODULE_1__["AirlineErrorService"])); };
AirlineErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineErrorsComponent, selectors: [["app-airline-errors"]], decls: 1, vars: 1, consts: [["class", "error-container mt-10", 4, "ngIf"], [1, "error-container", "mt-10"], [1, "card", "card-custom", "mt-3"], [1, "card-header"], [1, "card-title-with-hide-button"], [1, "pull-right", "text-right"], [1, "btn", "btn-primary", 3, "click"], [1, "card-label"], [1, "card-body"], ["class", "card-label  text-danger", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "card-label text-danger", 4, "ngIf"], ["class", "card-label text-warning", 4, "ngIf"], [1, "card-label", "text-danger"], [4, "ngIf"], [1, "card-label", "text-warning"]], template: function AirlineErrorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AirlineErrorsComponent_div_0_Template, 19, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.airlineErrorService.showErrorInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: [".error-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 100;\n  right: 10px;\n  max-width: 700px;\n  opacity: 0.95;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);\n}\n\n.pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.card-title-with-hide-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLWVycm9ycy9haXJsaW5lLWVycm9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUE7RUFDSSxzQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLWVycm9ycy9haXJsaW5lLWVycm9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICByaWdodDogMTBweDtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIG9wYWNpdHk6IDAuOTU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpOztcbn1cbi5wdWxsLXJpZ2h0e1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5jYXJkLXRpdGxlLXdpdGgtaGlkZS1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxucHJle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineErrorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-errors',
                templateUrl: './airline-errors.component.html',
                styleUrls: ['./airline-errors.component.scss']
            }]
    }], function () { return [{ type: _services_airline_error_service__WEBPACK_IMPORTED_MODULE_1__["AirlineErrorService"] }]; }, null); })();


/***/ }),

/***/ "utjK":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/airline/services/airline-order.service.ts ***!
  \***********************************************************************/
/*! exports provided: AirlineOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineOrderService", function() { return AirlineOrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airline_retrieve_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airline-retrieve.service */ "1jwl");
/* harmony import */ var _airline_passenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airline-passenger.service */ "TPXw");
/* harmony import */ var src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/array-helper.service */ "zPlH");
/* harmony import */ var _airline_flight_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./airline-flight.service */ "Pzxz");
/* harmony import */ var _airline_payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./airline-payment.service */ "dAfP");
/* harmony import */ var _airline_fare_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./airline-fare.service */ "aN7V");








class AirlineOrderService {
    constructor(airlineRetrieveService, passengerService, arrayHelperService, flightService, airlinePaymentService, fareService) {
        this.airlineRetrieveService = airlineRetrieveService;
        this.passengerService = passengerService;
        this.arrayHelperService = arrayHelperService;
        this.flightService = flightService;
        this.airlinePaymentService = airlinePaymentService;
        this.fareService = fareService;
        this.noData = "-";
    }
    getOrderViewModel(data) {
        var _a, _b;
        const [order] = data.response.order;
        if (order.status && order.status.statusCode === 'X') {
            return;
        }
        const [fareDetail] = order.orderItems.orderItem[0].fareDetail;
        const flights = this.fareService.getFlightList(fareDetail.fareComponent);
        const flightFaresInfo = this.flightService.getPriceRules(fareDetail.fareComponent);
        const passengers = [];
        this.arrayHelperService.groupBy(data.response.dataLists.passengerList.passenger, k => k.ptc, v => v).forEach(group => {
            group.value.forEach((el, idx) => {
                this.passengerService.updatePassengerAfterReceiving(el);
                passengers.push(this.getPassengerViewModel(el, idx, data, flights));
            });
        });
        if (passengers.length) {
            passengers[0].showDetails = true;
        }
        return {
            orderID: order.orderID,
            bookingReferences: order.bookingReferences.bookingReference,
            flights,
            passengers,
            flightFaresInfo,
            contactList: data.response.dataLists.contactList,
            passengerList: data.response.dataLists.passengerList,
            payments: this.airlinePaymentService.getPaymentViewModel((_b = (_a = order.payments) === null || _a === void 0 ? void 0 : _a.payment) !== null && _b !== void 0 ? _b : []),
            originalOrderItems: order.orderItems.orderItem
        };
    }
    getTickets(data, passenger) {
        if (!data.response.ticketDocInfos) {
            return;
        }
        let passengerTickets = [];
        data.response.ticketDocInfos.ticketDocInfo.filter(i => i.passengerReference.find(p => p.passengerID === passenger.passengerID)).forEach(t => {
            t.ticketDocument.forEach(d => {
                passengerTickets.push(d.ticketDocNbr);
            });
        });
        let tickets = passengerTickets.join(', ');
        return tickets;
    }
    getPassengerViewModel(passenger, idx, data, flights) {
        let fare = this.getPassengerFlightFare(data, passenger);
        let ticketNo = this.getTickets(data, passenger);
        let result = {
            ticketNo: ticketNo,
            data: passenger,
            label: this.passengerService.titleByPtc(passenger.ptc, idx + 1),
            orderSummary: {
                fare: fare,
                selectedSeats: this.getPassengerSelectedSeats(data, passenger, flights)
            }
        };
        return result;
    }
    getPassengerSelectedSeats(data, passenger, flights) {
        let result = [];
        data.response.order[0].orderItems.orderItem.forEach(o => {
            let selectedSeatService = o.service.find(s => s.selectedSeat && s.passengerRef.passengerID == passenger.passengerID);
            if (selectedSeatService) {
                let segment = this.getFlightSegment(flights, selectedSeatService.selectedSeat.segmentRef);
                let selectedSeat = {
                    orderItemID: o.orderItemID,
                    row: selectedSeatService.selectedSeat.seat.row,
                    column: selectedSeatService.selectedSeat.seat.column,
                    price: {
                        currency: o.priceDetail.totalAmount.detailCurrencyPrice.total.code,
                        value: o.priceDetail.totalAmount.detailCurrencyPrice.total.value * 0.01
                    },
                    passenger: passenger
                };
                result.push({
                    seat: selectedSeat,
                    segment: segment
                });
            }
        });
        return result;
    }
    getFlightSegment(flights, segmentRef) {
        let segment = null;
        let regex = /<SegmentRef.*>(?<segmentKey>.*)<\/SegmentRef>/gmi;
        let regexResult = regex.exec(segmentRef);
        let segmentKey = regexResult.groups["segmentKey"];
        flights.forEach(f => f.flightSegments.forEach(s => {
            if (s.segmentKey == segmentKey) {
                segment = s;
            }
        }));
        return segment;
    }
    getPassengerFlightFare(data, passenger) {
        let orderItem = data.response.order[0].orderItems.orderItem.find(i => i.fareDetail && i.fareDetail[0].passengerRefs.value.find(p => p.passengerID == passenger.passengerID));
        let vm = null;
        if (orderItem) {
            vm = this.fareService.fromOrderItem(orderItem);
        }
        return vm;
    }
    bookFlight(offerViewModel, passengers, contacts, payments) {
        let contactID = "CT1";
        let query = {
            "Query": {
                "order": {
                    "offer": []
                },
                "payments": {},
                "dataLists": {
                    contactList: null,
                    passengerList: { passenger: [] }
                },
                "metadata": null
            }
        };
        let offerItems = offerViewModel.offerItems.map(offerItem => {
            return {
                passengerRefs: offerItem.fareDetail[0].passengerRefs.value.map(i => i.passengerID),
                offerItemID: offerItem.offerItemID
            };
        });
        let offer = {
            responseID: offerViewModel.responseID,
            offerID: offerViewModel.offerID,
            owner: offerViewModel.owner,
            offerItem: offerItems,
        };
        query.Query.order.offer = [];
        query.Query.order.offer.push(offer);
        let contactProvidedEmail = {
            emailAddress: [
                {
                    label: "SAI",
                    emailAddressValue: contacts.email.emailAddress
                }
            ]
        };
        let contactProvidedPhone = {
            phone: [
                {
                    label: contacts.phone.label,
                    countryDialingCode: contacts.phone.countryDialingCode,
                    areaCode: contacts.phone.areaCode,
                    phoneNumber: contacts.phone.phoneNumber
                }
            ]
        };
        let contactProvided = [];
        contactProvided.push(contactProvidedEmail);
        contactProvided.push(contactProvidedPhone);
        query.Query.dataLists.contactList = {
            contactInformation: [{
                    contactID: contactID,
                    contactProvided: contactProvided
                }]
        };
        if (payments) {
            query.Query.payments = payments;
        }
        else {
            delete query.Query.payments;
        }
        passengers.forEach(i => {
            this.passengerService.updatePassengerBeforeSending(i);
            i.contactInfoRef = contactID;
        });
        query.Query.dataLists.passengerList.passenger = passengers;
        return this.airlineRetrieveService.createOrder(query);
    }
    acceptReshop(orderID, orderViewModel) {
        let offerItems = orderViewModel.changedOrder.offerItems.map(i => ({
            offerItemID: i.offerItemID,
            passengerRefs: i.fareDetail[0].passengerRefs.value.map(p => p.passengerID)
        }));
        let request = {
            query: {
                orderServicing: {
                    acceptOffer: {
                        offer: [{
                                offerID: orderViewModel.changedOrder.offerID,
                                responseID: orderViewModel.changedOrder.responseID,
                                owner: orderViewModel.changedOrder.owner,
                                offerItem: offerItems
                            }]
                    }
                },
                orderID: orderID
            },
            dataLists: {
                passengerList: orderViewModel.changedOrder.dataLists.passengerList,
                contactList: orderViewModel.changedOrder.dataLists.contactList
            },
        };
        request.dataLists.passengerList.passenger.forEach(i => this.passengerService.updatePassengerBeforeSending(i));
        return this.airlineRetrieveService.orderChange(request, "Changing flights...", true);
    }
    getOrderByNameViewModel(data) {
        let orders = [];
        if (data != null && data.response != null && data.response.orders != null && data.response.orders.order != null) {
            this.arrayHelperService.groupBy(data.response.orders.order, i => i.orderID, v => v).forEach(g => {
                var _a, _b, _c, _d, _e, _f;
                let order = {
                    OrderId: g.key,
                    PassengerName: g.value.map(i => { var _a; return ((_a = i.passengers) === null || _a === void 0 ? void 0 : _a.fullName.map(i => i.value).join(', ')) || this.noData; }).join(", "),
                    Departure: ((_a = g.value[0].departure) === null || _a === void 0 ? void 0 : _a.date) || this.noData,
                    Airport: ((_c = (_b = g.value[0].departure) === null || _b === void 0 ? void 0 : _b.airportCode) === null || _c === void 0 ? void 0 : _c.value) || this.noData,
                    CreationDate: g.value[0].creationDate || this.noData,
                    AgencyName: ((_d = g.value[0].agency) === null || _d === void 0 ? void 0 : _d.name) || this.noData,
                    AgencyId: ((_f = (_e = g.value[0].agency) === null || _e === void 0 ? void 0 : _e.agencyID) === null || _f === void 0 ? void 0 : _f.value) || this.noData
                };
                orders.push(order);
            });
        }
        return orders;
    }
    getOrderByIdViewModel(data) {
        let order = {
            OrderId: data.response.order[0].orderID,
            Departure: data.response.order[0].orderItems.orderItem[0].fareDetail[0].fareComponent[0].segmentRefs.value[0].departure.date,
            Airport: data.response.order[0].orderItems.orderItem[0].fareDetail[0].fareComponent[0].segmentRefs.value[0].departure.airportCode.value,
            PassengerName: data.response.dataLists.passengerList.passenger.map(i => i.individual.givenName[0] + " " + i.individual.surname).join(", "),
            AgencyId: this.noData,
            AgencyName: this.noData,
            CreationDate: this.noData
        };
        if (data.party != null && data.party.recipient != null) {
            let travelAgencyRecipient = data.party.recipient.value.travelAgencyRecipient;
            order.AgencyName = travelAgencyRecipient.agentUser.agentUserID.value;
            order.AgencyId = travelAgencyRecipient.agencyID.value;
        }
        return order;
    }
    calculatePassengerSeatsAmount(passenger) {
        let totalAmount = 0;
        passenger.orderSummary.selectedSeats.forEach(s => totalAmount += s.seat.price.value);
        return totalAmount;
    }
    calculatePassengerAmount(passenger) {
        let totalAmount = 0;
        totalAmount += passenger.orderSummary.fare.baseAmount.value;
        totalAmount += passenger.orderSummary.fare.taxes.total.value;
        totalAmount += this.calculatePassengerSeatsAmount(passenger);
        return totalAmount;
    }
    calculateTotalAmount(passengers) {
        let totalAmount = 0;
        passengers.forEach(i => totalAmount += this.calculatePassengerAmount(i));
        return totalAmount;
    }
}
AirlineOrderService.ɵfac = function AirlineOrderService_Factory(t) { return new (t || AirlineOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_retrieve_service__WEBPACK_IMPORTED_MODULE_1__["AirlineRetrieveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_passenger_service__WEBPACK_IMPORTED_MODULE_2__["AirlinePassengerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_3__["ArrayHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_flight_service__WEBPACK_IMPORTED_MODULE_4__["AirlineFlightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_payment_service__WEBPACK_IMPORTED_MODULE_5__["AirlinePaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_airline_fare_service__WEBPACK_IMPORTED_MODULE_6__["AirlineFareService"])); };
AirlineOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirlineOrderService, factory: AirlineOrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineOrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _airline_retrieve_service__WEBPACK_IMPORTED_MODULE_1__["AirlineRetrieveService"] }, { type: _airline_passenger_service__WEBPACK_IMPORTED_MODULE_2__["AirlinePassengerService"] }, { type: src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_3__["ArrayHelperService"] }, { type: _airline_flight_service__WEBPACK_IMPORTED_MODULE_4__["AirlineFlightService"] }, { type: _airline_payment_service__WEBPACK_IMPORTED_MODULE_5__["AirlinePaymentService"] }, { type: _airline_fare_service__WEBPACK_IMPORTED_MODULE_6__["AirlineFareService"] }]; }, null); })();


/***/ }),

/***/ "vY2y":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-payment-summary/airline-payment-summary.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AirlinePaymentSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlinePaymentSummaryComponent", function() { return AirlinePaymentSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../animations */ "Ql4B");
/* harmony import */ var _services_airline_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/airline-order.service */ "utjK");
/* harmony import */ var _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/airline-payment.service */ "dAfP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_var_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/directives/var.directive */ "TSMZ");







function AirlinePaymentSummaryComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlinePaymentSummaryComponent_ng_container_6_Template_div_click_1_listener() { const payment_r2 = ctx.$implicit; return payment_r2.showDetails = !payment_r2.showDetails; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const payment_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", payment_r2.creditCardHolder, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", payment_r2.creditCardNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r2.creditCardType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 4, payment_r2.amount, "1.2-2"), " ");
} }
function AirlinePaymentSummaryComponent_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const due_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, due_r4, "1.2-2"), "");
} }
function AirlinePaymentSummaryComponent_ng_container_13_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlinePaymentSummaryComponent_ng_container_13_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.pay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePaymentSummaryComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlinePaymentSummaryComponent_ng_container_13_div_1_Template, 6, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AirlinePaymentSummaryComponent_ng_container_13_div_2_Template, 3, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const due_r4 = ctx.ngVar;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", due_r4 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", due_r4 > 0 && ctx_r1.orderViewModel && !ctx_r1.orderViewModel.editMode);
} }
class AirlinePaymentSummaryComponent {
    constructor(airlineOrderService, airlinePaymentService) {
        this.airlineOrderService = airlineOrderService;
        this.airlinePaymentService = airlinePaymentService;
        this.makePayment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    calculateOrderPayedAmount() {
        let total = 0;
        if (this.payments) {
            this.payments.forEach(i => total += i.amount);
        }
        return total;
    }
    calculateDue() {
        let due = this.airlinePaymentService.calculateDue(this.payments, this.passengers);
        // sometimes have floating problems on big numbers
        if (Math.abs(due) < 0.01) {
            due = 0;
        }
        return due;
    }
    calculateOrderTotal() {
        return this.airlineOrderService.calculateTotalAmount(this.passengers);
    }
    pay() {
        this.makePayment.emit();
    }
}
AirlinePaymentSummaryComponent.ɵfac = function AirlinePaymentSummaryComponent_Factory(t) { return new (t || AirlinePaymentSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_order_service__WEBPACK_IMPORTED_MODULE_2__["AirlineOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_payment_service__WEBPACK_IMPORTED_MODULE_3__["AirlinePaymentService"])); };
AirlinePaymentSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlinePaymentSummaryComponent, selectors: [["app-airline-payment-summary"]], inputs: { orderViewModel: "orderViewModel", payments: "payments", passengers: "passengers" }, outputs: { makePayment: "makePayment" }, decls: 14, vars: 6, consts: [[1, "card", "card-custom"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body", "p-0"], [4, "ngFor", "ngForOf"], [1, "d-flex", "pt-2", "pb-2", "justify-content-around"], [1, "col-7", "text-left", "font-size-h4", "pl-6"], [1, "col-5", "text-right", "font-weight-bold", "font-size-h3"], [4, "ngVar"], [1, "d-flex", "pt-3", "border-bottom", "justify-content-around", 3, "click"], [1, "col-1"], [1, "fas", "text-primary", "text-right", "fa-sm", "fa-circle"], [1, "col-7", "pl-1", "text-left"], [1, "font-weight-bold"], [1, "text-dark-50"], [1, "col-4", "font-size-h4", "font-weight-bold", "text-right"], ["class", "d-flex  pt-2 border-top  pb-2 justify-content-around text-danger", 4, "ngIf"], ["class", "text-right pb-4 pr-2", 4, "ngIf"], [1, "d-flex", "pt-2", "border-top", "pb-2", "justify-content-around", "text-danger"], [1, "text-right", "pb-4", "pr-2"], ["title", "Payment", 1, "btn", "btn-primary", 3, "click"]], template: function AirlinePaymentSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AirlinePaymentSummaryComponent_ng_container_6_Template, 14, 7, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total Payed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AirlinePaymentSummaryComponent_ng_container_13_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.payments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 3, ctx.calculateOrderPayedAmount(), "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngVar", ctx.calculateDue());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_directives_var_directive__WEBPACK_IMPORTED_MODULE_5__["VarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFydGlhbHMvYWlybGluZS1wYXltZW50LXN1bW1hcnkvYWlybGluZS1wYXltZW50LXN1bW1hcnkuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [
            _animations__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlinePaymentSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-payment-summary',
                templateUrl: './airline-payment-summary.component.html',
                animations: [
                    _animations__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"]
                ],
                styleUrls: ['./airline-payment-summary.component.css']
            }]
    }], function () { return [{ type: _services_airline_order_service__WEBPACK_IMPORTED_MODULE_2__["AirlineOrderService"] }, { type: _services_airline_payment_service__WEBPACK_IMPORTED_MODULE_3__["AirlinePaymentService"] }]; }, { orderViewModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], payments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], passengers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], makePayment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vv7W":
/*!*******************************************************!*\
  !*** ./src/app/views/pages/airline/airline.module.ts ***!
  \*******************************************************/
/*! exports provided: AirlineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineModule", function() { return AirlineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _pages_airline_dashboard_airline_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/airline-dashboard/airline-dashboard.component */ "pnBo");
/* harmony import */ var _pages_airline_search_airline_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/airline-search/airline-search.component */ "Lq6Y");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material.module */ "vvyD");
/* harmony import */ var _pages_airline_create_order_airline_create_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/airline-create-order/airline-create-order.component */ "t5U4");
/* harmony import */ var _pages_airline_orders_airline_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/airline-orders/airline-orders.component */ "aBeU");
/* harmony import */ var _pages_airline_order_airline_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/airline-order/airline-order.component */ "8gIF");
/* harmony import */ var _pages_airline_payment_airline_payment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/airline-payment/airline-payment.component */ "i911");
/* harmony import */ var _partials_airline_seat_availability_airline_seat_availability_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./partials/airline-seat-availability/airline-seat-availability.component */ "1QvV");
/* harmony import */ var _partials_airline_flight_item_airline_flight_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./partials/airline-flight-item/airline-flight-item.component */ "cQZ/");
/* harmony import */ var _pages_airline_container_airline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/airline-container/airline.component */ "aUhX");
/* harmony import */ var _partials_airline_order_summary_airline_order_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./partials/airline-order-summary/airline-order-summary.component */ "yJtm");
/* harmony import */ var _partials_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./partials/airline-passenger-form/airline-passenger-form.component */ "yOU+");
/* harmony import */ var _partials_airline_passenger_list_airline_passenger_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./partials/airline-passenger-list/airline-passenger-list.component */ "EoCE");
/* harmony import */ var _partials_airline_payment_form_airline_payment_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./partials/airline-payment-form/airline-payment-form.component */ "Gtix");
/* harmony import */ var _partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./partials/airline-search-header/airline-search-header.component */ "ni+9");
/* harmony import */ var _partials_airline_search_result_airline_search_result_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./partials/airline-search-result/airline-search-result.component */ "Xdau");
/* harmony import */ var _partials_airport_code_search_airport_code_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./partials/airport-code-search/airport-code-search.component */ "MTiZ");
/* harmony import */ var _partials_airport_search_date_airport_search_date_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./partials/airport-search-date/airport-search-date.component */ "QsbY");
/* harmony import */ var _partials_airline_order_rloc_airline_order_rloc_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./partials/airline-order-rloc/airline-order-rloc.component */ "iDR2");
/* harmony import */ var _partials_airline_search_travellers_airline_search_travellers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./partials/airline-search-travellers/airline-search-travellers.component */ "eJoU");
/* harmony import */ var _partials_airline_contact_form_airline_contact_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./partials/airline-contact-form/airline-contact-form.component */ "97hE");
/* harmony import */ var _partials_airline_payment_summary_airline_payment_summary_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./partials/airline-payment-summary/airline-payment-summary.component */ "vY2y");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _partials_airline_flight_fare_info_airline_flight_fare_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./partials/airline-flight-fare-info/airline-flight-fare-info.component */ "dKJ1");
/* harmony import */ var _partials_airline_errors_airline_errors_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./partials/airline-errors/airline-errors.component */ "tX8+");
/* harmony import */ var _pages_airline_reshop_airline_reshop_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/airline-reshop/airline-reshop.component */ "4wIO");
/* harmony import */ var _partials_airline_loader_airline_loader_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./partials/airline-loader/airline-loader.component */ "LSaV");
/* harmony import */ var _partials_airline_order_changes_airline_order_changes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./partials/airline-order-changes/airline-order-changes.component */ "LnPy");


































;
const secondaryRoutes = [
    {
        path: '',
        component: _pages_airline_container_airline_component__WEBPACK_IMPORTED_MODULE_13__["AirlineComponent"],
        children: [
            {
                path: '', component: _pages_airline_dashboard_airline_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AirlineDashboardComponent"]
            },
            {
                path: 'Search', component: _pages_airline_search_airline_search_component__WEBPACK_IMPORTED_MODULE_5__["AirlineSearchComponent"]
            },
            {
                path: 'Booking', component: _pages_airline_create_order_airline_create_order_component__WEBPACK_IMPORTED_MODULE_7__["AirlineCreateOrderComponent"]
            },
            {
                path: 'Orders', component: _pages_airline_orders_airline_orders_component__WEBPACK_IMPORTED_MODULE_8__["AirlineOrdersComponent"]
            },
            {
                path: 'Orders/:id', component: _pages_airline_order_airline_order_component__WEBPACK_IMPORTED_MODULE_9__["AirlineOrderComponent"]
            },
            {
                path: 'Payment/:id', component: _pages_airline_payment_airline_payment_component__WEBPACK_IMPORTED_MODULE_10__["AirlinePaymentComponent"]
            },
            {
                path: 'Reshop/:id', component: _pages_airline_reshop_airline_reshop_component__WEBPACK_IMPORTED_MODULE_29__["AirlineReshopComponent"]
            },
        ]
    }
];
class AirlineModule {
}
AirlineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AirlineModule });
AirlineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AirlineModule_Factory(t) { return new (t || AirlineModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(secondaryRoutes),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPopoverModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AirlineModule, { declarations: [_pages_airline_container_airline_component__WEBPACK_IMPORTED_MODULE_13__["AirlineComponent"],
        _pages_airline_dashboard_airline_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AirlineDashboardComponent"],
        _partials_airline_search_result_airline_search_result_component__WEBPACK_IMPORTED_MODULE_19__["AirlineSearchResultComponent"],
        _pages_airline_search_airline_search_component__WEBPACK_IMPORTED_MODULE_5__["AirlineSearchComponent"],
        _pages_airline_create_order_airline_create_order_component__WEBPACK_IMPORTED_MODULE_7__["AirlineCreateOrderComponent"],
        _pages_airline_orders_airline_orders_component__WEBPACK_IMPORTED_MODULE_8__["AirlineOrdersComponent"],
        _pages_airline_order_airline_order_component__WEBPACK_IMPORTED_MODULE_9__["AirlineOrderComponent"],
        _pages_airline_payment_airline_payment_component__WEBPACK_IMPORTED_MODULE_10__["AirlinePaymentComponent"],
        _partials_airline_seat_availability_airline_seat_availability_component__WEBPACK_IMPORTED_MODULE_11__["AirlineSeatAvailabilityComponent"],
        _partials_airport_code_search_airport_code_search_component__WEBPACK_IMPORTED_MODULE_20__["AirportCodeSearchComponent"],
        _partials_airline_passenger_list_airline_passenger_list_component__WEBPACK_IMPORTED_MODULE_16__["AirlinePassengerListComponent"],
        _partials_airline_order_summary_airline_order_summary_component__WEBPACK_IMPORTED_MODULE_14__["AirlineOrderSummaryComponent"],
        _partials_airline_payment_form_airline_payment_form_component__WEBPACK_IMPORTED_MODULE_17__["AirlinePaymentFormComponent"],
        _partials_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_15__["AirlinePassengerFormComponent"],
        _partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_18__["AirlineSearchHeaderComponent"],
        _partials_airport_search_date_airport_search_date_component__WEBPACK_IMPORTED_MODULE_21__["AirportSearchDateComponent"],
        _partials_airline_flight_item_airline_flight_item_component__WEBPACK_IMPORTED_MODULE_12__["AirlineFlightItemComponent"],
        _partials_airline_order_rloc_airline_order_rloc_component__WEBPACK_IMPORTED_MODULE_22__["AirlineOrderRlocComponent"],
        _partials_airline_search_travellers_airline_search_travellers_component__WEBPACK_IMPORTED_MODULE_23__["AirlineSearchTravellersComponent"],
        _partials_airline_contact_form_airline_contact_form_component__WEBPACK_IMPORTED_MODULE_24__["AirlineContactFormComponent"],
        _partials_airline_flight_fare_info_airline_flight_fare_info_component__WEBPACK_IMPORTED_MODULE_27__["AirlineFlightFareInfoComponent"],
        _partials_airline_payment_summary_airline_payment_summary_component__WEBPACK_IMPORTED_MODULE_25__["AirlinePaymentSummaryComponent"],
        _partials_airline_errors_airline_errors_component__WEBPACK_IMPORTED_MODULE_28__["AirlineErrorsComponent"],
        _pages_airline_reshop_airline_reshop_component__WEBPACK_IMPORTED_MODULE_29__["AirlineReshopComponent"],
        _partials_airline_loader_airline_loader_component__WEBPACK_IMPORTED_MODULE_30__["AirlineLoaderComponent"],
        _partials_airline_order_changes_airline_order_changes_component__WEBPACK_IMPORTED_MODULE_31__["AirlineOrderChangesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPopoverModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_airline_container_airline_component__WEBPACK_IMPORTED_MODULE_13__["AirlineComponent"],
                    _pages_airline_dashboard_airline_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AirlineDashboardComponent"],
                    _partials_airline_search_result_airline_search_result_component__WEBPACK_IMPORTED_MODULE_19__["AirlineSearchResultComponent"],
                    _pages_airline_search_airline_search_component__WEBPACK_IMPORTED_MODULE_5__["AirlineSearchComponent"],
                    _pages_airline_create_order_airline_create_order_component__WEBPACK_IMPORTED_MODULE_7__["AirlineCreateOrderComponent"],
                    _pages_airline_orders_airline_orders_component__WEBPACK_IMPORTED_MODULE_8__["AirlineOrdersComponent"],
                    _pages_airline_order_airline_order_component__WEBPACK_IMPORTED_MODULE_9__["AirlineOrderComponent"],
                    _pages_airline_payment_airline_payment_component__WEBPACK_IMPORTED_MODULE_10__["AirlinePaymentComponent"],
                    _partials_airline_seat_availability_airline_seat_availability_component__WEBPACK_IMPORTED_MODULE_11__["AirlineSeatAvailabilityComponent"],
                    _partials_airport_code_search_airport_code_search_component__WEBPACK_IMPORTED_MODULE_20__["AirportCodeSearchComponent"],
                    _partials_airline_passenger_list_airline_passenger_list_component__WEBPACK_IMPORTED_MODULE_16__["AirlinePassengerListComponent"],
                    _partials_airline_order_summary_airline_order_summary_component__WEBPACK_IMPORTED_MODULE_14__["AirlineOrderSummaryComponent"],
                    _partials_airline_payment_form_airline_payment_form_component__WEBPACK_IMPORTED_MODULE_17__["AirlinePaymentFormComponent"],
                    _partials_airline_passenger_form_airline_passenger_form_component__WEBPACK_IMPORTED_MODULE_15__["AirlinePassengerFormComponent"],
                    _partials_airline_search_header_airline_search_header_component__WEBPACK_IMPORTED_MODULE_18__["AirlineSearchHeaderComponent"],
                    _partials_airport_search_date_airport_search_date_component__WEBPACK_IMPORTED_MODULE_21__["AirportSearchDateComponent"],
                    _partials_airline_flight_item_airline_flight_item_component__WEBPACK_IMPORTED_MODULE_12__["AirlineFlightItemComponent"],
                    _partials_airline_order_rloc_airline_order_rloc_component__WEBPACK_IMPORTED_MODULE_22__["AirlineOrderRlocComponent"],
                    _partials_airline_search_travellers_airline_search_travellers_component__WEBPACK_IMPORTED_MODULE_23__["AirlineSearchTravellersComponent"],
                    _partials_airline_contact_form_airline_contact_form_component__WEBPACK_IMPORTED_MODULE_24__["AirlineContactFormComponent"],
                    _partials_airline_flight_fare_info_airline_flight_fare_info_component__WEBPACK_IMPORTED_MODULE_27__["AirlineFlightFareInfoComponent"],
                    _partials_airline_payment_summary_airline_payment_summary_component__WEBPACK_IMPORTED_MODULE_25__["AirlinePaymentSummaryComponent"],
                    _partials_airline_errors_airline_errors_component__WEBPACK_IMPORTED_MODULE_28__["AirlineErrorsComponent"],
                    _pages_airline_reshop_airline_reshop_component__WEBPACK_IMPORTED_MODULE_29__["AirlineReshopComponent"],
                    _partials_airline_loader_airline_loader_component__WEBPACK_IMPORTED_MODULE_30__["AirlineLoaderComponent"],
                    _partials_airline_order_changes_airline_order_changes_component__WEBPACK_IMPORTED_MODULE_31__["AirlineOrderChangesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(secondaryRoutes),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPopoverModule"],
                ],
                entryComponents: [_partials_airline_search_result_airline_search_result_component__WEBPACK_IMPORTED_MODULE_19__["AirlineSearchResultComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "yJtm":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-order-summary/airline-order-summary.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AirlineOrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineOrderSummaryComponent", function() { return AirlineOrderSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../animations */ "Ql4B");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _services_airline_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/airline-order.service */ "utjK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AirlineOrderSummaryComponent_ng_container_6_ng_container_18_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedSeat_r6 = ctx.$implicit;
    const passenger_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapse", !passenger_r1.showSelectedSeats);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", selectedSeat_r6.segment.departureAirportCode, " - ", selectedSeat_r6.segment.arrivalAirportCode, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", selectedSeat_r6.seat.row, "", selectedSeat_r6.seat.column, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 6, selectedSeat_r6.seat.price.value, "1.2-2"), "");
} }
function AirlineOrderSummaryComponent_ng_container_6_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderSummaryComponent_ng_container_6_ng_container_18_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const passenger_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return passenger_r1.showSelectedSeats = !passenger_r1.showSelectedSeats; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AirlineOrderSummaryComponent_ng_container_6_ng_container_18_div_10_Template, 12, 9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !passenger_r1.showSelectedSeats ? "fa-chevron-down" : "fa-chevron-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 3, ctx_r3.calculatePassengerSeatsAmount(passenger_r1), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", passenger_r1.orderSummary.selectedSeats);
} }
function AirlineOrderSummaryComponent_ng_container_6_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r12 = ctx.$implicit;
    const passenger_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapse", !passenger_r1.showTaxDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tax_r12.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 3, tax_r12.amount.value, "1.2-2"), "");
} }
function AirlineOrderSummaryComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderSummaryComponent_ng_container_6_Template_div_click_1_listener() { const passenger_r1 = ctx.$implicit; return passenger_r1.showDetails = !passenger_r1.showDetails; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AirlineOrderSummaryComponent_ng_container_6_ng_container_18_Template, 11, 6, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirlineOrderSummaryComponent_ng_container_6_Template_div_click_19_listener() { const passenger_r1 = ctx.$implicit; return passenger_r1.showTaxDetails = !passenger_r1.showTaxDetails; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AirlineOrderSummaryComponent_ng_container_6_div_28_Template, 10, 6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !passenger_r1.showDetails ? "fa-chevron-down" : "fa-chevron-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", passenger_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 9, ctx_r0.calculatePassengerAmount(passenger_r1), "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapse", !passenger_r1.showDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 12, passenger_r1.orderSummary.fare.baseAmount.value, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", passenger_r1.orderSummary.selectedSeats.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !passenger_r1.showTaxDetails ? "fa-chevron-down" : "fa-chevron-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 15, passenger_r1.orderSummary.fare.taxes.total.value, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", passenger_r1.orderSummary.fare.taxes.taxBreakdown);
} }
class AirlineOrderSummaryComponent extends _airline__WEBPACK_IMPORTED_MODULE_2__["Airline"] {
    constructor(loginService, orderService) {
        super(loginService);
        this.orderService = orderService;
    }
    ngOnInit() {
    }
    calculatePassengerSeatsAmount(passenger) {
        let totalAmount = this.orderService.calculatePassengerSeatsAmount(passenger);
        return totalAmount;
    }
    calculatePassengerAmount(passenger) {
        let totalAmount = this.orderService.calculatePassengerAmount(passenger);
        return totalAmount;
    }
    calculateTotalAmount() {
        let totalAmount = this.orderService.calculateTotalAmount(this.passengers);
        return totalAmount;
    }
}
AirlineOrderSummaryComponent.ɵfac = function AirlineOrderSummaryComponent_Factory(t) { return new (t || AirlineOrderSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_order_service__WEBPACK_IMPORTED_MODULE_4__["AirlineOrderService"])); };
AirlineOrderSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlineOrderSummaryComponent, selectors: [["app-airline-order-summary"]], inputs: { passengers: "passengers" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 5, consts: [[1, "card", "card-custom", "mb-5"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body", "p-0"], [4, "ngFor", "ngForOf"], [1, "d-flex", "pt-2", "pb-2", "justify-content-around"], [1, "col-7", "text-left", "font-size-h4", "pl-6"], [1, "col-5", "text-right", "font-weight-bold", "font-size-h3"], [1, "d-flex", "pt-3", "cursor-pointer", "border-bottom", "justify-content-around", 3, "click"], [1, "col-1"], [1, "fas", "fa-sm", "text-primary", 3, "ngClass"], [1, "col-7", "pl-1", "font-weight-bold", "font-size-lg", "text-left"], [1, "col-4", "font-size-h4", "font-weight-bold", "text-right"], [1, "d-flex", "pt-3", "justify-content-around"], [1, "fas", "text-primary", "text-right", "fa-sm", "fa-circle"], [1, "col-7", "pl-1", "font-size-sm", "text-left"], [1, "col-4", "font-size-sm", "font-weight-bold", "text-right"], [4, "ngIf"], [1, "d-flex", "cursor-pointer", "pt-3", "justify-content-around", 3, "click"], ["class", "ml-4", 4, "ngFor", "ngForOf"], [1, "border-bottom", "pt-2", "mb-2"], [1, "ml-4"], [1, "separator", "separator-dashed", "pt-2", "mb-2"], [1, "d-flex", "justify-content-around"]], template: function AirlineOrderSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AirlineOrderSummaryComponent_ng_container_6_Template, 30, 18, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.passengers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 2, ctx.calculateTotalAmount(), "1.2-2"), "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FpcmxpbmUvcGFydGlhbHMvYWlybGluZS1vcmRlci1zdW1tYXJ5L2FpcmxpbmUtb3JkZXItc3VtbWFyeS5jb21wb25lbnQuY3NzIn0= */"], data: { animation: [
            _animations__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineOrderSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-order-summary',
                templateUrl: './airline-order-summary.component.html',
                animations: [
                    _animations__WEBPACK_IMPORTED_MODULE_1__["collapseAnimation"]
                ],
                styleUrls: ['./airline-order-summary.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }, { type: _services_airline_order_service__WEBPACK_IMPORTED_MODULE_4__["AirlineOrderService"] }]; }, { passengers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "yOU+":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/airline/partials/airline-passenger-form/airline-passenger-form.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AirlinePassengerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlinePassengerFormComponent", function() { return AirlinePassengerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _airline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../airline */ "e4ho");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_operators_dirtyCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/operators/dirtyCheck */ "ivhT");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth/login/login.service */ "0Xdg");
/* harmony import */ var _services_airline_passenger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/airline-passenger.service */ "TPXw");
/* harmony import */ var src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/array-helper.service */ "zPlH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function AirlinePassengerFormComponent_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", passenger_r1.Label, " ");
} }
function AirlinePassengerFormComponent_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const passenger_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", passenger_r1.value.NameTitle, " ", passenger_r1.value.GivenName, " ", passenger_r1.value.MiddleName, " ", passenger_r1.value.Surname, "");
} }
function AirlinePassengerFormComponent_div_1_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePassengerFormComponent_div_1_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePassengerFormComponent_div_1_mat_error_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date of Birth is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePassengerFormComponent_div_1_mat_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gen_r16 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gen_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.capitalizeFirstLetter(gen_r16), " ");
} }
function AirlinePassengerFormComponent_div_1_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePassengerFormComponent_div_1_mat_option_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r17, " ");
} }
function AirlinePassengerFormComponent_div_1_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please choose a Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AirlinePassengerFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AirlinePassengerFormComponent_div_1_ng_container_5_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AirlinePassengerFormComponent_div_1_ng_template_6_Template, 1, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "WheelChair ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(Add special assistance for passenger)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-radio-group", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-radio-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-radio-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Mrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-radio-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Miss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AirlinePassengerFormComponent_div_1_mat_error_33_Template, 2, 0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Middle Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AirlinePassengerFormComponent_div_1_mat_error_44_Template, 2, 0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-datepicker-toggle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-datepicker", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AirlinePassengerFormComponent_div_1_mat_error_53_Template, 2, 0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AirlinePassengerFormComponent_div_1_mat_option_59_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AirlinePassengerFormComponent_div_1_mat_error_60_Template, 2, 0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AirlinePassengerFormComponent_div_1_mat_option_66_Template, 2, 2, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AirlinePassengerFormComponent_div_1_mat_error_67_Template, 2, 0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Frequent Flyer Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Known Traveler Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Redress Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passenger_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(passenger_r1.value.Surname || passenger_r1.value.GivenName))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", passenger_r1.value.Label, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", passenger_r1.get("GivenName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", passenger_r1.get("Surname").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r0.maxDate)("matDatepicker", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", passenger_r1.get("Birthdate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", passenger_r1.get("Gender").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.countries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", passenger_r1.get("Country").hasError("required"));
} }
class AirlinePassengerFormComponent extends _airline__WEBPACK_IMPORTED_MODULE_2__["Airline"] {
    constructor(loginService, formBuilder, passengerService, arrayHelperService) {
        super(loginService);
        this.formBuilder = formBuilder;
        this.passengerService = passengerService;
        this.arrayHelperService = arrayHelperService;
        this.passengerChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gender = ["MALE", "FEMALE"];
        this.countries = ["United States", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mcdonald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis"];
        this.dummyPassengerData = {
            "passengers": [
                {
                    "Index": 1,
                    "WheelChair": false,
                    "Birthdate": new Date("2007-07-03T18:30:00.000Z"),
                    "Gender": "MALE",
                    "NameTitle": "MR",
                    "GivenName": "Sai",
                    "MiddleName": "Reddy",
                    "Surname": "Gudimetla",
                    "Country": "United States",
                    "FrequentFlyerNumber": "",
                    "KnownTravelerNumber": "",
                    "RegressNumber": ""
                },
                {
                    "Index": 2,
                    "WheelChair": false,
                    "Birthdate": new Date("1985-07-03T18:30:00.000Z"),
                    "Gender": "MALE",
                    "NameTitle": "MR",
                    "GivenName": "Surya",
                    "MiddleName": "Mohan",
                    "Surname": "Gudimetla",
                    "Country": "United States",
                    "FrequentFlyerNumber": "",
                    "KnownTravelerNumber": "",
                    "RegressNumber": ""
                },
                {
                    "Index": 3,
                    "WheelChair": false,
                    "Birthdate": new Date("2014-07-03T18:30:00.000Z"),
                    "Gender": "MALE",
                    "NameTitle": "MR",
                    "GivenName": "Bob",
                    "MiddleName": "",
                    "Surname": "Smith",
                    "Country": "United States",
                    "FrequentFlyerNumber": "",
                    "KnownTravelerNumber": "",
                    "RegressNumber": ""
                },
                {
                    "Index": 4,
                    "WheelChair": false,
                    "Birthdate": new Date("2021-07-03T18:30:00.000Z"),
                    "Gender": "MALE",
                    "NameTitle": "MR",
                    "GivenName": "Jane",
                    "MiddleName": "",
                    "Surname": "Smith",
                    "Country": "United States",
                    "FrequentFlyerNumber": "",
                    "KnownTravelerNumber": "",
                    "RegressNumber": ""
                },
                {
                    "Index": 5,
                    "WheelChair": false,
                    "Birthdate": new Date("2001-07-03T18:30:00.000Z"),
                    "Gender": "MALE",
                    "NameTitle": "MR",
                    "GivenName": "Mahidhar",
                    "MiddleName": "",
                    "Surname": "Reddy",
                    "Country": "United States",
                    "FrequentFlyerNumber": "",
                    "KnownTravelerNumber": "",
                    "RegressNumber": ""
                },
                {
                    "Index": 6,
                    "WheelChair": false,
                    "Birthdate": new Date("2007-07-03T18:30:00.000Z"),
                    "Gender": "MALE",
                    "NameTitle": "MR",
                    "GivenName": "Nithya",
                    "MiddleName": "",
                    "Surname": "Venkatesan",
                    "Country": "United States",
                    "FrequentFlyerNumber": "",
                    "KnownTravelerNumber": "",
                    "RegressNumber": ""
                }
            ]
        };
        this.passengersFormGroup = this.formBuilder.group({
            passengers: this.formBuilder.array([])
        });
    }
    get passengersFormArr() {
        return this.passengersFormGroup.get('passengers');
    }
    ngOnInit() {
        let originalPassengers = { passengers: [] };
        this.arrayHelperService.groupBy(this.passengers.map(i => i.data), k => k.ptc).forEach(g => g.value.forEach((p, idx) => {
            let passenger = this.createItem(p, idx + 1);
            originalPassengers.passengers.push(passenger.value);
            this.passengersFormArr.push(passenger);
        }));
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production && (!this.passengers[0].data.individual || !this.passengers[0].data.individual.surname)) {
            let passengers = (JSON.parse(JSON.stringify(this.dummyPassengerData)));
            passengers.passengers.splice(this.passengers.length);
            originalPassengers.passengers = passengers.passengers;
            this.passengersFormGroup.patchValue(passengers);
        }
        let originalPassengers$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(originalPassengers);
        this.passengersFormGroup.valueChanges.pipe(Object(src_app_operators_dirtyCheck__WEBPACK_IMPORTED_MODULE_5__["dirtyCheck"])(originalPassengers$)).subscribe((data) => {
            this.passengerChanges.emit(data);
        });
    }
    createItem(passenger, idx) {
        if (!passenger.individual) {
            passenger.individual = {
                gender: 'MALE',
                nameTitle: 'MR',
                givenName: [''],
                middleName: [''],
                surname: '',
                birthdate: ''
            };
        }
        if (!passenger.individual.middleName) {
            passenger.individual.middleName = [''];
        }
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passenger.passengerID, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Ptc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passenger.ptc),
            Label: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.passengerService.titleByPtc(passenger.ptc, idx)),
            WheelChair: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passenger.individual.birthdate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passenger.individual.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            NameTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passenger.individual.nameTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            GivenName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passenger.individual.givenName[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            MiddleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passenger.individual.middleName[0]),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passenger.individual.surname, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            FrequentFlyerNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            KnownTravelerNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            RegressNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    markAllAsTouched() {
        this.passengersFormGroup.markAllAsTouched();
    }
    getPassengers() {
        let result = this.passengersFormGroup.value.passengers.map(i => {
            const date = new Date(i.Birthdate);
            let year = date.getFullYear();
            let month = date.getMonth() + 1; // js dates returns value from 0 to 11 for month
            let day = date.getDate();
            const birthdate = year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
            let passenger = {
                passengerID: i.Id,
                ptc: i.Ptc,
                individual: {
                    gender: i.Gender,
                    nameTitle: i.NameTitle,
                    surname: i.Surname,
                    givenName: [i.GivenName],
                    birthdate: birthdate,
                    middleName: i.MiddleName ? [i.MiddleName] : []
                },
                contactInfoRef: ''
            };
            return passenger;
        });
        return result;
    }
    capitalizeFirstLetter(text) {
        text = text.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}
AirlinePassengerFormComponent.ɵfac = function AirlinePassengerFormComponent_Factory(t) { return new (t || AirlinePassengerFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_airline_passenger_service__WEBPACK_IMPORTED_MODULE_7__["AirlinePassengerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_8__["ArrayHelperService"])); };
AirlinePassengerFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirlinePassengerFormComponent, selectors: [["app-airline-passenger-form"]], inputs: { passengers: "passengers", loyaltyAccountNumber: "loyaltyAccountNumber", isLoyaltyAccountEnabled: "isLoyaltyAccountEnabled" }, outputs: { passengerChanges: "passengerChanges" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "passengers", 4, "ngFor", "ngForOf"], ["formArrayName", "passengers"], [1, "card", "card-custom", "mb-3", 3, "formGroupName"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [4, "ngIf", "ngIfElse"], ["passDetails", ""], [1, "card-toolbar"], [1, "form-group", "mb-0"], [1, "col-form-label"], [1, "checkbox-inline"], ["formControlName", "WheelChair"], [1, "pl-1", "text-black-50"], [1, "card-body"], [1, "row"], [1, "col-4", "form-group"], ["formControlName", "NameTitle", "aria-label", "Select an option"], ["value", "MR", 1, "mat-primary"], ["value", "MRS"], ["value", "MISS"], [1, "col-8", "form-group"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "GivenName", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "MiddleName"], ["matInput", "", "formControlName", "Surname", "required", ""], ["matInput", "", "formControlName", "Birthdate", "required", "", 3, "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["startView", "multi-year"], ["picker", ""], ["formControlName", "Gender", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Country", "required", ""], ["matInput", "", "formControlName", "FrequentFlyerNumber"], ["matInput", "", "formControlName", "KnownTravelerNumber"], ["matInput", "", "formControlName", "RegressNumber"], [3, "value"]], template: function AirlinePassengerFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AirlinePassengerFormComponent_div_1_Template, 83, 14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.passengersFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.passengersFormArr.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0rem;\n}\n.mat-radio-button[_ngcontent-%COMP%] {\n    margin-right: 1.25rem;\n}\n.mat-input-element[_ngcontent-%COMP%], .mat-select-value[_ngcontent-%COMP%], .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-infix {\n    padding: 0.5em 0 0.7em 0;\n}\n[_nghost-%COMP%]     .mat-form-field-subscript-wrapper {\n    font-size: 60%; top: calc(100% - 2.5em);\n}\n[_nghost-%COMP%]     .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n    border-color: #3f51b5;\n}\n[_nghost-%COMP%]     .mat-radio-button.mat-accent .mat-radio-inner-circle {\n    background-color: #3f51b5;\n}\n[_nghost-%COMP%]     .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n    background-color:#3f51b5;\n}\n[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n    opacity: 0.03 !important;\n    background-color: #3f51b5!important;\n}\n[_nghost-%COMP%]     .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n    background-color: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLXBhc3Nlbmdlci1mb3JtL2FpcmxpbmUtcGFzc2VuZ2VyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksY0FBYyxFQUFFLHVCQUF1QjtBQUMzQztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYWlybGluZS9wYXJ0aWFscy9haXJsaW5lLXBhc3Nlbmdlci1mb3JtL2FpcmxpbmUtcGFzc2VuZ2VyLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xufVxuLm1hdC1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudCwgLm1hdC1zZWxlY3QtdmFsdWUsIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDAuNWVtIDAgMC43ZW0gMDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogNjAlOyB0b3A6IGNhbGMoMTAwJSAtIDIuNWVtKTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6ICMzZjUxYjU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzNmNTFiNTtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBvcGFjaXR5OiAwLjAzICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNSFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlinePassengerFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airline-passenger-form',
                templateUrl: './airline-passenger-form.component.html',
                styleUrls: ['./airline-passenger-form.component.css']
            }]
    }], function () { return [{ type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_airline_passenger_service__WEBPACK_IMPORTED_MODULE_7__["AirlinePassengerService"] }, { type: src_app_shared_services_array_helper_service__WEBPACK_IMPORTED_MODULE_8__["ArrayHelperService"] }]; }, { passengers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loyaltyAccountNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoyaltyAccountEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], passengerChanges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "z3KZ":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/airline/services/airline-error.service.ts ***!
  \***********************************************************************/
/*! exports provided: AirlineErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineErrorService", function() { return AirlineErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AirlineErrorService {
    constructor() { }
    showErrors(errors, warnings, generalErrors) {
        this.errors = errors;
        this.warnings = warnings;
        this.generalErrors = generalErrors;
        this.showErrorInfo = true;
    }
    hideErrors() {
        this.showErrorInfo = false;
        this.warnings = [];
        this.errors = [];
        this.generalErrors = [];
    }
}
AirlineErrorService.ɵfac = function AirlineErrorService_Factory(t) { return new (t || AirlineErrorService)(); };
AirlineErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirlineErrorService, factory: AirlineErrorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirlineErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=views-pages-airline-airline-module.js.map