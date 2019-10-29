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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Page Wrapper -->\n <div id=\"wrapper\">\n\n        <!-- Sidebar -->\n        <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n    \n          <!-- Sidebar - Brand -->\n          <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"index.html\">\n            <div class=\"sidebar-brand-icon rotate-n-15\">\n              <i class=\"fas fa-laugh-wink\"></i>\n            </div>\n            <div class=\"sidebar-brand-text mx-3\">GISNET</div>\n          </a>\n    \n          <!-- Divider -->\n          <hr class=\"sidebar-divider my-0\">\n    \n          <app-document-list></app-document-list>\n    \n          <!-- Divider -->\n          <hr class=\"sidebar-divider d-none d-md-block\">\n    \n          <!-- Sidebar Toggler (Sidebar) -->\n          <div class=\"text-center d-none d-md-inline\">\n            <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n          </div>\n    \n        </ul>\n        <!-- End of Sidebar -->\n    \n        <!-- Content Wrapper -->\n        <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n    \n          <!-- Main Content -->\n          <div id=\"content\">\n    \n            <!-- Topbar -->\n            <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n    \n              <!-- Sidebar Toggle (Topbar) -->\n              <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n                <i class=\"fa fa-bars\"></i>\n              </button>\n    \n              <!-- Topbar Search -->\n              <form class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n                <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary\" type=\"button\">\n                      <i class=\"fas fa-search fa-sm\"></i>\n                    </button>\n                  </div>\n                </div>\n              </form>\n    \n              <!-- Topbar Navbar -->\n              <ul class=\"navbar-nav ml-auto\">\n    \n                <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n                <li class=\"nav-item dropdown no-arrow d-sm-none\">\n                  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fas fa-search fa-fw\"></i>\n                  </a>\n                  <!-- Dropdown - Messages -->\n                  <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\" aria-labelledby=\"searchDropdown\">\n                    <form class=\"form-inline mr-auto w-100 navbar-search\">\n                      <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n                        <div class=\"input-group-append\">\n                          <button class=\"btn btn-primary\" type=\"button\">\n                            <i class=\"fas fa-search fa-sm\"></i>\n                          </button>\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n                </li>\n    \n            \n    \n                \n    \n                <div class=\"topbar-divider d-none d-sm-block\"></div>\n    \n                <!-- Nav Item - User Information -->\n                <li class=\"nav-item dropdown no-arrow\">\n                  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                   <!-- <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Valerie Luna</span>\n                    <img class=\"img-profile rounded-circle\" src=\"https://source.unsplash.com/QAB-WJcbgJk/60x60\"> ---->\n                  </a>\n                  <!-- Dropdown - User Information -->\n                  <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\n                    <a class=\"dropdown-item\" href=\"#\">\n                      <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n                      Profile\n                    </a>\n                    <a class=\"dropdown-item\" href=\"#\">\n                      <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n                      Settings\n                    </a>\n                    <a class=\"dropdown-item\" href=\"#\">\n                      <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n                      Activity Log\n                    </a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n                      <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n                      Logout\n                    </a>\n                  </div>\n                </li>\n    \n              </ul>\n    \n            </nav>\n            <!-- End of Topbar -->\n    \n            <!-- Begin Page Content -->\n            <div class=\"container-fluid\">\n              <app-document></app-document>\n            </div>\n            <!-- /.container-fluid -->\n    \n          </div>\n          <!-- End of Main Content -->\n    \n          <!-- Footer -->\n          <footer class=\"sticky-footer bg-white\">\n            <div class=\"container my-auto\">\n              <div class=\"copyright text-center my-auto\">\n                <span>Copyright &copy; Your Website 2019</span>\n              </div>\n            </div>\n          </footer>\n          <!-- End of Footer -->\n    \n        </div>\n        <!-- End of Content Wrapper -->\n    \n      </div>\n      <!-- End of Page Wrapper -->"

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
        this.title = 'socket-app';
    }
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document-list/document-list.component */ "./src/app/document-list/document-list.component.ts");
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./document/document.component */ "./src/app/document/document.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// ...other imports




