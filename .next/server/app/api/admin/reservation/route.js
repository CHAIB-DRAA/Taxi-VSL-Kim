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
exports.id = "app/api/admin/reservation/route";
exports.ids = ["app/api/admin/reservation/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Freservation%2Froute&page=%2Fapi%2Fadmin%2Freservation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Freservation%2Froute.ts&appDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Freservation%2Froute&page=%2Fapi%2Fadmin%2Freservation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Freservation%2Froute.ts&appDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mondz_Downloads_taxi_vsl_nextjs_complete_app_api_admin_reservation_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/reservation/route.ts */ \"(rsc)/./app/api/admin/reservation/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/reservation/route\",\n        pathname: \"/api/admin/reservation\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/reservation/route\"\n    },\n    resolvedPagePath: \"/Users/mondz/Downloads/taxi-vsl-nextjs-complete/app/api/admin/reservation/route.ts\",\n    nextConfigOutput,\n    userland: _Users_mondz_Downloads_taxi_vsl_nextjs_complete_app_api_admin_reservation_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/admin/reservation/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnJlc2VydmF0aW9uJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRnJlc2VydmF0aW9uJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZyZXNlcnZhdGlvbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1vbmR6JTJGRG93bmxvYWRzJTJGdGF4aS12c2wtbmV4dGpzLWNvbXBsZXRlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1vbmR6JTJGRG93bmxvYWRzJTJGdGF4aS12c2wtbmV4dGpzLWNvbXBsZXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGF4aS12c2wtbmV4dGpzLz85MDkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tb25kei9Eb3dubG9hZHMvdGF4aS12c2wtbmV4dGpzLWNvbXBsZXRlL2FwcC9hcGkvYWRtaW4vcmVzZXJ2YXRpb24vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluL3Jlc2VydmF0aW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vcmVzZXJ2YXRpb25cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkbWluL3Jlc2VydmF0aW9uL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21vbmR6L0Rvd25sb2Fkcy90YXhpLXZzbC1uZXh0anMtY29tcGxldGUvYXBwL2FwaS9hZG1pbi9yZXNlcnZhdGlvbi9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hZG1pbi9yZXNlcnZhdGlvbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Freservation%2Froute&page=%2Fapi%2Fadmin%2Freservation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Freservation%2Froute.ts&appDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/reservation/route.ts":
/*!********************************************!*\
  !*** ./app/api/admin/reservation/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"(rsc)/./node_modules/cookie/dist/index.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_mailer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../lib/mailer */ \"(rsc)/./lib/mailer.ts\");\n\n\n\n\n // ton module mailer\nconst checkAuth = (req)=>{\n    const cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.parse)(req.headers.get(\"cookie\") || \"\");\n    return cookies.admin_session === process.env.ADMIN_SECRET;\n};\nasync function GET(req) {\n    if (!checkAuth(req)) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"reservationsDB\");\n        const reservations = await db.collection(\"reservations\").find({}).sort({\n            createdAt: -1\n        }).toArray();\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            reservations\n        });\n    } catch (err) {\n        console.error(err);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Erreur serveur\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(req) {\n    if (!checkAuth(req)) return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    try {\n        const { id } = await req.json();\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"reservationsDB\");\n        await db.collection(\"reservations\").deleteOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_3__.ObjectId(id)\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            ok: true\n        });\n    } catch (err) {\n        console.error(err);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Erreur serveur\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PATCH(req) {\n    if (!checkAuth(req)) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    try {\n        const { id, status } = await req.json();\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"reservationsDB\");\n        // On met à jour le statut\n        const res = await db.collection(\"reservations\").findOneAndUpdate({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_3__.ObjectId(id)\n        }, {\n            $set: {\n                status\n            }\n        }, {\n            returnDocument: \"after\"\n        } // pour récupérer le document après MAJ\n        );\n        if (!res.value) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"R\\xe9servation introuvable\"\n            }, {\n                status: 404\n            });\n        }\n        // Envoi du mail au client si email présent\n        if (res.value.email) {\n            try {\n                await (0,_lib_mailer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n                    nom: res.value.nom,\n                    email: res.value.email,\n                    telephone: res.value.telephone,\n                    status\n                });\n            } catch (mailErr) {\n                console.error(\"Erreur d'envoi du mail :\", mailErr);\n            }\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            ok: true,\n            reservation: res.value\n        });\n    } catch (err) {\n        console.error(err);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Erreur serveur\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL3Jlc2VydmF0aW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQztBQUNTO0FBQ3JCO0FBQ0k7QUFDc0IsQ0FBQyxvQkFBb0I7QUFFN0UsTUFBTUssWUFBWSxDQUFDQztJQUNqQixNQUFNQyxVQUFVTCw2Q0FBS0EsQ0FBQ0ksSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYTtJQUNuRCxPQUFPRixRQUFRRyxhQUFhLEtBQUtDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUMzRDtBQUVPLGVBQWVDLElBQUlSLEdBQVk7SUFDcEMsSUFBSSxDQUFDRCxVQUFVQyxNQUFNO1FBQ25CLE9BQU9OLGtGQUFZQSxDQUFDZSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BFO0lBRUEsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTWpCLG9EQUFhQTtRQUNsQyxNQUFNa0IsS0FBS0QsT0FBT0MsRUFBRSxDQUFDO1FBQ3JCLE1BQU1DLGVBQWUsTUFBTUQsR0FDeEJFLFVBQVUsQ0FBQyxnQkFDWEMsSUFBSSxDQUFDLENBQUMsR0FDTkMsSUFBSSxDQUFDO1lBQUVDLFdBQVcsQ0FBQztRQUFFLEdBQ3JCQyxPQUFPO1FBQ1YsT0FBT3pCLGtGQUFZQSxDQUFDZSxJQUFJLENBQUM7WUFBRUs7UUFBYTtJQUMxQyxFQUFFLE9BQU9NLEtBQUs7UUFDWkMsUUFBUVgsS0FBSyxDQUFDVTtRQUNkLE9BQU8xQixrRkFBWUEsQ0FBQ2UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBaUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdEU7QUFDRjtBQUVPLGVBQWVXLE9BQU90QixHQUFZO0lBQ3ZDLElBQUksQ0FBQ0QsVUFBVUMsTUFBTSxPQUFPTixrRkFBWUEsQ0FBQ2UsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUV2RixJQUFJO1FBQ0YsTUFBTSxFQUFFWSxFQUFFLEVBQUUsR0FBRyxNQUFNdkIsSUFBSVMsSUFBSTtRQUM3QixNQUFNRyxTQUFTLE1BQU1qQixvREFBYUE7UUFDbEMsTUFBTWtCLEtBQUtELE9BQU9DLEVBQUUsQ0FBQztRQUNyQixNQUFNQSxHQUFHRSxVQUFVLENBQUMsZ0JBQWdCUyxTQUFTLENBQUM7WUFBRUMsS0FBSyxJQUFJNUIsNkNBQVFBLENBQUMwQjtRQUFJO1FBQ3RFLE9BQU83QixrRkFBWUEsQ0FBQ2UsSUFBSSxDQUFDO1lBQUVpQixJQUFJO1FBQUs7SUFDdEMsRUFBRSxPQUFPTixLQUFLO1FBQ1pDLFFBQVFYLEtBQUssQ0FBQ1U7UUFDZCxPQUFPMUIsa0ZBQVlBLENBQUNlLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWlCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3RFO0FBQ0Y7QUFHTyxlQUFlZ0IsTUFBTTNCLEdBQVk7SUFDdEMsSUFBSSxDQUFDRCxVQUFVQyxNQUFNO1FBQ25CLE9BQU9OLGtGQUFZQSxDQUFDZSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BFO0lBRUEsSUFBSTtRQUNGLE1BQU0sRUFBRVksRUFBRSxFQUFFWixNQUFNLEVBQUUsR0FBRyxNQUFNWCxJQUFJUyxJQUFJO1FBQ3JDLE1BQU1HLFNBQVMsTUFBTWpCLG9EQUFhQTtRQUNsQyxNQUFNa0IsS0FBS0QsT0FBT0MsRUFBRSxDQUFDO1FBRXJCLDBCQUEwQjtRQUMxQixNQUFNZSxNQUFNLE1BQU1mLEdBQ2ZFLFVBQVUsQ0FBQyxnQkFDWGMsZ0JBQWdCLENBQ2Y7WUFBRUosS0FBSyxJQUFJNUIsNkNBQVFBLENBQUMwQjtRQUFJLEdBQ3hCO1lBQUVPLE1BQU07Z0JBQUVuQjtZQUFPO1FBQUUsR0FDbkI7WUFBRW9CLGdCQUFnQjtRQUFRLEVBQUUsdUNBQXVDOztRQUd2RSxJQUFJLENBQUNILElBQUlJLEtBQUssRUFBRTtZQUNkLE9BQU90QyxrRkFBWUEsQ0FBQ2UsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQTBCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMvRTtRQUVBLDJDQUEyQztRQUMzQyxJQUFJaUIsSUFBSUksS0FBSyxDQUFDQyxLQUFLLEVBQUU7WUFDbkIsSUFBSTtnQkFDRixNQUFNbkMsdURBQW1CQSxDQUFDO29CQUN4Qm9DLEtBQUtOLElBQUlJLEtBQUssQ0FBQ0UsR0FBRztvQkFDbEJELE9BQU9MLElBQUlJLEtBQUssQ0FBQ0MsS0FBSztvQkFDdEJFLFdBQVdQLElBQUlJLEtBQUssQ0FBQ0csU0FBUztvQkFDOUJ4QjtnQkFDRjtZQUNGLEVBQUUsT0FBT3lCLFNBQVM7Z0JBQ2hCZixRQUFRWCxLQUFLLENBQUMsNEJBQTRCMEI7WUFDNUM7UUFDRjtRQUVBLE9BQU8xQyxrRkFBWUEsQ0FBQ2UsSUFBSSxDQUFDO1lBQUVpQixJQUFJO1lBQU1XLGFBQWFULElBQUlJLEtBQUs7UUFBQztJQUM5RCxFQUFFLE9BQU9aLEtBQUs7UUFDWkMsUUFBUVgsS0FBSyxDQUFDVTtRQUNkLE9BQU8xQixrRkFBWUEsQ0FBQ2UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBaUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdEU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RheGktdnNsLW5leHRqcy8uL2FwcC9hcGkvYWRtaW4vcmVzZXJ2YXRpb24vcm91dGUudHM/ZWQ1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9tb25nb2RiXCJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSBcImNvb2tpZVwiXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCJcbmltcG9ydCBzZW5kUmVzZXJ2YXRpb25NYWlsIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvbWFpbGVyXCIgLy8gdG9uIG1vZHVsZSBtYWlsZXJcblxuY29uc3QgY2hlY2tBdXRoID0gKHJlcTogUmVxdWVzdCkgPT4ge1xuICBjb25zdCBjb29raWVzID0gcGFyc2UocmVxLmhlYWRlcnMuZ2V0KFwiY29va2llXCIpIHx8IFwiXCIpXG4gIHJldHVybiBjb29raWVzLmFkbWluX3Nlc3Npb24gPT09IHByb2Nlc3MuZW52LkFETUlOX1NFQ1JFVFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogUmVxdWVzdCkge1xuICBpZiAoIWNoZWNrQXV0aChyZXEpKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJyZXNlcnZhdGlvbnNEQlwiKVxuICAgIGNvbnN0IHJlc2VydmF0aW9ucyA9IGF3YWl0IGRiXG4gICAgICAuY29sbGVjdGlvbihcInJlc2VydmF0aW9uc1wiKVxuICAgICAgLmZpbmQoe30pXG4gICAgICAuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSlcbiAgICAgIC50b0FycmF5KClcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyByZXNlcnZhdGlvbnMgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRXJyZXVyIHNlcnZldXJcIiB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXE6IFJlcXVlc3QpIHtcbiAgaWYgKCFjaGVja0F1dGgocmVxKSkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBpZCB9ID0gYXdhaXQgcmVxLmpzb24oKVxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2VcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcInJlc2VydmF0aW9uc0RCXCIpXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcInJlc2VydmF0aW9uc1wiKS5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSlcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogdHJ1ZSB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJFcnJldXIgc2VydmV1clwiIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQQVRDSChyZXE6IFJlcXVlc3QpIHtcbiAgaWYgKCFjaGVja0F1dGgocmVxKSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSlcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBpZCwgc3RhdHVzIH0gPSBhd2FpdCByZXEuanNvbigpXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwicmVzZXJ2YXRpb25zREJcIilcblxuICAgIC8vIE9uIG1ldCDDoCBqb3VyIGxlIHN0YXR1dFxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRiXG4gICAgICAuY29sbGVjdGlvbihcInJlc2VydmF0aW9uc1wiKVxuICAgICAgLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SWQoaWQpIH0sXG4gICAgICAgIHsgJHNldDogeyBzdGF0dXMgfSB9LFxuICAgICAgICB7IHJldHVybkRvY3VtZW50OiBcImFmdGVyXCIgfSAvLyBwb3VyIHLDqWN1cMOpcmVyIGxlIGRvY3VtZW50IGFwcsOocyBNQUpcbiAgICAgIClcblxuICAgIGlmICghcmVzLnZhbHVlKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJSw6lzZXJ2YXRpb24gaW50cm91dmFibGVcIiB9LCB7IHN0YXR1czogNDA0IH0pXG4gICAgfVxuXG4gICAgLy8gRW52b2kgZHUgbWFpbCBhdSBjbGllbnQgc2kgZW1haWwgcHLDqXNlbnRcbiAgICBpZiAocmVzLnZhbHVlLmVtYWlsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBzZW5kUmVzZXJ2YXRpb25NYWlsKHtcbiAgICAgICAgICBub206IHJlcy52YWx1ZS5ub20sXG4gICAgICAgICAgZW1haWw6IHJlcy52YWx1ZS5lbWFpbCxcbiAgICAgICAgICB0ZWxlcGhvbmU6IHJlcy52YWx1ZS50ZWxlcGhvbmUsXG4gICAgICAgICAgc3RhdHVzLFxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAobWFpbEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGQnZW52b2kgZHUgbWFpbCA6XCIsIG1haWxFcnIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgb2s6IHRydWUsIHJlc2VydmF0aW9uOiByZXMudmFsdWUgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRXJyZXVyIHNlcnZldXJcIiB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY2xpZW50UHJvbWlzZSIsInBhcnNlIiwiT2JqZWN0SWQiLCJzZW5kUmVzZXJ2YXRpb25NYWlsIiwiY2hlY2tBdXRoIiwicmVxIiwiY29va2llcyIsImhlYWRlcnMiLCJnZXQiLCJhZG1pbl9zZXNzaW9uIiwicHJvY2VzcyIsImVudiIsIkFETUlOX1NFQ1JFVCIsIkdFVCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImNsaWVudCIsImRiIiwicmVzZXJ2YXRpb25zIiwiY29sbGVjdGlvbiIsImZpbmQiLCJzb3J0IiwiY3JlYXRlZEF0IiwidG9BcnJheSIsImVyciIsImNvbnNvbGUiLCJERUxFVEUiLCJpZCIsImRlbGV0ZU9uZSIsIl9pZCIsIm9rIiwiUEFUQ0giLCJyZXMiLCJmaW5kT25lQW5kVXBkYXRlIiwiJHNldCIsInJldHVybkRvY3VtZW50IiwidmFsdWUiLCJlbWFpbCIsIm5vbSIsInRlbGVwaG9uZSIsIm1haWxFcnIiLCJyZXNlcnZhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/reservation/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mailer.ts":
/*!***********************!*\
  !*** ./lib/mailer.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sendReservationMail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n    host: process.env.MAILTRAP_HOST,\n    port: Number(process.env.MAILTRAP_PORT),\n    auth: {\n        user: process.env.MAILTRAP_USER,\n        pass: process.env.MAILTRAP_PASS\n    }\n});\nasync function sendReservationMail(data) {\n    const { nom, email, status, telephone } = data;\n    const statusText = status === \"Confirm\\xe9\" ? \"confirm\\xe9e\" : status === \"Annul\\xe9\" ? \"annul\\xe9e\" : \"cr\\xe9\\xe9e\";\n    const mailOptions = {\n        from: `\"Taxi VSL\" <no-reply@taxivsl.com>`,\n        to: email,\n        subject: `Votre réservation a été ${statusText}`,\n        text: `Bonjour ${nom},\\n\\nVotre réservation a été ${statusText}.\\nTéléphone: ${telephone}`\n    };\n    try {\n        await transporter.sendMail(mailOptions);\n        console.log(\"Mail envoy\\xe9 \\xe0\", email);\n    } catch (err) {\n        console.error(\"Erreur d'envoi du mail :\", err);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbWFpbGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1DO0FBRW5DLE1BQU1DLGNBQWNELHVEQUEwQixDQUFDO0lBQzdDRyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7SUFDL0JDLE1BQU1DLE9BQU9KLFFBQVFDLEdBQUcsQ0FBQ0ksYUFBYTtJQUN0Q0MsTUFBTTtRQUNKQyxNQUFNUCxRQUFRQyxHQUFHLENBQUNPLGFBQWE7UUFDL0JDLE1BQU1ULFFBQVFDLEdBQUcsQ0FBQ1MsYUFBYTtJQUNqQztBQUNGO0FBU2UsZUFBZUMsb0JBQW9CQyxJQUFxQjtJQUNyRSxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHSjtJQUUxQyxNQUFNSyxhQUFhRixXQUFXLGdCQUFhLGlCQUFjQSxXQUFXLGNBQVcsZUFBWTtJQUUzRixNQUFNRyxjQUFjO1FBQ2xCQyxNQUFNLENBQUMsaUNBQWlDLENBQUM7UUFDekNDLElBQUlOO1FBQ0pPLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRUosV0FBVyxDQUFDO1FBQ2hESyxNQUFNLENBQUMsUUFBUSxFQUFFVCxJQUFJLDZCQUE2QixFQUFFSSxXQUFXLGNBQWMsRUFBRUQsVUFBVSxDQUFDO0lBQzVGO0lBRUEsSUFBSTtRQUNGLE1BQU1uQixZQUFZMEIsUUFBUSxDQUFDTDtRQUMzQk0sUUFBUUMsR0FBRyxDQUFDLHVCQUFpQlg7SUFDL0IsRUFBRSxPQUFPWSxLQUFLO1FBQ1pGLFFBQVFHLEtBQUssQ0FBQyw0QkFBNEJEO0lBQzVDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXhpLXZzbC1uZXh0anMvLi9saWIvbWFpbGVyLnRzPzcyYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIlxuXG5jb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgaG9zdDogcHJvY2Vzcy5lbnYuTUFJTFRSQVBfSE9TVCwgLy8gZXg6IFwic210cC5tYWlsdHJhcC5pb1wiXG4gIHBvcnQ6IE51bWJlcihwcm9jZXNzLmVudi5NQUlMVFJBUF9QT1JUKSwgLy8gZXg6IDI1MjVcbiAgYXV0aDoge1xuICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1BSUxUUkFQX1VTRVIsXG4gICAgcGFzczogcHJvY2Vzcy5lbnYuTUFJTFRSQVBfUEFTUyxcbiAgfSxcbn0pXG5cbnR5cGUgUmVzZXJ2YXRpb25EYXRhID0ge1xuICBub206IHN0cmluZ1xuICB0ZWxlcGhvbmU6IHN0cmluZ1xuICBlbWFpbDogc3RyaW5nXG4gIHN0YXR1cz86IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZW5kUmVzZXJ2YXRpb25NYWlsKGRhdGE6IFJlc2VydmF0aW9uRGF0YSkge1xuICBjb25zdCB7IG5vbSwgZW1haWwsIHN0YXR1cywgdGVsZXBob25lIH0gPSBkYXRhXG5cbiAgY29uc3Qgc3RhdHVzVGV4dCA9IHN0YXR1cyA9PT0gXCJDb25maXJtw6lcIiA/IFwiY29uZmlybcOpZVwiIDogc3RhdHVzID09PSBcIkFubnVsw6lcIiA/IFwiYW5udWzDqWVcIiA6IFwiY3LDqcOpZVwiXG5cbiAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XG4gICAgZnJvbTogYFwiVGF4aSBWU0xcIiA8bm8tcmVwbHlAdGF4aXZzbC5jb20+YCxcbiAgICB0bzogZW1haWwsXG4gICAgc3ViamVjdDogYFZvdHJlIHLDqXNlcnZhdGlvbiBhIMOpdMOpICR7c3RhdHVzVGV4dH1gLFxuICAgIHRleHQ6IGBCb25qb3VyICR7bm9tfSxcXG5cXG5Wb3RyZSByw6lzZXJ2YXRpb24gYSDDqXTDqSAke3N0YXR1c1RleHR9LlxcblTDqWzDqXBob25lOiAke3RlbGVwaG9uZX1gLFxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucylcbiAgICBjb25zb2xlLmxvZyhcIk1haWwgZW52b3nDqSDDoFwiLCBlbWFpbClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBkJ2Vudm9pIGR1IG1haWwgOlwiLCBlcnIpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1BSUxUUkFQX0hPU1QiLCJwb3J0IiwiTnVtYmVyIiwiTUFJTFRSQVBfUE9SVCIsImF1dGgiLCJ1c2VyIiwiTUFJTFRSQVBfVVNFUiIsInBhc3MiLCJNQUlMVFJBUF9QQVNTIiwic2VuZFJlc2VydmF0aW9uTWFpbCIsImRhdGEiLCJub20iLCJlbWFpbCIsInN0YXR1cyIsInRlbGVwaG9uZSIsInN0YXR1c1RleHQiLCJtYWlsT3B0aW9ucyIsImZyb20iLCJ0byIsInN1YmplY3QiLCJ0ZXh0Iiwic2VuZE1haWwiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mailer.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"❌ Please define the MONGODB_URI environment variable\");\n}\nconst uri = process.env.MONGODB_URI;\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\nlet clientPromise;\nif (true) {\n    if (!global._mongoClientPromise) {\n        global._mongoClientPromise = client.connect().then((c)=>{\n            console.log(\"✅ MongoDB connected (dev)\");\n            return c;\n        }).catch((err)=>{\n            console.error(\"❌ MongoDB connection error (dev):\", err);\n            throw err;\n        });\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFQSxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsU0FBUyxJQUFJTixnREFBV0EsQ0FBQ0s7QUFFL0IsSUFBSUU7QUFFSixJQUFJTixJQUFzQyxFQUFFO0lBQzFDLElBQUksQ0FBQyxPQUFnQlEsbUJBQW1CLEVBQUU7UUFDdkNELE9BQWVDLG1CQUFtQixHQUFHSCxPQUFPSSxPQUFPLEdBQUdDLElBQUksQ0FBQyxDQUFDQztZQUMzREMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT0Y7UUFDVCxHQUFHRyxLQUFLLENBQUMsQ0FBQ0M7WUFDUkgsUUFBUUksS0FBSyxDQUFDLHFDQUFxQ0Q7WUFDbkQsTUFBTUE7UUFDUjtJQUNGO0lBQ0FULGdCQUFnQixPQUFnQkUsbUJBQW1CO0FBQ3JELE9BQU8sRUFRTjtBQUVELGlFQUFlRixhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGF4aS12c2wtbmV4dGpzLy4vbGliL21vbmdvZGIudHM/MDViZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCLinYwgUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGVcIilcbn1cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpXG5cbmxldCBjbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PlxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICBpZiAoIShnbG9iYWwgYXMgYW55KS5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgKGdsb2JhbCBhcyBhbnkpLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpLnRoZW4oKGMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwi4pyFIE1vbmdvREIgY29ubmVjdGVkIChkZXYpXCIpXG4gICAgICByZXR1cm4gY1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yIChkZXYpOlwiLCBlcnIpXG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxuICB9XG4gIGNsaWVudFByb21pc2UgPSAoZ2xvYmFsIGFzIGFueSkuX21vbmdvQ2xpZW50UHJvbWlzZVxufSBlbHNlIHtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCkudGhlbigoYykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwi4pyFIE1vbmdvREIgY29ubmVjdGVkIChwcm9kKVwiKVxuICAgIHJldHVybiBjXG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFwi4p2MIE1vbmdvREIgY29ubmVjdGlvbiBlcnJvciAocHJvZCk6XCIsIGVycilcbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiLCJ0aGVuIiwiYyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Freservation%2Froute&page=%2Fapi%2Fadmin%2Freservation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Freservation%2Froute.ts&appDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmondz%2FDownloads%2Ftaxi-vsl-nextjs-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();