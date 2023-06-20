
import './App.css';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Main from './Components/Main';
function App() {
  return (
    <div className='header'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main></Main>}>
      <Route index element = {<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
      <Route path='login' element={<div>sign up!!</div>}></Route>
      <Route path='*' element={<Error></Error>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
