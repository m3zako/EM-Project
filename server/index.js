import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import eventRoutes from "./routes/events.js"
import rsoRoutes from "./routes/rsos.js"
import universityRoutes from "./routes/universities.js"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

//middlewares
app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Credentials", "true");
    next();
})
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true
}));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/rsos", rsoRoutes);
app.use("/api/universities", universityRoutes);

app.listen(8800, () => {
    console.log("Serving on 8800");
});