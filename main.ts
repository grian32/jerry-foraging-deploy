import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

serve(async (req: Request) => {
    let text = await (await fetch("file:///src/main.html")).text()

    new Response(text, {
        headers: {
            "content-type": "text/html"
        }
    })
});
