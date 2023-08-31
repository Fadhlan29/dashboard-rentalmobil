import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Pengguna from "./PenggunaModel.js";
import Mobil from "./MobilModel.js";


const {DataTypes} = Sequelize;

const Pesanan = db.define('pesanan',{
    nama: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    alamat: DataTypes.STRING,
    hari: DataTypes.INTEGER,
    supir: DataTypes.STRING,
    total_harga: DataTypes.BIGINT,
    status: DataTypes.STRING,
},{
    freezeTableName:true
});

Pesanan.belongsTo(Pengguna, { foreignKey: 'id_pengguna' });
Pesanan.belongsTo(Mobil, { foreignKey: 'id_mobil' });
export default Pesanan;

// (async()=>{
//     await db.sync();
// })();