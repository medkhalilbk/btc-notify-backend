import { ConnectionTOdb } from './config/db';
import express from "express";
import bodyParser from 'body-parser';
import expressJSDocSwagger from "express-jsdoc-swagger";
import helmet from "helmet";
import jsDocOptions from "./config/jsDoc"; 
import apiRoutes from "./routes/apiRoutes";

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
app.use(jsonParser);
app.use(urlencodedParser);
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

 app.use("/api", apiRoutes);

app.listen(3000, () => {
  console.log("Express server initialized");
});
