import { NextResponse } from "next/server";
import { mongoDb } from "@/helper/db";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

mongoDb();

export async function POST(request) {
    console.log("login api");
    const { email, password } = await request.json();

    try {
        // 1.get user
        const user = await User.findOne({
            email: email,
        });
        if (user == null) {
            console.log("ka re")
            throw new Error("Incorrect Email")
        }
        const passMatched = bcrypt.compareSync(password, user.password);

        //password matching
        console.log(passMatched);
        if (!passMatched) {
            throw new Error("Incorrect Password");
        }

        // jwt token creation
        const token = jwt.sign({
            _id: user._id,
            name: user.name
        }, process.env.JWT_TOKEN)
        console.log(user.name);
        console.log(token);

        const response = NextResponse.json({
            message: "Login success !!",
            success: true,
            user: user,
        });

        response.cookies.set("authToken", token, {
            expiresIn: "1d",
            httpOnly: true,
        });

        return response;
    } catch (err) {
        let mes = "No user found"
        if (err.message != false) {
            mes = err.message
        }
        return NextResponse.json({
            message: mes,
            success: false
        }, { status: 500 });
    }

    // 2.password check
    /*const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Password not matched !!");
    }
 
    // 3. generate token
 
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );
 
    // 4.create nextresponse-- cookie
 
    const response = NextResponse.json({
      message: "Login success !!",
      success: true,
      user: user,
    });
 
    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });
 
    console.log(user);
    console.log(token);
 
    return response;*/

}

