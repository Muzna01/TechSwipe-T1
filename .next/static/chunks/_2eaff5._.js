(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_2eaff5._.js", {

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
"[project]/app/ui/dashboard/companyStructure.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CompanyStructure)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const companyServices = [
    [
        {
            id: '1',
            heading: 'IT Infrastructure',
            headingDiscp: 'End-to-end solutions for network management, cloud integration, and infrastructure optimization.'
        }
    ],
    [
        {
            id: '2',
            heading: 'Digital Transformation Consulting',
            headingDiscp: 'Helping organizations transition seamlessly into the digital age, boosting efficiency and innovation.'
        }
    ],
    [
        {
            id: '3',
            heading: 'Quality Assurance & Monitoring',
            headingDiscp: 'Reliable surveillance and monitoring to ensure your systems perform optimally, reducing risks and downtime.'
        }
    ]
];
const companyInfraStructure = [
    {
        id: '1',
        image: '/gray.png',
        label: 'Network Optimization',
        discp: 'Streamlining network performance for reliable connectivity.'
    },
    {
        id: '2',
        image: '/yellow.png',
        label: 'Cloud Integration',
        discp: 'Seamless cloud adoption for enhanced flexibility.'
    },
    {
        id: '3',
        image: '/gray.png',
        label: 'Data Center Solutions',
        discp: 'Efficient data center management and support.'
    },
    {
        id: '4',
        image: '/yellow.png',
        label: 'System Scalability',
        discp: 'Scalable infrastructure to support business growth.'
    }
];
function CompanyStructure() {
    _s();
    const [currentContent, setCurrentContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // State to track the current heading
    const controls = useAnimation(); // Animation controls for the heading
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]); // To store references of each section
    const [scrolling, setScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleScroll = ()=>{
        const currentTop = window.scrollY + window.innerHeight / 2;
        // Find the section closest to the middle of the screen
        for(let i = 0; i < sectionRefs.current.length; i++){
            const section = sectionRefs.current[i];
            if (section) {
                const { offsetTop, offsetHeight } = section;
                if (currentTop >= offsetTop && currentTop < offsetTop + offsetHeight) {
                    setCurrentContent(i); // Update the content based on scroll position
                    break;
                }
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Trigger animations when content is changed
        controls.start({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        });
    }, [
        currentContent
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid  px-4 md:px-12 lg:px-24  content-center ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 justify-between lg:gap-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col py-12 lg:py-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h1, {
                                className: "text-3xl md:text-4xl lg:text-4xl font-medium",
                                animate: controls,
                                initial: {
                                    opacity: 0,
                                    y: -50
                                },
                                children: [
                                    companyServices[currentContent],
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/ui/dashboard/companyStructure.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-sm md:text-md lg:text-lg  font-medium text-[#00000099] pt-4 pb-16 ",
                                children: "End-to-end solutions for network management, cloud integration, and infrastructure optimization."
                            }, void 0, false, {
                                fileName: "[project]/app/ui/dashboard/companyStructure.tsx",
                                lineNumber: 103,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/ITeqpt.jpeg",
                                width: 487,
                                height: 311,
                                className: "lg:w-96 lg:h-56  md:w-96 md:h-56 rounded-[40px] object-cover",
                                alt: "Hero section image"
                            }, void 0, false, {
                                fileName: "[project]/app/ui/dashboard/companyStructure.tsx",
                                lineNumber: 104,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ui/dashboard/companyStructure.tsx",
                        lineNumber: 94,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 items-center justify-center gap-8 md:gap-x-10 md:gap-y-7 lg:gap-x-20 lg:gap-y-5 md:grid-cols-1",
                        children: companyInfraStructure.map((structure)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " flex flex-row    ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        width: 106,
                                        height: 106,
                                        alt: "IT Imge",
                                        src: structure.image,
                                        className: "w-20 h-20 rounded-3xl"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ui/dashboard/companyStructure.tsx",
                                        lineNumber: 119,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col ml-4 lg:ml-8 justify-center ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs md:text-xl lg:text-lg font-semibold ",
                                                children: structure.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/ui/dashboard/companyStructure.tsx",
                                                lineNumber: 121,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs md:text-sm lg:text-xs font-medium text-[#00000099] py-3",
                                                children: structure.discp
                                            }, void 0, false, {
                                                fileName: "[project]/app/ui/dashboard/companyStructure.tsx",
                                                lineNumber: 122,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ui/dashboard/companyStructure.tsx",
                                        lineNumber: 120,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, structure.id, true, {
                                fileName: "[project]/app/ui/dashboard/companyStructure.tsx",
                                lineNumber: 115,
                                columnNumber: 33
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/ui/dashboard/companyStructure.tsx",
                        lineNumber: 112,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ui/dashboard/companyStructure.tsx",
                lineNumber: 92,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/ui/dashboard/companyStructure.tsx",
            lineNumber: 91,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(CompanyStructure, "h0Y0dCtKEx5YE/fgTvwrvcUntAY=", false, function() {
    return [
        useAnimation
    ];
});
_c = CompanyStructure;
var _c;
__turbopack_refresh__.register(_c, "CompanyStructure");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
"[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter)
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, !1), type;
            case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                    return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {}
        }
        return "";
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.ref;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, _ref, self, source, owner, props) {
        _ref = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== _ref ? _ref : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
        if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
            var children = config.children;
            if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
                for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren], type);
                Object.freeze && Object.freeze(children);
            } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else validateChildKeys(children, type);
        } else {
            children = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
            console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
        }
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        hasValidRef(config);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && (config = "function" === typeof type ? type.displayName || type.name || "Unknown" : type, children && defineKeyPropWarningGetter(maybeKey, config));
        return ReactElement(type, children, null, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node)) for(var i = 0; i < node.length; i++){
                var child = node[i];
                isValidElement(child) && validateExplicitKey(child, parentType);
            }
            else if (isValidElement(node)) node._store && (node._store.validated = 1);
            else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for(; !(node = i.next()).done;)isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = !0;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
                var stack = describeUnknownElementTypeFrameInDEV(element.type);
                prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
                return stack;
            };
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
    }
    function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
    }
    var React = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self);
    };
}();
}}),
"[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-cd22717c-20241013/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function ArrowLeftIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(ArrowLeftIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}}),
"[project]/node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-cd22717c-20241013/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function ArrowRightIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(ArrowRightIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}}),
"[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$cd22717c$2d$20241013$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", JSON.parse('{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false,"domains":[],"remotePatterns":[]}'))
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/image.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.0_react-dom@19.0.0-rc-cd22717c-20241013_react@19.0.0-rc-cd22717c-20241013__react@19.0.0-rc-cd22717c-20241013/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_2eaff5._.js.map