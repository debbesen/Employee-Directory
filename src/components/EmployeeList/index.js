import React, {useState, useEffect} from 'react';
import API from '../../Utils/API';


const EmployeeLIst = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.getUsers()
        .then(res => 
          setUsers(res.data.results)
        )
        .catch(err => console.log(err));
      }, [])


    const header = ['pic', 'name', 'email', 'number']

    return ( 
     <div>
        <table class="table table-bordered table-dark">
    <tr>
        {header.map((headers, i ) => 
             <th scope="col" key={i}>{headers}</th>
        )}
     
      
    </tr>
  
  <tbody>
      
    <tr>
        {users.map(user => (
            <tr key={user.login.uuid}>
        <td><img src={user.picture.medium}> </img></td>
        <td>{user.name.first + " " + user.name.last}</td>
        <td>{user.email}</td>
        <td>{user.cell}</td>
        </tr>
        )) }
        
    </tr>
   
  </tbody>
</table>
     </div>
    );
  }
  
  export default EmployeeLIst;