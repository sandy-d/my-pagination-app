import './App.css';
import { useDispatch,useSelector } from 'react-redux'
import { getUsers } from './redux/userSlice';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
const App = () => {
  
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.user);
  
  
  useEffect(() => {
    dispatch(getUsers())
    
  },[])
  
  return (
    <Container>
      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>First Brewed</th>
          <th>Tag Line</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.first_brewed}</td>
            <td>{user.tagline}</td>
          </tr>
        })}
      </tbody>
    </Table>
      <Button as="input" type="submit" value="Previous" />
      <Button as="input" type="reset" value="Next" />
      
    </Container>
  )
}

export default App;