console.log("BASE_URL", _config__WEBPACK_IMPORTED_MODULE_10__["BASE_URL"]);
var config = { url: _config__WEBPACK_IMPORTED_MODULE_10__["BASE_URL"], options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_5__["DocumentListComponent"],
                _document_document_component__WEBPACK_IMPORTED_MODULE_6__["DocumentComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_8__["StatusComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["SocketIoModule"].forRoot(config)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
var BASE_URL = window.location.protocol + "//" + window.location.host + "/";


/***/ }),

/***/ "./src/app/document-list/document-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/document-list/document-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"nav-item active \" >\n\t<a class=\"nav-link btn\" (click)=\"newTablero()\" href=\"#\">\n\t\t<i class=\"fas fa-fw fa-plus\"></i>\n\t\t<span>Agregar tablero</span></a>\n</li>\n\n<!-- Divider -->\n<hr class=\"sidebar-divider\">\n\n<!-- Heading -->\n<div class=\"sidebar-heading\">\n\tTableros\n</div>\n\n\n<!-- Nav Item - Tables -->\n<li class=\"nav-item\" *ngFor='let tbl of tableros | async'>\n\t<a class=\"nav-link\" (click)=\"loadTablero(tbl.id)\" href=\"#\" >\n\t\t<i class=\"fas fa-fw fa-table\"></i>\n\t\t<span>{{ tbl.name }}</span></a>\n</li>"

/***/ }),

/***/ "./src/app/document-list/document-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/document-list/document-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.sidenav {\r\n    position:fixed;\r\n    height: 100%;\r\n    width: 200px;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #f1f1f1;\r\n    padding-top: 20px;  \r\n      span {\r\n        padding: 6px  8px  6px  16px;\r\n        text-decoration: none;\r\n        font-size: 15px;\r\n        font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;\r\n        color: #818181;\r\n        display: block;\r\n      }.selected {\r\n        color: #113;\r\n      }:hover {\r\n        color: #113;\r\n        cursor: pointer;\r\n      }\r\n  }\r\n\r\n  .tableros{\r\n    position:relative;\r\n    height: 100%;\r\n    width: 200px;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #f1f1f1;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;  \r\n  }*/\n"

/***/ }),

/***/ "./src/app/document-list/document-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/document-list/document-list.component.ts ***!
  \**********************************************************/
/*! exports provided: DocumentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentListComponent", function() { return DocumentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/document.service */ "./src/app/service/document.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(documentService) {
        this.documentService = documentService;
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableros = this.documentService.documents;
        this._docSub = this.documentService.currentDocument.subscribe(function (doc) {
            _this.currentDoc = doc.id;
        });
    };
    DocumentListComponent.prototype.ngOnDestroy = function () {
        this._docSub.unsubscribe();
    };
    DocumentListComponent.prototype.loadTablero = function (id) {
        this.documentService.getDocument(id);
    };
    DocumentListComponent.prototype.newTablero = function () {
        this.documentService.newDocument();
    };
    DocumentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document-list',
            template: __webpack_require__(/*! ./document-list.component.html */ "./src/app/document-list/document-list.component.html"),
            styles: [__webpack_require__(/*! ./document-list.component.scss */ "./src/app/document-list/document-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"]])
    ], DocumentListComponent);
    return DocumentListComponent;
}());



/***/ }),

/***/ "./src/app/document/document.component.html":
/*!**************************************************!*\
  !*** ./src/app/document/document.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Page Heading -->\r\n <div class=\"d-sm-flex align-items-center justify-content-between mb-4\" *ngIf=\"tablero.id != ''\">\r\n        <h1 class=\"h3 mb-0 text-gray-800 w-75\">\r\n              <input type=\"text\" class=\"form-control input-title-edit\" [(ngModel)]=\"tablero.name\" (change)=\"onChangeTablero()\" >      \r\n        </h1>\r\n        <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Generate Report</a>\r\n</div>\r\n\r\n<app-status *ngIf=\"tablero.id != ''\" [tablero]=\"tablero\" [users]=\"users\"  ></app-status>"

/***/ }),

