import type {APIRoute} from "astro";

export const GET: APIRoute = async (context) => {
    console.log("API: GET /api")
    console.log("import.meta.env.VAR", import.meta.env.VAR)
    console.log("import.meta.env", import.meta.env)
    console.log("context.locals", context.locals)
    console.log("context.locals.runtime.env", context.locals.runtime?.env)
    return new Response(JSON.stringify({
        "import.meta.env.VAR": import.meta.env.VAR,
        "context.locals.runtime.env.VAR": context.locals.runtime?.env.VAR,
    }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
