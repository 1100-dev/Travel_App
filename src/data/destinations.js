// src/data/destinations.js

export const destinations = {
  Hunza: {
    desc: "Hunza Valley is a mountainous valley in Gilgit-Baltistan, famous for stunning landscapes, rivers, and local culture.",
    images: [
      { src: "/images/hunza1.webp", desc: "Majestic Hunza mountains." },
      { src: "/images/hunza2.webp", desc: "Local culture of Hunza." },
      { src: "/images/hunza3.webp", desc: "Scenery in Winters" }
    ],
    packages: [
      {
        name: "3-Day Hunza Adventure",
        price: "PKR 25,000",
        duration: "3 Days / 2 Nights",
        flight: {
          airline: "PIA",
          flightNumber: "PK123",
          departure: "Islamabad",
          arrival: "Gilgit",
          time: "09:00 AM"
        },
        hotel: {
          name: "Hunza Paradise Inn",
          address: "Karimabad, Hunza",
          pricePerNight: "PKR 5,000"
        }
      },
      {
        name: "5-Day Hunza & Karimabad Tour",
        price: "PKR 40,000",
        duration: "5 Days / 4 Nights",
        flight: {
          airline: "AirBlue",
          flightNumber: "AB456",
          departure: "Islamabad",
          arrival: "Gilgit",
          time: "10:30 AM"
        },
        hotel: {
          name: "Eagle's Nest Hunza",
          address: "Karimabad, Hunza",
          pricePerNight: "PKR 6,500"
        }
      }
    ]
  },

  Islamabad: {
    desc: "Islamabad is the capital city of Pakistan, known for its modern architecture, green hills, and peaceful environment.",
    images: [
      { src: "/images/islamabad1.jpg", desc: "Modern architecture of Islamabad." },
      { src: "/images/islamabad2.jpg", desc: "Green hills surrounding the city." },
      { src: "/images/islamabad3.jpg", desc: "Peaceful parks in the capital." }
    ],
    packages: [
      {
        name: "2-Day Islamabad City Tour",
        price: "PKR 15,000",
        duration: "2 Days / 1 Night",
        flight: null,
        hotel: {
          name: "Islamabad Marriott Hotel",
          address: "G-5, Islamabad",
          pricePerNight: "PKR 7,000"
        }
      },
      {
        name: "3-Day Islamabad & Murree Tour",
        price: "PKR 30,000",
        duration: "3 Days / 2 Nights",
        flight: null,
        hotel: {
          name: "Murree Hills Hotel",
          address: "Murree, Punjab",
          pricePerNight: "PKR 6,000"
        }
      }
    ]
  },

  Lahore: {
    desc: "Lahore is the cultural heart of Pakistan, with historical monuments, gardens, and vibrant bazaars.",
    images: [
      { src: "/images/lahore1.jpeg", desc: "Famous Lahore Fort." },
      { src: "/images/lahore2.jpeg", desc: "Shalimar Gardens." },
      { src: "/images/lahore3.jpg", desc: "Vibrant streets and bazaars." }
    ],
    packages: [
      {
        name: "2-Day Lahore Historical Tour",
        price: "PKR 20,000",
        duration: "2 Days / 1 Night",
        flight: null,
        hotel: {
          name: "Pearl Continental Lahore",
          address: "Shahrah-e-Quaid-e-Azam, Lahore",
          pricePerNight: "PKR 8,000"
        }
      },
      {
        name: "3-Day Lahore & Wagah Border Tour",
        price: "PKR 35,000",
        duration: "3 Days / 2 Nights",
        flight: null,
        hotel: {
          name: "Avari Lahore",
          address: "Mall Road, Lahore",
          pricePerNight: "PKR 7,500"
        }
      }
    ]
  },

  Swat: {
    desc: "Swat Valley is known as the 'Switzerland of Pakistan', with lush valleys, rivers, and mountains.",
    images: [
      { src: "/images/swat1.jpeg", desc: "The Scenery of Swat Valley in Winters." },
      { src: "/images/swat2.jpeg", desc: "Swat Museum." },
      { src: "/images/swat3.webp", desc: "Rivers flowing through picturesque landscapes." }
    ],
    packages: [
      {
        name: "3-Day Swat Adventure",
        price: "PKR 25,000",
        duration: "3 Days / 2 Nights",
        flight: {
          airline: "PIA",
          flightNumber: "PK789",
          departure: "Islamabad",
          arrival: "Mingora",
          time: "08:00 AM"
        },
        hotel: {
          name: "Swat Valley Resort",
          address: "Mingora, Swat",
          pricePerNight: "PKR 5,500"
        }
      },
      {
        name: "5-Day Swat & Malam Jabba Tour",
        price: "PKR 45,000",
        duration: "5 Days / 4 Nights",
        flight: {
          airline: "AirBlue",
          flightNumber: "AB321",
          departure: "Islamabad",
          arrival: "Mingora",
          time: "11:00 AM"
        },
        hotel: {
          name: "Malam Jabba Hotel",
          address: "Malam Jabba, Swat",
          pricePerNight: "PKR 6,500"
        }
      }
    ]
  }
};
