import { Routes, Route} from 'react-router-dom';

import Shop from './routes/shop/shop.component';

import Header from './routes/header/header.component';
import Consultation from './routes/consultation/consultation.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = ()=> {

  return (
    

    <Routes>
    <Route path='/' element={<Header/>}>
      <Route path='/' element={<Shop />}/>
      <Route path='/consultation' element={ <Consultation/> }/>
      <Route path='/sign-in' element={ <SignIn/> }/>
    </Route>

    </Routes>
    );
 }; 

export default App;
