import mongoose from "mongoose";
import { User } from "@/models/user";
export const mongoDb = async () => {
    try {

        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager"
        });
        console.log("db connected");
        console.log("connected with host:" + connection.host);
        //testing the database connection
        /*   const userData = new User({
               name: "Anuj",
               email: "anuj@gmail.com",
               password: "anuj"
           })
           const data = await userData.save();*/

    } catch (err) {
        console.log("failed to connect");
    }
}