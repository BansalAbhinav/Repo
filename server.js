import { configDotenv } from "dotenv";
import express from "express"
import { configureCors } from "./config/corsConfig.js";
import { addTimeStamp, requestLogger } from "./middleware/customMiddleware.js";
import { globalErrorHandler } from "./middleware/errorHandler.js";
import { urlVersioning } from "./middleware/apiVersioning.js";
configDotenv();

const app = express();
const PORT = process.env.PORT || 4000;

// express json middleware
app.use(configureCors());
app.use(express.json());
 

app.use('/api/v1',urlVersioning('v1'));

app.use(requestLogger);
app.use(addTimeStamp)


app.use(globalErrorHandler)
app.listen(PORT,(req,res)=>{
  console.log(`Server is running at ${PORT}`);
    
})