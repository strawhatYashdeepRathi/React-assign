import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow="<"
var rightArrow=">"
var Status={
  0: "In Progress",
  1: "Completed",
  2: "Cancelled"
}

var Details={    
  "name":"Allen Ford" ,
  "employeeid":5152 ,
  "appointmenton":"9:00AM (24-05-2016)" ,
  "email":"allenford@email.cm" ,
  "phone":91877665678766 ,
  "status":Status[0] ,
  "door": "Mark",
  "time": "10:30AM (24-05-2016)" ,
  "avatar": "https://www.w3schools.com/howto/img_avatar.png",
  "title": "Boltaart Bosbessan",
  "description": "zawesxdcrfv njmhbgvfcdxcfvgbvd tfvcxzesxzeszexrd ctfvbnjnniuyub x4we5xrcytvy vrecr vub"   
}
function App() {
  return (
    <div className="site-container">

    <div className='order-details'>
      <div className='nav'>
        <div className='nav-container'>
          <a href='#' className='nav-back-arrow'>{arrow}</a>
          <h1 className='nav-title'>{Details.name}</h1>
          <span className='nav-text'>{Details.employeeid}</span>
          <button className='nav-btn'>Print</button>
        </div>
      </div>


      <div className='container'>
        <div className='customer-info block'>
          <p className='text text2'>
            <span>Appointment On: </span>
            {
              Details.appointmenton
            }
          </p>
          <p className='text text2'>
            <span>E-mail: </span>
            {
              Details.email
            }
          </p>
          <p className='text text2'>
            <span>Phone: </span>
            {
              Details.phone
            }
          </p>
          
        </div>
        <div className='order-info grid block'>
          <div className='unit one-third'>
            <p className='text text-label'>Status</p>
            <li className='text order-status'>{Details.status}</li>
          </div>
          <div className='unit one-third'>
            <p className='text text-label'>Door</p>
            <p className='text order-status'>{Details.door}</p>
          </div>
          <div className='unit one-third'>
            <p className='text text-label'>Time</p>
            <p className='text order-status'>{Details.time}</p>
          </div>

        </div>
        <ul className='product-list block'>
          <li className='product'>
            <label className='img custom-checkbox'>
              <input type='checkbox' className='product-input' value='on'></input>
              <span className='cutom-checkbox-indicator'></span>
              <img src={Details.avatar} width='100' height='100'></img>
            </label>
            <a href='#' className='product-desc'>
              <span className='product-arrow'>
                {rightArrow}
              </span>
              <div className='product-info'>
                <h3 className='product-title text'>
                  {Details.title}
                </h3>
                <p className='text-help text'>
                {Details.description}
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    </div>
  );
}

export default App;
