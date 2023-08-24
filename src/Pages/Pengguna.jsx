import React, { useState, useEffect , useRef} from "react";
import { NavbarDashboard } from "../components";
import { Sidebar } from "../components";
import "../styles/PenggunaStyles/style.css";
import axios from "axios";
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";   
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const Pengguna = () => {

  const [pengguna, setpengguna] = useState([]);
  const dt = useRef(null);
 
  useEffect(() => {
    getpengguna();
  }, []);
 
  const getpengguna = async () => {
    const response = await axios.get("http://localhost:5000/pengguna");
    setpengguna(response.data);
    console.log(response.data);
  };
 
  //
  const actionBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <Button icon="pi pi-pencil" rounded outlined className="mr-2" />
            <Button icon="pi pi-trash" rounded outlined severity="danger" />
        </React.Fragment>
    );
}; 
  // 

  return (
    <div className="container-pesanan">
      <Sidebar />
      <div className="content">
        <NavbarDashboard />
        <h1 className="content-title">Pengguna</h1>
        <div className="main-content">
        <div className="card">
                <DataTable ref={dt} value={pengguna} onSelectionChange={(e) => setpengguna(e.value)}
                        dataKey="id"  paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Pengguna">
                    <Column selectionMode="multiple" exportable={false}></Column>
                    <Column field="username" header="Username" sortable style={{ minWidth: '12rem', fontSize: '18px' }}></Column>
                    <Column field="email" header="Email" sortable style={{ minWidth: '16rem',fontSize: '18px' }}></Column>
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem',fontSize: '18px' }}></Column>
                </DataTable>
            </div>
        </div>
      </div>
    </div>    
  );
};



// $('document').ready(function(){

// });
export default Pengguna;
