import React from 'react';

const Departments = () => {
  const departments = [
    {
      id: 1,
      name: "Computer Science & Software Engineering",
      code: "CS-SE",
      icon: "",
      description: "Inatoa elimu ya kina katika uundaji wa programu, algorithms, data structures, na software development lifecycle.",
      courses: ["Programming Fundamentals", "Data Structures", "Algorithms", "Software Architecture", "Mobile App Development"],
      students: "450+",
      lecturers: "12",
      labs: "4",
      color: "#4caf50"
    },
    {
      id: 2,
      name: "Information Technology & Network Security",
      code: "IT-NS",
      icon: "",
      description: "Inajikita katika usimamizi wa mitandao, cybersecurity, cloud computing, na usalama wa taarifa.",
      courses: ["Network Administration", "Cybersecurity", "Cloud Computing", "Ethical Hacking", "Database Management"],
      students: "380+",
      lecturers: "10",
      labs: "3",
      color: "#2196f3"
    },
    {
      id: 3,
      name: "Data Science & Artificial Intelligence",
      code: "DS-AI",
      icon: "",
      description: "Inawajengea wanafunzi uwezo wa kuchambua data kubwa, machine learning, na AI solutions.",
      courses: ["Statistics", "Machine Learning", "Deep Learning", "Data Visualization", "Big Data Analytics"],
      students: "320+",
      lecturers: "8",
      labs: "3",
      color: "#9c27b0"
    },
    {
      id: 4,
      name: "Business Information Systems",
      code: "BIS",
      icon: "",
      description: "Inachanganya biashara na teknolojia kwa ajili ya kuboresha uendeshaji wa mashirika.",
      courses: ["ERP Systems", "E-commerce", "IT Project Management", "Business Analytics", "Digital Transformation"],
      students: "290+",
      lecturers: "7",
      labs: "2",
      color: "#ff9800"
    },
    {
      id: 5,
      name: "Multimedia & Game Development",
      code: "MGD",
      icon: "",
      description: "Inatoa ujuzi wa uundaji wa graphics, animation, game design, na virtual reality.",
      courses: ["2D/3D Animation", "Game Design", "VR/AR Development", "UI/UX Design", "Motion Graphics"],
      students: "260+",
      lecturers: "6",
      labs: "3",
      color: "#e91e63"
    },
    {
      id: 6,
      name: "Mobile & Web Application Development",
      code: "MWD",
      icon: "",
      description: "Inajikita katika uundaji wa mobile apps na web applications za kisasa.",
      courses: ["React Native", "Flutter", "Progressive Web Apps", "Backend Development", "API Integration"],
      students: "410+",
      lecturers: "11",
      labs: "4",
      color: "#00bcd4"
    },
    {
      id: 7,
      name: "DevOps & Cloud Engineering",
      code: "DCE",
      icon: "",
      description: "Inafundisha continuous integration, deployment, na cloud infrastructure management.",
      courses: ["Docker", "Kubernetes", "AWS/Azure", "CI/CD Pipelines", "Infrastructure as Code"],
      students: "210+",
      lecturers: "5",
      labs: "2",
      color: "#607d8b"
    },
    {
      id: 8,
      name: "Cybersecurity & Digital Forensics",
      code: "CDF",
      icon: "",
      description: "Inatoa ujuzi wa kulinda mifumo na kuchunguza uhalifu wa kidijitali.",
      courses: ["Penetration Testing", "Digital Forensics", "Incident Response", "Security Auditing", "Cryptography"],
      students: "280+",
      lecturers: "7",
      labs: "2",
      color: "#f44336"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Header ya Ukurasa */}
      <div style={styles.header}>
        <div style={styles.headerIcon}></div>
        <h1 style={styles.title}>
          Idara za Masomo
          <span style={styles.titleHighlight}>Academic Departments</span>
        </h1>
        <p style={styles.subtitle}>
          MACSSOD ina idara 8 za kitaaluma zinazotoa elimu ya kisasa ya teknolojia na software development
        </p>
      </div>

      {/* Statistics za Chuo */}
      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <div style={styles.statIcon}></div>
          <div style={styles.statNumber}>8</div>
          <div style={styles.statLabel}>Idara za Kitaaluma</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statIcon}></div>
          <div style={styles.statNumber}>66+</div>
          <div style={styles.statLabel}>Wataalamu na Walimu</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statIcon}></div>
          <div style={styles.statNumber}>2,600+</div>
          <div style={styles.statLabel}>Wanafunzi Waliojiunga</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statIcon}></div>
          <div style={styles.statNumber}>23</div>
          <div style={styles.statLabel}>MaLab ya Kisasa</div>
        </div>
      </div>

      {/* Grid ya Idara */}
      <div style={styles.departmentsGrid}>
        {departments.map((dept, index) => (
          <div 
            key={dept.id} 
            style={styles.departmentCard}
            className="department-card"
            style={{...styles.departmentCard, animationDelay: `${index * 0.05}s`}}
          >
            <div style={{...styles.cardHeader, background: `linear-gradient(135deg, ${dept.color}, ${dept.color}dd)`}}>
              <span style={styles.cardIcon}>{dept.icon}</span>
              <span style={styles.cardCode}>{dept.code}</span>
            </div>
            
            <div style={styles.cardBody}>
              <h3 style={styles.deptName}>{dept.name}</h3>
              <p style={styles.deptDescription}>{dept.description}</p>
              
              <div style={styles.coursesList}>
                <div style={styles.coursesTitle}> Kozi Zinazotolewa:</div>
                <div style={styles.coursesGrid}>
                  {dept.courses.slice(0, 3).map((course, i) => (
                    <span key={i} style={styles.courseTag}>{course}</span>
                  ))}
                  {dept.courses.length > 3 && (
                    <span style={styles.moreTag}>+{dept.courses.length - 3} zaidi</span>
                  )}
                </div>
              </div>
              
              <div style={styles.statsGrid}>
                <div style={styles.statItem}>
                  <span style={styles.statValue}>{dept.students}</span>
                  <span style={styles.statLabelSmall}>Wanafunzi</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statValue}>{dept.lecturers}</span>
                  <span style={styles.statLabelSmall}>Walimu</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statValue}>{dept.labs}</span>
                  <span style={styles.statLabelSmall}>MaLab</span>
                </div>
              </div>
            </div>
            
            <div style={styles.cardFooter}>
              <button style={{...styles.viewButton, borderColor: dept.color, color: dept.color}}>
                Soma Zaidi →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Message ya Kuhimiza */}
      <div style={styles.encouragementBox}>
        <div style={styles.encouragementIcon}></div>
        <div style={styles.encouragementContent}>
          <h3>Chagua Idara Inayokufaa!</h3>
          <p>
            Kila idara ina mitaala ya kisasa, walimu bora, na maabara za kisasa za kompyuta. 
            Tunakuhakikishia elimu inayokidhi viwango vya kimataifa na ujuzi wa kutosha 
            kwa soko la ajira la teknolojia.
          </p>
          <div style={styles.encouragementButtons}>
            <button style={styles.primaryBtn}>Wasiliana Nasi</button>
            <button style={styles.secondaryBtn}>Pakua Brochure</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 MACSSOD | Maswanya Computer Science Software Developer College</p>
        <div style={styles.footerLinks}>
          <span>📞 +255 712 345 678</span>
          <span> admissions@macssod.ac.tz</span>
          <span> Dar es Salaam, Tanzania</span>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
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
        
        .department-card {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .department-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }
        
        .department-card:hover .card-header {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1400px',
    margin: '0 auto',
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    background: 'linear-gradient(135deg, #f8fafc 0%, #eef2f9 100%)',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
    padding: '40px 20px',
    background: 'linear-gradient(120deg, #0a1f3e 0%, #0b2b4f 100%)',
    borderRadius: '32px',
    color: 'white',
    boxShadow: '0 20px 35px -10px rgba(0,0,0,0.15)',
  },
  headerIcon: {
    fontSize: '56px',
    marginBottom: '15px',
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    letterSpacing: '-0.5px',
  },
  titleHighlight: {
    display: 'block',
    fontSize: '1rem',
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
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '50px',
  },
  statCard: {
    background: 'white',
    padding: '25px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
  },
  statIcon: {
    fontSize: '32px',
    marginBottom: '10px',
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
  departmentsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '50px',
  },
  departmentCard: {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  cardHeader: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  cardIcon: {
    fontSize: '32px',
  },
  cardCode: {
    fontSize: '14px',
    fontWeight: 'bold',
    background: 'rgba(255,255,255,0.2)',
    padding: '5px 12px',
    borderRadius: '20px',
  },
  cardBody: {
    padding: '20px',
  },
  deptName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#0a1f3e',
    marginBottom: '12px',
    lineHeight: '1.3',
  },
  deptDescription: {
    fontSize: '0.85rem',
    color: '#64748b',
    lineHeight: '1.5',
    marginBottom: '15px',
  },
  coursesList: {
    marginBottom: '15px',
  },
  coursesTitle: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: '#0a1f3e',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  coursesGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  courseTag: {
    fontSize: '0.7rem',
    background: '#f0f4f8',
    padding: '4px 10px',
    borderRadius: '12px',
    color: '#1e3c72',
  },
  moreTag: {
    fontSize: '0.7rem',
    color: '#4caf50',
    padding: '4px 10px',
  },
  statsGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '15px',
    paddingTop: '15px',
    borderTop: '1px solid #e2e8f0',
  },
  statItem: {
    textAlign: 'center',
  },
  statValue: {
    display: 'block',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#0a1f3e',
  },
  statLabelSmall: {
    fontSize: '0.7rem',
    color: '#64748b',
  },
  cardFooter: {
    padding: '15px 20px 20px',
    borderTop: '1px solid #e2e8f0',
  },
  viewButton: {
    width: '100%',
    padding: '10px',
    background: 'white',
    border: '2px solid',
    borderRadius: '12px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  encouragementBox: {
    background: 'linear-gradient(120deg, #0a1f3e 0%, #0b2b4f 100%)',
    borderRadius: '28px',
    padding: '35px',
    marginBottom: '40px',
    color: 'white',
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  encouragementIcon: {
    fontSize: '48px',
  },
  encouragementContent: {
    flex: 1,
  },
  encouragementButtons: {
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    background: '#4caf50',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  secondaryBtn: {
    background: 'transparent',
    color: 'white',
    padding: '12px 24px',
    border: '2px solid #4caf50',
    borderRadius: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center',
    padding: '30px 20px 20px',
    borderTop: '1px solid #cbd5e1',
    color: '#2d3748',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginTop: '15px',
    flexWrap: 'wrap',
    fontSize: '0.8rem',
  },
};

export default Departments;