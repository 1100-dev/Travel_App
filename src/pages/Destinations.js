import React from 'react';

const Destinations = () => {
  const data = [
    { title: 'Hunza Valley', desc: 'Breathtaking mountain views and rivers.' },
    { title: 'Islamabad', desc: 'Modern capital with greenery and landmarks.' },
    { title: 'Lahore', desc: 'Rich cultural and historical sites.' },
    { title: 'Karachi', desc: 'Vibrant city by the Arabian Sea.' }
  ];

  return (
    <div>
      <h1>Destinations</h1>
      <div className="card-grid">
        {data.map((d,i) => (
          <div key={i} className="card">
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
            <button className="btn">View Packages</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
// import React, { useState } from 'react';

// const Destinations = () => {
//   const data = [
//     { 
//       title: 'Hunza Valley', 
//       desc: 'Breathtaking mountain views and rivers.',
//       packages: ['3-day Hunza Trip', 'Adventure Trekking', 'Photography Tour']
//     },
//     { 
//       title: 'Islamabad', 
//       desc: 'Modern capital with greenery and landmarks.',
//       packages: ['City Sightseeing', 'Museums Tour', 'Nature Walks']
//     },
//     { 
//       title: 'Lahore', 
//       desc: 'Rich cultural and historical sites.',
//       packages: ['Heritage Walk', 'Food Tour', 'Historical Monuments Tour']
//     },
//     { 
//       title: 'Karachi', 
//       desc: 'Vibrant city by the Arabian Sea.',
//       packages: ['Beach Day', 'Cultural Tour', 'Food Safari']
//     }
//   ];

//   const [visibleIndex, setVisibleIndex] = useState(null);

//   const togglePackages = (index) => {
//     if (visibleIndex === index) {
//       setVisibleIndex(null); // hide if already open
//     } else {
//       setVisibleIndex(index); // show packages for this destination
//     }
//   };

//   return (
//     <div>
//       <h1>Destinations</h1>
//       <div className="card-grid">
//         {data.map((d, i) => (
//           <div key={i} className="card">
//             <h3>{d.title}</h3>
//             <p>{d.desc}</p>
//             <button className="btn" onClick={() => togglePackages(i)}>
//               {visibleIndex === i ? 'Hide Packages' : 'View Packages'}
//             </button>

//             {visibleIndex === i && (
//               <ul className="packages">
//                 {d.packages.map((pkg, j) => (
//                   <li key={j}>{pkg}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Destinations;
