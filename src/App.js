import { Routes, Route} from 'react-router-dom';

import Shop from './routes/shop/shop.component';
import Header from './routes/header/header.component';
import Consultation from './routes/consultation/consultation.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';

const App = ()=> {

  return (
    

    <Routes>
    <Route path='/' element={<Header/>}>
      <Route path='/shop/*' element={<Shop />}/>
      <Route path='/consultation' element={ <Consultation/> }/>
      <Route path='/auth' element={ <Authentication/> }/>
      <Route path='/checkout' element= {<Checkout/>} />

    </Route>

    </Routes>
    );
 }; 

export default App;
