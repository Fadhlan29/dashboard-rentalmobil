import { response } from "express";
import Pengguna from "../models/PenggunaModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const getPengguna = async(req, res) =>{
    try {
        const response = await Pengguna.findAll({
            attributes:['id','username','email']
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const login = async(req, res) => {
    const {username,password}= req.body;
    try {
        const response = await Pengguna.findAll({
            where: {
                username: username
            }
        });
        const match = await bcrypt.compare(password, response[0].password);
        if(!match) return res.status(400).json({msg: "Password Salah"});
        const penggunaId = response[0].id;
        const user = response[0].username;
        const email = response[0].email;
        const accessToken = jwt.sign({penggunaId,user,email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({penggunaId,user,email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Pengguna.update({refresh_token: refreshToken}, {
            where:{
                id: penggunaId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Username tidak ditemukan"});
    }
}

export const register = async(req,res) =>{
    const {username,password,email,id_akses}= req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password,salt);
    try {
        await Pengguna.create({
            username: username,
            password: hashPassword,
            email: email,
            id_akses: id_akses
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}

export const logout = async(req,res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const response = await Pengguna.findAll({
         where:{
            refresh_token: refreshToken
        }
    });
     if(!response[0]) return res.sendStatus(204);
    const penggunaId = response[0].id;
    await Pengguna.update({refreshToken: null},{
        where : {
                id: penggunaId
        }
    });
    res.clearCookies('refreshToken');
    return res.sendStatus(200);
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