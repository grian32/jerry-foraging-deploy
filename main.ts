import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

let html = `
<!DOCTYPE html>

<head>
    <title>Jerry Box Foraging Calculator</title>
    <meta charset="utf-8">
    <meta name="description" content="Calculates the amount of Jerry Boxes/coins needed for the specified foraging levels"/>
    <meta name="author" content="Tryobyte_"/>

    <!-- Open Graph / Facebook tags-->
    <meta name="og:title" content="Jerry Box Foraging Calculator"/>
    <meta name="og:description" content="Calculates the amount of Jerry Boxes/coins needed for the specified foraging levels"/>
    <meta property="og:image" content="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0059%2F8835%2F2052%2Fproducts%2FShumard_Oak_1_1024x1024.jpg%3Fv%3D1605224300&f=1&nofb=1&ipt=208ae54e7ea5fc35ea359b6f5dc20c55633e374f1116486959c2bbc2f5cb7715&ipo=images"/>
</head>`


serve(async (req: Request) => {
    new Response(html, {
        headers: {
            "content-type": "text/html"
        }
    })
});
