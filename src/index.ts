import { ConnectionTOdb } from './config/db';
import express from "express";
import type { Request, Response } from "express";
import expressJSDocSwagger from "express-jsdoc-swagger";
import helmet from "helmet";
import jsDocOptions from "./config/jsDoc"; 
const app = express();
app.use(helmet({
  contentSecurityPolicy: {
    directives:{
      "script-src": ["'self'", "https://apis.google.com"],
    }
  }
}));

expressJSDocSwagger(app)(jsDocOptions);
const dbConnection = new ConnectionTOdb(); 
app.get("/", (req, res) => {
  res.send("Welcome to the API. Use /api for API endpoints.");
});

app.post("/subscribe", (req : Request, res: Response) => {

  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Express server initialized");
});
