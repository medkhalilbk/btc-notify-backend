import userModel from "../models/userModel";
import { IUser } from "../types/schemas";

export const addUserToNewsletterService = async (user: IUser) =>  {
   try { 
    const userFromDb = await userModel.find({email: user.email})
    if(userFromDb) {
      return  userModel.updateOne({email: user.email}, user)
    }
    return  userModel.create(user)

   } catch (error) {
    throw error
   }
}


 