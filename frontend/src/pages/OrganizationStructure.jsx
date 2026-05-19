import React from 'react';

const OrganizationStructure = () => {
  return (
    <div style={styles.container}>
      {/* Header ya Chuo */}
      <div style={styles.header}>
        <h1 style={styles.title}>
          MASWANYA <span style={styles.highlight}>COMPUTER SCIENCE</span> SOFTWARE DEVELOPER COLLEGE
        </h1>
        <p style={styles.subtitle}>MACSSOD | Muundo wa Kiutawala na Uendeshaji</p>
      </div>

      {/* Muundo mkuu wa shirika */}
      <div style={styles.orgChart}>
        {/* Bodi ya Wakurugenzi */}
        <div style={styles.cardLevel1}>
          <div style={styles.icon}></div>
          <h3 style={styles.level1Title}>Bodi ya Wakurugenzi</h3>
          <p style={styles.level1Sub}>Board of Directors</p>
        </div>

        <div style={styles.arrowDown}>▼</div>

        {/* Mkuu wa Chuo */}
        <div style={styles.cardLevel2}>
          <div style={styles.icon}></div>
          <h3 style={styles.level2Title}>Mkuu wa Chuo</h3>
          <p style={styles.level2Sub}>Principal / CEO</p>
        </div>

        <div style={styles.arrowDown}>▼</div>

        {/* Makamu wawili */}
        <div style={styles.twoColumns}>
          <div style={styles.cardLevel3}>
            <div style={styles.icon}></div>
            <h4>Makamu Mkuu</h4>
            <p>Taaluma & Utafiti</p>
            <small>Deputy Principal (Academic & Research)</small>
          </div>
          <div style={styles.cardLevel3}>
            <div style={styles.icon}></div>
            <h4>Makamu Mkuu</h4>
            <p>Utawala & Fedha</p>
            <small>Deputy Principal (Admin & Finance)</small>
          </div>
        </div>

        <div style={styles.arrowDown}>▼</div>

        {/* Idara chini ya Makamu wa Taaluma */}
        <div style={styles.sectionTitle}> Taaluma (Academic)</div>
        <div style={styles.fourColumns}>
          <div style={styles.cardLevel4}> Computer Science</div>
          <div style={styles.cardLevel4}> Software Engineering</div>
          <div style={styles.cardLevel4}> IT & Networking</div>
          <div style={styles.cardLevel4}> Data Science</div>
        </div>

        <div style={styles.spacer} />

        {/* Idara chini ya Makamu wa Utawala */}
        <div style={styles.sectionTitle}> Utawala (Administration)</div>
        <div style={styles.threeColumns}>
          <div style={styles.cardLevel4}> Fedha & HR</div>
          <div style={styles.cardLevel4}> Masuala ya Wanafunzi</div>
          <div style={styles.cardLevel4}> Miundombinu & Teknolojia</div>
        </div>
      </div>

      <footer style={styles.footer}>
        <p> MACSSOD | Kuunda Wasanifu wa Programu wa Kizazi Kipya</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', 'Roboto', 'Fira Code', monospace",
    background: 'linear-gradient(135deg, #f5f7fc 0%, #eef2f7 100%)',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    padding: '30px 20px',
    background: 'linear-gradient(120deg, #0a1f3e 0%, #0b2b4f 100%)',
    borderRadius: '32px',
    color: 'white',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '12px',
    letterSpacing: '-0.5px',
  },
  highlight: {
    color: '#4caf50',
    background: 'rgba(76, 175, 80, 0.15)',
    padding: '4px 12px',
    borderRadius: '40px',
    display: 'inline-block',
  },
  subtitle: {
    fontSize: '1rem',
    opacity: 0.9,
    fontWeight: 300,
  },
  orgChart: {
    background: 'white',
    padding: '40px 30px',
    borderRadius: '40px',
    boxShadow: '0 20px 35px -10px rgba(0,0,0,0.1)',
  },
  cardLevel1: {
    background: 'linear-gradient(145deg, #1e3c72, #0f2a4a)',
    color: 'white',
    padding: '24px',
    borderRadius: '28px',
    textAlign: 'center',
    marginBottom: '15px',
    boxShadow: '0 15px 25px rgba(0,0,0,0.2)',
  },
  cardLevel2: {
    background: 'linear-gradient(145deg, #2b4f8c, #1d3a66)',
    color: 'white',
    padding: '22px',
    borderRadius: '28px',
    textAlign: 'center',
    marginBottom: '15px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
  },
  cardLevel3: {
    background: '#f0f7ff',
    padding: '20px',
    borderRadius: '24px',
    textAlign: 'center',
    width: '45%',
    boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
    border: '1px solid #cde3ff',
    transition: 'transform 0.2s ease',
  },
  cardLevel4: {
    background: '#ffffff',
    padding: '14px 10px',
    borderRadius: '20px',
    textAlign: 'center',
    fontWeight: '500',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    border: '1px solid #e2edff',
    fontSize: '0.9rem',
  },
  twoColumns: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  fourColumns: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  threeColumns: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#0f2a4a',
    margin: '30px 0 15px 0',
    borderLeft: '6px solid #4caf50',
    paddingLeft: '18px',
  },
  arrowDown: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#1e3c72',
    margin: '8px 0',
    fontWeight: 'bold',
  },
  spacer: {
    marginTop: '10px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    padding: '20px',
    color: '#2c3e66',
    fontWeight: '500',
    borderTop: '1px solid #dce5f2',
  },
  icon: {
    fontSize: '32px',
    marginBottom: '8px',
  },
  level1Title: {
    fontSize: '1.4rem',
    marginBottom: '5px',
  },
  level1Sub: {
    fontSize: '0.85rem',
    opacity: 0.8,
  },
  level2Title: {
    fontSize: '1.3rem',
  },
  level2Sub: {
    fontSize: '0.85rem',
    opacity: 0.8,
  },
};

export default OrganizationStructure;