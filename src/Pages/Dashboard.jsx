import React, { useState } from 'react'
import '../styles/DashboardStyles/style.css'
import logo from '../images/logo/logo.png'
import { BiBell, BiCog, BiSearch } from 'react-icons/bi'


const Dashboard = () => {

  const [notification, setNotification] = useState(true)

  const handleNotification = () => {
    setNotification(!notification)
  }

  return (
    <div className='dashboard-wrap'>

    {/* sidebar */}
      <div className='sidebar'>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>

        <div className='list-item'>
          <div className='others'>
            <h2 className='header-list'>OTHERS</h2>
            <ul>
              <li>
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
              <div className={!notification ? 'notification-content' : 'notification-content-hide'}>
                <p>Notification</p>
              </div>
            </div>
          </div>
        </header>
        {/* content header end */}

      </div>
    {/* content end */}
    </div>
  )
}

export default Dashboard