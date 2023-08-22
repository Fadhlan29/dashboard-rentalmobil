import "../src/dist/styles.css";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom"; 
import {
  Home,
  About,
  Models,
  TestimonialsPage,
  Team,
  Contact,
  Dashboard,
  SignUp,
  Login,
  Pesanan,
  Pengguna,
  Mobil
} from './Pages/index '

function App() {

  const location = useLocation()

  return (
    <>
      <Navbar showNavbar={
        location.pathname !== "/dashboard" && 
        location.pathname !== "/signup" && 
        location.pathname !== "/login" && 
        location.pathname !== "/pesanan" &&
        location.pathname !== "/pengguna" &&
        location.pathname !== "/mobil"}/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="pesanan" element={<Pesanan />} />
        <Route path="pengguna" element={<Pengguna />} />
        <Route path="mobil" element={<Mobil />} />
      </Routes>
    </>
  );
}

export default App;
