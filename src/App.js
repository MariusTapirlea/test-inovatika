import './App.css';
import getUsers from "./getUsers.js";
import Input from "./Input.js";

function App() {


  return (
    <div className="App">
       <Input users={getUsers()} />
    </div>
  );
}

export default App;
