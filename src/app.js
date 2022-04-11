import express from "express";
import primeRoutes from "./routes/prime.routes";

const app = express();
//routes
app.use("/api/prime", primeRoutes);

export default app;
