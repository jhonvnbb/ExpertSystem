import Image from "next/image";

export default function About() {
  const gambar = {
    title: "About Image",
    imgSrc: "/img/about.jpg",
  };

  return (
    <div
      className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-16 px-6"
      id="about"
    >
      <div className="relative flex flex-col items-center justify-center mt-4 mb-10">
        <h1 className="absolute text-6xl md:text-8xl font-extrabold text-gray-300 select-none">
          About
        </h1>
        <h1 className="relative text-2xl md:text-4xl font-extrabold text-gray-800">
          About
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            vitae aliquam laborum dolores aliquid exercitationem nisi aperiam
            repudiandae ipsam vero magnam excepturi id, corporis illo amet
            perspiciatis sequi mollitia, sed soluta omnis odio voluptatum quia
            esse numquam! Labore, velit eum? Nulla quod molestiae similique
            reiciendis atque laudantium impedit hic debitis!
          </p>
          <br/>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            vitae aliquam laborum dolores aliquid exercitationem nisi aperiam
            repudiandae ipsam vero magnam excepturi id.
          </p>

        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src={gambar.imgSrc}
            alt={gambar.title}
            width={500}
            height={500}
            className="w-full h-72 md:h-96 rounded-lg object-cover shadow-md"
            priority
          />
        </div>
      </div>
    </div>
  );
}
