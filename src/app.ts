import express from "express";
import router from "./routes/index.route.js";
import loggerMiddleware from "./utils/logger.js";
import errorMiddleware from "./utils/errorMiddleware.js";
import helmet from "helmet";
import startMongo from "./database/startMongo.js";

const app = express();

await startMongo();
app.set("views", "src/views");
app.set("view engine", "pug");
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(loggerMiddleware);
app.use(errorMiddleware);

export default app;
