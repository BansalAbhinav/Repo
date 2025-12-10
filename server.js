import { configDotenv } from "dotenv";
import express from "express";
import { configureCors } from "./config/corsConfig.js";
import { addTimeStamp, requestLogger } from "./middleware/customMiddleware.js";
import { globalErrorHandler } from "./middleware/errorHandler.js";
import { urlVersioning } from "./middleware/apiVersioning.js";
import { createBasicRateLimiter } from "./middleware/rateLimit.js";
import itemRouter from "./routes/item.routes.js";
configDotenv();

const app = express();
const PORT = process.env.PORT || 4000;

// express json middleware
app.use(requestLogger);
app.use(addTimeStamp);

app.use(configureCors());
app.use(createBasicRateLimiter(2, 15 * 60 * 1000)); //100 request per 15 minutes
app.use(express.json());
app.use(urlVersioning("v1"));

app.use("/api/v1", itemRouter);
app.use(globalErrorHandler);

app.listen(PORT, (req, res) => {
  console.log(`Server is running at ${PORT}`);
});
