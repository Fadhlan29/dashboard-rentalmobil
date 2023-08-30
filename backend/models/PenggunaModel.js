import { Sequelize } from "sequelize";
import db from "../config/database.js";
import HakAkses from "./HakAksesModel.js";

const {DataTypes} = Sequelize;

const Pengguna = db.define('pengguna',{
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    refresh_token: DataTypes.TEXT,
},{
    freezeTableName:true
});

Pengguna.belongsTo(HakAkses, { foreignKey: 'id_akses' });
export default Pengguna;

// (async()=>{
//     await db.sync();
// })();