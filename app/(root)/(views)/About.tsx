import React from 'react'

const About = () => {
  return (
    <section className='bg-[#eee] p-6' id='about'>
        <div className='container container mx-auto flex flex-col justify-center items-center px-4'>
            <div className='py-6'>
                <h1 className='text-4xl text-center font-extrabold text-gray-800'>
                    About Us
                </h1>
            </div>
            <div>
                <h1 className='text-2xl font-bold mb-4'>Apa itu Computer Science Showdown?</h1>
                <p className='text-justify'>Dalam rangka Dies Natalis Jurusan, kami ingin mengadakan serangkaian acara besar yang bersifat pengembangan keilmuan sebagai refleksi dari Visi dan Misi FMIPA yang menuntut kami untuk selalu menjujung tinggi tentang penelitian. Dies Natalis Jurusan Ilmu Komputer ini juga merupakan momentum untuk memberikan kesempatan kepada para pelajar dan umum di luar sana.</p>
                <p className='text-justify'>Maka melalui acara ini kami berupaya untuk mengoptimalkan kehidupan saintis dengan kreatifitas yang kaya akan imajinasi dalam memberikan terobosan - terobosan baru bagi perkembangan ilmu pengetahuan dan teknologi. Acara ini juga sebagai ajang motivasi bagi kami untuk menjadi lebih baik, dengan adanya tekad untuk maju dan terus memberikan manfaat bagi civitas akademik Jurusan Ilmu Komputer khususnya dan civitas FMIPA Universitas Lampung.</p>
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-between w-full mt-7'>
                <div className='md:w-1/2'>
                    <h1 className='text-2xl font-bold mb-4'>Keuntungan yang didapatkan jika mengikuti Computer Science Showdown</h1>
                    <div className='mb-10'>
                        <ul className='text-justify list-disc px-4'>
                            <li>Sertifikat</li>
                            <li>Menambah pengalaman di CV</li>
                            <li>Relasi dan Skill</li>
                            <li>Uang Tunai</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src="/himakom.png" alt="logo-himakom" className="max-w-full h-[150px]"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;