import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  // Style za Link za Menu kuu
  const linkStyle = { 
    color: '#ffffff', 
    textDecoration: 'none', 
    fontWeight: 'bold', 
    fontSize: '0.95rem',
    letterSpacing: '0.5px',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: '0.3s'
  };

  // Style za vitu vya ndani ya Dropdown
  const dropdownItemStyle = { 
    color: '#003366', 
    textDecoration: 'none', 
    padding: '12px 20px', 
    display: 'block', 
    fontSize: '0.95rem',
    borderBottom: '1px solid #f0f4f8'
  };

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      
      {/* 1. SEHEMU YA JUU KABISA: JINA LA CHUO (HEADER BANNER) */}
      <div style={{ backgroundColor: '#ffffff', padding: '25px 20px', textAlign: 'center', borderBottom: '3px solid #0056b3' }}>
        <h1 style={{ margin: 0, fontFamily: '"Segoe UI", Arial, sans-serif', letterSpacing: '1.5px' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span style={{ color: '#003366', fontSize: '2.5rem', fontWeight: '800' }}>MASWANYA COMPUTER SCIENCE</span>
            <br />
            <span style={{ color: '#0056b3', fontSize: '1.4rem', fontWeight: '400', letterSpacing: '3px' }}>SOFTWARE DEVELOPER COLLEGE (MACSSOD)</span>
          </Link>
        </h1>
      </div>

      {/* 2. SEHEMU YA CHINI YAKE: MSTARI WA MENU/LINKS (NAVBAR) */}
      <nav style={{ backgroundColor: '#003366', padding: '10px 40px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
        
        <Link to="/" style={linkStyle}>HOME</Link>
        <Link to="/about" style={linkStyle}>ABOUT US</Link>
        <Link to="/courses" style={linkStyle}>COURSES</Link>
        <Link to="/library" style={linkStyle}>LIBRARY</Link>

        {/* ADMISSION DROPDOWN */}
        <div 
          style={{ position: 'relative', cursor: 'pointer' }}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '6px' }}>
            ADMISSION <span style={{ fontSize: '0.75rem' }}>▼</span>
          </span>
          
          {showDropdown && (
            <div style={{ 
              position: 'absolute', 
              top: '100%', 
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#ffffff', 
              minWidth: '240px', 
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)', 
              borderRadius: '0 0 8px 8px', 
              overflow: 'hidden',
              marginTop: '10px',
              animation: 'fadeIn 0.2s ease-out'
            }}>
              <Link to="/admission/structure" style={dropdownItemStyle}>Organization Structure</Link>
              <Link to="/admission/administration" style={dropdownItemStyle}>Administration</Link>
              <Link to="/admission/departments" style={dropdownItemStyle}>Departments</Link>
              <Link to="/admission/staffs" style={dropdownItemStyle}>Staffs</Link>
              <Link to="/admission/apply" style={{ ...dropdownItemStyle, backgroundColor: '#eafaf1', color: '#28a745', fontWeight: 'bold', borderBottom: 'none', textAlign: 'center' }}>
                Application Link (Apply Now)
              </Link>
            </div>
          )}
        </div>

        <Link to="/contact" style={linkStyle}>CONTACTS</Link>
      </nav>

    </div>
  );
}

export default Navbar;