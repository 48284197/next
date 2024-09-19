import { userAgent,NextResponse, NextRequest,URLPattern } from "next/server";


export async function GET(request: NextRequest) {
    


    return NextResponse.json({ a:new URLPattern() });


}


