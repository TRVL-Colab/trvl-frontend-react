
import {Container} from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Trip from './pages/Trip';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <Header/>
    <main className="py-3">
    <Container>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/trip/:id' element={<Trip/>} />
    </Routes>
    </Container>
    </main>
    <Footer/>
 </Router>
  );
}

export default App;
