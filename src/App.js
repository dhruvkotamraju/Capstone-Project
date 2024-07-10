import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { AuthProvider } from './components/AuthContext';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Account from './pages/Account';
import AddProducts from './pages/AddProducts';
import ViewProducts from './pages/ViewProducts';
import ForgotPassword from './pages/ForgotPassword';



const App = () => {
  return (

    <Router>
    <AuthProvider>

      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/addProduct" element={<AddProducts />} />
          <Route path="/viewProducts" element={<ViewProducts />} />



        </Routes>

      </Layout>
    </AuthProvider>

    </Router>

  );
};

export default App;
