import Mobil from "../models/MobilModel.js";


export const getMobil = async(req, res) =>{
    try {
        const response = await Mobil.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const getMobilById = async(req, res) =>{
    try {
        const response = await Mobil.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createMobil = async(req, res) =>{
    try {
        await Mobil.create(req.body);
        res.status(201).json({msg: "Mobil Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateMobil = async(req, res) =>{
    try {
        await Mobil.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Mobil Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteMobil = async(req, res) =>{
    try {
        await Mobil.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Akses Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}