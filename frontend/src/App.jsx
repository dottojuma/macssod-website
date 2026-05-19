import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import OrganizationStructure from './pages/OrganizationStructure';
import Administration from './pages/Administration';
import Departments from './pages/Departments';
import Staff from './pages/Staff';
import Courses from './pages/Courses'; // Tumeiimport hapa mkuu
import Library from './pages/Library';
import ApplicationForm from './pages/ApplicationForm'; 
import Contacts from './pages/Contacts';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Router>
      <div style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
        
        {/* ================= HEADER KUU YA CHUO YA JUU ================= */}
        <div style={{ background: '#001f3f', padding: '25px 20px', textAlign: 'center', borderBottom: '4px solid #28a745' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ color: '#ffffff', margin: 0, fontSize: '32px', letterSpacing: '1px', fontWeight: 'bold' }}>
              MACSSOD COLLEGE
            </h1>
            <span style={{ color: '#e0e0e0', fontSize: '14px', textTransform: 'uppercase' }}>
              Center of Excellence in Information Technology & Professional Studies
            </span>
          </Link>
        </div>

        {/* ================= MSTARI WA LINKS CHINI YA JINA (NAVBAR) ================= */}
        <nav style={{ background: '#003366', padding: '12px 30px', display: 'flex', justifyContent: 'center', gap: '30px', position: 'relative', zIndex: 1000 }}>
          
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500', fontSize: '15px', padding: '5px 0' }}>Home</Link>
          
          {/* DROPDOWN YA ABOUT US */}
          <div 
            style={{ position: 'relative', cursor: 'pointer', padding: '5px 0' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span style={{ color: '#ffffff', fontWeight: '500', fontSize: '15px' }}>About Us ▼</span>
            
            {dropdownOpen && (
              <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: '12px', minWidth: '220px' }}>
                <div style={{ background: '#ffffff', boxShadow: '0px 8px 16px rgba(0,0,0,0.15)', borderRadius: '4px', padding: '8px 0', display: 'flex', flexDirection: 'column' }}>
                  <Link to="/about/structure" style={{ padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }} onClick={() => setDropdownOpen(false)}>Organization Structure</Link>
                  <Link to="/about/administration" style={{ padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }} onClick={() => setDropdownOpen(false)}>Administration</Link>
                  <Link to="/about/departments" style={{ padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }} onClick={() => setDropdownOpen(false)}>Departments</Link>
                  <Link to="/about/staff" style={{ padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }} onClick={() => setDropdownOpen(false)}>Staff</Link>
                </div>
              </div>
            )}
          </div>

          {/* LINK MPYA YA COURSES TUMEIWEKA HAPA MBELENI YA ABOUT US */}
          <Link to="/courses" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500', fontSize: '15px', padding: '5px 0' }}>Courses</Link>
          
          <Link to="/library" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500', fontSize: '15px', padding: '5px 0' }}>Library</Link>
          <Link to="/admission" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500', fontSize: '15px', padding: '5px 0' }}>Admission</Link>
          <Link to="/contacts" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500', fontSize: '15px', padding: '5px 0' }}>Contacts</Link>
        </nav>

        {/* ================= SEHEMU YA KUFUNGULIA PAGES ================= */}
        <div style={{ minHeight: '70vh', background: '#f4f7fa' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/structure" element={<OrganizationStructure />} />
            <Route path="/about/administration" element={<Administration />} />
            <Route path="/about/departments" element={<Departments />} />
            <Route path="/about/staff" element={<Staff />} />
            
            {/* Ruti mpya ya Courses */}
            <Route path="/courses" element={<Courses />} />
            
            <Route path="/library" element={<Library />} />
            <Route path="/admission" element={<ApplicationForm />} /> 
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>

        {/* ================= FOOTER YA CHUO ================= */}
        <footer style={{ background: '#111111', color: '#aaaaaa', padding: '20px', fontSize: '14px', textAlign: 'center', borderTop: '3px solid #003366' }}>
          &copy; 2026 MACSSOD College. Haki zote zimehifadhiwa.
        </footer>
      </div>
    </Router>
  );
}

export default App;