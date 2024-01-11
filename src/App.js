
import Homepage from "./page/homepage/Homepage"
import {Routes,Route} from "react-router-dom"
import Login from "./page/login/Login"

function App() {

  return (
    <Routes >
       <Route path="/" element={<Homepage/>}/>
       <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