/***/ "./src/app/document/document.component.scss":
/*!**************************************************!*\
  !*** ./src/app/document/document.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  position: fixed;\n  width: calc(100% - 235px);\n  height: 100%;\n  right: 0;\n  top: 0;\n  font-size: 18pt;\n  padding-top: 20px;\n  resize: none;\n  border: none;\n  padding: 20px  0px  20px  15px; }\n"

/***/ }),

/***/ "./src/app/document/document.component.ts":
/*!************************************************!*\
  !*** ./src/app/document/document.component.ts ***!
  \************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/document.service */ "./src/app/service/document.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(documentService, userService) {
        this.documentService = documentService;
        this.userService = userService;
    }
    DocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._docSub = this.documentService.currentDocument.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ id: '', name: '' })).subscribe(function (document) {
            _this.tablero = document;
            if (_this.tablero.id) {
                _this.userService.findUsersByTablero(_this.tablero.id).subscribe(function (data) {
                    _this.users = data.json();
                });
            }
        });
    };
    DocumentComponent.prototype.ngOnDestroy = function () {
        this._docSub.unsubscribe();
    };
    DocumentComponent.prototype.onChangeTablero = function () {
        this.editTablero();
    };
    DocumentComponent.prototype.editTablero = function () {
        this.documentService.editDocument(this.tablero);
    };
    DocumentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document',
            template: __webpack_require__(/*! ./document.component.html */ "./src/app/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.scss */ "./src/app/document/document.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/models/status.ts":
/*!**********************************!*\
  !*** ./src/app/models/status.ts ***!
  \**********************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status = /** @class */ (function () {
    function Status(id, color, name, project, tasks) {
        this.id = id;
        this.color = color;
        this.name = name;
        this.project = project;
        this.tasks = tasks;
    }
    return Status;
}());



/***/ }),

/***/ "./src/app/models/tablero.ts":
/*!***********************************!*\
  !*** ./src/app/models/tablero.ts ***!
  \***********************************/
/*! exports provided: Tablero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tablero", function() { return Tablero; });
var Tablero = /** @class */ (function () {
    function Tablero() {
    }
    return Tablero;
}());



/***/ }),

/***/ "./src/app/models/task.ts":
/*!********************************!*\
  !*** ./src/app/models/task.ts ***!
  \********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(id, name, enddate, status, project, statusId, owneruserId, devuserId, owneruser, devuser) {
        this.id = id;
        this.name = name;
        this.enddate = enddate;
        this.status = status;
        this.project = project;
        this.statusId = statusId;
        this.owneruserId = owneruserId;
        this.devuserId = devuserId;
        this.owneruser = owneruser;
        this.devuser = devuser;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/service/document.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/document.service.ts ***!
  \*********************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentService = /** @class */ (function () {
    function DocumentService(socket) {
        this.socket = socket;
        this.currentDocument = this.socket.fromEvent('tablero');
        this.documents = this.socket.fromEvent('tableros');
    }
    DocumentService.prototype.getDocument = function (id) {
        this.socket.emit('getTablero', id);
    };
    DocumentService.prototype.newDocument = function () {
        this.socket.emit('addTablero', { id: 0, name: 'NUEVO TABLERO' });
    };
    DocumentService.prototype.editDocument = function (document) {
        this.socket.emit('editTablero', document);
    };
    DocumentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/service/status.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/status.service.ts ***!
  \*******************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusService = /** @class */ (function () {
    function StatusService(socket) {
        this.socket = socket;
        this.status = this.socket.fromEvent('status');
    }
    StatusService.prototype.getStatus = function (tableroId) {
        this.socket.emit('getStatus', tableroId);
    };
    StatusService.prototype.addTask = function (task) {
        this.socket.emit('addTask', task);
    };
    StatusService.prototype.editTask = function (task) {
        this.socket.emit('editTask', task);
    };
    StatusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]])
    ], StatusService);
    return StatusService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.findUsersByTablero = function (tableroId) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "api/tablero/" + tableroId);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let st of status\">\n  <div class=\"col-12\">\n    <h5  class=\"top2 {{st.color?.text}}\">{{st.name}}</h5>\n    <hr/>\n      <app-task [status]=\"st\" [allstatus]=\"status\" [users]=\"users\" [statusService]=\"statusService\" (editStatusTask)=\"editStatusTask($event)\"></app-task>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/status/status.component.scss":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/status/status.component.ts":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/status.service */ "./src/app/service/status.service.ts");
