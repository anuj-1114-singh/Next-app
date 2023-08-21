import { mongoDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

mongoDb();
export async function GET(request) {
    let data = []
    try {
        data = await User.find();
        return NextResponse.json({ data });
    } catch (err) {
        return NextResponse.json({ message: "ka re babu" });
    }

}

export async function POST(request) {
    const { name, email, password, about, profileURL } = await request.json();
    const user = new User({ name, email, password, about, profileURL });
    try {

        user.password = bcrypt.hashSync(user.password, 10);
        const createdUser = await user.save();
        return NextResponse.json(createdUser, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: "not created" }, { status: 500 });
    }
}