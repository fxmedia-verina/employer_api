import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import Dashboard from "./components/Dashboard";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Employees from "./components/Employees";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path='/' exact component={() => <Dashboard />}/>
        <Route path='/employees' component={() => <Employees />}/>
        <Route path='/add-employee' component={() => <AddEmployee />}/>
        <Route path='/edit-employees/:id' component={() => <EditEmployee />}/>
      </main>
    </BrowserRouter>
  );
}

export default App;
