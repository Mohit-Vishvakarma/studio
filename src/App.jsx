// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Wedding from './components/wedding/Wedding';
// import About from './components/about/About.jsx';
// import Services from './components/services/Services.jsx';
// import Gallery from './components/gallery/Gallery.jsx';
// import Contact from './components/contact/Contact.jsx';
// import Layout from './components/Layout.jsx';


 


function App() {

  return (
    <>
   {/* <BrowserRouter>
   <Routes >
    <Route path='/' element  = {<Layout />} />
    <Route path='about' element = {<About /> } />
    <Route path='services' element = {<Services /> } />
    <Route path='gallery' element = {<Gallery /> } />
    <Route path='contact' element = {<Contact /> } />
   </Routes>
   </BrowserRouter> */}



   <Header />
   <Home /> 
   <Services />
   <Wedding />
   <Footer />

   
    </>
  )
}

export default App
