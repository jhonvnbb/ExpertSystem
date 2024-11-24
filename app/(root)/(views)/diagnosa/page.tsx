export default function Diagnosa() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center text-gray-800">
          <h1 className="text-4xl font-bold mb-4 text-indigo-600">Diagnosa</h1>
          <p className="text-lg mb-6">
            Selamat datang di halaman Diagnosa! 
            Anda dapat memulai proses diagnosa untuk mengetahui solusi atas masalah yang Anda hadapi.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
            Mulai Diagnosa
          </button>
        </div>
      </div>
    );
  }
  