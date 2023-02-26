import UserForm from './components/UserForm'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import UserList from './components/UserList';
function App() {
  
  const [usersData, setUsersData] = useState([]);
  const [usersSelected, setUsersSelected] = useState({});
  
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
    <div className="App">
        
        <h1>Register User</h1>
        <UserForm 
        createUser={(data) => createUser(data)}
        usersSelected={usersSelected}
        upDateUser={upDateUser}/>
        <h1>Lista de Usuarios</h1>
        <UserList 
        usersData={usersData}
        deleteUser={deleteUser}
        selectUser={selectUser}
        />
    </div>
  )
}

export default App
