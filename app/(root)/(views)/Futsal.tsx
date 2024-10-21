import React from 'react';
import FieldCard from './FieldCard';

const Futsal = [
  {
    name: 'Futsal Court A',
    location: 'Jakarta Selatan',
    courts: 1,
    price: 'Rp 300,000',
    img: '/futsal_court_a.jpg',
  },
  {
    name: 'Futsal Court B',
    location: 'Jakarta Barat',
    courts: 2,
    price: 'Rp 350,000',
    img: '/futsal_court_b.jpg',
  },
  {
    name: 'Futsal Court C',
    location: 'Jakarta Pusat',
    courts: 1,
    price: 'Rp 320,000',
    img: '/futsal_court_c.jpg',
  },
];

const FutsalFields = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Futsal.map((field) => (
        <FieldCard key={field.name} field={field} />
      ))}
    </div>
  );
};

export default FutsalFields;
