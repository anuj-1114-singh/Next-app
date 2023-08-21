import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { mongoDb } from "@/helper/db";
mongoDb();

export async function GET(request, { params }) {
    const { taskId } = params;
    try {
        const data = await Task.findById(taskId);
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({
            message: "Not Found",
            success: false
        })
    }

}

export async function DELETE(request, { params }) {
    const { taskId } = params;
    try {
        await Task.deleteOne({ _id: taskId, });
        return NextResponse.json({
            message: " deleted",
            success: true
        })
    } catch (err) {
        return NextResponse.json({
            message: "Not deleted",
            success: false
        })
    }
}
export async function PUT(request, { params }) {
    const { taskId } = params;
    const { title, content, status } = await request.json();
    try {
        const task = await Task.findById(taskId);
        task.title = title;
        task.content = content;
        task.status = status;

        const data = await task.save();
        console.log(data);
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({
            message: "Not deleted",
            success: false
        })
    }
}