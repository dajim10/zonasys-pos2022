import React from 'react'

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CookieConsent from 'react-cookie-consent'
import Home from './pages/Home'
import Nav from './components/Nav'
function App() {
  return (
    <Router>
       {/* <Header /> */}
      <Nav />
      <CookieConsent
        debug={true}
        style={{ background: "rgba(0,0,0,0.7)", textAlign: "center" }}
        buttonText="ยอมรับ"
        buttonStyle={{ fontSize: "14px", background: "#000", color: "#fff" }}
      >
        เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและประสบการณ์ที่ดีในการใช้เว็บไซต์
        ท่านสามารถศึกษารายละเอียดการใช้คุกกี้ได้ที่{" "}
        {/* <Link to="/cookies" className="text-warning nav-link">
          “นโยบายการใช้คุกกี้”
        </Link> */}
      </CookieConsent>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/employee" element={<Employee />} />
        <Route path="/T_0052" element={<T_0052 />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App