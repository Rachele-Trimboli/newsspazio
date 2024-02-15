import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap'
import MyNavBar from '../src/components/MyNavBar';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Articles from './components/Articles';

import Detail from './components/Detail';

function App() {
  return (
    <div className='bg-black'>
    <BrowserRouter>
    <MyNavBar></MyNavBar>
    <Container className='mt-5'>
    <Routes>
      <Route path='/home' element={<Articles></Articles>}/>
      <Route path='/detail/:articleId' element={<Detail></Detail>}/>
    </Routes>
    </Container>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
