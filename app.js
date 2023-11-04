import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
dotenv.config();

import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

if(process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, 'frontend/dist')));

    app.get("*", (req, res) => { res.sendFile(path.resolve(__dirname, "frontend" , "dist", "index.html"))});
} else {
    app.get("/", (req, res) => { res.send("Server is up and running") });
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})