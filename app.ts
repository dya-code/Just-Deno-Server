import { serve } from "https://deno.land/std@0.160.0/http/mod.ts";

const port = 8080
serve((_req) => new Response("Hello, world!!"), { port: port });
console.log(`http://localhost:${port}/`)