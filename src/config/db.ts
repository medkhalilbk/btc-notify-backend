import mongoose from "mongoose";
import 'dotenv/config'

export class ConnectionTOdb {
    constructor() {
        this.connect();
    } 
    connect() {
        mongoose
        .connect(process.env.MONGODB_URI || '', {
        })
        .then(() => {
            console.log("Database connection successful");
        })
        .catch((err) => {
            if(!process.env.MONGODB_URI){
            console.error("error reading env file")
            }
            console.error("Database connection error");
        });
    }
}