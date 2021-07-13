import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import Dashboard from "./components/Dashboard";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path='/' exact component={() => <Dashboard />}/>
        <Route path='/add-employee' component={() => <AddEmployee />}/>
      </main>
    </BrowserRouter>
  );
}

export default App;
