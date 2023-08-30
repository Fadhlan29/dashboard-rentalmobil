import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/database.js";
import PenggunaRoute from "./routes/PenggunaRoutes.js";
import HakAksesRoute from "./routes/HakAksesRoutes.js";
import MobilRoute from "./routes/MobilRoutes.js";
import PesananRoute from "./routes/PesananRoute.js";

dotenv.config();
const app = express();
app.use(cors({ 
    credentials: true, 
    origin: 'http://localhost:3000'
 }));
app.use(cookieParser());
app.use(express.json());
app.use(PenggunaRoute);
app.use(HakAksesRoute);
app.use(MobilRoute);
app.use(PesananRoute);


app.listen(5000, ()=> console.log('server berjalan'));