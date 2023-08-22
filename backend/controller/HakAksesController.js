import HakAkses from "../models/HakAksesModel.js";


export const getAkses = async(req, res) =>{
    try {
        const response = await HakAkses.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const getAksesById = async(req, res) =>{
    try {
        const response = await HakAkses.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createAkses = async(req, res) =>{
    try {
        await HakAkses.create(req.body);
        res.status(201).json({msg: "Akses Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateAkses = async(req, res) =>{
    try {
        await HakAkses.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Akses Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteAkses = async(req, res) =>{
    try {
        await HakAkses.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Akses Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}