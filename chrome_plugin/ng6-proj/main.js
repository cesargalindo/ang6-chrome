(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crypto/crypto.component */ "./src/app/crypto/crypto.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// https://medium.com/engineering-on-the-incline/reloading-current-route-on-click-angular-5-1a1bfc740ab2
var routes = [
    {
        path: '',
        component: _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_5__["CryptoComponent"]
    },
    {
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]
    },
    {
        path: 'details/:id',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"]
    },
    {
        path: 'posts',
        component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <app-sidebar></app-sidebar>\n\n  <div id=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng6-proj';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./crypto/crypto.component */ "./src/app/crypto/crypto.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
                _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_11__["CryptoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/crypto/crypto.component.html":
/*!**********************************************!*\
  !*** ./src/app/crypto/crypto.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Crypto Prices</h1>\n\n    <button mat-raised-button color=\"primary\" (click)=\"fixBTCPrice()\" >Fix BTC Price</button>\n    &nbsp; &nbsp; &nbsp; <span *ngIf=\"btcPrice\">BTC Price is fixed at: {{ btcPrice }}</span>\n\n  <div class=\"Cryptocurrency\" *ngFor=\"let crypto of cryptos$\">\n\n      <div class=\"Cryptocurrency-header\">\n          <span class=\"icon\" id=\"{{crypto.pair}}\"></span>\n          <span> &nbsp; &nbsp; &nbsp; {{ crypto.pair }}  </span>\n            <!-- { !!index && <div className=\"up\" onClick={() => onClick(pair, 'organize')}> -->\n              <!-- <span></span> -->\n          <!-- </div> -->\n      </div>\n\n\n      <div class=\"Cryptocurrency-body\" [ngClass]=\"{ 'red':priceClass[crypto.pair] === 'red', 'green':priceClass[crypto.pair]=== 'green' }\"\n          >USD {{ crypto.last | currency:'USD':'symbol':'1.4-4' }} </div>\n\n      <div class=\"Cryptocurrency-fooder\">Low : {{ crypto.low | currency:'USD':'symbol':'1.4-4' }} | High : {{ crypto.high | currency:'USD':'symbol':'1.4-4' }} </div>\n  </div>\n\n  <!-- <ul>\n      <li *ngFor=\"let crypto of cryptos$\">\n        <p>{{ crypto.pair }} -- {{crypto.last }} </p>\n      </li>\n    </ul> -->\n\n  <!-- <hr />\n  <hr />\n\n  <div class=\"CryptocurrenciesList\">\n\n    <div class=\"Cryptocurrency\">\n      <div class=\"Cryptocurrency-header\">\n        <span class=\"icon\" id=\"BTC\"></span>\n        <span> BTC</span>\n      </div>\n      <div class=\"Cryptocurrency-body\">USD $6,420.9000</div>\n      <div class=\"Cryptocurrency-fooder\">Low : $6,348.0000 | High : $6,639.0000</div>\n    </div>\n\n    <div class=\"Cryptocurrency\">\n      <div class=\"Cryptocurrency-header\">\n        <span class=\"icon\" id=\"ETH\"></span>\n        <span> ETH</span>\n        <div class=\"up\"><span></span></div>\n      </div>\n      <div class=\"Cryptocurrency-body green\">USD $214.4600</div>\n      <div class=\"Cryptocurrency-fooder\">Low : $202.9700 | High : $234.7900</div>\n    </div>\n\n    <div class=\"Cryptocurrency\">\n      <div class=\"Cryptocurrency-header\">\n        <span class=\"icon\" id=\"BCH\"></span>\n        <span> BCH</span>\n        <div class=\"up\"><span></span></div>\n      </div>\n      <div class=\"Cryptocurrency-body\">USD $437.0700</div>\n      <div class=\"Cryptocurrency-fooder\">Low : $425.2700 | High : $470.1500</div>\n    </div>\n\n    <div class=\"Cryptocurrency\">\n      <div class=\"Cryptocurrency-header\">\n        <span class=\"icon\" id=\"BTG\"></span>\n        <span> BTG</span>\n        <div class=\"up\">\n          <span></span>\n        </div>\n      </div>\n      <div class=\"Cryptocurrency-body\">USD $21.5200</div>\n      <div class=\"Cryptocurrency-fooder\">Low : $21.0000 | High : $22.2800</div>\n    </div>\n    \n    <div class=\"Cryptocurrency\">\n      <div class=\"Cryptocurrency-header\">\n        <span class=\"icon\" id=\"DASH\"></span>\n        <span> DASH</span>\n        <div class=\"up\">\n          <span></span>\n        </div>\n      </div>\n      <div class=\"Cryptocurrency-body\">USD $184.0800</div>\n      <div class=\"Cryptocurrency-fooder\">Low : $180.0000 | High : $197.0500</div>\n    </div>\n    \n    <div class=\"Cryptocurrency\">\n      <div class=\"Cryptocurrency-header\">\n        <span class=\"icon\" id=\"XRP\"></span>\n        <span> XRP</span>\n        <div class=\"up\">\n          <span></span>\n        </div>\n      </div>\n      <div class=\"Cryptocurrency-body\">USD $0.4526</div>\n      <div class=\"Cryptocurrency-fooder\">Low : $0.4344 | High : $0.5297</div>\n    </div>\n    \n    <div class=\"Cryptocurrency\">\n      <div class=\"Cryptocurrency-header\">\n        <span class=\"icon\" id=\"XLM\"></span>\n        <span> XLM</span>\n        <div class=\"up\">\n          <span></span>\n        </div>\n      </div>\n      <div class=\"Cryptocurrency-body\">USD $0.2446</div>\n      <div class=\"Cryptocurrency-fooder\">Low : $0.2310 | High : $0.2760</div>\n    </div>\n    \n  </div> -->\n\n"

/***/ }),

/***/ "./src/app/crypto/crypto.component.scss":
/*!**********************************************!*\
  !*** ./src/app/crypto/crypto.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Cryptocurrency {\n  display: block;\n  overflow: hidden;\n  margin-bottom: 8px;\n  border-radius: 4px;\n  border: 2px solid #778899; }\n\n.Cryptocurrency:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.Cryptocurrency-header,\n.Cryptocurrency-body,\n.Cryptocurrency-fooder {\n  color: #fff;\n  padding: 8px; }\n\n.Cryptocurrency-header {\n  background: #ecf0f1;\n  color: #34495e;\n  font-weight: bold;\n  position: relative; }\n\n.Cryptocurrency-body.green {\n  background: #27ae60; }\n\n.Cryptocurrency-body.red {\n  background: #e74c3c; }\n\n.Cryptocurrency-body {\n  background: #34495e;\n  transition: background-color 600ms linear; }\n\n.Cryptocurrency-fooder {\n  font-size: 0.8em;\n  background: #2c3e50; }\n\n.Cryptocurrency .icon {\n  background-image: url(\"currencies.png\");\n  background-size: 176px 158px;\n  width: 16px;\n  height: 16px;\n  display: block;\n  position: absolute; }\n\n.Cryptocurrency .up {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  padding: 8px 10px; }\n\n.Cryptocurrency .up span {\n  padding: 4px;\n  position: relative;\n  top: 3px;\n  display: inline-block;\n  border: solid #2c3e50;\n  border-width: 0 3px 3px 0;\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg); }\n\n.Cryptocurrency-body,\n.Cryptocurrency .up {\n  cursor: pointer; }\n\n.Cryptocurrency #BTC {\n  background-position: 0 -142px; }\n\n.Cryptocurrency #ETH {\n  background-position: -128px -16px; }\n\n.Cryptocurrency #BCH {\n  background-position: -32px -142px; }\n\n.Cryptocurrency #BTG {\n  background-position: -16px -142px; }\n\n.Cryptocurrency #DASH {\n  background-position: -128px -112px; }\n\n.Cryptocurrency #XRP {\n  background-position: -80px 0; }\n\n.Cryptocurrency #ZEC {\n  background-position: -16px 0; }\n\n.Cryptocurrency #XLM {\n  background-position: -160px -76px; }\n"

/***/ }),

