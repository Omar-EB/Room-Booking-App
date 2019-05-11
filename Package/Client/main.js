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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_listunit_listunit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/listunit/listunit.component */ "./src/app/components/listunit/listunit.component.ts");
/* harmony import */ var _components_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/unit-form/unit-form.component */ "./src/app/components/unit-form/unit-form.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/employee/employee.component */ "./src/app/components/employee/employee.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");









var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"] },
    { path: 'employee', component: _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    { path: 'unittest/units', component: _components_listunit_listunit_component__WEBPACK_IMPORTED_MODULE_3__["ListunitComponent"] },
    { path: 'unittest/:id/units', component: _components_listunit_listunit_component__WEBPACK_IMPORTED_MODULE_3__["ListunitComponent"] },
    { path: 'op', component: _components_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_4__["UnitFormComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Room-Booking-App-Client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _services_unit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/unit.service */ "./src/app/services/unit.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/employee/employee.component */ "./src/app/components/employee/employee.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_listunit_listunit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/listunit/listunit.component */ "./src/app/components/listunit/listunit.component.ts");
/* harmony import */ var _components_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/unit-form/unit-form.component */ "./src/app/components/unit-form/unit-form.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_listunit_listunit_component__WEBPACK_IMPORTED_MODULE_15__["ListunitComponent"],
                _components_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_16__["UnitFormComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"].forRoot()
            ],
            providers: [_services_unit_service__WEBPACK_IMPORTED_MODULE_10__["UnitService"], _services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\r\n  <div class = 'row'>\r\n    <div class = 'col-md-12'>\r\n      <button type = 'button' class = 'btn btn-primary' (click) = 'onBack()'>Back</button>\r\n    </div>\r\n  </div>\r\n  <div class = 'row'>\r\n    <div class = 'col-md-12'>\r\n      <ngb-tabset>\r\n\r\n        <ngb-tab title = 'Customers'>\r\n          <ng-template ngbTabContent>\r\n            <button class = 'btn btn-primary' (click)='openCreateCustomer(createCustomer)'>Add Customer</button>\r\n            <table class = 'table table-striped'>\r\n              <thead>\r\n                <th>SIN</th>\r\n                <th>Name</th>\r\n                <th>Address</th>\r\n                <th></th>\r\n                <th></th>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor = 'let customer of customers'>\r\n                  <td>{{customer.sin}}</td>\r\n                  <td>{{customer.getName()}}</td>\r\n                  <td>{{customer.getAddress()}}</td>\r\n                  <td>\r\n                    <button class = 'btn btn-primary' (click)='openUpdateCustomer(updateCustomer, customer)'>Update</button>\r\n                  </td>\r\n                  <td>\r\n                    <button class = 'btn btn-danger' (click)='onDeleteCustomer(customer)'>Delete</button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n        <ngb-tab title = 'Employees'>\r\n          <ng-template ngbTabContent>\r\n            <button class = 'btn btn-primary' (click)='openCreateEmployee(createEmployee)'>Add Employee</button>\r\n            <table class = 'table table-striped'>\r\n              <thead>\r\n                <th>SIN</th>\r\n                <th>Name</th>\r\n                <th>Address</th>\r\n                <th>Hotel Chain</th>\r\n                <th>Hotel ID</th>\r\n                <th></th>\r\n                <th></th>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor = 'let employee of employees'>\r\n                  <td>{{employee.sin}}</td>\r\n                  <td>{{employee.getName()}}</td>\r\n                  <td>{{employee.getAddress()}}</td>\r\n                  <td>{{employee.hotel.hotelChain.hcName}}</td>\r\n                  <td>{{employee.hotel.hotelId}}</td>\r\n                  <td>\r\n                    <button class = 'btn btn-primary' (click)='openUpdateEmployee(updateEmployee, employee)'>Update</button>\r\n                  </td>\r\n                  <td>\r\n                    <button class = 'btn btn-danger' (click)='onDeleteEmployee(employee)'>Delete</button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n        <ngb-tab title = 'Hotels'>\r\n          <ng-template ngbTabContent>\r\n            <button class = 'btn btn-primary' (click)='openCreateHotel(createHotel)'>Add Hotel</button>\r\n            <table class = 'table table-striped'>\r\n              <thead>\r\n                <th>Hotel Chain</th>\r\n                <th>Hotel ID</th>\r\n                <th>Address</th>\r\n                <th>Phone Number</th>\r\n                <th>Rating</th>\r\n                <th>Number of Rooms</th>\r\n                <th></th>\r\n                <th></th>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor = 'let hotel of hotels'>\r\n                  <td>{{hotel.hotelChain.hcName}}</td>\r\n                  <td>{{hotel.hotelId}}</td>\r\n                  <td>{{hotel.getAddress()}}</td>\r\n                  <td>{{hotel.phoneNumber}}</td>\r\n                  <td>{{hotel.rating}}</td>\r\n                  <td>{{hotel.numberOfRooms}}</td>\r\n                  <td>\r\n                    <button class = 'btn btn-primary' (click)='openUpdateHotel(updateHotel, hotel)'>Update</button>\r\n                  </td>\r\n                  <td>\r\n                    <button class = 'btn btn-danger' (click)='onDeleteHotel(hotel)'>Delete</button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n        <ngb-tab title = 'Rooms'>\r\n          <ng-template ngbTabContent>\r\n            <button class = 'btn btn-primary' (click)='openCreateRoom(createRoom)'>Add Room</button>\r\n            <table class = 'table table-striped'>\r\n              <thead>\r\n                <th>Hotel Chain</th>\r\n                <th>Hotel ID</th>\r\n                <th>Address</th>\r\n                <th>Room Number</th>\r\n                <th>View Type</th>\r\n                <th>Capacity</th>\r\n                <th>Price ($ CAD)</th>\r\n                <th>Extendable</th>\r\n                <th>Area (ft^2)</th>\r\n                <th></th>\r\n                <th></th>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor = 'let room of rooms'>\r\n                  <td>{{room.hotel.hotelChain.hcName}}</td>\r\n                  <td>{{room.hotel.hotelId}}</td>\r\n                  <td>{{room.hotel.getAddress()}}</td>\r\n                  <td>{{room.roomNumber}}</td>\r\n                  <td>{{room.viewType}}</td>\r\n                  <td>{{room.capacity}}</td>\r\n                  <td>{{room.price}}</td>\r\n                  <td>{{room.extendable ? 'Yes' : 'No'}}</td>\r\n                  <td>{{room.area}}</td>\r\n                  <td>\r\n                    <button class = 'btn btn-primary' (click)='openUpdateRoom(updateRoom, room)'>Update</button>\r\n                  </td>\r\n                  <td>\r\n                    <button class = 'btn btn-danger' (click)='onDeleteRoom(room)'>Delete</button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n      </ngb-tabset>\r\n    </div>\r\n  </div> \r\n</div>\r\n\r\n\r\n<ng-template #createCustomer let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Customer</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class = 'row'>\r\n      <label>\r\n        SIN \r\n        <input type = 'text' class = 'form-control' name = 'sin' [(ngModel)] = 'customer.sin'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Given Name\r\n        <input type = 'text' class = 'form-control' name = 'givenName' [(ngModel)] = 'customer.givenName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Family Name\r\n        <input type = 'text' class = 'form-control' name = 'familyName' [(ngModel)] = 'customer.familyName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street Number\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'streetNumber' [(ngModel)] = 'customer.streetNumber'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street Name\r\n        <input type = 'text' class= 'form-control' name = 'streetName' [(ngModel)] = 'customer.streetName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        City\r\n        <input type = 'text' class= 'form-control' name = 'city' [(ngModel)] = 'customer.city'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        State\r\n        <input type = 'text' maxlength = '2' class= 'form-control' name = 'state' [(ngModel)] = 'customer.state'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Country\r\n        <input type = 'text' maxlength = '2' class= 'form-control' name = 'country' [(ngModel)] = 'customer.country'>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCreateCustomer(modal)\">Create</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #updateCustomer let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Customer</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class = 'row'>\r\n      <label>\r\n        SIN \r\n        <h5>{{customer.sin}}</h5>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Given Name\r\n        <input type = 'text' class = 'form-control' name = 'givenName' [(ngModel)] = 'customer.givenName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Family Name\r\n        <input type = 'text' class = 'form-control' name = 'familyName' [(ngModel)] = 'customer.familyName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street Number\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'streetNumber' [(ngModel)] = 'customer.streetNumber'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street Name\r\n        <input type = 'text' class= 'form-control' name = 'streetName' [(ngModel)] = 'customer.streetName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        City\r\n        <input type = 'text' class= 'form-control' name = 'city' [(ngModel)] = 'customer.city'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        State\r\n        <input type = 'text' maxlength = '2' class= 'form-control' name = 'state' [(ngModel)] = 'customer.state'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Country\r\n        <input type = 'text' maxlength = '2' class= 'form-control' name = 'country' [(ngModel)] = 'customer.country'>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onUpdateCustomer(modal)\">Update</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<ng-template #createEmployee let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Employee</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class = 'row'>\r\n      <label>\r\n        SIN \r\n        <input type = 'text' class = 'form-control' name = 'sin' [(ngModel)] = 'employee.sin'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Given Name\r\n        <input type = 'text' class = 'form-control' name = 'givenName' [(ngModel)] = 'employee.givenName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Family Name\r\n        <input type = 'text' class = 'form-control' name = 'familyName' [(ngModel)] = 'employee.familyName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street Number\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'streetNumber' [(ngModel)] = 'employee.streetNumber'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street Name\r\n        <input type = 'text' class= 'form-control' name = 'streetName' [(ngModel)] = 'employee.streetName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        City\r\n        <input type = 'text' class= 'form-control' name = 'city' [(ngModel)] = 'employee.city'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        State\r\n        <input type = 'text' maxlength = '2' class= 'form-control' name = 'state' [(ngModel)] = 'employee.state'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Country\r\n        <input type = 'text' maxlength = '2' class= 'form-control' name = 'country' [(ngModel)] = 'employee.country'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Hotel ID\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'hotelId' [(ngModel)] = 'employee.hotel.hotelId'>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCreateEmployee(modal)\">Create</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #updateEmployee let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Employee</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class = 'row'>\r\n      <label>\r\n        SIN \r\n        <h5>{{employee.sin}}</h5>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Given Name\r\n        <input type = 'text' class = 'form-control' name = 'givenName' [(ngModel)] = 'employee.givenName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Family Name\r\n        <input type = 'text' class = 'form-control' name = 'familyName' [(ngModel)] = 'employee.familyName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street Number\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'streetNumber' [(ngModel)] = 'employee.streetNumber'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street Name\r\n        <input type = 'text' class= 'form-control' name = 'streetName' [(ngModel)] = 'employee.streetName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        City\r\n        <input type = 'text' class= 'form-control' name = 'city' [(ngModel)] = 'employee.city'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        State\r\n        <input type = 'text' maxlength = '2' class= 'form-control' name = 'state' [(ngModel)] = 'employee.state'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Country\r\n        <input type = 'text' maxlength = '2' class= 'form-control' name = 'country' [(ngModel)] = 'employee.country'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Hotel ID\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'hotelId' [(ngModel)] = 'employee.hotel.hotelId'>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onUpdateEmployee(modal)\">Update</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<ng-template #createHotel let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Hotel</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class = 'row'>\r\n        <label>\r\n          Hotel Chain\r\n          <input type = 'text' class = 'form-control' name = 'hcName' [(ngModel)] = 'hotel.hotelChain.hcName'>\r\n        </label>\r\n      </div>\r\n      <div class = 'row'>\r\n        <label>\r\n          Street Number\r\n          <input type = 'number' min = '0' class = 'form-control' name = 'streetNumber' [(ngModel)] = 'hotel.streetNumber'>\r\n        </label>\r\n      </div>\r\n      <div class = 'row'>\r\n        <label>\r\n          Street Name\r\n          <input type = 'text' class = 'form-control' name = 'streetName' [(ngModel)] = 'hotel.streetName'>\r\n        </label>\r\n      </div>\r\n      <div class = 'row'>\r\n        <label>\r\n          City\r\n          <input type = 'text' class = 'form-control' name = 'city' [(ngModel)] = 'hotel.city'>\r\n        </label>\r\n      </div>\r\n      <div class = 'row'>\r\n        <label>\r\n          State\r\n          <input type = 'text' maxlength = '2' class= 'form-control' name = 'state' [(ngModel)] = 'hotel.state'>\r\n        </label>\r\n      </div>\r\n      <div class = 'row'>\r\n        <label>\r\n          Country\r\n          <input type = 'text' maxlength = '2' class= 'form-control' name = 'country' [(ngModel)] = 'hotel.country'>\r\n        </label>\r\n      </div>\r\n      <div class = 'row'>\r\n        <label>\r\n          Rating\r\n          <select class = 'form-control' name = 'rating' [(ngModel)] = 'hotel.rating'>\r\n            <option>1</option>\r\n            <option>2</option>\r\n            <option>3</option>\r\n            <option>4</option>\r\n            <option>5</option>\r\n          </select>\r\n        </label>\r\n      </div>\r\n      <div class = 'row'>\r\n        <label>\r\n          Phone Number\r\n          <input type = 'text' class = 'form-control' name = 'phoneNumber' [(ngModel)] = 'hotel.phoneNumber'>\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCreateHotel(modal)\">Create</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n\r\n\r\n<ng-template #updateHotel let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Hotel</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class = 'row'>\r\n      <label>\r\n        Hotel Chain\r\n        <h5>{{hotel.hotelChain.hcName}}</h5>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Hotel ID\r\n        <h5>{{hotel.hotelId}}</h5>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street Number\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'streetNumber' [(ngModel)] = 'hotel.streetNumber'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street Name\r\n        <input type = 'text' class = 'form-control' name = 'streetName' [(ngModel)] = 'hotel.streetName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        City\r\n        <input type = 'text' class = 'form-control' name = 'city' [(ngModel)] = 'hotel.city'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        State\r\n        <input type = 'text' maxlength = '2' class= 'form-control' name = 'state' [(ngModel)] = 'hotel.state'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Country\r\n        <input type = 'text' maxlength = '2' class= 'form-control' name = 'country' [(ngModel)] = 'hotel.country'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Rating\r\n        <select class = 'form-control' name = 'rating' [(ngModel)] = 'hotel.rating'>\r\n          <option>1</option>\r\n          <option>2</option>\r\n          <option>3</option>\r\n          <option>4</option>\r\n          <option>5</option>\r\n        </select>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Phone Number\r\n        <input type = 'text' class = 'form-control' name = 'phoneNumber' [(ngModel)] = 'hotel.phoneNumber'>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onUpdateHotel(modal)\">Update</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #createRoom let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Room</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class = 'row'>\r\n      <label>\r\n        Hotel ID\r\n        <input type = 'text' class = 'form-control' name = 'hotelId' [(ngModel)] = 'room.hotel.hotelId'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Room Number\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'roomNumber' [(ngModel)] = 'room.roomNumber'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        View Type\r\n        <select class = 'form-control' name = 'viewType' [(ngModel)] = 'room.viewType'>\r\n          <option>Sea</option>\r\n          <option>Mountain</option>\r\n        </select>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Capacity\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'capacity' [(ngModel)] = 'room.capacity'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Price\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'price' [(ngModel)] = 'room.price'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Extendable\r\n        <select class = 'form-control' name = 'extendable' [(ngModel)] = 'room.extendable'>\r\n          <option [ngValue] = 'true'>Yes</option>\r\n          <option [ngValue] = 'false'>No</option>\r\n        </select>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Area \r\n        <input type = 'number' min = '0' class = 'form-control' name = 'area' [(ngModel)] = 'room.area'>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCreateRoom(modal)\">Create</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<ng-template #updateRoom let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Update Room</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class = 'row'>\r\n      <label>\r\n        Hotel ID\r\n        <h5>{{room.hotel.hotelId}}</h5>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Room Number\r\n        <h5>{{room.roomNumber}}</h5>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        View Type\r\n        <select class = 'form-control' name = 'viewType' [(ngModel)] = 'room.viewType'>\r\n          <option>Sea</option>\r\n          <option>Mountain</option>\r\n        </select>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Capacity\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'capacity' [(ngModel)] = 'room.capacity'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Price\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'price' [(ngModel)] = 'room.price'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Extendable\r\n        <select class = 'form-control' name = 'extendable' [(ngModel)] = 'room.extendable'>\r\n          <option [ngValue] = 'true'>Yes</option>\r\n          <option [ngValue] = 'false'>No</option>\r\n        </select>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Area \r\n        <input type = 'number' min = '0' class = 'form-control' name = 'area' [(ngModel)] = 'room.area'>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onUpdateRoom(modal)\">Update</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_models_room_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/room.model */ "./src/app/models/room.model.ts");
/* harmony import */ var src_app_models_customer_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/customer.model */ "./src/app/models/customer.model.ts");
/* harmony import */ var src_app_models_employee_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/employee.model */ "./src/app/models/employee.model.ts");
/* harmony import */ var src_app_models_hotel_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/hotel.model */ "./src/app/models/hotel.model.ts");









