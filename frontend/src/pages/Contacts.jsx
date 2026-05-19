import React from 'react';

const Contacts = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#003366', borderBottom: '2px solid #003366', paddingBottom: '10px' }}>
        Wasiliana Nasi (Contacts)
      </h1>
      <p style={{ fontSize: '16px', color: '#555', marginTop: '10px' }}>
        Kama una maswali yoyote, maoni, au unahitaji msaada wa kiufundi kuhusu masomo na usajili, tafadhali wasiliana nasi kwa kutumia njia zifuatazo:
      </p>
      
      <div style={{ background: '#f4f7fa', padding: '25px', borderRadius: '8px', marginTop: '20px', borderLeft: '5px solid #28a745' }}>
        <p style={{ fontSize: '16px', margin: '10px 0' }}>
          <strong> Ofisi Zetu:</strong> Dar es Salaam, Tanzania (Kampasi Kuu)
        </p>
        <p style={{ fontSize: '16px', margin: '10px 0' }}>
          <strong> Namba ya Simu:</strong> +255 712 345 678 au +255 222 111 000
        </p>
        <p style={{ fontSize: '16px', margin: '10px 0' }}>
          <strong> Barua Pepe (Email):</strong> info@macssod.ac.tz
        </p>
        <p style={{ fontSize: '16px', margin: '10px 0' }}>
          <strong> Masaa ya Kazi:</strong> Jumatatu hadi Ijumaa (Saa 2:00 Asubuhi - Saa 10:00 Jioni)
        </p>
      </div>
    </div>
  );
};

export default Contacts;