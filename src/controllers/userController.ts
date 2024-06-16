import { validateEmail } from '../helpers/validators'; 
import { Response, Request } from 'express';
import { addUserToNewsletterService, removeUserFromNewsletterService } from '../services/userService';
import { messageGenerators } from '../helpers/messageGenerators';
import { read } from 'fs';
export const userSubscriptionController = async (req: Request, response: Response) => {
         try {
            const {email} = req.body;
            if(!validateEmail(email) || !email || email === ""){ 
                return response.status(400).json({ error: "Invalid email" });
            }
            // Save user to the database 
               let test = await addUserToNewsletterService({email: email, notificationId: req.body.notificationId, isSubscribed: true});   
               console.log(test);
               let message = await messageGenerators("subscriptionSuccess");
               return response.status(200).json({ message:message  });
         } catch (error) {
            console.log(error);
            let message = await messageGenerators("error");
            return response.status(500).json({ message: message });
                /* return response.status(500).json({ error: error.message }); */
         }
};
export const userUnsubscriptionController = async (req: Request, response: Response) => {
    try {
       const {email} = req.body;
       if(!validateEmail(email) || !email || email === ""){ 
           return response.status(400).json({ error: "Invalid email" });
       }
       // Save user to the database 
          let test = await removeUserFromNewsletterService(email);   
          console.log(test);
          let message = await messageGenerators("subscriptionSuccess");
          return response.status(200).json({ message:message  });
    } catch (error) {
       console.log(error);
       let message = await messageGenerators("error");
       return response.status(500).json({ message: message });
           /* return response.status(500).json({ error: error.message }); */
    }
};
export const userSetStopLossController = async (req: Request, response: Response) => {
    try {
       const {email} = req.params;
         if(!validateEmail(email) || !email || email === ""){ 
              return response.status(400).json({ error: "Invalid email" });
         }
         if(!req.body.maxValue || !req.body.minValue) {
              return response.status(400).json({ error: "Invalid values" });
         } 
         
    } catch (error) { 
        console.log(error);
        let message = await messageGenerators("error");
        return response.status(500).json({ message: message }); 
    }
}
