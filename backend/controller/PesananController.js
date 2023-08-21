import Pesanan from "../models/PesananModel.js";


export const getPesanan = async(req, res) =>{
    try {
        const response = await Pesanan.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const getPesananById = async(req, res) =>{
    try {
        const response = await Pesanan.findOne({
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
        await Pesanan.create(req.body);
        res.status(201).json({msg: "Pesanan Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updatePesanan = async(req, res) =>{
    try {
        await Pesanan.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Pesanan Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deletePesanan = async(req, res) =>{
    try {
        await Pesanan.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Pesanan Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}