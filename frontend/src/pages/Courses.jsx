import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Kuvuta data kutoka kwenye Python Django API yetu
    axios.get('http://127.0.0.1:8000/api/courses/')
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Kuna shida ya kuvuta kozi:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#007bff', textAlign: 'center' }}>Kozi Zinazotolewa MACSSOD</h2>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Inapakia kozi (Loading)...</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
          {courses.map(course => (
            <div key={course.id} style={{
              border: '1px solid #ccc', borderRadius: '8px', padding: '20px',
              width: '300px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#28a745', margin: '0 0 10px 0' }}>{course.course_code}</h3>
              <h4>{course.course_name}</h4>
              <p style={{ color: '#666' }}>{course.description}</p>
              <p style={{ fontWeight: 'bold' }}>Credits: {course.credits}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Courses;