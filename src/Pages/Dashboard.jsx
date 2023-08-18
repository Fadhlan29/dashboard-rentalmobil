import React, { useState } from 'react'
import '../styles/DashboardStyles/style.css'
import logo from '../images/logo/logo.png'
import { BiBell, BiCog, BiSearch, BiUser } from 'react-icons/bi'
import ChartDashboard from '../components/ChartDashboard'


const Dashboard = () => {

  const [notification, setNotification] = useState(false)
  const [profile, setProfile] = useState(false)

  const handleNotification = () => {
    setNotification(!notification)
    setProfile(false)
  };

  const handleProfile = () => {
    setProfile(!profile)
    setNotification(false)
  };

  const dataChart = {
    data1 : [3, 2, 8, 5, 9, 2, 5, 1, 7, 9, 8],
    data2: [4, 9, 2, 5, 3, 2, 7, 1, 7, 3, 6],
    data3: [7, 4, 8, 5, 4, 2, 5, 6, 7, 9, 3],
    data4: [4, 2, 7, 5, 7, 3, 5, 1, 7, 3, 8]
  }

  return (
    <section className='dashboard'>

    {/* sidebar */}
      <div className='sidebar'>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>

        <div className='list-item'>
          <div className='others'>
            <h2 className='header-others'>OTHERS</h2>
            <ul>
              <li className='others-list'>
                <BiCog size={25} color='#6c6c6c'/>
                <h2>Settings</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>    
    {/* sidebar end */}

    {/* content */}
      <div className='main'>

        {/* content header */}
        <header className='header-main'>
          <div className='left'>
            <form>
              <input type="text" placeholder='Search'/>
              <button>
                <BiSearch size={20} color='#fff'/>
              </button>
            </form>
          </div>

          <div className='right'>
            <div className='notification'>
              <button className='icon-right' onClick={handleNotification}>
                <BiBell size={25} color='#6c6c6c'/>
              </button>
              <div className={notification ? 'notification-content' : 'notification-content-hide'}>
                <p>Notification</p>
              </div>
            </div>
            <div className='profile'>
              <button className='icon-right' onClick={handleProfile}>
                <BiUser size={25} color='#6c6c6c'/>
              </button>
              <div className={profile ? 'profile-content' : 'profile-content-hide'}>
                <p>profile</p>
              </div>
            </div>
          </div>
        </header>
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
          title='Total Users' 
          dataNumber='300,527' 
          percentage='10%' 
          years='2020'
          data={dataChart.data3}/>

          <ChartDashboard 
          title='Total Users' 
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