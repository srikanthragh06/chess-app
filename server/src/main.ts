import express from "express";
import cors from "cors";
import { consoleLogCyan } from "./utils/colorConsoleLogging";
import bodyParser from "body-parser";
import {
    globalErrorHandler,
    incorrectJSONFormatHandler,
    urlNotFoundHandler,
} from "./middlewares/handlers";
import { logRequest } from "./utils/logging";
import dotenv from "dotenv";
import { testDatabaseConnection } from "./db/postgres";
import authRouter from "./routers/auth";
import userRouter from "./routers/user";
import { handleIOConnection } from "./sockets/main";
import { app, io, server } from "./server";
import { testRedisConnection } from "./redis/client";

io.on("connection", handleIOConnection);

dotenv.config();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(logRequest);

app.use(incorrectJSONFormatHandler);

// main routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.use("/*", urlNotFoundHandler);
app.use(globalErrorHandler);

const PORT = process.env.SERVER_PORT;
server.listen(PORT, () => {
    consoleLogCyan(`Server is running on localhost: ${PORT}`);
    testDatabaseConnection();
    testRedisConnection();
});
