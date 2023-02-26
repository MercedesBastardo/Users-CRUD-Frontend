import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const UserList = ( {usersData, deleteUser, selectUser} ) => {
    let passW = "x";
    console.log(usersData)
    return(
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Birthday</th>
        </tr>
      </thead>
      
        { usersData?.map(user => (
        <tbody key={user.id}>
        <tr>
          <td>{user?.id}</td>  
          <td>{user?.first_name}</td>
          <td>{user?.last_name}</td>
          <td>{user?.email}</td>
          <td>{passW.repeat(user?.password.length)}</td>
          <td>{user?.birthday}</td>
        </tr>
        
        <Button 
        variant="danger"
        onClick={() => deleteUser(user?.id)}>Delete</Button>
        <Button 
        variant="primary"
        onClick={() => selectUser(user)}
        >Update</Button>
        
        </tbody>

        )) 
      }
       
      
    </Table>
    )
}
export default UserList