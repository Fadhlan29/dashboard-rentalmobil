import React, { useEffect, useState } from 'react'
import '../styles/DashboardStyles/style.css'
import ChartDashboard from '../components/ChartDashboard'
import { NavbarDashboard, Sidebar } from '../components'
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate  } from "react-router-dom";


const Dashboard = () => {
  const [username, setName] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    refreshToken();
  },[]);

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      console.log(response);
      // setToken(response.data.accessToken);
      // const decoded = jwt_decode(response.data.accessToken);
    } catch (error) {
      
    }
  }


  const dataChart = {
    data1: [80, 5, 25, 65, 8, 79, 4, 40, 78, 1, 21, 50, 100, 55, 6],
    data2: [30, 120 , 35, 10, 90, 5, 40, 6, 50, 20, 78, 3, 90, 8, 65],
    data3: [5, 40, 10, 30, 15, 50, 3, 45, 20, 55, 6, 25, 35, 8, 60],
    data4: [55, 3, 40, 20, 50, 8, 65, 6, 35, 10, 45, 25, 30, 15, 60]
  }

  return (
    <section className='dashboard'>

    {/* sidebar */}
      <Sidebar className='sidebar'></Sidebar>
    {/* sidebar end */}

    {/* content */}
      <div className='main'>

        {/* content header */}
        <NavbarDashboard />
        {/* content header end */}

        {/* main content */}
        <h1 className='content-title'>Dashboard</h1>
        <div className='data-chart'>
          <ChartDashboard 
          title='Total Users' 
          dataNumber='100,221' 
          percentage='14%' 
          years='2020'
          data={dataChart.data1}/>

          <ChartDashboard 
          title='Sessions' 
          dataNumber='40%' 
          percentage='1.2%' 
          years='2020'
          data={dataChart.data2}/>

          <ChartDashboard 
          title='Vists' 
          dataNumber='300,527' 
          percentage='10%' 
          years='2020'
          data={dataChart.data3}/>

          <ChartDashboard 
          title='Articles' 
          dataNumber='600,429' 
          percentage='30%' 
          years='2020'
          data={dataChart.data4}/>
        </div>
        {/* main content end */}

      </div>
    {/* content end */}

    </section>
  )
}

export default Dashboard