/***/ "./src/app/crypto/crypto.component.ts":
/*!********************************************!*\
  !*** ./src/app/crypto/crypto.component.ts ***!
  \********************************************/
/*! exports provided: CryptoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoComponent", function() { return CryptoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CryptoComponent = /** @class */ (function () {
    function CryptoComponent(data) {
        this.data = data;
        this.lastPrice = {};
        this.priceClass = {};
    }
    CryptoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Capture scope
        var cp = this;
        // Initialisation
        chrome.storage.sync.get(['btcPrice'], function (binfo) {
            cp.getBTCPrice(binfo);
        });
        // Delay until chrome storage has been retrieved
        var sourcef = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1, 8000).subscribe(function (x) {
            _this.getTheCrypto();
        });
    };
    CryptoComponent.prototype.getTheCrypto = function () {
        var _this = this;
        this.data.getCrypto().subscribe(function (data) {
            if (data !== undefined) {
                console.log(data);
                _this.cryptos$ = data['data'].map(function (x) {
                    _this.token = x.pair.split(':');
                    x.pair = _this.token[0];
                    if (_this.lastPrice[x.pair] > x.last) {
                        _this.priceClass[x.pair] = 'green';
                    }
                    else if (_this.lastPrice[x.pair] < x.last) {
                        _this.priceClass[x.pair] = 'red';
                    }
                    else {
                        _this.priceClass[x.pair] = 'zilch';
                    }
                    _this.lastPrice[x.pair] = x.last;
                    return x;
                });
            }
            // this.cryptos$ = data.data;
            // console.log(this.cryptos$);
        });
    };
    CryptoComponent.prototype.fixBTCPrice = function () {
        alert('Approve this ... ');
        // Set the stored variables
        chrome.storage.sync.set({ 'btcPrice': 7000 }, function () {
            this.btcPrice = 7000;
            alert('Uh oh! You have reached your budget limit.');
        });
    };
    CryptoComponent.prototype.getBTCPrice = function (binfo) {
        if (binfo.btcPrice) {
            this.btcPrice = binfo.btcPrice;
        }
        console.warn(this.btcPrice);
    };
    CryptoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crypto',
            template: __webpack_require__(/*! ./crypto.component.html */ "./src/app/crypto/crypto.component.html"),
            styles: [__webpack_require__(/*! ./crypto.component.scss */ "./src/app/crypto/crypto.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CryptoComponent);
    return CryptoComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        // Don't reload page on first load
        this.postsPageReload = false;
    }
    DataService.prototype.getUsers = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    DataService.prototype.getUser = function (userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
    };
    DataService.prototype.getPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    };
    DataService.prototype.getCrypto = function () {
        return this.http.get('https://cex.io/api/tickers/USD');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user$\">\n  <h1>{{ user$.name }}</h1>\n\n  <ul>\n    <li><strong>Username:</strong> {{ user$.username }}</li>\n    <li><strong>Email:</strong> {{ user$.email }}</li>\n    <li><strong>Phone:</strong> {{ user$.phone }}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/details/details.component.scss":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, data) {
        var _this = this;
        this.route = route;
        this.data = data;
        this.route.params.subscribe(function (params) { return _this.user$ = params.id; });
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUser(this.user$).subscribe(function (data) { return _this.user$ = data; });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Posts</h1>\n\n\n<form [formGroup]=\"editItemForm\">\n\t\t<!-- Color picker (adjusts to element size) -->\n    <label>Select New Color </label>\n    <input type=\"text\" \n          formControlName=\"name\"\n          (blur)=\"newColor($event)\"\n          class=\"jscolor\"\n          id=\"karate\"><br>\n\n          <div flex=\"20\">\n              <!-- &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a mat-raised-button color=\"primary\" (click)=\"applyFilter()\"> SEARCH </a> -->\n          </div>\n  </form>\n\n  <p> Test page: <a href=\"https://developer.chrome.com/apps/contextMenus\" target=\"_blank\">https://developer.chrome.com/apps/contextMenus</a> </p>\n\n<hr />\n\n<ul>\n  <li *ngFor=\"let post of posts$\">\n    <a routerLink=\"\">{{ post.title }}</a>\n\n    <p>{{ post.body }}</p>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsComponent = /** @class */ (function () {
    function PostsComponent(formBuilder, data) {
        this.formBuilder = formBuilder;
        this.data = data;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Force page reload - to ensure javascript is reapplied
        if (this.data.postsPageReload) {
            this.data.postsPageReload = false;
            window.location.reload();
            return;
        }
        this.data.postsPageReload = true;
        this.data.getPosts().subscribe(function (data) { return _this.posts$ = data; });
        // this.loadScript('http://www.some-library.com/library.js');
        this.loadScript('../assets/jscolor.js');
        this.editItemForm = this.formBuilder.group({
            name: [''],
        });
    };
    PostsComponent.prototype.newColor = function (info) {
        var fontColorField = document.getElementById('karate');
        // console.log(fontColorField);
        // console.log(fontColorField.getAttribute('style'));
        var style = fontColorField.getAttribute('style');
        var ff1 = style.split("(");
        console.log(ff1);
        var ff2 = ff1[1].split(")");
        console.log(ff2);
        var ff3 = ff2[0].split(",");
        console.log(ff3);
        var fontColor = this.rgb2hex(ff3[0].trim(), ff3[1].trim(), ff3[2].trim());
        console.log(fontColor);
        // Send change-color data to content.js
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            alert('Send Message from Angular 6 to content.js: ' + tabs[0].id + ' -- ' + fontColor);
            chrome.tabs.sendMessage(tabs[0].id, { todo: "changeColor", clickedColor: fontColor });
        });
    };
    PostsComponent.prototype.applyFilter = function () {
        console.warn(this.editItemForm.value);
    };
    PostsComponent.prototype.loadScript = function (url) {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    };
    PostsComponent.prototype.rgb2hex = function (red, green, blue) {
        var rgb = blue | (green << 8) | (red << 16);
        return (0x1000000 + rgb).toString(16).slice(1);
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li>\n        <a routerLink=\"\" [class.activated]=\"currentUrl == '/'\">\n          <i class=\"material-icons\">monetization_on</i>\n        </a>\n      </li>\n    <li>\n      <a routerLink=\"users\" [class.activated]=\"currentUrl == '/users'\">\n        <i class=\"material-icons\">supervised_user_circle</i>\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"posts\" [class.activated]=\"currentUrl == '/posts'\">\n        <i class=\"material-icons\">message</i>\n      </a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background: #2D2E2E;\n  height: 100%; }\n  nav ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0; }\n  nav ul li a {\n      color: #fff;\n      padding: 20px;\n      display: block; }\n  nav ul li .activated {\n      background-color: #00a8ff; }\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (_) {
            if (_.url !== undefined) {
                _this.currentUrl = _.url;
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Users</h1>\n\n<h3 *ngIf=\"btcPrice\">BTC Price is fixed at: {{ btcPrice }}</h3>\n\n<ul [@listStagger]=\"users$\">\n  <li *ngFor=\"let user of users$\">\n    <a routerLink=\"/details/{{user.id}}\">{{ user.name }}</a>\n\n    <ul>\n      <li>{{ user.email }}</li>\n      <li><a href=\"http://{{ user.website }}\">{{ user.website }}</a></li>\n    </ul>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(data) {
        this.data = data;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Capture scope
        var cp = this;
        // Initialisation
        chrome.storage.sync.get(['btcPrice'], function (binfo) {
            cp.getBTCPrice(binfo);
        });
        this.data.getUsers().subscribe(function (data) { return _this.users$ = data; });
    };
    UsersComponent.prototype.getBTCPrice = function (binfo) {
        if (binfo.btcPrice) {
            this.btcPrice = binfo.btcPrice;
        }
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listStagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })), {
                            optional: true
                        })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cesargalindo/Development/Angular6/tutorial/crypto-tracker/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map