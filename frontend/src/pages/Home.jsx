import React, { useState, useEffect } from 'react';

const Home = () => {
  // Data za Carousel / Slider
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200",
      title: "Karibu MACSSOD",
      subtitle: "Centers of Excellence in Computer Science & Software Development"
    },
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200",
      title: "Campus Life",
      subtitle: "Mazingira Bora ya Kujifunza na Kubuni"
    },
    {
      url: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1200",
      title: "Graduation Ceremony",
      subtitle: "Tunawakabidhi Wasanifu wa Programu Sokoni"
    },
    {
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
      title: "Modern Library",
      subtitle: "Vitabu vya Kisasa na E-Resources"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Data za Gallery ya Picha
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600",
      title: "Computer Lab",
      description: "Wanafunzi wakifanya mazoezi katika maabara ya kisasa ya kompyuta"
    },
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600",
      title: "Smart Classroom",
      description: "Madarasa yenye Smart TV na Projectors za kisasa"
    },
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600",
      title: "Campus Building",
      description: "Majengo ya kisasa yenye mazingira safi na ya kuvutia"
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600",
      title: "Graduation Day",
      description: "Sherehe za kuhitimu wanafunzi wetu"
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
      title: "Group Discussion",
      description: "Wanafunzi wakijadili kwenye vikundi vya utafiti"
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600",
      title: "International Students",
      description: "Wanafunzi kutoka nchi mbalimbali wakijifunza pamoja"
    },
    {
      url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600",
      title: "Tech Event",
      description: "Semina za teknolojia na wataalamu kutoka nje"
    },
    {
      url: "https://images.unsplash.com/photo-1564069114553-7215e1ff1897?q=80&w=600",
      title: "Library",
      description: "Maktaba ya kisasa yenye vitabu vya dijitali"
    }
  ];

  // Data za Hostels & Hotels
  const accommodationData = [
    {
      img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600",
      title: "Modern Hostels",
      desc: "Hostels zenye ulinzi wa 24/7, Wi-Fi high speed, maji safi na viyoyozi",
      features: ["24/7 Security", "Free Wi-Fi", "Air Conditioning", "Study Rooms"]
    },
    {
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600",
      title: "Campus Cafeteria",
      desc: "Vyakula vya afya, bei nafuu, na mazingira safi ya kula",
      features: ["Healthy Meals", "Student Discount", "Clean Environment", "Variety Menu"]
    },
    {
      img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600",
      title: "Nearby Hotels",
      desc: "Hoteli za karibu kwa wageni na wazazi wanaotembelea",
      features: ["Affordable Rates", "Close to Campus", "Quality Service", "Free Parking"]
    }
  ];

  // Data za Achievements/Statistics
  const stats = [
    { number: "2,600+", label: "Wanafunzi", icon: "" },
    { number: "95%", label: "Employment Rate", icon: "" },
    { number: "66+", label: "Expert Lecturers", icon: "" },
    { number: "23", label: "Modern Labs", icon: "" },
    { number: "50+", label: "Industry Partners", icon: "" },
    { number: "15+", label: "Awards Won", icon: "" }
  ];

  // Data za Student Projects
  const projects = [
    { name: "AI-Powered Healthcare System", icon: "", tech: "Python, TensorFlow" },
    { name: "E-Commerce Mobile App", icon: "", tech: "Flutter, Node.js" },
    { name: "Blockchain Voting System", icon: "", tech: "Solidity, Web3" },
    { name: "Smart Campus IoT", icon: "", tech: "Arduino, MQTT" },
    { name: "CyberSecurity Firewall", icon: "", tech: "Python, Django" },
    { name: "Learning Management System", icon: "", tech: "React, Laravel" }
  ];

  // Data za Testimonials
  const testimonials = [
    {
      name: "John Mbwambo",
      role: "Software Engineer at Microsoft",
      text: "MACSSOD ilinipa msingi imara wa programming na problem-solving skills. Leo ninafanya kazi na timu za kimataifa.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Kilambo",
      role: "Full Stack Developer",
      text: "Mazingira ya kisasa na walimu waliobobea yalinifanya nipende teknolojia. Nashukuru kwa elimu bora.",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Dr. Hamisi Juma",
      role: "Tech Entrepreneur",
      text: "Nilianzisha kampuni yangu ya software baada ya kuhitimu. MACSSOD inaandaa viongozi wa teknolojia.",
      img: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  return (
    <div style={styles.container}>
      {/* CAROUSEL / SLIDER */}
      <div style={styles.carouselContainer}>
        <button onClick={prevSlide} style={styles.carouselBtn}>❮</button>
        <div style={styles.carouselSlide}>
          <div
            style={{
              ...styles.carouselImage,
              backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.7), rgba(0, 30, 60, 0.7)), url("${carouselImages[currentSlide].url}")`
            }}
          >
            <div style={styles.carouselContent}>
              <h1 style={styles.carouselTitle}>{carouselImages[currentSlide].title}</h1>
              <p style={styles.carouselSubtitle}>{carouselImages[currentSlide].subtitle}</p>
              <button style={styles.ctaButton}>Apply Now →</button>
            </div>
          </div>
        </div>
        <button onClick={nextSlide} style={styles.carouselBtn}>❯</button>
        <div style={styles.carouselDots}>
          {carouselImages.map((_, idx) => (
            <div
              key={idx}
              style={{
                ...styles.dot,
                backgroundColor: idx === currentSlide ? '#4caf50' : 'rgba(255,255,255,0.5)'
              }}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>

      {/* WELCOME SECTION */}
      <div style={styles.welcomeSection}>
        <div style={styles.welcomeContent}>
          <h2 style={styles.sectionTitle}>Karibu <span style={styles.highlight}>MACSSOD</span></h2>
          <p style={styles.welcomeText}>
            Maswanya Computer Science Software Developer College (MACSSOD) ni chuo cha kisasa kinachotoa elimu ya 
            ubora katika fani za Teknolojia, Programu, na Ubunifu. Tunawaandaa wanafunzi kuwa wasanifu wa programu 
            waliobobea na wenye uwezo wa kutatua changamoto za kisasa za kiteknolojia.
          </p>
          <div style={styles.statsRow}>
            {stats.map((stat, idx) => (
              <div key={idx} style={styles.statItem}>
                <div style={styles.statIcon}>{stat.icon}</div>
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY SECTION - Picha Zinazovutia */}
      <div style={styles.gallerySection}>
        <h2 style={styles.sectionTitle}>Mazingira na Maisha ya Chuoni</h2>
        <p style={styles.sectionSubtitle}>Angalia picha za kweli za wanafunzi, madarasa, na mazingira yetu</p>
        <div style={styles.galleryGrid}>
          {galleryImages.map((img, idx) => (
            <div key={idx} style={styles.galleryCard}>
              <img src={img.url} alt={img.title} style={styles.galleryImg} />
              <div style={styles.galleryOverlay}>
                <h4 style={styles.galleryTitle}>{img.title}</h4>
                <p style={styles.galleryDesc}>{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ACCOMMODATION - HOSTELS & HOTELS */}
      <div style={styles.accommodationSection}>
        <h2 style={{...styles.sectionTitle, color: 'white'}}> Malazi na Chakula</h2>
        <p style={{...styles.sectionSubtitle, color: 'rgba(255,255,255,0.9)'}}>Hostels, Cafeteria, na Hotels za karibu na chuo</p>
        <div style={styles.accommodationGrid}>
          {accommodationData.map((item, idx) => (
            <div key={idx} style={styles.accommodationCard}>
              <img src={item.img} alt={item.title} style={styles.accommodationImg} />
              <div style={styles.accommodationContent}>
                <h3 style={styles.accommodationTitle}>{item.title}</h3>
                <p style={styles.accommodationDesc}>{item.desc}</p>
                <div style={styles.featureTags}>
                  {item.features.map((feature, i) => (
                    <span key={i} style={styles.featureTag}>✓ {feature}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STUDENT PROJECTS SECTION */}
      <div style={styles.projectsSection}>
        <h2 style={styles.sectionTitle}> Mifumo Iliyotengenezwa na Wanafunzi</h2>
        <p style={styles.sectionSubtitle}>Angalia mifano ya projects za wanafunzi wetu</p>
        <div style={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={idx} style={styles.projectCard}>
              <div style={styles.projectIcon}>{project.icon}</div>
              <h4 style={styles.projectName}>{project.name}</h4>
              <p style={styles.projectTech}>{project.tech}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GRADUATES & SUCCESS STORIES */}
      <div style={styles.graduatesSection}>
        <div style={styles.graduatesContent}>
          <h2 style={{...styles.sectionTitle, color: 'white'}}>🎓 Wahitimu Wetu Wameshinda Tuzo</h2>
          <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '20px'}}>
            Zaidi ya 95% ya wahitimu wetu wanapata ajira ndani ya mwaka mmoja baada ya kuhitimu.
            Wanafanya kazi makampuni makubwa kama Microsoft, Google, na wengine wameanzisha biashara zao.
          </p>
          <div style={styles.graduatesStats}>
            <div style={styles.gradStat}> 15+ Awards</div>
            <div style={styles.gradStat}> 10+ Countries</div>
            <div style={styles.gradStat}>95% Employed</div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>💬 Wanachosema Wanafunzi Wetu</h2>
        <div style={styles.testimonialsGrid}>
          {testimonials.map((test, idx) => (
            <div key={idx} style={styles.testimonialCard}>
              <img src={test.img} alt={test.name} style={styles.testimonialImg} />
              <p style={styles.testimonialText}>"{test.text}"</p>
              <h4 style={styles.testimonialName}>{test.name}</h4>
              <p style={styles.testimonialRole}>{test.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TECHNOLOGY & ENVIRONMENT */}
      <div style={styles.techSection}>
        <div style={styles.techGrid}>
          <div style={styles.techItem}>
            <div style={styles.techIcon}></div>
            <h3>Maabara za Kisasa</h3>
            <p>Kompyuta za mwisho (latest specs), fiber internet, na software za kitaalamu</p>
          </div>
          <div style={styles.techItem}>
            <div style={styles.techIcon}></div>
            <h3>Maktaba ya Dijitali</h3>
            <p>Vitabu vya kisasa vya programming, research papers, na online resources</p>
          </div>
          <div style={styles.techItem}>
            <div style={styles.techIcon}></div>
            <h3>Mazingira ya Kimataifa</h3>
            <p>Wanafunzi kutoka nchi mbalimbali, collaboration na chuo cha nje</p>
          </div>
          <div style={styles.techItem}>
            <div style={styles.techIcon}></div>
            <h3>Innovation Hub</h3>
            <p>Kituo cha ubunifu na kutengeneza projects za kibiashara</p>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div style={styles.ctaSection}>
        <h2 style={{color: 'white', fontSize: '2rem'}}>Tayari Kuanza Safari Yako ya Teknolojia?</h2>
        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '25px'}}>Jiunge na MACSSOD leo na uwe sehemu ya wasanifu wa programu bora Afrika</p>
        <div style={styles.ctaButtons}>
          <button style={styles.ctaPrimary}>Apply Now</button>
          <button style={styles.ctaSecondary}>Download Brochure</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerTitle}>MACSSOD</h3>
            <p>Maswanya Computer Science Software Developer College</p>
            <p>📞 +255 712 345 678</p>
            <p>✉️ info@macssod.ac.tz</p>
            <p> Dar es Salaam, Tanzania</p>
          </div>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerTitle}>Quick Links</h3>
            <p> Admissions</p>
            <p> Courses</p>
            <p> Departments</p>
            <p> Contact Us</p>
          </div>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerTitle}>Follow Us</h3>
            <p>📘 Facebook</p>
            <p>🐦 Twitter</p>
            <p>📸 Instagram</p>
            <p>💼 LinkedIn</p>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>© 2025 MACSSOD | Building the Next Generation of Software Developers</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    overflowX: 'hidden',
  },
  carouselContainer: {
    position: 'relative',
    height: '85vh',
    overflow: 'hidden',
  },
  carouselSlide: {
    height: '100%',
  },
  carouselImage: {
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease',
  },
  carouselContent: {
    textAlign: 'center',
    color: 'white',
    padding: '20px',
  },
  carouselTitle: {
    fontSize: '3rem',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  },
  carouselSubtitle: {
    fontSize: '1.3rem',
    marginBottom: '30px',
    opacity: 0.95,
  },
  carouselBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    padding: '16px 22px',
    cursor: 'pointer',
    fontSize: '20px',
    borderRadius: '50%',
    zIndex: 10,
    transition: '0.3s',
  },
  carouselDots: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '12px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: '0.3s',
  },
  ctaButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    padding: '14px 32px',
    fontSize: '1.1rem',
    borderRadius: '40px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'transform 0.2s',
  },
  welcomeSection: {
    padding: '60px 20px',
    background: 'linear-gradient(135deg, #f8fafc 0%, #eef2f9 100%)',
  },
  welcomeContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2.2rem',
    color: '#0a1f3e',
    textAlign: 'center',
    marginBottom: '20px',
  },
  highlight: {
    color: '#4caf50',
  },
  welcomeText: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#334155',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 40px',
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '25px',
    marginTop: '30px',
  },
  statItem: {
    textAlign: 'center',
    padding: '20px',
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  },
  statIcon: {
    fontSize: '32px',
    marginBottom: '8px',
  },
  statNumber: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#0a1f3e',
  },
  statLabel: {
    fontSize: '0.8rem',
    color: '#64748b',
  },
  gallerySection: {
    padding: '60px 20px',
    background: 'white',
  },
  sectionSubtitle: {
    textAlign: 'center',
    color: '#64748b',
    marginBottom: '40px',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '25px',
    maxWidth: '1300px',
    margin: '0 auto',
  },
  galleryCard: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    height: '250px',
  },
  galleryImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s',
  },
  galleryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
    padding: '20px',
    color: 'white',
  },
  galleryTitle: {
    margin: 0,
    fontSize: '1rem',
  },
  galleryDesc: {
    fontSize: '0.8rem',
    marginTop: '5px',
  },
  accommodationSection: {
    padding: '60px 20px',
    background: 'linear-gradient(120deg, #0a1f3e 0%, #0b2b4f 100%)',
  },
  accommodationGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
  },
  accommodationCard: {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  accommodationImg: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  accommodationContent: {
    padding: '20px',
  },
  accommodationTitle: {
    color: '#0a1f3e',
    marginBottom: '10px',
  },
  accommodationDesc: {
    color: '#64748b',
    marginBottom: '15px',
  },
  featureTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  featureTag: {
    fontSize: '0.7rem',
    background: '#e8f5e9',
    color: '#2e7d32',
    padding: '4px 10px',
    borderRadius: '12px',
  },
  projectsSection: {
    padding: '60px 20px',
    background: '#f8fafc',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  projectCard: {
    background: 'white',
    padding: '25px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  },
  projectIcon: {
    fontSize: '40px',
    marginBottom: '10px',
  },
  projectName: {
    color: '#0a1f3e',
    marginBottom: '8px',
  },
  projectTech: {
    fontSize: '0.8rem',
    color: '#4caf50',
  },
  graduatesSection: {
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #1e3c72, #0f2a4a)',
    color: 'white',
  },
  graduatesContent: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  },
  graduatesStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '30px',
    flexWrap: 'wrap',
  },
  gradStat: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    background: 'rgba(255,255,255,0.1)',
    padding: '10px 20px',
    borderRadius: '40px',
  },
  testimonialsSection: {
    padding: '60px 20px',
    background: 'white',
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  testimonialCard: {
    background: '#f8fafc',
    padding: '30px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  },
  testimonialImg: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  testimonialText: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#334155',
    marginBottom: '15px',
    fontStyle: 'italic',
  },
  testimonialName: {
    color: '#0a1f3e',
    marginBottom: '5px',
  },
  testimonialRole: {
    fontSize: '0.8rem',
    color: '#4caf50',
  },
  techSection: {
    padding: '60px 20px',
    background: '#eef2f9',
  },
  techGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  techItem: {
    textAlign: 'center',
    padding: '30px',
    background: 'white',
    borderRadius: '20px',
  },
  techIcon: {
    fontSize: '48px',
    marginBottom: '15px',
  },
  ctaSection: {
    padding: '80px 20px',
    background: 'linear-gradient(120deg, #4caf50, #2e7d32)',
    textAlign: 'center',
    color: 'white',
  },
  ctaButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  ctaPrimary: {
    backgroundColor: 'white',
    color: '#2e7d32',
    border: 'none',
    padding: '14px 32px',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '40px',
    cursor: 'pointer',
  },
  ctaSecondary: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '14px 32px',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '40px',
    cursor: 'pointer',
  },
  footer: {
    background: '#0a1f3e',
    color: 'white',
    padding: '40px 20px 20px',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    marginBottom: '30px',
  },
  footerColumn: {
    lineHeight: '1.8',
  },
  footerTitle: {
    marginBottom: '15px',
    fontSize: '1.2rem',
  },
  footerBottom: {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
};

export default Home;