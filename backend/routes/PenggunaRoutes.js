import express from "express";
import {getPengguna,
        getPenggunaById,
        register,
        login,
        updatePengguna,
        deletePengguna,
        } 
from "../controller/PenggunaController.js";
import { VeryfyToken } from "../middleware/VeryfyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";


const route = express.Router();
route.get('/pengguna' ,VeryfyToken ,getPengguna);
route.get('/pengguna/:id', getPenggunaById);
route.post('/pengguna', register);
route.post('/login', login);
route.get('/token', refreshToken);
route.patch('/pengguna/:id', updatePengguna);
route.delete('/pengguna/:id', deletePengguna);

export default route;