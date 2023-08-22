import express from "express";
import {getPesanan,
        getPesananById,
        createAkses,
        updatePesanan,
        deletePesanan,
        } 
from "../controller/PesananController.js";

const route = express.Router();
route.get('/pesanan', getPesanan);
route.get('/pesanan/:id', getPesananById);
route.post('/pesanan', createAkses);
route.patch('/pesanan/:id', updatePesanan);
route.delete('/pesanan/:id', deletePesanan);

export default route;