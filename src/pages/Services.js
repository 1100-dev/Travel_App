// import React from 'react';

// const Services = () => {
//   const services = [
//     { name: 'Flight Booking', desc: 'Find best flight deals and itineraries.' },
//     { name: 'Hotel Booking', desc: 'Curated hotels from budget to luxury.' },
//     { name: 'Guided Tours', desc: 'Local guides and curated experiences.' },
//     { name: 'Custom Packages', desc: 'Tailor-made holiday plans.' }
//   ];

//   return (
//     <div>
//       <h1>Our Services</h1>
//       <div className="card-grid">
//         {services.map((s,i)=> (
//           <div key={i} className="card">
//             <h3>{s.name}</h3>
//             <p>{s.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;
import React from 'react';

const Services = () => {
  const services = [
    { name: 'Flight Booking', desc: 'Find best flight deals and itineraries.', color: '#f44336' },
    { name: 'Hotel Booking', desc: 'Curated hotels from budget to luxury.', color: '#2196f3' },
    { name: 'Guided Tours', desc: 'Local guides and curated experiences.', color: '#ff9800' },
    { name: 'Custom Packages', desc: 'Tailor-made holiday plans.', color: '#4caf50' },
  ];

  return (
    <div className="services-section">
      <h1 className="section-title">Our Services</h1>
      <div className="card-grid">
        {services.map((s, i) => (
          <div key={i} className="card">
            <div className="icon" style={{ background: s.color }}>
              {s.name.charAt(0)}
            </div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <button className="btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
