import "./App.css";
import  { Toaster } from 'react-hot-toast'
import  Router from "./components/Router/Router";

function App() {
  return (
    <div>
       <Toaster 
       position="top-center"
       reverseOrder={false}
       
       />
      <Router />
    
    </div>
  );
}

export default App;
