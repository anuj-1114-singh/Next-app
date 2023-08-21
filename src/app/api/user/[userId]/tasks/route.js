import { Task } from "@/models/task";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    const { userId } = params;
    try {
        const userTask = await Task.find({ userId: userId });

        return NextResponse.json(userTask)

    } catch (err) {
        return NextResponse.json({ result: "No result found" })
    }
}