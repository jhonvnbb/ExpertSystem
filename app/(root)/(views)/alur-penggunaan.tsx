import Image from "next/image";

export default function AlurPenggunaan() {
  const steps = [
    {
      title: "Login",
      description:
        "Pengguna harus melakukan login sebelum melangkah ke tahap selanjutnya, dan jika belum memiliki akun akan diarahkan ke menu registrasi.",
      imgSrc: "/img/login.jpg",
    },
    {
      title: "Test Gejala Pasien",
      description:
        "Dalam tahap ini pengguna akan diberikan beberapa pertanyaan terkait dengan gejala yang dialami.",
      imgSrc: "/img/login.jpg",
    },
    {
      title: "Hasil dan Solusi",
      description:
        "Tahap ini merupakan tahap akhir dimana setelah melaksanakan test gejala pengguna akan diberikan hasil test berupa nama penyakit dan solusinya.",
      imgSrc: "/img/login.jpg",
    },
  ];

  return (
    <div
      className="bg-gradient-to-l from-gray-100 via-gray-200 to-gray-300 py-16 px-6 flex flex-col items-center py-12 px-4"
      id="alur-penggunaan"
    >
      <div className="relative flex flex-col items-center justify-center mt-4 mb-10">
        <h1 className="absolute text-6xl md:text-8xl font-extrabold text-gray-300 select-none">
          Alur
        </h1>
        <h1 className="relative text-2xl md:text-4xl font-extrabold text-gray-800">
          Alur
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4">
              <Image
                src={step.imgSrc}
                alt={step.title}
                width={128}
                height={128}
                className="h-64 w-64 rounded-md"
                priority
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              {step.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
