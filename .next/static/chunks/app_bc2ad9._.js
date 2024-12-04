(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_bc2ad9._.js", {

"[project]/app/ui/dashboard/carousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$heroicons$2b$react$40$2$2e$1$2e$4_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-cd22717c-20241013/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$heroicons$2b$react$40$2$2e$1$2e$4_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-cd22717c-20241013/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const CardCarousel = ({ cards })=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const cardWidth = 100 / 3; // Adjust based on the number of cards visible at a time (e.g., 3 cards)
    // Next and Previous slide functions
    const nextSlide = ()=>{
        setCurrentIndex((prevIndex)=>prevIndex + 1 < cards.length ? prevIndex + 1 : 0);
    };
    const prevSlide = ()=>{
        setCurrentIndex((prevIndex)=>prevIndex === 0 ? cards.length - 1 : prevIndex - 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 px-4 md:px-12 lg:px-24 md:py-4 content-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-4 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-sm md:text-2xl lg:text-4xl font-medium",
                            children: "What Our Client Said About Us"
                        }, void 0, false, {
                            fileName: "[project]/app/ui/dashboard/carousel.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: prevSlide,
                                    className: "p-2 lg:p-4 mx-5 text-[#37535E] bg-[#F8F9FF] rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$heroicons$2b$react$40$2$2e$1$2e$4_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ui/dashboard/carousel.tsx",
                                        lineNumber: 43,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/dashboard/carousel.tsx",
                                    lineNumber: 42,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: nextSlide,
                                    className: "p-2 lg:p-4 text-[#CEFD63] bg-[#37535E] rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$heroicons$2b$react$40$2$2e$1$2e$4_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ui/dashboard/carousel.tsx",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/ui/dashboard/carousel.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ui/dashboard/carousel.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ui/dashboard/carousel.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex transition-transform duration-700 ease-in-out ",
                        style: {
                            transform: `translateX(-${currentIndex * cardWidth}%)`
                        },
                        children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-shrink-0 w-full max-w-xs p-4 bg-[#37535E] rounded-lg shadow-lg lg:mx-5 md:mr-5 mr-5 lg:px-10 px-5
                            ${index === currentIndex ? 'bg-[#37535E] text-[#fff]' : 'bg-[#CEFD63] text-[#000000CC]'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col h-auto ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: card.image,
                                                    alt: card.title,
                                                    className: "w-16 h-16 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ui/dashboard/carousel.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg md:text-2xl lg:text-3xl font-semibold",
                                                            children: card.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/ui/dashboard/carousel.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "mt-2 text-sm md:text-lg lg:text-xl",
                                                            children: card.designation
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/ui/dashboard/carousel.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/ui/dashboard/carousel.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/ui/dashboard/carousel.tsx",
                                            lineNumber: 58,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-xs ",
                                            children: card.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/ui/dashboard/carousel.tsx",
                                            lineNumber: 65,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ui/dashboard/carousel.tsx",
                                    lineNumber: 57,
                                    columnNumber: 33
                                }, this)
                            }, index, false, {
                                fileName: "[project]/app/ui/dashboard/carousel.tsx",
                                lineNumber: 54,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/ui/dashboard/carousel.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/ui/dashboard/carousel.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/ui/dashboard/carousel.tsx",
            lineNumber: 38,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/ui/dashboard/carousel.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
};
_s(CardCarousel, "tusBbsahUVevXfyh6oH5R6YDC9Q=");
_c = CardCarousel;
const __TURBOPACK__default__export__ = CardCarousel;
var _c;
__turbopack_refresh__.register(_c, "CardCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_bc2ad9._.js.map