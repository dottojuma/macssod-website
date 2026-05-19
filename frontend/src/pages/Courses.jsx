import React, { useState, useEffect } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/courses/')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Imefeli kuvuta kozi:", err));
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#003366', fontSize: '36px', fontWeight: 'bold' }}>KOZI ZINAZOTOLEWA (OUR COURSES)</h1>
        <p style={{ color: '#666', fontSize: '16px', marginTop: '10px' }}>
          Gundua programu zetu za kitaaluma zilizoundwa kukupa ujuzi wa vitendo na kukuandaa kwa soko la kimataifa.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
        {courses.length > 0 ? (
          courses.map((course) => (
            <div key={course.id} style={{ background: '#ffffff', borderRadius: '8px', padding: '25px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderLeft: '6px solid #003366' }}>
              <span style={{ background: '#eaf2f8', color: '#003366', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                Code: {course.course_code}
              </span>
              <h3 style={{ color: '#333', marginTop: '15px', marginBottom: '10px' }}>{course.course_name}</h3>
              <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
                Mafunzo kamili ya vitendo (100% Practical) yanayomfanya mwanafunzi kuingia maungoni mwa mifumo ya kiteknolojia na uandishi wa kodi.
              </p>
              <a href="/admission" style={{ display: 'inline-block', marginTop: '15px', color: '#28a745', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' }}>
                Omba Kozi Hii →
              </a>
            </div>
          ))
        ) : (
          /* Kozi za mfano (Fallback) kama backend haijawashwa */
          <>
            <div style={{ background: '#ffffff', borderRadius: '8px', padding: '25px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderLeft: '6px solid #003366' }}>
              <span style={{ background: '#eaf2f8', color: '#003366', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>NTA LEVEL 4 - 6</span>
              <h3 style={{ color: '#333', marginTop: '15px' }}>Information Technology (IT)</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>Kujifunza Networking, Hardware, na Usalama wa Mifumo.</p>
            </div>
            <div style={{ background: '#ffffff', borderRadius: '8px', padding: '25px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderLeft: '6px solid #28a745' }}>
              <span style={{ background: '#eaf2f8', color: '#28a745', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>NTA LEVEL 4 - 6</span>
              <h3 style={{ color: '#333', marginTop: '15px' }}>Computer Science (CS)</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>Kujifunza Software Engineering, Python, Django, na React.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Courses;