'use client';

import About from './(views)/About';
import BadmintonFields from './(views)/Badminton';
import Banner from './(views)/Banner';
import BasketballFields from './(views)/Basket';
import FutsalFields from './(views)/futsal';

export default function HomePage() {

  return (
    <div>
      <Banner />
      <About />
      <h1>Futsal</h1>
      <FutsalFields />

      <h1>Basket</h1>
      <BasketballFields />

      <h1>Badminton</h1>
      <BadmintonFields />
    </div>
  );
}
