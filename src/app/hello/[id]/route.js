import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
    console.log(content.params.id)
    let data = user
    data = user.filter((item) => {
        return item.id == content.params.id;
    })
    console.log(data)
    return NextResponse.json(data);
}