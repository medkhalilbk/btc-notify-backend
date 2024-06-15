 import usermodel from '../models/userModel';



export const createUser = async (req: Request, res: Response) => {
    try {
        const user = new usermodel(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }