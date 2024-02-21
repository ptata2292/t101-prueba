(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/I7I":
/*!*******************************************!*\
  !*** ./src/app/animations/slideUpDown.ts ***!
  \*******************************************/
/*! exports provided: slideUpDownAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUpDownAnimation", function() { return slideUpDownAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const slideUpDownAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideUpDown', [
    // state('in', style({ height: '*', opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ])
    ])
]);


/***/ }),

/***/ "07Ny":
/*!**********************************!*\
  !*** ./src/app/core/security.ts ***!
  \**********************************/
/*! exports provided: security */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "security", function() { return security; });
/* harmony import */ var _core_security_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/security.model */ "tL/L");

class security {
    constructor(loginService) {
        this.loginService = loginService;
    }
    acl(object, objectType, mode, action) {
        const user = this.loginService.getUserSession();
        const acl = object.acl;
        var aclObj = [];
        aclObj = acl.filter(x => x.objectType == objectType);
        if (aclObj.length == 0) {
            aclObj = acl.filter(x => x.objectType == '*');
        }
        if (aclObj.length > 0) {
            return aclObj[0].securityCode;
        }
        else {
            return _core_security_model__WEBPACK_IMPORTED_MODULE_0__["securityCode"].NONE;
        }
    }
    aclEdit(object) {
        const acl = object.acl || [];
        for (const a of acl) {
            if (a.securityCode > 3) {
                return true;
            }
        }
        return false;
    }
}


/***/ }),

/***/ "JXbo":
/*!*************************************!*\
  !*** ./src/app/core/object-base.ts ***!
  \*************************************/
/*! exports provided: ObjectBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectBase", function() { return ObjectBase; });
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security */ "07Ny");

class ObjectBase extends _security__WEBPACK_IMPORTED_MODULE_0__["security"] {
    constructor(loginService) {
        super(loginService);
        this.snackBarDuration = 2000;
        this.endDateDivs = ['endDiv', 'endDate', 'endDateDiv', 'endViewTitle', 'endOneDate', 'endRoundDay', 'endDay', 'endDate'];
        this.startDateDivs = ['startDiv', 'startDate', 'startSingleDateDiv', 'startRoundDateDiv', 'startViewTitle', 'startViewDate', 'startViewDay'];
        this.excludeDateClasses = ["next available", "calendar-table", "drp-calendar"];
        this.excludeDateNodes = ["TABLE", "TH", "TD ", "TBODY", "THEAD", "SPAN"];
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
    }
    clickWithDiv(event, divElementRef, divIds) {
        // console.log((divIds.includes(event.target.id) || divElementRef.nativeElement.contains(event.target)));
        return (divIds.includes(event.target.id) || divElementRef.nativeElement.contains(event.target));
    }
    clickWithDivClass(event, divElementRef, divIds, excludeDivClasses) {
        let isMatch = (divIds.includes(event.target.id) || divElementRef.nativeElement.contains(event.target));
        let isExclude = !(excludeDivClasses.length == 0 ? true : (excludeDivClasses.filter((divClass) => event.target.className.indexOf(divClass) != -1).length > 0));
        // console.log('isMatch:' + isMatch + ' ,isExclude:' +  isExclude + ' ,response:' +  (isMatch || isExclude));
        return (isMatch || isExclude);
    }
    checkIfClassNameExists(event, classNames) {
        return classNames.length == 0 ? true : (classNames.filter((className) => event.target.className.indexOf(className) != -1).length > 0);
    }
    checkIfNodeNameExists(event, nodeNames) {
        return nodeNames.length == 0 ? true : (nodeNames.filter((nodeName) => event.target.nodeName.indexOf(nodeName) != -1).length > 0);
    }
    formatPhoneNumber(tel) {
        var value = tel.toString().trim().replace(/^\+/, '');
        if (value.match(/[^0-9]/)) {
            return tel;
        }
        var country, city, number;
        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;
            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;
            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;
            default:
                return tel;
        }
        if (country == 1) {
            country = "+1";
        }
        number = number.slice(0, 3) + '-' + number.slice(3);
        return (country + "(" + city + ")" + number).trim();
    }
    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    isNullOrWhiteSpace(str) {
        if (str != undefined && str != null)
            str = str.toString();
        else
            str = "";
        return str.trim().length == 0;
    }
}


/***/ }),

/***/ "Ql4B":
/*!*************************************!*\
  !*** ./src/app/animations/index.ts ***!
  \*************************************/
/*! exports provided: slideInOutAnimation, slideUpDownAnimation, tilesAnimation, collapseAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slideInOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideInOut */ "gqFC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideInOutAnimation", function() { return _slideInOut__WEBPACK_IMPORTED_MODULE_0__["slideInOutAnimation"]; });

/* harmony import */ var _slideUpDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideUpDown */ "/I7I");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideUpDownAnimation", function() { return _slideUpDown__WEBPACK_IMPORTED_MODULE_1__["slideUpDownAnimation"]; });

/* harmony import */ var _tilesShow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tilesShow */ "arAB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tilesAnimation", function() { return _tilesShow__WEBPACK_IMPORTED_MODULE_2__["tilesAnimation"]; });

/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse */ "niYP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseAnimation", function() { return _collapse__WEBPACK_IMPORTED_MODULE_3__["collapseAnimation"]; });







/***/ }),

/***/ "arAB":
/*!*****************************************!*\
  !*** ./src/app/animations/tilesShow.ts ***!
  \*****************************************/
/*! exports provided: tilesAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tilesAnimation", function() { return tilesAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const tilesAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('tilesAnim', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))])
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "gqFC":
/*!******************************************!*\
  !*** ./src/app/animations/slideInOut.ts ***!
  \******************************************/
/*! exports provided: slideInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOutAnimation", function() { return slideInOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const slideInOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Page <=> Page', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ])
    ])
]);


/***/ }),

/***/ "niYP":
/*!****************************************!*\
  !*** ./src/app/animations/collapse.ts ***!
  \****************************************/
/*! exports provided: collapseAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseAnimation", function() { return collapseAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const collapseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('collapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"], visibility: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"] })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0', visibility: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100 + 'ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100 + 'ms ease-out'))
]);


/***/ }),

/***/ "tL/L":
/*!****************************************!*\
  !*** ./src/app/core/security.model.ts ***!
  \****************************************/
/*! exports provided: securityCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "securityCode", function() { return securityCode; });
var securityCode;
(function (securityCode) {
    securityCode[securityCode["NONE"] = 0] = "NONE";
    securityCode[securityCode["READ"] = 3] = "READ";
    securityCode[securityCode["WRITE"] = 7] = "WRITE";
    securityCode[securityCode["COPY"] = 15] = "COPY";
})(securityCode || (securityCode = {}));
;


/***/ })

}]);
//# sourceMappingURL=common.js.map