import logo from './logo.svg';
import './App.css';

const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}  


function App(props) {
 const {employee}=props;
    
return(
  <div className="container">

    <div className='profile-img-container'>
    <img className='avatar' src={employee.profileImg} width='100' height='100' alt='profile-avatar' />
    </div>
    <div className='title-container'>
      <h1>{employee.name}</h1>
    </div>
    <div className='profile-info-container'>
      <label>
      Location
      </label>
      <strong>
        {employee.location}
      </strong>
    </div>
    <div className='profile-info-container'>
      <label>
      Blood group
      </label>
      <strong>
        {employee.bloodGroup}
      </strong>
    </div>
    <div className='profile-info-container'>
      <label>
      Age
      </label>
      <strong>
        {employee.age}
      </strong>
    </div>
    
  </div>
)
}



export default App;
