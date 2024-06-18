import logo from './logo.svg';
import './App.css';
import SearchLeave from './components/SearchLeave';
import AddLeave from './components/StudAddLeave';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import StudSignup from './components/StudSignup';
import StudLogin from './components/StudLogin';
import HodLogin from './components/HodLogin';
import FacultyLogin from './components/FacultyLogin';
import FacultyAddLeave from './components/FacultyAddLeave';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/studsignup' element={<StudSignup/>}/>
      <Route path='/studlogin' element={<StudLogin/>}/>
      <Route path='/hodlogin' element={<HodLogin/>}/>
      <Route path='/facultylogin' element={<FacultyLogin/>}/>
      <Route path='/studaddleave' element={<AddLeave/>}/>
      <Route path='/facultyaddleave' element={<FacultyAddLeave/>}/>
      <Route path='/search' element={<SearchLeave/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
