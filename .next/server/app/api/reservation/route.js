"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/reservation/route";
exports.ids = ["app/api/reservation/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freservation%2Froute&page=%2Fapi%2Freservation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freservation%2Froute.ts&appDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freservation%2Froute&page=%2Fapi%2Freservation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freservation%2Froute.ts&appDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mondz_Downloads_taxi_vsl_nextjs_complete_app_api_reservation_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/reservation/route.ts */ \"(rsc)/./app/api/reservation/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/reservation/route\",\n        pathname: \"/api/reservation\",\n        filename: \"route\",\n        bundlePath: \"app/api/reservation/route\"\n    },\n    resolvedPagePath: \"/Users/mondz/Downloads/taxi-vsl-nextjs-complete/app/api/reservation/route.ts\",\n    nextConfigOutput,\n    userland: _Users_mondz_Downloads_taxi_vsl_nextjs_complete_app_api_reservation_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/reservation/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZXNlcnZhdGlvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVzZXJ2YXRpb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZXNlcnZhdGlvbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1vbmR6JTJGRG93bmxvYWRzJTJGdGF4aS12c2wtbmV4dGpzLWNvbXBsZXRlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1vbmR6JTJGRG93bmxvYWRzJTJGdGF4aS12c2wtbmV4dGpzLWNvbXBsZXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzRCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGF4aS12c2wtbmV4dGpzLz9jZWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tb25kei9Eb3dubG9hZHMvdGF4aS12c2wtbmV4dGpzLWNvbXBsZXRlL2FwcC9hcGkvcmVzZXJ2YXRpb24vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Jlc2VydmF0aW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmVzZXJ2YXRpb25cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Jlc2VydmF0aW9uL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21vbmR6L0Rvd25sb2Fkcy90YXhpLXZzbC1uZXh0anMtY29tcGxldGUvYXBwL2FwaS9yZXNlcnZhdGlvbi9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9yZXNlcnZhdGlvbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freservation%2Froute&page=%2Fapi%2Freservation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freservation%2Froute.ts&appDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/reservation/route.ts":
/*!**************************************!*\
  !*** ./app/api/reservation/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _lib_mailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/mailer */ \"(rsc)/./lib/mailer.ts\");\n\n\n\nasync function POST(request) {\n    const data = await request.json();\n    if (!data.nom || !data.telephone) return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        error: \"Champs manquants\"\n    }, {\n        status: 400\n    });\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db() // tu peux mettre le nom de ta DB ici : client.db('mydatabase')\n        ;\n        const res = await db.collection(\"reservations\").insertOne({\n            ...data,\n            createdAt: new Date()\n        });\n        await (0,_lib_mailer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            ok: true,\n            id: res.insertedId\n        });\n    } catch (err) {\n        console.error(err);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Erreur serveur\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Jlc2VydmF0aW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEM7QUFDTTtBQUNLO0FBRTlDLGVBQWVHLEtBQUtDLE9BQWdCO0lBQ3pDLE1BQU1DLE9BQU8sTUFBTUQsUUFBUUUsSUFBSTtJQUMvQixJQUFHLENBQUNELEtBQUtFLEdBQUcsSUFBSSxDQUFDRixLQUFLRyxTQUFTLEVBQzdCLE9BQU9SLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7UUFBRUcsT0FBTztJQUFtQixHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUV4RSxJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNVixvREFBYUE7UUFDbEMsTUFBTVcsS0FBS0QsT0FBT0MsRUFBRSxHQUFHLCtEQUErRDs7UUFDdEYsTUFBTUMsTUFBTSxNQUFNRCxHQUFHRSxVQUFVLENBQUMsZ0JBQWdCQyxTQUFTLENBQUM7WUFBRSxHQUFHVixJQUFJO1lBQUVXLFdBQVcsSUFBSUM7UUFBTztRQUUzRixNQUFNZix1REFBbUJBLENBQUNHO1FBRTFCLE9BQU9MLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRVksSUFBSTtZQUFNQyxJQUFJTixJQUFJTyxVQUFVO1FBQUM7SUFDMUQsRUFBRSxPQUFNQyxLQUFLO1FBQ1hDLFFBQVFiLEtBQUssQ0FBQ1k7UUFDZCxPQUFPckIsa0ZBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFRyxPQUFPO1FBQWlCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3RFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXhpLXZzbC1uZXh0anMvLi9hcHAvYXBpL3Jlc2VydmF0aW9uL3JvdXRlLnRzPzNhZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuLi8uLi8uLi9saWIvbW9uZ29kYidcbmltcG9ydCBzZW5kUmVzZXJ2YXRpb25NYWlsIGZyb20gJy4uLy4uLy4uL2xpYi9tYWlsZXInXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3Qpe1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKClcbiAgaWYoIWRhdGEubm9tIHx8ICFkYXRhLnRlbGVwaG9uZSkgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdDaGFtcHMgbWFucXVhbnRzJyB9LCB7IHN0YXR1czogNDAwIH0pXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKSAvLyB0dSBwZXV4IG1ldHRyZSBsZSBub20gZGUgdGEgREIgaWNpIDogY2xpZW50LmRiKCdteWRhdGFiYXNlJylcbiAgICBjb25zdCByZXMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdyZXNlcnZhdGlvbnMnKS5pbnNlcnRPbmUoeyAuLi5kYXRhLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkgfSlcblxuICAgIGF3YWl0IHNlbmRSZXNlcnZhdGlvbk1haWwoZGF0YSlcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG9rOiB0cnVlLCBpZDogcmVzLmluc2VydGVkSWQgfSlcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0VycmV1ciBzZXJ2ZXVyJyB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjbGllbnRQcm9taXNlIiwic2VuZFJlc2VydmF0aW9uTWFpbCIsIlBPU1QiLCJyZXF1ZXN0IiwiZGF0YSIsImpzb24iLCJub20iLCJ0ZWxlcGhvbmUiLCJlcnJvciIsInN0YXR1cyIsImNsaWVudCIsImRiIiwicmVzIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImNyZWF0ZWRBdCIsIkRhdGUiLCJvayIsImlkIiwiaW5zZXJ0ZWRJZCIsImVyciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/reservation/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mailer.ts":
/*!***********************!*\
  !*** ./lib/mailer.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sendReservationMail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n    host: process.env.SMTP_HOST,\n    port: Number(process.env.SMTP_PORT || 587),\n    secure: false,\n    auth: {\n        user: process.env.SMTP_USER,\n        pass: process.env.SMTP_PASS\n    }\n});\nasync function sendReservationMail(data) {\n    if (!process.env.ADMIN_EMAIL) return;\n    const html = `\n    <h2>Nouvelle réservation - Taxi VSL</h2>\n    <ul>\n      <li>Nom: ${data.nom} ${data.prenom || \"\"}</li>\n      <li>Téléphone: ${data.telephone}</li>\n      <li>Email: ${data.email || \"\"}</li>\n      <li>Date: ${data.date} ${data.heure}</li>\n      <li>Départ: ${data.depart}</li>\n      <li>Arrivée: ${data.arrivee}</li>\n      <li>Motif: ${data.motif}</li>\n    </ul>\n  `;\n    await transporter.sendMail({\n        from: process.env.SMTP_USER,\n        to: process.env.ADMIN_EMAIL,\n        subject: \"Nouvelle r\\xe9servation Taxi VSL\",\n        html\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbWFpbGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1DO0FBRW5DLE1BQU1DLGNBQWNELHVEQUEwQixDQUFDO0lBQzdDRyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7SUFDM0JDLE1BQU1DLE9BQU9KLFFBQVFDLEdBQUcsQ0FBQ0ksU0FBUyxJQUFJO0lBQ3RDQyxRQUFRO0lBQ1JDLE1BQU07UUFDSkMsTUFBTVIsUUFBUUMsR0FBRyxDQUFDUSxTQUFTO1FBQzNCQyxNQUFNVixRQUFRQyxHQUFHLENBQUNVLFNBQVM7SUFDN0I7QUFDRjtBQUVlLGVBQWVDLG9CQUFvQkMsSUFBUztJQUN6RCxJQUFHLENBQUNiLFFBQVFDLEdBQUcsQ0FBQ2EsV0FBVyxFQUFFO0lBQzdCLE1BQU1DLE9BQU8sQ0FBQzs7O2VBR0QsRUFBRUYsS0FBS0csR0FBRyxDQUFDLENBQUMsRUFBRUgsS0FBS0ksTUFBTSxJQUFJLEdBQUc7cUJBQzFCLEVBQUVKLEtBQUtLLFNBQVMsQ0FBQztpQkFDckIsRUFBRUwsS0FBS00sS0FBSyxJQUFJLEdBQUc7Z0JBQ3BCLEVBQUVOLEtBQUtPLElBQUksQ0FBQyxDQUFDLEVBQUVQLEtBQUtRLEtBQUssQ0FBQztrQkFDeEIsRUFBRVIsS0FBS1MsTUFBTSxDQUFDO21CQUNiLEVBQUVULEtBQUtVLE9BQU8sQ0FBQztpQkFDakIsRUFBRVYsS0FBS1csS0FBSyxDQUFDOztFQUU1QixDQUFDO0lBRUQsTUFBTTNCLFlBQVk0QixRQUFRLENBQUM7UUFDekJDLE1BQU0xQixRQUFRQyxHQUFHLENBQUNRLFNBQVM7UUFDM0JrQixJQUFJM0IsUUFBUUMsR0FBRyxDQUFDYSxXQUFXO1FBQzNCYyxTQUFTO1FBQ1RiO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RheGktdnNsLW5leHRqcy8uL2xpYi9tYWlsZXIudHM/NzJjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJ1xuXG5jb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgaG9zdDogcHJvY2Vzcy5lbnYuU01UUF9IT1NULFxuICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuU01UUF9QT1JUIHx8IDU4NyksXG4gIHNlY3VyZTogZmFsc2UsXG4gIGF1dGg6IHtcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5TTVRQX1VTRVIsXG4gICAgcGFzczogcHJvY2Vzcy5lbnYuU01UUF9QQVNTXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlbmRSZXNlcnZhdGlvbk1haWwoZGF0YTogYW55KXtcbiAgaWYoIXByb2Nlc3MuZW52LkFETUlOX0VNQUlMKSByZXR1cm5cbiAgY29uc3QgaHRtbCA9IGBcbiAgICA8aDI+Tm91dmVsbGUgcsOpc2VydmF0aW9uIC0gVGF4aSBWU0w8L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaT5Ob206ICR7ZGF0YS5ub219ICR7ZGF0YS5wcmVub20gfHwgJyd9PC9saT5cbiAgICAgIDxsaT5Uw6lsw6lwaG9uZTogJHtkYXRhLnRlbGVwaG9uZX08L2xpPlxuICAgICAgPGxpPkVtYWlsOiAke2RhdGEuZW1haWwgfHwgJyd9PC9saT5cbiAgICAgIDxsaT5EYXRlOiAke2RhdGEuZGF0ZX0gJHtkYXRhLmhldXJlfTwvbGk+XG4gICAgICA8bGk+RMOpcGFydDogJHtkYXRhLmRlcGFydH08L2xpPlxuICAgICAgPGxpPkFycml2w6llOiAke2RhdGEuYXJyaXZlZX08L2xpPlxuICAgICAgPGxpPk1vdGlmOiAke2RhdGEubW90aWZ9PC9saT5cbiAgICA8L3VsPlxuICBgXG5cbiAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xuICAgIGZyb206IHByb2Nlc3MuZW52LlNNVFBfVVNFUixcbiAgICB0bzogcHJvY2Vzcy5lbnYuQURNSU5fRU1BSUwsXG4gICAgc3ViamVjdDogJ05vdXZlbGxlIHLDqXNlcnZhdGlvbiBUYXhpIFZTTCcsXG4gICAgaHRtbFxuICB9KVxufVxuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiU01UUF9IT1NUIiwicG9ydCIsIk51bWJlciIsIlNNVFBfUE9SVCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwiU01UUF9VU0VSIiwicGFzcyIsIlNNVFBfUEFTUyIsInNlbmRSZXNlcnZhdGlvbk1haWwiLCJkYXRhIiwiQURNSU5fRU1BSUwiLCJodG1sIiwibm9tIiwicHJlbm9tIiwidGVsZXBob25lIiwiZW1haWwiLCJkYXRlIiwiaGV1cmUiLCJkZXBhcnQiLCJhcnJpdmVlIiwibW90aWYiLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsInN1YmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mailer.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable\");\n}\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(process.env.MONGODB_URI);\nlet clientPromise;\nif (true) {\n    if (!global._mongoClientPromise) {\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFQSxNQUFNQyxTQUFTLElBQUlMLGdEQUFXQSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDdEQsSUFBSUc7QUFFSixJQUFJTCxJQUFzQyxFQUFFO0lBQzFDLElBQUksQ0FBQyxPQUFnQk8sbUJBQW1CLEVBQUU7UUFDdkNELE9BQWVDLG1CQUFtQixHQUFHSCxPQUFPSSxPQUFPO0lBQ3REO0lBQ0FILGdCQUFnQixPQUFnQkUsbUJBQW1CO0FBQ3JELE9BQU8sRUFFTjtBQUVELGlFQUFlRixhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGF4aS12c2wtbmV4dGpzLy4vbGliL21vbmdvZGIudHM/MDViZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZVwiKVxufVxuXG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpXG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgaWYgKCEoZ2xvYmFsIGFzIGFueSkuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIChnbG9iYWwgYXMgYW55KS5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICB9XG4gIGNsaWVudFByb21pc2UgPSAoZ2xvYmFsIGFzIGFueSkuX21vbmdvQ2xpZW50UHJvbWlzZVxufSBlbHNlIHtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Freservation%2Froute&page=%2Fapi%2Freservation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freservation%2Froute.ts&appDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();