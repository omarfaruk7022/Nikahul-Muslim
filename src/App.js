import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Navbar from "./Components/Pages/Navbar";
import RequireAuth from "./Components/Pages/RequireAuth";
import Signup from "./Components/Pages/Signup";
import Biodata from "./Components/Pages/Biodata/Biodata";
import Name from "./Components/Pages/Biodata/Name";
import Asking from "./Components/Pages/Biodata/Asking";
import SimpleDetails from "./Components/Pages/Biodata/SimpleDetails";
import Address from "./Components/Pages/Biodata/Address";
import Education from "./Components/Pages/Biodata/Education";
import FamilyDetails from "./Components/Pages/Biodata/FamilyDetails";
import PersonalDoc from "./Components/Pages/Biodata/PersonalDoc";
import AboutWedding from "./Components/Pages/Biodata/AboutWedding";
import EtcDoc from "./Components/Pages/Biodata/EtcDoc";
import Qualification from "./Components/Pages/Biodata/Qualification";
import ContactNumber from "./Components/Pages/Biodata/ContactNumber";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/biodata"
          element={
            <RequireAuth>
              <Biodata />
            </RequireAuth>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/biodata"
          element={
            <RequireAuth>
              <Biodata />
            </RequireAuth>
          }
        >
          <Route index element={<Name/>} />
          <Route path="asking" element={<Asking/>} />
          <Route path="simpleDetails" element={<SimpleDetails/>} />
          <Route path="address" element={<Address/>} />
          <Route path="education" element={<Education/>} />
          <Route path="familyDetails" element={<FamilyDetails/>} />
          <Route path="personalDoc" element={<PersonalDoc/>} />
          <Route path="aboutWedding" element={<AboutWedding/>} />
          <Route path="otherDetails" element={<EtcDoc/>} />
          <Route path="qualification" element={<Qualification/>} />
          <Route path="contactNumber" element={<ContactNumber/>} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