/* harmony import */ var _models_tablero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tablero */ "./src/app/models/tablero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatusComponent = /** @class */ (function () {
    function StatusComponent(statusService) {
        this.statusService = statusService;
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._stsSub = this.statusService.status.pipe().subscribe(function (data) {
            _this.status = data;
            console.log('status', _this.status);
        });
    };
    StatusComponent.prototype.ngOnDestroy = function () {
        this._stsSub.unsubscribe();
    };
    StatusComponent.prototype.editStatusTask = function (data) {
        var task = data.task;
        var currentStatusId = task.statusId;
        var newStatusId = data.statusId;
        this.status.forEach(function (s) {
            if (s.id === newStatusId) {
                s.tasks.push(task);
            }
        });
        this.status.find(function (x) { return x.id === currentStatusId; }).tasks =
            this.status.find(function (x) { return x.id === currentStatusId; }).tasks.filter(function (x) { return x.id != task.id; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tablero'),
        __metadata("design:type", _models_tablero__WEBPACK_IMPORTED_MODULE_2__["Tablero"])
    ], StatusComponent.prototype, "tablero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('users'),
        __metadata("design:type", Array)
    ], StatusComponent.prototype, "users", void 0);
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.scss */ "./src/app/status/status.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_status_service__WEBPACK_IMPORTED_MODULE_1__["StatusService"]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table w-100\" cellspacing=\"0\" rowspacing=\"2\" width=\"100%\">\n\n   <thead>\n      <th class=\"text-center\"></th>\n      <th class=\"text-center\">Reporta</th>\n      <th class=\"text-center\">Atiende</th>\n      <th class=\"text-center\">Estatus</th>\n      <th class=\"text-center\">Fecha Fin</th>\n   </thead>\n   <tbody>\n      <tr class=\"bg-white\" *ngFor=\"let task of status.tasks\">\n         <td class=\"cell-task \" title=\"{{task.name}}\">\n            {{task.name}}\n         </td>\n         <td class=\"w-10 cell-user\">\n            <i class=\"fa fa-user-circle\" *ngIf=\"task.owneruser == null\"></i>\n            <span  *ngIf=\"task.owneruser != null\" class=\"badge badge-secondary icon-user\" title=\"{{task.owneruser?.name}} {{task.owneruser?.lastname}}\">\n               {{task.owneruser?.name | slice:0:1}} {{task.owneruser?.lastname | slice:0:1}}\n            </span>\n            <div class=\"dialog-content hideMe\">\n                  <div class=\"speech-bubble-user\">\n                     <ul>\n                        <li *ngFor=\"let user of users\">\n                           <span class=\"btn item-user text-left\"  (click)=\"onChangeUserReporta(task,user.user)\">\n                                 <i class=\"fa fa-user-circle\"></i> {{user.user?.name}} {{user.user?.lastname}} \n                              </span>\n                        </li>\n                     </ul>\n                  </div>\n               </div>\n         </td>\n         <td class=\" w-10 cell-user\">\n               <i class=\"fa fa-user-circle\" *ngIf=\"task.devuser == null\"></i>\n               <span  *ngIf=\"task.devuser != null\" class=\"badge badge-secondary icon-user\" title=\"{{task.devuser?.name}} {{task.devuser?.lastname}}\">\n                  {{task.devuser?.name | slice:0:1}} {{task.devuser?.lastname | slice:0:1}}\n               </span>\n            <div class=\"dialog-content hideMe\">\n               <div class=\"speech-bubble-user\">\n                  <ul>\n                     <li *ngFor=\"let user of users\">\n                        <span class=\"btn item-user text-left\" (click)=\"onChangeUserAtiende(task,user.user)\">\n                              <i class=\"fa fa-user-circle\" ></i> {{user.user?.name}} {{user.user?.lastname}} \n                           </span>\n                     </li>\n                  </ul>\n               </div>\n            </div>\n         </td>\n         <td class=\"cell-status w-15 {{status.color?.background}} text-center text-white\">\n           <span > {{status.name}} </span>\n           <div class=\"dialog-content hideMe\">\n            <div class=\"speech-bubble \">\n               <ul>\n                  <li *ngFor=\"let st of allstatus\">\n                        <button class=\"btn {{st.color?.background}} w-100 text-white \" (click)=\"onClickUpdateStatus(task,st.id)\">{{st.name}}</button>\n                  </li>\n               </ul>\n              \n            </div>\n         </div>\n         \n         </td>\n         <td class=\"text-center w-15\">\n            <input type=\"date\" class=\"form-control input-date-cell text-center \" [(ngModel)]=\"task.enddate\" (change)=\"onChangeEndDate(task)\">\n         </td>\n      </tr>\n      <tr>\n         <td colspan=\"4\">\n            <input type=\"text\" class=\"form-control pull-left\" [(ngModel)]=\"nameTask\" placeholder=\"Agregar tarea\">\n         </td>\n         <td class=\"1\">\n            <button class=\"btn btn-default pull-left\" (click)=\"onClickAddTask()\">\n               <i class=\"fa fa-plus\"></i>\n            </button>\n         </td>\n      </tr>\n   </tbody>\n</table>\n\n"

