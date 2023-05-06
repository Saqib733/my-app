// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import  {useState} from 'react'
import { BrowserRouter, Route ,Routes} from "react-router-dom";
// import './App.css';
function App() {
  const [mode,SetMode]=useState("light")
  const [alert, setalert] = useState(null)
  const showAlert=(type,msg)=>
  {
    setalert(
      {
        Type: type, 
        Message : msg
        
      }
    )
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }


 


  const toggleMode = ()=>
  {
    if (mode === "light") {
      SetMode("dark");
      document.body.style.backgroundColor='#343a40';
      showAlert("dark","Dark Mode Enabled")
      
   
    }
      else
     {
      SetMode("light")
      document.body.style.backgroundColor='white';
      showAlert("success","Light Mode Enabled")
   

    }
  }
   return (
   <>
    <BrowserRouter>
    <Navbar title="Textiess" title2="Home" toggleMode={toggleMode}  mode={mode}/>
    <Alert Alert={alert} />
    <Routes>
      <Route path="/" element={ <div className="container">
      <TextForm textArea="Enter the Text below" mode={mode}/>
    </div> }/>

    <Route path="/about" element={<About Mode={mode}/>}/>
    </Routes>
    
    </BrowserRouter>
   
   
    
    
    
    </>
  )
}

export default App;
