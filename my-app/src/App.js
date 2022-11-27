import './App.css';
import { useNavigate } from "react-router-dom";
import React from 'react';
import { Button} from 'react-bootstrap';



function App() {

  const navigate = useNavigate(); 
  
  const navigateToCompany = () => {
      navigate('/company');
  }

 return (
    <div className="App">
      <header className="App-header">

        <p>
          This is my website
        </p>
        <Button color="primary" className="px-4"
            onClick={navigateToCompany}
              >
              View Info
            </Button>
        
      </header>
    </div>
  );
}

export default App;