/***/ }),

/***/ "./src/app/task/task.component.scss":
/*!******************************************!*\
  !*** ./src/app/task/task.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-date-cell {\n  background-color: transparent;\n  border: none;\n  font-size: 0.8rem;\n  height: 100%;\n  padding: 0;\n  margin: 0; }\n\n.cell-user {\n  cursor: pointer;\n  font-size: 1.6rem;\n  text-align: center;\n  margin: 0 !important;\n  padding: 0 !important; }\n\n.cell-user .fa {\n    margin: 0 !important;\n    padding: 0 !important; }\n\n.cell-user i {\n    margin: 0 !important;\n    padding: 0 !important; }\n\n.cell-task {\n  word-wrap: break-word !important;\n  min-width: 300px;\n  max-width: 300px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.5rem; }\n\n.cell-status {\n  cursor: pointer;\n  line-height: 1.5rem; }\n"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/status */ "./src/app/models/status.ts");
/* harmony import */ var _service_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/status.service */ "./src/app/service/status.service.ts");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/task */ "./src/app/models/task.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
        this.editSatusTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent.prototype.onClickAddTask = function () {
        this.statusService.addTask(new _models_task__WEBPACK_IMPORTED_MODULE_3__["Task"](null, this.nameTask, null, this.status, this.status.project));
    };
    TaskComponent.prototype.onClickUpdateStatus = function (task, statusId) {
        task.statusId = statusId;
        this.statusService.editTask(task);
        this.editSatusTask.emit({ task: task, statusId: statusId });
    };
    TaskComponent.prototype.onChangeEndDate = function (task) {
        this.statusService.editTask(task);
    };
    TaskComponent.prototype.onChangeUserReporta = function (task, user) {
        task.owneruserId = user.id;
        this.statusService.editTask(task);
    };
    TaskComponent.prototype.onChangeUserAtiende = function (task, user) {
        task.devuserId = user.id;
        this.statusService.editTask(task);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('status'),
        __metadata("design:type", _models_status__WEBPACK_IMPORTED_MODULE_1__["Status"])
    ], TaskComponent.prototype, "status", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('allstatus'),
        __metadata("design:type", Array)
    ], TaskComponent.prototype, "allstatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('statusService'),
        __metadata("design:type", _service_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"])
    ], TaskComponent.prototype, "statusService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('users'),
        __metadata("design:type", Array)
    ], TaskComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('editStatusTask'),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "editSatusTask", void 0);
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.scss */ "./src/app/task/task.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
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

module.exports = __webpack_require__(/*! C:\GIT_REPO\chores\socket-app\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map