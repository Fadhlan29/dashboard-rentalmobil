import express from "express";
import {getAkses,
        getAksesById,
        createAkses,
        updateAkses,
        deleteAkses
        } 
from "../controller/HakAksesController.js";

const route = express.Router();
route.get('/hak_akses', getAkses);
route.get('/hak_akses/:id', getAksesById);
route.post('/hak_akses', createAkses);
route.patch('/hak_akses/:id', updateAkses);
route.delete('/hak_akses/:id', deleteAkses);

export default route;