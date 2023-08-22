import express from "express";
import {getMobil,
        getMobilById,
        createMobil,
        updateMobil,
        deleteMobil
        } 
from "../controller/MobilController.js";

const route = express.Router();
route.get('/mobil', getMobil);
route.get('/mobil/:id', getMobilById);
route.post('/mobil', createMobil);
route.patch('/mobil/:id', updateMobil);
route.delete('/mobil/:id', deleteMobil);

export default route;