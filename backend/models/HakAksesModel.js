import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const HakAkses = db.define('hak_akses',{
    nama_akses: DataTypes.STRING
},{
    freezeTableName:true
});
export default HakAkses;

(async()=>{
    await db.sync();
})();