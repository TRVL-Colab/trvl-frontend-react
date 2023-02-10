
import {Container} from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
    <Header/>
    <div>
        <Container className='py-3'>
           <Home/>
        </Container>
    </div>
    <Footer/>  
    </div>
  );
}

export default App;
