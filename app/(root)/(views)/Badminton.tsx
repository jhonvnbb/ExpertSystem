import React from 'react';
import FieldCard from './FieldCard';

const Badminton = [
  {
    name: 'Badminton Court A',
    location: 'Jakarta Selatan',
    courts: 4,
    price: 'Rp 200,000',
    img: '/badminton_court_a.jpg',
  },
  {
    name: 'Badminton Court B',
    location: 'Jakarta Barat',
    courts: 6,
    price: 'Rp 220,000',
    img: '/badminton_court_b.jpg',
  },
  {
    name: 'Badminton Court C',
    location: 'Jakarta Pusat',
    courts: 3,
    price: 'Rp 210,000',
    img: '/badminton_court_c.jpg',
  },
];

const BadmintonFields = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Badminton.map((field) => (
        <FieldCard key={field.name} field={field} />
      ))}
    </div>
  );
};

export default BadmintonFields;
