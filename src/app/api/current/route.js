import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
export async function GET(request) {
    console.log("Hiii3333")
    const authToken = request.cookies.get("authToken")?.value;
    console.log(authToken);
    const data = jwt.verify(authToken, process.env.JWT_TOKEN);
    console.log(data + "-----");
    const user = await User.findById(data._id).select("-password");
    //   console.log("test");
    console.log(user);
    return NextResponse.json(user);
}
