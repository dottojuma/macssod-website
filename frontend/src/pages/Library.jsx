import React from 'react';

const Library = () => {
  // Picha za ukweli zinazoonyesha mazingira ya tech na chuo
  const gallery = [
    {
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600",
      title: "Wanafunzi Wakichapa Code (Practical Coding)",
      desc: "Mazingira yetu yanaruhusu wanafunzi kujifunza lugha za kisasa kama Python, JavaScript na kuunda mifumo."
    },
    {
      url: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600",
      title: "Maktaba Kuu ya Kidijitali (E-Library Portal)",
      desc: "Ufikiaji wa maelfu ya vitabu vya kiufundi, ripoti za tafiti na machapisho ya kiteknolojia duniani."
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
      title: "Kusimamia na Ku-run Mifumo (System Administration)",
      desc: "Wanafunzi wakifanya majaribio ya laivu ya jinsi ya kuendesha na kulinda mifumo mikubwa ya seva."
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600",
      title: "Siku ya Mahafali (Graduation Day Success)",
      desc: "Uthibitisho wa malengo kukamilika. Tunazalisha wabunifu na wahandisi wa programu wanaoenda kubadili soko."
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      {/* SEHEMU YA JUU YA UTANGULIZI */}
      <div style={{ textAlign: 'center', marginBottom: '5px' }}>
        <h1 style={{ color: '#003366', fontSize: '36px', fontWeight: 'bold' }}>MACSSOD DIGITAL LIBRARY & RESOURCE CENTER</h1>
        <p style={{ color: '#555', fontSize: '18px', maxWidth: '800px', margin: '15px auto', lineHeight: '1.6' }}>
          Karibu kwenye chemchemi ya maarifa ya MACSSOD. Maktaba yetu imesheheni mifumo ya kisasa inayowawezesha wanafunzi kusoma, kufanya tafiti, na kuwasha mifumo mbalimbali kwa vitendo.
        </p>
      </div>

      <hr style={{ border: 'none', borderTop: '2px solid #28a745', width: '100px', margin: '30px auto' }} />

      {/* VITU VYA KUPAKUA / E-RESOURCES LINKS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '5px' }}>
        <div style={{ background: '#003366', color: '#fff', padding: '20px', borderRadius: '6px', textAlign: 'center' }}>
          <h3>Books & Manuals</h3>
          <p style={{ fontSize: '14px', opacity: 0.9 }}>Vitabu vya Programing, Networks, na CyberSecurity.</p>
          <button style={{ background: '#28a745', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold' }}>Ingia Portal</button>
        </div>
        <div style={{ background: '#28a745', color: '#fff', padding: '20px', borderRadius: '6px', textAlign: 'center' }}>
          <h3>Past Papers & API Docs</h3>
          <p style={{ fontSize: '14px', opacity: 0.9 }}>Kagua mitihani iliyopita na miongozo ya kuunda mifumo.</p>
          <button style={{ background: '#003366', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold' }}>Fungua Repository</button>
        </div>
      </div>

      {/* RESOURCE GALLERY (PICHA NYINGI ZA LIFE CHUONI) */}
      <h2 style={{ color: '#003366', marginTop: '50px', marginBottom: '20px', borderLeft: '5px solid #28a745', paddingLeft: '10px' }}>Uhalisia wa Mazingira na Teknolojia ya MACSSOD</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '30px' }}>
        {gallery.map((item, index) => (
          <div key={index} style={{ background: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
            <img 
              src={item.url} 
              alt={item.title} 
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderBottom: '3px solid #28a745' }} 
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#003366', margin: '0 0 10px 0' }}>{item.title}</h3>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;