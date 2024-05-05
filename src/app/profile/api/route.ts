import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const reqHeader = new Headers(request.headers);
    const headersList = headers();
    const theme = request.cookies.get("theme");

    console.log(reqHeader.get("Authorization"))
    console.log(headersList.get("Authorization"))
    console.log(theme)
    
    return new Response(
        "<h1>Hello World</h1>",
        {
            status: 200,
            headers: {
                "Content-Type": "text/html",
                "Set-Cookie": "theme=dark"
            }
        },
       
    )
}