var AdminComponent = /** @class */ (function () {
    function AdminComponent(location, apiService, modalService) {
        this.location = location;
        this.apiService = apiService;
        this.modalService = modalService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.customer = new src_app_models_customer_model__WEBPACK_IMPORTED_MODULE_6__["Customer"]();
        this.employee = new src_app_models_employee_model__WEBPACK_IMPORTED_MODULE_7__["Employee"]();
        this.hotel = new src_app_models_hotel_model__WEBPACK_IMPORTED_MODULE_8__["Hotel"]();
        this.room = new src_app_models_room_model__WEBPACK_IMPORTED_MODULE_5__["Room"]();
        this.getCustomers();
        this.getEmployees();
        this.getHotels();
        this.getRooms();
    };
    AdminComponent.prototype.onBack = function () {
        this.location.back();
    };
    AdminComponent.prototype.getCustomers = function () {
        var _this = this;
        this.apiService.getCustomers()
            .subscribe(function (customers) {
            _this.customers = [];
            for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
                var customer = customers_1[_i];
                _this.customers.push(_this.apiService.parseToCustomer(customer));
            }
        }, function (error) {
            console.log(error);
        });
    };
    AdminComponent.prototype.getEmployees = function () {
        var _this = this;
        this.apiService.getEmployees()
            .subscribe(function (employees) {
            _this.employees = [];
            for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
                var employee = employees_1[_i];
                _this.employees.push(_this.apiService.parseToEmployee(employee));
            }
        }, function (error) {
            console.log(error);
        });
    };
    AdminComponent.prototype.getHotels = function () {
        var _this = this;
        this.apiService.getHotels()
            .subscribe(function (hotels) {
            _this.hotels = [];
            for (var _i = 0, hotels_1 = hotels; _i < hotels_1.length; _i++) {
                var hotel = hotels_1[_i];
                _this.hotels.push(_this.apiService.parseToHotel(hotel));
            }
        }, function (error) {
            console.log(error);
        });
    };
    AdminComponent.prototype.getRooms = function () {
        var _this = this;
        this.apiService.getRooms()
            .subscribe(function (rooms) {
            _this.rooms = [];
            for (var _i = 0, rooms_1 = rooms; _i < rooms_1.length; _i++) {
                var room = rooms_1[_i];
                _this.rooms.push(_this.apiService.parseToRoom(room));
            }
        }, function (error) {
            console.log(error);
        });
    };
    //=========================================================================================
    AdminComponent.prototype.openCreateCustomer = function (createCustomer) {
        this.customer = new src_app_models_customer_model__WEBPACK_IMPORTED_MODULE_6__["Customer"]();
        this.modalService.open(createCustomer, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    AdminComponent.prototype.openCreateEmployee = function (createEmployee) {
        this.employee = new src_app_models_employee_model__WEBPACK_IMPORTED_MODULE_7__["Employee"]();
        this.modalService.open(createEmployee, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    AdminComponent.prototype.openCreateHotel = function (createHotel) {
        this.hotel = new src_app_models_hotel_model__WEBPACK_IMPORTED_MODULE_8__["Hotel"]();
        this.modalService.open(createHotel, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    AdminComponent.prototype.openCreateRoom = function (createRoom) {
        this.room = new src_app_models_room_model__WEBPACK_IMPORTED_MODULE_5__["Room"]();
        this.modalService.open(createRoom, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    //=========================================================================================
    AdminComponent.prototype.openUpdateCustomer = function (updateCustomer, customer) {
        this.customer = customer;
        this.modalService.open(updateCustomer, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    AdminComponent.prototype.openUpdateEmployee = function (updateEmployee, employee) {
        this.employee = employee;
        this.modalService.open(updateEmployee, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    AdminComponent.prototype.openUpdateHotel = function (updateHotel, hotel) {
        this.hotel = hotel;
        this.modalService.open(updateHotel, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    AdminComponent.prototype.openUpdateRoom = function (updateRoom, room) {
        this.room = room;
        ;
        this.modalService.open(updateRoom, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    //=========================================================================================
    AdminComponent.prototype.onCreateCustomer = function (modal) {
        var _this = this;
        if (!this.checkCustomerInfoValid()) {
            return;
        }
        this.apiService.createCustomer(this.getCustomerParams())
            .subscribe(function (result) {
            _this.customers.push(_this.customer);
        }, function (error) {
            console.log(error);
        });
        modal.close('');
    };
    AdminComponent.prototype.onCreateEmployee = function (modal) {
        var _this = this;
        if (!this.checkEmployeeInfoValid()) {
            return;
        }
        this.apiService.createEmployee(this.getEmployeeParams())
            .subscribe(function (result) {
            _this.employees.push(_this.employee);
        }, function (error) {
            console.log(error);
        });
        modal.close('');
    };
    AdminComponent.prototype.onCreateHotel = function (modal) {
        var _this = this;
        if (!this.checkHotelInfoValid()) {
            return;
        }
        this.apiService.createHotel(this.getHotelParams())
            .subscribe(function (result) {
            _this.getHotels();
        }, function (error) {
            console.log(error);
        });
        modal.close('');
    };
    AdminComponent.prototype.onCreateRoom = function (modal) {
        var _this = this;
        if (!this.checkRoomInfoValid()) {
            return;
        }
        this.apiService.createRoom(this.getRoomParams())
            .subscribe(function (result) {
            _this.getRooms();
        }, function (error) {
            console.log(error);
        });
        modal.close('');
    };
    //=========================================================================================
    AdminComponent.prototype.onUpdateCustomer = function (modal) {
        var _this = this;
        if (!this.checkCustomerInfoValid()) {
            return;
        }
        this.apiService.updateCustomer(this.getCustomerParams())
            .subscribe(function (result) {
            var newCustomers = [];
            for (var _i = 0, _a = _this.customers; _i < _a.length; _i++) {
                var customer = _a[_i];
                if (customer.sin != _this.customer.sin) {
                    newCustomers.push(customer);
                }
                else {
                    newCustomers.push(_this.customer);
                }
            }
            _this.customers = newCustomers;
        }, function (error) {
            console.log(error);
        });
        modal.close('');
    };
    AdminComponent.prototype.onUpdateEmployee = function (modal) {
        var _this = this;
        if (!this.checkEmployeeInfoValid()) {
            return;
        }
        this.apiService.updateEmployee(this.getEmployeeParams())
            .subscribe(function (result) {
            var newEmployees = [];
            for (var _i = 0, _a = _this.employees; _i < _a.length; _i++) {
                var employee = _a[_i];
                if (employee.sin != _this.employee.sin) {
                    newEmployees.push(employee);
                }
                else {
                    newEmployees.push(_this.employee);
                }
            }
            _this.employees = newEmployees;
        }, function (error) {
            console.log(error);
        });
        modal.close('');
    };
    AdminComponent.prototype.onUpdateHotel = function (modal) {
        var _this = this;
        if (!this.checkHotelInfoValid()) {
            return;
        }
        this.apiService.updateHotel(this.getHotelParams())
            .subscribe(function (result) {
            var newHotels = [];
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.hotelId != _this.hotel.hotelId) {
                    newHotels.push(h);
                }
                else {
                    newHotels.push(_this.hotel);
                }
            }
            _this.hotels = newHotels;
        }, function (error) {
            console.log(error);
        });
        modal.close('');
    };
    AdminComponent.prototype.onUpdateRoom = function (modal) {
        var _this = this;
        if (!this.checkRoomInfoValid()) {
            return;
        }
        this.apiService.updateRoom(this.getRoomParams())
            .subscribe(function (result) {
            var newRooms = [];
            for (var _i = 0, _a = _this.rooms; _i < _a.length; _i++) {
                var r = _a[_i];
                if (r.hotel.hotelId != _this.room.hotel.hotelId || r.roomNumber != _this.room.roomNumber) {
                    newRooms.push(r);
                }
                else {
                    newRooms.push(_this.room);
                }
            }
            _this.rooms = newRooms;
        }, function (error) {
            console.log(error);
        });
        modal.close('');
    };
    //=========================================================================================
    AdminComponent.prototype.onDeleteCustomer = function (customer) {
        var _this = this;
        this.apiService.deleteCustomer(customer.sin)
            .subscribe(function (result) {
            var newCustomers = [];
            for (var _i = 0, _a = _this.customers; _i < _a.length; _i++) {
                var cust = _a[_i];
                if (cust.sin != customer.sin) {
                    newCustomers.push(cust);
                }
            }
            _this.customers = newCustomers;
        }, function (error) {
            console.log(error);
        });
    };
    AdminComponent.prototype.onDeleteEmployee = function (employee) {
        var _this = this;
        this.apiService.deleteEmployee(employee.sin)
            .subscribe(function (result) {
            var newEmployees = [];
            for (var _i = 0, _a = _this.employees; _i < _a.length; _i++) {
                var emp = _a[_i];
                if (emp.sin != employee.sin) {
                    newEmployees.push(emp);
                }
            }
            _this.employees = newEmployees;
        }, function (error) {
            console.log(error);
        });
    };
    AdminComponent.prototype.onDeleteHotel = function (hotel) {
        var _this = this;
        this.apiService.deleteHotel(hotel.hotelId)
            .subscribe(function (result) {
            var newHotels = [];
            for (var _i = 0, _a = _this.hotels; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h.hotelId != hotel.hotelId) {
                    newHotels.push(h);
                }
            }
            _this.hotels = newHotels;
        }, function (error) {
            console.log(error);
        });
    };
    AdminComponent.prototype.onDeleteRoom = function (room) {
        var _this = this;
        this.apiService.deleteRoom(room.hotel.hotelId, room.roomNumber)
            .subscribe(function (result) {
            var newRooms = [];
            for (var _i = 0, _a = _this.rooms; _i < _a.length; _i++) {
                var r = _a[_i];
                if (r.hotel.hotelId != room.hotel.hotelId || r.roomNumber != room.roomNumber) {
                    newRooms.push(r);
                }
            }
            _this.rooms = newRooms;
        }, function (error) {
            console.log(error);
        });
    };
    //=========================================================================================
    AdminComponent.prototype.getCustomerParams = function () {
        var customerParams = {};
        customerParams.customer_sin = this.customer.sin;
        customerParams.given_name = this.customer.givenName;
        customerParams.family_name = this.customer.familyName;
        customerParams.street_name = this.customer.streetName;
        customerParams.street_number = +this.customer.streetNumber;
        customerParams.city = this.customer.city;
        customerParams.state = this.customer.state;
        customerParams.country = this.customer.country;
        return customerParams;
    };
    AdminComponent.prototype.getEmployeeParams = function () {
        var employeeParams = {};
        employeeParams.employee_sin = this.employee.sin;
        employeeParams.given_name = this.employee.givenName;
        employeeParams.family_name = this.employee.familyName;
        employeeParams.street_name = this.employee.streetName;
        employeeParams.street_number = +this.employee.streetNumber;
        employeeParams.city = this.employee.city;
        employeeParams.state = this.employee.state;
        employeeParams.country = this.employee.country;
        employeeParams.hotel_id = +this.employee.hotel.hotelId;
        return employeeParams;
    };
    AdminComponent.prototype.getHotelParams = function () {
        var hotelParams = {};
        hotelParams.hc_name = this.hotel.hotelChain.hcName;
        hotelParams.hotel_id = this.hotel.hotelId;
        hotelParams.street_name = this.hotel.streetName;
        hotelParams.street_number = +this.hotel.streetNumber;
        hotelParams.city = this.hotel.city;
        hotelParams.state = this.hotel.state;
        hotelParams.country = this.hotel.country;
        hotelParams.rating = +this.hotel.rating;
        hotelParams.phone_number = this.hotel.phoneNumber;
        hotelParams.number_of_rooms = this.hotel.numberOfRooms;
        return hotelParams;
    };
    AdminComponent.prototype.getRoomParams = function () {
        var roomParams = {};
        roomParams.hotel_id = +this.room.hotel.hotelId;
        roomParams.room_number = +this.room.roomNumber;
        roomParams.view_type = this.room.viewType;
        roomParams.capacity = +this.room.capacity;
        roomParams.price = +this.room.price;
        roomParams.extendable = !!+this.room.extendable;
        roomParams.area = +this.room.area;
        return roomParams;
    };
    AdminComponent.prototype.checkCustomerInfoValid = function () {
        if (!this.customer.sin) {
            window.alert('Sin is missing');
            return false;
        }
        else if (!this.customer.givenName) {
            window.alert('Given name is missing');
            return false;
        }
        else if (!this.customer.familyName) {
            window.alert('Family name is missing');
            return false;
        }
        else if (!this.customer.streetName) {
            window.alert('Street name is missing');
            return false;
        }
        else if (!this.customer.streetNumber) {
            window.alert('Street number is missing');
            return false;
        }
        else if (!this.customer.city) {
            window.alert('City is missing');
            return false;
        }
        else if (!this.customer.state) {
            window.alert('State is missing');
            return false;
        }
        else if (!this.customer.country) {
            window.alert('Country is missing');
            return false;
        }
        return true;
    };
    AdminComponent.prototype.checkEmployeeInfoValid = function () {
        if (!this.employee.sin) {
            window.alert('Sin is missing');
            return false;
        }
        else if (!this.employee.givenName) {
            window.alert('Given name is missing');
            return false;
        }
        else if (!this.employee.familyName) {
            window.alert('Family name is missing');
            return false;
        }
        else if (!this.employee.streetName) {
            window.alert('Street name is missing');
            return false;
        }
        else if (!this.employee.streetNumber) {
            window.alert('Street number is missing');
            return false;
        }
        else if (!this.employee.city) {
            window.alert('City is missing');
            return false;
        }
        else if (!this.employee.state) {
            window.alert('State is missing');
            return false;
        }
        else if (!this.employee.country) {
            window.alert('Country is missing');
            return false;
        }
        else if (!this.employee.hotel.hotelId) {
            window.alert('Hotel id is missing');
            return false;
        }
        return true;
    };
    AdminComponent.prototype.checkHotelInfoValid = function () {
        if (!this.hotel.hotelChain.hcName) {
            window.alert('Hotel Chain is missing');
            return false;
        }
        else if (!this.hotel.streetName) {
            window.alert('Street name is missing');
            return false;
        }
        else if (!this.hotel.streetNumber) {
            window.alert('Street number is missing');
            return false;
        }
        else if (!this.hotel.city) {
            window.alert('City is missing');
            return false;
        }
        else if (!this.hotel.state) {
            window.alert('State is missing');
            return false;
        }
        else if (!this.hotel.country) {
            window.alert('Country is missing');
            return false;
        }
        else if (!this.hotel.rating) {
            window.alert('Rating is missing');
            return false;
        }
        else if (!this.hotel.phoneNumber) {
            window.alert('Phone number is missing');
            return false;
        }
        return true;
    };
    AdminComponent.prototype.checkRoomInfoValid = function () {
        if (!this.room.hotel.hotelId) {
            window.alert('Hotel id is missing');
            return false;
        }
        else if (!this.room.roomNumber) {
            window.alert('Room number is missing');
            return false;
        }
        else if (!this.room.viewType) {
            window.alert('View type is missing');
            return false;
        }
        else if (!this.room.price) {
            window.alert('Price is missing');
            return false;
        }
        else if (!this.room.area) {
            window.alert('Area is missing');
            return false;
        }
        return true;
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/employee.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/employee/employee.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/employee/employee.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/employee/employee.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\r\n  <div class = 'row'>\r\n    <div class = 'col-md-12'>\r\n      <button type = 'button' class = 'btn btn-primary' (click) = 'onBack()'>Back</button>\r\n    </div>\r\n  </div>\r\n  <div class = 'row'>\r\n    <div class = 'col-md-12'>\r\n      <ngb-tabset>\r\n\r\n        <ngb-tab title = 'All Reservations'>\r\n          <ng-template ngbTabContent>\r\n            <table class = 'table table-striped'>\r\n              <thead>\r\n                <th>Hotel Chain</th>\r\n                <th>Address</th>\r\n                <th>Hotel Id</th>\r\n                <th>Room Number</th>\r\n                <th>Start Date</th>\r\n                <th>End Date</th>\r\n                <th>Reservation Type</th>\r\n                <th>Customer Sin</th>\r\n                <th>Customer Name</th>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor = 'let reservation of reservations'>\r\n                  <td>{{reservation.room.hotel.hotelChain.hcName}}</td>\r\n                  <td>{{reservation.room.hotel.getAddress()}}</td>\r\n                  <td>{{reservation.hotelId}}</td>\r\n                  <td>{{reservation.roomNumber}}</td>\r\n                  <td>{{reservation.startDate | date: 'medium' : 'UTC'}}</td>\r\n                  <td>{{reservation.endDate | date: 'medium' : 'UTC'}}</td>\r\n                  <td>{{reservation.reservationType ? 'Renting' : 'Booking'}}</td>\r\n                  <td>{{reservation.customer.sin}}</td>\r\n                  <td>{{reservation.customer.getName()}}</td>\r\n                  <td *ngIf = '!reservation.reservationType'>\r\n                    <button type = 'button' class = 'btn btn-primary' (click) = 'openCheckIn(checkin, reservation)'>Check in</button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n        <ngb-tab title = 'Create Renting'>\r\n          <ng-template ngbTabContent>\r\n            <div class = 'row'>\r\n              <div class = 'col-md-4'>\r\n                <form (ngSubmit) = 'onSearch()'>\r\n                  <div class = 'row'>\r\n                    <label>\r\n                      Hotel ID\r\n                      <input type = 'number' class = 'form-control' min = '0' name = 'hotelId' [(ngModel)] = 'hotelId'>\r\n                    </label>\r\n                  </div>\r\n                  <div class = 'row'>\r\n                    <label>\r\n                      Start Date\r\n                      <input type=\"datetime-local\" \r\n                              class = 'form-control'\r\n                              name=\"startDate\" value=\"0000-00-00T00:00\"\r\n                              min=\"0000-00-00T00:00\"\r\n                              [(ngModel)] =\"startDate\">\r\n                    </label>\r\n                  </div>\r\n                  <div class = 'row'>\r\n                    <label>\r\n                      End Date\r\n                      <input type=\"datetime-local\" \r\n                              class = 'form-control'\r\n                              name=\"endDate\" value=\"0000-00-00T00:00\"\r\n                              min=\"0000-00-00T00:00\"\r\n                              [(ngModel)] = 'endDate'>\r\n                    </label>     \r\n                  </div>                  \r\n                  <div class = 'row'>     \r\n                    <label>\r\n                        Rating (min)\r\n                        <select class = 'form-control' name = 'rating' [(ngModel)] = 'rating'>\r\n                          <option value = 'undefined'></option>\r\n                          <option>1</option>\r\n                          <option>2</option>\r\n                          <option>3</option>\r\n                          <option>4</option>\r\n                          <option>5</option>\r\n                        </select>\r\n                      </label>         \r\n                  </div>\r\n                  <div class = 'row'>\r\n                    <label>\r\n                      Room Capacity (# people) (min)\r\n                      <input class = 'form-control' min = '0' type = 'number' name = 'roomCapacity' [(ngModel)] = 'roomCapacity'>\r\n                    </label>\r\n                  </div>\r\n                  <div class = 'row'>\r\n                    <label>\r\n                      Area (ft^2) (min)\r\n                      <input class = 'form-control' min = '0' type = 'number' name = 'area' [(ngModel)] = 'area'>\r\n                    </label>\r\n                  </div>\r\n                  <div class = 'row'>\r\n                    <label>\r\n                      Price ($) (max)\r\n                      <input class = 'form-control' min = '0' type = 'number' name = 'price' [(ngModel)] = 'price'>\r\n                    </label>\r\n                  </div>\r\n                  <div class = 'row'>\r\n                    <button type = 'submit' class = 'btn btn-primary'>Search</button>\r\n                  </div>\r\n                </form>\r\n              </div>        \r\n              <div class = 'col-md-8'>\r\n                <table class = 'table table-striped'>\r\n                  <thead>\r\n                    <th>Hotel Chain</th>\r\n                    <th>Hotel ID</th>\r\n                    <th>Address</th>\r\n                    <th>Room Number</th>\r\n                    <th>View Type</th>\r\n                    <th>Capacity</th>\r\n                    <th>Price ($ CAD)</th>\r\n                    <th>Area (ft^2)</th>\r\n                    <th></th>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor = 'let room of rooms'>\r\n                      <td>{{room.hotel.hotelChain.hcName}}</td>\r\n                      <td>{{room.hotel.hotelId}}</td>\r\n                      <td>{{room.hotel.getAddress()}}</td>\r\n                      <td>{{room.roomNumber}}</td>\r\n                      <td>{{room.viewType}}</td>\r\n                      <td>{{room.capacity}}</td>\r\n                      <td>${{room.price}} CAD</td>\r\n                      <td>{{room.area}}</td>\r\n                      <td>\r\n                        <button type = 'button' class = 'btn btn-primary' (click) = 'openRenting(renting, room)'>Rent</button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n      </ngb-tabset>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #checkin let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Check In</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <h6>Payment Information</h6>\r\n    <div class = 'row'>\r\n      <label>\r\n        Employee Sin\r\n        <input type = 'text' class = 'form-control' name = 'employeeSin' [(ngModel)] = 'checkIn.employeeSin'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Payment Amount ($ CAD)\r\n        <input type = 'number' step = '0.01' min = '0' class = 'form-control' name = 'payment' [(ngModel)] = 'checkIn.payment'>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCheckIn(modal)\">Check In</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n<ng-template #renting let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Renting</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <h6>Renting Information</h6>\r\n    <div class = 'row'>\r\n      <label>\r\n        Customer SIN \r\n        <input type = 'text' class = 'form-control' name = 'sin' [(ngModel)] = 'customer.sin'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Given name\r\n        <input type = 'text' class = 'form-control' name = 'givenName' [(ngModel)] = 'customer.givenName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Family name\r\n        <input type = 'text' class = 'form-control' name = 'familyName' [(ngModel)] = 'customer.familyName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street name\r\n        <input type = 'text' class = 'form-control' name = 'streetName' [(ngModel)] = 'customer.streetName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street number\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'streetNumber' [(ngModel)] = 'customer.streetNumber'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        City\r\n        <input type = 'text' class = 'form-control' name = 'city' [(ngModel)] = 'customer.city'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        State\r\n        <input type = 'text' class = 'form-control' maxlength = '2' name = 'state' [(ngModel)] = 'customer.state'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Country\r\n        <input type = 'text' class = 'form-control' maxlength = '2' name = 'country' [(ngModel)] = 'customer.country'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Employee SIN \r\n        <input type = 'text' class = 'form-control' name = 'employeeSin' [(ngModel)] = 'checkIn.employeeSin'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Payment Amount ($ CAD)\r\n        <input type = 'number' step = '0.01' min = '0' class = 'form-control' name = 'payment' [(ngModel)] = 'checkIn.payment'>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCreateRenting(modal)\">Create Renting</button>\r\n  </div>\r\n</ng-template>\r\n      "

/***/ }),

/***/ "./src/app/components/employee/employee.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_models_checkin_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/checkin.model */ "./src/app/models/checkin.model.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_models_customer_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/customer.model */ "./src/app/models/customer.model.ts");







var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(location, apiService, modalService) {
        this.location = location;
        this.apiService = apiService;
        this.modalService = modalService;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.customer = new src_app_models_customer_model__WEBPACK_IMPORTED_MODULE_6__["Customer"]();
        this.checkIn = new src_app_models_checkin_model__WEBPACK_IMPORTED_MODULE_4__["CheckIn"]();
        this.reservations = [];
        this.rooms = [];
        this.getReservations();
    };
    EmployeeComponent.prototype.onBack = function () {
        this.location.back();
    };
    EmployeeComponent.prototype.onSearch = function () {
        var _this = this;
        if (!this.checkSearchFormValid()) {
            return;
        }
        this.apiService.getRoomsByHotelIdSearch(this.getSearchParams())
            .subscribe(function (roomsJson) {
            if (roomsJson.length == 0) {
                window.alert('No rooms found for search');
                return;
            }
            _this.rooms = [];
            for (var _i = 0, roomsJson_1 = roomsJson; _i < roomsJson_1.length; _i++) {
                var roomJson = roomsJson_1[_i];
                _this.rooms.push(_this.apiService.parseToRoom(roomJson));
            }
        }, function (error) {
            console.log(error);
        });
    };
    EmployeeComponent.prototype.getSearchParams = function () {
        var searchParams = {};
        searchParams.hotel_id = this.hotelId;
        searchParams.start = this.startDate + ':00';
        searchParams.end = this.endDate + ':00';
        if (this.roomCapacity != undefined) {
            searchParams.capacity = this.roomCapacity;
        }
        if (this.rating != undefined) {
            searchParams.rating = this.rating;
        }
        if (this.price != undefined) {
            searchParams.price = this.price;
        }
        if (this.area != undefined) {
            searchParams.area = this.area;
        }
        return searchParams;
    };
    EmployeeComponent.prototype.checkSearchFormValid = function () {
        if (this.startDate == undefined) {
            window.alert('Start date missing');
            return false;
        }
        else if (this.endDate == undefined) {
            window.alert('End date missing');
            return false;
        }
        else if (!this.hotelId) {
            window.alert('Hotel ID missing');
            return false;
        }
        return true;
    };
    EmployeeComponent.prototype.onCheckIn = function (modal) {
        var _this = this;
        if (!this.checkPaymentForm()) {
            return;
        }
        this.setCheckInInfo();
        this.apiService.createCheckIn(this.getCheckInParams())
            .subscribe(function (checkInJson) {
            _this.checkIn = new src_app_models_checkin_model__WEBPACK_IMPORTED_MODULE_4__["CheckIn"]();
            _this.selectedReservation.reservationType = true;
        }, function (error) {
            console.log(error);
        });
        modal.close('');
    };
    EmployeeComponent.prototype.setCheckInInfo = function () {
        this.checkIn.hotelId = this.selectedReservation.hotelId;
        this.checkIn.roomNumber = this.selectedReservation.roomNumber;
        this.checkIn.startDate = this.selectedReservation.startDate;
        this.checkIn.endDate = this.selectedReservation.endDate;
    };
    EmployeeComponent.prototype.getCheckInParams = function () {
        var checkInParams = {};
        checkInParams.hotel_id = this.checkIn.hotelId;
        checkInParams.room_number = this.checkIn.roomNumber;
        checkInParams.start_date = this.checkIn.startDate;
        checkInParams.end_date = this.checkIn.endDate;
        checkInParams.employee_sin = this.checkIn.employeeSin;
        checkInParams.payment = this.checkIn.payment;
        return checkInParams;
    };
    EmployeeComponent.prototype.checkPaymentForm = function () {
        if (!this.checkIn.employeeSin) {
            window.alert('Employee sin missing');
            return false;
        }
        if (!this.checkIn.payment) {
            window.alert('Payment missing');
            return false;
        }
        return true;
    };
    EmployeeComponent.prototype.getReservations = function () {
        var _this = this;
        this.apiService.getReservations()
            .subscribe(function (reservationsJson) {
            _this.reservations = [];
            for (var _i = 0, reservationsJson_1 = reservationsJson; _i < reservationsJson_1.length; _i++) {
                var reservationJson = reservationsJson_1[_i];
                _this.reservations.push(_this.apiService.parseToReservation(reservationJson));
            }
        }, function (error) {
            console.log(error);
        });
    };
    EmployeeComponent.prototype.openCheckIn = function (checkin, reservation) {
        this.selectedReservation = reservation;
        this.modalService.open(checkin, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    EmployeeComponent.prototype.openRenting = function (renting, room) {
        this.selectedRoom = room;
        this.modalService.open(renting, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    EmployeeComponent.prototype.onCreateRenting = function (modal) {
        var _this = this;
        if (!this.checkRentFormValid()) {
            return;
        }
        this.apiService.createRenting(this.getRentParams())
            .subscribe(function (renting) {
            var newRooms = [];
            for (var _i = 0, _a = _this.rooms; _i < _a.length; _i++) {
                var room = _a[_i];
                if (room.hotel.hotelId != _this.selectedRoom.hotel.hotelId || room.roomNumber != _this.selectedRoom.roomNumber) {
                    newRooms.push(room);
                }
            }
            _this.rooms = newRooms;
            _this.getReservations();
        }, function (error) {
            window.alert('Error in booking of renting');
            console.log(error);
        });
        modal.close('Save click');
    };
    EmployeeComponent.prototype.getRentParams = function () {
        var rentParams = {};
        rentParams.hotel_id = this.selectedRoom.hotel.hotelId;
        rentParams.room_number = this.selectedRoom.roomNumber;
        rentParams.employee_sin = this.checkIn.employeeSin;
        rentParams.payment = this.checkIn.payment;
        rentParams.start = this.startDate + ':00';
        rentParams.end = this.endDate + ':00';
        rentParams.customer_sin = this.customer.sin;
        rentParams.given_name = this.customer.givenName;
        rentParams.family_name = this.customer.familyName;
        rentParams.street_name = this.customer.streetName;
        rentParams.street_number = this.customer.streetNumber;
        rentParams.city = this.customer.city;
        rentParams.state = this.customer.state;
        rentParams.country = this.customer.country;
        return rentParams;
    };
    EmployeeComponent.prototype.checkRentFormValid = function () {
        if (!this.customer.sin) {
            window.alert('Sin is missing');
            return false;
        }
        else if (!this.customer.givenName) {
            window.alert('Given name is missing');
            return false;
        }
        else if (!this.customer.familyName) {
            window.alert('Family name is missing');
            return false;
        }
        else if (!this.customer.streetName) {
            window.alert('Street name is missing');
            return false;
        }
        else if (!this.customer.streetNumber) {
            window.alert('Street number is missing');
            return false;
        }
        else if (!this.customer.city) {
            window.alert('City is missing');
            return false;
        }
        else if (!this.customer.state) {
            window.alert('State is missing');
            return false;
        }
        else if (!this.customer.country) {
            window.alert('Country is missing');
            return false;
        }
        else if (!this.checkIn.payment) {
            window.alert('Payment is missing');
            return false;
        }
        else if (!this.checkIn.employeeSin) {
            window.alert('Employee SIN is missing');
            return false;
        }
        return true;
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/components/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/components/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\r\n  <div class = 'row'>\r\n    <div class = 'col-md-12'>\r\n      <button type = 'button' class = 'btn btn-primary' (click)='goToSearch()' >Search Hotels</button>\r\n    </div>\r\n  </div>\r\n  <div class = 'row'>\r\n      <div class = 'col-md-12'>\r\n        <button type = 'button' class = 'btn btn-primary' (click)='goToEmployee()'>Employee</button>\r\n      </div>\r\n    </div>\r\n    <div class = 'row'>\r\n      <div class = 'col-md-12'>\r\n        <button type = 'button' class = 'btn btn-primary' (click)='goToAdmin()'>Admin</button>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.goToEmployee = function () {
        this.router.navigate(['employee']);
    };
    HomeComponent.prototype.goToSearch = function () {
        this.router.navigate(['search']);
    };
    HomeComponent.prototype.goToAdmin = function () {
        this.router.navigate(['admin']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/listunit/listunit.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/listunit/listunit.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdHVuaXQvbGlzdHVuaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/listunit/listunit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/listunit/listunit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <table class=\"table table-striped\">\n        <thead>\n            <th>id</th>\n            <th>name</th>\n            <th>rating</th>\n            <th>Operations</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let unit of units\">\n                <td>{{unit.id}}</td>\n                <td>{{unit.name}}</td>\n                <td>{{unit.rating}}</td>\n                <td>\n                    <button class=\"btn btn-danger\" (click)=\"deleteUnit(unit)\" >Delete</button>\n                    <button class=\"btn btn-primary\" (click)=\"updateUnit(unit)\">Update</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    <button class=\"btn btn-primary\" (click)=\"addUnit()\">New Unit</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/listunit/listunit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/listunit/listunit.component.ts ***!
  \***********************************************************/
/*! exports provided: ListunitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListunitComponent", function() { return ListunitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/unit */ "./src/app/models/unit.ts");
/* harmony import */ var _services_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/unit.service */ "./src/app/services/unit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ListunitComponent = /** @class */ (function () {
    function ListunitComponent(_unitService, _router, route) {
        this._unitService = _unitService;
        this._router = _router;
        this.route = route;
        this.id = -1;
    }
    ListunitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) { _this.description = paramMap.get('description'); });
        this.description = this.route.snapshot.queryParams["description"];
        var test = this.route.snapshot.paramMap.get('id');
        if (test != null) {
            this.id = Number.parseInt(test);
        }
        else {
            //
        }
        console.log(this.description);
        console.log(this.id);
        if (this.id == -1) {
            if (this.description == undefined) { //*/
                this._unitService.getUnits().subscribe(function (units) {
                    console.log(units);
                    _this.units = units;
                }, function (error) {
                    console.log(error);
                });
                console.log('description undefined'); ///*
            }
            else {
                this._unitService.getUnitsString(this.description).subscribe(function (units) {
                    console.log(units);
                    _this.units = units;
                }, function (error) {
                    console.log(error);
                });
                console.log('description defined');
            }
        }
        else {
            this._unitService.getUnit(this.id).subscribe(function (units) {
                console.log(units);
                _this.units = units;
            }, function (error) {
                console.log(error);
            });
            console.log('id defined');
        } //*/
    };
    ListunitComponent.prototype.deleteUnit = function (unit) {
        var _this = this;
        this._unitService.deletetUnit(unit.id).subscribe(function (data) {
            _this.units.splice(_this.units.indexOf(unit), 1);
        }, function (error) {
            console.log(error);
        });
    };
    ListunitComponent.prototype.updateUnit = function (unit) {
        this._unitService.setter(unit);
        this._router.navigate(['/op']);
    };
    ListunitComponent.prototype.addUnit = function () {
        var unit = new _models_unit__WEBPACK_IMPORTED_MODULE_2__["Unit"]();
        this._unitService.setter(unit);
        this._router.navigate(['/op']);
    };
    ListunitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listunit',
            template: __webpack_require__(/*! ./listunit.component.html */ "./src/app/components/listunit/listunit.component.html"),
            styles: [__webpack_require__(/*! ./listunit.component.css */ "./src/app/components/listunit/listunit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_unit_service__WEBPACK_IMPORTED_MODULE_3__["UnitService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ListunitComponent);
    return ListunitComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\r\n  <div class = 'row'>\r\n\r\n    <div class = 'col-md-4'>\r\n      <div class = 'row'>\r\n        <div class = 'col-md-12'>\r\n          <button type = 'button' class = 'btn btn-primary' (click) = 'onBack()'>Back</button>\r\n        </div>\r\n      </div>\r\n      <form (ngSubmit) = 'onSearch()'>\r\n        <div class = 'row'>\r\n          <label>\r\n            Hotel Chain\r\n            <select class = 'form-control' name = 'hotelChain' [(ngModel)] = 'hotelChain'>\r\n              <option *ngFor = 'let hotelChain of hotelChains' [ngValue] = 'hotelChain'>{{hotelChain}}</option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n        <div class = 'row'>\r\n          <label>\r\n            Start Date\r\n            <input type=\"datetime-local\" \r\n                    class = 'form-control'\r\n                    name=\"startDate\" value=\"0000-00-00T00:00\"\r\n                    min=\"0000-00-00T00:00\"\r\n                    [(ngModel)] =\"startDate\">\r\n          </label>\r\n        </div>\r\n        <div class = 'row'>\r\n          <label>\r\n            End Date\r\n            <input type=\"datetime-local\" \r\n                    class = 'form-control'\r\n                    name=\"endDate\" value=\"0000-00-00T00:00\"\r\n                    min=\"0000-00-00T00:00\"\r\n                    [(ngModel)] = 'endDate'>\r\n          </label>     \r\n        </div>\r\n        <div class = 'row'>\r\n          <label>\r\n            City\r\n            <input class = 'form-control' type = 'text' name = 'city' [(ngModel)] = 'city'>\r\n          </label>\r\n        </div>\r\n        <div class = 'row'>\r\n          <label>\r\n            State\r\n            <input class = 'form-control' type = 'text' maxlength = '2' name = 'state' [(ngModel)] = 'state'>\r\n          </label>\r\n        </div>\r\n        <div class = 'row'>\r\n          <label>\r\n            Country\r\n            <input class = 'form-control' type = 'text' maxlength = '2' name = 'country' [(ngModel)] = 'country'>\r\n          </label>\r\n        </div>\r\n        <div class = 'row'>     \r\n          <label>\r\n              Rating (min)\r\n              <select class = 'form-control' name = 'rating' [(ngModel)] = 'rating'>\r\n                <option value = 'undefined'></option>\r\n                <option>1</option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option>4</option>\r\n                <option>5</option>\r\n              </select>\r\n            </label>         \r\n        </div>\r\n        <div class = 'row'>\r\n          <label>\r\n            Room Capacity (# people) (min)\r\n            <input class = 'form-control' min = '0' type = 'number' name = 'roomCapacity' [(ngModel)] = 'roomCapacity'>\r\n          </label>\r\n        </div>\r\n        <div class = 'row'>\r\n          <label>\r\n            Area (ft^2) (min)\r\n            <input class = 'form-control' min = '0' type = 'number' name = 'area' [(ngModel)] = 'area'>\r\n          </label>\r\n        </div>\r\n        <div class = 'row'>\r\n          <label>\r\n            Price ($) (max)\r\n            <input class = 'form-control' min = '0' type = 'number' name = 'price' [(ngModel)] = 'price'>\r\n          </label>\r\n        </div>\r\n        <div class = 'row'>\r\n          <button type = 'submit' class = 'btn btn-primary'>Search</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div class = 'col-md-8'>\r\n      <table class = 'table table-striped'>\r\n        <thead>\r\n          <th>Hotel Chain</th>\r\n          <th>Hotel ID</th>\r\n          <th>Address</th>\r\n          <th>Room Number</th>\r\n          <th>View Type</th>\r\n          <th>Capacity</th>\r\n          <th>Price ($ CAD)</th>\r\n          <th>Extendable</th>\r\n          <th>Area (ft^2)</th>\r\n          <th>Amenities</th>\r\n          <th></th>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor = 'let room of rooms'>\r\n            <td>{{room.hotel.hotelChain.hcName}}</td>\r\n            <td>{{room.hotel.hotelId}}</td>\r\n            <td>{{room.hotel.getAddress()}}</td>\r\n            <td>{{room.roomNumber}}</td>\r\n            <td>{{room.viewType}}</td>\r\n            <td>{{room.capacity}}</td>\r\n            <td>${{room.price}} CAD</td>\r\n            <td>{{room.extendable ? 'Yes' : 'No'}}</td>\r\n            <td>{{room.area}}</td>\r\n            <td>\r\n              <h6 *ngFor = 'let amenity of room.amenities'>\r\n                amenity\r\n              </h6>\r\n            </td>\r\n            <td>\r\n              <button type = 'button' class = 'btn btn-primary' (click) = 'open(booking, room)'>Book</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #booking let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Book Room</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <h5>Customer Information</h5>\r\n    <div class = 'row'>\r\n      <label>\r\n        Customer SIN \r\n        <input type = 'text' class = 'form-control' name = 'sin' [(ngModel)] = 'customer.sin'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Given name\r\n        <input type = 'text' class = 'form-control' name = 'givenName' [(ngModel)] = 'customer.givenName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Family name\r\n        <input type = 'text' class = 'form-control' name = 'familyName' [(ngModel)] = 'customer.familyName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street name\r\n        <input type = 'text' class = 'form-control' name = 'streetName' [(ngModel)] = 'customer.streetName'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Street number\r\n        <input type = 'number' min = '0' class = 'form-control' name = 'streetNumber' [(ngModel)] = 'customer.streetNumber'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        City\r\n        <input type = 'text' class = 'form-control' name = 'city' [(ngModel)] = 'customer.city'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        State\r\n        <input type = 'text' class = 'form-control' maxlength = '2' name = 'state' [(ngModel)] = 'customer.state'>\r\n      </label>\r\n    </div>\r\n    <div class = 'row'>\r\n      <label>\r\n        Country\r\n        <input type = 'text' class = 'form-control' maxlength = '2' name = 'country' [(ngModel)] = 'customer.country'>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onBookRoom(modal)\">Book</button>\r\n  </div>\r\n</ng-template>\r\n  \r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _models_customer_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/customer.model */ "./src/app/models/customer.model.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");







var SearchComponent = /** @class */ (function () {
    function SearchComponent(apiService, router, location, modalService) {
        this.apiService = apiService;
        this.router = router;
        this.location = location;
        this.modalService = modalService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.customer = new _models_customer_model__WEBPACK_IMPORTED_MODULE_5__["Customer"]();
        this.rooms = [];
        this.getHotelChainNames();
    };
    SearchComponent.prototype.onBack = function () {
        this.location.back();
    };
    SearchComponent.prototype.onSearch = function () {
        var _this = this;
        if (!this.checkSearchFormValid()) {
            return;
        }
        this.apiService.getRoomsSearch(this.getSearchParams())
            .subscribe(function (roomsJson) {
            if (roomsJson.length == 0) {
                window.alert('No results found for given search');
                return;
            }
            _this.rooms = [];
            for (var _i = 0, roomsJson_1 = roomsJson; _i < roomsJson_1.length; _i++) {
                var roomJson = roomsJson_1[_i];
                _this.rooms.push(_this.apiService.parseToRoom(roomJson));
            }
        }, function (error) {
            console.log(error);
        });
    };
    // private getRoomAmenities(): void {
    //   for (let i = 0; i < this.rooms.length; i++) {
    //     this.apiService.getRoomAmenities(this.rooms[i].roomNumber, this.rooms[i].hotel.hotelId)
    //       .subscribe(amenityJson => {
    //         const hotelId = amenityJson[0]
    //         const amenities = [];
    //         for (const amenity of amenityJson) {
    //           amenities.push(amenity);
    //         }
    //         for (let i = 0; i < this.rooms.length; i++) {
    //           if (this.rooms[i].hotel.hotelId == amenityJson.hotel_id && this.rooms[i].roomNumber == amenityJson.room_number) {
    //             this.rooms[i].amenities = amenities;
    //           }
    //         }
    //       },
    //       (error) => {
    //         console.log(error);
    //       });
    //   }
    // }
    SearchComponent.prototype.getHotelChainNames = function () {
        var _this = this;
        this.apiService.getHotelChainNames()
            .subscribe(function (hotelChainNames) {
            _this.hotelChains = hotelChainNames;
        }, function (error) {
            console.log(error);
        });
    };
    SearchComponent.prototype.getSearchParams = function () {
        var searchParams = {};
        searchParams.hc_name = this.hotelChain;
        searchParams.start = this.startDate + ':00';
        searchParams.end = this.endDate + ':00';
        searchParams.city = this.city;
        searchParams.state = this.state;
        searchParams.country = this.country;
        if (this.roomCapacity != undefined) {
            searchParams.capacity = this.roomCapacity;
        }
        if (this.rating != undefined) {
            searchParams.rating = this.rating;
        }
        if (this.price != undefined) {
            searchParams.price = this.price;
        }
        if (this.area != undefined) {
            searchParams.area = this.area;
        }
        return searchParams;
    };
    SearchComponent.prototype.checkSearchFormValid = function () {
        if (!this.hotelChain) {
            window.alert('Hotel Chain missing');
            return false;
        }
        else if (this.startDate == undefined) {
            window.alert('Start date missing');
            return false;
        }
        else if (this.endDate == undefined) {
            window.alert('End date missing');
            return false;
        }
        else if (!this.city) {
            window.alert('City is missing');
            return false;
        }
        else if (!this.state) {
            window.alert('State is missing');
            return false;
        }
        else if (!this.country) {
            window.alert('Country is missing');
            return false;
        }
        return true;
    };
    SearchComponent.prototype.open = function (booking, room) {
        this.selectedRoom = room;
        this.modalService.open(booking, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    SearchComponent.prototype.onBookRoom = function (modal) {
        var _this = this;
        if (!this.checkBookFormValid()) {
            return;
        }
        this.apiService.createReservation(this.getBookParams())
            .subscribe(function (reservation) {
            window.alert('Successfully booked');
            var newRooms = [];
            for (var _i = 0, _a = _this.rooms; _i < _a.length; _i++) {
                var room = _a[_i];
                if (room.hotel.hotelId != _this.selectedRoom.hotel.hotelId || room.roomNumber != _this.selectedRoom.roomNumber) {
                    newRooms.push(room);
                }
            }
            _this.rooms = newRooms;
        }, function (error) {
            window.alert('Error in booking');
            console.log(error);
        });
        modal.close('Save click');
    };
    SearchComponent.prototype.getBookParams = function () {
        var bookParams = {};
        bookParams.hotel_id = this.selectedRoom.hotel.hotelId;
        bookParams.room_number = this.selectedRoom.roomNumber;
        bookParams.start = this.startDate + ':00';
        bookParams.end = this.endDate + ':00';
        bookParams.customer_sin = this.customer.sin;
        bookParams.given_name = this.customer.givenName;
        bookParams.family_name = this.customer.familyName;
        bookParams.street_name = this.customer.streetName;
        bookParams.street_number = this.customer.streetNumber;
        bookParams.city = this.customer.city;
        bookParams.state = this.customer.state;
        bookParams.country = this.customer.country;
        return bookParams;
    };
    SearchComponent.prototype.checkBookFormValid = function () {
        if (!this.customer.sin) {
            window.alert('Sin is missing');
            return false;
        }
        else if (!this.customer.givenName) {
            window.alert('Given name is missing');
            return false;
        }
        else if (!this.customer.familyName) {
            window.alert('Family name is missing');
            return false;
        }
        else if (!this.customer.streetName) {
            window.alert('Street name is missing');
            return false;
        }
        else if (!this.customer.streetNumber) {
            window.alert('Street number is missing');
            return false;
        }
        else if (!this.customer.city) {
            window.alert('City is missing');
            return false;
        }
        else if (!this.customer.state) {
            window.alert('State is missing');
            return false;
        }
        else if (!this.customer.country) {
            window.alert('Country is missing');
            return false;
        }
        return true;
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/unit-form/unit-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/unit-form/unit-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdW5pdC1mb3JtL3VuaXQtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/unit-form/unit-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/unit-form/unit-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form (ngSubmit)=\"processForm()\">\n        <div class=\"form-group\">\n            <input type=\"text\" name=\"id\" class=\"form-control\" [(ngModel)]=\"unit.id\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"unit.name\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"rating\">Rating</label>\n            <input type=\"text\" name=\"rating\" class=\"form-control\" [(ngModel)]=\"unit.rating\">\n        </div>\n        <input type=\"submit\" value=\"save\" class=\"btn btn-success\">\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/unit-form/unit-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/unit-form/unit-form.component.ts ***!
  \*************************************************************/
/*! exports provided: UnitFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitFormComponent", function() { return UnitFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/unit.service */ "./src/app/services/unit.service.ts");




var UnitFormComponent = /** @class */ (function () {
    function UnitFormComponent(_unitService, _router) {
        this._unitService = _unitService;
        this._router = _router;
    }
    UnitFormComponent.prototype.ngOnInit = function () {
        this.unit = this._unitService.getter();
    };
    UnitFormComponent.prototype.processForm = function () {
        var _this = this;
        if (this.unit.id == undefined) {
            this._unitService.createUnit(this.unit).subscribe(function (unit) {
                console.log(unit);
                console.log('create');
                _this._router.navigate(['/unittest/units']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this._unitService.updateUnit(this.unit).subscribe(function (unit) {
                console.log(unit);
                console.log('update');
                _this._router.navigate(['/unittest/units']);
            }, function (error) {
                console.log(error);
            });
        }
    };
    UnitFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unit-form',
            template: __webpack_require__(/*! ./unit-form.component.html */ "./src/app/components/unit-form/unit-form.component.html"),
            styles: [__webpack_require__(/*! ./unit-form.component.css */ "./src/app/components/unit-form/unit-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_unit_service__WEBPACK_IMPORTED_MODULE_3__["UnitService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UnitFormComponent);
    return UnitFormComponent;
}());



/***/ }),

/***/ "./src/app/models/checkin.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/checkin.model.ts ***!
  \*****************************************/
/*! exports provided: CheckIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckIn", function() { return CheckIn; });
var CheckIn = /** @class */ (function () {
    function CheckIn() {
    }
    return CheckIn;
}());



/***/ }),

/***/ "./src/app/models/customer.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/customer.model.ts ***!
  \******************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.getName = function () {
        return this.givenName + ' ' + this.familyName;
    };
    Customer.prototype.getAddress = function () {
        return this.streetNumber + ' ' + this.streetName + ', ' + this.city + ', ' + this.state + ', ' + this.country;
    };
    return Customer;
}());



/***/ }),

/***/ "./src/app/models/employee.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/employee.model.ts ***!
  \******************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony import */ var _hotel_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotel.model */ "./src/app/models/hotel.model.ts");

var Employee = /** @class */ (function () {
    function Employee() {
        this.hotel = new _hotel_model__WEBPACK_IMPORTED_MODULE_0__["Hotel"]();
    }
    Employee.prototype.getName = function () {
        return this.givenName + ' ' + this.familyName;
    };
    Employee.prototype.getAddress = function () {
        return this.streetNumber + ' ' + this.streetName + ', ' + this.city + ', ' + this.state + ', ' + this.country;
    };
    return Employee;
}());



/***/ }),

/***/ "./src/app/models/hotel.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/hotel.model.ts ***!
  \***************************************/
/*! exports provided: Hotel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hotel", function() { return Hotel; });
/* harmony import */ var _hotelchain_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotelchain.model */ "./src/app/models/hotelchain.model.ts");

var Hotel = /** @class */ (function () {
    function Hotel() {
        this.hotelChain = new _hotelchain_model__WEBPACK_IMPORTED_MODULE_0__["HotelChain"]();
    }
    Hotel.prototype.getAddress = function () {
        return this.streetNumber + ' ' + this.streetName + ' ' + this.city + ', ' + this.state + ', ' + this.country;
    };
    return Hotel;
}());



/***/ }),

/***/ "./src/app/models/hotelchain.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/hotelchain.model.ts ***!
  \********************************************/
/*! exports provided: HotelChain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelChain", function() { return HotelChain; });
var HotelChain = /** @class */ (function () {
    function HotelChain() {
    }
    return HotelChain;
}());



/***/ }),

/***/ "./src/app/models/reservation.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/reservation.model.ts ***!
  \*********************************************/
/*! exports provided: Reservation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reservation", function() { return Reservation; });
var Reservation = /** @class */ (function () {
    function Reservation() {
    }
    return Reservation;
}());



/***/ }),

/***/ "./src/app/models/room.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/room.model.ts ***!
  \**************************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony import */ var _hotel_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotel.model */ "./src/app/models/hotel.model.ts");

var Room = /** @class */ (function () {
    function Room() {
        this.hotel = new _hotel_model__WEBPACK_IMPORTED_MODULE_0__["Hotel"]();
        this.amenities = [];
    }
    return Room;
}());



/***/ }),

/***/ "./src/app/models/unit.ts":
/*!********************************!*\
  !*** ./src/app/models/unit.ts ***!
  \********************************/
/*! exports provided: Unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
var Unit = /** @class */ (function () {
    function Unit() {
    }
    return Unit;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_room_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/room.model */ "./src/app/models/room.model.ts");
/* harmony import */ var _models_hotel_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/hotel.model */ "./src/app/models/hotel.model.ts");
/* harmony import */ var _models_hotelchain_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/hotelchain.model */ "./src/app/models/hotelchain.model.ts");
/* harmony import */ var _models_reservation_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/reservation.model */ "./src/app/models/reservation.model.ts");
/* harmony import */ var _models_customer_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/customer.model */ "./src/app/models/customer.model.ts");
/* harmony import */ var _models_employee_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/employee.model */ "./src/app/models/employee.model.ts");










