import express from "express";
import {getPesanan,
        getPesananById,
        createAkses,
        updatePesanan,
        deletePesanan,
        } 
from "../controller/PesananController.js";

const route = express.Router();
route.get('/pengguna', getPesanan);
route.get('/pengguna/:id', getPesananById);
route.post('/pengguna', createAkses);
route.patch('/pengguna/:id', updatePesanan);
route.delete('/pengguna/:id', deletePesanan);

export default route;