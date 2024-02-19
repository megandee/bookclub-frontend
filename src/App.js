import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import Profile from './pages/profile/Profile';
import Search from './pages/search/Search';
import Shelves from './pages/shelves/Shelves';
import SignUp from './pages/signUp/SignUp';
import SignIn from './pages/signIn/SignIn';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Profile />
      <Search />
      <Shelves />
      <SignUp />
      <SignIn />
      <NotFound />
      <Footer />
    </div>);
}

export default App;