var ApiService = /** @class */ (function () {
    function ApiService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.baseUrl = 'http://localhost:8080/';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    ApiService.prototype.getHotelChainNames = function () {
        var getUrl = this.baseUrl + 'hotelchains';
        return this.httpClient.get(getUrl);
    };
    ApiService.prototype.getHotels = function () {
        var getUrl = this.baseUrl + 'hotels';
        return this.httpClient.get(getUrl);
    };
    ApiService.prototype.getRooms = function () {
        var getUrl = this.baseUrl + 'rooms';
        return this.httpClient.get(getUrl);
    };
    ApiService.prototype.getRoomsByHotelIdSearch = function (searchParameters) {
        console.log(searchParameters);
        var getUrl = this.baseUrl + 'rooms/' + searchParameters.hotel_id + '/query';
        return this.httpClient.get(getUrl, { params: searchParameters });
    };
    ApiService.prototype.getRoomsSearch = function (searchParameters) {
        var getUrl = this.baseUrl + 'rooms/query';
        return this.httpClient.get(getUrl, { params: searchParameters });
    };
    ApiService.prototype.getRoomAmenities = function (roomNumber, hotelId) {
        var getUrl = this.baseUrl + 'rooms/' + hotelId + '/' + roomNumber + '/amenities';
        return this.httpClient.get(getUrl);
    };
    ApiService.prototype.getCustomers = function () {
        var getUrl = this.baseUrl + 'customers';
        return this.httpClient.get(getUrl);
    };
    ApiService.prototype.getEmployees = function () {
        var getUrl = this.baseUrl + 'employees';
        return this.httpClient.get(getUrl);
    };
    ApiService.prototype.getReservations = function () {
        var getUrl = this.baseUrl + 'rooms/reservations';
        return this.httpClient.get(getUrl);
    };
    ApiService.prototype.createReservation = function (reservationParams) {
        var postUrl = this.baseUrl + 'rooms/reservation';
        var params = { start: reservationParams.start, end: reservationParams.end };
        return this.httpClient.post(postUrl, reservationParams, { params: params });
    };
    ApiService.prototype.createCheckIn = function (checkInParams) {
        var postUrl = this.baseUrl + 'rooms/checkin/';
        var params = { start: checkInParams.start_date.toISOString(),
            end: checkInParams.end_date.toISOString(),
            payment: '' + checkInParams.payment };
        return this.httpClient.post(postUrl, checkInParams, { params: params });
    };
    ApiService.prototype.createRenting = function (rentingParams) {
        var postUrl = this.baseUrl + 'rooms/reservation/checkin';
        var params = { start: rentingParams.start, end: rentingParams.end };
        return this.httpClient.post(postUrl, rentingParams, { params: params });
    };
    ApiService.prototype.createCustomer = function (customerParams) {
        var postUrl = this.baseUrl + 'backend/add/customer';
        return this.httpClient.post(postUrl, customerParams);
    };
    ApiService.prototype.createEmployee = function (employeeParams) {
        var postUrl = this.baseUrl + 'backend/add/employee';
        return this.httpClient.post(postUrl, employeeParams);
    };
    ApiService.prototype.createHotel = function (hotelParams) {
        var postUrl = this.baseUrl + 'backend/add/hotel';
        return this.httpClient.post(postUrl, hotelParams);
    };
    ApiService.prototype.createRoom = function (roomParams) {
        var postUrl = this.baseUrl + 'backend/add/room';
        return this.httpClient.post(postUrl, roomParams);
    };
    ApiService.prototype.updateCustomer = function (customerParams) {
        var putUrl = this.baseUrl + '/backend/update/customer';
        return this.httpClient.put(putUrl, customerParams);
    };
    ApiService.prototype.updateEmployee = function (employeeParams) {
        var putUrl = this.baseUrl + '/backend/update/employee';
        return this.httpClient.put(putUrl, employeeParams);
    };
    ApiService.prototype.updateHotel = function (hotelParams) {
        var putUrl = this.baseUrl + '/backend/update/hotel';
        return this.httpClient.put(putUrl, hotelParams);
    };
    ApiService.prototype.updateRoom = function (roomParams) {
        var putUrl = this.baseUrl + '/backend/update/room';
        return this.httpClient.put(putUrl, roomParams);
    };
    ApiService.prototype.deleteCustomer = function (customerSin) {
        var deleteUrl = this.baseUrl + 'backend/delete/customer';
        var params = { customer_sin: customerSin };
        return this.httpClient.delete(deleteUrl, { params: params });
    };
    ApiService.prototype.deleteEmployee = function (employeeSin) {
        var deleteUrl = this.baseUrl + 'backend/delete/employee';
        var params = { employee_sin: employeeSin };
        return this.httpClient.delete(deleteUrl, { params: params });
    };
    ApiService.prototype.deleteHotel = function (hotelId) {
        var deleteUrl = this.baseUrl + 'backend/delete/hotel';
        var params = { hotel_id: '' + hotelId };
        return this.httpClient.delete(deleteUrl, { params: params });
    };
    ApiService.prototype.deleteRoom = function (hotelId, roomNumber) {
        var deleteUrl = this.baseUrl + 'backend/delete/room';
        var params = { hotel_id: '' + hotelId, room_number: '' + roomNumber };
        return this.httpClient.delete(deleteUrl, { params: params });
    };
    ApiService.prototype.parseToRoom = function (roomJson) {
        var room = new _models_room_model__WEBPACK_IMPORTED_MODULE_4__["Room"]();
        room.hotel = this.parseToHotel(roomJson.hotel);
        room.roomNumber = roomJson.room_id.room_number;
        room.viewType = roomJson.view_type;
        room.capacity = roomJson.capacity;
        room.price = roomJson.price;
        room.extendable = roomJson.extendable;
        room.area = roomJson.area;
        return room;
    };
    ApiService.prototype.parseToHotel = function (hotelJson) {
        var hotel = new _models_hotel_model__WEBPACK_IMPORTED_MODULE_5__["Hotel"]();
        hotel.hotelChain = this.parseToHotelChain(hotelJson.hotelChain);
        hotel.hotelId = hotelJson.hotel_id;
        hotel.streetName = hotelJson.street_name;
        hotel.streetNumber = hotelJson.street_number;
        hotel.city = hotelJson.city;
        hotel.state = hotelJson.state;
        hotel.country = hotelJson.country;
        hotel.rating = hotelJson.rating;
        hotel.phoneNumber = hotelJson.phone_number;
        hotel.numberOfRooms = hotelJson.number_of_rooms;
        return hotel;
    };
    ApiService.prototype.parseToHotelChain = function (hotelChainJson) {
        var hotelChain = new _models_hotelchain_model__WEBPACK_IMPORTED_MODULE_6__["HotelChain"]();
        hotelChain.hcName = hotelChainJson.hc_name;
        hotelChain.numberOfHotels = hotelChainJson.number_of_hotels;
        return hotelChain;
    };
    ApiService.prototype.parseToReservation = function (reservationJson) {
        var reservation = new _models_reservation_model__WEBPACK_IMPORTED_MODULE_7__["Reservation"]();
        reservation.hotelId = reservationJson.hotel_id;
        reservation.roomNumber = reservationJson.room_number;
        reservation.room = this.parseToRoom(reservationJson.room);
        reservation.startDate = new Date(reservationJson.start_date);
        reservation.endDate = new Date(reservationJson.end_date);
        reservation.reservationType = reservationJson.reservation_type;
        reservation.customer = this.parseToCustomer(reservationJson.customer);
        return reservation;
    };
    ApiService.prototype.parseToCustomer = function (customerJson) {
        var customer = new _models_customer_model__WEBPACK_IMPORTED_MODULE_8__["Customer"]();
        customer.sin = customerJson.sin;
        customer.givenName = customerJson.given_name;
        customer.familyName = customerJson.family_name;
        customer.streetName = customerJson.street_name;
        customer.streetNumber = customerJson.street_number;
        customer.city = customerJson.city;
        customer.state = customerJson.state;
        customer.country = customerJson.country;
        return customer;
    };
    ApiService.prototype.parseToEmployee = function (employeeJson) {
        var employee = new _models_employee_model__WEBPACK_IMPORTED_MODULE_9__["Employee"]();
        employee.sin = employeeJson.sin;
        employee.givenName = employeeJson.given_name;
        employee.familyName = employeeJson.family_name;
        employee.streetName = employeeJson.street_name;
        employee.streetNumber = employeeJson.street_number;
        employee.city = employeeJson.city;
        employee.state = employeeJson.state;
        employee.country = employeeJson.country;
        employee.hotel = this.parseToHotel(employeeJson.hotel);
        return employee;
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/unit.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/unit.service.ts ***!
  \******************************************/
/*! exports provided: UnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitService", function() { return UnitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UnitService = /** @class */ (function () {
    function UnitService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:8080/units';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    /*
    getData(): Observable<any> {
         return this.http.get(this.url).map(res => res.json());
  }
  
  Now fetch client id:
  
  this.getData().subscribe(
         res => {
             let resources = res["resources"];
             let resource = resources[0];
             console.log(resource["client_id"]);
         }
     );
    */
    UnitService.prototype.getUnits = function () {
        return this._http.get(this.baseUrl, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'SERVER ERROR');
        }));
    };
    UnitService.prototype.getUnitsString = function (name) {
        return this._http.get(this.baseUrl + '?description=' + name, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'SERVER ERROR');
        }));
    };
    UnitService.prototype.getUnit = function (id) {
        return this._http.get(this.baseUrl + '/' + id, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'SERVER ERROR');
        }));
    };
    UnitService.prototype.deletetUnit = function (id) {
        return this._http.delete(this.baseUrl + '/' + id, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'SERVER ERROR');
        }));
    };
    UnitService.prototype.createUnit = function (unit) {
        return this._http.post(this.baseUrl, JSON.stringify(unit), this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'SERVER ERROR');
        }));
    };
    UnitService.prototype.updateUnit = function (unit) {
        return this._http.put(this.baseUrl, JSON.stringify(unit), this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'SERVER ERROR');
        }));
    };
    UnitService.prototype.setter = function (unit) {
        this.unit = unit;
    };
    UnitService.prototype.getter = function () {
        return this.unit;
    };
    UnitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UnitService);
    return UnitService;
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

module.exports = __webpack_require__(/*! Z:\Web\Room-Booking-App\Room-Booking-App_Proj\src\main\resources\static\Room-Booking-App-Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map