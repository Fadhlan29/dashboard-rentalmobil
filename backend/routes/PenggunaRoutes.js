import express from "express";
import {getPengguna,
        getPenggunaById,
        createPengguna,
        updatePengguna,
        deletePengguna,
        } 
from "../controller/PenggunaController.js";

const route = express.Router();
route.get('/pengguna', getPengguna);
route.get('/pengguna/:id', getPenggunaById);
route.post('/pengguna', createPengguna);
route.patch('/pengguna/:id', updatePengguna);
route.delete('/pengguna/:id', deletePengguna);

export default route;