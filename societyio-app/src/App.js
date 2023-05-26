import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Signup from "./components/signup";
import Login from "./components/Login"
import CreateSociety from "./components/CreateSociety";
import BookEvents from "./components/BookEvents";
import Errorpage from "./components/Errorpage";
import { Route, Routes } from "react-router-dom";
import ReportIssues from "./components/ReportIssues";
import Logout from "./components/Logout";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/create-society' element={<CreateSociety />} />
        <Route path='/book-arena' element={<BookEvents />} />
        <Route path='/report-issues' element={<ReportIssues />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
