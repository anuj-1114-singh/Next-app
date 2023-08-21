import { User } from "@/models/user";
import { NextResponse } from "next/server";
import { mongoDb } from "@/helper/db";
mongoDb();

export async function GET(request, { params }) {
    const { userId } = params;
    try {
        const data = await User.findById(userId);
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({
            message: "Not Found",
            success: false
        })
    }

}

export async function DELETE(request, { params }) {
    const { userId } = params;
    try {
        await User.deleteOne({ _id: userId, });
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
    const { userId } = params;
    const { name, email, about, profileURL } = await request.json();
    try {
        const user = await User.findById(userId);
        user.name = name;
        user.email = email;
        user.about = about;
        user.profileURL = profileURL;

        const data = await user.save();
        console.log(data);
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({
            message: "Not deleted",
            success: false
        })
    }
}