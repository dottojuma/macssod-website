import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#007bff', fontSize: '3rem' }}>MACSSOD</h1>
      <p style={{ fontSize: '1.5rem', color: '#555' }}>
        Maswanya Computer Science Software Developer College
      </p>
      <blockquote style={{ fontStyle: 'italic', margin: '30px', color: '#777' }}>
        "Kuzalisha Wahandisi wa Programu wa Kesho wa Kimataifa"
      </blockquote>
      <div style={{ marginTop: '40px' }}>
        <Link to="/courses" style={{
          backgroundColor: '#28a745', color: 'white', padding: '15px 30px',
          textDecoration: 'none', borderRadius: '5px', fontSize: '1.2rem', fontWeight: 'bold'
        }}>
          Angalia Kozi Zetu
        </Link>
      </div>
    </div>
  );
}

export default Home;