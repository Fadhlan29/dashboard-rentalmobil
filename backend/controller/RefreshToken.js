import Pengguna from "../models/PenggunaModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async(req,res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const response = await Pengguna.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!response[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const penggunaId = response[0].id;
            const user = response[0].username;
            const email = response[0].email;
            const accessToken = jwt.sign({penggunaId, user,email}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });
            res.json({ accessToken });
        })
        
    } catch (error) {
        console.log(error);
    }
}