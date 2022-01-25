 import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react';
import Alert from './Components/Alert';

function App() {

  const [mode, setMode] = useState('light');  // Wheater dark mode is enabled or not

  // working with Alert

  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(()=>{
        setAlert(null);
      }, 1000);
  }
   
  // working with Dark Mode
  
  const toggleMode = () =>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark Mode haas been enabled", "success");
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode haas been enabled", "success");
    }
  }


  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <Textform showAlert = {showAlert} heading="Enter your text to anayze" mode={mode}/>
    </div>

    <hr />
    <div>
    <About about="About"/>
    </div>
    
    </>
  );
}

export default App;
