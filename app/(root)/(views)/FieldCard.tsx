import React from 'react';
import { VscLocation, VscChevronRight } from 'react-icons/vsc';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

type Field = {
  name: string;
  location: string;
  courts: number;
  price: string;
  img: string;
};

interface FieldCardProps {
  field: Field;
}

const FieldCard: React.FC<FieldCardProps> = ({ field }) => {
  const router = useRouter();
  const { isSignedIn } = useUser();

  const handleButtonClick = () => {
    if (isSignedIn) {
      router.push(`/booking/${field.name}`);
    } else {
      router.push('/sign-in');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="relative w-full h-64">
        <Image src={field.img} alt={field.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{field.name}</h3>
        <p className="text-gray-700 flex items-center mt-2">
          <VscLocation className="mr-2 text-red-500" />
          {field.location}
        </p>
        <p className="text-gray-700">{field.courts} Lapangan</p>
        <p className="text-green-500 font-semibold mt-2">Harga mulai {field.price}</p>
        <button
          onClick={handleButtonClick}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
        >
          Lihat Detail <VscChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default FieldCard;
