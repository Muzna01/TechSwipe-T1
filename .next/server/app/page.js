const CHUNK_PUBLIC_PATH = "server/app/page.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_101e1c._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__adba9d._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__6534d8._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__671155._.css");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_client_components_not-found-error_b76de5.js");
runtime.loadChunk("server/chunks/ssr/_f43832._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { MODULE_0 => \"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_1 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
