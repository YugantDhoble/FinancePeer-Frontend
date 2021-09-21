import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import DisplayScreen from './pages/DisplayScreen';
import LoginScreen from './pages/LoginScreen';
import UploadScreen from './pages/UploadScreen';
// import PrivateRoute from './utils/privateRoute';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/display'  component={DisplayScreen} exact />
      <Route path='/upload' component={UploadScreen} exact />
      <Route path='/' component={LoginScreen} exact />
    </Router>
  );
}

export default App;
