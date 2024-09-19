import { NextResponse } from "next/server";
import prisma from "prisma/db";


export async function POST() {
    return NextResponse.json({ token: "jwt-token" });
}

export async function GET() {

    const user = await prisma.user.findUnique({
        where: {
            id: 1
        }
    })

    return NextResponse.json({ user: user });
}