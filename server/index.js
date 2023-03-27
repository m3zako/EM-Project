import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import eventRoutes from "./routes/events.js"
import rsoRoutes from "./routes/rsos.js"
import universityRoutes from "./routes/universities.js"

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/rsos", rsoRoutes);
app.use("/api/universities", universityRoutes);

app.listen(8800, () => {
    console.log("Serving on 8800");
});