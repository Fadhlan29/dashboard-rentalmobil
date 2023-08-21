import Pengguna from "../models/PenggunaModel.js";


export const getPengguna = async(req, res) =>{
    try {
        const response = await Pengguna.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const getPenggunaById = async(req, res) =>{
    try {
        const response = await Pengguna.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createPengguna = async(req, res) =>{
    try {
        await Pengguna.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updatePengguna = async(req, res) =>{
    try {
        await Pengguna.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Pengguna Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deletePengguna = async(req, res) =>{
    try {
        await Pengguna.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Pengguna Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}