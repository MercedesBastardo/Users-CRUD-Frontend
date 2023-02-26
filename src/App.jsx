import UserForm from './components/UserForm'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import UserList from './components/UserList';
import Button from 'react-bootstrap/Button';

function App() {
  
  const [usersData, setUsersData] = useState([]);
  const [usersSelected, setUsersSelected] = useState(null);
  
  useEffect(() => {
      axios
      .get("https://users-crud-glha.onrender.com/user")
      .then(resp => setUsersData(resp?.data))
      .catch(error => console.error(error))
  }, []);
  const getUsersData = () => {
    axios
    .get("https://users-crud-glha.onrender.com/user")
    .then(resp => setUsersData(resp?.data))
    .catch(error => console.error(error))  
  }

  const createUser = (data) => {
    axios
    .post("https://users-crud-glha.onrender.com/user", data)
    .then(() => getUsersData())
    .catch((error) => console.error(error))
  }
  const deleteUser = (id) => {
    axios
    .delete(`https://users-crud-glha.onrender.com/user/${id}`)
    .then(() => getUsersData())
    .catch((error) => console.error(error))
  }
  const selectUser = (user) => {
    setUsersSelected(user)
  }
  const upDateUser= (data) => {
    const index = usersData.findIndex((user) => user.id===data.id)
    usersData[index] = data;
    setUsersData(...[usersData]);
    setUsersSelected(null);
  }

  return (
    <>
    
    <nav>
        <h1>USER DATABASE</h1>
        <div className='btn'>
        <Button variant="secondary"> <a href="#userForm">New User</a></Button>
        <Button variant="primary"> <a href="#userList">Alls Users</a></Button>
        </div>
    </nav>
    <div className="App">
        <h1 id="userForm">User Register</h1>
        <UserForm 
        createUser={(data) => createUser(data)}
        usersSelected={usersSelected}
        upDateUser={upDateUser}/>
        <h1 id="userList">User List</h1>
        <UserList 
        usersData={usersData}
        deleteUser={deleteUser}
        selectUser={selectUser}
        />
    </div>
    <footer>
      <h2>Autor: <span>Mercedes Bastardo</span></h2>
      <div className='icons'>
      <a href="https://speeding-spaceship-1913.postman.co/workspace/e55a8418-1eb5-45b8-80c6-aa9657296e0c/documentation/25298131-e6d60934-fced-47d3-b5b2-0dc02d98bb2b"><i class="fa-solid fa-download"></i></a>
      <a href="https://www.linkedin.com/in/mercedes-bastardo"><i class="fa-brands fa-linkedin"></i></a> 
      <a href="https://github.com/MercedesBastardo"><i class="fa-brands fa-github"></i></a>
      </div>
    </footer>
    </>
  )
}

export default App
