'use client';

import About from './(views)/About';
import AlurPenggunaan from './(views)/alur-penggunaan';
import Banner from './(views)/Banner';

export default function HomePage() {

  return (
    <div>
      <Banner />
      <About />
      <AlurPenggunaan />
    </div>
  );
}
