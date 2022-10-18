import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts"

const app = new Application()
const router = new Router()
const port = 8000

router
  .get("/",(ctx) => {
    ctx.response.body = "Hello";
   })

  .get("/hello", (ctx) => {
    ctx.response.body = "World";
   });

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`http://localhost:${port}/`)
app.listen({port: port})