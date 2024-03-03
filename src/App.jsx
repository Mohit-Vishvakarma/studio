// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';


 


function App() {

  return (
    <>
   {/* <BrowserRouter>
   <Routes >
    <Route path='/' element  = {<Home />} />
    <Route path='/about' element = {<About /> } />
    <Route path='/services' element = {<Services /> } />
    <Route path='/gallery' element = {<Gallery /> } />
    <Route path='/contact' element = {<Contact /> } />
   </Routes>
   </BrowserRouter> */}
   <Header />
   <Home /> 
   <Footer />
    </>
  )
}

export default App
