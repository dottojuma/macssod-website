import React from 'react';

const Administration = () => {
  const leaders = [
    {
      name: "Prof. Dotto D. Maswanya",
      title: "Mkuu wa Chuo (Principal/CEO)",
      department: "Uongozi Mkuu",
      email: "principal@macssod.ac.tz",
      phone: "+255 712 345 678",
      icon: "",
      bgGradient: "linear-gradient(145deg, #1e3c72, #0f2a4a)"
    },
    {
      name: "Dr. Jane Masanja",
      title: "Mkuu wa Taaluma (Registrar)",
      department: "Academic Affairs",
      email: "registrar@macssod.ac.tz",
      phone: "+255 712 345 679",
      icon: "",
      bgGradient: "linear-gradient(145deg, #2b4f8c, #1d3a66)"
    },
    {
      name: "Prof. John Mwakatobe",
      title: "Makamu Mkuu - Taaluma",
      department: "Deputy Principal (Academic)",
      email: "deputy.academic@macssod.ac.tz",
      phone: "+255 712 345 680",
      icon: "",
      bgGradient: "linear-gradient(145deg, #4caf50, #2e7d32)"
    },
    {
      name: "Mr. Ibrahim Kitunda",
      title: "Makamu Mkuu - Utawala",
      department: "Deputy Principal (Administration)",
      email: "deputy.admin@macssod.ac.tz",
      phone: "+255 712 345 681",
      icon: "",
      bgGradient: "linear-gradient(145deg, #ff9800, #e65100)"
    },
    {
      name: "Dr. Stella Kimaro",
      title: "Mkuu wa Idara ya CS",
      department: "Computer Science",
      email: "cs@macssod.ac.tz",
      phone: "+255 712 345 682",
      icon: "",
      bgGradient: "linear-gradient(145deg, #2196f3, #0b5e9e)"
    },
    {
      name: "Eng. Peter John",
      title: "Mkuu wa Software Eng",
      department: "Software Engineering",
      email: "software@macssod.ac.tz",
      phone: "+255 712 345 683",
      icon: "",
      bgGradient: "linear-gradient(145deg, #9c27b0, #4a148c)"
    },
    {
      name: "Ms. Asha Kileo",
      title: "Mkuu wa Masuala ya Wanafunzi",
      department: "Student Affairs",
      email: "students@macssod.ac.tz",
      phone: "+255 712 345 684",
      icon: "",
      bgGradient: "linear-gradient(145deg, #e91e63, #880e4f)"
    },
    {
      name: "Mr. Hamisi Juma",
      title: "Mkuu wa Fedha na HR",
      department: "Finance & Human Resources",
      email: "finance@macssod.ac.tz",
      phone: "+255 712 345 685",
      icon: "",
      bgGradient: "linear-gradient(145deg, #00bcd4, #006064)"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Header ya ukurasa */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerIcon}></div>
          <h1 style={styles.title}>
            Uongozi Mkuu
            <span style={styles.titleHighlight}>Administration</span>
          </h1>
          <p style={styles.subtitle}>
            Kutana na timu ya viongozi wanaosimamia uendeshaji wa kila siku wa 
            <strong> MACSSOD</strong>
          </p>
        </div>
      </div>

      {/* Statistics / Quick Info */}
      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>8+</div>
          <div style={styles.statLabel}>Viongozi Wakuu</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>5+</div>
          <div style={styles.statLabel}>Idara Maalum</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>24/7</div>
          <div style={styles.statLabel}>Msaada kwa Wanafunzi</div>
        </div>
      </div>

      {/* Grid ya Viongozi */}
      <div style={styles.gridContainer}>
        {leaders.map((leader, index) => (
          <div 
            key={index} 
            style={{...styles.card, background: leader.bgGradient}}
            className="leader-card"
          >
            <div style={styles.iconContainer}>
              <span style={styles.iconEmoji}>{leader.icon}</span>
            </div>
            <h3 style={styles.leaderName}>{leader.name}</h3>
            <div style={styles.leaderTitle}>{leader.title}</div>
            <div style={styles.leaderDept}>{leader.department}</div>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}> {leader.email}</div>
              <div style={styles.contactItem}>{leader.phone}</div>
            </div>
            <div style={styles.socialLinks}>
              <span style={styles.socialIcon}></span>
              <span style={styles.socialIcon}></span>
              <span style={styles.socialIcon}></span>
            </div>
          </div>
        ))}
      </div>

      {/* Message kutoka kwa Mkuu wa Chuo */}
      <div style={styles.messageBox}>
        <div style={styles.messageIcon}>💬</div>
        <div style={styles.messageContent}>
          <h3>Ujumbe kutoka kwa Mkuu wa Chuo</h3>
          <p>
            "Karimu MACSSOD! Timu yetu ya uongozi imejitolea kutoa elimu bora ya kisasa ya 
            Computer Science na Software Development. Tunajenga wasanifu wa programu wa kizazi kipya 
            wenye weledi na maadili."
          </p>
          <div style={styles.messageSignature}>- Prof. Dotto D. Maswanya</div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 MACSSOD | Maswanya Computer Science Software Developer College</p>
        <p style={styles.footerSmall}>Ankara ofisi: +255 712 345 678 | info@macssod.ac.tz</p>
      </footer>

      {/* CSS Animations */}
      <style>{`
        .leader-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .leader-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .leader-card {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        .leader-card:nth-child(1) { animation-delay: 0.1s; }
        .leader-card:nth-child(2) { animation-delay: 0.2s; }
        .leader-card:nth-child(3) { animation-delay: 0.3s; }
        .leader-card:nth-child(4) { animation-delay: 0.4s; }
        .leader-card:nth-child(5) { animation-delay: 0.5s; }
        .leader-card:nth-child(6) { animation-delay: 0.6s; }
        .leader-card:nth-child(7) { animation-delay: 0.7s; }
        .leader-card:nth-child(8) { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1300px',
    margin: '0 auto',
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    background: 'linear-gradient(135deg, #f8fafc 0%, #eef2f9 100%)',
    minHeight: '100vh',
  },
  header: {
    background: 'linear-gradient(120deg, #0a1f3e 0%, #0b2b4f 100%)',
    borderRadius: '32px',
    padding: '50px 30px',
    marginBottom: '40px',
    textAlign: 'center',
    boxShadow: '0 20px 35px -10px rgba(0,0,0,0.15)',
  },
  headerContent: {
    color: 'white',
  },
  headerIcon: {
    fontSize: '48px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '12px',
    letterSpacing: '-0.5px',
  },
  titleHighlight: {
    display: 'block',
    fontSize: '1.2rem',
    color: '#4caf50',
    marginTop: '8px',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: '1rem',
    opacity: 0.9,
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.5',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginBottom: '50px',
    flexWrap: 'wrap',
  },
  statCard: {
    background: 'white',
    padding: '20px 30px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    minWidth: '150px',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1e3c72',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#666',
    marginTop: '5px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '25px',
    marginBottom: '50px',
  },
  card: {
    borderRadius: '24px',
    padding: '25px',
    color: 'white',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    position: 'relative',
    overflow: 'hidden',
  },
  iconContainer: {
    textAlign: 'center',
    marginBottom: '15px',
  },
  iconEmoji: {
    fontSize: '48px',
    display: 'inline-block',
    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))',
  },
  leaderName: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    textAlign: 'center',
  },
  leaderTitle: {
    fontSize: '0.9rem',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '5px',
    opacity: 0.95,
  },
  leaderDept: {
    fontSize: '0.8rem',
    textAlign: 'center',
    marginBottom: '15px',
    opacity: 0.8,
    paddingBottom: '10px',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
  },
  contactInfo: {
    fontSize: '0.7rem',
    marginTop: '10px',
    opacity: 0.85,
  },
  contactItem: {
    marginBottom: '5px',
    wordBreak: 'break-all',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '15px',
    paddingTop: '10px',
    borderTop: '1px solid rgba(255,255,255,0.2)',
  },
  socialIcon: {
    fontSize: '18px',
    cursor: 'pointer',
    opacity: 0.7,
    transition: 'opacity 0.2s',
  },
  messageBox: {
    background: 'white',
    borderRadius: '28px',
    padding: '30px',
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    marginBottom: '40px',
    border: '1px solid #e0e7ff',
  },
  messageIcon: {
    fontSize: '48px',
  },
  messageContent: {
    flex: 1,
  },
  messageSignature: {
    marginTop: '15px',
    fontStyle: 'italic',
    color: '#1e3c72',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    padding: '30px 20px 20px',
    borderTop: '1px solid #cbd5e1',
    color: '#2d3748',
  },
  footerSmall: {
    fontSize: '0.8rem',
    marginTop: '8px',
    opacity: 0.7,
  },
};

export default Administration;