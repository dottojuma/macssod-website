import React from 'react';

const Staff = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#003366' }}>Wafanyakazi na Wakufunzi (Staff)</h1>
      <p>Hawa ndio walimu na watendaji wenye weledi wa hali ya juu wanaowajenga wanafunzi wetu:</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ background: '#003366', color: '#fff' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Jina</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Wadhifa/Idara</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Barua Pepe</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>Mr. John Peter</td>
            <td style={{ padding: '10px' }}>Senior Lecturer - Python & Django</td>
            <td style={{ padding: '10px' }}>john.p@macssod.ac.tz</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px' }}>Ms. Sarah Ally</td>
            <td style={{ padding: '10px' }}>Lecturer - React & Frontend UI</td>
            <td style={{ padding: '10px' }}>sarah.a@macssod.ac.tz</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Staff;