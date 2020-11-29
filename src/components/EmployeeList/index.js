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


    const header = ['name', 'email', 'number']

    return ( 
     <div>
        <table className="table table-bordered table-dark">
    
  <tbody>

    <tr>
        {header.map((headers, i ) => 
             <th scope="col" key={i}>{headers}</th>
        )}
     </tr>
 
      {users.map(user => (   
            <tr key={user.login.uuid}>
        <td>{user.name.first + " " + user.name.last}</td>
        <td>{user.email}</td>
        <td>{user.cell}</td>
        </tr>
        )) }
   
  </tbody>
</table>
     </div>
    );
  }
  
  export default EmployeeLIst;