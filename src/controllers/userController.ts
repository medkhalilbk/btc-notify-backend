import { validateEmail } from '../helpers/validators'; 
import { Response, Request } from 'express';
import { addUserToNewsletterService } from '../services/userService';
export const userSubscriptionController = async (req: Request, response: Response) => {
         try {
            const {email} = req.body;
            if(!validateEmail(email) || !email || email === ""){ 
                return response.status(400).json({ error: "Invalid email" });
            }
            // Save user to the database 
        /*     await addUserToNewsletterService({email:email, notificationId: req.body.notificationId? req.body.notificationId : ""}) */
                
            return response.status(200).json({ message: "Subscription successful" });
         } catch (error) {
                /* return response.status(500).json({ error: error.message }); */
         }
};
