import React from 'react';
import Button from '../components/Button';
import Jumbotron from '../components/Jumbotron';
import EmployeeLIst from '../components/EmployeeList';

const Home = () => {

    return ( 
     <div>
       <Jumbotron></Jumbotron>
       <Button></Button>
       <EmployeeLIst></EmployeeLIst>
     </div>
    );
  }
  
  export default Home;