import { Schema } from "mongoose"
import { Model } from 'mongoose'


export interface IUser {
    _id?: Object
    email: string; 
    createdAt: Date;
    updatedAt: Date;
    isSubscribed: boolean;
}


const userSchema = new Schema<IUser>({ 
    email: { type: String, required: true },
    createdAt: { type: Date},
    updatedAt: { type: Date },
    isSubscribed: { type: Boolean, required: true }

})
