import express from "express";
import {getPengguna,
        getPenggunaById,
        Login,
        register,
        updatePengguna,
        deletePengguna,
        } 
from "../controller/PenggunaController.js";


const route = express.Router();
route.get('/pengguna' ,getPengguna);
route.get('/pengguna/:id', getPenggunaById);
route.post('/pengguna', register);
route.post('/login', Login);
route.patch('/pengguna/:id', updatePengguna);
route.delete('/pengguna/:id', deletePengguna);

export default route;