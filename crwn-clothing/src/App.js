import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import {useEffect} from 'react';
import { checkUserSession } from './store/user/user.action';
import { useDispatch } from 'react-redux';
//import { ReactKeycloakProvider } from '@react-keycloak/web';

const App = () => {

  // const keycloack = new keycloack({
  //   url: "http://localhost:8080",
  //   realm: "spring-boot-microservices-realm",
  //   clientId: "react-client",
  //   onLoad: "login-required"
  // })
  // const initOptions = { pkceMethod: 'S256' }

  const dispath = useDispatch();

  useEffect(() => {
    dispath(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    </Routes>
  );
};

export default App;
