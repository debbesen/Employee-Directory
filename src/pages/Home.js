import React from 'react';
import Button from '../components/Button/index';
import Jumbotron from '../components/Jumbotron/index';
import EmployeeLIst from '../components/EmployeeList/index';

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