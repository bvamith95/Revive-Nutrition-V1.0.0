import { Routes, Route} from 'react-router-dom';
import { Fragment } from 'react';

import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Header from './routes/header/header.component';
import Consultation from './routes/consultation/consultation.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Recommendation from './routes/recommendation/recommendation.component';
import Footer from './routes/footer/footer.component';


const App = ()=> {

  return (
    
<Fragment>
    <Routes>
    <Route path='/' element={<Header/>}>
      <Route index element={<Home />} />
      <Route path='/shop/*' element={<Shop />}/>
      <Route path='/consultation' element={ <Consultation/> }/>
      <Route path='/auth' element={ <Authentication/> }/>
      <Route path='/checkout' element= {<Checkout/>} />
      <Route path='/recommendation' element= {<Recommendation/>} />
    </Route>
    </Routes>
    <Footer />
    </Fragment>
    );
 }; 

export default App;
