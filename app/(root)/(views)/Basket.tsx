import React from 'react';
import FieldCard from './FieldCard';

const Basket = [
  {
    name: 'Basketball Court A',
    location: 'Jakarta Selatan',
    courts: 2,
    price: 'Rp 500,000',
    img: '/basketball_court_a.jpg',
  },
  {
    name: 'Basketball Court B',
    location: 'Jakarta Barat',
    courts: 3,
    price: 'Rp 550,000',
    img: '/basketball_court_b.jpg',
  },
  {
    name: 'Basketball Court C',
    location: 'Jakarta Pusat',
    courts: 1,
    price: 'Rp 450,000',
    img: '/basketball_court_c.jpg',
  },
];

const BasketballFields = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Basket.map((field) => (
        <FieldCard key={field.name} field={field} />
      ))}
    </div>
  );
};

export default BasketballFields;
