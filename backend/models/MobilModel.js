import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Mobil = db.define('mobil',{
    jenis_mobil: DataTypes.STRING,
    foto_mobil: DataTypes.TEXT,
    nopol: DataTypes.STRING,
    harga_sewa_mobil: DataTypes.BIGINT,
},{
    freezeTableName:true
});

export default Mobil;

(async()=>{
    await db.sync();
})();