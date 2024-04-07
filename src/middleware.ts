import {defineMiddleware} from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
    console.log("Middleware: onRequest")
    console.log("import.meta.env.VAR", import.meta.env.VAR)
    console.log("import.meta.env", import.meta.env)
    console.log("context.locals.runtime.env.VAR", context.locals.runtime?.env.VAR)
    context.locals.cfVar = context.locals.runtime?.env.VAR
    return next();
})
