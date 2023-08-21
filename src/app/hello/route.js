
import { mongoDb } from "@/helper/db";
import { user } from "@/util/db";
import { NextResponse } from "next/server";


export function GET(request) {
    const data = user
    console.log(data)
    return NextResponse.json(data);
}

export function POST(request) {

    return NextResponse.json({ "name": "babu laal" });
}