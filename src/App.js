import './App.css';
import Login from './page/Login'; 
import { Nav } from './components/Nav';
import { Section } from './components/Section';
import { Category } from './components/Category';
import { Link } from 'react-router-dom';
import { Payment} from './page/Payment';
import { ItemDetail } from './page/ItemDetail';
import { Shop } from './page/Shop';
import {CategoryContainer} from './page/CategoryContainer';
import { Hero } from './page/Hero';
import { Content } from './page/Content';
import { Footer } from './page/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import { useSelector } from "react-redux";



library.add(fas,faTwitter,faFontAwesome)

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
        <Router>
          <Routes>
              <Route exact path='/'  element={<Hero/>}></Route>
              <Route path='/login' element={user ? <Navigate to="/"></Navigate> : <Login/>}>

              </Route>  
              <Route path='/category' element={<CategoryContainer/>}></Route>
              <Route path='/Shop' element={<Shop/>}></Route>
              <Route path='/itemDetail/:id' element={<ItemDetail/>}></Route>
              <Route path='/payment' element={<Payment/>}></Route>
              <Route path='/payment/:id' element={<Payment/>}></Route>
              <Route path='/content' element={<Content/>}></Route>
              <Route path='/content/thankyou' element={<Content display="Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi" isPayment={true}></Content>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
