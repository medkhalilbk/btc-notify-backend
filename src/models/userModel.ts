import { Schema,model } from "mongoose";
import { IUser } from "../types/schemas";


const schema = new Schema<IUser>({
    email: {type:String, required:true},
    isSubscribed: {type:Boolean, default:false},
    notificationId: {type:String},
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now},
})

const userModel = model<IUser>('User', schema)

export default userModel;