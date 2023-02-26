
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';


const UserForm = ({createUser, usersSelected, upDateUser}) => {
    const { register, handleSubmit, reset } = useForm(); 
    
    const getFormData = (data) => {
        if(usersSelected){
            upDateUser(data);
        }else{
            createUser(data);
            resetForm();
        }
    }
   useEffect(() => {
    if (usersSelected !== null) {
      reset(usersSelected);
    } else {
      resetForm();
    }
  }, [usersSelected]);

  const resetForm = () => {
    reset({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: ""
      });
  }
    return(
        
        <Form onSubmit={handleSubmit(getFormData)}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control 
                type="text" 
                {...register("first_name")}
                placeholder="Enter first name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control 
                type="text" 
                {...register("last_name")}
                placeholder="Enter last name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                {...register("email")}
                placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                {...register("password")}
                placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control 
                type="date" 
                {...register("birthday")}
                placeholder="Enter Birthday" />
            </Form.Group>
      
      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
    )
}
export default UserForm