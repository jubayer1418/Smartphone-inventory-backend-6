import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import { globalErrorHandle } from "./app/middleware/globalErrorHandle";
import { notFound } from "./app/middleware/notFound";
import { router } from "./app/routes";

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://smartphone-inventory-fronted-6.vercel.app"],
    credentials: true,
  })
);
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Assignment-6");
});
app.use(globalErrorHandle);
app.use(notFound);
export default app;
