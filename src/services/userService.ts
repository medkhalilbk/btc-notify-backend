import userModel from "../models/userModel";
import { IUser } from "../types/schemas";

export const addUserToNewsletterService = async (user: IUser) =>  {
   try { 
    const userFromDb = await userModel.findOne({email: user.email})
    console.log(userFromDb)
    if(userFromDb) {
      console.log('user updated')
      return  userModel.updateOne({email: user.email}, user)
    }
    console.log('user created')
    return  userModel.create(user)

   } catch (error) {
    console.log(error)
    throw error
   }
}

export const removeUserFromNewsletterService = async (email:string) =>  {
    try { 
     const userFromDb = await userModel.findOne({email: email})
     
     if(!userFromDb) { 
        throw new Error('User not found')
     }
     const updatedUser = userModel.updateOne({email: email}, {isSubscribed: false})
     return updatedUser
 
    } catch (error) {
     console.log(error)
     throw error
    }
}
 