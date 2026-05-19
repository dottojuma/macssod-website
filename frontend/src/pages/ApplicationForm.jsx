import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApplicationForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formFourIndex, setFormFourIndex] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Kuvuta kozi kutoka backend
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/courses/')
      .then(response => {
        if (Array.isArray(response.data)) {
          setCourses(response.data);
        } else if (response.data.results && Array.isArray(response.data.results)) {
          setCourses(response.data.results);
        }
      })
      .catch(error => {
        console.error("Shida ya kuvuta kozi:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation ya Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsSuccess(false);
      setMessage(" Tafadhali weka Barua Pepe (Email) inayofaa yenye alama ya @ na mfumo wa .com au .ac.tz");
      setIsSubmitting(false);
      return;
    }

    // Validation ya Namba ya Simu
    const cleanPhone = phoneNumber.replace(/\s+/g, '');
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setIsSuccess(false);
      setMessage(" Namba ya simu lazima iwe na tarakimu 10 pekee (Mfano: 0712345678)");
      setIsSubmitting(false);
      return;
    }

    if (!selectedCourse) {
      setIsSuccess(false);
      setMessage(" Tafadhali chagua kozi moja kutoka kwenye orodha.");
      setIsSubmitting(false);
      return;
    }

    const applicationData = {
      full_name: fullName,
      email: email,
      phone_number: cleanPhone,
      form_four_index: formFourIndex,
      course_requested: parseInt(selectedCourse)
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/applications/', applicationData);
      setIsSuccess(true);
      setMessage(" Hongera! Maombi yako yamepokelewa kikamilifu MACSSOD. Tutakuwasiliana baada ya mapitio.");
      // Safisha fomu
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setFormFourIndex('');
      setSelectedCourse('');
    } catch (error) {
      setIsSuccess(false);
      setMessage(" Imeshindwa kutuma. Hakikisha maelezo yote yapo sahihi.");
      console.error("Error backend:", error.response?.data);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Styles za kisasa
  const styles = {
    container: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '60px 20px',
      fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    },
    formWrapper: {
      maxWidth: '750px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '32px',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
    },
    header: {
      background: 'linear-gradient(120deg, #0a1f3e 0%, #0b2b4f 100%)',
      padding: '40px 35px',
      textAlign: 'center',
      color: 'white',
    },
    logo: {
      fontSize: '48px',
      marginBottom: '10px',
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      margin: '0 0 8px 0',
      letterSpacing: '-0.5px',
    },
    subtitle: {
      fontSize: '0.9rem',
      opacity: 0.9,
      margin: 0,
    },
    formBody: {
      padding: '40px 45px',
    },
    formGroup: {
      marginBottom: '28px',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      color: '#0a1f3e',
      fontWeight: '600',
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    labelIcon: {
      marginRight: '8px',
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      borderRadius: '12px',
      border: '2px solid #e2e8f0',
      fontSize: '1rem',
      boxSizing: 'border-box',
      color: '#1e293b',
      backgroundColor: '#f8fafc',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
    },
    inputFocus: {
      borderColor: '#4caf50',
      outline: 'none',
      backgroundColor: '#ffffff',
      boxShadow: '0 0 0 3px rgba(76, 175, 80, 0.1)',
    },
    select: {
      width: '100%',
      padding: '14px 16px',
      borderRadius: '12px',
      border: '2px solid #e2e8f0',
      fontSize: '1rem',
      boxSizing: 'border-box',
      color: '#1e293b',
      backgroundColor: '#f8fafc',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    smallText: {
      display: 'block',
      marginTop: '6px',
      fontSize: '0.75rem',
      color: '#64748b',
    },
    button: {
      width: '100%',
      background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
      color: '#ffffff',
      padding: '16px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 20px -5px rgba(76, 175, 80, 0.3)',
      marginTop: '10px',
    },
    buttonDisabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    messageBox: {
      padding: '15px 20px',
      borderRadius: '12px',
      marginBottom: '25px',
      fontWeight: '500',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    successBox: {
      backgroundColor: '#e8f5e9',
      color: '#2e7d32',
      borderLeft: '4px solid #4caf50',
    },
    errorBox: {
      backgroundColor: '#ffebee',
      color: '#c62828',
      borderLeft: '4px solid #f44336',
    },
    footer: {
      background: '#f8fafc',
      padding: '20px 45px',
      textAlign: 'center',
      borderTop: '1px solid #e2e8f0',
      fontSize: '0.8rem',
      color: '#64748b',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
    },
  };

  // State za focus effects
  const [focusedField, setFocusedField] = useState('');

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <div style={styles.header}>
          <div style={styles.logo}>🎓</div>
          <h1 style={styles.title}>MACSSOD Application Portal</h1>
          <p style={styles.subtitle}>Maswanya Computer Science Software Developer College</p>
        </div>

        <div style={styles.formBody}>
          {message && (
            <div style={{...styles.messageBox, ...(isSuccess ? styles.successBox : styles.errorBox)}}>
              <span>{isSuccess ? '✓' : '⚠️'}</span>
              <span>{message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <span style={styles.labelIcon}></span>
                Jina Kamili
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                style={{
                  ...styles.input,
                  ...(focusedField === 'fullName' && styles.inputFocus)
                }}
                onFocus={() => setFocusedField('fullName')}
                onBlur={() => setFocusedField('')}
                placeholder="Mfano: Dotto Juma Maswanya"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <span style={styles.labelIcon}></span>
                Namba ya Mtihani (Form Four Index No.)
              </label>
              <input
                type="text"
                value={formFourIndex}
                onChange={(e) => setFormFourIndex(e.target.value)}
                required
                style={{
                  ...styles.input,
                  ...(focusedField === 'formFour' && styles.inputFocus)
                }}
                onFocus={() => setFocusedField('formFour')}
                onBlur={() => setFocusedField('')}
                placeholder="S0101/0001/2025"
              />
              <small style={styles.smallText}> Muundo: SchoolNumber/StudentNumber/Year</small>
            </div>

            <div style={styles.row}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <span style={styles.labelIcon}></span>
                  Barua Pepe (Email)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    ...styles.input,
                    ...(focusedField === 'email' && styles.inputFocus)
                  }}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  placeholder="student@gmail.com"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <span style={styles.labelIcon}></span>
                  Namba ya Simu
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  maxLength={10}
                  style={{
                    ...styles.input,
                    ...(focusedField === 'phone' && styles.inputFocus)
                  }}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField('')}
                  placeholder="0712345678"
                />
                <small style={styles.smallText}> Tarakimu 10 pekee</small>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <span style={styles.labelIcon}></span>
                Chagua Programu Unayoomba
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
                style={{
                  ...styles.select,
                  ...(focusedField === 'course' && styles.inputFocus)
                }}
                onFocus={() => setFocusedField('course')}
                onBlur={() => setFocusedField('')}
              >
                <option value="">-- Bonyeza Hapa Kuchagua Kozi --</option>
                {courses.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.course_code} - {course.course_name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                ...styles.button,
                ...(isSubmitting && styles.buttonDisabled)
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              {isSubmitting ? 'Inatuma...' : 'TUMA MAOMBI SASA'}
            </button>
          </form>
        </div>

        <div style={styles.footer}>
          <p>© 2025 MACSSOD | Kwa msaada wasiliana nasi: +255 712 345 678 | info@macssod.ac.tz</p>
          <p style={{marginTop: '8px', fontSize: '0.7rem'}}>Baada ya kutuma, utapokea email ya uthibitisho ndani ya siku 2 za kazi</p>
        </div>
      </div>

      {/* CSS Animations za kuingiza */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .form-wrapper {
          animation: slideInUp 0.5s ease-out;
        }
        input:hover, select:hover {
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}

export default ApplicationForm;