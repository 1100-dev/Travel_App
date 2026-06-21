import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import BookPackage from './pages/BookPackage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookFlight from './pages/BookFlight';
import BookHotel from './pages/BookHotel';
import BookTour from './pages/BookTour';  
import CustomPackage from './pages/CustomPackage';
import BookHotelForm from './pages/BookHotelForm';
import BookFlightForm from './pages/BookFlightForm';
import Contact from './pages/Contact';
import ScrollToTop from './pages/ScrollToTop';

function App() {
  return (
    <div className="app-root">
      <Navbar />
       <ScrollToTop />
      <main className="main-content container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
  <Route path="/book/:destinationName/:packageName" element={<BookPackage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/flight/book" element={<BookFlight />} />
          <Route path="/book-flight/:flightNumber" element={<BookFlightForm />} />
          <Route path="/services/hotel/book" element={<BookHotel />} />
          <Route path="/book-hotel/:hotelName" element={<BookHotelForm />} />
          <Route path="/services/tours" element={<BookTour />} />
          <Route path="/services/packages" element={<CustomPackage />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
         
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;