import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import Cruddatapegawai from './components/Cruddatapegawai';
import EditUser from './components/EditUser';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar /> <br/>
      <Routes>
      <Route path='/' element={<Cruddatapegawai />} />
      <Route path='/all' element={<AllUsers />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
