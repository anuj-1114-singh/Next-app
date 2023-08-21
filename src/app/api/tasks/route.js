import { mongoDb } from "@/helper/db";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

mongoDb();
export async function GET(request) {
    let data = []
    try {
        data = await Task.find();
        return NextResponse.json({ data, result: "ka re babu" });
    } catch (err) {
        return NextResponse.json({ message: "ka re babu" });
    }

}

export async function POST(request) {
    const { title, content, userId, status } = await request.json();
    console.log({ title, content, userId, status })

    const authToken = request.cookies.get("authToken")?.value;

    const user1 = jwt.verify(authToken, process.env.JWT_TOKEN);
    //console.log(user1);

    try {

        const task = new Task({
            title,
            content,
            userId: user1._id,
            status,
        });
        //console.log(task);
        //console.log({ title, content, userId })
        const data = await task.save();
        return NextResponse.json(data, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: "not created" });
    }
}