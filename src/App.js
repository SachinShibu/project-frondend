import logo from './logo.svg';
import './App.css';
import SearchLeave from './components/SearchLeave';
import AddLeave from './components/AddLeave';
import DeleteLeave from './components/DeleteLeave';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<AddLeave/>}/>
      <Route path='/search' element={<SearchLeave/>}/>
      <Route path='/delete' element={<DeleteLeave/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
