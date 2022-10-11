import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

serve(async (req: Request) => {
    let text = await (await fetch("file:///main.html")).text()

    new Response(text)
});
